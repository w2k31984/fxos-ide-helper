/**
 * @interface
 */
function LockedFile() {}

/**
 * @const
 * @type {FileHandle}
 */
LockedFile.prototype.fileHandle = null;

/**
 * readonly|readwrite
 *
 * @const
 * @type {string}
 */
LockedFile.prototype.mode = '';

/**
 * @const
 * @type {boolean}
 */
LockedFile.prototype.active = false;

/**
 * @type {number|null}
 */
LockedFile.prototype.location = 0;

/**
 * @type {function(Event)}
 */
LockedFile.prototype.oncomplete = null;

/**
 * @type {function(Event)}
 */
LockedFile.prototype.onabort = null;

/**
 * @type {function(Event)}
 */
LockedFile.prototype.onerror = null;

/**
 * @param {{size: boolean, lastModified: boolean}} param
 * @returns {FileRequest}
 * @property {{size: number, lastModified: Date}} result
 */
LockedFile.prototype.getMetadata = function (param) {};

/**
 * @param {number} size
 * @returns {FileRequest}
 * @property {ArrayBuffer} result
 */
LockedFile.prototype.readAsArrayBuffer = function (size) {};

/**
 * @param {number} size
 * @param {string} [encoding]
 * @returns {FileRequest}
 * @property {string} result
 */
LockedFile.prototype.readAsText = function (size, encoding) {};

/**
 * @param {string|ArrayBuffer} data
 * @returns {FileRequest}
 */
LockedFile.prototype.write = function (data) {};

/**
 * @param {string|ArrayBuffer} data
 * @returns {FileRequest}
 * @property {null} location
 */
LockedFile.prototype.append = function (data) {};

/**
 * @param {number} [start]
 * @returns {FileRequest}
 */
LockedFile.prototype.truncate = function (start) {};

/**
 * @returns {FileRequest}
 */
LockedFile.prototype.flush = function () {};

/**
 * @returns {FileRequest}
 */
LockedFile.prototype.abort = function () {};
