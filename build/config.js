var SRC_SCRIPTS = [
    './src/app.js', './src/*/**.js', './src/*/**/*.js'
];

var ASSET_SCRIPTS = [
    './node_modules/angular/angular.min.js',
    './assets/ui-bootstrap/ui-bootstrap-custom-0.14.3.min.js',
    './assets/ui-bootstrap/ui-bootstrap-custom-tpls-0.14.3.min.js',
    './node_modules/angular-resource/angular-resource.min.js',
    './node_modules/angular-ui-router/release/angular-ui-router.min.js'
];

var SRC_STYLES = [
    './src/app.css', './src/*/**.css'
];

var ASSET_STYLES = [
    './assets/fonts/pt-sans-caption.css',
    './node_modules/bootstrap/dist/css/bootstrap.css'
];

var SCRIPTS = ASSET_SCRIPTS.concat(SRC_SCRIPTS),
    STYLES = ASSET_STYLES.concat(SRC_STYLES);

module.exports = {
    scripts: SCRIPTS,
    src_scripts: SRC_SCRIPTS,
    src_styles: SRC_STYLES,
    styles: STYLES,
    asset_scripts: ASSET_SCRIPTS,
    asset_styles: ASSET_STYLES
};
