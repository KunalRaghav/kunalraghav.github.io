(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9dTW":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("q1tI"),i=a.n(r),n=function(e){var t={display:"inline-block",padding:"2px 10px",borderRadius:"6px",fontWeight:"900",margin:"2px 4px 2px 0px",background:""+e.color,color:""+e.textColor};return e.hasOwnProperty("fontSize")&&(t.fontSize=e.fontSize),i.a.createElement("div",{style:t},e.children)}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,y=E&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+o+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(V,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),V=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,v=e.itemProp,w=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,s.default)({opacity:R?1:0,transition:N?"opacity "+E+"ms":"none"},o),W="boolean"==typeof b?"lightgray":b,k={transitionDelay:E+"ms"},H=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&k,o,f),T={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:v};if(g){var P=g,j=p(g);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),W&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:W,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&k)}),j.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:T,imageVariants:P,generateSources:L}),j.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:T,imageVariants:P,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(V,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:w},j,{imageVariants:P}))}}))}if(h){var M=h,q=p(h),A=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete A.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},W&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:W,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},N&&k)}),q.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:T,imageVariants:M,generateSources:L}),q.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:T,imageVariants:M,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(V,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:w},q,{imageVariants:M}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),W=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function k(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}N.propTypes={resolutions:O,sizes:W,fixed:k(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:k(c.default.oneOfType([W,c.default.arrayOf(W)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=N;t.default=H},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return v}));var r=a("q1tI"),i=a.n(r),n=(a("Wbzz"),a("8k0H")),l=a("vrFN"),o=a("9eSz"),s=a.n(o),d=(a("VxdY"),a("IP2g")),c=a("wHSu"),u=(a("8tEE"),a("9dTW")),f={web:["HTML5","CSS3","JavaScript","ESMA6","MERN","ReactJS","GatsbyJs","Bootstrap","Django","NodeJs","Express","Redux","MongoDB","Amazon DynamoDB"],language:["Python3","JavaScript","Java","Bash","Kotlin","Dart"],mobile:["Android","MVVM","RxJava2","Coroutines","AndroidX","Clean Architecture","Firebase","AWS Appsync","Dart","Flutter"],tools:["Git","Figma","Adobe Photoshop","Gimp","Inkscape","Adobe Illustrator","Bash shell","Linux","WSL2"]},m=a("rLPE"),p=function(e){var t=e.data;return i.a.createElement("div",{className:"heroWidget"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},i.a.createElement(s.a,{className:"roundProfileImage flex_item",fluid:t.fileName.childImageSharp.fluid,alt:""}),i.a.createElement("div",{className:"flex_item",style:{flex:"1 1 auto",margin:"15px 30px"}},i.a.createElement("h1",null,"Hi, I'm Kunal Raghav"),i.a.createElement("br",null),i.a.createElement("p",null,"A software engineer and a self taught developer who is passionate about mobile technologies and open source. I'm also a self procliamed graphic designer and internet surfer."),i.a.createElement("br",null),i.a.createElement("ul",{style:{listStyle:"none"}},i.a.createElement("li",null,i.a.createElement(d.a,{icon:c.p,className:"fa-fw"}),"  New Delhi, India"),i.a.createElement("li",null,i.a.createElement(d.a,{icon:c.a,className:"fa-fw"}),i.a.createElement("a",{href:"mailto:kraghav123@gmail.com"},"  kraghav123@gmail.com")),i.a.createElement("li",null,i.a.createElement(d.a,{icon:c.h,className:"fa-fw"}),i.a.createElement("a",{href:m.a.resume},"  Download Resume")))))))},g=function(){return i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",color:"#fff"}},f.web.map((function(e){return i.a.createElement(u.a,{color:"var(--pink)",textColor:"#fff"},e)})))},h=function(){return i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",color:"#fff"}},f.language.map((function(e){return i.a.createElement(u.a,{color:"var(--lilac)",textColor:"#fff"},e)})))},b=function(){return i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",color:"#fff"}},f.mobile.map((function(e){return i.a.createElement(u.a,{color:"#32de84",textColor:"#fff"},e)})))},E=function(){return i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",color:"#fff"}},f.tools.map((function(e){return i.a.createElement(u.a,{color:"var(--blue)",textColor:"#fff"},e)})))},y=function(){return i.a.createElement("div",{className:"skills"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,i.a.createElement(d.a,{icon:c.e,className:"fa-fw"})," SKILLS"),i.a.createElement("br",null),i.a.createElement("h3",null,"Web"),i.a.createElement(g,null),i.a.createElement("br",null),i.a.createElement("h3",null,"Languages"),i.a.createElement(h,null),i.a.createElement("br",null),i.a.createElement("h3",null,"App Development"),i.a.createElement(b,null),i.a.createElement("br",null),i.a.createElement("h3",null,"Other Tooling"),i.a.createElement(E,null),i.a.createElement("div",null)))},v="4242448681";t.default=function(e){var t=e.data;return i.a.createElement(n.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement("div",null,i.a.createElement(p,{data:t}),i.a.createElement(y,null)))}},VxdY:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-5c02bd92e518b385a703.js.map