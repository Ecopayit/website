import{r as Ve,a as h,j as s}from"./client-BD0x6cCO.js";Ve();function he(e,r){if(typeof e=="function")return e(r);e!=null&&(e.current=r)}function Le(...e){return r=>{let t=!1;const o=e.map(n=>{const a=he(n,r);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let n=0;n<o.length;n++){const a=o[n];typeof a=="function"?a():he(e[n],null)}}}}var ce=h.forwardRef((e,r)=>{const{children:t,...o}=e,n=h.Children.toArray(t),a=n.find(Oe);if(a){const c=a.props.children,p=n.map(d=>d===a?h.Children.count(c)>1?h.Children.only(null):h.isValidElement(c)?c.props.children:null:d);return s.jsx(ne,{...o,ref:r,children:h.isValidElement(c)?h.cloneElement(c,void 0,p):null})}return s.jsx(ne,{...o,ref:r,children:t})});ce.displayName="Slot";var ne=h.forwardRef((e,r)=>{const{children:t,...o}=e;if(h.isValidElement(t)){const n=Fe(t),a=De(o,t.props);return t.type!==h.Fragment&&(a.ref=r?Le(r,n):n),h.cloneElement(t,a)}return h.Children.count(t)>1?h.Children.only(null):null});ne.displayName="SlotClone";var _e=({children:e})=>s.jsx(s.Fragment,{children:e});function Oe(e){return h.isValidElement(e)&&e.type===_e}function De(e,r){const t={...r};for(const o in r){const n=e[o],a=r[o];/^on[A-Z]/.test(o)?n&&a?t[o]=(...p)=>{a(...p),n(...p)}:n&&(t[o]=n):o==="style"?t[o]={...n,...a}:o==="className"&&(t[o]=[n,a].filter(Boolean).join(" "))}return{...e,...t}}function Fe(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function ke(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(t=ke(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Ce(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=ke(e))&&(o&&(o+=" "),o+=r);return o}const xe=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,ye=Ce,$e=(e,r)=>t=>{var o;if(r?.variants==null)return ye(e,t?.class,t?.className);const{variants:n,defaultVariants:a}=r,c=Object.keys(n).map(m=>{const g=t?.[m],v=a?.[m];if(g===null)return null;const C=xe(g)||xe(v);return n[m][C]}),p=t&&Object.entries(t).reduce((m,g)=>{let[v,C]=g;return C===void 0||(m[v]=C),m},{}),d=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((m,g)=>{let{class:v,className:C,...P}=g;return Object.entries(P).every(w=>{let[N,S]=w;return Array.isArray(S)?S.includes({...a,...p}[N]):{...a,...p}[N]===S})?[...m,v,C]:m},[]);return ye(e,c,d,t?.class,t?.className)},de="-",We=e=>{const r=Ue(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:c=>{const p=c.split(de);return p[0]===""&&p.length!==1&&p.shift(),Se(p,r)||Be(c)},getConflictingClassGroupIds:(c,p)=>{const d=t[c]||[];return p&&o[c]?[...d,...o[c]]:d}}},Se=(e,r)=>{if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),n=o?Se(e.slice(1),o):void 0;if(n)return n;if(r.validators.length===0)return;const a=e.join(de);return r.validators.find(({validator:c})=>c(a))?.classGroupId},ve=/^\[(.+)\]$/,Be=e=>{if(ve.test(e)){const r=ve.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Ue=e=>{const{theme:r,classGroups:t}=e,o={nextPart:new Map,validators:[]};for(const n in t)ae(t[n],o,n,r);return o},ae=(e,r,t,o)=>{e.forEach(n=>{if(typeof n=="string"){const a=n===""?r:we(r,n);a.classGroupId=t;return}if(typeof n=="function"){if(qe(n)){ae(n(o),r,t,o);return}r.validators.push({validator:n,classGroupId:t});return}Object.entries(n).forEach(([a,c])=>{ae(c,we(r,a),t,o)})})},we=(e,r)=>{let t=e;return r.split(de).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},qe=e=>e.isThemeGetter,He=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const n=(a,c)=>{t.set(a,c),r++,r>e&&(r=0,o=t,t=new Map)};return{get(a){let c=t.get(a);if(c!==void 0)return c;if((c=o.get(a))!==void 0)return n(a,c),c},set(a,c){t.has(a)?t.set(a,c):n(a,c)}}},le="!",ie=":",Ye=ie.length,Je=e=>{const{prefix:r,experimentalParseClassName:t}=e;let o=n=>{const a=[];let c=0,p=0,d=0,m;for(let w=0;w<n.length;w++){let N=n[w];if(c===0&&p===0){if(N===ie){a.push(n.slice(d,w)),d=w+Ye;continue}if(N==="/"){m=w;continue}}N==="["?c++:N==="]"?c--:N==="("?p++:N===")"&&p--}const g=a.length===0?n:n.substring(d),v=Ke(g),C=v!==g,P=m&&m>d?m-d:void 0;return{modifiers:a,hasImportantModifier:C,baseClassName:v,maybePostfixModifierPosition:P}};if(r){const n=r+ie,a=o;o=c=>c.startsWith(n)?a(c.substring(n.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(t){const n=o;o=a=>t({className:a,parseClassName:n})}return o},Ke=e=>e.endsWith(le)?e.substring(0,e.length-1):e.startsWith(le)?e.substring(1):e,Ze=e=>{const r=Object.fromEntries(e.orderSensitiveModifiers.map(o=>[o,!0]));return o=>{if(o.length<=1)return o;const n=[];let a=[];return o.forEach(c=>{c[0]==="["||r[c]?(n.push(...a.sort(),c),a=[]):a.push(c)}),n.push(...a.sort()),n}},Xe=e=>({cache:He(e.cacheSize),parseClassName:Je(e),sortModifiers:Ze(e),...We(e)}),Qe=/\s+/,et=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:a}=r,c=[],p=e.trim().split(Qe);let d="";for(let m=p.length-1;m>=0;m-=1){const g=p[m],{isExternal:v,modifiers:C,hasImportantModifier:P,baseClassName:w,maybePostfixModifierPosition:N}=t(g);if(v){d=g+(d.length>0?" "+d:d);continue}let S=!!N,T=o(S?w.substring(0,N):w);if(!T){if(!S){d=g+(d.length>0?" "+d:d);continue}if(T=o(w),!T){d=g+(d.length>0?" "+d:d);continue}S=!1}const U=a(C).join(":"),q=P?U+le:U,_=q+T;if(c.includes(_))continue;c.push(_);const O=n(T,S);for(let j=0;j<O.length;++j){const H=O[j];c.push(q+H)}d=g+(d.length>0?" "+d:d)}return d};function tt(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ze(r))&&(o&&(o+=" "),o+=t);return o}const ze=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ze(e[o]))&&(t&&(t+=" "),t+=r);return t};function rt(e,...r){let t,o,n,a=c;function c(d){const m=r.reduce((g,v)=>v(g),e());return t=Xe(m),o=t.cache.get,n=t.cache.set,a=p,p(d)}function p(d){const m=o(d);if(m)return m;const g=et(d,t);return n(d,g),g}return function(){return a(tt.apply(null,arguments))}}const x=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},Me=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ae=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ot=/^\d+\/\d+$/,st=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,nt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,at=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,lt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,it=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,F=e=>ot.test(e),u=e=>!!e&&!Number.isNaN(Number(e)),I=e=>!!e&&Number.isInteger(Number(e)),Ne=e=>e.endsWith("%")&&u(e.slice(0,-1)),A=e=>st.test(e),ct=()=>!0,dt=e=>nt.test(e)&&!at.test(e),ue=()=>!1,ut=e=>lt.test(e),pt=e=>it.test(e),mt=e=>!l(e)&&!i(e),bt=e=>$(e,Te,ue),l=e=>Me.test(e),G=e=>$(e,Ee,dt),se=e=>$(e,Ct,u),ft=e=>$(e,Re,ue),gt=e=>$(e,Pe,pt),ht=e=>$(e,ue,ut),i=e=>Ae.test(e),Q=e=>W(e,Ee),xt=e=>W(e,St),yt=e=>W(e,Re),vt=e=>W(e,Te),wt=e=>W(e,Pe),Nt=e=>W(e,zt,!0),$=(e,r,t)=>{const o=Me.exec(e);return o?o[1]?r(o[1]):t(o[2]):!1},W=(e,r,t=!1)=>{const o=Ae.exec(e);return o?o[1]?r(o[1]):t:!1},Re=e=>e==="position",jt=new Set(["image","url"]),Pe=e=>jt.has(e),kt=new Set(["length","size","percentage"]),Te=e=>kt.has(e),Ee=e=>e==="length",Ct=e=>e==="number",St=e=>e==="family-name",zt=e=>e==="shadow",Mt=()=>{const e=x("color"),r=x("font"),t=x("text"),o=x("font-weight"),n=x("tracking"),a=x("leading"),c=x("breakpoint"),p=x("container"),d=x("spacing"),m=x("radius"),g=x("shadow"),v=x("inset-shadow"),C=x("drop-shadow"),P=x("blur"),w=x("perspective"),N=x("aspect"),S=x("ease"),T=x("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],_=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],j=()=>[F,"px","full","auto",i,l,d],H=()=>[I,"none","subgrid",i,l],pe=()=>["auto",{span:["full",I,i,l]},i,l],Y=()=>[I,"auto",i,l],me=()=>["auto","min","max","fr",i,l],ee=()=>[i,l,d],te=()=>["start","end","center","between","around","evenly","stretch","baseline"],D=()=>["start","end","center","stretch"],b=()=>[i,l,d],z=()=>["px",...b()],M=()=>["px","auto",...b()],E=()=>[F,"auto","px","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",i,l,d],f=()=>[e,i,l],re=()=>[Ne,G],y=()=>["","none","full",m,i,l],k=()=>["",u,Q,G],J=()=>["solid","dashed","dotted","double"],be=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],fe=()=>["","none",P,i,l],ge=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i,l],K=()=>["none",u,i,l],Z=()=>["none",u,i,l],oe=()=>[u,i,l],X=()=>[F,"full","px",i,l,d];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[A],breakpoint:[A],color:[ct],container:[A],"drop-shadow":[A],ease:["in","out","in-out"],font:[mt],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[A],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[A],shadow:[A],spacing:[u],text:[A],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",F,l,i,N]}],container:["container"],columns:[{columns:[u,l,i,p]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),l,i]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{start:j()}],end:[{end:j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[I,"auto",i,l]}],basis:[{basis:[F,"full","auto",i,l,p,d]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[u,F,"auto","initial","none",l]}],grow:[{grow:["",u,i,l]}],shrink:[{shrink:["",u,i,l]}],order:[{order:[I,"first","last","none",i,l]}],"grid-cols":[{"grid-cols":H()}],"col-start-end":[{col:pe()}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":H()}],"row-start-end":[{row:pe()}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":me()}],"auto-rows":[{"auto-rows":me()}],gap:[{gap:ee()}],"gap-x":[{"gap-x":ee()}],"gap-y":[{"gap-y":ee()}],"justify-content":[{justify:[...te(),"normal"]}],"justify-items":[{"justify-items":[...D(),"normal"]}],"justify-self":[{"justify-self":["auto",...D()]}],"align-content":[{content:["normal",...te()]}],"align-items":[{items:[...D(),"baseline"]}],"align-self":[{self:["auto",...D(),"baseline"]}],"place-content":[{"place-content":te()}],"place-items":[{"place-items":[...D(),"baseline"]}],"place-self":[{"place-self":["auto",...D()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":b()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":b()}],"space-y-reverse":["space-y-reverse"],size:[{size:E()}],w:[{w:[p,"screen",...E()]}],"min-w":[{"min-w":[p,"screen","none",...E()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[c]},...E()]}],h:[{h:["screen",...E()]}],"min-h":[{"min-h":["screen","none",...E()]}],"max-h":[{"max-h":["screen",...E()]}],"font-size":[{text:["base",t,Q,G]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,i,se]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ne,l]}],"font-family":[{font:[xt,l,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,i,l]}],"line-clamp":[{"line-clamp":[u,"none",i,se]}],leading:[{leading:[i,l,a,d]}],"list-image":[{"list-image":["none",i,l]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",i,l]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:f()}],"text-color":[{text:f()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:[u,"from-font","auto",i,G]}],"text-decoration-color":[{decoration:f()}],"underline-offset":[{"underline-offset":[u,"auto",i,l]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:["px",...b()]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i,l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i,l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),yt,ft]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",vt,bt]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},I,i,l],radial:["",i,l],conic:[I,i,l]},wt,gt]}],"bg-color":[{bg:f()}],"gradient-from-pos":[{from:re()}],"gradient-via-pos":[{via:re()}],"gradient-to-pos":[{to:re()}],"gradient-from":[{from:f()}],"gradient-via":[{via:f()}],"gradient-to":[{to:f()}],rounded:[{rounded:y()}],"rounded-s":[{"rounded-s":y()}],"rounded-e":[{"rounded-e":y()}],"rounded-t":[{"rounded-t":y()}],"rounded-r":[{"rounded-r":y()}],"rounded-b":[{"rounded-b":y()}],"rounded-l":[{"rounded-l":y()}],"rounded-ss":[{"rounded-ss":y()}],"rounded-se":[{"rounded-se":y()}],"rounded-ee":[{"rounded-ee":y()}],"rounded-es":[{"rounded-es":y()}],"rounded-tl":[{"rounded-tl":y()}],"rounded-tr":[{"rounded-tr":y()}],"rounded-br":[{"rounded-br":y()}],"rounded-bl":[{"rounded-bl":y()}],"border-w":[{border:k()}],"border-w-x":[{"border-x":k()}],"border-w-y":[{"border-y":k()}],"border-w-s":[{"border-s":k()}],"border-w-e":[{"border-e":k()}],"border-w-t":[{"border-t":k()}],"border-w-r":[{"border-r":k()}],"border-w-b":[{"border-b":k()}],"border-w-l":[{"border-l":k()}],"divide-x":[{"divide-x":k()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":k()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...J(),"hidden","none"]}],"divide-style":[{divide:[...J(),"hidden","none"]}],"border-color":[{border:f()}],"border-color-x":[{"border-x":f()}],"border-color-y":[{"border-y":f()}],"border-color-s":[{"border-s":f()}],"border-color-e":[{"border-e":f()}],"border-color-t":[{"border-t":f()}],"border-color-r":[{"border-r":f()}],"border-color-b":[{"border-b":f()}],"border-color-l":[{"border-l":f()}],"divide-color":[{divide:f()}],"outline-style":[{outline:[...J(),"none","hidden"]}],"outline-offset":[{"outline-offset":[u,i,l]}],"outline-w":[{outline:["",u,Q,G]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",g,Nt,ht]}],"shadow-color":[{shadow:f()}],"inset-shadow":[{"inset-shadow":["none",i,l,v]}],"inset-shadow-color":[{"inset-shadow":f()}],"ring-w":[{ring:k()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:f()}],"ring-offset-w":[{"ring-offset":[u,G]}],"ring-offset-color":[{"ring-offset":f()}],"inset-ring-w":[{"inset-ring":k()}],"inset-ring-color":[{"inset-ring":f()}],opacity:[{opacity:[u,i,l]}],"mix-blend":[{"mix-blend":[...be(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":be()}],filter:[{filter:["","none",i,l]}],blur:[{blur:fe()}],brightness:[{brightness:[u,i,l]}],contrast:[{contrast:[u,i,l]}],"drop-shadow":[{"drop-shadow":["","none",C,i,l]}],grayscale:[{grayscale:["",u,i,l]}],"hue-rotate":[{"hue-rotate":[u,i,l]}],invert:[{invert:["",u,i,l]}],saturate:[{saturate:[u,i,l]}],sepia:[{sepia:["",u,i,l]}],"backdrop-filter":[{"backdrop-filter":["","none",i,l]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[u,i,l]}],"backdrop-contrast":[{"backdrop-contrast":[u,i,l]}],"backdrop-grayscale":[{"backdrop-grayscale":["",u,i,l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u,i,l]}],"backdrop-invert":[{"backdrop-invert":["",u,i,l]}],"backdrop-opacity":[{"backdrop-opacity":[u,i,l]}],"backdrop-saturate":[{"backdrop-saturate":[u,i,l]}],"backdrop-sepia":[{"backdrop-sepia":["",u,i,l]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":b()}],"border-spacing-x":[{"border-spacing-x":b()}],"border-spacing-y":[{"border-spacing-y":b()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",i,l]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[u,"initial",i,l]}],ease:[{ease:["linear","initial",S,i,l]}],delay:[{delay:[u,i,l]}],animate:[{animate:["none",T,i,l]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,i,l]}],"perspective-origin":[{"perspective-origin":ge()}],rotate:[{rotate:K()}],"rotate-x":[{"rotate-x":K()}],"rotate-y":[{"rotate-y":K()}],"rotate-z":[{"rotate-z":K()}],scale:[{scale:Z()}],"scale-x":[{"scale-x":Z()}],"scale-y":[{"scale-y":Z()}],"scale-z":[{"scale-z":Z()}],"scale-3d":["scale-3d"],skew:[{skew:oe()}],"skew-x":[{"skew-x":oe()}],"skew-y":[{"skew-y":oe()}],transform:[{transform:[i,l,"","none","gpu","cpu"]}],"transform-origin":[{origin:ge()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:X()}],"translate-x":[{"translate-x":X()}],"translate-y":[{"translate-y":X()}],"translate-z":[{"translate-z":X()}],"translate-none":["translate-none"],accent:[{accent:f()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:f()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i,l]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i,l]}],fill:[{fill:["none",...f()]}],"stroke-w":[{stroke:[u,Q,G,se]}],stroke:[{stroke:["none",...f()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},At=rt(Mt);function R(...e){return At(Ce(e))}const Rt=$e("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Pt({className:e,variant:r,size:t,asChild:o=!1,...n}){const a=o?ce:"button";return s.jsx(a,{"data-slot":"button",className:R(Rt({variant:r,size:t,className:e})),...n})}function Tt({className:e,...r}){return s.jsx("div",{"data-slot":"card",className:R("bg-card text-card-foreground rounded-xl border shadow-sm",e),...r})}function Et({className:e,...r}){return s.jsx("div",{"data-slot":"card-header",className:R("flex flex-col gap-1.5 p-6",e),...r})}function It({className:e,...r}){return s.jsx("div",{"data-slot":"card-title",className:R("leading-none font-semibold",e),...r})}function Gt({className:e,...r}){return s.jsx("div",{"data-slot":"card-description",className:R("text-muted-foreground text-sm",e),...r})}function Vt({className:e,...r}){return s.jsx("div",{"data-slot":"card-content",className:R("p-6 pt-0",e),...r})}function V({className:e,type:r,...t}){return s.jsx("input",{type:r,"data-slot":"input",className:R("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...t})}var Lt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_t=Lt.reduce((e,r)=>{const t=h.forwardRef((o,n)=>{const{asChild:a,...c}=o,p=a?ce:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(p,{...c,ref:n})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),Ot="Label",Ie=h.forwardRef((e,r)=>s.jsx(_t.label,{...e,ref:r,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));Ie.displayName=Ot;var Dt=Ie;function L({className:e,...r}){return s.jsx(Dt,{"data-slot":"label",className:R("text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...r})}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ge=(...e)=>e.filter((r,t,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=h.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:c,...p},d)=>h.createElement("svg",{ref:d,...$t,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:Ge("lucide",n),...p},[...c.map(([m,g])=>h.createElement(m,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,r)=>{const t=h.forwardRef(({className:o,...n},a)=>h.createElement(Wt,{ref:a,iconNode:r,className:Ge(`lucide-${Ft(e)}`,o),...n}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]],Ut=B("Bitcoin",Bt);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Ht=B("CreditCard",qt);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Jt=B("DollarSign",Yt);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Zt=B("Shield",Kt);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Qt=B("Timer",Xt);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],je=B("Wallet",er),rr=function(){return s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-slate-950 to-black text-white",children:s.jsxs("section",{className:"container mx-auto px-4 py-20",children:[s.jsxs("div",{className:"mb-20 text-center",children:[s.jsx("div",{className:"mb-8 flex justify-center",children:s.jsx("div",{className:"rounded-full bg-emerald-500/10 p-4",children:s.jsx(Ut,{className:"h-8 w-8 text-emerald-400"})})}),s.jsx("h1",{className:"mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl",children:"Buy USDT Instantly"}),s.jsx("p",{className:"mx-auto max-w-2xl text-lg text-slate-300",children:"Fast, secure, and easy way to purchase USDT using TTC. Get started in minutes."})]}),s.jsxs(Tt,{className:"mx-auto max-w-2xl border-slate-800 bg-slate-900/90 shadow-lg backdrop-blur",children:[s.jsxs(Et,{children:[s.jsx(It,{className:"text-slate-100",children:"Create Transaction"}),s.jsx(Gt,{className:"text-slate-400",children:"Enter your details to purchase USDT"})]}),s.jsx(Vt,{children:s.jsx("form",{className:"space-y-6",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(L,{htmlFor:"email",className:"text-slate-200",children:"Email"}),s.jsx(V,{id:"email",placeholder:"you@example.com",type:"email",className:"border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-500",required:!0})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(L,{htmlFor:"wallet",className:"text-slate-200",children:"USDT Wallet Address"}),s.jsxs("div",{className:"relative",children:[s.jsx(je,{className:"absolute left-3 top-3 h-4 w-4 text-slate-400"}),s.jsx(V,{id:"wallet",className:"border-slate-800 bg-slate-950 pl-9 text-slate-200 placeholder:text-slate-500",placeholder:"Enter your USDT wallet address",required:!0})]})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(L,{className:"text-slate-200",children:"Amount"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"relative",children:[s.jsx(Jt,{className:"absolute left-3 top-3 h-4 w-4 text-slate-400"}),s.jsx(V,{type:"number",placeholder:"0.00",className:"border-slate-800 bg-slate-950 pl-9 text-slate-200 placeholder:text-slate-500",required:!0})]}),s.jsx("div",{className:"flex items-center rounded-md border border-slate-800 bg-slate-950 px-3 text-slate-200",children:"TTC"})]}),s.jsx("p",{className:"text-sm text-slate-400",children:"You will receive USDT at the current market rate"})]}),s.jsxs("div",{className:"space-y-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Ht,{className:"h-5 w-5 text-emerald-400"}),s.jsx("h3",{className:"font-medium text-slate-200",children:"Payment Details"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(L,{htmlFor:"card-name",className:"text-slate-200",children:"Name on Card"}),s.jsx(V,{id:"card-name",placeholder:"John Doe",className:"border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-500"})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(L,{htmlFor:"card-number",className:"text-slate-200",children:"Card Number"}),s.jsx(V,{id:"card-number",placeholder:"1234 5678 9012 3456",className:"border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-500"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(L,{htmlFor:"expiry",className:"text-slate-200",children:"Expiry Date"}),s.jsx(V,{id:"expiry",placeholder:"MM/YY",className:"border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-500"})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(L,{htmlFor:"cvc",className:"text-slate-200",children:"CVC"}),s.jsx(V,{id:"cvc",placeholder:"123",className:"border-slate-800 bg-slate-950 text-slate-200 placeholder:text-slate-500"})]})]})]})]}),s.jsx(Pt,{type:"submit",className:"w-full bg-emerald-500 text-white hover:bg-emerald-600",size:"lg",children:"Complete Purchase"})]})})})]}),s.jsxs("div",{className:"mt-20 grid grid-cols-1 gap-8 text-center sm:grid-cols-3",children:[s.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur",children:[s.jsx("div",{className:"mb-4 flex justify-center",children:s.jsx("div",{className:"rounded-full bg-emerald-500/10 p-3",children:s.jsx(Zt,{className:"h-6 w-6 text-emerald-400"})})}),s.jsx("h3",{className:"mb-2 font-medium text-slate-200",children:"Secure Transactions"}),s.jsx("p",{className:"text-sm text-slate-400",children:"Your transactions are protected with industry-leading security"})]}),s.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur",children:[s.jsx("div",{className:"mb-4 flex justify-center",children:s.jsx("div",{className:"rounded-full bg-emerald-500/10 p-3",children:s.jsx(Qt,{className:"h-6 w-6 text-emerald-400"})})}),s.jsx("h3",{className:"mb-2 font-medium text-slate-200",children:"Instant Processing"}),s.jsx("p",{className:"text-sm text-slate-400",children:"Get your USDT in minutes with our fast processing system"})]}),s.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur",children:[s.jsx("div",{className:"mb-4 flex justify-center",children:s.jsx("div",{className:"rounded-full bg-emerald-500/10 p-3",children:s.jsx(je,{className:"h-6 w-6 text-emerald-400"})})}),s.jsx("h3",{className:"mb-2 font-medium text-slate-200",children:"Best Market Rates"}),s.jsx("p",{className:"text-sm text-slate-400",children:"Get competitive USDT rates for your TTC"})]})]})]})})};export{rr as component};
