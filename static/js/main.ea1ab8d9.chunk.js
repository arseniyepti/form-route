(this["webpackJsonpform-route"]=this["webpackJsonpform-route"]||[]).push([[0],{255:function(e,t,n){e.exports=n(436)},436:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),o=n.n(r),c=n(7),i=n.n(c),u=(n(260),n(26)),l=n(18),s=n(218),d=n(76),f=n(219),p=n(3),m=n(35),b=n(36),h=n(43),g=n(40),v=n(444),x=n(81),O=n(9),w=n.n(O),j=n(22),E=n(448),y=n(441),S=n(446),k=function(){S.a.open({message:"Message from server",description:"Ooops, something wrong",duration:2})},C=function(e,t,n){return function(){v.a.confirm({icon:o.a.createElement(E.a,null),content:"Are you sure?",onOk:function(){var a=Object(j.a)(w.a.mark((function a(){return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(e);case 2:return a.next=4,n();case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),onCancel:function(){}})}},A=function(e,t){return"failed"===t||e},F=function(e,t){return function(){return t(),A(!1,"failed"),e.push("/form-route/login")}},T=function(e){return function(){return A(!1,"failed"),e()}},P=function(e,t,n,a,r){return function(){return e?"add"===r?n.push("/form-route/add"):n.push("/form-route/".concat(a,"/edit")):t()}},I=n(440),_=n(79),L=n(445),R=n(21),z=n(181),U=n.n(z),M=n(447),q=n(230),D=n.n(q).a.create({baseURL:"https://conduit.productionready.io/api",validateStatus:function(e){return 401===e&&A(!0),e>=200&&e<300}});D.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Token ".concat(t)),e}),(function(e){return Promise.reject(e)})),D.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(localStorage.setItem("token",""),localStorage.setItem("username",""),window.location.reload()),Promise.reject(e)}));var H=Object(M.a)("AUTH_FETCH_FAILURE"),V=Object(M.a)("REG_FETCH_FAILURE"),N=Object(M.a)("ARTICLES_FETCH_SUCCESS"),B=Object(M.a)("FAVOURITE_FETCH_SUCCESS"),G=Object(M.a)("FAVOURITE_FETCH_FAILURE"),Y=Object(M.a)("ADD_EDIT_FETCH_FAILURE"),J=Object(M.a)("DELETE_FETCH_SUCCESS"),X=Object(M.a)("AUTH_STATE_SUCCESS"),Z=Object(M.a)("AUTH_STATE_FAILURE"),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(j.a)(w.a.mark((function t(n){var a,r,o,c,i;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/articles?limit=10&offset=".concat(e),t.prev=1,t.next=4,D.get(a);case 4:r=t.sent,o=r.data,c=o.articles,i=o.articlesCount,n(N({articles:c,articlesCount:i})),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},K=n(28),Q=K.a().shape({email:K.c().typeError("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445").email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441").required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),password:K.c().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e")}),$=K.a().shape({name:K.c().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),password:K.c().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),repeatPassword:K.c().oneOf([K.b("password")],"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442").required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),email:K.c().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e").email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441").typeError("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")}),ee=K.a().shape({title:K.c().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),description:K.c().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),body:K.c().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e")});function te(){var e=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  right: -80px;\n  width: 70px;\n"]);return te=function(){return e},e}function ne(){var e=Object(a.a)([""]);return ne=function(){return e},e}function ae(){var e=Object(a.a)(["\n  position: relative;\n  display: flex;\n  width: 420px;\n  justify-content: space-between;\n  align-items: baseline;\n"]);return ae=function(){return e},e}function re(){var e=Object(a.a)(["\n  text-decoration: none;\n  margin-top: 10px;\n"]);return re=function(){return e},e}function oe(){var e=Object(a.a)(["\n  display: flex;\n  max-width: 600px;\n  padding: 30px 0;\n  min-height: 450px;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n"]);return oe=function(){return e},e}function ce(){var e=Object(a.a)(["\n  width: 300px;\n  display: flex;\n  align-self: center;\n"]);return ce=function(){return e},e}function ie(){var e=Object(a.a)(["\n  width: 300px;\n  margin-bottom: 10px;\n  display: flex;\n  align-self: flex-start;\n"]);return ie=function(){return e},e}function ue(){var e=Object(a.a)(["\n  font-size: 18px;\n  color: red;\n  margin-right: auto;\n  margin-left: 2px;\n"]);return ue=function(){return e},e}function le(){var e=Object(a.a)(["\n  width: 300px;\n  display: flex;\n  align-self: flex-start;\n"]);return le=function(){return e},e}function se(){var e=Object(a.a)(["\n  width: 100px;\n  text-transform: uppercase;\n"]);return se=function(){return e},e}function de(){var e=Object(a.a)(["\n  width: 600px;\n  background-color: rgba(0, 33, 78, 0.12);\n  border-radius: 10px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n"]);return de=function(){return e},e}var fe={fetchAddEditArticles:function(e,t,n){var a=e.title,r=e.description,o=e.body,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(j.a)(w.a.mark((function e(){var i,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i={article:{title:a,description:r,body:o,tagList:t}},u="add"===n?"/articles":"/articles/".concat(c),e.prev=2,"add"!==n){e.next=8;break}return e.next=6,D.post(u,i);case 6:e.next=10;break;case 8:return e.next=10,D.put(u,i);case 10:return e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",e.t0.response.status);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))}},pe=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).addIdToTagList=function(e){return 0===e.length?[]:e.map((function(e){return{tag:e,id:U()()}}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.error,n=e.fetchAddEditArticles,a=e.history,r=this.props.article,c=void 0===r?"":r,i=c.slug,u=void 0===i?"":i,l=c.description,s=void 0===l?"":l,d=c.tagList,f=void 0===d?[]:d,p=c.title,m=void 0===p?"":p,b=c.body,h=void 0===b?"":b;return o.a.createElement(R.c,{initialValues:{title:m,description:s,body:h,tags:this.addIdToTagList(f)},validationSchema:ee,onSubmit:function(){var e=Object(j.a)(w.a.mark((function e(t){var r,o,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.tags.map((function(e){var n=e.tag,a=e.id;return t["tags".concat(a)]&&t["tags".concat(a)]!==n?t["tags".concat(a)]:n})).filter((function(e){return""!==e})),o=c?"edit":"add",e.next=4,n(t,r,o,u);case 4:i=e.sent,!c&&i&&a.push("/form-route/"),c&&i&&a.go(-1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(function(e){var n=e.values,a=e.errors,r=e.touched,i=e.handleChange,u=e.setFieldValue,l=e.handleSubmit,s=e.isSubmitting;return o.a.createElement(he,null,o.a.createElement(je,{onSubmit:l},o.a.createElement(ye,null,"Title",o.a.createElement(xe,null,"*"),o.a.createElement(I.a.Item,{hasFeedback:!0,validateStatus:r.title&&a.title?"error":"validate",help:r.title&&a.title?a.title:null},o.a.createElement(R.a,{onPressEnter:l,onChange:function(e){i(e)},value:n.title,name:"title",id:"title",type:"text",component:ve}))),o.a.createElement(ye,null,"Description",o.a.createElement(xe,null,"*"),o.a.createElement(I.a.Item,{hasFeedback:!0,validateStatus:r.description&&a.description?"error":"validate",help:r.description&&a.description?a.description:null},o.a.createElement(R.a,{onPressEnter:l,onChange:function(e){i(e)},value:n.description,name:"description",id:"description",type:"text",component:ve}))),o.a.createElement(ye,null,"Text",o.a.createElement(xe,null,"*"),o.a.createElement(I.a.Item,{hasFeedback:!0,validateStatus:r.body&&a.body?"error":"validate",help:r.body&&a.body?a.body:null},o.a.createElement(R.a,{autoSize:{minRows:2,maxRows:10},onPressEnter:l,onChange:function(e){i(e)},value:n.body,name:"body",id:"body",type:"text",cols:"20",rows:"10",component:we}))),o.a.createElement(ye,null,"Tags",o.a.createElement(Se,null,o.a.createElement(R.b,{name:"tags",render:function(e){var t=function(){return u("tag",""),e.unshift({tag:n.tag,id:U()()})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,{onChange:i,onPressEnter:t,value:n.tag,name:"tag",id:"tag",type:"text",component:Oe}),n.tags.map((function(e){var t=e.tag,a=e.id;return o.a.createElement(R.a,{key:a,defaultValue:t,value:n["tags".concat(a)],onChange:i,id:"tags".concat(a),name:"tags".concat(a),type:"text",component:Oe})})),o.a.createElement(ke,{type:"primary",onClick:t},"Add"))}}))),function(e){return"authError"===e?o.a.createElement("div",null,"You need to log in"):o.a.createElement("div",null,"\xa0")}(t),o.a.createElement(ge,{loading:s,type:"primary",onClick:l},c?"Edit":"Add"),o.a.createElement(Ee,{to:"/form-route/"},"Main")))}))}}]),n}(o.a.Component),me=Object(u.b)((function(e){return{error:e.error}}),fe)(pe),be=Object(x.f)(me),he=p.default.section(de()),ge=Object(p.default)(_.a)(se()),ve=Object(p.default)(L.a)(le()),xe=p.default.span(ue()),Oe=Object(p.default)(L.a)(ie()),we=Object(p.default)(L.a.TextArea)(ce()),je=Object(p.default)(I.a)(oe()),Ee=Object(p.default)(l.b)(re()),ye=p.default.label(ae()),Se=p.default.div(ne()),ke=Object(p.default)(_.a)(te()),Ce=n(449),Ae=n(450),Fe=n(451),Te=n(452),Pe=n(453);function Ie(){var e=Object(a.a)(["\n  display: ",";\n  width: 100px;\n  height: 30px;\n  margin-right: 5px;\n  background-color: ",";\n"]);return Ie=function(){return e},e}function _e(){var e=Object(a.a)(["\n  display: ",";\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  width: 50px;\n  font-size: 20px;\n"]);return _e=function(){return e},e}function Le(){var e=Object(a.a)(["\n  display: block;\n  width: 200px;\n  word-wrap: break-word;\n"]);return Le=function(){return e},e}function Re(){var e=Object(a.a)(["\n  display: block;\n  width: 200px;\n  word-wrap: break-word;\n"]);return Re=function(){return e},e}function ze(){var e=Object(a.a)(["\n  display: block;\n  width: 200px;\n  word-wrap: break-word;\n"]);return ze=function(){return e},e}function Ue(){var e=Object(a.a)(["\n  font-size: 18px;\n  margin-right: 5px;\n"]);return Ue=function(){return e},e}function Me(){var e=Object(a.a)(["\n  font-size: 18px;\n  margin-right: 5px;\n"]);return Me=function(){return e},e}function qe(){var e=Object(a.a)(["\n  font-size: 18px;\n\n  &:active {\n    animation: transform 0.3s ease;\n  }\n\n  @keyframes transform {\n    from {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.3);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n"]);return qe=function(){return e},e}function De(){var e=Object(a.a)(["\n  width: 40px;\n  height: 30px;\n"]);return De=function(){return e},e}function He(){var e=Object(a.a)(["\n  font-size: 18px;\n  margin-right: 5px;\n"]);return He=function(){return e},e}function Ve(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 700px;\n  padding: 5px 10px;\n  background: rgba(88, 154, 255, 0.1);\n"]);return Ve=function(){return e},e}function Ne(){var e=Object(a.a)(["\n  display: ",";\n  width: 700px;\n  padding: 20px 20px;\n  margin: 0;\n  word-wrap: break-word;\n  background: rgba(230, 243, 251, 0.72);\n"]);return Ne=function(){return e},e}function Be(){var e=Object(a.a)(["\n  display: ",";\n  color: rgba(5, 12, 22, 0.5);\n  width: 650px;\n  padding: 5px 20px;\n  margin: 0;\n  word-wrap: break-word;\n"]);return Be=function(){return e},e}function Ge(){var e=Object(a.a)(["\n  display: ",";\n  width: 700px;\n  justify-content: center;\n  padding: 20px;\n"]);return Ge=function(){return e},e}function Ye(){var e=Object(a.a)(["\n  color: rgba(5, 12, 22, 0.7);\n  font-weight: 600;\n  width: 530px;\n  padding: 5px 20px;\n  margin: 0;\n  word-wrap: break-word;\n"]);return Ye=function(){return e},e}function Je(){var e=Object(a.a)(["\n  display: flex;\n  padding-right: 20px;\n  justify-content: space-between;\n  width: 180px;\n"]);return Je=function(){return e},e}function Xe(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 700px;\n  border: 1px solid cornflowerblue;\n  background: rgba(88, 154, 255, 0.45);\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(a.a)(["\n  width: 700px;\n  padding-top: 10px;\n  border-bottom: 2px solid #aeb8c2;\n  background: rgba(175, 217, 255, 0.44);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n"]);return Ze=function(){return e},e}var We={fetchFavouriteArticle:function(e,t){return function(){var n=Object(j.a)(w.a.mark((function n(a){var r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r="/articles/".concat(e,"/favorite"),n.prev=1,!t){n.next=7;break}return n.next=5,D.delete(r);case 5:n.next=9;break;case 7:return n.next=9,D.post(r);case 9:return n.abrupt("return",!0);case 12:n.prev=12,n.t0=n.catch(1),a(G());case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}()},fetchDeleteArticles:function(e){return function(){var t=Object(j.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/articles/".concat(e),t.prev=1,t.next=4,D.delete(a);case 4:n(J({slug:e})),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},fetchArticles:W,authModalStateFailure:Z,fetchFavouriteArticleSuccess:B},Ke=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).setFavouriteArticle=function(t,n){return Object(j.a)(w.a.mark((function a(){var r,o,c,i,u,l;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=e.props,o=r.fetchFavouriteArticle,c=r.fetchFavouriteArticleSuccess,i=r.article,u=i.slug,l=i.favorited,t){a.next=3;break}return a.abrupt("return",n());case 3:return c({slug:u}),a.next=6,o(u,l);case 6:a.sent||(k(),c({slug:u}));case 8:case"end":return a.stop()}}),a)})))},e}return Object(b.a)(n,[{key:"render",value:function(){var e,t=this.props.article,n=t.author.username,a=t.favoritesCount,r=t.favorited,c=t.description,i=t.createdAt,u=t.slug,l=t.tagList,s=t.title,d=t.body,f=this.props,p=f.history,m=f.location,b=f.authModalStateFailure,h=f.fetchDeleteArticles,g=f.fetchArticles,v=l.join(", "),x=localStorage.getItem("username");return o.a.createElement(o.a.Fragment,null,o.a.createElement(rt,{location:m,to:"/form-route/"},"Return to Main"),o.a.createElement(et,null,o.a.createElement(tt,null,o.a.createElement(at,{to:"/form-route/articles/".concat(u)},s),o.a.createElement(nt,null,o.a.createElement(ht,{username:n,name:x,onClick:C(u,h,g)}),o.a.createElement(gt,{username:n,name:x,type:"primary",onClick:P(x,b,p,u),props:this.props},"Edit"))),o.a.createElement(ot,{location:m},c),o.a.createElement(ct,{location:m},d),o.a.createElement(it,null,o.a.createElement(pt,null,o.a.createElement(ut,null),n),o.a.createElement(mt,null,o.a.createElement(dt,null),(e=i,Object(y.a)(new Date(e),{addSuffix:!0}))),o.a.createElement(bt,null,o.a.createElement(ft,null),v),o.a.createElement(lt,null,o.a.createElement(st,{onClick:this.setFavouriteArticle(x,b),twoToneColor:r?"#eb2f96":""})," ",a))))}}]),n}(r.Component),Qe=Object(u.b)(null,We)(Ke),$e=Object(x.f)(Qe),et=p.default.article(Ze()),tt=p.default.div(Xe()),nt=p.default.div(Je()),at=Object(p.default)(l.b)(Ye()),rt=Object(p.default)(l.b)(Ge(),(function(e){return"/form-route/"===e.location.pathname?"none":"flex"})),ot=p.default.div(Be(),(function(e){return"/form-route/"===e.location.pathname?"none":"block"})),ct=p.default.p(Ne(),(function(e){return"/form-route/"===e.location.pathname?"none":"block"})),it=p.default.div(Ve()),ut=Object(p.default)(Ce.a)(He()),lt=p.default.span(De()),st=Object(p.default)(Ae.a)(qe()),dt=Object(p.default)(Fe.a)(Me()),ft=Object(p.default)(Te.a)(Ue()),pt=p.default.span(ze()),mt=p.default.span(Re()),bt=p.default.span(Le()),ht=Object(p.default)(Pe.a)(_e(),(function(e){return e.name===e.username?"flex":"none"})),gt=Object(p.default)(_.a)(Ie(),(function(e){return e.name===e.username?"block":"none"}),(function(e){return e.name===e.username?"#1890ff":"inherit"}));function vt(){var e=Object(a.a)(["\n  display: inline-flex;\n  width: 400px;\n  vertical-align: baseline;\n  justify-content: space-between;\n"]);return vt=function(){return e},e}function xt(){var e=Object(a.a)(["\n  font-size: 16px;\n  color: red;\n  margin-right: auto;\n"]);return xt=function(){return e},e}function Ot(){var e=Object(a.a)(["\n  text-decoration: none;\n  margin-top: 10px;\n"]);return Ot=function(){return e},e}function wt(){var e=Object(a.a)(["\n  display: flex;\n  height: 220px;\n  max-width: 400px;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n"]);return wt=function(){return e},e}function jt(){var e=Object(a.a)(["\n  width: 300px;\n  display: flex;\n  align-self: center;\n"]);return jt=function(){return e},e}function Et(){var e=Object(a.a)(["\n  width: 300px;\n  display: flex;\n  align-self: flex-start;\n"]);return Et=function(){return e},e}function yt(){var e=Object(a.a)(["\n  margin-top: 10px;\n  margin-bottom: 5px;\n  width: 100px;\n"]);return yt=function(){return e},e}function St(){var e=Object(a.a)(["\n  padding: 30px;\n  width: 500px;\n  background-color: rgba(0, 33, 78, 0.12);\n  border-radius: 10px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n"]);return St=function(){return e},e}var kt={fetchAuthorization:function(e){var t=e.email,n=e.password;return function(){var e=Object(j.a)(w.a.mark((function e(a){var r,o,c,i,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/users/login",e.prev=1,e.next=4,D.post("/users/login",{user:{email:t,password:n}});case 4:return r=e.sent,o=r.data.user,c=o.token,i=o.username,localStorage.setItem("token",c),localStorage.setItem("username",i),e.abrupt("return",!0);case 11:e.prev=11,e.t0=e.catch(1),u=e.t0.response.data.errors["email or password"],a(H({emailOrPassword:u}));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}},Ct=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.history,n=e.emailOrPassword,a=e.fetchAuthorization;return o.a.createElement(R.c,{initialValues:{password:"",email:""},validationSchema:Q,onSubmit:function(){var e=Object(j.a)(w.a.mark((function e(n,r){var o,c,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.email,c=n.password,i=r.resetForm,e.next=4,a({email:o,password:c});case 4:e.sent&&(i(),t.push("/form-route/"));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},(function(e){var t=e.values,a=e.errors,r=e.touched,c=e.handleChange,i=e.handleSubmit,u=e.isSubmitting;return o.a.createElement(Ft,null,o.a.createElement(_t,{onSubmit:i},o.a.createElement(zt,null,"Email",o.a.createElement(Rt,null,"*"),o.a.createElement(I.a.Item,{hasFeedback:!0,validateStatus:r.email&&a.email?"error":"validate",help:r.email&&a.email?a.email:null},o.a.createElement(R.a,{onPressEnter:i,onChange:function(e){c(e)},value:t.email,name:"email",id:"email",type:"email",component:Pt}))),o.a.createElement(zt,null,"Password",o.a.createElement(Rt,null,"*"),o.a.createElement(I.a.Item,{validateStatus:r.password&&a.password?"error":"validate",help:r.password&&a.password?a.password:null},o.a.createElement(R.a,{onPressEnter:i,onChange:function(e){c(e)},value:t.password,name:"password",visibilityToggle:!0,id:"password",type:"password",component:It}))),o.a.createElement(Tt,{type:"primary",onClick:i,loading:u},"Sign in"),n?o.a.createElement("div",{style:{color:"red"}},"Email or password ".concat(n)):null,o.a.createElement(Lt,{to:"/form-route/signup"},"Sign up"),o.a.createElement(Lt,{to:"/form-route/"},"Return to Main")))}))}}]),n}(o.a.Component),At=Object(u.b)((function(e){var t=e.error.authErrors,n=(void 0===t?"":t).emailOrPassword;return{emailOrPassword:void 0===n?"":n}}),kt)(Ct),Ft=p.default.section(St()),Tt=Object(p.default)(_.a)(yt()),Pt=Object(p.default)(L.a)(Et()),It=Object(p.default)(L.a.Password)(jt()),_t=Object(p.default)(I.a)(wt()),Lt=Object(p.default)(l.b)(Ot()),Rt=p.default.span(xt()),zt=p.default.label(vt()),Ut=n(442),Mt=n(439);function qt(){var e=Object(a.a)(["\n  width: 90px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: auto;\n"]);return qt=function(){return e},e}function Dt(){var e=Object(a.a)(["\n  padding: 0 5px;\n  text-decoration: none;\n  position: fixed;\n  top: 20px;\n  right: 30px;\n"]);return Dt=function(){return e},e}function Ht(){var e=Object(a.a)(["\n  padding: 0 5px;\n"]);return Ht=function(){return e},e}function Vt(){var e=Object(a.a)(["\n  display: ",";\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 700px;\n  background-color: rgba(233, 233, 113, 0.6);\n"]);return Vt=function(){return e},e}function Nt(){var e=Object(a.a)(["\n  position: fixed;\n  top: 20px;\n  right: 100px;\n  color: rgba(0, 13, 34, 0.72);\n"]);return Nt=function(){return e},e}function Bt(){var e=Object(a.a)(["\n  margin-top: 150px;\n  display: ",";\n"]);return Bt=function(){return e},e}function Gt(){var e=Object(a.a)(["\n  padding: 30px 0;\n"]);return Gt=function(){return e},e}function Yt(){var e=Object(a.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  min-height: 850px;\n  padding-bottom: 30px;\n"]);return Yt=function(){return e},e}function Jt(){var e=Object(a.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width: 950px;\n\n  border: 1px solid cornflowerblue;\n  border-radius: 10px;\n  padding: 20px;\n  background-color: rgba(216, 236, 251, 0.53);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n"]);return Jt=function(){return e},e}var Xt={fetchArticles:W,authModalStateFailure:Z},Zt=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleLogOut=function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("username")},e.renderArticles=function(){return e.props.articles.map((function(e){return o.a.createElement($e,{key:e.slug,article:e})}))},e.onChange=function(t){(0,e.props.fetchArticles)(t+"0"-10)},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchArticles)()}},{key:"render",value:function(){var e=this.props,t=e.articlesCount,n=e.authModalStateFailure,a=e.history,r=e.articles,c=localStorage.getItem("username");return o.a.createElement(Qt,null,o.a.createElement(en,{defaultCurrent:1,pageSize:10,showSizeChanger:!1,total:t,onChange:this.onChange,showTotal:function(e,t){return"".concat(t[1]," of ").concat(e," items")}}),o.a.createElement(an,{name:c},"For editing, deleting and adding articles you need"," ",o.a.createElement(rn,{to:"/form-route/login"}," Log in")),o.a.createElement($t,null,o.a.createElement(nn,null,function(){var e=localStorage.getItem("username");return e||o.a.createElement(l.b,{to:"/form-route/signup"},"Sign up")}()),o.a.createElement(on,{onClick:this.handleLogOut,to:"/form-route/login"},localStorage.getItem("token")?"Log out":"Sign in"),o.a.createElement(tn,{articles:r,size:"large",tip:"Loading..."}),this.renderArticles()),o.a.createElement(cn,{type:"primary",onClick:P(c,n,a,null,"add")},"Add"))}}]),n}(r.Component),Wt=Object(u.b)((function(e){var t=e.articles;return{articles:t.articles,articlesCount:t.articlesCount}}),Xt)(Zt),Kt=Object(x.f)(Wt),Qt=p.default.div(Jt()),$t=p.default.section(Yt()),en=Object(p.default)(Ut.a)(Gt()),tn=Object(p.default)(Mt.a)(Bt(),(function(e){return 0===e.articles.length?"block":"none"})),nn=p.default.span(Nt()),an=p.default.div(Vt(),(function(e){return e.name?"none":"flex"})),rn=Object(p.default)(l.b)(Ht()),on=Object(p.default)(l.b)(Dt()),cn=Object(p.default)(_.a)(qt());function un(){var e=Object(a.a)(["\n  display: flex;\n  width: 450px;\n  justify-content: space-between;\n"]);return un=function(){return e},e}function ln(){var e=Object(a.a)(["\n  font-size: 16px;\n  color: red;\n  margin-right: auto;\n  margin-left: 2px;\n"]);return ln=function(){return e},e}function sn(){var e=Object(a.a)(["\n  text-decoration: none;\n  margin-top: 20px;\n"]);return sn=function(){return e},e}function dn(){var e=Object(a.a)(["\n  display: flex;\n  height: 300px;\n  max-width: 550px;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-between;\n"]);return dn=function(){return e},e}function fn(){var e=Object(a.a)(["\n  width: 300px;\n  display: flex;\n  align-self: center;\n"]);return fn=function(){return e},e}function pn(){var e=Object(a.a)(["\n  width: 300px;\n  display: flex;\n  align-self: flex-start;\n"]);return pn=function(){return e},e}function mn(){var e=Object(a.a)(["\n  margin-top: 10px;\n"]);return mn=function(){return e},e}function bn(){var e=Object(a.a)(["\n  padding: 30px;\n  width: 550px;\n  background-color: rgba(0, 33, 78, 0.12);\n  border-radius: 10px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n"]);return bn=function(){return e},e}var hn,gn,vn,xn={fetchRegistration:function(e,t,n){return function(){var a=Object(j.a)(w.a.mark((function a(r){var o,c,i,u;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"/users",a.prev=1,a.next=4,D.post("/users",{user:{username:e,email:t,password:n}});case 4:return a.abrupt("return",!0);case 7:a.prev=7,a.t0=a.catch(1),o=a.t0.response.data.errors,c=o.email,i=o.password,u=o.username,console.log(c,i,u),r(V({email:c,password:i,username:u}));case 12:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}()}},On=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.email,n=e.password,a=e.username,r=e.history,c=e.fetchRegistration;return o.a.createElement(R.c,{initialValues:{password:"",email:"",name:""},validationSchema:$,onSubmit:function(){var e=Object(j.a)(w.a.mark((function e(t,n){var a,o,i,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,o=t.email,i=t.password,u=n.resetForm,e.next=4,c(a,o,i);case 4:e.sent&&(u(),r.push("/form-route/login"));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},(function(e){var r=e.values,c=e.errors,i=e.touched,u=e.handleChange,l=e.handleSubmit,s=e.isSubmitting;return o.a.createElement(jn,null,o.a.createElement(kn,{onSubmit:l},o.a.createElement(Fn,null,"Name",o.a.createElement(An,null,"*"),o.a.createElement(I.a.Item,{hasFeedback:!0,validateStatus:i.name&&c.name?"error":"validate",help:(i.name&&c.name?c.name:null)||(a?o.a.createElement("div",{style:{marginLeft:"auto",color:"red"}},"Name ".concat(a)):null)},o.a.createElement(R.a,{onPressEnter:l,onChange:function(e){u(e)},value:r.name,name:"name",id:"name",type:"text",component:yn}))),o.a.createElement(Fn,null,"Email",o.a.createElement(An,null,"*"),o.a.createElement(I.a.Item,{hasFeedback:!0,validateStatus:i.email&&c.email?"error":"validate",help:(i.email&&c.email?c.email:null)||(t?o.a.createElement("div",{style:{marginLeft:"auto",color:"red"}},"Email ".concat(t)):null)},o.a.createElement(R.a,{onPressEnter:l,onChange:function(e){u(e)},value:r.email,name:"email",id:"email",type:"email",component:yn}))),o.a.createElement(Fn,null,"Password",o.a.createElement(An,null,"*"),o.a.createElement(I.a.Item,{validateStatus:i.password&&c.password?"error":"validate",help:(i.password&&c.password?c.password:null)||(n?o.a.createElement("div",{style:{marginLeft:"auto",color:"red"}},"Password ".concat(n)):null)},o.a.createElement(R.a,{onPressEnter:l,onChange:function(e){u(e)},value:r.password,name:"password",visibilityToggle:!0,id:"password",type:"password",component:Sn}))),o.a.createElement(Fn,null,"Repeat Password",o.a.createElement(An,null,"*"),o.a.createElement(I.a.Item,{validateStatus:i.repeatPassword&&c.repeatPassword?"error":"validate",help:i.repeatPassword&&c.repeatPassword?c.repeatPassword:null},o.a.createElement(R.a,{onPressEnter:l,onChange:function(e){u(e)},value:r.repeatPassword,name:"repeatPassword",visibilityToggle:!0,id:"repeatPassword",type:"password",component:Sn}))),o.a.createElement(En,{type:"primary",onClick:l,loading:s},"Sign up"),o.a.createElement(Cn,{to:"/form-route/login"},"Sign in")))}))}}]),n}(o.a.Component),wn=Object(u.b)((function(e){var t=e.error.regErrors,n=void 0===t?"":t,a=n.email,r=void 0===a?"":a,o=n.password,c=void 0===o?"":o,i=n.username;return{email:r,password:c,username:void 0===i?"":i}}),xn)(On),jn=p.default.section(bn()),En=Object(p.default)(_.a)(mn()),yn=Object(p.default)(L.a)(pn()),Sn=Object(p.default)(L.a.Password)(fn()),kn=Object(p.default)(I.a)(dn()),Cn=Object(p.default)(l.b)(sn()),An=p.default.span(ln()),Fn=p.default.label(un()),Tn={fetchArticles:W,authModalStateSuccess:X},Pn=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authModalStateSuccess,n=e.articles,a=e.history,r=e.authModalState;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{title:"Authorization message",visible:A(null,r),onOk:F(a,t),onCancel:T(t)},"You need"," ",o.a.createElement(l.b,{onClick:T(t),to:"/form-route/login"},"Log in")),o.a.createElement(x.c,null,o.a.createElement(x.a,{exact:!0,path:"/form-route/",component:Kt}),o.a.createElement(x.a,{exact:!0,path:"/form-route/login",component:At}),o.a.createElement(x.a,{exact:!0,path:"/form-route/signup",component:wn}),o.a.createElement(x.a,{exact:!0,path:"/form-route/add",component:be}),o.a.createElement(x.a,{exact:!0,path:"/form-route/articles/:slug",render:function(e){var t=e.match;return o.a.createElement($e,{article:n.find((function(e){return e.slug===t.params.slug}))})}}),o.a.createElement(x.a,{exact:!0,path:"/form-route/:slug/edit",render:function(e){var t=e.match;return o.a.createElement(be,{articles:n,article:n.find((function(e){return e.slug===t.params.slug}))})}})))}}]),n}(o.a.Component),In=Object(u.b)((function(e){return{articles:e.articles.articles,authModalState:e.authModalState}}),Tn)(Pn),_n=Object(x.f)(In),Ln=n(25),Rn=n(52),zn=n(443),Un=Object(zn.a)((hn={},Object(Rn.a)(hn,X,(function(){return"success"})),Object(Rn.a)(hn,Z,(function(){return"failed"})),hn),null),Mn=Object(zn.a)((gn={},Object(Rn.a)(gn,H,(function(e,t){var n=t.payload.emailOrPassword;return Object(Ln.a)(Object(Ln.a)({},e),{},{authErrors:{emailOrPassword:n}})})),Object(Rn.a)(gn,V,(function(e,t){var n=t.payload,a=n.email,r=n.password,o=n.username;return Object(Ln.a)(Object(Ln.a)({},e),{},{regErrors:{email:a,password:r,username:o}})})),Object(Rn.a)(gn,Y,(function(){return"authError"})),gn),{authErrors:{emailOrPassword:null},regErrors:{email:null,password:null,username:null}}),qn=Object(zn.a)((vn={},Object(Rn.a)(vn,N,(function(e,t){var n=t.payload,a=n.articles,r=n.articlesCount;return Object(Ln.a)(Object(Ln.a)({},e),{},{articles:a,articlesCount:r})})),Object(Rn.a)(vn,B,(function(e,t){var n=t.payload.slug,a=e.articles.map((function(e){return e.slug===n?e.favorited?Object(Ln.a)(Object(Ln.a)({},e),{},{favoritesCount:e.favoritesCount-1,favorited:!e.favorited}):Object(Ln.a)(Object(Ln.a)({},e),{},{favoritesCount:e.favoritesCount+1,favorited:!e.favorited}):e}));return Object(Ln.a)(Object(Ln.a)({},e),{},{articles:a})})),Object(Rn.a)(vn,J,(function(e,t){var n=t.payload.slug,a=e.articles.filter((function(e){return e.slug!==n}));return Object(Ln.a)(Object(Ln.a)({},e),{},{articles:a})})),vn),{articlesCount:10,articles:[]}),Dn=Object(d.c)({error:Mn,authModalState:Un,articles:qn});function Hn(){var e=Object(a.a)(["\n\t@font-face {\n\tfont-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n \t}\n \t@font-face {\n \tfont-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 600;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOVuhpOqc.woff2) format('woff2');\n \t}\n\n*{\n  box-sizing: border-box;\n}\n  body {\n    font-family: \"Open Sans\";\n    font-weight: 400;\n    width: 100%;\n    padding: 50px;\n    background-color: rgba(88,154,255,0.41);\n    font-size: 16px;\n    display:flex;\n    justify-content:center;\n  }\n"]);return Hn=function(){return e},e}var Vn=Object(p.createGlobalStyle)(Hn()),Nn=window.__REDUX_DEVTOOLS_EXTENSION__,Bn=Nn&&Nn(),Gn=Object(d.e)(Dn,Object(d.d)(Object(d.a)(s.a),Bn));i.a.render(o.a.createElement(l.a,null,o.a.createElement(u.a,{store:Gn},o.a.createElement(f.Normalize,null),o.a.createElement(Vn,null),o.a.createElement(_n,null))),document.getElementById("root"))}},[[255,1,2]]]);
//# sourceMappingURL=main.ea1ab8d9.chunk.js.map