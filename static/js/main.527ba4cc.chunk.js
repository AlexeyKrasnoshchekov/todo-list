(this["webpackJsonpreact-git"]=this["webpackJsonpreact-git"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),s=c.n(o),n=c(7),a=c.n(n),i=(c(13),c(3)),l=(c(14),c(8)),d=c(0),r=function(t){return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=t.todos;t.inputText&&t.setTodos([].concat(Object(l.a)(c),[{text:t.inputText,completed:!1,id:Math.floor(1e3*Math.random())}])),t.setInputText("")},children:[Object(d.jsx)("input",{value:t.inputText,type:"text",onChange:function(e){t.setInputText(e.target.value)},className:"todo-input"}),Object(d.jsx)("button",{className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(e){t.setStatus(e.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=c(6),j=function(t){var e=t.text,c=t.todos,o=t.todo,s=t.setTodos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(d.jsx)("button",{onClick:function(){s(c.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{onClick:function(){s(c.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,c=t.setTodos,o=t.filteredTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(d.jsx)(j,{text:t.text,todos:e,todo:t,setTodos:c},t.id)}))})})};var f=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),c=e[0],s=e[1],n=Object(o.useState)([]),a=Object(i.a)(n,2),l=a[0],u=a[1],j=Object(o.useState)("all"),f=Object(i.a)(j,2),m=f[0],O=f[1],p=Object(o.useState)([]),x=Object(i.a)(p,2),h=x[0],g=x[1];return Object(o.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}}()}),[]),Object(o.useEffect)((function(){!function(){switch(m){case"completed":g(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":g(l.filter((function(t){return!1===t.completed})));break;default:g(l)}}(),localStorage.setItem("todos",JSON.stringify(l))}),[l,m]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"To do list "})}),Object(d.jsx)(r,{todos:l,setTodos:u,inputText:c,setInputText:s,status:m,setStatus:O}),Object(d.jsx)(b,{todos:l,setTodos:u,filteredTodos:h})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;c(t),o(t),s(t),n(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.527ba4cc.chunk.js.map