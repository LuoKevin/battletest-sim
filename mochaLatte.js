const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');
//new instance of Mocha
const mocha = new Mocha();

//hardcoded test directory
const testDir = 'test'

// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function (file) {
    // Only keep the .js files
    return file.substr(-3) === '.js';

}).forEach(function (file) {
    mocha.addFile(
        path.join(testDir, file)
    );
});

const stats = {};
// const oldWrite = process.stdout.write;
// process.stdout.write = function (txt) {
//     stats = JSON.parse(txt); // write invoked in one gulp.
// };


mocha.
    reporter("json").
    run(function (failures) {
        process.on('exit', function () {
            // process.stdout.write = oldWrite;
            console.log(14);
            // var s = report.stats;
            // console.log("percentage: " + s.passes / (s.passes + s.failures));
            process.exit(failures > 0 ? 1 : 0);
        });
    });