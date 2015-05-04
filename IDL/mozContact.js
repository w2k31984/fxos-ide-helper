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
