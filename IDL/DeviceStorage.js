/**
 * @interface
 * @extends EventTarget
 */
function DeviceStorage() {}

/**
 * apps|music|pictures|sdcard|videos
 *
 * @const
 * @type {string}
 */
DeviceStorage.prototype.storageName = '';

/**
 * @const
 * @type {boolean}
 */
DeviceStorage.prototype.default = false;

/**
 * @type {function(DeviceStorageChangeEvent)}
 */
DeviceStorage.prototype.onchange = null;

/**
 * @param {Blob} file
 * @returns {DOMRequest}
 * @property {File} result
 */
DeviceStorage.prototype.add = function (file) {};

/**
 * @param {Blob} file
 * @param {string} name
 * @returns {DOMRequest}
 * @property {File} result
 */
DeviceStorage.prototype.addNamed = function (file, name) {};

/**
 * @returns {DOMRequest}
 * @property {string} result available|unavailable|shared
 */
DeviceStorage.prototype.available = function () {};

/**
 * @param {string} fileName
 * @returns {DOMRequest}
 */
DeviceStorage.prototype.delete = function (fileName) {};

/**
 * @param {string} path
 * @param {{since: Date}} [options]
 * @returns {DOMCursor}
 * @property {File} result
 */
DeviceStorage.prototype.enumerate = function (path, options) {};

/**
 * @param {string} path
 * @param {{since: Date}} [options]
 * @returns {DOMCursor}
 * @property {FileHandle} result
 */
DeviceStorage.prototype.enumerateEditable = function (path, options) {};

/**
 * @returns {DOMRequest}
 * @property {number} result
 */
DeviceStorage.prototype.freeSpace = function () {};

/**
 * @param {string} fileName
 * @returns {DOMRequest}
 * @property {File} result
 */
DeviceStorage.prototype.get = function (fileName) {};

/**
 * @param {string} fileName
 * @returns {DOMRequest}
 * @property {FileHandle} result
 */
DeviceStorage.prototype.getEditable = function (fileName) {};

/**
 * @returns {DOMRequest}
 * @property {number} result
 */
DeviceStorage.prototype.usedSpace = function () {};
