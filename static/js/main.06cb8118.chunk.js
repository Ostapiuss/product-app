(this["webpackJsonpproduct-app"]=this["webpackJsonpproduct-app"]||[]).push([[0],{82:function(e,t,c){},83:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(13),o=c.n(n),i=c(35),r=c(25),d=c(14),l=c(131),s=c(130),u=c(132),j=c(99),p=c(135),b=c(57);c(96);b.a.initializeApp({apiKey:"AIzaSyD5WQwH2zEo3LOhc6knDkXg1E9KcigqIpw",authDomain:"product-app-f9343.firebaseapp.com",databaseURL:"https://product-app-f9343-default-rtdb.firebaseio.com",projectId:"product-app-f9343",storageBucket:"product-app-f9343.appspot.com",messagingSenderId:"1086267291185",appId:"1:1086267291185:web:b4581b738e5e349d66c710"});var h=b.a,m=c(136),x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADKklEQVRoge3YzWsdVRjH8U+ahU1i7AsYq7aKq1gU2kjR7hRfcKPipgtL8e2f0L5QcCMWfFmI4stCl2pQS3Hr0o1FJCJEiwuxUZtYbaQovqXXxUzg5pmTycydub1d3C+cxcw9z+/5nTtz5jznMGTIkCGDZKRG3+14FI/gVuzM45fwNT7Fezi3gc4OPIb7cBum0MEC5nEKJ3GhhrdSxnAUv+eJytrfeAvXJnSm8HbeZyOdZRzJczdiJ76okDC2X3B3l849+b26OqdxYxPzCz0k7X4ah/A4/mmgc7aXQYxJ//OLOIa9mJDNi7twIv8t9v83b/H+ebyI/bnGBGZy7aVE/9PYXGcARxMis5gsiZnEy/gvEbvaVvAqtpboXIMPE7HPVjW/XXHCzqr+xXoQvyYMLOPhihqbFAexjG1Vgp8OgYvK//kUe60dxG/YV1Nji+Lr9GSVwJMh6FjNxKvcITN+QX3zqxwPXj6qEvRtCNrTY3K4P2+9MhO8fFMl6GIIurqBgaZMBi8XY4dNiaDOBteDZCXeSA1gIVxP98dLJWLuH2OH1ADmwvVDrdmpT8wdvSU5ZO17d07NVbAlrsLPwcvBKoFbFSfyE/3xWMpTihO4bAVfwysh+Kc6wS2wRVbEdXt4qY7ALvwZBF5v12Mpb4bcf+SeahFXwRXc257HdXkAl0Lu470IjeFMEFrCTa3YTHOz4sbnjAY7s32Km5EvMd7UaYLNsro/7if2NxU+EkQ7+ACjTYW7GJWV7DHP4TbER/B+Qvxd9U41yvTjpO3g45b0kRV0c4kkz7egfSKhO6cPReSUrJyNyV5ooPlcQu87XN/IaQm78H0i6WvqPe4R2f456pzFLS36TTItfQLxhmoTe1R2+BXjF13GyneP7GgkmjglOyJZjwl8kog7r9nOryd244eEmc9xXaL/DsXvfCfX2H0Z/Ca5AV8lTC3gzq5+M9JzZ15/V/ZKbMNniub+kh3RHJQVY6knlToEHgjj0ivpem1Wf8qRRozgGVnVup7xS7J1I7WVvWI4oLij6+T3DgzQVy2mrS095nH7QB31wDjeydsV974PGTJkSDv8D13WnKnYy7RTAAAAAElFTkSuQmCC",O=(c(82),c(39)),g=c(37),f=c(138),v=c(127),A=c(128),y=c(133),C=c(129),_=(c(83),c(4)),w=function(e){var t=e.isOpen,c=e.product,n=e.edit,o=e.setOpenModal,i=Object(a.useState)(Object(g.a)({},c)),d=Object(r.a)(i,2),l=d[0],s=d[1],u=function(e){var t=e.target,c=t.value,a=t.name;s(Object(g.a)(Object(g.a)({},l),{},Object(O.a)({},a,c)))};return Object(a.useEffect)((function(){s(c)}),[c]),Object(_.jsxs)(f.a,{className:"product__edit-form",open:t,children:[Object(_.jsx)(v.a,{id:"form-dialog-title",children:"Edit Product"}),Object(_.jsxs)(A.a,{children:[Object(_.jsx)(y.a,{autoFocus:!0,margin:"dense",id:"modal-name",label:"Name",type:"text",name:"name",value:c.name,onChange:u,fullWidth:!0}),Object(_.jsx)(y.a,{autoFocus:!0,margin:"dense",id:"modal-image",label:"Image URL",type:"text",name:"imageUrl",value:l.imageUrl,onChange:u,fullWidth:!0}),Object(_.jsx)(y.a,{autoFocus:!0,margin:"dense",id:"modal-description",name:"description",label:"Description",value:l.description,onChange:u,type:"text",fullWidth:!0}),Object(_.jsx)(y.a,{autoFocus:!0,margin:"dense",id:"modal-count",label:"Count of products",name:"count",value:l.count,onChange:u,type:"text",fullWidth:!0}),Object(_.jsx)(y.a,{autoFocus:!0,margin:"dense",id:"modal-color",name:"color",label:"Color",value:l.color,onChange:u,type:"text",fullWidth:!0}),Object(_.jsx)(y.a,{autoFocus:!0,margin:"dense",id:"modal-width",name:"width",label:"Width",value:l.width,onChange:u,type:"text",fullWidth:!0}),Object(_.jsx)(y.a,{autoFocus:!0,margin:"dense",id:"modal-height",name:"height",label:"Height",value:l.height,onChange:u,type:"text",fullWidth:!0})]}),Object(_.jsxs)(C.a,{children:[Object(_.jsx)(m.a,{color:"primary",onClick:function(){s(l),n(l),o(!1)},children:"Save"}),Object(_.jsx)(m.a,{color:"secondary",onClick:function(){o(!1)},children:"Undo"})]})]})},N=function(e){var t=e.products,c=e.onEdit,n=Object(a.useState)(!1),o=Object(r.a)(n,2),d=o[0],l=o[1],s=Object(a.useState)({}),u=Object(r.a)(s,2),j=u[0],b=u[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(p.a,{mt:10,ml:5,children:Object(_.jsx)(m.a,{variant:"contained",color:"secondary",children:Object(_.jsx)(i.b,{to:"/addProducts",className:"product__button-add",children:"Add new Product"})})}),Object(_.jsx)(p.a,{mt:1,ml:5,display:"flex",flexDirection:"column",children:Object(_.jsx)("ul",{className:"product-list",children:t.map((function(e){return Object(_.jsx)(p.a,{mr:3,children:Object(_.jsxs)("li",{className:"product-list__product product",style:{width:"500px"},children:[Object(_.jsx)("h2",{className:"product__title",children:e.name.toUpperCase()}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"product__photo",alt:"iphone 12",src:e.imageUrl,style:{height:"300px"}})}),Object(_.jsxs)(p.a,{display:"flex",justifyContent:"space-between",children:[Object(_.jsx)(m.a,{variant:"contained",type:"button",color:"primary",onClick:function(){!function(e){b(e)}(e),l(!0)},children:"Edit"}),Object(_.jsx)(m.a,{variant:"contained",type:"button",style:{backgroundColor:"#DB4E3F",color:"#ffff"},children:"Delete"})]}),Object(_.jsx)("p",{className:"product__description",children:e.description}),Object(_.jsx)("p",{children:"Count: ".concat(e.count)}),Object(_.jsx)("p",{children:"Color: ".concat(e.color)}),Object(_.jsx)("p",{children:"Size: ".concat(e.width," x ").concat(e.height)}),Object(_.jsxs)("div",{className:"product__container",children:[Object(_.jsx)("img",{alt:"iphone",src:x,className:"product__like"}),Object(_.jsx)("img",{alt:"iphone",src:x,className:"product__like"})]}),Object(_.jsx)(w,{product:j,isOpen:d,setOpenModal:l,edit:c})]},e.id)})}))})})]})},F=(c(89),c(90),function(e){var t=e.onAddProduct,c=Object(a.useState)({}),n=Object(r.a)(c,2),o=n[0],i=n[1],d=Object(a.useState)(!1),l=Object(r.a)(d,2),s=(l[0],l[1]),u=function(e){var t=e.target,c=t.value,a=t.name;i(Object(g.a)(Object(g.a)({},o),{},Object(O.a)({},a,c)))};return Object(_.jsx)("div",{className:"new-product",children:Object(_.jsxs)("form",{onSubmit:function(e){var c;e.preventDefault(),c=o.imageUrl,/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(c)?(s(!1),t(o)):s(!0)},className:"new-product__form form",children:[Object(_.jsx)("label",{htmlFor:"product-id",children:Object(_.jsx)("input",{className:"form__item",id:"product-id",name:"id",type:"text",placeholder:"ID",value:o.id,onChange:u,required:!0})}),Object(_.jsx)("label",{htmlFor:"product-name",children:Object(_.jsx)("input",{className:"form__item",name:"name",id:"product-name",type:"text",placeholder:"Name",value:o.name,onChange:u,required:!0})}),Object(_.jsx)("label",{htmlFor:"product-img",children:Object(_.jsx)("input",{className:"form__item",name:"imageUrl",id:"product-img",type:"text",placeholder:"Image URL",value:o.imageUrl,onChange:u,required:!0})}),Object(_.jsx)("label",{htmlFor:"product-description",children:Object(_.jsx)("textarea",{className:"form__item",id:"product-description",type:"text",name:"description",placeholder:"Description",value:o.description,onChange:u,required:!0})}),Object(_.jsx)("label",{htmlFor:"product-count",children:Object(_.jsx)("input",{className:"form__item",id:"product-count",type:"number",name:"count",placeholder:"Count of product",value:o.count,onChange:u,required:!0})}),Object(_.jsx)("label",{htmlFor:"product-color",children:Object(_.jsx)("input",{className:"form__item",id:"product-color",name:"color",type:"text",placeholder:"Color",value:o.color,onChange:u,required:!0})}),Object(_.jsx)("label",{htmlFor:"product-width",children:Object(_.jsx)("input",{className:"form__item",id:"product-width",name:"width",type:"number",placeholder:"Width",value:o.width,onChange:u,required:!0})}),Object(_.jsx)("label",{htmlFor:"product-height",children:Object(_.jsx)("input",{className:"form__item",id:"product-height",name:"height",type:"number",placeholder:"Height",value:o.height,onChange:u,required:!0})}),Object(_.jsx)(m.a,{variant:"contained",color:"primary",type:"submit",children:"Add new product"})]})})}),E=(c(91),c(97)),S=function(){return Object(_.jsx)("section",{children:Object(_.jsx)(E.a,{children:Object(_.jsx)(s.a,{fixed:!0,children:Object(_.jsx)(p.a,{className:"header__logo-title",mt:10,children:"Product App"})})})})},P=(c(92),c(93),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],o=h.firestore().collection("products");return Object(a.useEffect)((function(){o.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),n(t)}))}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(l.a,{position:"fixed",children:Object(_.jsx)(s.a,{fixed:!0,children:Object(_.jsxs)(u.a,{className:"header",children:[Object(_.jsx)(j.a,{className:"header__logo-title",children:"Product App"}),Object(_.jsxs)(p.a,{className:"header__navigation navigation",display:"flex",children:[Object(_.jsx)(i.b,{to:"/",className:"navigation__title",color:"primary",children:"Home"}),Object(_.jsx)(i.b,{to:"/products",className:"navigation__title",color:"secondary",children:"Products"})]})]})})}),Object(_.jsx)("div",{className:"products",children:Object(_.jsxs)(d.d,{children:[Object(_.jsx)(d.b,{path:"/",exact:!0,children:Object(_.jsx)(S,{})}),Object(_.jsx)(d.b,{path:"/products",children:Object(_.jsx)(N,{products:c,onEdit:function(e){o.doc(e.id).update(e)}})}),Object(_.jsx)(d.b,{path:"/addProducts",children:Object(_.jsx)(F,{onAddProduct:function(e){o.add(e)}})}),Object(_.jsx)(d.a,{to:"/"})]})})]})}),k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,141)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),o(e),i(e)}))};c(94);o.a.render(Object(_.jsx)(i.a,{children:Object(_.jsx)(P,{})}),document.getElementById("root")),k()}},[[95,1,2]]]);
//# sourceMappingURL=main.06cb8118.chunk.js.map