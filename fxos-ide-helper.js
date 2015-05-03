/**
 * @interface
 * @extends DOMRequest
 */
function DOMCursor() {}

/**
 * @type {boolean}
 */
DOMCursor.prototype.done = false;

/**
 * @type {function()}
 */
DOMCursor.prototype.continue = function () {};

/**
 * @interface
 */
function DOMRequest() {}

/**
 * @type {function(Event)}
 */
DOMRequest.prototype.onsuccess = null;

/**
 * @type {function(Event)}
 */
DOMRequest.prototype.onerror = null;

/**
 * done|pending
 *
 * @type {string}
 */
DOMRequest.prototype.readyState = '';

/**
 * @type {*}
 */
DOMRequest.prototype.result = null;

/**
 * @type {DOMError}
 */
DOMRequest.prototype.error = null;
