import{d as W,o as D,c as A,w as l,a,r as Bu,u,N as gu,R as Eu,b as au,e as ru,f as B,g as iu,h as du,i as L,j as cu,k as j,l as y,m as M,n as Fu,p as fu,q as T,s as J,t as $,v as Z,x as uu,y as f,z as eu,A as tu,B as su,C as H,D as K,E as i,F as O,G as vu,H as ou,I as yu,J as lu,K as q,L as mu,M as G,O as wu,P as Du,Q as bu,S as Au,T as Su}from"./vendor.d219e152.js";const xu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const F of r.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&o(F)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};xu();const ku=W({setup(e){return(t,s)=>(D(),A(u(Eu),null,{default:l(({Component:o})=>[a(u(gu),null,{default:l(()=>[(D(),A(Bu(o)))]),_:2},1024)]),_:1}))}}),b="https://xlsx-collecter-api.imhcg.cn";function pu(e){return String(e)}let nu=()=>localStorage.getItem("x-api-code")||"",V={loginByAccount:"https://account.imhcg.cn/to/aae1cf3cb358fab3f0685775655dc000",getUserSheets:"/api/user/sheets",createSheetByXlsx:"/api/sheet/create",importSubusersFormXlsx(e){return`/api/user/${e}/subusers/import`},deleteSheet(e){return`/api/sheet/${e}/delete`}},N={resetLoginStatus(){delete localStorage["x-api-code"],location.assign(V.loginByAccount)},request(e="GET",t="http://",s=void 0){let o={"x-api-code":nu()||"apiCode"};return fetch(t,{method:e,headers:o,body:s,mode:"cors"})},checkLocalApiCode(){const e=au();e.query.code&&e.query.code.length===129?(localStorage.setItem("x-api-code",pu(e.query.code)),location.assign("/#/")):nu()==""&&location.assign(V.loginByAccount)},createSheetByXlsx(e,t){this.request("POST",b+V.createSheetByXlsx,e).then(s=>{s.status===200?t(!0):t(!1)})},deleteSheet(e,t){this.request("POST",b+V.deleteSheet(e.value.id),void 0).then(s=>{s.status===200?t(!0):t(!1)})},createSubUserByXlsx(e,t,s){this.request("POST",b+V.importSubusersFormXlsx(e.id),t).then(o=>{o.status===200?s(!0):s(!1)})},getUserSheets(e,t){e.value=!0,this.request("GET",b+V.getUserSheets,void 0).then(s=>{if(s.status!=200){e.value=!1,N.resetLoginStatus();return}else s.json().then(o=>{t.value=[],Object.keys(o).forEach(n=>{t.value.push({id:n,title:o[n].title,create_at:o[n].create_at})}),e.value=!1})})}};const Ru=i("\u65B0\u5EFA\u8868\u5355"),Uu=i("\u6CE8\u9500"),Nu=f("p",null,"\u8BF7\u8F93\u5165\u8868\u5355\u7684\u6807\u9898",-1),Lu=f("p",null,"\u8BF7\u4E0A\u4F20\u5236\u4F5C\u597D\u7684\u8868\u5355\u6A21\u677F\u6587\u4EF6",-1),Tu={style:{"margin-bottom":"12px"}},Ou=i(" \u70B9\u51FB\u8FD9\u91CC\u7136\u540E\u9009\u62E9\u6A21\u677F\u6587\u4EF6\uFF0C\u6216\u8005\u62D6\u52A8\u6A21\u677F\u6587\u4EF6\u5230\u8FD9\u91CC "),Vu=f("br",null,null,-1),ju=i("\u5373\u53EF\u81EA\u52A8\u4E0A\u4F20\u5E76\u5B8C\u6210\u6B64\u8868\u5355\u7684\u521B\u5EFA "),qu=i(" \u7B2C\u4E00\u6B65\uFF0C\u4F60\u9700\u8981\u5148\u4E0B\u8F7D\u6A21\u677F\uFF0C "),$u=i("\u70B9\u6B64\u4E0B\u8F7D\u6A21\u677F"),Iu=i("\uFF0C\u7565\u89C8\u6A21\u677F\u5185\u7684\u6570\u636E\u6807\u7B7E\u7528\u6CD5\u540E\u518D\u7EE7\u7EED\u3002 "),Xu=f("br",null,null,-1),Pu=i("\u7B2C\u4E8C\u6B65\uFF0C\u4F7F\u7528\u5F62\u5982 "),zu=f("code",null,"input:int->B3",-1),Mu=i("\u7684\u6570\u636E\u6807\u7B7E\u6765\u5728\u4F60\u81EA\u5DF1\u7684\u8868\u683C\u5185\u6807\u8BB0\u9700\u8981\u91C7\u96C6\u7684\u6570\u636E\u3002 \u8FD9\u91CC\u7684 "),Gu=f("code",null,"input:",-1),Ju=i("\u662F\u56FA\u5B9A\u5F00\u5934\u3002 "),Hu=f("code",null,"int->B3",-1),Ku=i("\u8BF4\u660E\u8FD9\u91CC\u9700\u8981\u4E00\u4E2A "),Qu=f("code",null,"int",-1),Wu=i("\u7C7B\u578B\u7684\u6570\u636E\uFF0C \u5E76\u4E14\u8FD9\u4E2A\u6570\u636E\u6307\u5411 "),Yu=f("code",null,"B3",-1),Zu=i("\u8FD9\u4E2A\u683C\u5B50\u3002 "),ue=f("br",null,null,-1),ee=i("\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4F60\u6709\u4E00\u4E2A\u8868\u683C\uFF0C\u9700\u8981\u586B\u5F88\u591A\u4FE1\u606F\u3002 \u91CC\u9762\u6709\u4E00\u4E2A\u683C\u5B50\u53EB\u505A "),te=f("code",null,"\u59D3\u540D",-1),se=i("\uFF0C\u59D3\u540D\u4F4D\u4E8E "),oe=f("code",null,"B3",-1),le=i("\uFF0C \u59D3\u540D\u7684\u65C1\u8FB9\u662F\u586B\u5199\u59D3\u540D\u7684\u7A7A\u683C\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u8FD9\u4E2A\u7A7A\u683C\u91CC\u586B\u4E0A "),ne=f("code",null,"input:str->B3",-1),ae=i("\u5373\u53EF\u3002 "),re=f("br",null,null,-1),ie=i("\u8FD9\u6837\uFF0C\u7CFB\u7EDF\u5C31\u53EF\u4EE5\u77E5\u9053\uFF0C\u8FD9\u4E2A\u683C\u5B50\u9700\u8981\u586B\u5199\uFF0C \u5E76\u4E14\u586B\u5199\u7684\u4E1C\u897F\u4E0E "),de=f("code",null,"B3",-1),ce=i("\u4E5F\u5C31\u662F "),Fe=f("code",null,"\u59D3\u540D",-1),fe=i("\u5173\u8054\u3002 \u8FD9\u91CC\u7684 "),pe=f("code",null,"str",-1),he=i(" \u610F\u601D\u662F\u6587\u672C\u578B\uFF0C\u56E0\u4E3A "),Ce=f("code",null,"\u59D3\u540D",-1),_e=i("\u662F\u6587\u5B57\u3002 \u540C\u7C7B\u7684\u6807\u7B7E\u8FD8\u6709 "),Be=f("code",null,"int \u6574\u6570\u3001float \u5C0F\u6570",-1),ge=i("\u3002 "),Ee=f("br",null,null,-1),ve=i("\u7B2C\u4E09\u6B65\uFF0C\u5728\u6B64\u9875\u9762\u70B9\u51FB\u4E0B\u9762\u7684\u4E0A\u4F20\u6309\u94AE\uFF0C\u4E0A\u4F20\u4F60\u7F16\u8F91\u597D\u7684 "),ye=f("code",null,".xlsx",-1),me=i("\u91C7\u96C6\u8868\u3002 \u5B8C\u6210\u4E0A\u4F20\u540E\uFF0C\u4F20\u7EDF\u8868\u683C\u5C06\u4F1A\u8F6C\u6362\u4E3A\u7F51\u9875\u8868\u5355\uFF0C\u4FBF\u4E8E\u5728\u7F51\u9875\u4E0A\u5B8C\u6210\u6570\u636E\u7684\u91C7\u96C6\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7 Excel \u7B49\u4F20\u7EDF\u8F6F\u4EF6\u3002 "),we=f("br",null,null,-1),De={style:{"margin-bottom":"12px"}},be=i(" \u70B9\u51FB\u8FD9\u91CC\u7136\u540E\u9009\u62E9\u6A21\u677F\u6587\u4EF6\uFF0C\u6216\u8005\u62D6\u52A8\u6A21\u677F\u6587\u4EF6\u5230\u8FD9\u91CC "),Ae=f("br",null,null,-1),Se=i("\u5373\u53EF\u81EA\u52A8\u4E0A\u4F20\u5E76\u5B8C\u6210\u6B64\u8868\u5355\u7528\u6237\u7684\u5BFC\u5165 "),xe=i(" \u7B2C\u4E00\u6B65\uFF0C\u4F60\u9700\u8981\u5148\u4E0B\u8F7D\u6A21\u677F\uFF0C "),ke=i("\u70B9\u6B64\u4E0B\u8F7D\u6A21\u677F"),Re=i("\u3002 "),Ue=f("br",null,null,-1),Ne=i("\u7B2C\u4E8C\u6B65\uFF0C\u4ECE\u6A21\u677F\u7684\u7B2C\u4E8C\u884C\u5F00\u59CB\uFF0C\u9010\u884C\u586B\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u6700\u540E\u8BB0\u5F97\u4FDD\u5B58\u6A21\u677F\u3002 "),Le=f("br",null,null,-1),Te=i("\u7B2C\u4E09\u6B65\uFF0C\u5728\u6B64\u9875\u9762\u70B9\u51FB\u4E0B\u9762\u7684\u4E0A\u4F20\u6309\u94AE\uFF0C\u4E0A\u4F20\u4F60\u7F16\u8F91\u597D\u7684\u6A21\u677F\u3002 \u53EA\u6709\u4F60\u4E0A\u4F20\u7684\u7528\u6237\uFF0C\u624D\u80FD\u767B\u5F55\u5230\u8FD9\u4E2A\u8868\u5355\u3002 "),Oe=f("br",null,null,-1),Ve=W({setup(e){const t=ru();let s=B({}),o=B([]);const n=B(!1);let r=B(!1),F=B(!1);const S=[{title:"\u540D\u79F0",key:"title",render(v,d){return O(y,{strong:!0,secondary:!0,size:"medium",type:"info",onClick:()=>t.push("/sheet?sheet_id="+v.id)},{default:()=>v.title})}},{title:"\u6807\u8BC6",key:"id"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"create_at",render(v,d){return O(vu,{type:"datetime",time:v.create_at,format:"yyyy-MM-dd HH:mm:ss"})}},{title:"\u5BFC\u5165\u6210\u5458",key:"\u5BFC\u5165\u6210\u5458",render(v,d){return O(y,{strong:!0,secondary:!0,size:"medium",type:"info",onClick:()=>{s.value=v,console.log(s),F.value=!0}},{default:()=>"\u5BFC\u5165\u6210\u5458"})}},{title:"\u5220\u9664\u8868\u5355",key:"\u5220\u9664\u8868\u5355",render(v,d){return O(y,{strong:!0,secondary:!0,size:"medium",type:"error",onClick:()=>{s.value=v,console.log(s),confirm(`\u786E\u8BA4\u8981\u5220\u9664\u8FD9\u4E2A\u8868\u5355\u5417\uFF1F
\u76F8\u5173\u6570\u636E\u5168\u90FD\u4F1A\u88AB\u5220\u9664\u4E14\u65E0\u6CD5\u6062\u590D`)?N.deleteSheet(s,k=>{k?(C.warning("\u5220\u9664\u6210\u529F"),N.getUserSheets(n,o)):C.info("\u5220\u9664\u5931\u8D25 \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458")}):C.info("\u5220\u9664\u64CD\u4F5C\u5DF2\u53D6\u6D88")}},{default:()=>"\u5220\u9664\u8868\u5355"})}}],p=B(""),C=iu();function _(v){let d=v.file;if(console.log(p),p.value==""){C.warning("\u8BF7\u586B\u5199\u6807\u9898");return}console.log(d);var h=new FormData;return h.append("file",d==null?void 0:d.file),h.append("title",p.value),N.createSheetByXlsx(h,k=>{k?(C.success("\u65B0\u5EFA\u6210\u529F"),N.getUserSheets(n,o),r.value=!r.value):(C.warning("\u65B0\u5EFA\u5931\u8D25 \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),r.value=!r.value)}),!0}function g(v){let d=v.file;console.log(d);var h=new FormData;h.append("file",d==null?void 0:d.file),N.createSubUserByXlsx(s.value,h,k=>{k?(C.success("\u5BFC\u5165\u6210\u529F"),F.value=!1):(C.warning("\u5BFC\u5165\u5931\u8D25 \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),F.value=!1)})}function w(){N.resetLoginStatus()}return du(()=>{console.log("UserView onMounted"),N.checkLocalApiCode(),N.getUserSheets(n,o)}),(v,d)=>(D(),A(u(L),{vertical:"",size:"large"},{default:l(()=>[a(u(cu),{"content-style":"padding: 24px;"},{default:l(()=>[a(u(L),{justify:"space-between"},{default:l(()=>[a(u(j),{style:{"margin-bottom":"12px"}},{default:l(()=>[a(u(y),{onClick:d[0]||(d[0]=h=>M(r)?r.value=!u(r):r=!u(r)),strong:"",secondary:"",type:"info"},{default:l(()=>[Ru]),_:1})]),_:1}),a(u(j),{style:{"margin-bottom":"12px"}},{default:l(()=>[a(u(y),{onClick:w,strong:"",secondary:"",type:"error"},{default:l(()=>[Uu]),_:1})]),_:1})]),_:1}),u(o).length?(D(),A(u(Fu),{key:0},{default:l(()=>[a(u(fu),{columns:S,data:u(o),loading:n.value},null,8,["data","loading"])]),_:1})):T("",!0),a(u(K),{show:u(r),"onUpdate:show":d[2]||(d[2]=h=>M(r)?r.value=h:r=h),width:600},{default:l(()=>[a(u(J),{title:"\u521B\u5EFA\u8868\u5355",closable:""},{default:l(()=>[a(u(L),{vertical:""},{default:l(()=>[Nu,a(u($),{value:p.value,"onUpdate:value":d[1]||(d[1]=h=>p.value=h),type:"text",placeholder:"\u8F93\u5165\u8868\u5355\u7684\u6807\u9898",clearable:""},null,8,["value"]),Lu,a(u(Z),{"on-change":_,"default-upload":!1,accept:".xlsx"},{default:l(()=>[a(u(uu),null,{default:l(()=>[f("div",Tu,[a(u(eu),{size:"100",depth:3},{default:l(()=>[a(u(tu))]),_:1})]),a(u(su),{style:{"font-size":"16px"}},{default:l(()=>[Ou,Vu,ju]),_:1})]),_:1})]),_:1}),a(u(H),null,{default:l(()=>[qu,a(u(y),{text:"",tag:"a",href:"../assets/\u793A\u4F8B-\u4FE1\u606F\u91C7\u96C6\u8868.xlsx",target:"_blank",type:"primary"},{default:l(()=>[$u]),_:1}),Iu,Xu,Pu,zu,Mu,Gu,Ju,Hu,Ku,Qu,Wu,Yu,Zu,ue,ee,te,se,oe,le,ne,ae,re,ie,de,ce,Fe,fe,pe,he,Ce,_e,Be,ge,Ee,ve,ye,me,we]),_:1})]),_:1})]),_:1})]),_:1},8,["show"]),a(u(K),{show:u(F),"onUpdate:show":d[3]||(d[3]=h=>M(F)?F.value=h:F=h),width:600},{default:l(()=>[a(u(J),{title:"\u5BFC\u5165\u7528\u6237\u81F3 "+u(s).title,closable:""},{default:l(()=>[a(u(L),{vertical:""},{default:l(()=>[a(u(Z),{"on-change":g,"default-upload":!1,accept:".xlsx"},{default:l(()=>[a(u(uu),null,{default:l(()=>[f("div",De,[a(u(eu),{size:"100",depth:3},{default:l(()=>[a(u(tu))]),_:1})]),a(u(su),{style:{"font-size":"16px"}},{default:l(()=>[be,Ae,Se]),_:1})]),_:1})]),_:1}),a(u(H),null,{default:l(()=>[xe,a(u(y),{text:"",tag:"a",href:"../assets/\u793A\u4F8B-\u5B50\u7528\u6237\u5BFC\u5165.xlsx",target:"_blank",type:"primary"},{default:l(()=>[ke]),_:1}),Re,Ue,Ne,Le,Te,Oe]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["show"])]),_:1})]),_:1}))}});let Q=()=>localStorage.getItem("x-api-subuser-code")||"";const U={login(e){return`/api/user/${e}/subuser/login`},getSheetColumns(e){return`/api/sheet/${e}/columns`},getRowsFromDb(e){return`/api/sheet/${e}/rows`},insertRowToDb(e){return`/api/sheet/${e}/row/insert`},updateRowToDb(e,t){return`/api/sheet/${e}/row/${t}/update`},deleteRowFromDb(e,t){return`/api/sheet/${e}/row/${t}/delete`},deleteRowsFromDb(e){return`/api/sheet/${e}/rows/delete`},outputToXlsxFile(e,t){return`/api/sheet/${e}/rows/${t}/xlsx`},outputRowsToXlsx(e){return`/api/sheet/${e}/rows/xlsx`}};let c={request(e="GET",t="http://",s=void 0,o="application/json"){let n={"x-api-subuser-code":Q(),"content-type":o};return fetch(t,{method:e,headers:n,body:s,mode:"cors"})},resetLoginStatus(e){delete localStorage["x-api-subuser-code"],delete localStorage.name,e.value.subUserLoginVisible=!0},checkSheetIdAndApiCode(e,t,s,o,n,r,F,S,p){const C=au();C.query.sheet_id&&C.query.sheet_id.length==32?(e.value=pu(C.query.sheet_id),console.log("checkSheetIdAndApiCode",e)):location.assign("/"),Q?(c.getSubUserColumns(e,t,s,o,n,r,F,S,p),c.getSubUserRows(S,e,p,F)):F.value.subUserLoginVisible=!0},sheetSubuserLogin(e,t,s){c.request("POST",b+U.login(e.value),JSON.stringify({account:t.value.account,password:t.value.password}),"application/json").then(o=>{if(o.status==200)return o.json().then(n=>{console.log("sheetSubuserLogin",n),localStorage.setItem("x-api-subuser-code",n["x-api-subuser-code"]),localStorage.setItem("name",n.name),s(!0)});s(!1)})},getSubUserRows(e,t,s,o){e.value=!0,c.request("GET",b+U.getRowsFromDb(t.value),void 0).then(n=>{if(n.status!=200){e.value=!1,c.resetLoginStatus(o);return}else n.json().then(r=>{console.log("getSubUserRows",r),s.value=r,e.value=!1})})},resetCurrentRow(e,t){Object.keys(t.value).forEach(s=>{e.value[s]=""}),console.log("resetCurrentRow",e)},fillCurrentRow(e,t,s){Object.keys(s).forEach(o=>{e.value[o]=s[o]}),console.log("resetCurrentRow",e)},getSubUserColumns(e,t,s,o,n,r,F,S,p){c.request("GET",b+U.getSheetColumns(e.value),void 0).then(C=>{if(C.status!=200){c.resetLoginStatus(F);return}else C.json().then(_=>{t.value=_;let g=[];g.push({type:"selection"});let w=[];Object.keys(_).forEach(d=>{g.push({key:d,title:_[d].name}),w.push({key:d,title:_[d].name,type:_[d].type})}),s.value=w;const v={title:"\u64CD\u4F5C",render(d){let h=[];const k=O(y,{strong:!0,secondary:!0,type:"info",onClick:()=>{console.log("\u52A0\u8F7D rowData",d,"-> currentRow",n),c.fillCurrentRow(n,t,d),r.value="\u66F4\u65B0",F.value.createNewRowDrawerVisible=!0}},{default:()=>"\u4FEE\u6539"}),I=O(y,{strong:!0,secondary:!0,type:"info",style:"margin-left:5px;",onClick:()=>{console.log("\u5220\u9664",d),n.value=d,confirm("\u786E\u8BA4\u5220\u9664\u5417?")&&c.deleteRow(e,n,P=>{P?c.getSubUserRows(S,e,p,F):alert("\u5220\u9664\u5931\u8D25 \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458")})}},{default:()=>"\u5220\u9664"}),R=O(y,{strong:!0,secondary:!0,type:"info",style:"margin-left:5px;",onClick:()=>{console.log("\u5BFC\u51FA",d),n.value=d,c.outputToXlsxFile(e,n)}},{default:()=>"\u5BFC\u51FA"});return h.push([k,I,R]),h}};g.push(v),o.value=g,console.log("tableColumns",o)})})},insertRow(e,t,s){c.request("POST",b+U.insertRowToDb(e.value),JSON.stringify(t.value),"application/json").then(o=>{o.status==200?s(!0):s(!1)})},updateRow(e,t,s){c.request("POST",b+U.updateRowToDb(e.value,t.value.rowid),JSON.stringify(t.value),"application/json").then(o=>{o.status==200?s(!0):s(!1)})},deleteRow(e,t,s){c.request("POST",b+U.deleteRowFromDb(e.value,t.value.rowid),void 0,"application/json").then(o=>{o.status==200?s(!0):s(!1)})},deleteRows(e,t,s){c.request("POST",b+U.deleteRowsFromDb(e.value),JSON.stringify(t.value),"application/json").then(o=>{o.status==200?s(!0):s(!1)})},outputToXlsxFile(e,t){c.request("GET",b+U.outputToXlsxFile(e.value,t.value.rowid),void 0,"application/json").then(s=>{s.status==200&&s.blob().then(o=>{let n=URL.createObjectURL(o),r=document.createElement("a");r.style.display="none",r.href=n,r.download="\u5BFC\u51FA\u6570\u636E-"+t.value[Object.keys(t.value)[1]]+".xlsx",r.click(),URL.revokeObjectURL(n),document.body.removeChild(r)})})},outputRows(e,t,s){c.request("POST",b+U.outputRowsToXlsx(e.value),JSON.stringify(t.value),"application/json").then(o=>{o.status==200?(s(!0),o.blob().then(n=>{let r=URL.createObjectURL(n),F=document.createElement("a");F.style.display="none",F.href=r,F.download="\u6279\u91CF\u5BFC\u51FA\u6570\u636E-"+new Date().getTime()+".zip",F.click(),URL.revokeObjectURL(r),document.body.removeChild(F)})):s(!1)})}};const je=i("\u9A8C\u8BC1"),qe=i("\u65B0\u589E\u6570\u636E"),$e=i("\u65B0\u589E"),Ie=i("\u66F4\u65B0"),Xe=W({setup(e){let t=B(""),s=B({account:"",password:"",name:()=>localStorage.getItem("name")});B([]);let o=B([]),n=B([]),r=B({}),F=B([]),S=B([]),p=B({subUserLoginVisible:!1,createNewRowDrawerVisible:!1}),C=B("");const _=B(!1);ru();const g=iu(),w=B([]),v={account:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["input","blur"]}},d=B(null),h=B(!1);function k(x){var m;x.preventDefault(),h.value=!0,(m=d.value)==null||m.validate(E=>{E?(console.log("handleValidateClick",E),h.value=!1,g.error("\u8BF7\u5B8C\u5584\u767B\u5F55\u4FE1\u606F")):(console.log("handleValidateClick","\u5C1D\u8BD5\u767B\u5F55"),c.sheetSubuserLogin(t,s,z=>{z?(g.success("\u767B\u5F55\u6210\u529F"),p.value.subUserLoginVisible=!1,h.value=!1,c.getSubUserColumns(t,n,F,S,r,C,p,_,o),c.getSubUserRows(_,t,o,p)):(h.value=!1,g.error("\u767B\u5F55\u5931\u8D25"))}))})}function I(){C.value="\u65B0\u589E",c.resetCurrentRow(r,n),p.value.createNewRowDrawerVisible=!0}const R=B(!1);function X(){R.value=!0,C.value=="\u65B0\u589E"&&c.insertRow(t,r,x=>{x?(g.success("\u65B0\u589E\u6210\u529F"),p.value.createNewRowDrawerVisible=!1,R.value=!1,c.getSubUserRows(_,t,o,p)):(R.value=!1,g.error("\u65B0\u589E\u5931\u8D25 \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"))}),C.value=="\u66F4\u65B0"&&c.updateRow(t,r,x=>{x?(g.success("\u66F4\u65B0\u6210\u529F"),p.value.createNewRowDrawerVisible=!1,R.value=!1,c.getSubUserRows(_,t,o,p)):(R.value=!1,g.error("\u66F4\u65B0\u5931\u8D25 \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"))}),console.log("saveRow",r)}function P(x){w.value=x,console.log("handleTableRowsCheck",w.value)}function hu(){confirm(`\u786E\u8BA4\u8981\u6279\u91CF\u5220\u9664\u8FD9\u4E9B\u6570\u636E\u5417\uFF1F
\u76F8\u5173\u6570\u636E\u5168\u90FD\u4F1A\u88AB\u5220\u9664\u4E14\u65E0\u6CD5\u6062\u590D`)?(_.value=!0,c.deleteRows(t,w,m=>{m?(g.success("\u6279\u91CF\u5220\u9664\u6210\u529F"),c.getSubUserRows(_,t,o,p),w.value=[],_.value=!1):(_.value=!1,g.error("\u6279\u91CF\u5220\u9664\u5931\u8D25 \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"))})):g.info("\u6279\u91CF\u5220\u9664\u64CD\u4F5C\u5DF2\u53D6\u6D88")}function Cu(){confirm("\u786E\u8BA4\u8981\u6279\u91CF\u5BFC\u51FA\u8FD9\u4E9B\u6570\u636E\u5417\uFF1F")?(_.value=!0,c.outputRows(t,w,m=>{m?(g.success("\u6279\u91CF\u5BFC\u51FA\u6210\u529F"),_.value=!1):(g.error("\u6279\u91CF\u5BFC\u51FA\u5931\u8D25 \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),_.value=!1)})):(g.info("\u6279\u91CF\u5BFC\u51FA\u64CD\u4F5C\u5DF2\u53D6\u6D88"),_.value=!1)}function _u(){c.resetLoginStatus(p)}return du(()=>{console.log("SheetView onMounted"),c.checkSheetIdAndApiCode(t,n,F,S,r,C,p,_,o)}),(x,m)=>(D(),ou(lu,null,[a(u(yu),{show:u(p).subUserLoginVisible,"onUpdate:show":m[2]||(m[2]=E=>u(p).subUserLoginVisible=E),"mask-closable":!1,"close-on-esc":!1,"auto-focus":""},{default:l(()=>[a(u(H),{style:{width:"600px"},title:"\u9700\u8981\u767B\u5F55",bordered:!0,size:"huge",role:"dialog","aria-modal":"true"},{default:l(()=>[a(u(mu),{ref_key:"formRef",ref:d,inline:"","label-width":80,model:u(s),rules:v,size:"medium"},{default:l(()=>[a(u(q),{label:"\u7528\u6237\u540D",path:"account"},{default:l(()=>[a(u($),{value:u(s).account,"onUpdate:value":m[0]||(m[0]=E=>u(s).account=E),placeholder:"\u8F93\u5165\u8D26\u53F7"},null,8,["value"])]),_:1}),a(u(q),{label:"\u5BC6\u7801",path:"password"},{default:l(()=>[a(u($),{value:u(s).password,"onUpdate:value":m[1]||(m[1]=E=>u(s).password=E),placeholder:"\u8F93\u5165\u5BC6\u7801"},null,8,["value"])]),_:1}),a(u(q),null,{default:l(()=>[a(u(y),{"attr-type":"button",loading:h.value,onClick:k},{default:l(()=>[je]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["show"]),u(Q)()?(D(),A(u(L),{key:0,vertical:"",size:"large"},{default:l(()=>[a(u(cu),{"content-style":"padding: 24px;"},{default:l(()=>[a(u(L),{justify:"space-between"},{default:l(()=>[a(u(j),{style:{"margin-bottom":"12px"}},{default:l(()=>[a(u(L),null,{default:l(()=>[a(u(y),{onClick:I,strong:"",secondary:"",type:"info"},{default:l(()=>[qe]),_:1}),w.value.length>1?(D(),A(u(y),{key:0,onClick:Cu,strong:"",secondary:"",type:"info"},{default:l(()=>[i("\u5BFC\u51FA\u8FD9 "+G(w.value.length)+" \u9879",1)]),_:1})):T("",!0),w.value.length>1?(D(),A(u(y),{key:1,onClick:hu,strong:"",secondary:"",type:"error"},{default:l(()=>[i("\u5220\u9664\u8FD9 "+G(w.value.length)+" \u9879",1)]),_:1})):T("",!0)]),_:1})]),_:1}),a(u(j),{style:{"margin-bottom":"12px"}},{default:l(()=>[a(u(y),{onClick:_u,strong:"",secondary:"",type:"error"},{default:l(()=>[i("\u6CE8\u9500 "+G(u(s).name()),1)]),_:1})]),_:1})]),_:1}),u(o).length?(D(),A(u(Fu),{key:0},{default:l(()=>[a(u(fu),{"row-key":E=>E.rowid,"onUpdate:checkedRowKeys":P,columns:u(S),data:u(o),loading:_.value},null,8,["row-key","columns","data","loading"])]),_:1})):T("",!0)]),_:1})]),_:1})):T("",!0),a(u(K),{show:u(p).createNewRowDrawerVisible,"onUpdate:show":m[3]||(m[3]=E=>u(p).createNewRowDrawerVisible=E),width:600},{default:l(()=>[a(u(J),{title:u(C),closable:""},{default:l(()=>[a(u(L),{vertical:""},{default:l(()=>[(D(!0),ou(lu,null,wu(u(F),E=>(D(),A(u(q),{key:E.key+"",label:E.title},{default:l(()=>[a(u($),{"input-props":{type:{str:"text",int:"number",float:"number"}[E.type]},value:u(r)[E.key],"onUpdate:value":z=>u(r)[E.key]=z,type:"text",placeholder:E.title,clearable:"",title:{str:"\u8BF7\u8F93\u5165\u6587\u672C",int:"\u8BF7\u8F93\u5165\u6570\u5B57",float:"\u8BF7\u8F93\u5165\u6570\u5B57"}[E.type]},null,8,["input-props","value","onUpdate:value","placeholder","title"])]),_:2},1032,["label"]))),128)),a(u(j),{style:{"margin-bottom":"12px"}},{default:l(()=>[u(C)=="\u65B0\u589E"?(D(),A(u(y),{key:0,strong:"",secondary:"",type:"info",loading:R.value,onClick:X},{default:l(()=>[$e]),_:1},8,["loading"])):T("",!0),u(C)=="\u66F4\u65B0"?(D(),A(u(y),{key:1,strong:"",secondary:"",type:"info",loading:R.value,onClick:X},{default:l(()=>[Ie]),_:1},8,["loading"])):T("",!0)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["show"])],64))}}),Pe=Du({history:bu(),routes:[{path:"/",name:"user",component:Ve},{path:"/sheet",name:"sheet",component:Xe}]}),Y=Au(ku);Y.use(Su());Y.use(Pe);Y.mount("#app");
