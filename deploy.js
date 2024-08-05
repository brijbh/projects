const { execSync } = require('child_process');
const fs = require('fs');

// Build React app in text-pattern folder
execSync('cd text-pattern && npm install && npm run build', { stdio: 'inherit' });

// Copy React build to gh-pages branch
execSync('cp -R text-pattern/build/* .');

// Add .nojekyll file to bypass Jekyll processing
fs.writeFileSync('.nojekyll', '');

// Commit and push to gh-pages branch
execSync('git add .');
execSync('git commit -m "Deploy text-pattern to GitHub Pages"');
execSync('git push origin gh-pages --force');
