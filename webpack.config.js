const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")
 
module.exports = {
    "entry": "index.js",
    loader: 'rails-erb-loader',
    options: {
      runner: '../bin/rails runner',
      dependenciesRoot: '../app',
    },
    loader: 'rails-erb-loader',
    options: {
      runner: '../bin/rails runner',
      dependenciesRoot: '../app',
    },
    /* ... */
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Source Sans Pro" },
                { family: "Roboto", variants: [ "400", "700italic" ] }
            ]
            /* ...options */
        })
    ]
}