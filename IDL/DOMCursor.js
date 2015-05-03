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
