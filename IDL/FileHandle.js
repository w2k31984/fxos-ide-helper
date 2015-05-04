/**
 * @interface
 */
function FileHandle() {}

/**
 * @const
 * @type {string}
 */
FileHandle.prototype.name = '';

/**
 * @const
 * @type {string}
 */
FileHandle.prototype.type = '';

/**
 * @type {function(Event)}
 */
FileHandle.prototype.onabort = null;

/**
 * @type {function(Event)}
 */
FileHandle.prototype.onerror = null;

/**
 * @param {string} mode readonly|readwrite
 * @returns {LockedFile}
 */
FileHandle.prototype.open = function (mode) {};

/**
 * @returns {DOMRequest}
 * @property {File} result
 */
FileHandle.prototype.getFile = function () {};
