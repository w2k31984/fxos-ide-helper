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
