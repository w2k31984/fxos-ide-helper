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
