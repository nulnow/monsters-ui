const fs = require('fs');
const path = require('path');

const buildBabelConfigContent = fs.readFileSync(path.join(__dirname, '..', 'babel.config.build.json'));
fs.writeFileSync(path.join(__dirname, '..', 'babel.config.json'), buildBabelConfigContent);
