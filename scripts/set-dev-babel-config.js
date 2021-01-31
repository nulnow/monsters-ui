const fs = require('fs');
const path = require('path');

const devBabelConfigContent = fs.readFileSync(path.join(__dirname, '..', 'babel.config.dev.json'));
fs.writeFileSync(path.join(__dirname, '..', 'babel.config.json'), devBabelConfigContent);
