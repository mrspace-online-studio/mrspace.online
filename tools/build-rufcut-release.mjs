// Compatibility entry for an ended service; emit the standard retirement publication.
import {execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
execFileSync(process.execPath,[fileURLToPath(new URL('./build-site.mjs',import.meta.url)),'rufcut',process.argv[2]||'/private/tmp/retired-service-release'],{stdio:'inherit'});
