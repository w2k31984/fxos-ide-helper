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
