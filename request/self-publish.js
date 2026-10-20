/* Compatibility entry for ended direct-publication links. The common editor remains available. */
'use strict';
function selfCopy(){return [];}
async function selfCall(){throw Error('service_retired');}
async function initSelf(){location.replace('https://mrspace.online/service-unavailable/');throw Error('service_retired');}
function selfReview(){location.replace('https://mrspace.online/service-unavailable/');}
async function publishSelf(){return initSelf();}
