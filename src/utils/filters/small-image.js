/**
 * Replace image by it's resized variant
 * Assumed filenames just include one dot
 *
 * @param {String} filename
 */

module.exports = function(filename) {
  const fileNameParts = filename.split(".");
  fileNameParts[0] += "-300";
  return `resized/${fileNameParts.join(".")}`;
};
