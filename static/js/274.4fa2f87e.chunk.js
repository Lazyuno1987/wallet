"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[274],{5736:function(e,a,s){s.r(a),s.d(a,{default:function(){return E}});var i=s(7689),r=s(1291),t=s(3409),n=s(2506),c=s(9434),o=s(8724),l=s(8720),m=s(8564),d=s(9986),p=s(5169),u=s(1724),h=u.Ry().shape({email:u.Z_().email("E-mail is invalid").matches(/^[A-Za-z0-9._-]{1,}@.+$/,{message:"Name section of email must not contain special symbols",excludeEmptyString:!0}).email("E-mail is invalid").min(10,"E-mail must contain at least 10 characters").max(63).matches(/^.{2,}@.+$/,{message:"Name section of email must have at least 2 characters",excludeEmptyString:!0}).matches(/^[A-Za-z0-9._]{1}[A-Za-z0-9._-]{1,}@[A-Za-z0-9]+.\w+$/,{message:'Email must not start with "-"',excludeEmptyString:!0}).matches(/^.+\.\w{2,3}$/,{message:"Domain section of email must not contain 2 or 3 letters",excludeEmptyString:!0}).required("E-mail is required"),password:u.Z_().min(6,"Password must contain at least 6 characters").max(16,"Password must contain 16 characters or less").required("Password is required").matches(/^[A-Za-z0-9!@#$%^&*()_+!\u0410-\u042f\u0430-\u044f]+$/,{message:"Password must not contain space sign",excludeEmptyString:!0}),confirmPass:u.Z_().oneOf([u.iH("password"),null],"Password must match").required("Confirm password is required"),name:u.Z_().min(1).max(12,"Name must contain 12 characters or less").matches(/^[\u0419\u0426\u0423\u041a\u041d\u0413\u0428\u0429\u0417\u0425\u0407\u0404\u0416\u0414\u041b\u041e\u0420\u041f\u0410\u0412\u0406\u0424\u042e\u0411\u042c\u0422\u0418\u041c\u0421\u0427\u042f\u0439\u0446\u0443\u043a\u0435\u043d\u0433\u0448\u0449\u0437\u0445\u0457\u0454\u0436\u0434\u043b\u043e\u0440\u043f\u0430\u0432\u0456\u0444\u044f\u0447\u0441\u043c\u0438\u0442\u044c\u0431\u044e A-Za-z-]+$/,{message:"Name must contain only latin, cyrillic (ukrainian), space or hyphen"}).required("Name is required")}),f={colorYellow:"#fed057",colorPink:"#ffd8d0",colorPinkDeep:"#fd9498",colorBlueLight:"#c5baff",colorBlue:"#6e78e8",colorAccent:"#4a56e2",colorGreenLight:"#81e1ff",colorGreen:"#24cca7",colorGreenDeep:"#00ad84",colorRed:"#ff6596",colorBlueNotactive:"#6e78e8",colorMainText:"#000",colorWhite:"#fff",colorGrey:"#a6a6a6",colorGreyLight:"#bdbdbd",container:"RegistrationForm_container__MkpTH",input:"RegistrationForm_input__TbLYl"},g=s(8891),x=s(3855);s(2791);var Z=s.p+"static/media/NameSvg-min.c17fc32bcfc37501a4cd1fd586e358b0.svg",w=s(184),j={email:"",password:"",confirmPass:"",name:""},v=function(){var e=(0,c.I0)(),a=(0,i.s0)();return(0,w.jsxs)("div",{className:f.container,children:[(0,w.jsx)(p.Z,{}),(0,w.jsx)(n.J9,{initialValues:j,validationSchema:h,onSubmit:function(a,s){var i=a.email,r=a.password,t=a.name,n=s.resetForm;e((0,o.z2)({email:i,password:r,name:t})),n()},children:(0,w.jsxs)(n.l0,{className:f.form,children:[(0,w.jsx)(d.Z,{type:"email",name:"email",placeholder:"E-mail",svg:g.Z}),(0,w.jsx)(d.Z,{type:"password",name:"password",placeholder:"Password",svg:x.Z}),(0,w.jsx)(d.Z,{type:"password",name:"confirmPass",placeholder:"Confirm password",svg:x.Z}),(0,w.jsx)(d.Z,{type:"text",name:"name",placeholder:"First name",svg:Z}),(0,w.jsx)(m.Z,{text:"Register"}),(0,w.jsx)(l.Z,{text:"Log in",onClick:function(){a("/login")}})]})})]})},b=s(430);var y=s.p+"static/media/registerImg.4135b3228767d3dca9ba6f59d0b990b8.svg",N=s(7057),_=s(3824),E=function(){var e=(0,r.a)();return(0,w.jsx)(w.Fragment,{children:e?(0,w.jsx)(i.Fg,{to:"/home"}):(0,w.jsxs)("section",{className:b.Z.section,children:[(0,w.jsx)("img",{className:b.Z.ellipseTop,src:N.Z,alt:"Ellipse"}),(0,w.jsx)("img",{className:b.Z.ellipseBottom,src:_.Z,alt:"Ellipse"}),(0,w.jsx)(t.Z,{children:(0,w.jsxs)("div",{className:b.Z.container,children:[(0,w.jsxs)("div",{className:b.Z.bgContainer,children:[(0,w.jsx)("img",{className:b.Z.img,src:y,alt:"Finance App"}),(0,w.jsx)("p",{className:b.Z.text,children:"Finance App"})]}),(0,w.jsx)(v,{})]})})]})})}}}]);
//# sourceMappingURL=274.4fa2f87e.chunk.js.map