/**
 * Replace image by it's resized variant
 * Assumed filenames just include one dot
 */

module.exports = function(src, alt, attributes = "") {
  const fileNameWithoutExtension = src.split(".")[0];
  return `<picture>
  <source srcset="/images/products/resized/${fileNameWithoutExtension}.webp" type="image/webp">
  <source srcset="/images/products/resized/${fileNameWithoutExtension}.jpg" type="image/jpeg">
  <img src="/images/products/resized/${fileNameWithoutExtension}.jpg" alt="${alt}" ${attributes}>
</picture>`;
};
