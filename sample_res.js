const res = {
    Response {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  res: IncomingMessage {
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: true,
      endEmitted: true,
      reading: false,
      sync: true,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      paused: false,
      emitClose: true,
      autoDestroy: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: true,
      decoder: [StringDecoder],
      encoding: 'utf8'
    },
    readable: false,
    _events: [Object: null prototype] {
      end: [Array],
      data: [Array],
      error: [Array],
      close: [Function: bound emit]
    },
    _eventsCount: 4,
    _maxListeners: undefined,
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(asyncId)]: 26,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    connection: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(asyncId)]: 26,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    headers: {
      'x-powered-by': 'Express',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '17',
      etag: 'W/"11-/PB6a5KBMZp5rPw7mRHoH4RAsik"',
      date: 'Sat, 11 Apr 2020 17:55:02 GMT',
      connection: 'close'
    },
    rawHeaders: [
      'X-Powered-By',
      'Express',
      'Content-Type',
      'application/json; charset=utf-8',
      'Content-Length',
      '17',
      'ETag',
      'W/"11-/PB6a5KBMZp5rPw7mRHoH4RAsik"',
      'Date',
      'Sat, 11 Apr 2020 17:55:02 GMT',
      'Connection',
      'close'
    ],
    trailers: {},
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '',
    method: null,
    statusCode: 200,
    statusMessage: 'OK',
    client: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(asyncId)]: 26,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _consuming: false,
    _dumped: false,
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 17,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      socket: [Socket],
      connection: [Socket],
      _header: 'GET /stockdata HTTP/1.1\r' +
        '\nHost: localhost:8000\r' +
        '\nAccept-Encoding: gzip, deflate\r' +
        '\nUser-Agent: node-superagent/3.8.3\r' +
        '\nContent-Type: application/json\r' +
        '\nContent-Length: 17\r' +
        '\nConnection: close\r' +
        '\n\r' +
        '\n',
      _onPendingData: [Function: noopPendingOutput],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      path: '/stockdata',
      _ended: true,
      res: [Circular],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      [Symbol(isCorked)]: false,
      [Symbol(outHeadersKey)]: [Object: null prototype]
    },
    text: '{"ticker":"GOOG"}'
  },
  request: Test {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    _agent: false,
    _formData: null,
    method: 'GET',
    url: 'http://localhost:8000/stockdata',
    _header: {
      'user-agent': 'node-superagent/3.8.3',
      'content-type': 'application/json'
    },
    header: {
      'User-Agent': 'node-superagent/3.8.3',
      'Content-Type': 'application/json'
    },
    writable: true,
    _redirects: 0,
    _maxRedirects: 0,
    cookies: '',
    qs: {},
    _query: [],
    qsRaw: [],
    _redirectList: [],
    _streamRequest: false,
    _buffer: true,
    app: 'http://localhost:8000',
    _asserts: [ [Function: bound ] ],
    _data: { ticker: 'GOOG' },
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 17,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      socket: [Socket],
      connection: [Socket],
      _header: 'GET /stockdata HTTP/1.1\r' +
        '\nHost: localhost:8000\r' +
        '\nAccept-Encoding: gzip, deflate\r' +
        '\nUser-Agent: node-superagent/3.8.3\r' +
        '\nContent-Type: application/json\r' +
        '\nContent-Length: 17\r' +
        '\nConnection: close\r' +
        '\n\r' +
        '\n',
      _onPendingData: [Function: noopPendingOutput],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      path: '/stockdata',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      [Symbol(isCorked)]: false,
      [Symbol(outHeadersKey)]: [Object: null prototype]
    },
    protocol: 'http:',
    host: 'localhost:8000',
    _endCalled: true,
    _callback: [Function],
    res: IncomingMessage {
      _readableState: [ReadableState],
      readable: false,
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: [Socket],
      connection: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [ClientRequest],
      text: '{"ticker":"GOOG"}'
    },
    response: [Circular],
    called: true
  },
  req: ClientRequest {
    _events: [Object: null prototype] {
      drain: [Function],
      error: [Function],
      prefinish: [Function: requestOnPrefinish]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    useChunkedEncodingByDefault: false,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    _contentLength: 17,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [Circular],
      [Symbol(asyncId)]: 26,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    connection: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [Circular],
      [Symbol(asyncId)]: 26,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _header: 'GET /stockdata HTTP/1.1\r' +
      '\nHost: localhost:8000\r' +
      '\nAccept-Encoding: gzip, deflate\r' +
      '\nUser-Agent: node-superagent/3.8.3\r' +
      '\nContent-Type: application/json\r' +
      '\nContent-Length: 17\r' +
      '\nConnection: close\r' +
      '\n\r' +
      '\n',
    _onPendingData: [Function: noopPendingOutput],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      defaultPort: 80,
      protocol: 'http:',
      options: [Object],
      requests: {},
      sockets: [Object],
      freeSockets: {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256
    },
    socketPath: undefined,
    method: 'GET',
    path: '/stockdata',
    _ended: true,
    res: IncomingMessage {
      _readableState: [ReadableState],
      readable: false,
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: [Socket],
      connection: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [Circular],
      text: '{"ticker":"GOOG"}'
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    [Symbol(isCorked)]: false,
    [Symbol(outHeadersKey)]: [Object: null prototype] {
      host: [Array],
      'accept-encoding': [Array],
      'user-agent': [Array],
      'content-type': [Array],
      'content-length': [Array]
    }
  },
  text: '{"ticker":"GOOG"}',
  body: { ticker: 'GOOG' },
  files: undefined,
  buffered: true,
  headers: {
    'x-powered-by': 'Express',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '17',
    etag: 'W/"11-/PB6a5KBMZp5rPw7mRHoH4RAsik"',
    date: 'Sat, 11 Apr 2020 17:55:02 GMT',
    connection: 'close'
  },
  header: {
    'x-powered-by': 'Express',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '17',
    etag: 'W/"11-/PB6a5KBMZp5rPw7mRHoH4RAsik"',
    date: 'Sat, 11 Apr 2020 17:55:02 GMT',
    connection: 'close'
  },
  statusCode: 200,
  status: 200,
  statusType: 2,
  info: false,
  ok: true,
  redirect: false,
  clientError: false,
  serverError: false,
  error: false,
  created: false,
  accepted: false,
  noContent: false,
  badRequest: false,
  unauthorized: false,
  notAcceptable: false,
  forbidden: false,
  notFound: false,
  unprocessableEntity: false,
  type: 'application/json',
  charset: 'utf-8',
  links: {},
  setEncoding: [Function: bound ],
  redirects: []
  }
}

console.log(res);