import{aM as k}from"./strapi-Hh-aPxjw.js";const b=k.enhanceEndpoints({addTagTypes:["Webhook"]}).injectEndpoints({endpoints:t=>({getWebhooks:t.query({query:e=>({url:`/admin/webhooks/${e?.id??""}`,method:"GET"}),transformResponse:e=>Array.isArray(e.data)?e.data:[e.data],providesTags:(e,a,o)=>typeof o=="object"&&"id"in o?[{type:"Webhook",id:o.id}]:[...e?.map(({id:r})=>({type:"Webhook",id:r}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:t.mutation({query:e=>({url:"/admin/webhooks",method:"POST",data:e}),transformResponse:e=>e.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:t.mutation({query:({id:e,...a})=>({url:`/admin/webhooks/${e}`,method:"PUT",data:a}),transformResponse:e=>e.data,invalidatesTags:(e,a,{id:o})=>[{type:"Webhook",id:o}]}),triggerWebhook:t.mutation({query:e=>({url:`/admin/webhooks/${e}/trigger`,method:"POST"}),transformResponse:e=>e.data}),deleteManyWebhooks:t.mutation({query:e=>({url:"/admin/webhooks/batch-delete",method:"POST",data:e}),transformResponse:e=>e.data,invalidatesTags:(e,a,{ids:o})=>o.map(r=>({type:"Webhook",id:r}))})}),overrideExisting:!1}),{useGetWebhooksQuery:m,useCreateWebhookMutation:p,useUpdateWebhookMutation:W,useTriggerWebhookMutation:y,useDeleteManyWebhooksMutation:c}=b,T=(t=void 0,e)=>{const{data:a,isLoading:o,error:r}=m(t,e),[s,{error:n}]=p(),[i,{error:d}]=W(),[h]=y(),[u]=c();return{webhooks:a,isLoading:o,error:r||n||d,createWebhook:s,updateWebhook:i,triggerWebhook:h,deleteManyWebhooks:u}};export{T as u};
