(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{23:function(e,a,t){e.exports={item:"HW5_item__1eK38",active:"HW5_active__3XuKg"}},27:function(e,a,t){e.exports={contaner:"Message_contaner__1GK8B",message:"Message_message__28k13",ava:"Message_ava__3pGk1",messageArea:"Message_messageArea__240j5",time:"Message_time__r5np4"}},32:function(e,a,t){e.exports={App:"App_App__1PflB",error404:"App_error404__qRqCr"}},34:function(e,a,t){e.exports={affairs:"Affairs_affairs__1vsMf",affair:"Affairs_affair__1p98m"}},40:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3OlBc",errorInput:"SuperInputText_errorInput__1hciX",error:"SuperInputText_error__19nxq"}},41:function(e,a,t){e.exports={container:"Clock_container__1687u",time:"Clock_time__wbj-C",date:"Clock_date__3xIo7"}},42:function(e,a,t){e.exports={default:"SuperButton_default__4pqlr",red:"SuperButton_red__2BqnW"}},43:function(e,a,t){e.exports={someClass:"Greeting_someClass__hnAct",error:"Greeting_error__kArJm"}},44:function(e,a,t){e.exports={blue:"HW4_blue__2F0np",column:"HW4_column__Ts4Gf"}},45:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3sJOJ",spanClassName:"SuperCheckbox_spanClassName__MfWya"}},46:function(e,a,t){e.exports={select:"SuperSelect_select__16Ty-",items:"SuperSelect_items__Sml5B"}},53:function(e,a,t){e.exports={superSpan:"SuperEditableSpan_superSpan__8tifW"}},54:function(e,a,t){e.exports={button:"HW8_button__3AOxP"}},59:function(e,a,t){e.exports=t(71)},64:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),o=(t(64),t(32)),i=t.n(o),u=t(3),s=t(95),m=t(96),E=t(23),p=t.n(E),d=t(22),f=t(5),h=t(27),v=t.n(h);var g=function(e){return r.a.createElement("div",{className:v.a.contaner},r.a.createElement("div",{className:v.a.message},r.a.createElement("div",{className:v.a.ava},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:v.a.messageArea},r.a.createElement("span",null,e.name),r.a.createElement("div",null," ",e.message),r.a.createElement("div",{className:v.a.time},e.time))))},_="https://i.pinimg.com/736x/6d/f7/03/6df7036c28e8cf6b160f4839a4bd8c3d--gru--agnes-despicable-me.jpg",b="Julia",C="Pies are a baked or fried dough dish with a filling. The dough can be different - yeast, sponge, puff, shortbread, grated... Pies are open when the filling is on top of the dough, and closed when the filling is completely inside the dough. There are many varieties of pies: kulebyaka, kurnik, sweet pies, chapilg, Kish, sponge cake, cheesecake, strudel, gingerbread, kulich, Mannik, taten, cheesecake, Babka",k="22:00";var O=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 1"),r.a.createElement(g,{avatar:_,name:b,message:C,time:k}))},N=t(12),j=t(42),w=t.n(j),S=function(e){var a=e.red,t=e.className,n=Object(N.a)(e,["red","className"]),l=a?"".concat(w.a.red," ").concat(t):"".concat(w.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},x=t(34),y=t.n(x);var A=function(e){return r.a.createElement("div",{className:y.a.affair},r.a.createElement("div",null,e.affair.name),r.a.createElement("div",null,r.a.createElement(S,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var T=function(e){var a=e.data.map((function(a){return r.a.createElement(A,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:y.a.affairs},a,r.a.createElement(S,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(S,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(S,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(S,{onClick:function(){e.setFilter("low")}},"Low"))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"ani",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var M=function(){var e=Object(n.useState)(I),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),i=o[0],s=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 2"),r.a.createElement(T,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},J=t(55),P=t(43),B=t.n(P),F=t(40),W=t.n(F),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(W.a.error," ").concat(i||""),m=c?"".concat(W.a.errorInput," ").concat(o):"".concat(W.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},K=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o="Error!"===l?B.a.error:B.a.someClass;return r.a.createElement("div",null,r.a.createElement(H,{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement(S,{onClick:n},"add"),r.a.createElement("span",null,c))},G=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(u.a)(s,2),E=m[0],p=m[1],d=a.length;return r.a.createElement(K,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){""===o?p("Error!"):(t(o),alert("Hello ".concat(o,"!")),i(""),p(""))},error:E,totalUsers:d})},R=t(97);var D=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 3"),r.a.createElement(G,{users:t,addUserCallback:function(e){var a=[{_id:Object(R.a)(),name:"NewName"}].concat(Object(J.a)(t));l(a)}}))},U=t(44),q=t.n(U),L=t(45),X=t.n(L),z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=(e.className,e.spanClassName,e.children),l=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]);return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:X.a.checkbox},l)),n&&r.a.createElement("span",{className:X.a.spanClassName},n))};var $=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],E=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 4"),r.a.createElement("div",{className:"".concat(q.a.column," ").concat(q.a.blue)},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(S,{red:!0,onClick:o},"  delete "),r.a.createElement(z,{checked:m,onChangeChecked:E},"I like this button "),r.a.createElement(z,{checked:m,onChange:function(e){return E(e.currentTarget.checked)}})))},Q=t(53),V=t.n(Q),Y=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(u.a)(o,2),s=i[0],m=i[1],E=l||{},p=E.children,d=E.onDoubleClick,f=E.className,h=Object(N.a)(E,["children","onDoubleClick","className"]),v="".concat(V.a.superSpan," ").concat(f);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:v},h),p||c.value))};function Z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ee(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Z("test",{x:"A",y:1});ee("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 6"),r.a.createElement("div",null,r.a.createElement(Y,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(S,{onClick:function(){Z("editable-span-value",t)}},"save"),r.a.createElement(S,{onClick:function(){var e=ee("editable-span-value","");l(e)}},"restore"))};var te=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(M,null),r.a.createElement(D,null),r.a.createElement($,null),r.a.createElement(ae,null))},ne=t(46),re=t.n(ne),le=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(N.a)(e,["options","onChange","onChangeOption"]),l=a&&a.map((function(e,a){return r.a.createElement("option",{className:re.a.items,key:a},e)}));return r.a.createElement("select",Object.assign({className:re.a.select,onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},ce=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{name:a,value:e,type:"radio",onChange:c,checked:e===n}))})):[];return r.a.createElement("div",null,o)},oe=["x","y","z"];var ie=function(){var e=Object(n.useState)(oe[1]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 7"),r.a.createElement("div",null,r.a.createElement(le,{options:oe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ce,{name:"radio",options:oe,value:t,onChangeOption:l})))},ue=t(56),se=function(e,a){switch(a.type){case"SORT-NAME":var t=e.map((function(e){return Object(ue.a)({},e)}));return"up"===a.orientation?t.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):t.sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0})),t;case"CHECK-AGE-18":return e.filter((function(e){return e.age>a.age}));default:throw new Error("I do not andastand this action.type!")}},me=t(54),Ee=t.n(me),pe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(n.useState)(pe),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", \u0432\u043e\u0437\u0440\u0430\u0441\u0442: ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null," homeworks 8"),c,r.a.createElement("div",{className:Ee.a.button},r.a.createElement("div",null,r.a.createElement(S,{onClick:function(){return l(se(pe,{type:"SORT-NAME",orientation:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(S,{onClick:function(){return l(se(pe,{type:"SORT-NAME",orientation:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(S,{onClick:function(){return l(se(pe,{type:"CHECK-AGE-18",age:18}))}},"check 18"))))},fe=t(41),he=t.n(fe);var ve=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!1),E=Object(u.a)(m,2),p=E[0],d=E[1],f=function(){clearInterval(t)},h=i.toLocaleTimeString(),v=i.toLocaleDateString();return r.a.createElement("div",{className:he.a.container},r.a.createElement("div",{className:he.a.time,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},h),p&&r.a.createElement("div",{className:he.a.date},v),r.a.createElement(S,{onClick:function(){f();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(S,{onClick:f},"stop"))};var ge=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 9"),r.a.createElement(ve,null))};var _e=function(){return r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement(de,null),r.a.createElement(ge,null))};var be=function(){return r.a.createElement("div",null,"JuniorPlus")};var Ce=function(){return r.a.createElement("div",{className:i.a.error404},r.a.createElement("img",{src:"https://w7.pngwing.com/pngs/324/215/png-transparent-http-404-error-message-small-alligator-web-design-material-damage-animals-text-vertebrate-thumbnail.png"}))};var ke=function(){return r.a.createElement("div",null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f.a,{to:"/preJunior"})}}),r.a.createElement(f.b,{exact:!0,path:"/preJunior",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(f.b,{exact:!0,path:"/junior",render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(f.b,{exact:!0,path:"/juniorPlus",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(f.b,{render:function(){return r.a.createElement(Ce,null)}})))};function Oe(){var e=r.a.useState(!1),a=Object(u.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{onClick:function(){return n(!0)}},"Menu"),r.a.createElement(s.a,{anchor:"left",open:t,onClose:function(){return n(!1)}},r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/preJunior",activeClassName:p.a.active},"PreJunior")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/junior",activeClassName:p.a.active},"Junior")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/juniorPlus",activeClassName:p.a.active},"JuniorPlus")))))}var Ne=function(){return r.a.createElement("div",null,r.a.createElement(Oe,null))};var je=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 5"),r.a.createElement(d.a,null,r.a.createElement(Ne,null),r.a.createElement(ke,null)))};var we=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("h3",null,"REACT HOMEWORKS:"),r.a.createElement(je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(70);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.1cc8281d.chunk.js.map