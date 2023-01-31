(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{156:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},167:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(36),c=n.n(a),i=(n(156),n(50)),o=n(84),s=Object(o.b)({name:"calendar",initialState:{dateFilter:null,currMonth:null,userEvents:[],isAddingEvent:!1,editingEvent:null},reducers:{setDateFilter:function(e,t){e.dateFilter=t.payload},setCurrMonth:function(e,t){e.currMonth=t.payload},setUserEvents:function(e,t){e.userEvents=t.payload},setIsAddingEvent:function(e,t){e.isAddingEvent=t.payload},setEditingEvent:function(e,t){e.editingEvent=t.payload}}}),u=s.actions,l=u.setDateFilter,d=u.setCurrMonth,j=u.setUserEvents,b=u.setIsAddingEvent,m=u.setEditingEvent,v=s.reducer,f=Object(o.a)({reducer:{calendar:v}}),O=(n(164),n(15)),h=n(5);function x(e){var t=(e+1).toFixed();return t.length>1?t:"0".concat(t)}function p(e){var t=e.toString(),n=e.getMonth(),r=t.split(" ");console.log(r,"dayArray");var a=Object(h.a)(r,5),c=a[2],i=a[3],o=a[4],s=x(n);return"".concat(i,"-").concat(s,"-").concat(c," ").concat(o.slice(0,5))}function g(e){switch(e){case"Mon":return 1;case"Tue":return 2;case"Wed":return 3;case"Thu":return 4;case"Fri":return 5;case"Sat":return 6;case"Sun":return 7;default:return 1}}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=e.toString(),a=r.split(" "),c=e.getMonth(),i=Object(h.a)(a,4),o=i[0],s=i[1],u=i[2],l=i[3],d=x(c),j=g(o),b=p(e),m=t.filter((function(e){return e.beginDate===b})),v={year:l,monthIndex:c,monthNumberString:d,monthName:s,dayNumber:u,dayOfWeekNumber:j,dayOfWeek:o,dateString:b,dayEvents:m,isFromSelectedMonth:n};return v}function _(e,t,n,r){var a=1,c=n,i=e.year,o=!0,s=[];"previousMonth"===t&&(o=!1,a=+e.daysAmount-n+1,c=+e.daysAmount,11===+e.monthIndex&&(i-=1)),"nextMonth"===t&&(o=!1,c=n,0===+e.monthIndex&&(i+=1));for(var u=a;u<=c;u+=1){var l=y(new Date(i,+e.monthIndex,u),r,o);s.push(l)}return s}var N=function(){return Object(i.b)()},F=i.c,E=n(105),D=n.n(E);n(165);var S=n(1),M=function(e){var t=e.day,n=N(),r=function(e){return y(new Date,[]).dateString.split(" ")[0]===e.dateString.split(" ")[0]}(t),a=function(e){n(b(!1)),n(m(e))},c=t.dayEvents.sort((function(e,t){var n=1/0,r=1/0;if(e.beginTime){var a=e.beginTime.split(" ")[1].split(":"),c=Object(h.a)(a,2),i=c[0],o=c[1];n=60*parseInt(i,10)+parseInt(o,10)}if(t.beginTime){var s=t.beginTime.split(" ")[1].split(":"),u=Object(h.a)(s,2),l=u[0],d=u[1];r=60*parseInt(l,10)+parseInt(d,10)}return console.log(n,r,"sumMinutesB"),n-r}));return Object(S.jsxs)("div",{className:D()("dayCell",{"dayCell--current":r},{"dayCell--notActual":!t.isFromSelectedMonth},{"dayCell--current--notActual":!t.isFromSelectedMonth&&r}),children:[Object(S.jsxs)("header",{className:"dayCell__header",children:[Object(S.jsx)("p",{className:"dayCell__date",children:t.dayNumber}),Object(S.jsx)("p",{className:"dayCell__dayOfWeek",children:t.dayOfWeek})]}),Object(S.jsx)("main",{className:"dayCell__main",children:c.map((function(e){return Object(S.jsx)("div",{className:D()("dayCell__eventTitle",{"dayCell__eventTitle--notActual":!t.isFromSelectedMonth}),onClick:function(){return a(e)},onKeyDown:function(){return a(e)},role:"button",tabIndex:0,children:e.title},Math.random())}))})]})},I=n(27),C=n(235),A=n(237),w=n(242),k=n(225),T=n(130),J=n(66),Y=n(241);function K(e){localStorage.setItem("events",JSON.stringify(e))}n(167);function U(e){var t=e.toString().split(" "),n=Object(h.a)(t,5),r=n[2],a=n[3],c=n[4],i=+e.getMonth()+1;return"".concat(a,"-").concat(i,"-").concat(r," ").concat(c.slice(0,5))}var W=function(e){var t=e.editingEvent,n=Object(i.b)(),a=F((function(e){return e.calendar.userEvents})),c=Object(r.useState)(t.title),o=Object(h.a)(c,2),s=o[0],u=o[1],l=Object(r.useState)(t.description),d=Object(h.a)(l,2),b=d[0],v=d[1],f=Object(r.useState)(t.beginDate),x=Object(h.a)(f,2),g=x[0],y=x[1],_=Object(r.useState)(t.beginTime),N=Object(h.a)(_,2),E=N[0],D=N[1];Object(r.useEffect)((function(){u(t.title),v(t.description),y(t.beginDate),D(t.beginTime)}),[t]);var M=function(){n(m(null))},W=function(){var e=a.filter((function(e){return e.id!==t.id}));n(j(e)),M()};return Object(S.jsxs)("form",{className:"editEventForm",onSubmit:function(e){e.preventDefault();var r=p(new Date),c=Object(I.a)(Object(I.a)({},t),{},{title:s,description:b,editedAt:r,beginDate:g,beginTime:E}),i=a.filter((function(e){return e.id!==(null===t||void 0===t?void 0:t.id)})),o=[].concat(Object(O.a)(i),[c]);n(j(o)),K(o),M()},children:[Object(S.jsxs)("div",{className:"editEventForm__header",children:[Object(S.jsxs)("div",{className:"editEventForm__buttons",children:[Object(S.jsx)("div",{className:"editEventForm__bin",onClick:function(){return W()},onKeyUp:function(){return W()},tabIndex:0,role:"button"}),Object(S.jsx)("div",{className:"editEventForm__close",onClick:function(){return M()},onKeyUp:function(){return M()},tabIndex:0,role:"button"})]}),Object(S.jsx)("h2",{className:"editEventForm__formTitle",children:"Edit event"}),Object(S.jsxs)("p",{className:"editEventForm__createdAt",children:["Created at:\xa0",t.createdAt]}),t.editedAt&&Object(S.jsxs)("p",{className:"editEventForm__updatedAt",children:["Last updated at:\xa0",null===t||void 0===t?void 0:t.editedAt]})]}),Object(S.jsx)("div",{className:"editEventForm__main",children:Object(S.jsxs)(k.a,{direction:"column",spacing:2,children:[Object(S.jsx)(T.a,{dateAdapter:J.a,children:Object(S.jsxs)(k.a,{spacing:1,children:[Object(S.jsx)(C.a,{id:"outlined-basic",label:"Title",variant:"outlined",required:!0,color:"secondary",value:s,onChange:function(e){return u(e.target.value)}}),Object(S.jsx)(C.a,{id:"outlined-basic",label:"Description",variant:"outlined",multiline:!0,color:"secondary",value:b,onChange:function(e){return v(e.target.value)}}),Object(S.jsx)(Y.a,{label:"Date",inputFormat:"DD/MM/YYYY",value:g,onChange:function(e){var t=p(e.$d);y(t)},renderInput:function(e){return Object(S.jsx)(C.a,Object(I.a)(Object(I.a)({},e),{},{required:!0,error:!1,color:"secondary"}))}}),Object(S.jsx)(A.a,{label:"Time",value:E,onChange:function(e){var t=U(e.$d);D(t)},renderInput:function(e){return Object(S.jsx)(C.a,Object(I.a)(Object(I.a)({},e),{},{error:!1,color:"secondary"}))}})]})}),Object(S.jsx)(w.a,{variant:"contained",color:"secondary",type:"submit",children:"Save"})]})})]})},q=(n(173),function(){var e=F((function(e){return e.calendar.currMonth})),t=F((function(e){return e.calendar.userEvents})),n=F((function(e){return e.calendar.editingEvent})),r=function(e,t){if(!e)return[];var n=_(e,"currentMonth",+e.daysAmount,t),r=+n[0].dayOfWeekNumber,a=_(e.prevMonth,"previousMonth",r-1,t),c=42-n.length-a.length,i=_(e.nextMonth,"nextMonth",c,t);return[].concat(Object(O.a)(a),Object(O.a)(n),Object(O.a)(i))}(e,t);return Object(S.jsxs)("ul",{className:"calendar",children:[n&&Object(S.jsx)(W,{editingEvent:n}),r.map((function(e){return Object(S.jsx)("li",{className:"calendar__dayCell",children:Object(S.jsx)(M,{day:e})},Math.random())}))]})}),B=n(46),$=n.n(B),R=n(185),L=n(129),P=n(128);function z(e){var t=e.getFullYear(),n=e.getMonth(),r=n+1,a=x(n),c=function(e){switch(e){case 0:return["Jan","January"];case 1:return["Feb","February"];case 2:return["Mar","March"];case 3:return["Apr","April"];case 4:return["May","May"];case 5:return["Jun","June"];case 6:return["Jul","July"];case 7:return["Aug","August"];case 8:return["Sep","September"];case 9:return["Oct","October"];case 10:return["Nov","November"];case 11:return["Dec","December"];default:return"uknown"}}(n),i=Object(h.a)(c,2),o=i[0],s=i[1],u=e.getDate();return{year:t,monthIndex:n,monthNumber:r,monthShortName:o,monthFullName:s,fullDate:"01/".concat(a,"/").concat(t),fullDateReverse:"".concat(t,"-").concat(a,"-01"),dateWithMonthName:"".concat(s," ").concat(t),daysAmount:u}}function G(e){localStorage.setItem("dateFilter",JSON.stringify(e))}n(174);function H(e){return{year:e.getFullYear(),monthIndex:e.getMonth()}}function Q(e,t){return H(new Date(e,t))}var V=function(){var e=N(),t=F((function(e){return e.calendar.dateFilter})),n=F((function(e){return e.calendar.currMonth})),a=n?n.fullDateReverse:null,c=Object(r.useState)($()(a)),i=Object(h.a)(c,2),o=i[0],s=i[1],u=Object(r.useState)(!1),j=Object(h.a)(u,2),b=j[0],m=j[1],v=$()("2020-01-01T00:00:00.000"),f=$()("2034-01-01T00:00:00.000");Object(r.useEffect)((function(){if(t){var n=function(e){var t=e.year,n=e.monthIndex,r=new Date(t,n+1,0),a=new Date(t,n,0),c=new Date(t,n+2,0),i=z(r),o=z(a),s=z(c);return Object(I.a)(Object(I.a)({},i),{},{prevMonth:o,nextMonth:s})}(t);s($()(n.fullDateReverse)),e(d(n))}}),[t]);var O=function(){if(t){var n=t.monthIndex,r=Q(t.year,n+1);e(l(r)),G(r)}},x=function(){if(t){var n=t.monthIndex,r=Q(t.year,n-1);e(l(r)),G(r)}},p=function(t){if(t){var n=Q(t.year(),t.month());s(t),e(l(n)),G(n)}};return n&&Object(S.jsxs)("div",{className:"dateFilter",children:[Object(S.jsx)("div",{className:"dateFilter__arrow dateFilter__arrow--left",onClick:function(){return x()},onKeyUp:function(){return x()},tabIndex:0,role:"button"}),Object(S.jsx)("p",{className:"dateFilter__selectedDate",children:n.dateWithMonthName}),Object(S.jsx)("div",{className:"dateFilter__arrow dateFilter__arrow--right",onClick:function(){return O()},onKeyUp:function(){return O()},tabIndex:0,role:"button"}),Object(S.jsx)("div",{className:"dateFilter__calendarImage",onClick:function(){return m(!b)},onKeyUp:function(){return m(!b)},tabIndex:0,role:"button"}),Object(S.jsx)("div",{className:"dateFilter__datePicker",children:b&&Object(S.jsx)(T.a,{dateAdapter:J.a,children:Object(S.jsxs)(R.a,{container:!0,spacing:3,children:[Object(S.jsx)(R.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(L.a,{date:o,minDate:v,maxDate:f,onChange:function(e){return p(e)}})}),Object(S.jsx)(R.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(P.a,{date:o,minDate:v,maxDate:f,onChange:function(e){return p(e)}})})]})})})]})},X=(n(175),function(){var e=Object(i.b)(),t=F((function(e){return e.calendar.userEvents})),n=Object(r.useState)(""),a=Object(h.a)(n,2),c=a[0],o=a[1],s=Object(r.useState)(""),u=Object(h.a)(s,2),l=u[0],d=u[1],m=Object(r.useState)(""),v=Object(h.a)(m,2),f=v[0],x=v[1],g=Object(r.useState)(""),y=Object(h.a)(g,2),_=y[0],N=y[1],E=function(){e(b(!1))};return Object(S.jsxs)("form",{className:"newEventForm",onSubmit:function(n){n.preventDefault();var r="id".concat(Math.random().toString(16).slice(2)),a=p(new Date),i={id:r,title:c,description:l,createdAt:a,beginDate:f,beginTime:_},o=[].concat(Object(O.a)(t),[i]);e(j(o)),K(o),E()},children:[Object(S.jsxs)("div",{className:"newEventForm__header",children:[Object(S.jsx)("div",{className:"newEventForm__close",onClick:function(){return E()},onKeyUp:function(){return E()},tabIndex:0,role:"button"}),Object(S.jsx)("h2",{className:"newEventForm__formTitle",children:"Add new event"})]}),Object(S.jsx)("div",{className:"newEventForm__main",children:Object(S.jsxs)(k.a,{direction:"column",spacing:2,children:[Object(S.jsx)(T.a,{dateAdapter:J.a,children:Object(S.jsxs)(k.a,{spacing:1,children:[Object(S.jsx)(C.a,{id:"outlined-basic",label:"Title",variant:"outlined",color:"secondary",required:!0,onChange:function(e){return o(e.target.value)}}),Object(S.jsx)(C.a,{id:"outlined-basic",label:"Description",variant:"outlined",color:"secondary",multiline:!0,onChange:function(e){return d(e.target.value)}}),Object(S.jsx)(Y.a,{label:"Date",inputFormat:"DD/MM/YYYY",value:f,onChange:function(e){var t=p(e.$d);x(t)},renderInput:function(e){return Object(S.jsx)(C.a,Object(I.a)(Object(I.a)({},e),{},{required:!0,error:!1,color:"secondary"}))}}),Object(S.jsx)(A.a,{label:"Time",value:_,onChange:function(e){var t=U(e.$d);N(t)},renderInput:function(e){return Object(S.jsx)(C.a,Object(I.a)(Object(I.a)({},e),{},{error:!1,color:"secondary"}))}})]})}),Object(S.jsx)(w.a,{variant:"contained",color:"secondary",type:"submit",children:"Save"})]})})]})}),Z=(n(176),function(){var e=N(),t=F((function(e){return e.calendar.isAddingEvent})),n=function(){e(m(null)),e(b(!0))};return Object(S.jsxs)("div",{className:"eventAdderButton",children:[Object(S.jsx)("button",{className:"eventAdderButton__plus",onClick:function(){return n()},onKeyDown:function(){return n()},tabIndex:0,type:"button",children:"+"}),t&&Object(S.jsx)(X,{})]})});function ee(){var e=localStorage.getItem("dateFilter");return e?JSON.parse(e):H(new Date)}var te=function(){var e=N(),t=F((function(e){return e.calendar.dateFilter}));return Object(r.useEffect)((function(){var t=function(){var e,t=localStorage.getItem("events");return t&&(e=JSON.parse(t)),t||(e=[]),e}(),n=ee();e(j(t)),e(l(n))}),[]),t&&Object(S.jsxs)("div",{className:"app",children:[Object(S.jsxs)("header",{className:"app__header",children:[Object(S.jsx)(Z,{}),Object(S.jsx)(V,{})]}),Object(S.jsx)("main",{className:"app__main",children:Object(S.jsx)(q,{})}),Object(S.jsx)("a",{target:"_blank",href:"https://icons8.com/",className:"resource",rel:"noreferrer",children:"Icons resource link"})]})};c.a.render(Object(S.jsx)(i.a,{store:f,children:Object(S.jsx)(te,{})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.0f1fcccf.chunk.js.map