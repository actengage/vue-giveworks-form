(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["survey-type"],{8541:function(e,t,n){"use strict";var i=n("ca14");const r={street:["street_number","route","intersection"],city:["locality"],state:["administrative_area_level_1"],zip:["postal_code"],zipcode:["postal_code"],county:["administrative_area_level_2"]};function a(e,t){return e.filter(e=>-1!==t.indexOf(e)).filter((e,t,n)=>n.indexOf(e)===t)}function o(e,t,n){if(n[e])return n[e];if("latitude"===e)return n.geometry.location.lat();if("longitude"===e)return n.geometry.location.lng();const o=r[e]||(Object(i["g"])(e)?e:[e]),s=n.address_components.map(e=>{if(a(e.types,o).length)return e[t.short?"short_name":"long_name"]}).filter(e=>!!e);return s.length?s.join(" "):null}function s(e,t,n){const r=e.expression.split("."),a=r.pop(),o=r.reduce((e,t)=>e[t],t.context);return n=Object(i["g"])(n)?n.join(" "):n,e.modifiers.query&&(t.componentInstance.query=n),o[a]=n,n}t["a"]={bind(e,t,n){n.componentInstance.$on("autocomplete-select",(e,i)=>{n.context.$nextTick(()=>{s(t,n,o(t.arg,t.modifiers,i))})})}}},add3:function(e,t,n){"use strict";t["a"]={computed:{mapApiKey(){return Object({NODE_ENV:"production",VUE_APP_BUGSNAG_KEY_:"e66068bbbefd6ad235c13b0c178480da",VUE_APP_GOOGLE_MAPS_KEY_:"AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU",BASE_URL:""}).VUE_APP_GOOGLE_MAPS_KEY}}}},b236:function(e,t,n){"use strict";var i=n("ca14");const r=["submit","redirect","submit-enable","submit-disable","submit-show","submit-hide"];t["a"]={directives:{bindEvents:{bind(e,t,n){const a=n.context,o=n.child||n.context;for(const s in r)o.$on(r[s],(...e)=>{const t=Object(i["a"])("on-"+r[s]);o!==a&&a.$emit(r[s],...e),a[t]&&a[t](...e)})}}}}},b4ea:function(e,t,n){"use strict";function i(e){return-1!==["input","textarea","select"].indexOf(e.tagName)?e:Array.from(e.querySelectorAll("input, textarea, select")).reverse().pop()}t["a"]={inserted(e,t,n){const r=i(e),a=new URLSearchParams(location.search),o=t.value||r&&r.getAttribute("name"),s=a.get(o);r&&!r.value&&s&&(n.componentInstance?n.componentInstance.$emit("input",s):n.elm.value=s)}}},b791:function(e,t,n){"use strict";var i=n("850f"),r=n("b236"),a=n("ca14");t["a"]={props:{source:[String,Number],redirect:[Boolean,String],httpOptions:Object,page:{type:Object,required:!0}},mixins:[r["a"]],computed:{buttonLabel(){return this.page.options.button},shouldShowEmployment(){return"PAC"===this.page.site.type||"Campaign"===this.page.site.type}},methods:{submitButton(){return this.$refs.submit?this.$refs.submit.$el:this.$el.querySelector("[type=submit]")},hideSubmitButton(){this.submitButton().style.display="none"},showSubmitButton(){this.submitButton().style.display="block"},disableSubmitButton(){this.submitButton().disabled=!0},enableSubmitButton(){this.submitButton().disabled=!1},handleRedirect(e,t){setTimeout(()=>{!e&&this.page.next_page&&(e=this.page.next_page.url.replace(/\/$/,"")+(this.form.source?"/"+this.form.source:"")),e&&(window.location=e+(t&&(e.match(/\?/)?"&":"?")+`sessionid=${t}`))})},submit(e,t){return this.$el.querySelector(":focus")&&this.$el.querySelector(":focus").blur(),new Promise((n,i)=>{this.submitting?i(new Error("The form is already submitting")):(this.errors={},this.submitting=!0,this.$emit("submit"),this.model.save(this.form,Object.assign({method:"post"},this.httpOptions)).then(t=>{this.submitting=!1,this.$emit("submit-complete",!0,t),this.$emit("submit-success",t),Object(a["i"])(e)&&e(t),n(t)},e=>{this.submitting=!1,this.errors=e.data.errors,this.$emit("submit-complete",!0,e),this.$emit("submit-success",e),Object(a["i"])(t)&&t(e),i(e)}))})},onSubmitSuccess(e){this.handleRedirect(this.redirect||this.page.external_reply,e.get("sessionid"))},onSubmitError(e){throw e}},mounted(){this.loaded=!0},data(){const e=this.page.site.recurring&&this.page.options.recurring_only?1:0;return{form:{source:this.source,recurring:e},errors:{},loaded:!1,submitting:!1,model:new i["a"]({id:this.page.id})}}}},cc21:function(e,t,n){"use strict";n.r(t);var i,r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.page.questions,(function(t){return n("div",{key:t.id},[n(e.component(t.type),{tag:"component",attrs:{value:e.form["field_"+t.id],name:"field_"+t.id,page:e.page,form:e.form,errors:e.errors,question:t}})],1)})),n("btn-activity",{attrs:{size:"lg",type:"submit",block:!0,orientation:"right",activity:e.submitting,label:e.buttonLabel||e.page.site.config.giveworks.button.survey}})],2)},o=[],s=n("b791"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:e.question.id,type:"email",name:e.name,label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}})},l=[],d=n("b4ea"),c=n("0ab3"),m=n("ca14"),p={components:{FormGroup:()=>n.e("vue-interface").then(n.bind(null,"2848"))},directives:{Query:d["a"]},directives:{changed(e,t,n){e.addEventListener("change",n=>{n.target.checked&&Object(m["i"])(t.value)&&t.value(e)})}},mixins:[c["a"]],props:{form:{type:Object,required:!0},page:{type:Object,required:!0},question:{type:Object,required:!0},errors:{type:Object,required:!0}},computed:{name(){return this.$attrs.name}},methods:{updated(e){this.$emit("input",e)}}},f=p,v=n("2877"),q=Object(v["a"])(f,i,r,!1,null,null,null),b=q.exports,h={name:"SurveyAltEmailField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},_=h,y=Object(v["a"])(_,u,l,!1,null,null,null),x=y.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:e.question.id,type:"phone",name:e.name,label:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}})},g=[],k={name:"SurveyAltPhoneField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},$=k,S=Object(v["a"])($,F,g,!1,null,null,null),O=S.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form-group",{class:{"is-invalid":!!e.invalidFeedback}},[n("label",[e._v(" "+e._s(e.question.question)+" "),e.question.required?n("sup",[e._v("*")]):e._e()]),e._l(e.question.answers,(function(t,i){return n("checkbox-field",{directives:[{name:"query",rawName:"v-query"}],key:i,attrs:{id:e.name+"_"+i,label:t,value:t,"checked-values":e.value||[],name:e.name,custom:""},on:{input:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}})})),e.question.accept_other?[n("checkbox-field",{directives:[{name:"changed",rawName:"v-changed"},{name:"query",rawName:"v-query"}],attrs:{id:e.name+"_50",label:"Other:",value:"other",name:e.name,"checked-values":e.value||[],custom:""},on:{input:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}}),n("input-field",{directives:[{name:"query",rawName:"v-query"}],staticClass:"mt-2",class:{"is-invalid":e.errors[e.name]},attrs:{id:e.name+"_other",type:"text",label:"Other",placeholder:"Other",name:e.name+"_other",custom:""},on:{input:e.updated},model:{value:e.form[e.name+"_other"],callback:function(t){e.$set(e.form,e.name+"_other",t)},expression:"form[`${name}_other`]"}})]:e._e(),e._t("feedback",[e.validFeedback?n("form-feedback",{attrs:{valid:""},domProps:{innerHTML:e._s(e.validFeedback)}}):e._e(),e.invalidFeedback?n("form-feedback",{attrs:{invalid:""},domProps:{innerHTML:e._s(e.invalidFeedback)}}):e._e()])],2)},w=[],P={name:"SurveyCheckboxField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8")),FormFeedback:()=>n.e("vue-interface").then(n.bind(null,"a892")),CheckboxField:()=>n.e("vue-interface").then(n.bind(null,"e067"))},extends:b},A=P,j=Object(v["a"])(A,E,w,!1,null,null,null),N=j.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:"city",name:"city",label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})},L=[],C={name:"SurveyCityField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},z=C,T=Object(v["a"])(z,I,L,!1,null,null,null),R=T.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group"},[n("fieldset",[n("legend",[e._v("Select an amount")]),e._l(e.amounts,(function(t,i){return n("div",{key:i,staticClass:"row"},e._l(t,(function(t){return n("div",{key:t,staticClass:"col-sm-6"},[n("radio-field",{attrs:{name:"donation",label:t,value:t,custom:""},model:{value:e.form.donation,callback:function(t){e.$set(e.form,"donation",t)},expression:"form.donation"}})],1)})),0)})),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("label",{attrs:{for:e.question.id},domProps:{innerHTML:e._s(e.question.question)}}),n("input-group",{attrs:{prepend:"$"}},[n("input",{staticClass:"form-control",class:{"is-invalid":!!e.invalidFeedback},attrs:{type:"text",name:e.name,required:e.question.required},domProps:{value:e.value}})])],1)])],2)])},G=[],M={name:"SurveyDollarAmountField",components:{InputGroup:()=>n.e("vue-interface").then(n.bind(null,"3588")),RadioField:()=>n.e("vue-interface").then(n.bind(null,"b78d"))},extends:b,computed:{amounts(){const e=this.question.answers?this.question.answers.split("|"):this.page.site.config.giveworks.ask_amounts;return Object(m["b"])(e.filter(e=>e>=(parseFloat(this.page.options.min_amount)||0)),2)}}},U=M,K=Object(v["a"])(U,B,G,!1,null,null,null),V=K.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:"first",name:"first",label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form.first,callback:function(t){e.$set(e.form,"first",t)},expression:"form.first"}})},H=[],Y={name:"SurveyFirstField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},Q=Y,Z=Object(v["a"])(Q,D,H,!1,null,null,null),J=Z.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:e.question.id,name:e.name,label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}})},X=[],ee={name:"SurveyInputField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},te=ee,ne=Object(v["a"])(te,W,X,!1,null,null,null),ie=ne.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:"last",name:"last",label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form.last,callback:function(t){e.$set(e.form,"last",t)},expression:"form.last"}})},ae=[],oe={name:"SurveyLastField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},se=oe,ue=Object(v["a"])(se,re,ae,!1,null,null,null),le=ue.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:"email",type:"email",name:"email",label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})},ce=[],me={name:"SurveyPrimaryEmailField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},pe=me,fe=Object(v["a"])(pe,de,ce,!1,null,null,null),ve=fe.exports,qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:"phone",type:"phone",name:"phone",label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})},be=[],he={name:"SurveyPrimaryPhoneField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},_e=he,ye=Object(v["a"])(_e,qe,be,!1,null,null,null),xe=ye.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form-group",{class:{"is-invalid":!!e.invalidFeedback}},[n("label",[e._v(" "+e._s(e.question.question)+" "),e.question.required?n("sup",[e._v("*")]):e._e()]),e._l(e.question.answers,(function(t,i){return n("radio-field",{directives:[{name:"query",rawName:"v-query"}],key:i,attrs:{id:e.name+"_"+i,label:t,value:t,"checked-value":e.value,name:e.name,custom:""},on:{change:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}})})),e.question.accept_other?[n("radio-field",{directives:[{name:"changed",rawName:"v-changed"}],attrs:{id:e.name+"_50",value:"other",label:"Other:",name:e.name,"checked-value":e.value},on:{change:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form[e.name+"_other"],expression:"form[`${name}_other`]"}],staticClass:"form-control",class:{"is-invalid":e.errors[e.name]},attrs:{id:e.name+"_other",type:"text",name:e.name+"_other"},domProps:{value:e.form[e.name+"_other"]},on:{input:[function(t){t.target.composing||e.$set(e.form,e.name+"_other",t.target.value)},function(t){return e.updated(t.target.value)}]}})]:e._e(),e._t("feedback",[e.validFeedback?n("form-feedback",{attrs:{valid:""},domProps:{innerHTML:e._s(e.validFeedback)}}):e._e(),e.invalidFeedback?n("form-feedback",{attrs:{invalid:""},domProps:{innerHTML:e._s(e.invalidFeedback)}}):e._e()])],2)},ge=[],ke={name:"SurveyRadioField",components:{RadioField:()=>n.e("vue-interface").then(n.bind(null,"b78d")),FormFeedback:()=>n.e("vue-interface").then(n.bind(null,"a892"))},extends:b},$e=ke,Se=Object(v["a"])($e,Fe,ge,!1,null,null,null),Oe=Se.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:e.question.id,label:e.question.question+(e.question.required?"*":""),name:e.name,errors:e.errors,required:e.question.required,custom:""},on:{input:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}},e._l(e.question.answers,(function(t,i){return n("option",{domProps:{value:t,innerHTML:e._s(t)}})})),0)},we=[],Pe={name:"SurveySelectField",components:{SelectField:()=>n.e("vue-interface").then(n.bind(null,"8cec"))},extends:b},Ae=Pe,je=Object(v["a"])(Ae,Ee,we,!1,null,null,null),Ne=je.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:e.question.id,name:"state",label:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},e._l(e.page.site.config.states,(function(t,i){return n("option",{domProps:{value:i,innerHTML:e._s(t)}})})),0)},Le=[],Ce={name:"SurveyStateField",components:{SelectField:()=>n.e("vue-interface").then(n.bind(null,"8cec"))},extends:b},ze=Ce,Te=Object(v["a"])(ze,Ie,Le,!1,null,null,null),Re=Te.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("place-autocomplete-field",{directives:[{name:"query",rawName:"v-query"},{name:"place-autofill",rawName:"v-place-autofill:street",value:e.form.street,expression:"form.street",arg:"street"},{name:"place-autofill",rawName:"v-place-autofill:city",value:e.form.city,expression:"form.city",arg:"city"},{name:"place-autofill",rawName:"v-place-autofill:state",value:e.form.state,expression:"form.state",arg:"state"},{name:"place-autofill",rawName:"v-place-autofill:zip",value:e.form.zip,expression:"form.zip",arg:"zip"}],attrs:{id:"street",name:"street","api-key":e.mapApiKey,errors:e.errors,label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,custom:""},on:{input:e.updated},model:{value:e.form.street,callback:function(t){e.$set(e.form,"street",t)},expression:"form.street"}})},Ge=[],Me=n("add3"),Ue=n("8541"),Ke={name:"SurveyStreetField",components:{PlaceAutocompleteField:()=>n.e("vue-place-autocomplete").then(n.bind(null,"c182"))},directives:{PlaceAutofill:Ue["a"]},extends:b,mixins:[Me["a"]],computed:{apiKey(){return Object({NODE_ENV:"production",VUE_APP_BUGSNAG_KEY_:"e66068bbbefd6ad235c13b0c178480da",VUE_APP_GOOGLE_MAPS_KEY_:"AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU",BASE_URL:""}).VUE_APP_GOOGLE_MAPS_KEY}}},Ve=Ke,De=Object(v["a"])(Ve,Be,Ge,!1,null,null,null),He=De.exports,Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:e.question.id,label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),name:e.name,required:e.question.required,errors:e.errors,custom:""},on:{input:e.updated},model:{value:e.form[e.name],callback:function(t){e.$set(e.form,e.name,t)},expression:"form[name]"}})},Qe=[],Ze={name:"SurveyTextareaField",components:{TextareaField:()=>n.e("vue-interface").then(n.bind(null,"31e0"))},extends:b},Je=Ze,We=Object(v["a"])(Je,Ye,Qe,!1,null,null,null),Xe=We.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input-field",{directives:[{name:"query",rawName:"v-query"}],attrs:{id:"zip",label:e.question.question+(e.question.required?"*":""),placeholder:e.question.question+(e.question.required?"*":""),required:e.question.required,errors:e.errors,name:"zip",maxlength:"9",x_autocompletetype:"postal-code",custom:""},on:{input:e.updated},model:{value:e.form.zip,callback:function(t){e.$set(e.form,"zip",t)},expression:"form.zip"}})},tt=[],nt={name:"SurveyZipField",components:{InputField:()=>n.e("vue-interface").then(n.bind(null,"46d8"))},extends:b},it=nt,rt=Object(v["a"])(it,et,tt,!1,null,null,null),at=rt.exports;const ot={1:"RadioField",2:"CheckboxField",3:"InputField",4:"TextareaField",10:"AltEmailField",11:"AltPhoneField",17:"SelectField",18:"DollarAmountField",first:"FirstField",last:"LastField",email:"PrimaryEmailField",phone:"PrimaryPhoneField",street:"StreetField",city:"CityField",state:"StateField",zip:"ZipField"};var st={name:"PageTypeSurvey",components:{AltEmailField:x,AltPhoneField:O,CheckboxField:N,CityField:R,DollarAmountField:V,FirstField:J,InputField:ie,LastField:le,PrimaryEmailField:ve,PrimaryPhoneField:xe,RadioField:Oe,SelectField:Ne,StateField:Re,StreetField:He,TextareaField:Xe,ZipField:at,BtnActivity:()=>n.e("vue-interface").then(n.bind(null,"9863"))},extends:s["a"],methods:{component(e){return ot[e]||e}}},ut=st,lt=Object(v["a"])(ut,a,o,!1,null,null,null);t["default"]=lt.exports}}]);
//# sourceMappingURL=survey-type.4e7176f9.js.map