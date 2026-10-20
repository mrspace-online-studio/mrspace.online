import { vapidKey, sendPush } from './web-push.ts';
// Kept on the server. Browsers receive only the public signing key and their own settings.
export async function memberEmail(db: any, email: string, site: string) {
 const admin=await db.from('ms_admins').select('email').eq('email',email).maybeSingle();if(admin.error)throw new Error('access_check_failed');if(admin.data)return true;
 const viewer=await db.from('ms_viewers').select('until').eq('email',email).maybeSingle();if(viewer.error)throw new Error('access_check_failed');if(viewer.data&&(!viewer.data.until||viewer.data.until>=new Date().toISOString().slice(0,10)))return false;
 const member=await db.from('ms_site_users').select('email').eq('email',email).eq('site',site).maybeSingle();if(member.error)throw new Error('access_check_failed');return !!member.data;
}
export async function staffUser(db: any,req: Request,site: string) {
 const token=(req.headers.get('authorization')||'').replace(/^Bearer\s+/i,'');if(!token)return null;
 const user=await db.auth.getUser(token);const email=user.data?.user?.email?.toLowerCase();if(user.error||!email)return null;
 return await memberEmail(db,email,site)?email:null;
}
export async function contactEmail(db: any) {
 const fallback='mrspace.online1@gmail.com';
 const result=await db.from('ms_settings').select('value').eq('key','contact_email').maybeSingle();
 const value=String(result.data?.value||'').trim().toLowerCase();
 return !result.error&&value.length<=160&&/^\S+@\S+\.\S+$/.test(value)?value:fallback;
}
export async function notificationConfig(db: any,initialize=false) {
 let result=await db.rpc('ms_notification_secrets',{});if(result.error)throw new Error('notification_setup_needed');
 if(initialize&&!result.data?.vapid){result=await db.rpc('ms_notification_secrets',{p_vapid:await vapidKey()});if(result.error)throw new Error('notification_setup_needed');}
 return {contactEmail:await contactEmail(db),vapid:result.data?.vapid,emailKey:Deno.env.get('RESEND_API_KEY')||result.data?.resend_key||'',emailFrom:Deno.env.get('RESEND_FROM_EMAIL')||result.data?.resend_from||''};
}
export async function mail(config: any,to: string,subject: string,text: string) {
 if(!config.emailKey||!config.emailFrom)return false;
 const result=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+config.emailKey,'Content-Type':'application/json'},body:JSON.stringify({from:config.emailFrom,reply_to:config.contactEmail||'mrspace.online1@gmail.com',to:[to],subject,text}),signal:AbortSignal.timeout(8000)});
 return result.ok;
}
