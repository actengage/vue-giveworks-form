(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup-type"],{"0dce":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i(t.page.options.service.split("\\").pop(),{tag:"component",attrs:{submitting:t.submitting,page:t.page,form:t.form,errors:t.errors}})],1)},n=[],r=i("b791"),o={name:"page-type-signup",extends:r["a"],components:{GoToWebinar:i.e("go-to-webinar").then(i.bind(null,"4898"))}},u=o,a=i("2877"),m=Object(a["a"])(u,s,n,!1,null,null,null);e["default"]=m.exports},b236:function(t,e,i){"use strict";var s=i("ca14");const n=["submit","redirect","submit-enable","submit-disable","submit-show","submit-hide"];e["a"]={directives:{bindEvents:{bind(t,e,i){const r=i.context,o=i.child||i.context;for(const u in n)o.$on(n[u],(...t)=>{const e=Object(s["a"])("on-"+n[u]);o!==r&&r.$emit(n[u],...t),r[e]&&r[e](...t)})}}}}},b791:function(t,e,i){"use strict";var s=i("850f"),n=i("b236"),r=i("ca14");e["a"]={props:{source:[String,Number],redirect:[Boolean,String],page:{type:Object,required:!0}},mixins:[n["a"]],computed:{buttonLabel(){return this.page.options.button},shouldShowEmployment(){return"PAC"===this.page.site.type||"Campaign"===this.page.site.type}},methods:{submitButton(){return this.$refs.submit?this.$refs.submit.$el:this.$el.querySelector("[type=submit]")},hideSubmitButton(){this.submitButton().style.display="none"},showSubmitButton(){this.submitButton().style.display="block"},disableSubmitButton(){this.submitButton().disabled=!0},enableSubmitButton(){this.submitButton().disabled=!1},handleRedirect(t){setTimeout(()=>{t=t||this.redirect||this.page.external_reply||(this.page.next_page?this.page.next_page.url:void 0),t&&(window.location=t)})},submit(t,e){return this.$el.querySelector(":focus")&&this.$el.querySelector(":focus").blur(),new Promise((i,s)=>{this.submitting?s(new Error("The form is already submitting")):(this.errors={},this.submitting=!0,this.$emit("submit"),this.model.save(this.form,{method:"post"}).then(e=>{this.submitting=!1,this.$emit("submit-complete",!0,e),this.$emit("submit-success",e),Object(r["i"])(t)&&t(e),i(e)},t=>{this.submitting=!1,this.errors=t.data.errors,this.$emit("submit-complete",!0,t),this.$emit("submit-success",t),Object(r["i"])(e)&&e(t),s(t)}))})},onSubmitSuccess(){this.handleRedirect()},onSubmitError(t){throw t}},mounted(){this.loaded=!0},data(){const t=this.page.site.recurring&&this.page.options.recurring_only?1:0;return{form:{source:this.source,recurring:t},errors:{},loaded:!1,submitting:!1,model:new s["a"]({id:this.page.id})}}}}}]);
//# sourceMappingURL=signup-type.44e6bb65.js.map