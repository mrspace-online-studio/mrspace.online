/* Stable response contract for a service that has ended. No account data is exposed. */
export function closedServiceResponse(req:Request){
 const headers={'Content-Type':'application/json','Cache-Control':'no-store','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization,apikey,content-type','Access-Control-Allow-Methods':'GET,POST,OPTIONS'};
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers});
 return new Response(JSON.stringify({error:'service_retired',retired:true,message:'We no longer provide service for this account.',service_url:'https://mrspace.online/service-unavailable/',application_url:'https://mrspace.online/start/?from=service-unavailable'}),{status:410,headers});
}
export async function retiredResponse(db:any,site:string,req:Request){
 if(!site)return null;
 const {data,error}=await db.rpc('ms_service_route',{p_site:site});
 if(error)return new Response(JSON.stringify({error:'service_state_unavailable'}),{status:503,headers:{'Content-Type':'application/json','Cache-Control':'no-store','Access-Control-Allow-Origin':'*'}});
 return data?.retired?closedServiceResponse(req):null;
}
