(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return l}));r(64),r(148),r(150),r(48),r(67),r(103),r(29),r(49),r(199),r(37),r(69),r(70),r(104),r(50);var n=r(209);function o(e){var text="";return text+="".concat(e.name," - ").concat(n.DateTime.local().toFormat("dd/LL/yyyy"),"\n\n"),e.workouts.forEach((function(e){text+="".concat(e.title," (").concat(e.muscles.join(", "),")\n"),e.exercises.forEach((function(e){text+="".concat(e.name,": ");var t=e.sets.map((function(e){return e.weight?"".concat(e.reps,"x").concat(e.weight,"kg"):"".concat(e.reps)})),r=t.every((function(e){return e===t[0]}));text+=r?"".concat(t.length,"x").concat(t[0],"\n"):"".concat(t.join(", "),"\n")})),text+="\n"})),text}function l(text){var e={workouts:[]};try{var t=text.split("\n");e.name=t[0].split(" - ")[0];var r=!1,n="",o=!1;t.forEach((function(line){if(""===line)r=!0,o=!1;else if(r){var t=line.split(" ("),l=t[1].replace(")","").split(", ");e.workouts.push({title:t[0],muscles:l,exercises:[]}),n=t[0],r=!1,o=!0}else if(o){e.workouts.find((function(e){return e.title===n})).exercises.push(function(text){var e=text.split(": "),t=[];t=e[1].includes(",")?function(text){return text.split(", ").map((function(e){var t=[];return{reps:(t=e.includes("x")?e.replace("kg","").split("x").map((function(e){return Number(e)})):[Number(e),0])[0],weight:t[1]}}))}(e[1]):function(e){for(var t=[],r=e.replace("kg","").split("x").map((function(e){return Number(e)})),i=0;i<r[0];++i)t.push({reps:r[1],weight:r[2]});return t}(e[1]);return{name:e[0],sets:t}}(line))}}))}catch(e){return console.error("Error parsing imported program"),console.error(e.message),null}return e}},200:function(e,t,r){var content=r(211);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("1b7833da",content,!0,{sourceMap:!1})},201:function(e,t,r){var content=r(213);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("b3f4f4c8",content,!0,{sourceMap:!1})},202:function(e,t,r){var content=r(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("3b7840e8",content,!0,{sourceMap:!1})},203:function(e,t,r){var content=r(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("222aa2fc",content,!0,{sourceMap:!1})},204:function(e,t,r){var content=r(219);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("5be1f980",content,!0,{sourceMap:!1})},205:function(e,t,r){var content=r(221);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("39837100",content,!0,{sourceMap:!1})},206:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:"Untitled Modal"}}},o=(r(214),r(28)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal",on:{click:function(t){return t.target!==t.currentTarget?null:e.$emit("close")}}},[r("div",{staticClass:"modal__box"},[r("span",{staticClass:"modal__title"},[e._v(e._s(e.title))]),e._v(" "),e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},210:function(e,t,r){"use strict";r(200)},211:function(e,t,r){(t=r(62)(!1)).push([e.i,".app{overflow-x:hidden}.header{padding:16px;display:grid;grid-template-columns:1fr auto;align-items:center}.header__title{font-size:30px}.header__subtitle{font-size:20px}.header__button{padding:0;margin-left:16px;background:none;border:none}.program{padding:0 16px 16px}.program__name{margin-bottom:16px;font-size:24px}.workout{margin-bottom:32px}.workout:last-child{margin-bottom:0}.workout__title{margin-bottom:8px;font-size:18px}",""]),e.exports=t},212:function(e,t,r){"use strict";r(201)},213:function(e,t,r){(t=r(62)(!1)).push([e.i,".exr-modal__set{margin-bottom:16px}.exr-modal__set:last-child{margin-bottom:0}.exr-modal__index{display:block;margin-bottom:8px}.exr-modal__group{display:grid;grid-template-columns:1fr auto 1fr auto;align-items:center}.exr-modal__label{margin:0 8px}.exr-modal__label:last-child{margin-right:0}.exr-modal__input{width:100%;padding:4px;border:none;border-radius:4px;color:#000;font-size:18px;text-align:right}",""]),e.exports=t},214:function(e,t,r){"use strict";r(202)},215:function(e,t,r){(t=r(62)(!1)).push([e.i,".modal{width:100%;height:100%;position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;z-index:1;background:rgba(55,55,55,.5)}.modal__box{width:90%;padding:24px;z-index:2;background:#373737;border-radius:4px}.modal__title{margin-bottom:16px;display:block;font-size:20px;font-weight:700}",""]),e.exports=t},216:function(e,t,r){"use strict";r(203)},217:function(e,t,r){(t=r(62)(!1)).push([e.i,".import__area{width:100%;margin-bottom:16px;display:block;color:#000}.import__buttons{display:flex;justify-content:flex-end}.import__button{padding:8px 16px;margin-left:16px;background:#1b1b1b;border:none;border-radius:4px}",""]),e.exports=t},218:function(e,t,r){"use strict";r(204)},219:function(e,t,r){(t=r(62)(!1)).push([e.i,".toast{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:fixed;bottom:32px;left:0;display:flex;justify-content:center;align-items:center}.toast__box{padding:8px;border-radius:4px;background:#1b1b1b}",""]),e.exports=t},220:function(e,t,r){"use strict";r(205)},221:function(e,t,r){(t=r(62)(!1)).push([e.i,".exercise{margin-bottom:4px}.exercise__name{display:block;font-size:18px}.exercise__sets{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding-bottom:4px;border-bottom:1px solid #373737}.exercise__row{display:grid}.exercise__num{margin-right:16px}.exercise__num:last-child{margin-right:0}",""]),e.exports=t},222:function(e,t,r){"use strict";r.r(t);var n={props:{exercise:{type:Object,default:function(){}}}},o=(r(212),r(28)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{title:e.exercise.name+" Sets"},on:{close:function(t){return e.$emit("close")}}},e._l(e.exercise.sets,(function(t,i){return r("div",{key:i,staticClass:"exr-modal__set"},[r("span",{staticClass:"exr-modal__index"},[e._v(e._s(i+1))]),e._v(" "),r("div",{staticClass:"exr-modal__group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.reps,expression:"set.reps"}],staticClass:"exr-modal__input",attrs:{type:"number",placeholder:"Enter reps..."},domProps:{value:t.reps},on:{input:function(r){r.target.composing||e.$set(t,"reps",r.target.value)}}}),e._v(" "),r("span",{staticClass:"exr-modal__label"},[e._v("reps")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"set.weight"}],staticClass:"exr-modal__input",attrs:{type:"number",placeholder:"Enter weight..."},domProps:{value:t.weight},on:{input:function(r){r.target.composing||e.$set(t,"weight",r.target.value)}}}),e._v(" "),r("span",{staticClass:"exr-modal__label"},[e._v("kg")])])])})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Modal:r(206).default})},223:function(e,t,r){"use strict";r.r(t);var n=r(198),o={data:function(){return{textProgram:""}},methods:{cancel:function(){this.$emit("cancel")},success:function(){this.textProgram&&this.$emit("success",Object(n.a)(this.textProgram))}}},l=(r(216),r(28)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{title:"Import Program"},on:{close:e.cancel}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textProgram,expression:"textProgram"}],staticClass:"import__area",attrs:{cols:"30",rows:"10",placeholder:"Enter program text copied/exported from this app..."},domProps:{value:e.textProgram},on:{input:function(t){t.target.composing||(e.textProgram=t.target.value)}}}),e._v(" "),r("div",{staticClass:"import__buttons"},[r("button",{staticClass:"import__button",on:{click:e.cancel}},[e._v("Cancel")]),e._v(" "),r("button",{staticClass:"import__button",on:{click:e.success}},[e._v("Import")])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Modal:r(206).default})},224:function(e,t,r){"use strict";r.r(t);r(199),r(51);var n={props:{msg:{type:String,default:"",required:!0},showTime:{type:Number,default:2,required:!1}},data:function(){return{timer:null}},mounted:function(){var e=this;this.timer=setTimeout((function(){e.$emit("time-up")}),1e3*this.showTime)}},o=(r(218),r(28)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toast"},[t("div",{staticClass:"toast__box"},[t("span",{staticClass:"toast__msg"},[this._v(this._s(this.msg))])])])}),[],!1,null,null,null);t.default=component.exports},225:function(e,t,r){"use strict";r.r(t);r(148),r(29);var n={props:{exercise:{type:Object,default:function(){}}},computed:{reps:function(){return this.exercise.sets.map((function(e){return e.reps}))},weights:function(){return this.exercise.sets.map((function(e){return e.weight+"kg"}))},isBodyweight:function(){return this.weights.every((function(e){return"0kg"===e}))}},methods:{selected:function(){this.$emit("selected",this.exercise)}}},o=(r(220),r(28)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"exercise",on:{click:e.selected}},[r("span",{staticClass:"exercise__name"},[e._v(e._s(e.exercise.name))]),e._v(" "),r("div",{staticClass:"exercise__sets"},[r("div",{staticClass:"exercise__row",style:{"grid-template-columns":"repeat("+e.exercise.sets.length+", 1fr)"}},e._l(e.reps,(function(t,i){return r("span",{key:i,staticClass:"exercise__num"},[e._v(e._s(t))])})),0),e._v(" "),e.isBodyweight?e._e():r("div",{staticClass:"exercise__row",style:{"grid-template-columns":"repeat("+e.exercise.sets.length+", 1fr)"}},e._l(e.weights,(function(t,i){return r("span",{key:i,staticClass:"exercise__num"},[e._v(e._s(t))])})),0)])])}),[],!1,null,null,null);t.default=component.exports},226:function(e,t,r){"use strict";r.r(t);r(23);var n=r(6),o={name:"Arnold's Level I Program",workouts:[{title:"Workout #1",muscles:["Chest","Back"],exercises:[{name:"Bench Press",sets:[{reps:15,weight:32.5},{reps:12,weight:42.5},{reps:10,weight:52.5},{reps:6,weight:62.5}],notes:[]},{name:"Incline Press",sets:[{reps:15,weight:30},{reps:12,weight:40},{reps:10,weight:45},{reps:6,weight:50}],notes:[]},{name:"Pullovers",sets:[{reps:15,weight:13.5},{reps:10,weight:22.5},{reps:8,weight:25},{reps:6,weight:26}],notes:[]},{name:"Chin ups",sets:[{reps:7,weight:0},{reps:7,weight:0},{reps:7,weight:0},{reps:6,weight:0},{reps:6,weight:0}],notes:[]},{name:"Bent Over Rows",sets:[{reps:15,weight:25},{reps:12,weight:30},{reps:10,weight:40},{reps:6,weight:50}],notes:["Deadlift style"]}]},{title:"Workout #2",muscles:["Shoulders","Upper Arms","Forearms"],exercises:[{name:"Lateral Raises",sets:[{reps:15,weight:6},{reps:12,weight:7.5},{reps:10,weight:8.5},{reps:6,weight:9.25}],notes:[]},{name:"Upright Rows",sets:[{reps:10,weight:15},{reps:6,weight:20},{reps:4,weight:22.5}],notes:[]},{name:"OHP",sets:[{reps:6,weight:43.5},{reps:4,weight:46},{reps:2,weight:48.5}],notes:[]},{name:"Standing Barbell Curls",sets:[{reps:15,weight:23.5},{reps:11,weight:26},{reps:8,weight:27.5},{reps:6,weight:28.5}],notes:[]},{name:"Standing Tricep Extensions",sets:[{reps:15,weight:7.5},{reps:12,weight:12.5},{reps:10,weight:17.5},{reps:6,weight:22.5}],notes:[]},{name:"Close Grip Press",sets:[{reps:15,weight:30},{reps:12,weight:40},{reps:9,weight:50},{reps:6,weight:60}],notes:[]},{name:"Seated Dumbbell Curls",sets:[{reps:15,weight:6},{reps:10,weight:15},{reps:7,weight:16},{reps:4,weight:16}],notes:[]},{name:"Wrist Curls",sets:[{reps:15,weight:6},{reps:12,weight:8.5},{reps:10,weight:10},{reps:6,weight:11}],notes:[]},{name:"Reverse Wrist Curls",sets:[{reps:15,weight:5},{reps:12,weight:5},{reps:8,weight:5},{reps:6,weight:5}],notes:[]}]},{title:"Workout #3",muscles:["Thighs","Calfs","Lower Back"],exercises:[{name:"Squats",sets:[{reps:15,weight:47.5},{reps:10,weight:57.5},{reps:8,weight:67.5},{reps:6,weight:72.5}],notes:[]},{name:"Lunges",sets:[{reps:10,weight:22.5},{reps:8,weight:27.5},{reps:6,weight:30}],notes:[]},{name:"Standing Calf Raises",sets:[{reps:15,weight:47.5},{reps:15,weight:57.5},{reps:15,weight:57.5},{reps:15,weight:57.5},{reps:15,weight:57.5}],notes:[]},{name:"Deadlifts",sets:[{reps:10,weight:70},{reps:6,weight:80},{reps:4,weight:90}],notes:[]},{name:"Good Mornings",sets:[{reps:10,weight:30},{reps:6,weight:40},{reps:4,weight:50}],notes:[]}]}],notes:[]},l=r(198),c={data:function(){return{program:o,modals:{exercise:null,import:!1,toast:""}}},created:function(){var e=localStorage.getItem("program");e&&(this.program=JSON.parse(e))},methods:{openModal:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.modals[e]=t},closeModal:function(e){this.modals[e]=null},saveAndExitExerciseModal:function(){this.closeModal("exercise"),this.save()},displayToast:function(e){this.modals.toast=e},copyProgramToClipboard:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(Object(l.b)(e.program));case 3:e.displayToast("Copied program to clipboard"),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},importProgram:function(e){e&&(this.program=e,this.save(),this.displayToast("Program imported from clipboard")),this.closeModal("import")},save:function(){localStorage.setItem("program",JSON.stringify(this.program))}}},m=(r(210),r(28)),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[e.modals.exercise?r("ExerciseModal",{attrs:{exercise:e.modals.exercise},on:{close:e.saveAndExitExerciseModal}}):e._e(),e._v(" "),e.modals.import?r("ImportModal",{on:{cancel:function(t){return e.closeModal("import")},success:e.importProgram}}):e._e(),e._v(" "),e.modals.toast?r("Toast",{attrs:{msg:e.modals.toast},on:{"time-up":function(t){return e.closeModal("toast","")}}}):e._e(),e._v(" "),r("div",{staticClass:"header"},[e._m(0),e._v(" "),r("div",{staticClass:"header__buttons"},[r("button",{staticClass:"header__button",on:{click:e.copyProgramToClipboard}},[r("span",{staticClass:"material-icons"},[e._v("copy_all")])]),e._v(" "),r("button",{staticClass:"header__button",on:{click:function(t){return e.openModal("import")}}},[r("span",{staticClass:"material-icons"},[e._v("content_paste")])])])]),e._v(" "),r("div",{staticClass:"program"},[r("h2",{staticClass:"program__name"},[e._v(e._s(e.program.name))]),e._v(" "),e._l(e.program.workouts,(function(t,i){return r("div",{key:i,staticClass:"workout"},[r("h3",{staticClass:"workout__title"},[e._v("\n\t\t\t\t"+e._s(t.title)+" ("+e._s(t.muscles.join(", "))+")\n\t\t\t")]),e._v(" "),e._l(t.exercises,(function(t,n){return r("Exercise",{key:n,attrs:{exercise:t},on:{selected:function(r){return e.openModal("exercise",t)}}})}))],2)}))],2)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{staticClass:"header__title"},[this._v("\n\t\t\tTraining X\n\t\t\t"),t("span",{staticClass:"header__subtitle"},[this._v("v1.2.0")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ExerciseModal:r(222).default,ImportModal:r(223).default,Toast:r(224).default,Exercise:r(225).default})}}]);