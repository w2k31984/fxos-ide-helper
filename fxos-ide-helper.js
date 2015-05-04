/**
 * @interface
 * @extends Event
 */
function DeviceStorageChangeEvent() {}

/**
 * @type {string}
 */
DeviceStorageChangeEvent.prototype.path = '';

/**
 * created|modified|deleted
 *
 * @type {string}
 */
DeviceStorageChangeEvent.prototype.reason = '';

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

/**
 * @interface
 * @extends DOMRequest
 */
function FileRequest() {}

/**
 * @const
 * @type {LockedFile}
 */
FileRequest.prototype.lockedFile = null;

/**
 * @type {function({loaded: number, total: number})}
 */
FileRequest.prototype.onprogress = null;

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

/**
 * @interface
 * @type {navigator}
 */
function Navigator() {}

/**
 * @param {string} storageName apps|music|pictures|sdcard|videos
 * @returns {DeviceStorage}
 */
Navigator.prototype.getDeviceStorage = function (storageName) {};

/**
 * @param {string} storageName apps|music|pictures|sdcard|videos
 * @returns {DeviceStorage[]}
 */
Navigator.prototype.getDeviceStorages = function (storageName) {};

/**
 * @inheritDoc
 */
navigator.getDeviceStorage = Navigator.prototype.getDeviceStorage;

/**
 * @inheritDoc
 */
navigator.getDeviceStorages = Navigator.prototype.getDeviceStorages;
