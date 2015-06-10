/**
 * @interface
 */
function Navigator() {}

/**
 * @type {navigator}
 */
Navigator.prototype = navigator;

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
