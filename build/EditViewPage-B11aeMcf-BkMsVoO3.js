import{ap as G,aO as U,u as C,n as W,cE as D,cI as Y,cB as q,r as M,j as e,P as u,ba as H,Z,ez as I,eA as _,ex as p,eB as S,Q as m,eC as J,eD as K,d as X,bn as ee,t as te,cz as se,F as P,B as ae,eE as ne,cy as ie}from"./strapi-Hh-aPxjw.js";import{a as oe,f as re,t as de,g as T}from"./Field-Bj_RgtGo-Cr_n5p-O.js";import"./Relations-C6pwmDXh-CuVFVM-p.js";import"./useDragAndDrop-DdHgKsqq-Djx7quPQ.js";import"./relations-BdnxoX6f-BMjPZh7O.js";import"./getEmptyImage-CjqolaH3.js";import"./ComponentIcon-u4bIXTFY-Bzu6owaO.js";import"./objects-D6yBsdmx-C5MwHK5r.js";import"./useDebounce-DmuSJIF3-E42G_WUe.js";const ce=a=>M.useEffect(a,le),le=[],v=({layout:a})=>{const{formatMessage:o}=C(),{model:d}=D();return e.jsx(P,{direction:"column",alignItems:"stretch",gap:6,children:a.map((r,c)=>{if(r.some(t=>t.some(i=>i.type==="dynamiczone"))){const[t]=r,[i]=t,g={...i,label:o({id:`content-manager.content-types.${d}.${i.name}`,defaultMessage:i.label})};return e.jsx(m.Root,{gap:4,children:e.jsx(m.Item,{col:12,s:12,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(T,{...g})})},i.name)}return e.jsx(ae,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150",children:e.jsx(P,{direction:"column",alignItems:"stretch",gap:6,children:r.map((t,i)=>e.jsx(m.Root,{gap:4,children:t.map(({size:g,...s})=>{const l={...s,label:o({id:`content-manager.content-types.${d}.${s.name}`,defaultMessage:s.label})};return e.jsx(m.Item,{col:g,s:12,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(T,{...l})},s.name)})},i))})},c)})})},ue=()=>{const a=G(),[{query:{status:o}},d]=U({status:"draft"}),{formatMessage:r}=C(),{toggleNotification:c}=W(),{document:t,meta:i,isLoading:g,schema:s,components:l,collectionType:B,id:A,model:F,hasError:w}=D(),j=s?.options?.draftAndPublish??!1;ce(()=>{a?.state&&"error"in a.state&&c({type:"danger",message:a.state.error,timeout:5e3})});const z=Y("EditViewPage",n=>n.isLoading),h=B===ne,f=!A&&!h,{isLoading:N,edit:{layout:E,settings:{mainField:b}}}=q(F),{isLazyLoading:V}=oe([]),O=z||g||N||V,y=M.useMemo(()=>{if(!t&&!f&&!h||!s)return;const n=t?.id?t:re(s,l);return de(s,l)(n)},[t,f,h,s,l]);if(w)return e.jsx(u.Error,{});if(O&&!t?.documentId)return e.jsx(u.Loading,{});if(!y)return e.jsx(u.Error,{});const $=n=>{(n==="published"||n==="draft")&&d({status:n},"push",!0)};let x="Untitled";b!=="id"&&t?.[b]?x=t[b]:h&&s?.info.displayName&&(x=s.info.displayName);const Q=(n,L)=>I(s?.attributes,l,{status:o,...L}).validateSync(n,{abortEarly:!1});return e.jsxs(H,{paddingLeft:10,paddingRight:10,children:[e.jsx(u.Title,{children:x}),e.jsx(Z,{disabled:j&&o==="published",initialValues:y,method:f?"POST":"PUT",validate:(n,L)=>I(s?.attributes,l,{status:o,...L}).validate(n,{abortEarly:!1}),initialErrors:a?.state?.forceValidation?Q(y,{}):{},children:({resetForm:n})=>e.jsxs(e.Fragment,{children:[e.jsx(_,{isCreating:f,status:j?me(t,i):void 0,title:x}),e.jsxs(p.Root,{variant:"simple",value:o,onValueChange:$,children:[e.jsx(p.List,{"aria-label":r({id:S("containers.edit.tabs.label"),defaultMessage:"Document status"}),children:j?e.jsxs(e.Fragment,{children:[e.jsx(R,{value:"draft",children:r({id:S("containers.edit.tabs.draft"),defaultMessage:"draft"})}),e.jsx(R,{disabled:!i||i.availableStatus.length===0,value:"published",children:r({id:S("containers.edit.tabs.published"),defaultMessage:"published"})})]}):null}),e.jsxs(m.Root,{paddingTop:8,gap:4,children:[e.jsxs(m.Item,{col:9,s:12,direction:"column",alignItems:"stretch",children:[e.jsx(p.Content,{value:"draft",children:e.jsx(v,{layout:E})}),e.jsx(p.Content,{value:"published",children:e.jsx(v,{layout:E})})]}),e.jsx(m.Item,{col:3,s:12,direction:"column",alignItems:"stretch",children:e.jsx(J,{})})]})]}),e.jsx(K,{onProceed:n})]})})]})},R=X(p.Trigger)`
  text-transform: uppercase;
`,me=(a,o)=>{const d=a?.status,r=o?.availableStatus??[];return d?d==="draft"&&r.find(c=>c.publishedAt!==null)?"published":d:"draft"},Se=()=>{const{slug:a=""}=ee(),{permissions:o=[],isLoading:d,error:r}=te(ie.map(c=>({action:c,subject:a})));return d?e.jsx(u.Loading,{}):r||!a?e.jsx(u.Error,{}):e.jsx(u.Protect,{permissions:o,children:({permissions:c})=>e.jsx(se,{permissions:c,children:e.jsx(ue,{})})})};export{ue as EditViewPage,Se as ProtectedEditViewPage,me as getDocumentStatus};
