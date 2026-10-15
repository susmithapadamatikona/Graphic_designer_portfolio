import {mkdirSync,copyFileSync,cpSync,readdirSync} from 'node:fs';
// Publishing-only output. Editable website files remain in the project root.
mkdirSync('out',{recursive:true});
for(const name of readdirSync('.').filter(name=>name.endsWith('.html')))copyFileSync(name,'out/'+name);
cpSync('assets','out/assets',{recursive:true});
console.log('Prepared publication assets.');
