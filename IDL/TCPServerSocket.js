/**
 * @interface
 */
function TCPServerSocket() {}

/**
 * @const
 * @type {number}
 */
TCPServerSocket.prototype.localPort = 0;

/**
 * @type {function(TCPSocket)}
 */
TCPServerSocket.prototype.onconnect = null;

/**
 * @type {function(Event)}
 */
TCPServerSocket.prototype.onerror = null;

/**
 * @type {function()}
 */
TCPServerSocket.prototype.close = function () {};
