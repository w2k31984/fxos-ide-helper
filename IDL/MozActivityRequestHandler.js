/**
 * @interface
 */
function MozActivityRequestHandler() {}

/**
 * @const
 * @type {MozActivityOptions}
 */
MozActivityRequestHandler.prototype.source = null;

/**
 * @param {*} answer
 */
MozActivityRequestHandler.prototype.postResult = function (answer) {};

/**
 * @param {string} message
 */
MozActivityRequestHandler.prototype.postError = function (message) {};
