var SRC_SCRIPTS = [
    './src/app/app.js', './src/app/*/**.js', './src/app/*/**/*.js'
];

var ASSET_SCRIPTS = [
    './node_modules/angular/angular.min.js',
    './src/assets/ui-bootstrap/ui-bootstrap-custom-0.14.3.min.js',
    './src/assets/ui-bootstrap/ui-bootstrap-custom-tpls-0.14.3.min.js',
    './node_modules/angular-resource/angular-resource.min.js',
    './node_modules/angular-ui-router/release/angular-ui-router.min.js'
];

var SRC_STYLES = [
    './src/app/app.css', './src/app/*/**.css'
];

var ASSET_STYLES = [
    './src/assets/fonts/pt-sans-caption.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css'
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
