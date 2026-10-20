import {readFileSync} from 'node:fs';
const policy=JSON.parse(readFileSync(new URL('../assets/ms-service-registry.json',import.meta.url),'utf8'));
export const retiredServices=policy.retired;
export const retiredRoute=file=>retiredServices.find(s=>s.paths.some(p=>file===p.slice(1)+'.html'||file===p.slice(1)+'/index.html'||file.startsWith(p.slice(1)+'/')));
export function retiredAsset(file){return retiredServices.some(s=>s.assetNames.some(name=>file.split('/').some(part=>part.toLowerCase().includes(name)))||s.legacyPages.includes(file));}
const source=readFileSync(new URL('../service-unavailable/index.html',import.meta.url),'utf8');
export function serviceNotice(){return source;}
export function serviceGate(html){
 html=html.replace(/(src|href)=(["'])(?!https?:|\/\/)([^"'?#]+\.(?:js|css))(?:\?[^"']*)?\2/gi,(_,attr,quote,file)=>attr+'='+quote+file+'?v=20261019-retirement'+quote);
 if(html.includes('data-ms-service-gate'))return html;
 const config=JSON.stringify(retiredServices.map(({site,paths,hosts})=>({site,paths,hosts}))).replaceAll('<','\\u003c');
 return html.replace(/<head\b[^>]*>/i,m=>m+'<script data-ms-service-gate>window.MS_RETIRED_SERVICES='+config+';</script><script src="/assets/ms-service-gate.js?v=20261019-retirement"></script>');
}
