(this["webpackJsonpproduct-app"]=this["webpackJsonpproduct-app"]||[]).push([[0],{29:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var r=c(1),i=c(22),o=c.n(i),s=c(9),a=(c(29),c(24)),n=c(2),d=c(15),l=c.n(d);c(30);l.a.initializeApp({apiKey:"AIzaSyD5WQwH2zEo3LOhc6knDkXg1E9KcigqIpw",authDomain:"product-app-f9343.firebaseapp.com",databaseURL:"https://product-app-f9343-default-rtdb.firebaseio.com",projectId:"product-app-f9343",storageBucket:"product-app-f9343.appspot.com",messagingSenderId:"1086267291185",appId:"1:1086267291185:web:b4581b738e5e349d66c710"});var p=l.a,j=(c(34),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADKklEQVRoge3YzWsdVRjH8U+ahU1i7AsYq7aKq1gU2kjR7hRfcKPipgtL8e2f0L5QcCMWfFmI4stCl2pQS3Hr0o1FJCJEiwuxUZtYbaQovqXXxUzg5pmTycydub1d3C+cxcw9z+/5nTtz5jznMGTIkCGDZKRG3+14FI/gVuzM45fwNT7Fezi3gc4OPIb7cBum0MEC5nEKJ3GhhrdSxnAUv+eJytrfeAvXJnSm8HbeZyOdZRzJczdiJ76okDC2X3B3l849+b26OqdxYxPzCz0k7X4ah/A4/mmgc7aXQYxJ//OLOIa9mJDNi7twIv8t9v83b/H+ebyI/bnGBGZy7aVE/9PYXGcARxMis5gsiZnEy/gvEbvaVvAqtpboXIMPE7HPVjW/XXHCzqr+xXoQvyYMLOPhihqbFAexjG1Vgp8OgYvK//kUe60dxG/YV1Nji+Lr9GSVwJMh6FjNxKvcITN+QX3zqxwPXj6qEvRtCNrTY3K4P2+9MhO8fFMl6GIIurqBgaZMBi8XY4dNiaDOBteDZCXeSA1gIVxP98dLJWLuH2OH1ADmwvVDrdmpT8wdvSU5ZO17d07NVbAlrsLPwcvBKoFbFSfyE/3xWMpTihO4bAVfwysh+Kc6wS2wRVbEdXt4qY7ALvwZBF5v12Mpb4bcf+SeahFXwRXc257HdXkAl0Lu470IjeFMEFrCTa3YTHOz4sbnjAY7s32Km5EvMd7UaYLNsro/7if2NxU+EkQ7+ACjTYW7GJWV7DHP4TbER/B+Qvxd9U41yvTjpO3g45b0kRV0c4kkz7egfSKhO6cPReSUrJyNyV5ooPlcQu87XN/IaQm78H0i6WvqPe4R2f456pzFLS36TTItfQLxhmoTe1R2+BXjF13GyneP7GgkmjglOyJZjwl8kog7r9nOryd244eEmc9xXaL/DsXvfCfX2H0Z/Ca5AV8lTC3gzq5+M9JzZ15/V/ZKbMNniub+kh3RHJQVY6knlToEHgjj0ivpem1Wf8qRRozgGVnVup7xS7J1I7WVvWI4oLij6+T3DgzQVy2mrS095nH7QB31wDjeydsV974PGTJkSDv8D13WnKnYy7RTAAAAAElFTkSuQmCC"),u=(c(35),c(0)),m=function(e){var t=e.products;return Object(u.jsx)("ul",{className:"product-list",children:t.map((function(e){return Object(u.jsxs)("li",{className:"product-list__product product",style:{width:"500px"},children:[Object(u.jsx)("h2",{className:"product__title",children:e.name.toUpperCase()}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"product__photo",alt:"iphone 12",src:e.imageUrl,style:{height:"300px"}})}),Object(u.jsx)("button",{type:"button",children:"Edit"}),Object(u.jsx)("p",{className:"product__description",children:e.description}),Object(u.jsx)("p",{children:"Count: ".concat(e.count)}),Object(u.jsx)("p",{children:"Color: ".concat(e.color)}),Object(u.jsx)("p",{children:"Size: ".concat(e.width," x ").concat(e.height)}),Object(u.jsxs)("div",{className:"product__container",children:[Object(u.jsx)("img",{alt:"iphone",src:j,className:"product__like"}),Object(u.jsx)("img",{alt:"iphone",src:j,className:"product__like"})]})]},e.id)}))})},b=(c(37),c(38),c(39),function(){return Object(u.jsx)("div",{className:"new-product",children:Object(u.jsxs)("form",{className:"new-product__form form",children:[Object(u.jsx)("label",{htmlFor:"product-name",children:Object(u.jsx)("input",{className:"form__item",name:"title",id:"product-name",type:"text",placeholder:"Name",required:!0})}),Object(u.jsx)("label",{htmlFor:"product-img",children:Object(u.jsx)("input",{className:"form__item",name:"",id:"product-img",type:"text",placeholder:"Image URL",required:!0})}),Object(u.jsx)("label",{htmlFor:"product-description",children:Object(u.jsx)("textarea",{className:"form__item",id:"product-description",type:"text",placeholder:"Description",required:!0})}),Object(u.jsx)("label",{htmlFor:"product-count",children:Object(u.jsx)("input",{className:"form__item",id:"product-count",type:"text",placeholder:"Count of product",required:!0})}),Object(u.jsx)("label",{htmlFor:"product-color",children:Object(u.jsx)("input",{className:"form__item",id:"product-color",type:"text",placeholder:"Color",required:!0})}),Object(u.jsx)("label",{htmlFor:"product-width",children:Object(u.jsx)("input",{className:"form__item",id:"product-width",type:"text",placeholder:"Width",required:!0})}),Object(u.jsx)("label",{htmlFor:"product-height",children:Object(u.jsx)("input",{className:"form__item",id:"product-height",type:"text",placeholder:"Height",required:!0})}),Object(u.jsx)("button",{className:"form__submit",type:"submit",children:"ADD NEW PRODUCT"})]})})}),h=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1],o=p.firestore().collection("products");return Object(r.useEffect)((function(){o.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),i(t)}))}),[]),console.log(c),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("nav",{className:"nav",children:Object(u.jsxs)("ul",{className:"nav__links",children:[Object(u.jsx)("li",{className:"nav__item item",children:Object(u.jsx)(s.b,{to:"/products",className:"item__title",children:"Products"})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(s.b,{to:"/addProducts",className:"item__title",children:"Add new Product"})})]})}),Object(u.jsxs)("div",{className:"products",children:[Object(u.jsx)(n.a,{path:"/products",children:Object(u.jsx)(m,{products:c})}),Object(u.jsx)(n.a,{path:"/addProducts",children:Object(u.jsx)(b,{})})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),r(e),i(e),o(e),s(e)}))};o.a.render(Object(u.jsx)(s.a,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.b4cd6d75.chunk.js.map