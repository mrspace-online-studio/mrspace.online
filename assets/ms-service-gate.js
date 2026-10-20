/* Old URLs resolve to the same reusable service-ending screen. No client data is retained here. */
(function(){'use strict';
 const registry=window.MS_RETIRED_SERVICES||[],url=new URL(location.href),closed='https://mrspace.online/service-unavailable/';
 if(url.pathname.replace(/\/$/,'')==='/service-unavailable')return;
 const retired=(value)=>registry.find(s=>s.site===String(value||'').toLowerCase());
 let match=registry.find(s=>s.hosts.includes(url.hostname)||s.paths.some(p=>url.pathname===p||url.pathname.startsWith(p+'/')));
 for(const key of ['site','self','preview','project'])match=match||retired(url.searchParams.get(key));
 const hash=url.hash.replace(/^#/,'').split('/')[0];match=match||retired(hash);
 function leave(){location.replace(closed);}
 if(match){leave();return;}
 const params={};for(const key of ['k','key','site_key','e','edit','trial','token']){const value=url.searchParams.get(key);if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value||''))params[['e','edit'].includes(key)?'p_edit':'p_key']=value;}
 if(!Object.keys(params).length)return;
 fetch('https://tizfdnsjhhepxnqqrzuk.supabase.co/rest/v1/rpc/ms_service_route',{method:'POST',headers:{apikey:'sb_publishable_DcfxBTRo0n2m1go5_yYjkw_qNzD6ie6','Content-Type':'application/json'},body:JSON.stringify(params),cache:'no-store',signal:AbortSignal.timeout(8000)}).then(r=>r.ok?r.json():null).then(state=>{if(state?.retired)leave();}).catch(()=>{});
})();
