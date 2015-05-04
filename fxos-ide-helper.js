/**
 * @interface
 */
function ContactManager() {}

/**
 * @type {function(MozContactChangeEvent)}
 */
ContactManager.prototype.oncontactchange = null;

/**
 * @returns {DOMRequest}
 */
ContactManager.prototype.clear = function () {};

/**
 * filterOp: equals|startsWith|match
 *
 * @param {{filterBy: string[], filterValue: *, filterOp: string,
 *   filterLimit: number}} options
 * @returns {DOMRequest}
 * @property {mozContact[]} result
 */
ContactManager.prototype.find = function (options) {};

/**
 * sortBy: givenName|familyName
 * sortOrder: descending|ascending
 * filterOp: equals|startsWith|match
 *
 * @param {{sortBy: string, sortOrder: string, filterBy: string[],
 *   filterValue: *, filterOp: string, filterLimit: number}} options
 * @returns {DOMRequest}
 * @property {mozContact[]} result
 */
ContactManager.prototype.getAll = function (options) {};

/**
 * @returns {DOMRequest}
 * @property {number} result
 */
ContactManager.prototype.getCount = function () {};

/**
 * @returns {DOMRequest}
 * @property {number} result
 */
ContactManager.prototype.getRevision = function () {};

/**
 * @param {mozContact} contact
 * @returns {DOMRequest}
 */
ContactManager.prototype.remove = function (contact) {};

/**
 * @param {mozContact} contact
 * @returns {DOMRequest}
 */
ContactManager.prototype.save = function (contact) {};

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
 * @constructor
 * @param {MozActivityOptions} options
 * @extends DOMRequest
 */
function MozActivity(options) {}

/**
 * @typedef {{}} MozActivityOptions
 * @property {string} name
 * @property {{}} [data]
 */

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

/**
 * @interface
 * @extends Event
 */
function MozContactChangeEvent() {}

/**
 * @type {string}
 */
MozContactChangeEvent.prototype.contactID = '';

/**
 * update|create|remove
 *
 * @type {string}
 */
MozContactChangeEvent.prototype.reason = '';

/**
 * @constructor
 * @param {mozContact.Data} [data]
 */
function mozContact(data) {}

/**
 * @const
 * @type {string}
 */
mozContact.prototype.id = '';

/**
 * @const
 * @type {Date}
 */
mozContact.prototype.published = null;

/**
 * @const
 * @type {Date}
 */
mozContact.prototype.updated = null;

/**
 * @type {string[]}
 */
mozContact.prototype.name = [];

/**
 * @type {string[]}
 */
mozContact.prototype.honorificPrefix = [];

/**
 * @type {string[]}
 */
mozContact.prototype.givenName = [];

/**
 * @type {string[]}
 */
mozContact.prototype.additionalName = [];

/**
 * @type {string[]}
 */
mozContact.prototype.familyName = [];

/**
 * @type {string[]}
 */
mozContact.prototype.honorificSuffix = [];

/**
 * @type {string[]}
 */
mozContact.prototype.nickname = [];

/**
 * @type {mozContact.ContactField[]}
 */
mozContact.prototype.email = [];

/**
 * @type {Blob[]}
 */
mozContact.prototype.photo = [];

/**
 * @type {mozContact.ContactField[]}
 */
mozContact.prototype.url = [];

/**
 * @type {string[]}
 */
mozContact.prototype.category = [];

/**
 * @type {mozContact.AddressField[]}
 */
mozContact.prototype.adr = [];

/**
 * @type {mozContact.TelField[]}
 */
mozContact.prototype.tel = [];

/**
 * @type {string[]}
 */
mozContact.prototype.org = [];

/**
 * @type {string[]}
 */
mozContact.prototype.jobTitle = [];

/**
 * @type {Date}
 */
mozContact.prototype.bday = null;

/**
 * @type {string[]}
 */
mozContact.prototype.note = [];

/**
 * @type {mozContact.ContactField[]}
 */
mozContact.prototype.impp = [];

/**
 * @type {Date}
 */
mozContact.prototype.anniversary = null;

/**
 * @type {string}
 */
mozContact.prototype.sex = '';

/**
 * @type {string}
 */
mozContact.prototype.genderIdentity = '';

/**
 * @type {string[]}
 */
mozContact.prototype.key = [];

/**
 * @param {mozContact.Data} param
 * @deprecated since v1.3
 */
mozContact.prototype.init = function (param) {};

/**
 * @typedef {*} mozContact.Data
 * @property {string} [name]
 * @property {string} [honorificPrefix]
 * @property {string} [givenName]
 * @property {string} [additionalName]
 * @property {string} [familyName]
 * @property {string} [honorificSuffix]
 * @property {string} [nickname]
 * @property {mozContact.ContactField} [email]
 * @property {Blob} [photo]
 * @property {mozContact.ContactField} [url]
 * @property {string} [category]
 * @property {mozContact.AddressField} [adr]
 * @property {mozContact.TelField} [tel]
 * @property {string} [org]
 * @property {string} [jobTitle]
 * @property {Date} [dbay]
 * @property {string} [note]
 * @property {mozContact.ContactField} [impp]
 * @property {Date} [anniversary]
 * @property {string} [sex]
 * @property {string} [genderIdentity]
 * @property {string} [key]
 */

/**
 * @typedef {*} mozContact.ContactField
 * @property {string[]} type
 * @property {string} value
 * @property {boolean} pref
 */

/**
 * @typedef {*} mozContact.AddressField
 * @property {string[]} type
 * @property {boolean} pref
 * @property {string} streetAddress
 * @property {string} locality
 * @property {string} region
 * @property {string} postalCode
 * @property {string} countryName
 */

/**
 * @typedef {*} mozContact.TelField
 * @property {string[]} type
 * @property {boolean} pref
 * @property {string} value
 * @property {string} carrier
 */

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
 * @param {string} type activity|*
 * @param {function(MozActivityRequestHandler|*)} handler
 */
Navigator.prototype.mozSetMessageHandler = function (type, handler) {};

/**
 * @type {ContactManager}
 */
Navigator.prototype.mozContacts = null;

/**
 * @inheritDoc
 */
navigator.getDeviceStorage = Navigator.prototype.getDeviceStorage;

/**
 * @inheritDoc
 */
navigator.getDeviceStorages = Navigator.prototype.getDeviceStorages;

/**
 * @inheritDoc
 */
navigator.mozSetMessageHandler = Navigator.prototype.mozSetMessageHandler;

/**
 * @inheritDoc
 */
navigator.mozContacts = Navigator.prototype.mozContacts;
