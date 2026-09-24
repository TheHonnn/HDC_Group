1,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.2.4`
};
return e.overrideHookState=OC,e.overrideHookStateDeletePath=kC,e.overrideHookStateRenamePath=AC,e.overrideProps=jC,e.overridePropsDeletePath=MC,e.overridePropsRenamePath=NC,e.scheduleUpdate=PC,e.scheduleRetry=FC,e.setErrorHandler=IC,e.setSuspenseHandler=LC,e.scheduleRefresh=v,e.scheduleRoot=_,e.setRefreshHandler=y,e.getCurrentFiber=df,je(e)
})()&&ih&&window.top===window.self&&(-1<navigator.userAgent.indexOf(`Chrome`)&&navigator.userAgent.indexOf(`Edge`)===-1||-1<navigator.userAgent.indexOf(`Firefox`))){
var YC=window.location.protocol;
/^(https?|file):$/.test(YC)&&console.info(`%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools`+(YC===`file:`?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:``),`font-weight:bold`)
}e.createRoot=function(e,t){
if(!b(e))throw Error(`Target container is not a DOM element.`);
jf(e);
var n=!1,r=``,i=ss,a=cs,o=ls;
return t!=null&&(t.hydrate?console.warn(`hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.`):typeof t==`object`&&t&&t.$$typeof===If&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);

  root.render(<App />);
`),!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=rf(e,1,!1,null,null,n,r,null,i,a,o,Of),e[Qp]=t.current,hu(e),new kf(t)
},e.hydrateRoot=function(e,t,n){
if(!b(e))throw Error(`Target container is not a DOM element.`);
jf(e),t===void 0&&console.error(`Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)`);
var r=!1,i=``,a=ss,o=cs,s=ls,c=null;
return n!=null&&(!0===n.unstable_strictMode&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=rf(e,1,!0,t,n??null,r,i,c,a,o,s,Of),t.context=af(null),n=t.current,r=al(n),r=Ge(r),i=aa(r),i.callback=null,oa(n,i,r),pi(r,`hydrateRoot()`,null),n=r,t.current.lanes=n,Be(t,n),$l(t),e[Qp]=t.current,hu(e),new Af(t)
},e.version=`19.2.4`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())
})()
})),g=o(((e,t)=>{
t.exports=h()
})),_=o((e=>{
(function(){
function t(e){
if(e==null)return null;
if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;
if(typeof e==`string`)return e;
switch(e){
case v:return`Fragment`;
case b:return`Profiler`;
case y:return`StrictMode`;
case te:return`Suspense`;
case ne:return`SuspenseList`;
case C:return`Activity`
}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){
case _:return`Portal`;
case S:return e.displayName||`Context`;
case x:return(e._context.displayName||`Context`)+`.Consumer`;
case ee:var n=e.render;
return e=e.displayName,e||=(e=n.displayName||n.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;
case re:return n=e.displayName||null,n===null?t(e.type)||`Memo`:n;
case ie:n=e._payload,e=e._init;
try{
return t(e(n))
}catch{

}
}return null
}function n(e){
return``+e
}function r(e){
try{
n(e);
var t=!1
}catch{
t=!0
}if(t){
t=console;
var r=t.error,i=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;
return r.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,i),n(e)
}
}function i(e){
if(e===v)return`<>`;
if(typeof e==`object`&&e&&e.$$typeof===ie)return`<...>`;
try{
var n=t(e);
return n?`<`+n+`>`:`<...>`
}catch{
return`<...>`
}
}function a(){
var e=w.A;
return e===null?null:e.getOwner()
}function o(){
return Error(`react-stack-top-frame`)
}function s(e){
if(oe.call(e,`key`)){
var t=Object.getOwnPropertyDescriptor(e,`key`).get;
if(t&&t.isReactWarning)return!1
}return e.key!==void 0
}function c(e,t){
function n(){
ce||(ce=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))
}n.isReactWarning=!0,Object.defineProperty(e,`key`,{
get:n,configurable:!0
})
}function l(){
var e=t(this.type);
return le[e]||(le[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e
}function d(e,t,n,r,i,a){
var o=n.ref;
return e={
$$typeof:g,type:e,key:t,props:n,_owner:r
},(o===void 0?null:o)===null?Object.defineProperty(e,`ref`,{
enumerable:!1,value:null
}):Object.defineProperty(e,`ref`,{
enumerable:!1,get:l
}),e._store={

},Object.defineProperty(e._store,`validated`,{
configurable:!1,enumerable:!1,writable:!0,value:0
}),Object.defineProperty(e,`_debugInfo`,{
configurable:!1,enumerable:!1,writable:!0,value:null
}),Object.defineProperty(e,`_debugStack`,{
configurable:!1,enumerable:!1,writable:!0,value:i
}),Object.defineProperty(e,`_debugTask`,{
configurable:!1,enumerable:!1,writable:!0,value:a
}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e
}function f(e,n,i,o,l,u){
var f=n.children;
if(f!==void 0)if(o)if(se(f)){
for(o=0;
o<f.length;
o++)p(f[o]);
Object.freeze&&Object.freeze(f)
}else console.error(`React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.`);
else p(f);
if(oe.call(n,`key`)){
f=t(e);
var m=Object.keys(n).filter(function(e){
return e!==`key`
});
o=0<m.length?`{
key: someKey, `+m.join(`: ..., `)+`: ...
}`:`{
key: someKey
}`,fe[f+o]||(m=0<m.length?`{
`+m.join(`: ..., `)+`: ...
}`:`{

}`,console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;

  <%s {
...props
} />
React keys must be passed directly to JSX without using spread:
  let props = %s;

  <%s key={
someKey
} {
...props
} />`,o,f,m,f),fe[f+o]=!0)
}if(f=null,i!==void 0&&(r(i),f=``+i),s(n)&&(r(n.key),f=``+n.key),`key`in n)for(var h in i={

},n)h!==`key`&&(i[h]=n[h]);
else i=n;
return f&&c(i,typeof e==`function`?e.displayName||e.name||`Unknown`:e),d(e,f,i,a(),l,u)
}function p(e){
m(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===ie&&(e._payload.status===`fulfilled`?m(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))
}function m(e){
return typeof e==`object`&&!!e&&e.$$typeof===g
}var h=u(),g=Symbol.for(`react.transitional.element`),_=Symbol.for(`react.portal`),v=Symbol.for(`react.fragment`),y=Symbol.for(`react.strict_mode`),b=Symbol.for(`react.profiler`),x=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),ee=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),C=Symbol.for(`react.activity`),ae=Symbol.for(`react.client.reference`),w=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=Object.prototype.hasOwnProperty,se=Array.isArray,T=console.createTask?console.createTask:function(){
return null
};
h={
react_stack_bottom_frame:function(e){
return e()
}
};
var ce,le={

},ue=h.react_stack_bottom_frame.bind(h,o)(),de=T(i(o)),fe={

};
e.Fragment=v,e.jsxDEV=function(e,t,n,r){
var a=1e4>w.recentlyCreatedOwnerStacks++;
return f(e,t,n,r,a?Error(`react-stack-top-frame`):ue,a?T(i(e)):de)
}
})()
})),v=o(((e,t)=>{
t.exports=_()
})),y=c(g(),1),b=c(u(),1),x=v(),S=`/workspaces/default/.publishing/src/App.tsx`,ee={
founder:`/src/imports/1790138822725_5676346164805423165_g351590524180151578_d0240d27c274de1fc73906538b5276e1.jpg`,hero:`/src/imports/0001.jpg`,green:`/src/imports/0002.jpg`,seamless:`/src/imports/0003.jpg`,culture:`/src/imports/0004.jpg`,shirts:`/src/imports/0005.jpg`,polo:`/src/imports/0006.jpg`,corporate:`/src/imports/0007.jpg`,golf:`/src/imports/0008.jpg`,kids:`/src/imports/0011.jpg`
},te=[{
id:`so-mi`,name:`Sơ mi doanh nhân`,note:`Tối giản · chỉn chu · đẳng cấp`,image:ee.hero
},{
id:`polo`,name:`Polo năng động`,note:`Thoáng khí · đa sắc · bền màu`,image:ee.polo
},{
id:`golf`,name:`Golf & sự kiện`,note:`Linh hoạt · nhận diện nổi bật`,image:ee.golf
},{
id:`kids`,name:`Đồng phục học sinh`,note:`Êm nhẹ · vừa vặn · tươi mới`,image:ee.kids
}],ne=[{
id:`all`,label:`Tất cả mẫu`
},{
id:`shirt`,label:`Sơ mi`
},{
id:`polo`,label:`Polo`
},{
id:`uniform`,label:`Đồng phục DN`
},{
id:`kid`,label:`Trẻ em`
}],re=[{
id:1,category:`shirt`,name:`Sơ mi executive xanh trời`,code:`HDC-SM 01`,image:ee.shirts,position:`12% 20%`
},{
id:2,category:`shirt`,name:`Sơ mi seamless kẻ mảnh`,code:`HDC-SM 02`,image:ee.seamless,position:`50% 41%`
},{
id:3,category:`polo`,name:`Polo active cổ phối`,code:`HDC-PL 01`,image:ee.polo,position:`26% 31%`
},{
id:4,category:`polo`,name:`Polo signature trắng navy`,code:`HDC-PL 02`,image:ee.polo,position:`77% 32%`
},{
id:5,category:`uniform`,name:`Đồng phục doanh nghiệp`,code:`HDC-DN 01`,image:ee.corporate,position:`68% 35%`
},{
id:6,category:`uniform`,name:`Golf & sự kiện thương hiệu`,code:`HDC-GF 01`,image:ee.golf,position:`49% 43%`
},{
id:7,category:`kid`,name:`Polo kids trắng`,code:`HDC-KD 01`,image:ee.kids,position:`17% 30%`
},{
id:8,category:`kid`,name:`Polo kids sắc màu`,code:`HDC-KD 02`,image:ee.kids,position:`71% 30%`
}];
function ie(){
return(0,x.jsxDEV)(`span`,{
"aria-hidden":`true`,className:`text-xl transition-transform group-hover:translate-x-1`,children:`→`
},void 0,!1,{
fileName:S,lineNumber:39,columnNumber:10
},this)
}function C({
onClose:e
}){
let[t,n]=(0,b.useState)(`all`),[r,i]=(0,b.useState)(null),a=t===`all`?re:re.filter(e=>e.category===t),o=re.find(e=>e.id===r);
return(0,x.jsxDEV)(`main`,{
className:`min-h-screen bg-[#f6f7f4] text-[#102a32]`,children:[(0,x.jsxDEV)(`div`,{
className:`bg-[#0d3039] px-5 py-2.5 text-center text-[10px] font-semibold tracking-[.18em] text-[#e4c36f]`,children:`HDC FASHION · MAY ĐO THEO NHẬN DIỆN THƯƠNG HIỆU`
},void 0,!1,{
fileName:S,lineNumber:48,columnNumber:5
},this),(0,x.jsxDEV)(`header`,{
className:`border-b border-[#153e47]/10`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8`,children:[(0,x.jsxDEV)(`button`,{
onClick:e,className:`flex items-center gap-3`,children:[(0,x.jsxDEV)(`span`,{
className:`grid h-10 w-10 place-items-center bg-[#0d9bb4] text-xl font-black text-white`,children:`H`
},void 0,!1,{
fileName:S,lineNumber:49,columnNumber:203
},this),(0,x.jsxDEV)(`span`,{
className:`text-left`,children:[(0,x.jsxDEV)(`b`,{
className:`block text-lg leading-none`,children:`HDC`
},void 0,!1,{
fileName:S,lineNumber:49,columnNumber:334
},this),(0,x.jsxDEV)(`span`,{
className:`text-[9px] font-bold tracking-[.24em] text-[#168ca5]`,children:`FASHION`
},void 0,!1,{
fileName:S,lineNumber:49,columnNumber:383
},this)]
},void 0,!0,{
fileName:S,lineNumber:49,columnNumber:306
},this)]
},void 0,!0,{
fileName:S,lineNumber:49,columnNumber:141
},this),(0,x.jsxDEV)(`button`,{
onClick:e,className:`text-xs font-bold tracking-[.12em]`,children:`← VỀ TRANG CHỦ`
},void 0,!1,{
fileName:S,lineNumber:49,columnNumber:484
},this)]
},void 0,!0,{
fileName:S,lineNumber:49,columnNumber:54
},this)
},void 0,!1,{
fileName:S,lineNumber:49,columnNumber:5
},this),(0,x.jsxDEV)(`section`,{
className:`border-b border-[#153e47]/10 bg-[#e2eff1]`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto max-w-7xl px-5 py-16 lg:px-8`,children:[(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.2em] text-[#0d9bb4]`,children:`HDC / SHOP`
},void 0,!1,{
fileName:S,lineNumber:50,columnNumber:122
},this),(0,x.jsxDEV)(`h1`,{
className:`font-display mt-3 text-5xl leading-[.92] sm:text-6xl`,children:[`Gian hàng`,(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:50,columnNumber:278
},this),(0,x.jsxDEV)(`em`,{
className:`font-normal text-[#0d9bb4]`,children:`đồng phục.`
},void 0,!1,{
fileName:S,lineNumber:50,columnNumber:284
},this)]
},void 0,!0,{
fileName:S,lineNumber:50,columnNumber:200
},this),(0,x.jsxDEV)(`p`,{
className:`mt-6 max-w-xl leading-7 text-[#597077]`,children:`Khám phá các mẫu nổi bật của HDC. Mọi thiết kế đều có thể tinh chỉnh màu sắc, chất liệu và chi tiết nhận diện theo doanh nghiệp của bạn.`
},void 0,!1,{
fileName:S,lineNumber:50,columnNumber:347
},this)]
},void 0,!0,{
fileName:S,lineNumber:50,columnNumber:68
},this)
},void 0,!1,{
fileName:S,lineNumber:50,columnNumber:5
},this),(0,x.jsxDEV)(`section`,{
className:`mx-auto max-w-7xl px-5 py-12 lg:px-8`,children:[(0,x.jsxDEV)(`div`,{
className:`flex flex-wrap gap-2 border-b border-[#153e47]/15 pb-8`,children:ne.map(e=>(0,x.jsxDEV)(`button`,{
onClick:()=>n(e.id),className:`px-4 py-3 text-xs font-bold tracking-[.1em] transition ${
t===e.id?`bg-[#0d3039] text-white`:`border border-[#153e47]/20 text-[#46636a] hover:border-[#0d9bb4] hover:text-[#0d9bb4]`
}`,children:e.label
},e.id,!1,{
fileName:S,lineNumber:51,columnNumber:165
},this))
},void 0,!1,{
fileName:S,lineNumber:51,columnNumber:63
},this),(0,x.jsxDEV)(`div`,{
className:`mt-8 flex justify-between`,children:[(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.15em] text-[#0d9bb4]`,children:[a.length.toString().padStart(2,`0`),` MẪU SẢN PHẨM`]
},void 0,!0,{
fileName:S,lineNumber:51,columnNumber:507
},this),(0,x.jsxDEV)(`p`,{
className:`text-xs text-[#6d858a]`,children:`Bấm vào mẫu để xem tư vấn`
},void 0,!1,{
fileName:S,lineNumber:51,columnNumber:633
},this)]
},void 0,!0,{
fileName:S,lineNumber:51,columnNumber:464
},this),(0,x.jsxDEV)(`div`,{
className:`mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4`,children:a.map(e=>(0,x.jsxDEV)(`button`,{
onClick:()=>i(e.id),className:`group overflow-hidden bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl`,children:[(0,x.jsxDEV)(`div`,{
className:`relative aspect-[.88] overflow-hidden bg-[#e8eef0]`,children:[(0,x.jsxDEV)(`img`,{
src:e.image,alt:e.name,className:`h-full w-full object-cover transition duration-700 group-hover:scale-110`,style:{
objectPosition:e.position
}
},void 0,!1,{
fileName:S,lineNumber:51,columnNumber:1030
},this),(0,x.jsxDEV)(`span`,{
className:`absolute left-3 top-3 bg-[#f6f7f4] px-2 py-1 text-[9px] font-bold tracking-[.12em]`,children:e.code
},void 0,!1,{
fileName:S,lineNumber:51,columnNumber:1197
},this)]
},void 0,!0,{
fileName:S,lineNumber:51,columnNumber:962
},this),(0,x.jsxDEV)(`div`,{
className:`flex items-end justify-between p-4`,children:[(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`h2`,{
className:`font-display text-xl leading-tight`,children:e.name
},void 0,!1,{
fileName:S,lineNumber:51,columnNumber:1379
},this),(0,x.jsxDEV)(`p`,{
className:`mt-1 text-[10px] font-bold tracking-[.1em] text-[#0d9bb4]`,children:`XEM CHI TIẾT`
},void 0,!1,{
fileName:S,lineNumber:51,columnNumber:1446
},this)]
},void 0,!0,{
fileName:S,lineNumber:51,columnNumber:1374
},this),(0,x.jsxDEV)(ie,{

},void 0,!1,{
fileName:S,lineNumber:51,columnNumber:1541
},this)]
},void 0,!0,{
fileName:S,lineNumber:51,columnNumber:1322
},this)]
},e.id,!0,{
fileName:S,lineNumber:51,columnNumber:792
},this))
},void 0,!1,{
fileName:S,lineNumber:51,columnNumber:706
},this)]
},void 0,!0,{
fileName:S,lineNumber:51,columnNumber:5
},this),(0,x.jsxDEV)(`section`,{
className:`bg-[#0d3039] px-5 py-12 text-white`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:px-3`,children:[(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.18em] text-[#73d8e5]`,children:`CHƯA TÌM THẤY MẪU PHÙ HỢP?`
},void 0,!1,{
fileName:S,lineNumber:52,columnNumber:185
},this),(0,x.jsxDEV)(`h2`,{
className:`font-display mt-2 text-3xl`,children:`Hãy để HDC thiết kế riêng cho bạn.`
},void 0,!1,{
fileName:S,lineNumber:52,columnNumber:280
},this)]
},void 0,!0,{
fileName:S,lineNumber:52,columnNumber:180
},this),(0,x.jsxDEV)(`button`,{
onClick:e,className:`bg-[#e4c36f] px-6 py-4 text-xs font-bold tracking-[.12em] text-[#102a32]`,children:`NHẬN TƯ VẤN`
},void 0,!1,{
fileName:S,lineNumber:52,columnNumber:368
},this)]
},void 0,!0,{
fileName:S,lineNumber:52,columnNumber:61
},this)
},void 0,!1,{
fileName:S,lineNumber:52,columnNumber:5
},this),o&&(0,x.jsxDEV)(`div`,{
className:`fixed inset-0 z-50 grid place-items-center bg-[#06232b]/70 p-5`,onClick:()=>i(null),children:(0,x.jsxDEV)(`div`,{
className:`grid w-full max-w-3xl overflow-hidden bg-[#f6f7f4] sm:grid-cols-2`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxDEV)(`div`,{
className:`min-h-[330px] bg-[#e8eef0]`,children:(0,x.jsxDEV)(`img`,{
src:o.image,alt:o.name,className:`h-full w-full object-cover`,style:{
objectPosition:o.position
}
},void 0,!1,{
fileName:S,lineNumber:53,columnNumber:295
},this)
},void 0,!1,{
fileName:S,lineNumber:53,columnNumber:251
},this),(0,x.jsxDEV)(`div`,{
className:`relative flex flex-col justify-center p-8`,children:[(0,x.jsxDEV)(`button`,{
onClick:()=>i(null),className:`absolute right-4 top-3 text-2xl text-[#597077]`,"aria-label":`Đóng`,children:`×`
},void 0,!1,{
fileName:S,lineNumber:53,columnNumber:490
},this),(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.16em] text-[#0d9bb4]`,children:o.code
},void 0,!1,{
fileName:S,lineNumber:53,columnNumber:619
},this),(0,x.jsxDEV)(`h2`,{
className:`font-display mt-3 text-4xl leading-none`,children:o.name
},void 0,!1,{
fileName:S,lineNumber:53,columnNumber:702
},this),(0,x.jsxDEV)(`p`,{
className:`mt-5 text-sm leading-6 text-[#597077]`,children:`Mẫu tham khảo có thể điều chỉnh chất liệu, màu nhận diện, logo và form dáng để phù hợp với đội ngũ của bạn.`
},void 0,!1,{
fileName:S,lineNumber:53,columnNumber:777
},this),(0,x.jsxDEV)(`button`,{
onClick:e,className:`mt-7 w-fit bg-[#0d3039] px-5 py-3 text-xs font-bold tracking-[.1em] text-white`,children:`NHẬN BÁO GIÁ`
},void 0,!1,{
fileName:S,lineNumber:53,columnNumber:941
},this)]
},void 0,!0,{
fileName:S,lineNumber:53,columnNumber:431
},this)]
},void 0,!0,{
fileName:S,lineNumber:53,columnNumber:131
},this)
},void 0,!1,{
fileName:S,lineNumber:53,columnNumber:17
},this)]
},void 0,!0,{
fileName:S,lineNumber:47,columnNumber:10
},this)
}function ae(){
let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(te[0]),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(!1),c=e=>{
t(!1),document.getElementById(e)?.scrollIntoView({
behavior:`smooth`
})
};
return o?(0,x.jsxDEV)(C,{
onClose:()=>s(!1)
},void 0,!1,{
fileName:S,lineNumber:68,columnNumber:24
},this):(0,x.jsxDEV)(`main`,{
className:`min-h-screen overflow-x-hidden bg-[#f6f7f4] text-[#102a32]`,children:[(0,x.jsxDEV)(`div`,{
className:`bg-[#0d3039] px-5 py-2.5 text-center text-[10px] font-semibold tracking-[0.18em] text-[#e4c36f] sm:text-xs`,children:`THIẾT KẾ & MAY ĐO ĐỒNG PHỤC DOANH NGHIỆP TOÀN QUỐC`
},void 0,!1,{
fileName:S,lineNumber:72,columnNumber:7
},this),(0,x.jsxDEV)(`header`,{
className:`sticky top-0 z-40 border-b border-[#153e47]/10 bg-[#f6f7f4]/95 backdrop-blur`,children:[(0,x.jsxDEV)(`div`,{
className:`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8`,children:[(0,x.jsxDEV)(`button`,{
onClick:()=>c(`dau-trang`),className:`flex items-center gap-3 text-left`,"aria-label":`Về đầu trang`,children:[(0,x.jsxDEV)(`span`,{
className:`grid h-10 w-10 place-items-center bg-[#0d9bb4] text-xl font-black tracking-tighter text-white`,children:`H`
},void 0,!1,{
fileName:S,lineNumber:79,columnNumber:13
},this),(0,x.jsxDEV)(`span`,{
children:[(0,x.jsxDEV)(`b`,{
className:`block text-lg leading-none tracking-tight`,children:`HDC`
},void 0,!1,{
fileName:S,lineNumber:80,columnNumber:19
},this),(0,x.jsxDEV)(`span`,{
className:`text-[9px] font-bold tracking-[0.24em] text-[#168ca5]`,children:`FASHION`
},void 0,!1,{
fileName:S,lineNumber:80,columnNumber:83
},this)]
},void 0,!0,{
fileName:S,lineNumber:80,columnNumber:13
},this)]
},void 0,!0,{
fileName:S,lineNumber:78,columnNumber:11
},this),(0,x.jsxDEV)(`nav`,{
className:`hidden items-center gap-8 text-sm font-semibold text-[#284850] lg:flex`,children:[(0,x.jsxDEV)(`button`,{
onClick:()=>s(!0),className:`transition hover:text-[#0d9bb4]`,children:`Gian hàng`
},void 0,!1,{
fileName:S,lineNumber:83,columnNumber:13
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>c(`chat-lieu`),className:`transition hover:text-[#0d9bb4]`,children:`Chất liệu xanh`
},void 0,!1,{
fileName:S,lineNumber:84,columnNumber:13
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>c(`du-an`),className:`transition hover:text-[#0d9bb4]`,children:`Dự án`
},void 0,!1,{
fileName:S,lineNumber:85,columnNumber:13
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>c(`ve-hdc`),className:`transition hover:text-[#0d9bb4]`,children:`Về HDC`
},void 0,!1,{
fileName:S,lineNumber:86,columnNumber:13
},this)]
},void 0,!0,{
fileName:S,lineNumber:82,columnNumber:11
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>c(`lien-he`),className:`hidden bg-[#0d3039] px-5 py-3 text-xs font-bold tracking-[0.12em] text-white transition hover:bg-[#0d9bb4] lg:block`,children:`NHẬN BÁO GIÁ`
},void 0,!1,{
fileName:S,lineNumber:88,columnNumber:11
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>t(!e),className:`grid h-10 w-10 place-items-center border border-[#153e47]/20 lg:hidden`,"aria-label":`Mở menu`,children:(0,x.jsxDEV)(`span`,{
className:`text-xl`,children:e?`×`:`☰`
},void 0,!1,{
fileName:S,lineNumber:89,columnNumber:162
},this)
},void 0,!1,{
fileName:S,lineNumber:89,columnNumber:11
},this)]
},void 0,!0,{
fileName:S,lineNumber:77,columnNumber:9
},this),e&&(0,x.jsxDEV)(`nav`,{
className:`border-t border-[#153e47]/10 bg-[#f6f7f4] px-5 py-4 lg:hidden`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto grid max-w-7xl gap-3 text-sm font-semibold`,children:[(0,x.jsxDEV)(`button`,{
onClick:()=>s(!0),className:`text-left`,children:`Gian hàng`
},void 0,!1,{
fileName:S,lineNumber:91,columnNumber:169
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>c(`chat-lieu`),className:`text-left`,children:`Chất liệu xanh`
},void 0,!1,{
fileName:S,lineNumber:91,columnNumber:251
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>c(`du-an`),className:`text-left`,children:`Dự án`
},void 0,!1,{
fileName:S,lineNumber:91,columnNumber:342
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>c(`lien-he`),className:`text-left text-[#0d9bb4]`,children:`Nhận báo giá`
},void 0,!1,{
fileName:S,lineNumber:91,columnNumber:420
},this)]
},void 0,!0,{
fileName:S,lineNumber:91,columnNumber:101
},this)
},void 0,!1,{
fileName:S,lineNumber:91,columnNumber:22
},this)]
},void 0,!0,{
fileName:S,lineNumber:76,columnNumber:7
},this),(0,x.jsxDEV)(`section`,{
id:`dau-trang`,className:`relative isolate overflow-hidden bg-[#dfe9ed]`,children:[(0,x.jsxDEV)(`div`,{
className:`absolute inset-y-0 right-0 w-[54%] bg-[#0d3039]`
},void 0,!1,{
fileName:S,lineNumber:95,columnNumber:9
},this),(0,x.jsxDEV)(`div`,{
className:`relative mx-auto grid min-h-[660px] max-w-7xl items-end gap-10 px-5 py-14 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-20`,children:[(0,x.jsxDEV)(`div`,{
className:`z-10 max-w-xl self-center lg:pb-10`,children:[(0,x.jsxDEV)(`p`,{
className:`mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#0b8faa]`,children:[(0,x.jsxDEV)(`span`,{
className:`h-px w-10 bg-current`
},void 0,!1,{
fileName:S,lineNumber:98,columnNumber:108
},this),` ĐỒNG PHỤC TẠO NÊN BẢN SẮC`]
},void 0,!0,{
fileName:S,lineNumber:98,columnNumber:13
},this),(0,x.jsxDEV)(`h1`,{
className:`font-display text-5xl leading-[.94] text-[#10313a] sm:text-6xl lg:text-7xl`,children:[`Mặc một `,(0,x.jsxDEV)(`em`,{
className:`font-normal text-[#0d9bb4]`,children:`diện mạo.`
},void 0,!1,{
fileName:S,lineNumber:99,columnNumber:112
},this),(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:99,columnNumber:169
},this),`Mang một`,(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:99,columnNumber:183
},this),`thương hiệu.`]
},void 0,!0,{
fileName:S,lineNumber:99,columnNumber:13
},this),(0,x.jsxDEV)(`p`,{
className:`mt-7 max-w-md text-base leading-7 text-[#45626a]`,children:`HDC Fashion thiết kế và may đo đồng phục để mỗi đội ngũ xuất hiện chuyên nghiệp, khác biệt và tự hào.`
},void 0,!1,{
fileName:S,lineNumber:100,columnNumber:13
},this),(0,x.jsxDEV)(`div`,{
className:`mt-9 flex flex-wrap gap-3`,children:[(0,x.jsxDEV)(`button`,{
onClick:()=>c(`lien-he`),className:`bg-[#0d3039] px-6 py-4 text-xs font-bold tracking-[.12em] text-white transition hover:bg-[#0d9bb4]`,children:`TƯ VẤN THIẾT KẾ`
},void 0,!1,{
fileName:S,lineNumber:101,columnNumber:56
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>s(!0),className:`border border-[#234c55]/30 px-6 py-4 text-xs font-bold tracking-[.12em] text-[#173b44] transition hover:border-[#0d9bb4] hover:text-[#0d9bb4]`,children:`VÀO GIAN HÀNG`
},void 0,!1,{
fileName:S,lineNumber:101,columnNumber:235
},this)]
},void 0,!0,{
fileName:S,lineNumber:101,columnNumber:13
},this)]
},void 0,!0,{
fileName:S,lineNumber:97,columnNumber:11
},this),(0,x.jsxDEV)(`div`,{
className:`relative h-[430px] overflow-hidden sm:h-[560px] lg:h-[620px]`,children:[(0,x.jsxDEV)(`img`,{
src:ee.hero,alt:`Người mẫu mặc sơ mi xanh HDC Fashion`,className:`h-full w-full object-cover object-center mix-blend-normal`
},void 0,!1,{
fileName:S,lineNumber:104,columnNumber:13
},this),(0,x.jsxDEV)(`div`,{
className:`absolute inset-0 bg-gradient-to-t from-[#0d3039]/45 via-transparent to-transparent`
},void 0,!1,{
fileName:S,lineNumber:105,columnNumber:13
},this),(0,x.jsxDEV)(`div`,{
className:`absolute bottom-0 left-0 right-0 flex justify-between border-t border-white/30 px-5 py-4 text-[10px] font-bold tracking-[.16em] text-white`,children:[(0,x.jsxDEV)(`span`,{
children:`HDC / 01`
},void 0,!1,{
fileName:S,lineNumber:106,columnNumber:169
},this),(0,x.jsxDEV)(`span`,{
children:`PHONG CÁCH TẠO THÀNH CÔNG`
},void 0,!1,{
fileName:S,lineNumber:106,columnNumber:190
},this)]
},void 0,!0,{
fileName:S,lineNumber:106,columnNumber:13
},this)]
},void 0,!0,{
fileName:S,lineNumber:103,columnNumber:11
},this)]
},void 0,!0,{
fileName:S,lineNumber:96,columnNumber:9
},this)]
},void 0,!0,{
fileName:S,lineNumber:94,columnNumber:7
},this),(0,x.jsxDEV)(`section`,{
className:`border-y border-[#153e47]/10 bg-[#f6f7f4]`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#153e47]/10 px-5 sm:grid-cols-4 lg:px-8`,children:[[`10+`,`năm kiến tạo diện mạo`],[`1.000+`,`mẫu thiết kế theo yêu cầu`],[`63`,`tỉnh thành giao hàng`],[`100%`,`tận tâm trong từng đường may`]].map(([e,t])=>(0,x.jsxDEV)(`div`,{
className:`px-4 py-8 text-center sm:px-7`,children:[(0,x.jsxDEV)(`strong`,{
className:`font-display block text-3xl text-[#0d9bb4]`,children:e
},void 0,!1,{
fileName:S,lineNumber:113,columnNumber:246
},this),(0,x.jsxDEV)(`span`,{
className:`mt-2 block text-[10px] font-bold leading-4 tracking-[.12em] text-[#5c7176] uppercase`,children:t
},void 0,!1,{
fileName:S,lineNumber:113,columnNumber:326
},this)]
},t,!0,{
fileName:S,lineNumber:113,columnNumber:187
},this))
},void 0,!1,{
fileName:S,lineNumber:112,columnNumber:9
},this)
},void 0,!1,{
fileName:S,lineNumber:111,columnNumber:7
},this),(0,x.jsxDEV)(`section`,{
id:`san-pham`,className:`mx-auto max-w-7xl px-5 py-24 lg:px-8`,children:[(0,x.jsxDEV)(`div`,{
className:`mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end`,children:[(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.2em] text-[#0d9bb4]`,children:`BỘ SƯU TẬP`
},void 0,!1,{
fileName:S,lineNumber:118,columnNumber:98
},this),(0,x.jsxDEV)(`h2`,{
className:`font-display mt-3 text-4xl leading-none sm:text-5xl`,children:[`Những điều đội ngũ`,(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:118,columnNumber:262
},this),`bạn sẽ muốn khoác lên.`]
},void 0,!0,{
fileName:S,lineNumber:118,columnNumber:176
},this)]
},void 0,!0,{
fileName:S,lineNumber:118,columnNumber:93
},this),(0,x.jsxDEV)(`p`,{
className:`max-w-xs text-sm leading-6 text-[#597077]`,children:`Từ phòng họp đến sân golf, mỗi mẫu đều là một điểm chạm thương hiệu có chủ đích.`
},void 0,!1,{
fileName:S,lineNumber:118,columnNumber:301
},this)]
},void 0,!0,{
fileName:S,lineNumber:118,columnNumber:9
},this),(0,x.jsxDEV)(`div`,{
className:`grid gap-px overflow-hidden bg-[#d1dde0] md:grid-cols-2`,children:te.map((e,t)=>(0,x.jsxDEV)(`button`,{
onClick:()=>r(e),className:`group relative min-h-[360px] overflow-hidden bg-[#eaf0f2] text-left`,children:[(0,x.jsxDEV)(`img`,{
src:e.image,alt:e.name,className:`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105`
},void 0,!1,{
fileName:S,lineNumber:120,columnNumber:192
},this),(0,x.jsxDEV)(`div`,{
className:`absolute inset-0 bg-gradient-to-t from-[#082d37]/90 via-[#082d37]/10 to-transparent`
},void 0,!1,{
fileName:S,lineNumber:120,columnNumber:340
},this),(0,x.jsxDEV)(`div`,{
className:`absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white`,children:[(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`span`,{
className:`mb-2 block text-[10px] font-bold tracking-[.18em] text-[#7ee0eb]`,children:[`0`,t+1,` / HDC`]
},void 0,!0,{
fileName:S,lineNumber:120,columnNumber:544
},this),(0,x.jsxDEV)(`h3`,{
className:`font-display text-3xl`,children:e.name
},void 0,!1,{
fileName:S,lineNumber:120,columnNumber:652
},this),(0,x.jsxDEV)(`p`,{
className:`mt-1 text-xs text-white/75`,children:e.note
},void 0,!1,{
fileName:S,lineNumber:120,columnNumber:709
},this)]
},void 0,!0,{
fileName:S,lineNumber:120,columnNumber:539
},this),(0,x.jsxDEV)(ie,{

},void 0,!1,{
fileName:S,lineNumber:120,columnNumber:775
},this)]
},void 0,!0,{
fileName:S,lineNumber:120,columnNumber:443
},this)]
},e.id,!0,{
fileName:S,lineNumber:120,columnNumber:45
},this))
},void 0,!1,{
fileName:S,lineNumber:119,columnNumber:9
},this)]
},void 0,!0,{
fileName:S,lineNumber:117,columnNumber:7
},this),(0,x.jsxDEV)(`section`,{
id:`chat-lieu`,className:`bg-[#0d3039] text-white`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8`,children:[(0,x.jsxDEV)(`div`,{
className:`relative min-h-[440px] overflow-hidden`,children:[(0,x.jsxDEV)(`img`,{
src:ee.green,alt:`Sơ mi HDC từ chất liệu xanh bền vững`,className:`absolute inset-0 h-full w-full object-cover`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:204
},this),(0,x.jsxDEV)(`div`,{
className:`absolute inset-0 bg-[#0d3039]/20`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:329
},this),(0,x.jsxDEV)(`span`,{
className:`absolute left-5 top-5 border border-white/50 px-3 py-2 text-[10px] font-bold tracking-[.17em]`,children:`MATERIAL / 01`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:381
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:148
},this),(0,x.jsxDEV)(`div`,{
className:`flex flex-col justify-center`,children:[(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.2em] text-[#73d8e5]`,children:`VẬT LIỆU CÓ Ý THỨC`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:565
},this),(0,x.jsxDEV)(`h2`,{
className:`font-display mt-4 text-4xl leading-[.98] sm:text-5xl`,children:[`Tốt cho người mặc.`,(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:738
},this),(0,x.jsxDEV)(`em`,{
className:`font-normal text-[#e4c36f]`,children:`Nhẹ hơn cho hành tinh.`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:744
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:651
},this),(0,x.jsxDEV)(`p`,{
className:`mt-6 max-w-lg leading-7 text-[#c1d6da]`,children:`Chúng tôi khai thác các chất liệu tự nhiên và phổ biến tại Việt Nam để tạo nên đồng phục thoáng khí, an toàn và có vòng đời bền hơn.`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:819
},this),(0,x.jsxDEV)(`div`,{
className:`mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/20 pt-7 text-sm`,children:[(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`b`,{
className:`block text-[#73d8e5]`,children:`Modal & Bamboo`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:1107
},this),(0,x.jsxDEV)(`span`,{
className:`mt-1 block text-white/65`,children:`Mềm mượt, kháng khuẩn`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:1161
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:1102
},this),(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`b`,{
className:`block text-[#73d8e5]`,children:`Sợi bạc hà`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:1243
},this),(0,x.jsxDEV)(`span`,{
className:`mt-1 block text-white/65`,children:`Thoáng mát tự nhiên`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:1293
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:1238
},this),(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`b`,{
className:`block text-[#73d8e5]`,children:`Sợi sen & chuối`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:1373
},this),(0,x.jsxDEV)(`span`,{
className:`mt-1 block text-white/65`,children:`Gìn giữ nguồn bản địa`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:1428
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:1368
},this),(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`b`,{
className:`block text-[#73d8e5]`,children:`Seamless`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:1510
},this),(0,x.jsxDEV)(`span`,{
className:`mt-1 block text-white/65`,children:`Êm nhẹ, co giãn 4 chiều`
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:1558
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:1505
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:1009
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:519
},this)]
},void 0,!0,{
fileName:S,lineNumber:124,columnNumber:67
},this)
},void 0,!1,{
fileName:S,lineNumber:124,columnNumber:7
},this),(0,x.jsxDEV)(`section`,{
id:`du-an`,className:`mx-auto max-w-7xl px-5 py-24 lg:px-8`,children:(0,x.jsxDEV)(`div`,{
className:`grid gap-10 lg:grid-cols-[.8fr_1.2fr]`,children:[(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.2em] text-[#0d9bb4]`,children:`DỰ ÁN / CÂU CHUYỆN`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:136
},this),(0,x.jsxDEV)(`h2`,{
className:`font-display mt-3 text-5xl leading-[.92]`,children:[`Trang phục`,(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:289
},this),`kể câu chuyện`,(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:308
},this),(0,x.jsxDEV)(`em`,{
className:`font-normal text-[#0d9bb4]`,children:`của tập thể.`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:314
},this)]
},void 0,!0,{
fileName:S,lineNumber:126,columnNumber:222
},this),(0,x.jsxDEV)(`p`,{
className:`mt-7 max-w-sm text-sm leading-7 text-[#597077]`,children:`Không chỉ cung cấp áo quần, HDC tìm hiểu văn hoá, hoàn cảnh sử dụng và ấn tượng mà thương hiệu bạn muốn để lại.`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:379
},this),(0,x.jsxDEV)(`button`,{
onClick:()=>c(`lien-he`),className:`group mt-8 flex items-center gap-3 text-xs font-bold tracking-[.12em] text-[#0d3039]`,children:[`KỂ CHO CHÚNG TÔI VỀ ĐỘI NGŨ CỦA BẠN `,(0,x.jsxDEV)(ie,{

},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:733
},this)]
},void 0,!0,{
fileName:S,lineNumber:126,columnNumber:556
},this)]
},void 0,!0,{
fileName:S,lineNumber:126,columnNumber:131
},this),(0,x.jsxDEV)(`div`,{
className:`grid gap-5 sm:grid-cols-2`,children:[(0,x.jsxDEV)(`div`,{
className:`sm:pt-16`,children:[(0,x.jsxDEV)(`img`,{
src:ee.corporate,alt:`Đội ngũ trong đồng phục polo HDC`,className:`h-[350px] w-full object-cover`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:826
},this),(0,x.jsxDEV)(`p`,{
className:`mt-3 text-[10px] font-bold tracking-[.14em] text-[#0d9bb4]`,children:`DOANH NGHIỆP / 2024`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:937
},this),(0,x.jsxDEV)(`h3`,{
className:`mt-1 font-display text-2xl`,children:`Đồng phục, dấu ấn tập thể`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:1034
},this)]
},void 0,!0,{
fileName:S,lineNumber:126,columnNumber:800
},this),(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`img`,{
src:ee.culture,alt:`Các hoạ tiết văn hoá Việt Nam trong thiết kế HDC`,className:`h-[350px] w-full object-cover`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:1118
},this),(0,x.jsxDEV)(`p`,{
className:`mt-3 text-[10px] font-bold tracking-[.14em] text-[#0d9bb4]`,children:`SÁNG TẠO / DI SẢN`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:1243
},this),(0,x.jsxDEV)(`h3`,{
className:`mt-1 font-display text-2xl`,children:`Bản sắc Việt trong từng chi tiết`
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:1338
},this)]
},void 0,!0,{
fileName:S,lineNumber:126,columnNumber:1113
},this)]
},void 0,!0,{
fileName:S,lineNumber:126,columnNumber:757
},this)]
},void 0,!0,{
fileName:S,lineNumber:126,columnNumber:76
},this)
},void 0,!1,{
fileName:S,lineNumber:126,columnNumber:7
},this),(0,x.jsxDEV)(`section`,{
id:`ve-hdc`,className:`bg-[#e2eff1]`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.08fr_.92fr] lg:px-8`,children:[(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.2em] text-[#0d9bb4]`,children:`CON NGƯỜI HDC`
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:152
},this),(0,x.jsxDEV)(`h2`,{
className:`font-display mt-4 max-w-2xl text-4xl leading-[.98] sm:text-5xl`,children:[`Sự tự tin của đội ngũ bắt đầu từ `,(0,x.jsxDEV)(`em`,{
className:`font-normal text-[#0d9bb4]`,children:`sự thấu hiểu.`
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:345
},this)]
},void 0,!0,{
fileName:S,lineNumber:128,columnNumber:233
},this),(0,x.jsxDEV)(`div`,{
className:`mt-10 grid gap-px bg-[#bfd5d9] sm:grid-cols-3`,children:[[`01`,`Lắng nghe`,`Thương hiệu và nhu cầu thực tế của bạn.`],[`02`,`Sáng tạo`,`Biến nhận diện thành thiết kế riêng.`],[`03`,`Đồng hành`,`May đo, giao nhận và chăm sóc dài lâu.`]].map(([e,t,n])=>(0,x.jsxDEV)(`div`,{
className:`bg-[#e2eff1] p-6`,children:[(0,x.jsxDEV)(`span`,{
className:`text-xs font-bold text-[#0d9bb4]`,children:e
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:735
},this),(0,x.jsxDEV)(`h3`,{
className:`mt-7 font-display text-2xl`,children:t
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:798
},this),(0,x.jsxDEV)(`p`,{
className:`mt-2 text-sm leading-6 text-[#597077]`,children:n
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:853
},this)]
},e,!0,{
fileName:S,lineNumber:128,columnNumber:691
},this))
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:411
},this)]
},void 0,!0,{
fileName:S,lineNumber:128,columnNumber:147
},this),(0,x.jsxDEV)(`div`,{
className:`relative overflow-hidden`,children:[(0,x.jsxDEV)(`img`,{
src:ee.founder,alt:`Nguyễn Thị Thương, Founder và CEO HDC Group VN`,className:`h-full min-h-[460px] w-full object-cover object-[60%_center]`
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:978
},this),(0,x.jsxDEV)(`div`,{
className:`absolute bottom-0 left-0 max-w-xs bg-[#0d3039] p-6 text-white`,children:[(0,x.jsxDEV)(`p`,{
className:`font-display text-2xl`,children:`Nguyễn Thị Thương`
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:1211
},this),(0,x.jsxDEV)(`p`,{
className:`mt-2 text-[10px] font-bold tracking-[.14em] text-[#e4c36f]`,children:`FOUNDER & CEO · HDC GROUP VN`
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:1269
},this)]
},void 0,!0,{
fileName:S,lineNumber:128,columnNumber:1132
},this)]
},void 0,!0,{
fileName:S,lineNumber:128,columnNumber:936
},this)]
},void 0,!0,{
fileName:S,lineNumber:128,columnNumber:53
},this)
},void 0,!1,{
fileName:S,lineNumber:128,columnNumber:7
},this),(0,x.jsxDEV)(`section`,{
id:`lien-he`,className:`bg-[#0d3039] text-white`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8`,children:[(0,x.jsxDEV)(`div`,{
children:[(0,x.jsxDEV)(`p`,{
className:`text-xs font-bold tracking-[.2em] text-[#73d8e5]`,children:`BẮT ĐẦU TỪ MỘT CUỘC TRÒ CHUYỆN`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:162
},this),(0,x.jsxDEV)(`h2`,{
className:`font-display mt-4 text-5xl leading-[.95]`,children:[`Đội ngũ của bạn`,(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:332
},this),`sẽ mặc gì`,(0,x.jsxDEV)(`br`,{

},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:347
},this),(0,x.jsxDEV)(`em`,{
className:`font-normal text-[#e4c36f]`,children:`vào ngày mai?`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:353
},this)]
},void 0,!0,{
fileName:S,lineNumber:130,columnNumber:260
},this),(0,x.jsxDEV)(`p`,{
className:`mt-7 max-w-md leading-7 text-[#c1d6da]`,children:`Chia sẻ nhu cầu, quy mô và thời điểm bạn cần. HDC sẽ đề xuất giải pháp phù hợp trong thời gian sớm nhất.`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:419
},this),(0,x.jsxDEV)(`a`,{
href:`tel:0984959586`,className:`mt-10 inline-flex items-center gap-3 border-b border-[#e4c36f] pb-2 text-lg font-semibold text-[#e4c36f]`,children:[`0984 959 586 `,(0,x.jsxDEV)(`span`,{
children:`↗`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:736
},this)]
},void 0,!0,{
fileName:S,lineNumber:130,columnNumber:581
},this)]
},void 0,!0,{
fileName:S,lineNumber:130,columnNumber:157
},this),(0,x.jsxDEV)(`form`,{
onSubmit:e=>{
e.preventDefault(),a(!0)
},className:`grid content-start gap-5 border-t border-white/20 pt-7 sm:grid-cols-2`,children:[(0,x.jsxDEV)(`label`,{
className:`text-xs font-bold tracking-[.1em] text-[#c1d6da]`,children:[`HỌ VÀ TÊN`,(0,x.jsxDEV)(`input`,{
required:!0,className:`mt-2 w-full border-b border-white/30 bg-transparent py-3 text-base font-normal text-white outline-none transition focus:border-[#73d8e5]`,placeholder:`Tên của bạn`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:982
},this)]
},void 0,!0,{
fileName:S,lineNumber:130,columnNumber:905
},this),(0,x.jsxDEV)(`label`,{
className:`text-xs font-bold tracking-[.1em] text-[#c1d6da]`,children:[`SỐ ĐIỆN THOẠI`,(0,x.jsxDEV)(`input`,{
required:!0,className:`mt-2 w-full border-b border-white/30 bg-transparent py-3 text-base font-normal text-white outline-none transition focus:border-[#73d8e5]`,placeholder:`09...`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:1264
},this)]
},void 0,!0,{
fileName:S,lineNumber:130,columnNumber:1183
},this),(0,x.jsxDEV)(`label`,{
className:`sm:col-span-2 text-xs font-bold tracking-[.1em] text-[#c1d6da]`,children:[`NHU CẦU CỦA BẠN`,(0,x.jsxDEV)(`textarea`,{
required:!0,className:`mt-2 h-24 w-full resize-none border-b border-white/30 bg-transparent py-3 text-base font-normal text-white outline-none transition focus:border-[#73d8e5]`,placeholder:`Ví dụ: Đồng phục cho 50 nhân viên văn phòng...`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:1556
},this)]
},void 0,!0,{
fileName:S,lineNumber:130,columnNumber:1459
},this),(0,x.jsxDEV)(`button`,{
className:`mt-3 w-fit bg-[#e4c36f] px-7 py-4 text-xs font-bold tracking-[.13em] text-[#102a32] transition hover:bg-white`,children:i?`ĐÃ GỬI YÊU CẦU ✓`:`GỬI YÊU CẦU`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:1812
},this),i&&(0,x.jsxDEV)(`p`,{
className:`self-end text-sm text-[#73d8e5]`,children:`Cảm ơn bạn. HDC sẽ liên hệ sớm.`
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:2003
},this)]
},void 0,!0,{
fileName:S,lineNumber:130,columnNumber:760
},this)]
},void 0,!0,{
fileName:S,lineNumber:130,columnNumber:65
},this)
},void 0,!1,{
fileName:S,lineNumber:130,columnNumber:7
},this),(0,x.jsxDEV)(`footer`,{
className:`bg-[#08242c] px-5 py-8 text-[#b3c9cd]`,children:(0,x.jsxDEV)(`div`,{
className:`mx-auto flex max-w-7xl flex-col justify-between gap-4 text-[10px] font-bold tracking-[.12em] sm:flex-row lg:px-3`,children:[(0,x.jsxDEV)(`span`,{
children:`© 2025 HDC FASHION · PHONG CÁCH TẠO THÀNH CÔNG`
},void 0,!1,{
fileName:S,lineNumber:132,columnNumber:195
},this),(0,x.jsxDEV)(`span`,{
children:`THIẾT KẾ · MAY ĐO · GIAO HÀNG TOÀN QUỐC`
},void 0,!1,{
fileName:S,lineNumber:132,columnNumber:254
},this)]
},void 0,!0,{
fileName:S,lineNumber:132,columnNumber:65
},this)
},void 0,!1,{
fileName:S,lineNumber:132,columnNumber:7
},this),n&&(0,x.jsxDEV)(`div`,{
className:`pointer-events-none fixed bottom-5 right-5 z-50 hidden max-w-xs bg-white/95 p-4 shadow-xl backdrop-blur md:block`,children:[(0,x.jsxDEV)(`p`,{
className:`text-[9px] font-bold tracking-[.16em] text-[#0d9bb4]`,children:`BỘ SƯU TẬP ĐANG XEM`
},void 0,!1,{
fileName:S,lineNumber:134,columnNumber:155
},this),(0,x.jsxDEV)(`p`,{
className:`font-display mt-1 text-xl`,children:n.name
},void 0,!1,{
fileName:S,lineNumber:134,columnNumber:246
},this)]
},void 0,!0,{
fileName:S,lineNumber:134,columnNumber:25
},this)]
},void 0,!0,{
fileName:S,lineNumber:71,columnNumber:5
},this)
}var w=`/workspaces/default/.publishing/src/main.tsx`;
y.createRoot(document.getElementById(`root`)).render((0,x.jsxDEV)(b.StrictMode,{
children:(0,x.jsxDEV)(ae,{

},void 0,!1,{
fileName:w,lineNumber:8,columnNumber:5
},void 0)
},void 0,!1,{
fileName:w,lineNumber:7,columnNumber:3
},void 0));
