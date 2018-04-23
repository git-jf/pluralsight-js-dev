//This file ins't transpiled, so must use CommonJS and ESS

//Register babel to transpile before our test run.

require('babel-register')();

//Disable webpack features that Mocha dosen't understand.
require.extensions['.css']  = function() {};
