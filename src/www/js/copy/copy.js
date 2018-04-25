/*
 * Fill in the `copy' function so that it duplicates the object it is
 * passed as its first argument.  It should return the duplicate.
 *
 * Ensure that the duplicated object only contains properties that are
 * present on the incoming object, and not those that it inherits.
 * (In other words, use the `hasOwnProperty' method.)
 *
 */
function copy(object) {
  var dup = {};

  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      dup[prop] = object[prop];
    }
  }

  return dup;
}
