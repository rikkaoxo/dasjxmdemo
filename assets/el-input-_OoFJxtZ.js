import{aE as Ve,c3 as Se,c0 as Ce,b8 as le,c4 as Ae,b6 as Je,b1 as Qe,b7 as je,c5 as et,y as f,a3 as Re,bD as tt,r as T,bC as q,w as J,U as at,az as nt,m as Be,q as Ie,aH as ot,t as ae,s as Ee,ag as st,G as ne,v as Le,c6 as rt,L as lt,x as Pe,ak as it,Z as F,P as ut,au as ct,S as dt,o as m,z as S,a2 as h,a5 as oe,F as y,e as n,D as G,g as N,c as I,b as O,B as X,C as $,J as se,d as pt,aI as ft,a4 as vt,bE as mt,al as Z,A as ht,_ as gt,ai as ze,aC as yt,c7 as bt,c8 as xt,aj as wt,I as St}from"./index-COjUZeQ6.js";import{i as Oe,j as Ct,k as It,b as Et,c as Pt,a as zt,e as kt,d as ke}from"./_plugin-vue_export-helper-CMIzlf7v.js";const Ft=()=>Ve&&/firefox/i.test(window.navigator.userAgent);function Nt(e){return e}function Tt(e,o,r){switch(r.length){case 0:return e.call(o);case 1:return e.call(o,r[0]);case 2:return e.call(o,r[0],r[1]);case 3:return e.call(o,r[0],r[1],r[2])}return e.apply(o,r)}var Vt=800,At=16,Rt=Date.now;function Bt(e){var o=0,r=0;return function(){var a=Rt(),s=At-(a-r);if(r=a,s>0){if(++o>=Vt)return arguments[0]}else o=0;return e.apply(void 0,arguments)}}function Lt(e){return function(){return e}}var Ot=Se?function(e,o){return Se(e,"toString",{configurable:!0,enumerable:!1,value:Lt(o),writable:!0})}:Nt,$t=Bt(Ot),Fe=Math.max;function Ht(e,o,r){return o=Fe(o===void 0?e.length-1:o,0),function(){for(var a=arguments,s=-1,i=Fe(a.length-o,0),l=Array(i);++s<i;)l[s]=a[o+s];s=-1;for(var p=Array(o+1);++s<o;)p[s]=a[s];return p[o]=r(l),Tt(e,this,p)}}var Ne=Ce?Ce.isConcatSpreadable:void 0;function Mt(e){return le(e)||Oe(e)||!!(Ne&&e&&e[Ne])}function Dt(e,o,r,a,s){var i=-1,l=e.length;for(r||(r=Mt),s||(s=[]);++i<l;){var p=e[i];r(p)?Ct(s,p):s[s.length]=p}return s}function Kt(e){var o=e==null?0:e.length;return o?Dt(e):[]}function Ut(e){return $t(Ht(e,void 0,Kt),e+"")}function ya(){if(!arguments.length)return[];var e=arguments[0];return le(e)?e:[e]}function Wt(e,o){return e!=null&&o in Object(e)}function Yt(e,o,r){o=Ae(o,e);for(var a=-1,s=o.length,i=!1;++a<s;){var l=Je(o[a]);if(!(i=e!=null&&r(e,l)))break;e=e[l]}return i||++a!=s?i:(s=e==null?0:e.length,!!s&&It(s)&&Qe(l,s)&&(le(e)||Oe(e)))}function _t(e,o){return e!=null&&Yt(e,o,Wt)}function Gt(e,o,r){for(var a=-1,s=o.length,i={};++a<s;){var l=o[a],p=je(e,l);r(p,l)&&et(i,Ae(l,e),p)}return i}function Xt(e,o){return Gt(e,o,function(r,a){return _t(e,a)})}var Zt=Ut(function(e,o){return e==null?{}:Xt(e,o)});const re="update:modelValue",ba="change",qt=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),Jt=["class","style"],Qt=/^on[A-Z]/,jt=(e={})=>{const{excludeListeners:o=!1,excludeKeys:r}=e,a=f(()=>((r==null?void 0:r.value)||[]).concat(Jt)),s=Re();return s?f(()=>{var i;return tt(Object.entries((i=s.proxy)==null?void 0:i.$attrs).filter(([l])=>!a.value.includes(l)&&!(o&&Qt.test(l))))}):f(()=>({}))};function ea(e){const o=T();function r(){if(e.value==null)return;const{selectionStart:s,selectionEnd:i,value:l}=e.value;if(s==null||i==null)return;const p=l.slice(0,Math.max(0,s)),v=l.slice(Math.max(0,i));o.value={selectionStart:s,selectionEnd:i,value:l,beforeTxt:p,afterTxt:v}}function a(){if(e.value==null||o.value==null)return;const{value:s}=e.value,{beforeTxt:i,afterTxt:l,selectionStart:p}=o.value;if(i==null||l==null||p==null)return;let v=s.length;if(s.endsWith(l))v=s.length-l.length;else if(s.startsWith(i))v=i.length;else{const x=i[p-1],w=s.indexOf(x,p-1);w!==-1&&(v=w+1)}e.value.setSelectionRange(v,v)}return[r,a]}function ta(e,{afterFocus:o,beforeBlur:r,afterBlur:a}={}){const s=Re(),{emit:i}=s,l=q(),p=T(!1),v=d=>{p.value||(p.value=!0,i("focus",d),o==null||o())},x=d=>{var V;nt(r)&&r(d)||d.relatedTarget&&((V=l.value)!=null&&V.contains(d.relatedTarget))||(p.value=!1,i("blur",d),a==null||a())},w=()=>{var d;(d=e.value)==null||d.focus()};return J(l,d=>{d&&d.setAttribute("tabindex","-1")}),at(l,"click",w),{wrapperRef:l,isFocused:p,handleFocus:v,handleBlur:x}}const aa=Be({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),na=e=>Zt(aa,e);let b;const oa="\n  height:0 !important;\n  visibility:hidden !important;\n  ".concat(Ft()?"":"overflow:hidden !important;","\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n"),sa=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ra(e){const o=window.getComputedStyle(e),r=o.getPropertyValue("box-sizing"),a=Number.parseFloat(o.getPropertyValue("padding-bottom"))+Number.parseFloat(o.getPropertyValue("padding-top")),s=Number.parseFloat(o.getPropertyValue("border-bottom-width"))+Number.parseFloat(o.getPropertyValue("border-top-width"));return{contextStyle:sa.map(l=>"".concat(l,":").concat(o.getPropertyValue(l))).join(";"),paddingSize:a,borderSize:s,boxSizing:r}}function Te(e,o=1,r){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:s,borderSize:i,boxSizing:l,contextStyle:p}=ra(e);b.setAttribute("style","".concat(p,";").concat(oa)),b.value=e.value||e.placeholder||"";let v=b.scrollHeight;const x={};l==="border-box"?v=v+i:l==="content-box"&&(v=v-s),b.value="";const w=b.scrollHeight-s;if(Ie(o)){let d=w*o;l==="border-box"&&(d=d+s+i),v=Math.max(d,v),x.minHeight="".concat(d,"px")}if(Ie(r)){let d=w*r;l==="border-box"&&(d=d+s+i),v=Math.min(d,v)}return x.height="".concat(v,"px"),(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const la=Be({id:{type:String,default:void 0},size:ot,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ee},prefixIcon:{type:Ee},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>st({})},autofocus:Boolean,rows:{type:Number,default:2},...na(["ariaLabel"])}),ia={[re]:e=>ne(e),input:e=>ne(e),change:e=>ne(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},ua=["role"],ca=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],da=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows"],pa=Le({name:"ElInput",inheritAttrs:!1}),fa=Le({...pa,props:la,emits:ia,setup(e,{expose:o,emit:r}){const a=e,s=rt(),i=lt(),l=f(()=>{const t={};return a.containerRole==="combobox"&&(t["aria-haspopup"]=s["aria-haspopup"],t["aria-owns"]=s["aria-owns"],t["aria-expanded"]=s["aria-expanded"]),t}),p=f(()=>[a.type==="textarea"?ue.b():c.b(),c.m(ie.value),c.is("disabled",P.value),c.is("exceed",De.value),{[c.b("group")]:i.prepend||i.append,[c.m("prefix")]:i.prefix||a.prefixIcon,[c.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[c.bm("suffix","password-clear")]:Y.value&&j.value,[c.b("hidden")]:a.type==="hidden"},s.class]),v=f(()=>[c.e("wrapper"),c.is("focus",K.value)]),x=jt({excludeKeys:f(()=>Object.keys(l.value))}),{form:w,formItem:d}=Et(),{inputId:V}=Pt(a,{formItemContext:d}),ie=zt(),P=kt(),c=Pe("input"),ue=Pe("textarea"),H=q(),C=q(),Q=T(!1),A=T(!1),M=T(!1),ce=T(),D=q(a.inputStyle),z=f(()=>H.value||C.value),{wrapperRef:$e,isFocused:K,handleFocus:U,handleBlur:W}=ta(z,{afterBlur(){var t;a.validateEvent&&((t=d==null?void 0:d.validate)==null||t.call(d,"blur").catch(u=>ke()))}}),de=f(()=>{var t;return(t=w==null?void 0:w.statusIcon)!=null?t:!1}),R=f(()=>(d==null?void 0:d.validateState)||""),pe=f(()=>R.value&&yt[R.value]),He=f(()=>M.value?bt:xt),Me=f(()=>[s.style]),fe=f(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=f(()=>wt(a.modelValue)?"":String(a.modelValue)),Y=f(()=>a.clearable&&!P.value&&!a.readonly&&!!E.value&&(K.value||Q.value)),j=f(()=>a.showPassword&&!P.value&&!a.readonly&&!!E.value&&(!!E.value||K.value)),k=f(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!P.value&&!a.readonly&&!a.showPassword),ee=f(()=>E.value.length),De=f(()=>!!k.value&&ee.value>Number(a.maxlength)),Ke=f(()=>!!i.suffix||!!a.suffixIcon||Y.value||a.showPassword||k.value||!!R.value&&de.value),[Ue,We]=ea(H);it(C,t=>{if(Ye(),!k.value||a.resize!=="both")return;const u=t[0],{width:g}=u.contentRect;ce.value={right:"calc(100% - ".concat(g+15+6,"px)")}});const B=()=>{const{type:t,autosize:u}=a;if(!(!Ve||t!=="textarea"||!C.value))if(u){const g=ze(u)?u.minRows:void 0,_=ze(u)?u.maxRows:void 0,we=Te(C.value,g,_);D.value={overflowY:"hidden",...we},F(()=>{C.value.offsetHeight,D.value=we})}else D.value={minHeight:Te(C.value).minHeight}},Ye=(t=>{let u=!1;return()=>{var g;if(u||!a.autosize)return;((g=C.value)==null?void 0:g.offsetParent)===null||(t(),u=!0)}})(B),L=()=>{const t=z.value,u=a.formatter?a.formatter(E.value):E.value;!t||t.value===u||(t.value=u)},te=async t=>{Ue();let{value:u}=t.target;if(a.formatter&&(u=a.parser?a.parser(u):u),!A.value){if(u===E.value){L();return}r(re,u),r("input",u),await F(),L(),We()}},ve=t=>{r("change",t.target.value)},me=t=>{r("compositionstart",t),A.value=!0},he=t=>{var u;r("compositionupdate",t);const g=(u=t.target)==null?void 0:u.value,_=g[g.length-1]||"";A.value=!qt(_)},ge=t=>{r("compositionend",t),A.value&&(A.value=!1,te(t))},_e=()=>{M.value=!M.value,ye()},ye=async()=>{var t;await F(),(t=z.value)==null||t.focus()},Ge=()=>{var t;return(t=z.value)==null?void 0:t.blur()},Xe=t=>{Q.value=!1,r("mouseleave",t)},Ze=t=>{Q.value=!0,r("mouseenter",t)},be=t=>{r("keydown",t)},qe=()=>{var t;(t=z.value)==null||t.select()},xe=()=>{r(re,""),r("change",""),r("clear"),r("input","")};return J(()=>a.modelValue,()=>{var t;F(()=>B()),a.validateEvent&&((t=d==null?void 0:d.validate)==null||t.call(d,"change").catch(u=>ke()))}),J(E,()=>L()),J(()=>a.type,async()=>{await F(),L(),B()}),ut(()=>{!a.formatter&&a.parser,L(),F(B)}),ct({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},f(()=>!!a.label)),o({input:H,textarea:C,ref:z,textareaStyle:fe,autosize:dt(a,"autosize"),focus:ye,blur:Ge,select:qe,clear:xe,resizeTextarea:B}),(t,u)=>(m(),S("div",se(n(l),{class:[n(p),{[n(c).bm("group","append")]:t.$slots.append,[n(c).bm("group","prepend")]:t.$slots.prepend}],style:n(Me),role:t.containerRole,onMouseenter:Ze,onMouseleave:Xe}),[h(" input "),t.type!=="textarea"?(m(),S(oe,{key:0},[h(" prepend slot "),t.$slots.prepend?(m(),S("div",{key:0,class:y(n(c).be("group","prepend"))},[G(t.$slots,"prepend")],2)):h("v-if",!0),N("div",{ref_key:"wrapperRef",ref:$e,class:y(n(v))},[h(" prefix slot "),t.$slots.prefix||t.prefixIcon?(m(),S("span",{key:0,class:y(n(c).e("prefix"))},[N("span",{class:y(n(c).e("prefix-inner"))},[G(t.$slots,"prefix"),t.prefixIcon?(m(),I(n($),{key:0,class:y(n(c).e("icon"))},{default:O(()=>[(m(),I(X(t.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),N("input",se({id:n(V),ref_key:"input",ref:H,class:n(c).e("inner")},n(x),{minlength:t.minlength,maxlength:t.maxlength,type:t.showPassword?M.value?"text":"password":t.type,disabled:n(P),readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,style:t.inputStyle,form:t.form,autofocus:t.autofocus,onCompositionstart:me,onCompositionupdate:he,onCompositionend:ge,onInput:te,onFocus:u[0]||(u[0]=(...g)=>n(U)&&n(U)(...g)),onBlur:u[1]||(u[1]=(...g)=>n(W)&&n(W)(...g)),onChange:ve,onKeydown:be}),null,16,ca),h(" suffix slot "),n(Ke)?(m(),S("span",{key:1,class:y(n(c).e("suffix"))},[N("span",{class:y(n(c).e("suffix-inner"))},[!n(Y)||!n(j)||!n(k)?(m(),S(oe,{key:0},[G(t.$slots,"suffix"),t.suffixIcon?(m(),I(n($),{key:0,class:y(n(c).e("icon"))},{default:O(()=>[(m(),I(X(t.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),n(Y)?(m(),I(n($),{key:1,class:y([n(c).e("icon"),n(c).e("clear")]),onMousedown:vt(n(mt),["prevent"]),onClick:xe},{default:O(()=>[pt(n(ft))]),_:1},8,["class","onMousedown"])):h("v-if",!0),n(j)?(m(),I(n($),{key:2,class:y([n(c).e("icon"),n(c).e("password")]),onClick:_e},{default:O(()=>[(m(),I(X(n(He))))]),_:1},8,["class"])):h("v-if",!0),n(k)?(m(),S("span",{key:3,class:y(n(c).e("count"))},[N("span",{class:y(n(c).e("count-inner"))},Z(n(ee))+" / "+Z(t.maxlength),3)],2)):h("v-if",!0),n(R)&&n(pe)&&n(de)?(m(),I(n($),{key:4,class:y([n(c).e("icon"),n(c).e("validateIcon"),n(c).is("loading",n(R)==="validating")])},{default:O(()=>[(m(),I(X(n(pe))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),t.$slots.append?(m(),S("div",{key:1,class:y(n(c).be("group","append"))},[G(t.$slots,"append")],2)):h("v-if",!0)],64)):(m(),S(oe,{key:1},[h(" textarea "),N("textarea",se({id:n(V),ref_key:"textarea",ref:C,class:[n(ue).e("inner"),n(c).is("focus",n(K))]},n(x),{minlength:t.minlength,maxlength:t.maxlength,tabindex:t.tabindex,disabled:n(P),readonly:t.readonly,autocomplete:t.autocomplete,style:n(fe),"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,form:t.form,autofocus:t.autofocus,rows:t.rows,onCompositionstart:me,onCompositionupdate:he,onCompositionend:ge,onInput:te,onFocus:u[2]||(u[2]=(...g)=>n(U)&&n(U)(...g)),onBlur:u[3]||(u[3]=(...g)=>n(W)&&n(W)(...g)),onChange:ve,onKeydown:be}),null,16,da),n(k)?(m(),S("span",{key:0,style:ht(ce.value),class:y(n(c).e("count"))},Z(n(ee))+" / "+Z(t.maxlength),7)):h("v-if",!0)],64))],16,ua))}});var va=gt(fa,[["__file","input.vue"]]);const xa=St(va);export{ba as C,xa as E,re as U,na as a,Nt as b,ya as c,Dt as d,_t as h,qt as i,Ht as o,Zt as p,$t as s,ta as u};