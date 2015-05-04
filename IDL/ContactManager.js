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
