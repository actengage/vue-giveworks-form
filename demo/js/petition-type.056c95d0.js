(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["petition-type"],{4053:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("contact-info-fieldset",{attrs:{legends:!1,form:t.form,errors:t.errors,page:t.page}}),t.shouldShowEmployment?i("employment-info-fieldset",{attrs:{legends:!1,form:t.form,errors:t.errors,page:t.page}}):t._e(),t.page.options.add_comment?i("textarea-field",{directives:[{name:"autogrow",rawName:"v-autogrow"}],attrs:{id:"comment",label:t.commentMessage},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}}):t._e(),i("btn-activity",{attrs:{size:"lg",type:"submit",orientation:"right",block:!0,activity:t.submitting,label:t.buttonLabel||t.page.site.config.giveworks.button.petition}}),t.page.options.add_optin?i("checkbox-field",{attrs:{label:t.optinMessage,value:"1",custom:""}}):t._e()],1)},n=[],o=i("b791"),r={name:"page-type-petition",extends:o["a"],components:{CheckboxField:()=>i.e("vue-interface").then(i.bind(null,"e067")),BtnActivity:()=>i.e("vue-interface").then(i.bind(null,"9863")),TextareaField:()=>i.e("vue-interface").then(i.bind(null,"31e0")),ContactInfoFieldset:()=>i.e("contact-info-fieldset").then(i.bind(null,"e3c2")),EmploymentInfoFieldset:()=>i.e("employment-info-fieldset").then(i.bind(null,"33e3"))}},u=r,a=i("2877"),m=Object(a["a"])(u,s,n,!1,null,null,null);e["default"]=m.exports},b236:function(t,e,i){"use strict";var s=i("ca14");const n=["submit","redirect","submit-enable","submit-disable","submit-show","submit-hide"];e["a"]={directives:{bindEvents:{bind(t,e,i){const o=i.context,r=i.child||i.context;for(const u in n)r.$on(n[u],(...t)=>{const e=Object(s["a"])("on-"+n[u]);r!==o&&o.$emit(n[u],...t),o[e]&&o[e](...t)})}}}}},b791:function(t,e,i){"use strict";var s=i("850f"),n=i("b236"),o=i("ca14");e["a"]={props:{source:[String,Number],redirect:[Boolean,String],page:{type:Object,required:!0}},mixins:[n["a"]],computed:{buttonLabel(){return this.page.options.button},shouldShowEmployment(){return"PAC"===this.page.site.type||"Campaign"===this.page.site.type}},methods:{submitButton(){return this.$refs.submit||this.$el.querySelector("[type=submit]")},hideSubmitButton(){this.submitButton().style.display="none"},showSubmitButton(){this.submitButton().style.display="block"},disableSubmitButton(){this.submitButton().disabled=!0},enableSubmitButton(){this.submitButton().disabled=!1},handleRedirect(t){setTimeout(()=>{t=t||this.redirect||this.page.external_reply||(this.page.next_page?this.page.next_page.url:void 0),t&&(window.location=t)})},submit(t,e){return this.$el.querySelector(":focus")&&this.$el.querySelector(":focus").blur(),new Promise((i,s)=>{this.submitting?s(new Error("The form is already submitting")):(this.errors={},this.submitting=!0,this.$emit("submit"),this.model.save(this.form,{method:"post"}).then(e=>{this.submitting=!1,this.$emit("submit-complete",!0,e),this.$emit("submit-success",e),Object(o["i"])(t)&&t(e),i(e)},t=>{this.submitting=!1,this.errors=t.data.errors,this.$emit("submit-complete",!0,t),this.$emit("submit-success",t),Object(o["i"])(e)&&e(t),s(t)}))})},onSubmitSuccess(){this.handleRedirect()},onSubmitError(t){throw t}},data(){const t=this.page.site.recurring&&this.page.options.recurring_only?1:0;return{form:{source:this.source,recurring:t},errors:{},submitting:!1,model:new s["a"]({id:this.page.id})}}}}}]);
//# sourceMappingURL=petition-type.056c95d0.js.map