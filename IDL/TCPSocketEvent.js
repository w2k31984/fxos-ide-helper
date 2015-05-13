/**
 * @interface
 * @extends Event
 */
function TCPSocketEvent() {}

/**
 * @type {TCPSocket}
 */
TCPSocketEvent.prototype.target = null;

/**
 * open|error|data|drain|close
 *
 * @type {string}
 */
TCPSocketEvent.prototype.type = '';

/**
 * @type {string|ArrayBuffer|null}
 */
TCPSocketEvent.prototype.data = null;
