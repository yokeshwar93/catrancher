(this.webpackJsonpcatrancher=this.webpackJsonpcatrancher||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),s=a.n(i),r=(a(56),a(57),a(27)),o=a(39),l=a(47),d=a(41),u=a(85),h=a(63),f=a(32),g=Object(f.b)({name:"catRancher",initialState:{catsList:[],selectedCats:[],isFetchingCatsList:!0,clowders:{1:[],2:[],3:[],4:[]},clowdersFound:0},reducers:{updateCatsList:function(e,t){e.catsList=t.payload,e.isFetchingCatsList=!1},updateSelectedCats:function(e,t){e.selectedCats=t.payload},updateClowders:function(e,t){e.clowders=t.payload},updateClowdersCount:function(e,t){e.clowdersFound=t.payload}}}),m=g.actions,b=m.updateCatsList,j=m.updateSelectedCats,p=m.updateClowders,x=m.updateClowdersCount,C=function(e){return e.catRancher.catsList},O=function(e){return e.catRancher.isFetchingCatsList},w=function(e){return e.catRancher.selectedCats},v=function(e){return e.catRancher.clowders},T=function(e){return e.catRancher.clowdersFound},y=g.reducer,S=["1","2","3"],k=["b","w","t"],N=["t","s","r"],L=["g","b","r"],R={weekday:"long",year:"numeric",month:"long",day:"numeric"},F=["stripes","color","shape","eyes"],U="Try Again",A="Huh, That does not look right",M=function(){return Math.floor(3*Math.random())+0},W=function e(t){var a=M(),n=M(),c=M(),i=M(),s="".concat(S[a]).concat(k[n]).concat(N[c]).concat(L[i]);return-1!==t.findIndex((function(e){return e.id===s}))?e(t):s},B=a(25),D=B.c,E=a(87),I=a(89),Y=a(2),z=Object(u.a)((function(e){return{root:{flexGrow:1,marginTop:"1%",marginLeft:"2%"},paper:{height:"95%",width:"80%",cursor:"pointer",borderRadius:"15px"},selected:{background:"lightgray"},control:{padding:e.spacing(2)},gridContainerStyle:{height:"25vh",width:"10vw"},imageStyle:{height:"95%",width:"95%",marginLeft:"auto",marginRight:"auto",display:"block"}}})),G=function(e){var t=z(),a=e.catsList,n=e.selectedCats,c=e.handleOnCatSelect;return Object(Y.jsx)(E.a,{container:!0,className:t.root,spacing:2,children:Object(Y.jsx)(E.a,{item:!0,xs:12,children:[0,4,8].map((function(e){return Object(Y.jsx)(E.a,{container:!0,justifyContent:"center",spacing:3,children:a.slice(e,e+4).map((function(e){return Object(Y.jsx)(E.a,{className:t.gridContainerStyle,item:!0,children:Object(Y.jsx)(I.a,{onClick:function(){return c(e.id,e.imageUrl)},className:"".concat(t.paper," ").concat((a=e.id,-1!==n.findIndex((function(e){return e.id===a}))?t.selected:"")),elevation:0,children:Object(Y.jsx)("img",{className:t.imageStyle,src:e.imageUrl,alt:"Cat image_".concat(e.id)})})},e.id);var a}))},"".concat(e))}))})})},H=Object(u.a)((function(e){return{root:{flexGrow:1,marginTop:"1%"},paper:{height:"10vh",width:"5vw",border:"1px solid #0593cf",borderRadius:"0px"},imageStyle:{height:"95%",width:"95%",marginLeft:"auto",marginRight:"auto",display:"block"}}})),J=function(e){var t=H(),a=e.clowders;return Object(Y.jsx)(E.a,{container:!0,className:t.root,spacing:2,children:Object(Y.jsx)(E.a,{item:!0,xs:12,children:[1,2,3,4].map((function(e){return Object(Y.jsx)(E.a,{container:!0,justifyContent:"center",spacing:0,children:[0,1,2].map((function(n){return Object(Y.jsx)(E.a,{item:!0,children:Object(Y.jsx)(I.a,{className:t.paper,elevation:0,children:a[e][n]&&Object(Y.jsx)("img",{className:t.imageStyle,src:a[e][n].imageUrl,alt:"Cat image_".concat(a[e][n].id)})})},n)}))},e)}))})})},_=a(90),q=a(91),K=a(7),$=a(92),P=Object(K.a)({paper:{width:"50vw"}})(q.a),Q=Object(u.a)((function(e){return{title:{fontWeight:"bold",fontSize:"2em"},message:{marginLeft:"4%",marginBottom:"5%"},container:{width:"20vw"},button:{borderRadius:"0px"}}})),V=function(e){var t=Q(),a=e.openDialog,n=e.feedback,c=e.handleClose;return Object(Y.jsxs)(P,{onClose:c,"aria-labelledby":"simple-dialog-title",open:a,children:[Object(Y.jsx)(_.a,{className:"".concat(t.title," ").concat(n.titleClass),children:n.titleText}),Object(Y.jsx)(h.a,{className:"".concat(t.message," ").concat(n.messageClass),children:n.messageText}),Object(Y.jsx)($.a,{onClick:c,className:t.button,variant:"contained",color:n.isSuccess?"primary":"secondary",children:n.buttonText})]})},X=a.p+"static/media/loader.4874400f.gif",Z=Object(u.a)((function(e){return{leftContainer:{width:"50vw",float:"left",marginTop:"3%"},title:{fontSize:"4em",fontWeight:"bold"},date:{color:"grey"},rightContainer:{float:"right",width:"45vw",marginTop:"15%",marginRight:"4%"},clowderTitle:{fontWeight:"lighter"},loaderStyle:{width:"10vw",marginTop:"16%"},loaderText:{fontWeight:"bold",fontSize:"2em"},feedbackTitleFailed:{color:"red"},feedbackTitleSuccess:{color:"green"},feedbackMessage:{marginLeft:"4%",marginBottom:"5%"},feedbackMessageSuccess:{marginLeft:"5%"}}})),ee=function(){var e=Object(B.b)(),t=Z(),a=D(C),c=D(w),i=D(O),s=D(v),u=D(T),f=Object(n.useState)(!1),g=Object(d.a)(f,2),m=g[0],y=g[1],S=Object(n.useState)(""),k=Object(d.a)(S,2),N=k[0],L=k[1];Object(n.useEffect)((function(){var t=function(){for(var e=[],t=0;t<12;t++){var a=W(e);e.push({id:a,imageUrl:"http://quantcats.herokuapp.com/static/cats/".concat(a,".png")})}return e}();setTimeout((function(){return e(b(t))}),2e3)}),[]);var M="success"===N?{titleClass:t.feedbackTitleSuccess,messageClass:t.feedbackMessageSuccess,titleText:"Yay !!! You have done it !!!",messageText:"These cats are going to love each other :)",isSuccess:!0,buttonText:"Keep Going"}:"failed"===N?{titleClass:t.feedbackTitleFailed,messageClass:"",titleText:A,messageText:"Unless you want to be in the middle of a cat fight, you have to choose different set of cats :( ",isSuccess:!1,buttonText:U}:"duplicateClowder"===N?{titleClass:t.feedbackTitleFailed,messageClass:"",titleText:A,messageText:"The selected cats are part of an existing Clowder, so please choose a different set of cats",isSuccess:!1,buttonText:U}:"fullClowder"===N?{titleClass:t.feedbackTitleSuccess,messageClass:"",titleText:"You Are Awesome !!!",messageText:"All the cats are happy and having a great time thanks to you :)",isSuccess:!0,buttonText:"Start Again"}:{titleClass:"",messageClass:"",titleText:"",messageText:"",isSuccess:!1,buttonText:""};return Object(Y.jsxs)("div",{children:[i&&Object(Y.jsxs)("div",{children:[Object(Y.jsx)("img",{src:X,alt:"loader",className:t.loaderStyle}),Object(Y.jsx)(h.a,{className:t.loaderText,children:"Hang tight! Your cats are on their way :)"})]}),!i&&a.length>0&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)("div",{className:t.leftContainer,children:[Object(Y.jsx)(h.a,{className:t.title,children:"Catrancher"}),Object(Y.jsx)(h.a,{className:t.date,children:(new Date).toLocaleDateString("en-US",R)}),Object(Y.jsx)(G,{handleOnCatSelect:function(t,a){var n=Object(l.a)(c);if(-1!==n.findIndex((function(e){return e.id===t}))?(n=c.filter((function(e){return e.id!==t})),e(j(n))):(n.push({id:t,stripes:t[0],color:t[1],shape:t[2],eyes:t[3],imageUrl:a}),e(j(n))),3===n.length){if(function(e,t){var a=!1;return Object.values(e).forEach((function(e){e.length>0&&e.every((function(e){return t.filter((function(t){return t.id===e.id})).length>0}))&&(a=!0)})),a}(s,n))L("duplicateClowder");else if(function(e){for(var t=!0,a=function(a){var n=[],c=F[a];e.forEach((function(e){var t=e[c];n.push(t)}));var i=n.filter((function(t){return t===e[0][c]})).length;return 2===i||1===i&&n[1]===n[2]?(t=!1,"break"):void 0},n=0;n<F.length&&"break"!==a(n);n++);return t}(n)){var i=u+1;e(x(u+1)),e(p(Object(o.a)(Object(o.a)({},s),{},Object(r.a)({},i,n)))),L(4===i?"fullClowder":"success")}else L("failed");y(!0)}},selectedCats:c,catsList:a})]}),Object(Y.jsxs)("div",{className:t.rightContainer,children:[Object(Y.jsx)(h.a,{className:t.clowderTitle,children:"Clowders Found"}),Object(Y.jsx)(J,{clowders:s})]}),Object(Y.jsx)(V,{handleClose:function(){y(!1),e(j([])),4===u&&(e(p({1:[],2:[],3:[],4:[]})),e(x(0)))},openDialog:m,feedback:M})]})]})};var te=function(){return Object(Y.jsx)("div",{className:"App",children:Object(Y.jsx)(ee,{})})},ae=Object(f.a)({reducer:{catRancher:y}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(Y.jsx)(c.a.StrictMode,{children:Object(Y.jsx)(B.a,{store:ae,children:Object(Y.jsx)(te,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.b8f1ded8.chunk.js.map