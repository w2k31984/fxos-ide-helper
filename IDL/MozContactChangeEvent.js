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
