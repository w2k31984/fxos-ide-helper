/**
 * @interface
 */
function TCPSocket() {}

/**
 * @const
 * @type {string}
 */
TCPSocket.prototype.host = '';

/**
 * @const
 * @type {number}
 */
TCPSocket.prototype.port = 0;

/**
 * @const
 * @type {boolean}
 */
TCPSocket.prototype.ssl = false;

/**
 * @const
 * @type {number}
 */
TCPSocket.prototype.bufferedAmount = 0;

/**
 * arraybuffer|string
 *
 * @const
 * @type {string}
 */
TCPSocket.prototype.binaryType = '';

/**
 * connecting|open|closing|closed
 *
 * @const
 * @type {string}
 */
TCPSocket.prototype.readyState = '';

/**
 * @type {function(TCPSocketEvent)}
 */
TCPSocket.prototype.onopen = null;

/**
 * @type {function(TCPSocketEvent)}
 */
TCPSocket.prototype.ondrain = null;

/**
 * @type {function(TCPSocketEvent)}
 */
TCPSocket.prototype.onerror = null;

/**
 * @type {function(TCPSocketEvent)}
 */
TCPSocket.prototype.ondata = null;

/**
 * @type {function(TCPSocketEvent)}
 */
TCPSocket.prototype.onclose = null;

/**
 * @type {function()}
 */
TCPSocket.prototype.close = function () {};

/**
 * @param {string} host
 * @param {number} port
 * @param {{useSecureTransport?: boolean, binaryType?: string}} [options]
 * @returns {TCPSocket}
 */
TCPSocket.prototype.open = function (host, port, options) {};

/**
 * @param {number} port
 * @param {{binaryType: string}} [options]
 * @param {number} [backlog]
 * @returns {TCPServerSocket}
 * @since v1.2
 */
TCPSocket.prototype.listen = function (port, options, backlog) {};

/**
 * @type {function()}
 */
TCPSocket.prototype.resume = function () {};

/**
 * @param {string|ArrayBuffer} data
 * @param {number} [byteOffset]
 * @param {number} [byteLength]
 * @returns {boolean}
 */
TCPSocket.prototype.send = function (data, byteOffset, byteLength) {};

/**
 * @type {function()}
 */
TCPSocket.prototype.suspend = function () {};

/**
 * @type {function()}
 */
TCPSocket.prototype.upgradeToSecure = function () {};
