const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias("default", "layouts/base.njk");

  // Add some utility filters
  config.addFilter("squash", require("./src/utils/filters/squash.js"));
  config.addFilter("dateDisplay", require("./src/utils/filters/date.js"));
  config.addFilter("mailText", require("./src/utils/filters/email-text.js"));

  config.addShortcode(
    "productImage",
    require("./src/utils/shortcodes/product-image.js")
  );

  config.addShortcode("localPrice", function (priceString) {
    return Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(priceString);
  });

  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);

  // minify the html output
  config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

  // compress and combine js files
  config.addFilter("jsmin", function (code) {
    const Terser = require("terser");
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log("Terser error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/google1e03e51ff2928a76.html");

  // make the seed target act like prod
  env = env == "seed" ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: `_data/${env}`,
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
