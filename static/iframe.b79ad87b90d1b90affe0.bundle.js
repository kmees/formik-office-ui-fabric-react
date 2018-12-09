(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return getErrorMessage}),__webpack_require__.d(__webpack_exports__,"c",function(){return invokeAll}),__webpack_require__.d(__webpack_exports__,"a",function(){return createFakeEvent});var formik__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7);function getErrorMessage(_a){var field=_a.field,form=_a.form,error=Object(formik__WEBPACK_IMPORTED_MODULE_0__.e)(form.errors,field.name);return Object(formik__WEBPACK_IMPORTED_MODULE_0__.e)(form.touched,field.name)?error:void 0}function invokeAll(){for(var callbacks=[],_i=0;_i<arguments.length;_i++)callbacks[_i]=arguments[_i];return function(){for(var _i=0,callbacks_1=callbacks;_i<callbacks_1.length;_i++){var callback=callbacks_1[_i];callback&&"function"==typeof callback&&callback()}}}function createFakeEvent(_a){return{target:{name:_a.name}}}},25:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return StoryForm});var formik__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(886),office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(881),office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(485),office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(887),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),StoryForm=Object(formik__WEBPACK_IMPORTED_MODULE_0__.d)(function(_a){var title=_a.title,children=_a.children,formik=_a.formik;return react__WEBPACK_IMPORTED_MODULE_6__.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__.a,{style:{maxWidth:"480px",padding:"0px 18px"}},react__WEBPACK_IMPORTED_MODULE_6__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.b,null,title&&react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1",{className:office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__.d.xLarge},title),children,react__WEBPACK_IMPORTED_MODULE_6__.createElement("footer",{style:{marginTop:"2em"}},react__WEBPACK_IMPORTED_MODULE_6__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6__.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:formik.submitForm,disabled:formik.isSubmitting},"Submit"),"   ",react__WEBPACK_IMPORTED_MODULE_6__.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:formik.resetForm.bind(formik,null),disabled:formik.isSubmitting||!formik.dirty},"Reset")),formik.isSubmitting?react__WEBPACK_IMPORTED_MODULE_6__.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__.a,null):react__WEBPACK_IMPORTED_MODULE_6__.createElement("hr",{style:{marginTop:"9px",marginBottom:"7px"}}),react__WEBPACK_IMPORTED_MODULE_6__.createElement("pre",{style:{fontFamily:"Consolas, monospace",whiteSpace:"pre-wrap",width:"100%",marginTop:"0"}},JSON.stringify({values:formik.values,dirty:formik.dirty,touched:formik.touched},null,2)))))})},26:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return handleSubmit});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(150);function handleSubmit(values,_a){var setSubmitting=_a.setSubmitting;Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("submit:start")(values),setTimeout(function(){setSubmitting(!1),Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("submit:done")()},2e3)}},571:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(1),formik_esm=__webpack_require__(7),Label=__webpack_require__(930),react=__webpack_require__(0),PeoplePicker=__webpack_require__(920),utils=__webpack_require__(23);function mapFieldToPeoplePicker(_a){var form=_a.form,field=_a.field;return{selectedItems:field.value,onBlur:function(){return field.onBlur(Object(utils.a)(field))},onChange:function(items){return form.setFieldValue(field.name,items)}}}function FormikNormalPeoplePicker(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]);return react.createElement(PeoplePicker.c,tslib_es6.a({},props,mapFieldToPeoplePicker({field:field,form:form})))}function FormikCompactPeoplePicker(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]);return react.createElement(PeoplePicker.a,tslib_es6.a({},props,mapFieldToPeoplePicker({field:field,form:form})))}function FormikListPeoplePicker(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]);return react.createElement(PeoplePicker.b,tslib_es6.a({},props,mapFieldToPeoplePicker({field:field,form:form})))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikPeoplePickerStory});var Values=function(){return function(){this.normal=[],this.compact=[],this.list=[]}}(),handleResolveSuggestions=function(filter){return[{text:"Foo Bar",secondaryText:"foo@bar.com"},{text:"Jane Doe",secondaryText:"jane@doe.com"},{text:"John Doe",secondaryText:"john@doe.com"},{text:"Kevin Mees",secondaryText:"kev.mees@gmail.com"}].filter(function(x){return x.text!==filter&&x.secondaryText!==filter})},FormikPeoplePickerStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a},react.createElement(StoryForm.a,{title:"People Pickers"},react.createElement(Label.a,null,"NormalPeoplePicker"),react.createElement(formik_esm.a,{name:"normal",render:function(fieldProps){return react.createElement(FormikNormalPeoplePicker,tslib_es6.a({},fieldProps,{onResolveSuggestions:handleResolveSuggestions}))}}),react.createElement(Label.a,null,"CompactPeoplePicker"),react.createElement(formik_esm.a,{name:"compact",render:function(fieldProps){return react.createElement(FormikCompactPeoplePicker,tslib_es6.a({},fieldProps,{onResolveSuggestions:handleResolveSuggestions}))}}),react.createElement(Label.a,null,"ListPeoplePicker"),react.createElement(formik_esm.a,{name:"list",render:function(fieldProps){return react.createElement(FormikListPeoplePicker,tslib_es6.a({},fieldProps,{onResolveSuggestions:handleResolveSuggestions}))}})))}},572:function(module,__webpack_exports__,__webpack_require__){"use strict";var formik_esm=__webpack_require__(7),react=__webpack_require__(0),tslib_es6=__webpack_require__(1),Slider=__webpack_require__(933),utils=__webpack_require__(23);function FormikSlider(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]);return react.createElement(Slider.a,tslib_es6.a({},props,function(_a){var form=_a.form,field=_a.field;return{value:field.value,onChange:function(value){form.setFieldValue(field.name,value)},onChanged:function(){return field.onBlur(Object(utils.a)(field))}}}({field:field,form:form})))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikSliderStory});var Values=function(){return function(){this.count=5}}(),FormikSliderStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a},react.createElement(StoryForm.a,{title:"Count"},react.createElement(formik_esm.a,{name:"count",label:"Slider",component:FormikSlider})))}},573:function(module,__webpack_exports__,__webpack_require__){"use strict";var formik_esm=__webpack_require__(7),react=__webpack_require__(0),tslib_es6=__webpack_require__(1),TextField=__webpack_require__(569),MaskedTextField=__webpack_require__(932),utils=__webpack_require__(23);function mapFieldToTextField(_a){var form=_a.form,field=_a.field;return tslib_es6.a({},field,{errorMessage:Object(utils.b)({form:form,field:field})})}function FormikTextField(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]),_b=mapFieldToTextField({field:field,form:form}),errorMessage=_b.errorMessage,fieldProps=tslib_es6.d(_b,["errorMessage"]);return react.createElement(TextField.a,tslib_es6.a({errorMessage:errorMessage},props,fieldProps))}function FormikMaskedTextField(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]),_b=function(_a){var form=_a.form,field=_a.field;return tslib_es6.a({},mapFieldToTextField({form:form,field:field}),{onChange:function(_,value){return form.setFieldValue(field.name,value)}})}({field:field,form:form}),errorMessage=_b.errorMessage,fieldProps=tslib_es6.d(_b,["errorMessage"]);return react.createElement(MaskedTextField.a,tslib_es6.a({errorMessage:errorMessage},props,fieldProps))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikTextFieldStory});var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Values=function(){return function(){this.email="",this.name="",this.phone=""}}(),validate=function(values){var errors={};return values.name||(errors.name="name is required"),emailRegex.test(values.email)||(errors.email="not a valid email"),errors},FormikTextFieldStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a,validate:validate},react.createElement(StoryForm.a,{title:"Text Field"},react.createElement(formik_esm.a,{name:"name",label:"Name",required:!0,component:FormikTextField}),react.createElement(formik_esm.a,{name:"email",label:"Email",type:"email",component:FormikTextField}),react.createElement(formik_esm.a,{name:"phone",label:"Phone",mask:"(999) 999 - 9999",component:FormikMaskedTextField})))}},574:function(module,__webpack_exports__,__webpack_require__){"use strict";var formik_esm=__webpack_require__(7),react=__webpack_require__(0),tslib_es6=__webpack_require__(1),Toggle=__webpack_require__(929),utils=__webpack_require__(23);function FormikToggle(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]);return react.createElement(Toggle.a,tslib_es6.a({},props,function(_a){var form=_a.form,field=_a.field;return{onChange:function(_,checked){form.setFieldValue(field.name,checked),field.onBlur(Object(utils.a)(field))},checked:field.value}}({field:field,form:form})))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikToggleStory});var Values=function(){return function(){this.isToggled=!1}}(),FormikToggleStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a},react.createElement(StoryForm.a,{title:"Toggle"},react.createElement(formik_esm.a,{name:"isToggled",label:"Toggle",onText:"yay",offText:"nay",component:FormikToggle})))}},575:function(module,__webpack_exports__,__webpack_require__){"use strict";var formik_esm=__webpack_require__(7),react=__webpack_require__(0),tslib_es6=__webpack_require__(1),Rating=__webpack_require__(927),utils=__webpack_require__(23);function FormikRating(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]);return react.createElement(Rating.a,tslib_es6.a({},props,function(_a){var form=_a.form,field=_a.field;return{value:field.value,onChange:function(_,value){form.setFieldValue(field.name,value),field.onBlur(Object(utils.a)(field))}}}({field:field,form:form})))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikRatingStory});var Values=function(){return function(){this.rating=5}}(),FormikRatingStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a},react.createElement(StoryForm.a,{title:"Rating"},react.createElement(formik_esm.a,{name:"rating",label:"Rating",component:FormikRating})))}},576:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(1),formik_esm=__webpack_require__(7),react=__webpack_require__(0),Dropdown=__webpack_require__(922),utils=__webpack_require__(23);function FormikDropdown(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]),_b=function(_a){var form=_a.form,field=_a.field,multiSelect=Array.isArray(field.value),onBlur=form.handleBlur(field.name),shared={errorMessage:Object(utils.b)({field:field,form:form}),onDismiss:function(){return onBlur(Object(utils.a)(field))}};return multiSelect?tslib_es6.a({},shared,{selectedKeys:field.value,onChange:function(_,option){var value=field.value;if(option.selected)form.setFieldValue(field.name,value.concat([option.key]));else{var idx=field.value.indexOf(option.key);-1!==idx&&form.setFieldValue(field.name,value.slice(0,idx).concat(value.slice(idx+1)))}}}):tslib_es6.a({},shared,{selectedKey:field.value,onChange:function(_,option){form.setFieldValue(field.name,option.key)}})}({field:field,form:form}),errorMessage=_b.errorMessage,onDismiss=_b.onDismiss,fieldProps=tslib_es6.d(_b,["errorMessage","onDismiss"]);return react.createElement(Dropdown.a,tslib_es6.a({errorMessage:errorMessage},props,{onDismiss:Object(utils.c)(onDismiss,props.onDismiss)},fieldProps))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikDropdownStory});var Values=function(){return function(){this.single="",this.multi=["bar"]}}(),options=[{key:"",text:""},{key:"foo",text:"Foo"},{key:"bar",text:"Bar"},{key:"qux",text:"Qux"},{key:"gorge",text:"Gorge"}],validate=function(values){var errors={};values.single||(errors.single="required"),(!values.multi||values.multi.length<2)&&(errors.multi="pick at least 2")},FormikDropdownStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a,validate:validate},react.createElement(StoryForm.a,{title:"Dropdown"},react.createElement(formik_esm.a,{name:"single",render:function(fieldProps){return react.createElement(FormikDropdown,tslib_es6.a({label:"Single",required:!0},fieldProps,{options:options}))}}),react.createElement(formik_esm.a,{name:"multi",render:function(fieldProps){return react.createElement(FormikDropdown,tslib_es6.a({label:"Multi",multiSelect:!0},fieldProps,{options:options.slice(1)}))}})))}},577:function(module,__webpack_exports__,__webpack_require__){"use strict";var formik_esm=__webpack_require__(7),react=__webpack_require__(0),tslib_es6=__webpack_require__(1),DatePicker=__webpack_require__(921),utils=__webpack_require__(23);function FormikDatePicker(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]),_b=function(_a){var form=_a.form,field=_a.field,onBlur=form.handleBlur(field.name);return{value:field.value,onAfterMenuDismiss:function(){return onBlur(Object(utils.a)(field))},onSelectDate:function(date){return form.setFieldValue(field.name,date)}}}({field:field,form:form}),onAfterMenuDismiss=_b.onAfterMenuDismiss,fieldProps=tslib_es6.d(_b,["onAfterMenuDismiss"]);return react.createElement(DatePicker.a,tslib_es6.a({},props,{onAfterMenuDismiss:Object(utils.c)(onAfterMenuDismiss,props.onAfterMenuDismiss)},fieldProps))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikDatePickerStory});var Values=function(){return function(){this.date=new Date}}(),FormikDatePickerStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a},react.createElement(StoryForm.a,{title:"Date Picker"},react.createElement(formik_esm.a,{name:"date",label:"Date",component:FormikDatePicker})))}},578:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(1),formik_esm=__webpack_require__(7),react=__webpack_require__(0),ChoiceGroup=__webpack_require__(924),utils=__webpack_require__(23);function FormikChoiceGroup(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]);return react.createElement(ChoiceGroup.a,tslib_es6.a({},props,function(_a){var form=_a.form,field=_a.field;return{name:field.name,selectedKey:field.value,onChange:function(_,option){form.setFieldValue(field.name,option?option.key:null),field.onBlur(Object(utils.a)(field))}}}({field:field,form:form})))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikChoiceGroupStory});var Values=function(){return function(){this.winner=""}}(),FormikChoiceGroupStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a},react.createElement(StoryForm.a,{title:"ChoiceGroup"},react.createElement(formik_esm.a,{name:"winner",render:function(fieldProps){return react.createElement(FormikChoiceGroup,tslib_es6.a({label:"Pick a winner",options:[{key:"foo",text:"Foo"},{key:"bar",text:"Bar"},{key:"baz",text:"Baz"},{key:"qux",text:"Qux"}]},fieldProps))}})))}},579:function(module,__webpack_exports__,__webpack_require__){"use strict";var formik_esm=__webpack_require__(7),react=__webpack_require__(0),tslib_es6=__webpack_require__(1),Checkbox=__webpack_require__(934),utils=__webpack_require__(23);function FormikCheckbox(_a){var field=_a.field,form=_a.form,props=tslib_es6.d(_a,["field","form"]);return react.createElement(Checkbox.a,tslib_es6.a({},props,function(_a){var form=_a.form,_b=_a.field,value=_b.value,onBlur=(_b.onChange,_b.onBlur),field=tslib_es6.d(_b,["value","onChange","onBlur"]);return tslib_es6.a({},field,{onChange:function(_,checked){form.setFieldValue(field.name,checked),onBlur(Object(utils.a)(field))},checked:value})}({field:field,form:form})))}var StoryForm=__webpack_require__(25),stories_utils=__webpack_require__(26);__webpack_require__.d(__webpack_exports__,"a",function(){return FormikCheckboxStory});var Values=function(){return function(){this.isChecked=!1}}(),FormikCheckboxStory=function(){return react.createElement(formik_esm.c,{initialValues:new Values,onSubmit:stories_utils.a},react.createElement(StoryForm.a,{title:"Checkbox"},react.createElement(formik_esm.a,{name:"isChecked",label:"Checkbox",component:FormikCheckbox})))}},586:function(module,exports,__webpack_require__){__webpack_require__(238),__webpack_require__(587),module.exports=__webpack_require__(588)},588:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(231);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(601)},module)}.call(this,__webpack_require__(337)(module))},601:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(0);var office_ui_fabric_react_lib_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(885),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(231),_FormikCheckbox_story__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(579),_FormikChoiceGroup_story__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(578),_FormikDatePicker_story__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(577),_FormikDropdown_story__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(576),_FormikPeoplePicker_story__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(571),_FormikRating_story__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(575),_FormikSlider_story__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(572),_FormikTextField_story__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(573),_FormikToggle_story__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(574);Object(office_ui_fabric_react_lib_Icons__WEBPACK_IMPORTED_MODULE_1__.a)(),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("formik-office-ui-fabric-react",module).add("FormikCheckbox",_FormikCheckbox_story__WEBPACK_IMPORTED_MODULE_3__.a).add("FormikChoiceGroup",_FormikChoiceGroup_story__WEBPACK_IMPORTED_MODULE_4__.a).add("FormikDatePicker",_FormikDatePicker_story__WEBPACK_IMPORTED_MODULE_5__.a).add("FormikDropdown",_FormikDropdown_story__WEBPACK_IMPORTED_MODULE_6__.a).add("FormikPeoplePicker",_FormikPeoplePicker_story__WEBPACK_IMPORTED_MODULE_7__.a).add("FormikRating",_FormikRating_story__WEBPACK_IMPORTED_MODULE_8__.a).add("FormikSlider",_FormikSlider_story__WEBPACK_IMPORTED_MODULE_9__.a).add("FormikTextField",_FormikTextField_story__WEBPACK_IMPORTED_MODULE_10__.a).add("FormikToggle",_FormikToggle_story__WEBPACK_IMPORTED_MODULE_11__.a)}.call(this,__webpack_require__(337)(module))}},[[586,2,4]]]);
//# sourceMappingURL=iframe.b79ad87b90d1b90affe0.bundle.js.map