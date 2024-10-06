let mix = require('laravel-mix');
const webpack = require('webpack');
const path = require('path'); // Add this line

// Asset management
mix.js('resources/assets/js/app.js', 'public/js')
    .vue() 
    .sass('resources/assets/sass/app.scss', 'public/css', {
        sassOptions: {
            quietDeps: true, // This will suppress Sass warnings
        }
    });
   

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json', '.jsx', '.ts'], 
        alias: {
            vue$: 'vue/dist/vue.esm-bundler.js', // Use the ESM build of Vue
            '@components': path.resolve(__dirname, 'resources/assets/js/components/'), // Add this line
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true),
        }),
    ],
    stats: {
        children: true,
        warningsFilter: /node_modules\/bootstrap/,
    }

});
