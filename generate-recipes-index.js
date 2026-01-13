const fs = require('fs');
const path = require('path');

const recipesDir = path.join(__dirname, 'recipes');

const files = fs.readdirSync(recipesDir)
    .filter(f => f.endsWith('.md'))
    .sort();

fs.writeFileSync(
    path.join(recipesDir, 'index.json'),
    JSON.stringify(files, null, 2)
);

console.log(`Generated index.json with ${files.length} recipes`);
