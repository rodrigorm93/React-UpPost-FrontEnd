(this["webpackJsonppost-app"]=this["webpackJsonppost-app"]||[]).push([[0],{170:function(e,t,a){e.exports=a(326)},175:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=(a(175),a(176),a(177),a(24)),i=a(25),l=a(9),u=a(22),m=a(88),p=a(6),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(p.a)(Object(p.a)({},r),{},Object(m.a)({},t.name,t.value)))};return[r,s,o]},g=a(8),b=a.n(g),f=a(16),E={login:"[Auth] Login",logout:"[Auth] Logout",authChekingFinish:"[auth] Finish checking login state",authLogout:"[auth] Logout",uiSetError:"[UI] Set Error",uiRemoveError:"[UI] Remove Error",uiStartLoading:"[UI] Start loading",uiFinishLoading:"[UI] Finish loading",postsAddNew:"[Posts] New post",postsActive:"[Posts] Set active posts",postsDesactive:"[Posts] Set desactive posts",postsLoad:"[Posts] Load todos los posts",postFinishLoading:"[Posts] Finish loading posts",postNumberPage:"[Posts] Numero de paginas posts",postsClear:"[Posts] Limpiar estados",postsLoadUltimosPost:"[Posts] Carga los ultimos posts",postFinishLoadingPages:"[Posts] Loading de los post por paginacion",postFinishLoadingSearch:"[Posts] Loading post Search",postUpdated:"[Posts] Update post",stateDelete:"[Posts] post eliminado correctamente",notesUpdate:"[Posts] Update note",notesFileUrl:"[Posts] Update image url",postDelete:"[Posts] Delete Post",notesLogoutCleaning:"[Posts] Logout Cleaning",postUpCorrect:"[POST] msj de post subido correctamente",resetPagination:"[Pagination] indicar reinicio de la paginacion"},h="https://mern-posted-on.herokuapp.com/api",v=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(h,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},j=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(h,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},O=function(e,t){var a="".concat(h,"/").concat(e),n=new FormData;return n.append("files",t[0]),fetch(a,{method:"PUT",body:n})},x=function(e){var t="".concat(h,"/auth/google");return fetch(t,{method:"POST",headers:{"Content-type":"application/json",idtoken:e}})},y=a(42),k=a.n(y),w=function(){return{type:E.authChekingFinish}},C=function(e){return{type:E.login,payload:e}},N=function(){return{type:E.authLogout}},_=a(142),P=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).loading,a=Object(l.c)((function(e){return e.auth})).name,n=d({email:"rodrigoRm@gmail.com",password:"123456"}),c=Object(u.a)(n,2),o=c[0],m=c[1],p=o.email,g=o.password,E=function(t){var a,n=t.tokenId;e((a=n,function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a);case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).ok&&(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(C({uid:r.uid,name:r.name})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),console.log(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},a&&r.a.createElement(i.a,{to:"/"}),r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(){var a=Object(f.a)(b.a.mark((function a(n){var r,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v("auth",{email:e,password:t},"POST");case 2:return r=a.sent,a.next=5,r.json();case 5:c=a.sent,console.log(c),c.ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),n(C({uid:c.uid,name:c.name}))):k.a.fire("Error",c.msg,"error");case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(p,g))}},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:p,onChange:m}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:g,onChange:m}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement(_.GoogleLogin,{clientId:"256402099185-6f7anjk52ttgucld44qacbrfv9q0dne1.apps.googleusercontent.com",buttonText:"Login",onSuccess:E,onFailure:E,cookiePolicy:"single_host_origin"})),r.a.createElement(s.b,{to:"/register",className:"link"},"Create new account")))))},S=function(e){return{type:E.uiSetError,payload:e}},I=a(143),F=a.n(I),L=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).msgError,a=Object(l.c)((function(e){return e.auth})).name,n=d({name:"Hernando",email:"nando@gmail.com",password:"123456",password2:"123456"}),c=Object(u.a)(n,2),o=c[0],s=c[1],m=o.name,p=o.email,g=o.password,h=o.password2,j=function(){return 0===m.trim().length?(e(S("Name is required")),!1):F.a.isEmail(p)?g!==h||g.length<5?(e(S("Password should be at least 6 characters and match each other")),!1):(e({type:E.uiRemoveError}),!0):(e(S("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},a&&r.a.createElement(i.a,{to:"/"}),r.a.createElement("h3",{className:"auth__title"},"Register"),t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),j()&&e(function(e,t,a){return function(){var n=Object(f.a)(b.a.mark((function n(r){var c,o;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v("auth/new",{email:e,password:t,name:a},"POST");case 2:return c=n.sent,n.next=5,c.json();case 5:(o=n.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),r(C({uid:o.uid,name:o.name}))):k.a.fire("Error",o.msg,"error");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(p,g,m))}},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:m,onChange:s}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:p,onChange:s}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:g,onChange:s}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:h,onChange:s}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register")))))},T=a(89),D=a.n(T),U=a(68),A=a.n(U),V=function(e){var t=e.title,a=e.id,n=e.descripcion,c=e.urlImg,o=e.img,i=e.urlVideoState,l=e.user,u=e.newDate;return r.a.createElement("div",{id:"cards_landscape_wrap-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/public/detalle/".concat(a)},r.a.createElement("div",{className:"card-flyer"},r.a.createElement("div",{className:"text-box"},r.a.createElement("div",{className:"image-box"},o?r.a.createElement("img",{className:"card-img-home",variant:"top",src:c,alt:l.name}):r.a.createElement(A.a,{className:"react-player-home",url:i,controls:!0})),r.a.createElement("div",{className:"text-container"},r.a.createElement("h6",null,t),r.a.createElement("p",null,n),r.a.createElement("p",null," ",u.format("MMM Do YY")),r.a.createElement("p",null," BY: ",l.name)))))))))},R=function(e){var t=e.id,a=(e.name,e.descripcion),c=e.title,o=e.date,s=e.urlVideo,i=e.urlImg,l=e.img,m=e.user,p=D()(o),d=Object(n.useState)(null),g=Object(u.a)(d,2),b=g[0],f=g[1];return Object(n.useEffect)((function(){f("".concat(s))}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{title:c,id:t,descripcion:a,urlImg:i,urlVideoState:b,user:m,img:l,newDate:p}))},H=a(336),G=a(337),M=a(75),B=a(328),Y=function(e){return{type:E.postFinishLoadingSearch,payload:e}},z=function(e){return{type:E.postFinishLoadingPages,payload:e}},q=function(e){return{type:E.postNumberPage,payload:{number:e}}},J=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r,c,o,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("posts");case 3:return r=e.sent,e.next=6,r.json();case 6:if(c=e.sent,o=[],!c.ok){e.next=23;break}s=0;case 10:if(!(s<c.posts.length)){e.next=23;break}if(c.posts[s].categoria.tipo!==t){e.next=20;break}return e.next=14,v("upload/imagen/posts/".concat(c.posts[s].img));case 14:return a=e.sent,e.next=17,a.url;case 17:n=e.sent,c.posts[s].urlImg=n,o.push(c.posts[s]);case 20:s++,e.next=10;break;case 23:return e.abrupt("return",o);case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r,c,o,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("posts");case 3:return r=e.sent,e.next=6,r.json();case 6:if(c=e.sent,o=[],!c.ok){e.next=24;break}s=0;case 10:if(!(s<c.posts.length)){e.next=24;break}if(c.posts[s].user._id!==t){e.next=21;break}if(!c.posts[s].img){e.next=20;break}return e.next=15,v("upload/imagen/posts/".concat(c.posts[s].img));case 15:return a=e.sent,e.next=18,a.url;case 18:n=e.sent,c.posts[s].urlImg=n;case 20:o.push(c.posts[s]);case 21:s++,e.next=10;break;case 24:return e.abrupt("return",o);case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=[],e.next=4,v("posts/search/post/".concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:if(!(o=e.sent).ok||!o.posts.img){e.next=16;break}return e.next=11,v("upload/imagen/posts/".concat(o.posts.img));case 11:return a=e.sent,e.next=14,a.url;case 14:n=e.sent,o.posts.urlImg=n;case 16:return r.push(o.posts),e.abrupt("return",r);case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(e,t){return{type:E.stateDelete,payload:{id:e,msj:t}}},W=function(){return{type:E.postFinishLoading}},Z=function(e){return{type:E.postsAddNew,payload:e}},$=function(e){return{type:E.postsLoad,payload:e}},ee=function(e){return{type:E.postsLoadUltimosPost,payload:e}},te=function(e,t){return{type:E.postUpCorrect,payload:{id:e,msj:t}}},ae=function(){var e=Object(i.g)().categoryid,t=Object(l.c)((function(e){return e.dataFetch})),a=t.data,c=t.isLoading,o=Object(l.b)();return Object(n.useEffect)((function(){var t=!1;return function(){var a=Object(f.a)(b.a.mark((function a(){var n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o({type:"FETCH_INIT"}),a.prev=1,a.next=4,J(e);case 4:n=a.sent,t||o({type:"FETCH_SUCCESS",payload:n}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t||o({type:"FETCH_FAILURE"});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(){return a.apply(this,arguments)}}()(),function(){t=!0}}),[o,e]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner"},r.a.createElement(B.a,{animation:"border",variant:"info"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{className:"row-card animate__animated animate__fadeIn",gutter:[32,16],align:"middle"},a.length>0?r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(G.a,{key:e.id,className:"col-conteiner-post"},r.a.createElement(R,Object.assign({},e,{key:e.id})))}))):r.a.createElement(G.a,{className:"col-empty",span:24},r.a.createElement(M.a,null))),r.a.createElement(H.a,{className:"row-pagination",justify:"center"},r.a.createElement(G.a,{span:2}),r.a.createElement(G.a,{span:2}))))},ne=a(335),re=a(57),ce=a.n(re),oe=function(e){var t=e.props,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],s=c[1],i=t.title,l=t.urlImg,m=t.urlVideo,p=t.body;return Object(n.useEffect)((function(){s("".concat(m))}),[m]),r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{justify:"space-around",align:"middle",className:"row-container animate__animated animate__fadeIn"},r.a.createElement(G.a,{span:20,className:"col-detail"},r.a.createElement(ne.a,{className:"text-center card-box-container",bg:"light",text:"dark",border:"light"},r.a.createElement(ne.a.Header,{className:"header-card"},r.a.createElement(ne.a.Title,{className:"title-card"},i),m?r.a.createElement(A.a,{className:"react-player",url:o,controls:!0}):r.a.createElement(ne.a.Img,{className:"img-card",variant:"top",src:l})),r.a.createElement(ce.a,{config:{language:"es",height:"auto",width:"100%"},readOnly:!0,data:p})),r.a.createElement("footer",{className:" footer-card"}))),r.a.createElement(H.a,null))},se=function(){var e=Object(l.c)((function(e){return e.dataFetch})),t=e.data,a=e.isLoading,c=Object(l.b)(),o=Object(i.g)().id;return Object(n.useEffect)((function(){var e=!1;return function(){var t=Object(f.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:"FETCH_INIT"}),t.prev=1,t.next=4,K(o);case 4:a=t.sent,e||c({type:"FETCH_SUCCESS",payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e||c({type:"FETCH_FAILURE"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[c,o]),r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner"},r.a.createElement(B.a,{animation:"border",variant:"info"}))):r.a.createElement("div",null,r.a.createElement(oe,{props:t[0]}))))},ie=function(){return r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/public/login",component:P}),r.a.createElement(i.b,{exact:!0,path:"/public/register",component:L}),r.a.createElement(i.b,{exact:!0,path:"/public/category/:categoryid",component:ae}),r.a.createElement(i.b,{exact:!0,path:"/public/detalle/:id",component:se}),r.a.createElement(i.a,{to:"/"}))},le=a(331),ue=function(){var e=Object(l.b)(),t=Object(n.useState)("imagen"),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({data:""}),i=Object(u.a)(s,2),m=i[0],p=i[1],g=d({title:"",descripcion:"",urlVideo:""}),E=Object(u.a)(g,2),h=E[0],v=E[1],x=h.title,y=h.descripcion,w=h.urlVideo,C=Object(n.useState)(!1),N=Object(u.a)(C,2),_=N[0],P=N[1];return r.a.createElement("div",{className:"post__main animate__animated animate__pulse"},r.a.createElement(H.a,{justify:"space-around",align:"middle"},r.a.createElement(G.a,{span:20},r.a.createElement("h1",{className:"title-add-post"},"New Post"),r.a.createElement(le.a,{onSubmit:function(t){var a;t.preventDefault(),a=w?{title:x,body:m.data,descripcion:y,categoria:c,dateCreation:new Date,urlVideo:w}:{title:x,body:m.data,descripcion:y,dateCreation:new Date,categoria:c},e(function(e,t){return function(){var a=Object(f.a)(b.a.mark((function a(n,r){var c,o,s,i,l,u,m,p,d;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=r().auth,o=c.uid,s=c.name,"imagen"===e.categoria?e.categoria="5f68d932b1e49a0834c351c7":"video"===e.categoria&&(e.categoria="5f6ae33b7da35419289239d4"),a.prev=2,a.next=5,j("posts",e,"POST");case 5:return i=a.sent,a.next=8,i.json();case 8:if(l=a.sent,console.log(t),!l.ok||!t){a.next=21;break}return a.next=13,O("upload/posts/".concat(l.post.id),t);case 13:return m=a.sent,a.next=16,m.json();case 16:u=a.sent,e.id=l.post.id,e.user={_id:o,name:s,img:u.img},a.next=22;break;case 21:if(l.ok)e.id=l.post.id,e.user={_id:o,name:s};else{for(d in p=[],l.errors)p.push(l.errors[d].msg);k.a.fire({icon:"error",title:"Oops...",text:p[0]})}case 22:"Post subido Correctamente",k.a.fire("Saved",l.post.title,"success"),n(Z(e)),n(te("Post subido Correctamente")),a.next=31;break;case 28:a.prev=28,a.t0=a.catch(2),console.log(a.t0);case 31:case"end":return a.stop()}}),a,null,[[2,28]])})));return function(e,t){return a.apply(this,arguments)}}()}(a,_)),P(!1)}},r.a.createElement(le.a.Label,null,"Titulo:"),r.a.createElement(le.a.Control,{size:"lg",type:"text",name:"title",placeholder:"title",value:x,onChange:v}),r.a.createElement(le.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(le.a.Label,null,"Descripci\xf3n:"),r.a.createElement(le.a.Control,{as:"textarea",rows:"2",name:"descripcion",placeholder:"descripcion",value:y,onChange:v}),r.a.createElement("br",null),r.a.createElement(le.a.Label,null,"Contenido:"),r.a.createElement(ce.a,{data:m.data,onChange:function(e){p({data:e.editor.getData()})}})),r.a.createElement(le.a.Label,null,"Opciones:"),r.a.createElement(le.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onClick:function(e){o(e.target.value)}},r.a.createElement("option",{value:"imagen"},"Imagen"),r.a.createElement("option",{value:"video"},"Video")),r.a.createElement("br",null)," ",r.a.createElement("br",null),"imagen"===c?r.a.createElement("div",null,r.a.createElement("input",{type:"file",id:"fileUpload",onChange:function(e){P(e.target.files)}})):r.a.createElement(le.a.Group,{controlId:"formGroupVideo"},r.a.createElement(le.a.Label,null,"Url Video"),r.a.createElement(le.a.Control,{type:"text",name:"urlVideo",value:w,onChange:v,placeholder:"Enter url video"})),r.a.createElement("div",{className:"container-button-submit"},r.a.createElement("button",{className:"button-submit",type:"submit"},"Guardar"))))))},me=a(338),pe=a(339),de=function(e){var t=e.id,a=e.body,c=e.descripcion,o=e.title,i=e.date,m=e.urlVideo,d=e.urlImg,g=e.img,h=e.categoria,O=Object(n.useState)(""),x=Object(u.a)(O,2),y=x[0],w=x[1],C=D()(i),N=Object(l.b)();Object(n.useEffect)((function(){w("".concat(m))}),[m]);return r.a.createElement(ne.a,{className:"text-center"},r.a.createElement(ne.a.Header,{className:"header-card"},r.a.createElement(ne.a.Title,{className:"title-card"},o),m?r.a.createElement(A.a,{className:"react-detail",url:y,controls:!0}):r.a.createElement(ne.a.Img,{className:"card-img-detail",variant:"top",src:d})),r.a.createElement(ne.a.Body,null,r.a.createElement(ce.a,{config:{language:"es"},readOnly:!0,data:a})),r.a.createElement(ne.a.Footer,{className:"text-muted"},C.format("MMM Do YY"),r.a.createElement(s.b,{to:"/private/editPost",className:"icon-edit",onClick:function(){N(function(e,t){return{type:E.postsActive,payload:Object(p.a)({id:e},t)}}(t,{date:i,title:o,body:a,urlVideo:m,categoria:h,descripcion:c,img:g,urlImg:d}))}},r.a.createElement(me.a,null)),r.a.createElement("div",{className:"icons-list btn-delete",onClick:function(){N(function(e,t){return function(){var a=Object(f.a)(b.a.mark((function a(n){var r;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log(e,t),k.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var a=Object(f.a)(b.a.mark((function a(c){var o,s;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!c.isConfirmed){a.next=16;break}if(!t){a.next=9;break}return a.next=4,v("upload/imagen/posts/".concat(t),{},"DELETE");case 4:return o=a.sent,a.next=7,o.json();case 7:r=a.sent,console.log(r);case 9:return a.next=11,j("posts/".concat(e),{},"DELETE");case 11:return s=a.sent,a.next=14,s.json();case 14:a.sent.ok&&(k.a.fire("Deleted!","Your file has been deleted.","success"),"Post eliminado Correctamente",n(Q("Post eliminado Correctamente")));case 16:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,g))}},r.a.createElement(pe.a,null))))},ge=function(){var e=Object(l.c)((function(e){return e.dataFetch})),t=e.data,a=e.isLoading,c=Object(l.c)((function(e){return e.posts})).deletePost,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(l.b)();return Object(n.useEffect)((function(){var e=!1;return function(){var t=Object(f.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"FETCH_INIT"}),t.prev=1,t.next=4,X(o);case 4:a=t.sent,e||s({type:"FETCH_SUCCESS",payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e||s({type:"FETCH_FAILURE"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[c,s,o]),r.a.createElement("div",null,a?r.a.createElement("div",{className:"spinner"},r.a.createElement(B.a,{animation:"border",variant:"info"})):r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(H.a,{justify:"space-around",className:"animate__animated animate__zoomIn",align:"middle",key:e.id},r.a.createElement(G.a,{className:"col-post-myPost",key:e.id,span:12},r.a.createElement(de,e)))}))))},be=function(){var e=Object(l.b)(),t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(l.c)((function(e){return e.posts})).active,i=Object(n.useState)(null),m=Object(u.a)(i,2),p=m[0],g=m[1];console.log(s);var E=d(s),h=Object(u.a)(E,2),x=h[0],y=h[1],w=x.title,C=x.body,N=x.descripcion,_=Object(n.useState)(s.categoria.tipo),P=Object(u.a)(_,2),S=P[0],I=P[1],F=Object(n.useState)({data:C}),L=Object(u.a)(F,2),T=L[0],D=L[1];return r.a.createElement("div",{className:"animate__animated animate__fadeIn"},r.a.createElement(H.a,{justify:"space-around",align:"middle"},r.a.createElement(G.a,{span:20},r.a.createElement("h1",null,"EditPost"),r.a.createElement(le.a,{onSubmit:function(t){var a;t.preventDefault(),a=p?{id:s.id,title:w,body:T.data,descripcion:N,categoria:S,dateCreation:new Date,urlVideo:p,idImg:s.img}:{id:s.id,title:w,body:T.data,descripcion:N,dateCreation:new Date,categoria:S,urlVideo:p,idImg:s.img},e(function(e,t){return function(){var a=Object(f.a)(b.a.mark((function a(n){var r,c,o,s,i,l;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log(e),"imagen"===e.categoria?e.categoria="5f68d932b1e49a0834c351c7":"video"===e.categoria&&(e.categoria="5f6ae33b7da35419289239d4"),a.prev=2,!e.idImg){a.next=13;break}return a.next=6,v("upload/imagen/posts/".concat(e.idImg),{},"DELETE");case 6:return o=a.sent,a.next=9,o.json();case 9:c=a.sent,console.log(c),e.img="",e.urlImg="";case 13:return a.next=15,j("posts/".concat(e.id),e,"PUT");case 15:return s=a.sent,a.next=18,s.json();case 18:if(!(i=a.sent).ok){a.next=28;break}if(!t){a.next=28;break}return a.next=23,O("upload/posts/".concat(i.post.id),t);case 23:return l=a.sent,a.next=26,l.json();case 26:r=a.sent,console.log(r);case 28:k.a.fire("Saved",i.msg,"success"),"Post subido Correctamente",n(te("Post subido Correctamente")),a.next=35;break;case 33:a.prev=33,a.t0=a.catch(2);case 35:case"end":return a.stop()}}),a,null,[[2,33]])})));return function(e){return a.apply(this,arguments)}}()}(a,c))}},r.a.createElement(le.a.Control,{size:"lg",type:"text",name:"title",placeholder:"title",value:w,onChange:y}),r.a.createElement(le.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(le.a.Label,null,"Descripci\xf3n"),r.a.createElement(le.a.Control,{as:"textarea",rows:"3",name:"descripcion",value:N,onChange:y})),r.a.createElement(ce.a,{config:{language:"es"},onChange:function(e){D({data:e.editor.getData()})},data:T.data}),r.a.createElement(le.a.Label,null,"Opciones:"),r.a.createElement(le.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onClick:function(e){I(e.target.value)}},r.a.createElement("option",{value:"imagen"},"Imagen"),r.a.createElement("option",{value:"video"},"Video")),r.a.createElement("br",null)," ",r.a.createElement("br",null),"imagen"===S?r.a.createElement("input",{type:"file",id:"fileUpload",onChange:function(e){o(e.target.files)}}):r.a.createElement(le.a.Group,{controlId:"formGroupVideo"},r.a.createElement(le.a.Label,null,"Url Video"),r.a.createElement(le.a.Control,{type:"text",name:"urlVideo",value:p,onChange:function(e){g(e.target.value)},placeholder:"Enter url video"})),r.a.createElement("button",{type:"submit"},"Guardar")))))},fe=function(){var e=Object(l.c)((function(e){return e.posts})),t=e.active,a=e.ok;return r.a.createElement(i.d,null,a?r.a.createElement(i.a,{to:"/"}):r.a.createElement(i.b,{exact:!0,path:"/private/subirPost",component:ue}),r.a.createElement(i.b,{exact:!0,path:"/private/viewPost",component:ge}),t?r.a.createElement(i.b,{exact:!0,path:"/private/editPost",component:be}):r.a.createElement(i.a,{to:"/"}))},Ee=a(93),he=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Ee.a)(e,["isAuthenticated","component"]);return r.a.createElement(i.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(i.a,{to:"/public/login"})}}))},ve=a(10),je=a.n(ve),Oe=function(e){var t=e.isAuthenticate,a=e.component,n=Object(Ee.a)(e,["isAuthenticate","component"]);return r.a.createElement(i.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(i.a,{to:"/"}):r.a.createElement(a,e)}}))};Oe.prototype={isAuthenticate:je.a.bool.isRequired,component:je.a.func.isRequired};var xe=a(332),ye=a(330),ke=a(333),we=function(){var e=Object(l.c)((function(e){return e.posts})).ultimosPost;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{className:"carousels-app"},e.map((function(e){return r.a.createElement(ke.a.Item,{key:e.id},e.urlImg?r.a.createElement("img",{className:"d-block w-100",src:e.urlImg,alt:"First slide"}):r.a.createElement("img",{className:"d-block w-100",src:"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",alt:"First slide"}),r.a.createElement(ke.a.Caption,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.descripcion)))}))))},Ce=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.posts})),a=t.posts,c=t.pages,o=t.loadingPostPagination,s=t.loadingPostSearch,i=Object(n.useState)(1),m=Object(u.a)(i,2),p=m[0],d=m[1];Object(n.useEffect)((function(){var t;e({type:E.postsDesactive,payload:{}}),e({type:"FETCH_CLEAR"}),e(function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("posts/pagination?page=".concat(1,"&limit=",4));case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok&&(r=n.numberPages/4,r=Math.round(r),t(q(r))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("posts/pagination?page=".concat(1,"&limit=",4));case 3:return r=e.sent,e.next=6,r.json();case 6:if(!(c=e.sent).ok){e.next=23;break}o=0;case 9:if(!(o<c.posts.results.length)){e.next=21;break}if(!c.posts.results[o].img){e.next=18;break}return e.next=13,v("upload/imagen/posts/".concat(c.posts.results[o].img));case 13:return a=e.sent,e.next=16,a.url;case 16:n=e.sent,c.posts.results[o].urlImg=n;case 18:o++,e.next=9;break;case 21:t(ee(c.posts.results)),t(W());case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(t){return e.apply(this,arguments)}}()),e((t=p,function(){var e=Object(f.a)(b.a.mark((function e(a){var n,r,c,o,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(z(!0)),e.prev=1,e.next=4,v("posts/pagination?page=".concat(t,"&limit=").concat(4));case 4:return c=e.sent,e.next=7,c.json();case 7:if(!(o=e.sent).ok){e.next=22;break}s=0;case 10:if(!(s<o.posts.results.length)){e.next=22;break}if(!o.posts.results[s].img){e.next=19;break}return e.next=14,v("upload/imagen/posts/".concat(o.posts.results[s].img));case 14:return n=e.sent,e.next=17,n.url;case 17:r=e.sent,o.posts.results[s].urlImg=r;case 19:s++,e.next=10;break;case 22:a($(o.posts.results)),a(z(!1)),a(W()),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(1),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[1,27]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,p]);console.log("hola2");return r.a.createElement(r.a.Fragment,null,o?r.a.createElement("div",{className:"spinner"},r.a.createElement(B.a,{animation:"border",variant:"info"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{gutter:[8,8],align:"middle"},r.a.createElement(G.a,{span:24},r.a.createElement(we,null))),r.a.createElement(H.a,null,r.a.createElement(G.a,{span:12,offset:6,className:"search"},r.a.createElement(xe.a,{placeholder:"Search...",onChange:function(t){console.log(t.target.value),e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return function(){var a=Object(f.a)(b.a.mark((function a(n){var r,c,o,s,i,l;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n(Y(!0)),a.prev=1,e){a.next=26;break}return a.next=5,v("posts/pagination?page=".concat(t,"&limit=").concat(4));case 5:return o=a.sent,a.next=8,o.json();case 8:if(!(s=a.sent).ok){a.next=24;break}i=0;case 11:if(!(i<s.posts.results.length)){a.next=23;break}if(!s.posts.results[i].img){a.next=20;break}return a.next=15,v("upload/imagen/posts/".concat(s.posts.results[i].img));case 15:return r=a.sent,a.next=18,r.url;case 18:c=a.sent,s.posts.results[i].urlImg=c;case 20:i++,a.next=11;break;case 23:n($(s.posts.results));case 24:a.next=47;break;case 26:return a.next=28,v("posts/search/".concat(e));case 28:return o=a.sent,a.next=31,o.json();case 31:if(!(s=a.sent).ok){a.next=46;break}l=0;case 34:if(!(l<s.posts.length)){a.next=46;break}if(!s.posts[l].img){a.next=43;break}return a.next=38,v("upload/imagen/posts/".concat(s.posts[l].img));case 38:return r=a.sent,a.next=41,r.url;case 41:c=a.sent,s.posts[l].urlImg=c;case 43:l++,a.next=34;break;case 46:n($(s.posts));case 47:n(Y(!1)),a.next=53;break;case 50:a.prev=50,a.t0=a.catch(1),console.log(a.t0);case 53:case"end":return a.stop()}}),a,null,[[1,50]])})));return function(e){return a.apply(this,arguments)}}()}(t.target.value,p))}}))),s?r.a.createElement("div",{className:"spinner"},r.a.createElement(B.a,{animation:"border",variant:"info"})):r.a.createElement(H.a,{gutter:[48,40],align:"middle",className:"conteiner-post animate__animated animate__fadeIn"},a.map((function(e){return r.a.createElement(G.a,{key:e.id,className:"col-conteiner-post"},r.a.createElement(R,Object.assign({},e,{key:e.id})))}))),r.a.createElement(H.a,{className:"row-pagination",justify:"center"},r.a.createElement(G.a,{span:8,className:"col-pagination"},r.a.createElement(ye.a,{onChange:function(e){d(e)},defaultCurrent:1,total:c.number,current:p,defaultPageSize:1})))))},Ne=a(329);function _e(){var e=Ne.a.Footer;return r.a.createElement(e,{className:"footer"},r.a.createElement("p",null,"Rodrigo Ramirez Mendez"),r.a.createElement("p",null,"Desarrollado con : MongoDB-Express-React-NodeJS"))}var Pe=a(334),Se=a(340),Ie=a(341),Fe=a(342),Le=a(343),Te=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name,a=Pe.a.SubMenu,n=Ne.a.Header;return r.a.createElement(n,null,r.a.createElement(Pe.a,{theme:"dark",mode:"horizontal"},r.a.createElement(Pe.a.Item,{key:"home",icon:r.a.createElement(Se.a,null)},r.a.createElement(s.c,{activeClassName:"active",exact:!0,to:"/"},"Home")),r.a.createElement(Pe.a.Item,{key:"video",icon:r.a.createElement(Ie.a,null)},r.a.createElement(s.c,{activeClassName:"active",exact:!0,to:"/public/category/video"},"Videos")),r.a.createElement(Pe.a.Item,{key:"imagen",icon:r.a.createElement(Fe.a,null)},r.a.createElement(s.c,{activeClassName:"active",exact:!0,to:"/public/category/imagen"},"Imagenes")),t?r.a.createElement(a,{key:"user",icon:r.a.createElement(Le.a,null),title:t,className:"sub-menu-user"},r.a.createElement(Pe.a.Item,{key:"addPost"},r.a.createElement(s.c,{activeClassName:"active",exact:!0,to:"/private/subirPost"},"Subir Post")),r.a.createElement(Pe.a.Item,{key:"viewPost"},r.a.createElement(s.c,{activeClassName:"active",exact:!0,to:"/private/viewPost"},"Ver Post")),r.a.createElement(Pe.a.Item,{key:"logout",onClick:function(){e((function(e){localStorage.clear(),e(N())}))}},"Logout")):r.a.createElement(Pe.a.Item,{key:"login",className:"sub-menu-user"},r.a.createElement(s.b,{to:"/public/login",className:"link"},"Login"))))},De=Ne.a.Content,Ue=function(){var e=Object(l.c)((function(e){return e.auth})),t=e.checking,a=e.uid,c=Object(l.c)((function(e){return e.posts})),o=c.checking,u=c.ok,m=c.deletePost,p=Object(l.b)();return console.log("appRouter"),Object(n.useEffect)((function(){p(function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(C({uid:n.uid,name:n.name}))):t(w());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p({type:E.postsClear,payload:{}})}),[p,u,m]),t&&o?r.a.createElement("div",{className:"spinner"},r.a.createElement(B.a,{animation:"border",variant:"info"})):r.a.createElement(Ne.a,null,r.a.createElement(s.a,null,r.a.createElement(Te,null),r.a.createElement(De,{className:"content-app animate__animated animate__fadeIn"},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(i.d,null,r.a.createElement(he,{isAuthenticated:!!a,path:"/private",component:fe}),r.a.createElement(Oe,{path:"/public",component:ie,isAuthenticated:!!a}),r.a.createElement(i.b,{exact:!0,path:"/",component:Ce})))),r.a.createElement(_e,null)))},Ae=a(66),Ve=a(160),Re={checking:!0},He=a(100),Ge={posts:[],ultimosPost:[],active:null,ok:null,checking:!0,deletePost:null,loadingPostPagination:!0,loadingPostSearch:!1,pages:0},Me={loading:!1,msgError:null},Be={isLoading:!0,isError:!1,data:[]},Ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.d,ze=Object(Ae.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.login:return Object(p.a)(Object(p.a)({},e),{},{checking:!1},t.payload);case E.authChekingFinish:return Object(p.a)(Object(p.a)({},e),{},{checking:!1});case E.authLogout:return{checking:!1};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.uiSetError:return Object(p.a)(Object(p.a)({},e),{},{msgError:t.payload});case E.uiRemoveError:return Object(p.a)(Object(p.a)({},e),{},{msgError:null});case E.uiStartLoading:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case E.uiFinishLoading:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.postsActive:return Object(p.a)(Object(p.a)({},e),{},{active:Object(p.a)({},t.payload)});case E.postFinishLoadingPages:return Object(p.a)(Object(p.a)({},e),{},{loadingPostPagination:t.payload});case E.postFinishLoadingSearch:return Object(p.a)(Object(p.a)({},e),{},{loadingPostSearch:t.payload});case E.postsAddNew:return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(He.a)(e.posts),[t.payload])});case E.postsDesactive:return Object(p.a)(Object(p.a)({},e),{},{active:null,ok:null});case E.postsClear:return Object(p.a)(Object(p.a)({},e),{},{active:null,ok:null,deletePost:null});case E.postUpCorrect:return Object(p.a)(Object(p.a)({},e),{},{active:null,ok:Object(p.a)({},t.payload)});case E.postsLoad:return Object(p.a)(Object(p.a)({},e),{},{posts:Object(He.a)(t.payload)});case E.postsLoadUltimosPost:return Object(p.a)(Object(p.a)({},e),{},{ultimosPost:Object(He.a)(t.payload)});case E.postFinishLoading:return Object(p.a)(Object(p.a)({},e),{},{checking:!1});case E.postNumberPage:return Object(p.a)(Object(p.a)({},e),{},{pages:Object(p.a)({},t.payload)});case E.postUpdated:return Object(p.a)(Object(p.a)({},e),{},{posts:e.post.map((function(e){return e.id===t.payload.id?t.payload:e}))});case E.notesDelete:return Object(p.a)(Object(p.a)({},e),{},{active:null,posts:e.posts.filter((function(e){return e.id!==t.payload}))});case E.stateDelete:return Object(p.a)(Object(p.a)({},e),{},{active:null,deletePost:Object(p.a)({},t.payload)});default:return e}},dataFetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CLEAR":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0,isError:!1,data:[]});case"FETCH_INIT":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0,isError:!1});case"FETCH_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,isError:!1,data:t.payload});case"FETCH_FAILURE":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,isError:!0});default:return e}}}),qe=Object(Ae.e)(ze,Ye(Object(Ae.a)(Ve.a))),Je=function(){return r.a.createElement(l.a,{store:qe},r.a.createElement(Ue,null))};o.a.render(r.a.createElement(Je,null),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.b91b3ea4.chunk.js.map