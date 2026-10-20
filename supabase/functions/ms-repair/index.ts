import { closedServiceResponse } from '../_shared/service-retirement.ts';
Deno.serve((req:Request)=>closedServiceResponse(req));
