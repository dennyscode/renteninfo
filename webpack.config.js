const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")
 
module.exports = {
    "entry": "index.js",
    loader: 'rails-erb-loader',
    options: {
      runner: '../bin/rails runner',
      dependenciesRoot: '../app',
    },
    module: {
        rules: [
          {
            test: /\.erb$/,
            enforce: 'pre',
            loader: 'rails-erb-loader'
          },
        ]
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