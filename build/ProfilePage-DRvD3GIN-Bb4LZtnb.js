import{g as H,k as M,i as V,aN as x,u as p,bo as Q,n as Y,Y as $,aK as G,q as K,c3 as Z,r as S,cf as J,cg as W,j as e,P as h,Z as X,b as j,S as ee,a0 as ae,B as l,F as c,T as g,Q as d,_ as w,H as se,ch as re,b1 as P}from"./strapi-Hh-aPxjw.js";import{g as te}from"./users-8N93LH7R-MOwOr-tf.js";import{C as ie}from"./validation-BqckJ_66-BRsToAVp.js";const oe=H().shape({...ie,currentPassword:M().when(["password","confirmPassword"],(r,a,t)=>r||a?t.required({id:V.required.id,defaultMessage:"This field is required"}).nullable():t),preferedLanguage:M().nullable()}),he=()=>{const r=x(o=>o.admin_app.language.localeNames),{formatMessage:a}=p(),{trackUsage:t}=Q(),{toggleNotification:s}=Y(),{notifyStatus:i}=$(),T=x(o=>o.admin_app.theme.currentTheme),I=G(),{_unstableFormatValidationErrors:E,_unstableFormatAPIError:L}=K(),m=Z("ProfilePage",o=>o.user);S.useEffect(()=>{m?i(a({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"})):s({type:"danger",message:a({id:"notification.error",defaultMessage:"An error occured"})})},[a,i,s,m]);const[A,{isLoading:R}]=J(),{isLoading:v,data:_,error:b}=W(void 0,{skip:!(window.strapi.isEE&&window.strapi.features.isEnabled("sso"))});S.useEffect(()=>{b&&s({type:"danger",message:a({id:"Settings.permissions.users.sso.provider.error"})})},[b,a,s]);const k=async(o,{setErrors:f})=>{const{confirmPassword:ce,currentTheme:y,...q}=o;let u=q;if(u.password===""){const{password:me,currentPassword:ue,...D}=u;u=D}const n=await A(u);"data"in n&&(I(re(y)),t("didChangeMode",{newMode:y}),s({type:"success",message:a({id:"notification.success.saved",defaultMessage:"Saved"})})),"error"in n&&(P(n.error)&&n.error.name==="ValidationError"?f(E(n.error)):P(n.error)?s({type:"danger",message:L(n.error)}):s({type:"danger",message:a({id:"notification.error",defaultMessage:"An error occured"})}))};if(v)return e.jsx(h.Loading,{});const z=_?.isSSOLocked??!1,{email:C,firstname:F,lastname:B,username:N,preferedLanguage:O}=m??{},U={email:C??"",firstname:F??"",lastname:B??"",username:N??"",preferedLanguage:O,currentTheme:T,confirmPassword:"",password:""};return e.jsxs(h.Main,{"aria-busy":R,children:[e.jsx(h.Title,{children:a({id:"Settings.profile.form.section.head.title",defaultMessage:"User profile"})}),e.jsx(X,{method:"PUT",onSubmit:k,initialValues:U,validationSchema:oe,children:({isSubmitting:o,modified:f})=>e.jsxs(e.Fragment,{children:[e.jsx(j.Header,{title:te(m),primaryAction:e.jsx(ee,{startIcon:e.jsx(ae,{}),loading:o,type:"submit",disabled:!f,children:a({id:"global.save",defaultMessage:"Save"})})}),e.jsx(l,{paddingBottom:10,children:e.jsx(j.Content,{children:e.jsxs(c,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(le,{}),!z&&e.jsx(ne,{}),e.jsx(de,{localeNames:r})]})})})]})})]})},ne=()=>{const{formatMessage:r}=p();return e.jsx(l,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(c,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(g,{variant:"delta",tag:"h2",children:r({id:"global.change-password",defaultMessage:"Change password"})}),[[{label:r({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",size:6,type:"password"}],[{autoComplete:"new-password",label:r({id:"global.password",defaultMessage:"Password"}),name:"password",size:6,type:"password"},{autoComplete:"new-password",label:r({id:"Auth.form.confirmPassword.label",defaultMessage:"Confirm Password"}),name:"confirmPassword",size:6,type:"password"}]].map((a,t)=>e.jsx(d.Root,{gap:5,children:a.map(({size:s,...i})=>e.jsx(d.Item,{col:s,direction:"column",alignItems:"stretch",children:e.jsx(w,{...i})},i.name))},t))]})})},de=({localeNames:r})=>{const{formatMessage:a}=p(),t=x(s=>s.admin_app.theme.availableThemes);return e.jsx(l,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(c,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(c,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(g,{variant:"delta",tag:"h2",children:a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})}),e.jsx(g,{children:a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.jsx(l,{tag:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",children:a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"})})})})]}),e.jsx(d.Root,{gap:5,children:[{hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),name:"preferedLanguage",options:Object.entries(r).map(([s,i])=>({label:i,value:s})),placeholder:a({id:"global.select",defaultMessage:"Select"}),size:6,type:"enumeration"},{hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),name:"currentTheme",options:[{label:a({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"}),value:"system"},...t.map(s=>({label:a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:s,defaultMessage:se(s)})}),value:s}))],placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),size:6,type:"enumeration"}].map(({size:s,...i})=>e.jsx(d.Item,{col:s,direction:"column",alignItems:"stretch",children:e.jsx(w,{...i})},i.name))})]})})},le=()=>{const{formatMessage:r}=p();return e.jsx(l,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(c,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(g,{variant:"delta",tag:"h2",children:r({id:"global.profile",defaultMessage:"Profile"})}),e.jsx(d.Root,{gap:5,children:[{label:r({id:"Auth.form.firstname.label",defaultMessage:"First name"}),name:"firstname",required:!0,size:6,type:"string"},{label:r({id:"Auth.form.lastname.label",defaultMessage:"Last name"}),name:"lastname",size:6,type:"string"},{label:r({id:"Auth.form.email.label",defaultMessage:"Email"}),name:"email",required:!0,size:6,type:"email"},{label:r({id:"Auth.form.username.label",defaultMessage:"Username"}),name:"username",size:6,type:"string"}].map(({size:a,...t})=>e.jsx(d.Item,{col:a,direction:"column",alignItems:"stretch",children:e.jsx(w,{...t})},t.name))})]})})};export{he as ProfilePage};
