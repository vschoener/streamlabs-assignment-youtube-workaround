const fs = require('fs');
const os = require('os');
const configPath = __dirname+'/config.js';

// Just check if the config is available
if (!fs.existsSync(configPath)) {
    console.error('Did you forget to use the config.sample.js as config.js in the config folder ?');
    process.exit(1);
}

module.exports = require(configPath);
