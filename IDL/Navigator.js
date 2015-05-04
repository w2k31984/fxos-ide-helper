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
