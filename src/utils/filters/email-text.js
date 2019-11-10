/**
 * Escape characters for use in mail body
 *
 * @param {String} text
 */

module.exports = function(text) {
  return text.replace(/' '/g, "%20").replace(/\n/g, "%0D%0A");
};
