import{u as C,n as k,o as z,r as x,w as S,a7 as L,x as T,j as e,P as d,fn as a,b as f,S as I,a0 as w,F as m,B as R,T as A,Q as r,U as i,W as h,fU as P,aa as F,fV as N}from"./strapi-Hh-aPxjw.js";const H=t=>t,_={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},G=(t,n)=>F(t,o=>{switch(n.type){case"GET_DATA_SUCCEEDED":{o.initialData=n.data,o.modifiedData=n.data;break}case"ON_CHANGE":{N(o,["modifiedData",...n.keys.split(".")],n.value);break}default:return t}}),q=()=>{const{formatMessage:t}=C(),{toggleNotification:n}=k(),{get:o,put:j}=z(),[{initialData:y,modifiedData:l},p]=x.useReducer(G,_,H),{data:c,isLoading:M,refetch:O}=S({queryKey:["upload","settings"],async queryFn(){const{data:{data:s}}=await o("/upload/settings");return s}});x.useEffect(()=>{c&&p({type:"GET_DATA_SUCCEEDED",data:c})},[c]);const b=L(y,l),{mutateAsync:D,isLoading:v}=T(async s=>{const{data:u}=await j("/upload/settings",s);return u},{onSuccess(){O(),n({type:"success",message:t({id:"notification.form.success.fields"})})},onError(s){console.error(s)}}),E=async s=>{s.preventDefault(),!b&&await D(l)},g=({target:{name:s,value:u}})=>{p({type:"ON_CHANGE",keys:s,value:u})};return M?e.jsx(d.Loading,{}):e.jsxs(d.Main,{tabIndex:-1,children:[e.jsx(d.Title,{children:t({id:a("page.title"),defaultMessage:"Settings - Media Libray"})}),e.jsxs("form",{onSubmit:E,children:[e.jsx(f.Header,{title:t({id:a("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.jsx(I,{disabled:b,loading:v,type:"submit",startIcon:e.jsx(w,{}),size:"S",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:a("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.jsx(f.Content,{children:e.jsx(f.Root,{children:e.jsx(m,{direction:"column",alignItems:"stretch",gap:12,children:e.jsx(R,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(m,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(m,{children:e.jsx(A,{variant:"delta",tag:"h2",children:t({id:a("settings.blockTitle"),defaultMessage:"Asset management"})})}),e.jsxs(r.Root,{gap:6,children:[e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(i.Root,{hint:t({id:a("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),name:"responsiveDimensions",children:[e.jsx(i.Label,{children:t({id:a("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"})}),e.jsx(h,{checked:l?.responsiveDimensions,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"responsiveDimensions",value:s.target.checked}})}}),e.jsx(i.Hint,{})]})}),e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(i.Root,{hint:t({id:a("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),name:"sizeOptimization",children:[e.jsx(i.Label,{children:t({id:a("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"})}),e.jsx(h,{checked:l?.sizeOptimization,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"sizeOptimization",value:s.target.checked}})}}),e.jsx(i.Hint,{})]})}),e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(i.Root,{hint:t({id:a("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),name:"autoOrientation",children:[e.jsx(i.Label,{children:t({id:a("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"})}),e.jsx(h,{checked:l?.autoOrientation,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"autoOrientation",value:s.target.checked}})}}),e.jsx(i.Hint,{})]})})]})]})})})})})]})]})},U=()=>e.jsx(d.Protect,{permissions:P.settings,children:e.jsx(q,{})});export{U as ProtectedSettingsPage,q as SettingsPage};
