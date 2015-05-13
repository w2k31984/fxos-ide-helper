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
 * @type {TCPSocket}
 */
Navigator.prototype.mozTCPSocket = null;

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

/**
 * @inheritDoc
 */
navigator.mozTCPSocket = Navigator.prototype.mozTCPSocket;
