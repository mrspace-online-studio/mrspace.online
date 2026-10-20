// Only an explicitly retired site may remove its previous deployed files.
import fs from 'node:fs/promises';import path from 'node:path';import {execFileSync} from 'node:child_process';
const [cfgFile,destination]=process.argv.slice(2),cfg=JSON.parse(await fs.readFile(cfgFile,'utf8'));
if(cfg.retired!==true)process.exit(0);
const root=path.resolve(destination),tracked=execFileSync('git',['ls-files','-z'],{cwd:root,encoding:'utf8'}).split('\0').filter(Boolean);
for(const file of tracked){if(file.startsWith('.github/')||file==='CNAME'||file.startsWith('.git'))continue;const full=path.resolve(root,file);if(!full.startsWith(root+path.sep))throw Error('Invalid tracked path');await fs.rm(full,{force:true});}
console.log('Retired publication: old tracked site files removed; infrastructure preserved.');
