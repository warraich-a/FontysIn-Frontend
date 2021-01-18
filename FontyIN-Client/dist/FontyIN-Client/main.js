(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Rawan\Fontys\Courses\Year 2\Project\fontysin-semester-3-client\FontyIN-Client\src\main.ts */"zUnb");


/***/ }),

/***/ "0UgC":
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "EnSQ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "qfBg");






class MessageService extends _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] {
    constructor(http, userService) {
        super('http://localhost:9090/users/' + userService.getUserIdOfLoggedIn() + '/messages', http);
        this.userService = userService;
        this.info = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('information');
    }
    getId() {
        let id = this.userService.getUserIdOfLoggedIn();
        return id;
    }
    //delete conversation in messaging page
    deleteConversation(userId, conversationId) {
        return this.http.delete('http://localhost:9090/users/1/messages/user/' + this.getId() + '/conversation/' + conversationId);
    }
    //start new conversation with new contact
    startConversation(data) {
        return this.http.post('http://localhost:9090/users/1/messages/newConversation/', data).toPromise().then(data => {
            console.log("In the message service: " + data);
        });
    }
    // Used to refresh both parent and child componenets
    getInfo() {
        return this.info.asObservable();
    }
    getInfoValue() {
        return this.info.getValue();
    }
    setInfo(value) {
        this.info.next(value);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "1VeS":
/*!************************************************************************!*\
  !*** ./src/app/update-profile-about/update-profile-about.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateProfileAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileAboutComponent", function() { return UpdateProfileAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_Profile_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Profile/About */ "eqYL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class UpdateProfileAboutComponent {
    constructor(service, dialogRef, data) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.notification = null;
        this.about = new _classes_Profile_About__WEBPACK_IMPORTED_MODULE_1__["About"](1, 1, "hello");
    }
    ngOnInit() {
        console.log(this.data.about.id);
        this.id = this.data.about.id;
        this.service.GetOneAbout(this.id)
            .subscribe((data) => {
            console.log(data);
            this.about = data;
        });
    }
    updateAbout() {
        this.service.updateAbout(this.about, this.id).subscribe((res) => {
            console.log("updated");
        });
        this.dialogRef.close();
    }
}
UpdateProfileAboutComponent.ɵfac = function UpdateProfileAboutComponent_Factory(t) { return new (t || UpdateProfileAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
UpdateProfileAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateProfileAboutComponent, selectors: [["app-update-profile-about"]], decls: 15, vars: 2, consts: [[1, "container", "h-100", "d-flex", "justify-content-center"], [3, "ngSubmit"], ["AboutForm", "ngForm"], [1, "d-flex", "justify-content-between", "align-items-center", "experience"], [1, "text-right"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "labels"], ["type", "text", "id", "content", "required", "", "name", "content", 1, "form-control", 3, "ngModel", "ngModelChange"], ["content", "ngModel"], [1, "mt-5", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "profile-button", 3, "disabled"]], template: function UpdateProfileAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateProfileAboutComponent_Template_form_ngSubmit_1_listener() { return ctx.updateAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileAboutComponent_Template_input_ngModelChange_10_listener($event) { return ctx.about.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.about.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS1hYm91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-profile-about',
                templateUrl: './update-profile-about.component.html',
                styleUrls: ['./update-profile-about.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "2Jbh":
/*!****************************************!*\
  !*** ./src/app/post/post.validator.ts ***!
  \****************************************/
/*! exports provided: PostValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostValidator", function() { return PostValidator; });
class PostValidator {
    static cannotContainSpace(control) {
        if (control.value.replace(/\s/g, "").length == 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
}


/***/ }),

/***/ "2f1s":
/*!**********************************************************!*\
  !*** ./src/app/user-settings/user-settings.component.ts ***!
  \**********************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_Profile_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Profile/User */ "egqR");
/* harmony import */ var _classes_Profile_Privacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Profile/Privacy */ "4K+k");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UserSettingsComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const types_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", types_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", types_r5.type, " ");
} }
function UserSettingsComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const types_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", types_r6.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", types_r6.type, " ");
} }
function UserSettingsComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const types_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", types_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", types_r7.type, " ");
} }
function UserSettingsComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r4.notificationP.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.notificationP.message, " ");
} }
class Setting {
}
class UserSettingsComponent {
    constructor(service) {
        this.service = service;
        this.privacySetting = [
            { type: 'EVERYONE' }, { type: 'CONNECTIONS' }, { type: 'ONLYME' }
        ];
        this.notificationP = null;
        this.isChecked = true;
        this.user = new _classes_Profile_User__WEBPACK_IMPORTED_MODULE_1__["User"](3);
        this.privacy = new _classes_Profile_Privacy__WEBPACK_IMPORTED_MODULE_2__["privacy"](1, 1, "", "", "", false);
    }
    ngOnInit() {
        this.id = localStorage.getItem('userId');
        this.service.GetOnePrivacy()
            .subscribe((data) => {
            console.log(data);
            this.privacy = data;
            if (this.privacy.hideFromSearch) {
                this.isChecked = false;
            }
            else {
                this.isChecked = true;
            }
        });
    }
    showNotificationP() {
        this.notificationP = { class: 'text-primary', message: 'updated!' };
    }
    updatePrivacy() {
        this.hideEverything();
        console.log(this.privacy);
        this.service.updatePrivacy(this.privacy).subscribe((res) => {
            this.showNotificationP();
        });
    }
    hideEverything() {
        if (this.isChecked) {
            this.privacy.hideFromSearch = false;
        }
        else {
            this.privacy.hideFromSearch = true;
        }
    }
}
UserSettingsComponent.ɵfac = function UserSettingsComponent_Factory(t) { return new (t || UserSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"])); };
UserSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSettingsComponent, selectors: [["app-user-settings"]], decls: 43, vars: 8, consts: [[1, "container", "p-0"], [1, "h3", "mb-3"], [1, "row"], [1, "col-md-5", "col-xl-4"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], ["role", "tablist", 1, "list-group", "list-group-flush"], ["data-toggle", "list", "href", "#privacy", "role", "tab", 1, "list-group-item", "list-group-item-action", "active"], [1, "col-md-7", "col-xl-8"], [1, "tab-content"], ["id", "privacy", "role", "tabpanel", 1, "tab-pane", "active"], [1, "mt-5", "text-center"], [1, "card-actions", "float-right"], [1, "card-body"], [3, "ngModel", "ngModelChange"], [3, "ngSubmit"], ["PrivacyForm", "ngForm"], [1, "labels"], ["id", "experienceSetting", "name", "experienceSetting", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "educationSetting", "name", "educationSetting", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "skillSetting", "name", "skillSetting", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "profile-button"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [3, "value"], [1, "elementToFadeInAndOut"]], template: function UserSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Privacy and safety ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-slide-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_mat_slide_toggle_ngModelChange_22_listener($event) { return ctx.isChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Show me in search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserSettingsComponent_Template_form_ngSubmit_24_listener() { return ctx.updatePrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Who can see my experience?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_select_ngModelChange_28_listener($event) { return ctx.privacy.experienceSetting = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserSettingsComponent_option_29_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Who can see my education?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_select_ngModelChange_32_listener($event) { return ctx.privacy.educationSetting = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserSettingsComponent_option_33_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Who can see my skills?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_select_ngModelChange_36_listener($event) { return ctx.privacy.skillSetting = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserSettingsComponent_option_37_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Save Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UserSettingsComponent_span_42_Template, 3, 4, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.privacy.experienceSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.privacySetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.privacy.educationSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.privacySetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.privacy.skillSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.privacySetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationP);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top:20px;\r\n    background:#F0F8FF;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: 0 1px 15px 1px rgba(52,40,104,.08);\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid #e5e9f2;\r\n    border-radius: .2rem;\r\n}\r\n.card-header[_ngcontent-%COMP%]:first-child {\r\n    border-radius: calc(.2rem - 1px) calc(.2rem - 1px) 0 0;\r\n}\r\n.card-header[_ngcontent-%COMP%] {\r\n    border-bottom-width: 1px;\r\n}\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: .75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    color: inherit;\r\n    background-color: #fff;\r\n    border-bottom: 1px solid #e5e9f2;\r\n}\r\nspan[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGtCQUFrQjtJQUVsQixhQUFhO0lBRWIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InVzZXItc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiNGMEY4RkY7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiYSg1Miw0MCwxMDQsLjA4KTtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTlmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG59XHJcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKC4ycmVtIC0gMXB4KSBjYWxjKC4ycmVtIC0gMXB4KSAwIDA7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxufVxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU5ZjI7XHJcbn1cclxuc3BhbiArIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-settings',
                templateUrl: './user-settings.component.html',
                styleUrls: ['./user-settings.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 2, vars: 0, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3ug3":
/*!*********************************************************!*\
  !*** ./src/app/errors/forbidden/forbidden.component.ts ***!
  \*********************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) { return new (t || ForbiddenComponent)(); };
ForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenComponent, selectors: [["app-forbidden"]], decls: 15, vars: 0, consts: [[1, "illustration"], [1, "gandalf-body"], [1, "gandalf-moustache"], [1, "gandalf-beard"], [1, "gandalf-feet"], [1, "gandalf-hand-left"], [1, "gandalf-hand-right"], [1, "sword"], [1, "spear"], [1, "spear-head"], [1, "message"]], template: function ForbiddenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You Shall Not Pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "403 Forbidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import \"https://fonts.googleapis.com/css?family=Aladin\";\r\n\r\n.illustration[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%,-50%);\r\n\twidth: 500px;\r\n\theight: 500px;\r\n}\r\n\r\n.gandalf-body[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%,-50%);\r\n\twidth: 300px;\r\n\theight: 350px;\r\n\t-webkit-clip-path: polygon(48% 0%, 38% 20%, 19% 21%, 37% 25%, 39% 35%, 36% 39%, 9% 34%, 13% 61%, 36% 50%, 27% 90%, 69% 89%, 57% 49%, 77% 58%, 85% 34%, 58% 40%, 54% 34%, 56% 25%, 69% 23%, 55% 20%);\r\n\tclip-path: polygon(48% 0%, 38% 20%, 19% 21%, 37% 25%, 39% 35%, 36% 39%, 9% 34%, 13% 61%, 36% 50%, 27% 90%, 69% 89%, 57% 49%, 77% 58%, 85% 34%, 58% 40%, 54% 34%, 56% 25%, 69% 23%, 55% 20%);\r\n\tbackground: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.95) 100%), radial-gradient(at center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.80) 120%) #989898; \r\n\tbackground-blend-mode: multiply,multiply;\r\n}\r\n\r\n.gandalf-moustache[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 35%;\r\n\tleft: 48%;\r\n\ttransform: translate(-50%,-50%);\r\n\twidth: 50px;\r\n\theight: 30px;\r\n\tbackground: #fff;\r\n\t-webkit-clip-path: polygon(42% 6%, 19% 18%, 27% 18%, 10% 30%, 43% 20%, 78% 27%, 59% 15%, 68% 16%);\r\n\tclip-path: polygon(42% 6%, 19% 18%, 27% 18%, 10% 30%, 43% 20%, 78% 27%, 59% 15%, 68% 16%);\r\n}\r\n\r\n.gandalf-beard[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 41.5%;\r\n\tleft: 48%;\r\n\ttransform: translate(-50%,-50%);\r\n\twidth: 55px;\r\n\theight: 80px;\r\n\tbackground: #fff;\r\n\t-webkit-clip-path: polygon(32% 13%, 43% 23%, 54% 11%, 63% 10%, 77% 43%, 69% 36%, 72% 58%, 68% 72%, 65% 59%, 63% 88%, 60% 80%, 49% 98%, 31% 80%, 29% 88%, 28% 58%, 25% 73%, 19% 42%, 13% 52%, 24% 13%);\r\n\tclip-path: polygon(32% 13%, 43% 23%, 54% 11%, 63% 10%, 77% 43%, 69% 36%, 72% 58%, 68% 72%, 65% 59%, 63% 88%, 60% 80%, 49% 98%, 31% 80%, 29% 88%, 28% 58%, 25% 73%, 19% 42%, 13% 52%, 24% 13%);\r\n}\r\n\r\n.gandalf-feet[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 76%;\r\n\tleft: 40%;\r\n\twidth: 15px;\r\n\theight: 0;\r\n\tborder-right: 10px solid transparent;\r\n\tborder-left: 10px solid transparent;\r\n\tborder-top: 10px solid transparent;\r\n\tborder-bottom: 10px solid black;\r\n\t\r\n}\r\n\r\n.gandalf-feet[_ngcontent-%COMP%]::after{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 350%;\r\n\ttransform: translate(275%,-67%);\r\n\twidth: 15px;\r\n\theight: 10px;\r\n\tborder-right: 10px solid transparent;\r\n\tborder-left: 10px solid transparent;\r\n\tborder-top: 10px solid transparent;\r\n\tborder-bottom: 10px solid black;\r\n}\r\n\r\n.gandalf-hand-left[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 39%;\r\n\tleft: 20%;\r\n\ttransform: rotate(-5deg);\r\n\twidth: 60px;\r\n\theight:80px;\r\n\tbackground: linear-gradient(to left, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.95) 70%);\r\n\t-webkit-clip-path: polygon(47% 28%, 36% 20%, 22% 19%, 23% 55%, 38% 54%, 48% 44%);\r\n\tclip-path: polygon(47% 28%, 36% 20%, 22% 19%, 23% 55%, 38% 54%, 48% 44%);\r\n}\r\n\r\n.gandalf-hand-right[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 33%;\r\n\tleft: 64.5%;\r\n\ttransform: rotate(-164deg);\r\n\twidth: 60px;\r\n\theight:80px;\r\n\tbackground: linear-gradient(to left, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.95) 70%);\r\n\t-webkit-clip-path: polygon(47% 28%, 36% 20%, 22% 19%, 23% 55%, 38% 54%, 48% 44%);\r\n\tclip-path: polygon(47% 28%, 36% 20%, 22% 19%, 23% 55%, 38% 54%, 48% 44%);\r\n}\r\n\r\n.sword[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 10.9%;\r\n\tleft: 75.7%;\r\n\ttransform: rotate(194deg);\r\n\twidth: 0px;\r\n\theight: 0px;\r\n\tborder-top: 150px solid black;\r\n\tborder-left: 5px solid transparent;\r\n\tborder-right: 5px solid transparent;\r\n}\r\n\r\n.spear[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 26%;\r\n\tleft: 24.5%;\r\n\ttransform: rotate(-8deg);\r\n\twidth: 5px;\r\n\theight: 270px;\r\n\tbackground: black;\r\n}\r\n\r\n.spear-head[_ngcontent-%COMP%]{\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tbackground: black;\r\n\tposition: absolute;\r\n\ttop: 22%;\r\n\tleft: 17.2%;\r\n\ttransform: rotate(-6deg);\r\n\t-webkit-clip-path: polygon(15% 0, 25% 8%, 30% 30%, 48% 30%, 53% 8%, 61% 0, 51% 32%, 28% 32%);\r\n\tclip-path: polygon(15% 0, 25% 8%, 30% 30%, 48% 30%, 53% 8%, 61% 0, 51% 32%, 28% 32%);\r\n}\r\n\r\n.message[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\ttop: 80%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%,0);\r\n\twhite-space: nowrap;\r\n\tfont-family: \"Aladin\";\r\n\tmargin: 10% auto;\r\n}\r\n\r\n.message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\tfont-size: 4em;\r\n\tletter-spacing: 0.1em;\r\n\tfont-family: \"Aladin\";\r\n}\r\n\r\n.message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tfont-size: 2.5em;\r\n\tletter-spacing: 0.1em;\r\n\ttext-align: center;\r\n\tmargin: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmJpZGRlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDs7QUFFeEQ7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCwrQkFBK0I7Q0FDL0IsWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULCtCQUErQjtDQUMvQixZQUFZO0NBQ1osYUFBYTtDQUNiLG1NQUFtTTtDQUNuTSwyTEFBMkw7Q0FDM0wsOEtBQThLO0NBQzlLLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULCtCQUErQjtDQUMvQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixpR0FBaUc7Q0FDakcseUZBQXlGO0FBQzFGOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixTQUFTO0NBQ1QsK0JBQStCO0NBQy9CLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHFNQUFxTTtDQUNyTSw2TEFBNkw7QUFDOUw7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsU0FBUztDQUNULG9DQUFvQztDQUNwQyxtQ0FBbUM7Q0FDbkMsa0NBQWtDO0NBQ2xDLCtCQUErQjs7QUFFaEM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDViwrQkFBK0I7Q0FDL0IsV0FBVztDQUNYLFlBQVk7Q0FDWixvQ0FBb0M7Q0FDcEMsbUNBQW1DO0NBQ25DLGtDQUFrQztDQUNsQywrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCx3QkFBd0I7Q0FDeEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxxRkFBcUY7Q0FDckYsZ0ZBQWdGO0NBQ2hGLHdFQUF3RTtBQUN6RTs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLDBCQUEwQjtDQUMxQixXQUFXO0NBQ1gsV0FBVztDQUNYLHFGQUFxRjtDQUNyRixnRkFBZ0Y7Q0FDaEYsd0VBQXdFO0FBQ3pFOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsNkJBQTZCO0NBQzdCLGtDQUFrQztDQUNsQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFdBQVc7Q0FDWCx3QkFBd0I7Q0FDeEIsVUFBVTtDQUNWLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFdBQVc7Q0FDWCx3QkFBd0I7Q0FDeEIsNEZBQTRGO0NBQzVGLG9GQUFvRjtBQUNyRjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULDRCQUE0QjtDQUM1QixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaIiwiZmlsZSI6ImZvcmJpZGRlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGFkaW5cIjtcclxuXHJcbi5pbGx1c3RyYXRpb257XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uZ2FuZGFsZi1ib2R5e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0aGVpZ2h0OiAzNTBweDtcclxuXHQtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig0OCUgMCUsIDM4JSAyMCUsIDE5JSAyMSUsIDM3JSAyNSUsIDM5JSAzNSUsIDM2JSAzOSUsIDklIDM0JSwgMTMlIDYxJSwgMzYlIDUwJSwgMjclIDkwJSwgNjklIDg5JSwgNTclIDQ5JSwgNzclIDU4JSwgODUlIDM0JSwgNTglIDQwJSwgNTQlIDM0JSwgNTYlIDI1JSwgNjklIDIzJSwgNTUlIDIwJSk7XHJcblx0Y2xpcC1wYXRoOiBwb2x5Z29uKDQ4JSAwJSwgMzglIDIwJSwgMTklIDIxJSwgMzclIDI1JSwgMzklIDM1JSwgMzYlIDM5JSwgOSUgMzQlLCAxMyUgNjElLCAzNiUgNTAlLCAyNyUgOTAlLCA2OSUgODklLCA1NyUgNDklLCA3NyUgNTglLCA4NSUgMzQlLCA1OCUgNDAlLCA1NCUgMzQlLCA1NiUgMjUlLCA2OSUgMjMlLCA1NSUgMjAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDAlLCByZ2JhKDAsMCwwLDAuOTUpIDEwMCUpLCByYWRpYWwtZ3JhZGllbnQoYXQgY2VudGVyLCByZ2JhKDI1NSwyNTUsMjU1LDAuNDApIDAlLCByZ2JhKDAsMCwwLDAuODApIDEyMCUpICM5ODk4OTg7IFxyXG5cdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHksbXVsdGlwbHk7XHJcbn1cclxuXHJcbi5nYW5kYWxmLW1vdXN0YWNoZXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAzNSU7XHJcblx0bGVmdDogNDglO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0LXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNDIlIDYlLCAxOSUgMTglLCAyNyUgMTglLCAxMCUgMzAlLCA0MyUgMjAlLCA3OCUgMjclLCA1OSUgMTUlLCA2OCUgMTYlKTtcclxuXHRjbGlwLXBhdGg6IHBvbHlnb24oNDIlIDYlLCAxOSUgMTglLCAyNyUgMTglLCAxMCUgMzAlLCA0MyUgMjAlLCA3OCUgMjclLCA1OSUgMTUlLCA2OCUgMTYlKTtcclxufVxyXG5cclxuLmdhbmRhbGYtYmVhcmR7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNDEuNSU7XHJcblx0bGVmdDogNDglO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblx0d2lkdGg6IDU1cHg7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0LXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMzIlIDEzJSwgNDMlIDIzJSwgNTQlIDExJSwgNjMlIDEwJSwgNzclIDQzJSwgNjklIDM2JSwgNzIlIDU4JSwgNjglIDcyJSwgNjUlIDU5JSwgNjMlIDg4JSwgNjAlIDgwJSwgNDklIDk4JSwgMzElIDgwJSwgMjklIDg4JSwgMjglIDU4JSwgMjUlIDczJSwgMTklIDQyJSwgMTMlIDUyJSwgMjQlIDEzJSk7XHJcblx0Y2xpcC1wYXRoOiBwb2x5Z29uKDMyJSAxMyUsIDQzJSAyMyUsIDU0JSAxMSUsIDYzJSAxMCUsIDc3JSA0MyUsIDY5JSAzNiUsIDcyJSA1OCUsIDY4JSA3MiUsIDY1JSA1OSUsIDYzJSA4OCUsIDYwJSA4MCUsIDQ5JSA5OCUsIDMxJSA4MCUsIDI5JSA4OCUsIDI4JSA1OCUsIDI1JSA3MyUsIDE5JSA0MiUsIDEzJSA1MiUsIDI0JSAxMyUpO1xyXG59XHJcblxyXG4uZ2FuZGFsZi1mZWV0e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDc2JTtcclxuXHRsZWZ0OiA0MCU7XHJcblx0d2lkdGg6IDE1cHg7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1ib3R0b206IDEwcHggc29saWQgYmxhY2s7XHJcblx0XHJcbn1cclxuXHJcbi5nYW5kYWxmLWZlZXQ6OmFmdGVye1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAzNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDI3NSUsLTY3JSk7XHJcblx0d2lkdGg6IDE1cHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1ib3R0b206IDEwcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5nYW5kYWxmLWhhbmQtbGVmdHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAzOSU7XHJcblx0bGVmdDogMjAlO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6ODBweDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSAwJSwgcmdiYSgwLDAsMCwwLjk1KSA3MCUpO1xyXG5cdC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDQ3JSAyOCUsIDM2JSAyMCUsIDIyJSAxOSUsIDIzJSA1NSUsIDM4JSA1NCUsIDQ4JSA0NCUpO1xyXG5cdGNsaXAtcGF0aDogcG9seWdvbig0NyUgMjglLCAzNiUgMjAlLCAyMiUgMTklLCAyMyUgNTUlLCAzOCUgNTQlLCA0OCUgNDQlKTtcclxufVxyXG5cclxuLmdhbmRhbGYtaGFuZC1yaWdodHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAzMyU7XHJcblx0bGVmdDogNjQuNSU7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTE2NGRlZyk7XHJcblx0d2lkdGg6IDYwcHg7XHJcblx0aGVpZ2h0OjgwcHg7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMCUsIHJnYmEoMCwwLDAsMC45NSkgNzAlKTtcclxuXHQtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig0NyUgMjglLCAzNiUgMjAlLCAyMiUgMTklLCAyMyUgNTUlLCAzOCUgNTQlLCA0OCUgNDQlKTtcclxuXHRjbGlwLXBhdGg6IHBvbHlnb24oNDclIDI4JSwgMzYlIDIwJSwgMjIlIDE5JSwgMjMlIDU1JSwgMzglIDU0JSwgNDglIDQ0JSk7XHJcbn1cclxuXHJcbi5zd29yZHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMC45JTtcclxuXHRsZWZ0OiA3NS43JTtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgxOTRkZWcpO1xyXG5cdHdpZHRoOiAwcHg7XHJcblx0aGVpZ2h0OiAwcHg7XHJcblx0Ym9yZGVyLXRvcDogMTUwcHggc29saWQgYmxhY2s7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNwZWFye1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDI2JTtcclxuXHRsZWZ0OiAyNC41JTtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcblx0d2lkdGg6IDVweDtcclxuXHRoZWlnaHQ6IDI3MHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uc3BlYXItaGVhZHtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0YmFja2dyb3VuZDogYmxhY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMjIlO1xyXG5cdGxlZnQ6IDE3LjIlO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcclxuXHQtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigxNSUgMCwgMjUlIDglLCAzMCUgMzAlLCA0OCUgMzAlLCA1MyUgOCUsIDYxJSAwLCA1MSUgMzIlLCAyOCUgMzIlKTtcclxuXHRjbGlwLXBhdGg6IHBvbHlnb24oMTUlIDAsIDI1JSA4JSwgMzAlIDMwJSwgNDglIDMwJSwgNTMlIDglLCA2MSUgMCwgNTElIDMyJSwgMjglIDMyJSk7XHJcbn1cclxuXHJcbi5tZXNzYWdle1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDgwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwwKTtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdGZvbnQtZmFtaWx5OiBcIkFsYWRpblwiO1xyXG5cdG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuXHJcbi5tZXNzYWdlIGgye1xyXG5cdGZvbnQtc2l6ZTogNGVtO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuXHRmb250LWZhbWlseTogXCJBbGFkaW5cIjtcclxufVxyXG5cclxuLm1lc3NhZ2UgcHtcclxuXHRmb250LXNpemU6IDIuNWVtO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAxMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forbidden',
                templateUrl: './forbidden.component.html',
                styleUrls: ['./forbidden.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4K+k":
/*!********************************************!*\
  !*** ./src/app/classes/Profile/Privacy.ts ***!
  \********************************************/
/*! exports provided: privacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privacy", function() { return privacy; });
class privacy {
    constructor(id, userId, educationSetting, experienceSetting, skillSetting, hideFromSearch) {
        this.id = id;
        this.userId = userId;
        this.educationSetting = educationSetting;
        this.experienceSetting = experienceSetting;
        this.skillSetting = skillSetting;
        this.hideFromSearch = hideFromSearch;
    }
}


/***/ }),

/***/ "4K/k":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_Profile_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Profile/User */ "egqR");
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
















function RegistrationComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Can only contain Alphabets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_12_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_12_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.pattern);
} }
function RegistrationComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Can only contain Alphabets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_16_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_16_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.pattern);
} }
function RegistrationComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r19.name, " ");
} }
function RegistrationComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r20.city, " ");
} }
function RegistrationComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r21.name, " ");
} }
function RegistrationComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_44_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_44_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_44_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.pattern);
} }
function RegistrationComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_48_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password & Confirm Password does not match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_48_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_48_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.errors.pattern);
} }
class RegistrationComponent {
    constructor(profileService, _snackBar, router, dialog, service) {
        this.profileService = profileService;
        this._snackBar = _snackBar;
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.jobType = [
            { name: "Teacher" },
            { name: "Student" },
            { name: "FontysStaff" }
        ];
        this.isLoginError = false;
        this.user = new _classes_Profile_User__WEBPACK_IMPORTED_MODULE_1__["User"](3);
    }
    inputValidator(event) {
        //console.log(event.target.value);
        const pattern = /^[a-zA-Z]*$/;
        //let inputChar = String.fromCharCode(event.charCode)
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
            // invalid character, prevent input
        }
    }
    onSubmitRegistration(data) {
        console.log(data);
        // this.newAddressToAdd = {
        //   "streetName": data.streetName,
        //   "houseNumber": data.houseNr,
        //   "city": data.city,
        //   "zipCode": data.zipcode
        // }
        // this.profileService.addAddress(<JSON>this.newAddressToAdd)
        //   .subscribe(
        // newAddress => {
        //   {
        this.newUser = {
            "departmentId": data.department,
            "email": data.email,
            "firstName": data.firstName,
            "img": "",
            "lastName": data.lastName,
            "locationId": data.fontysLocation,
            "password": data.password,
            "userNumber": data.userNumber,
            "userType": data.employementType
        };
        this.profileService.addNewUser(this.newUser).subscribe(response => {
            this._snackBar.open('Congratulations, You are now FontysIN user', 'End now', {
                duration: 2000,
            });
            // this.router.navigate(['']),
            this.foundUser = response;
            console.log(this.foundUser);
            this.login(data.email, data.password);
        }, (error) => {
            if (error.status === 409) {
                this._snackBar.open('This user already exists', 'End now', {
                    duration: 3000,
                });
            }
            else {
                this._snackBar.open('Wrong data provided', 'End now', {
                    duration: 3000,
                });
            }
        });
    }
    login(email, password) {
        this.token = btoa(email + ':' + password);
        this.service.login(email, password)
            .subscribe((res) => {
            console.log(this.token);
            this.user = res;
            localStorage.setItem('userToken', this.token);
            localStorage.setItem('userId', this.user.id.toString());
            // location.reload();
            console.log("testing loging -----------------");
            console.log(this.user);
            this.router.navigate(['posts']);
            window.location.href = '/posts';
            // this.delay();
        }, (error) => {
            if (error.status === 404) {
                console.log("not found");
                this.isLoginError = true;
            }
        });
    }
    ngOnInit() {
        this.profileService.getFontysLocations().subscribe(response => {
            this.fontysLocations = response;
            console.log(this.fontysLocations);
        });
        this.profileService.getFontysDepartments().subscribe(response => {
            this.departments = response;
            console.log(this.departments);
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 53, vars: 17, consts: [[1, "container"], [1, "text-center", 3, "ngSubmit"], ["userData", "ngForm"], [1, "row"], [1, "col"], [1, "input-full-width"], ["matInput", "", "required", "", "type", "text", "name", "firstName", "placeholder", "First Name", "pattern", "[a-zA-Z]+", "ng-pattern-restrict", "", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["required", "", "matInput", "", "type", "text", "name", "lastName", "placeholder", "Last Name", "pattern", "[a-zA-Z]+", "ng-pattern-restrict", "", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["required", "", "name", "employementType", "ngModel", ""], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", "name", "fontysLocation", "ngModel", ""], ["required", "", "name", "department", "ngModel", ""], ["required", "", "matInput", "", "type", "text", "name", "userNumber", "ngModel", "", "placeholder", "PCN"], ["required", "", "matInput", "", "type", "text", "name", "email", "placeholder", "Email", "pattern", "^\\w+([\\.-]?\\w+)*@([student|staff]+)*\\.([fontys]+)*\\.([nl]+)+$", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], [1, "form-group", "input-full-width"], ["matInput", "", "type", "password", "name", "password", "placeholder", "Password", "required", "", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["matInput", "", "type", "password", "name", "confirmpassword", "placeholder", "Confirm Password", "required", "", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["confirmpassword", "ngModel"], ["mdbBtn", "", "type", "submit", "rounded", "true", "id", "submitButton", 3, "disabled"], ["id", "link", "href", "#"], [1, "alert", "alert-danger"], [3, "value"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmitRegistration(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationComponent_div_12_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegistrationComponent_div_16_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegistrationComponent_mat_option_21_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fontys Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegistrationComponent_mat_option_26_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegistrationComponent_mat_option_31_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RegistrationComponent_div_39_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegistrationComponent_div_40_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RegistrationComponent_div_44_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.confirmpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RegistrationComponent_div_48_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Already a member??");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _r0.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r0.submitted || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _r0.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r0.submitted || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fontysLocations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _r0.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r8.valid || _r8.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && _r8.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && _r8.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _r0.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid && (_r0.submitted || _r11.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", _r11.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _r0.confirmpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.invalid && (_r0.submitted || _r13.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MdbBtnDirective"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.container-left[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 45%;\r\n}\r\n\r\n.container-right[_ngcontent-%COMP%] {\r\n  float: right;\r\n  width: 45%;\r\n}\r\n\r\n.input-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: aquamarine;\r\n  text-align: left;\r\n  float: left;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  border-radius: 2%;\r\n  background-color: white;\r\n  padding: 2%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  padding-top: 40px;\r\n  width: 1000px;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\r\n  text-align: center;\r\n  background-color: rgb(129, 127, 127);\r\n}\r\n\r\n#link[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n\r\n  padding: 15px;\r\n}\r\n\r\n#submitButton[_ngcontent-%COMP%] {\r\n  background-color: green;\r\n  padding-right: 60px;\r\n  padding-left: 60px;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n}\r\n\r\n  input.mat-input-element {\r\n  color: #623165;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: #623165 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-focused .mat-form-field-underline .mat-form-field-ripple {\r\n  background-color: white !important;\r\n}\r\n\r\n.footerBtns[_ngcontent-%COMP%] {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  background-color: #623165;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGtDQUFrQzs7QUFDbEM7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsc0NBQXNDOztBQUN0QztFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuLmNvbnRhaW5lci1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5pbnB1dC1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogYXF1YW1hcmluZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI2Zvcm1Db250ZW50IHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxMjcsIDEyNyk7XHJcbn1cclxuXHJcbiNsaW5rIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuI3N1Ym1pdEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY29sb3I6ICM2MjMxNjU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBsYWJlbCBjb2xvciBvbiBmb2N1c2VkICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogIzYyMzE2NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiB1bmRlcmxpbmUgYm9yZGVyIGNvbG9yIG9uIGZvY3VzZWQgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXJCdG5zIHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyMzE2NTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "4lpD":
/*!************************************************!*\
  !*** ./src/app/newsfeed/newsfeed.component.ts ***!
  \************************************************/
/*! exports provided: NewsfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedComponent", function() { return NewsfeedComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.validator */ "IcB3");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/posts.service */ "jwUf");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post/post.component */ "fQWx");











function NewsfeedComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsfeedComponent_div_24_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.closeImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewsfeedComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-post", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", p_r5.id)("post", p_r5);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class NewsfeedComponent {
    constructor(postService, profileService, formBuilder, userService) {
        this.postService = postService;
        this.profileService = profileService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            postText: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _post_validator__WEBPACK_IMPORTED_MODULE_2__["PostValidator"].cannotContainSpace]),
        });
        this.userID = this.userService.getUserIdOfLoggedIn();
        this.data = {};
    }
    createPost() {
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('profile').value);
        if (this.uploadForm.get('profile').value.name != null) {
            this.postService.uploadPicture(this.userId, formData).subscribe((data) => {
                this.postUrl = data;
                console.log("data");
                console.log(this.postUrl);
            });
            this.data = {
                "content": this.content,
                "id": 5,
                "userId": this.userID,
                "image": "assets/" + this.userId + this.uploadForm.get('profile').value.name
            };
        }
        else {
            this.data = {
                "content": this.content,
                "id": 5,
                "userId": this.userID,
                "image": ""
            };
        }
        this.postService.newPost(this.data);
        console.log(this.data);
        window.location.reload();
    }
    deletePost(id) {
        this.postService.deletePost(id);
        window.location.reload();
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            var reader = new FileReader();
            reader.onload = (event) => {
                this.postUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    lenImg() {
        var _a;
        if (((_a = this.postUrl) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    closeImg() {
        this.postUrl = "";
    }
    ngOnInit() {
        this.userId = parseInt(localStorage.getItem("userId"));
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
        this.postService.getNewsfeed(this.userID)
            .subscribe((data) => {
            console.log(data);
            this.allposts = data;
            console.log("posts");
            console.log(this.allposts);
        });
    }
}
NewsfeedComponent.ɵfac = function NewsfeedComponent_Factory(t) { return new (t || NewsfeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
NewsfeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsfeedComponent, selectors: [["app-newsfeed"]], decls: 34, vars: 10, consts: [[1, "container"], ["id", "creatPostBlock"], ["name", "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["placeholder", "Your awesome post...", "id", "newPostText", "formControlName", "postText", "required", "", 3, "ngModel", "ngClass", "ngModelChange"], [1, "invalid-feedback"], [1, "postBtn", 3, "disabled", "click"], [3, "formGroup"], ["type", "file", "name", "profile", 2, "display", "none", 3, "change"], ["selectPicture", ""], [1, "buttons"], ["type", "button", "rounded", "true", 1, "uploadBtn", 3, "click"], [2, "text-align", "center"], [4, "ngIf"], ["id", "post-image-select", 3, "src"], [4, "ngFor", "ngForOf"], [2, "float", "right", 3, "click"], [3, "id", "post"]], template: function NewsfeedComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewsfeedComponent_Template_form_ngSubmit_6_listener() { return ctx.form.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewsfeedComponent_Template_textarea_ngModelChange_8_listener($event) { return ctx.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "You need to write something first");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsfeedComponent_Template_button_click_13_listener() { return ctx.createPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewsfeedComponent_Template_input_change_17_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsfeedComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, NewsfeedComponent_div_24_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, NewsfeedComponent_div_33_Template, 2, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.content)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.form.get("postText").touched && ctx.form.get("postText").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lenImg());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.postUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allposts);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"]], styles: [".post-block[_ngcontent-%COMP%] {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    margin-bottom: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 4px -3px rgba(0,0,0,0.75);\r\n}\r\n\r\n.p-date[_ngcontent-%COMP%] {\r\n    float:right;\r\n    font-size: 14px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    resize: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n#newPostText[_ngcontent-%COMP%]{\r\n    min-width: 700px;\r\n    max-width: 700px;\r\n    min-height: 100px;\r\n    border-radius: 4px;\r\n}\r\n\r\n#creatPostBlock[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto \r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]{\r\n    height: 37px;\r\n    width: 125px;\r\n    background-color: #0075db;\r\n    color: white;\r\n    border: none;\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]:hover{\r\n    background-color: #47a9ff;\r\n}\r\n\r\n.uploadBtn[_ngcontent-%COMP%]{\r\n    height: 36px;\r\n    width: 36px;\r\n    background-color: #f7f7f7;\r\n    background-image: url(\"camera.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    color: black;\r\n    border:none;\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n.deleteBtn[_ngcontent-%COMP%]{\r\n    float:right;\r\n    border:none;\r\n    height: 15px;\r\n    width: 15px;\r\n    background-image: url('x-mark.png');\r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover;\r\n    margin: 3px;\r\n    \r\n}\r\n\r\n.editBtn[_ngcontent-%COMP%]{\r\n    float:right;\r\n    border:none;\r\n    height: 15px;\r\n    width: 15px;\r\n    background-image: url('edit.png');\r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover;\r\n    margin: 3px;\r\n}\r\n\r\n.comment-block[_ngcontent-%COMP%]{\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n    margin-top: 35px;\r\n}\r\n\r\n#post-image-select[_ngcontent-%COMP%]{\r\n    max-width: 500px;\r\n    min-width: 300px;\r\n    width: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NmZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUdsQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFFRjtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQjtBQUNKOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUNBQStDO0lBQy9DLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFdBQVc7O0FBRWY7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQTZDO0lBQzdDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoibmV3c2ZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWJsb2NrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggNHB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA0cHggLTNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggLTNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcblxyXG4ucC1kYXRlIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgfVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNuZXdQb3N0VGV4dHtcclxuICAgIG1pbi13aWR0aDogNzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuI2NyZWF0UG9zdEJsb2Nre1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byBcclxufVxyXG4ucG9zdEJ0bntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ucG9zdEJ0bntcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc1ZGI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcbi5wb3N0QnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YTlmZjtcclxufVxyXG4udXBsb2FkQnRue1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiY2FtZXJhLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuLmRlbGV0ZUJ0bntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3Bvc3QvaW1nL3gtbWFyay5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBcclxufVxyXG4uZWRpdEJ0bntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3Bvc3QvaW1nL2VkaXQucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5jb21tZW50LWJsb2Nre1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG59XHJcbiNwb3N0LWltYWdlLXNlbGVjdHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsfeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-newsfeed',
                templateUrl: './newsfeed.component.html',
                styleUrls: ['./newsfeed.component.css']
            }]
    }], function () { return [{ type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }, { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "4rg4":
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NotFoundComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((data) => {
            this.path = data.path;
        });
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 12, vars: 0, consts: [[1, "face"], [1, "band"], [1, "red"], [1, "white"], [1, "blue"], [1, "eyes"], [1, "dimples"], [1, "mouth"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Oops! You are lost!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The page you are looking for does not exist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n\tbox-sizing: content-box;\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n .face[_ngcontent-%COMP%] {\r\n\twidth: 300px;\r\n\theight: 300px;\r\n\tborder: 4px solid #383a41;\r\n\tborder-radius: 10px;\r\n\tbackground-color: #fff;\r\n\tmargin: 10% auto 4%;\r\n}\r\n\r\n @media screen and (max-width: 400px) {\r\n\t.face[_ngcontent-%COMP%] {\r\n\t\tmargin-top: 40px;\r\n\t\ttransform: scale(0.8);\r\n\t}\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%] {\r\n\twidth: 350px;\r\n\theight: 27px;\r\n\tborder: 4px solid #383a41;\r\n\tborder-radius: 5px;\r\n\tmargin-left: -25px;\r\n\tmargin-top: 50px;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\r\n\theight: calc(100% / 3);\r\n\twidth: 100%;\r\n\tbackground-color: #eb6d6d;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\r\n\theight: calc(100% / 3);\r\n\twidth: 100%;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\r\n\theight: calc(100% / 3);\r\n\twidth: 100%;\r\n\tbackground-color: #5e7fdc;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\theight: 27px;\r\n\twidth: 30px;\r\n\tbackground-color: rgba(255, 255, 255, 0.3);\r\n\tposition: absolute;\r\n\tz-index: 999;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\theight: 27px;\r\n\twidth: 30px;\r\n\tbackground-color: rgba(56, 58, 65, 0.3);\r\n\tposition: absolute;\r\n\tz-index: 999;\r\n\tright: 0;\r\n\tmargin-top: -27px;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%] {\r\n\twidth: 128px;\r\n\tmargin: 0 auto;\r\n\tmargin-top: 40px;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\twidth: 30px;\r\n\theight: 15px;\r\n\tborder: 7px solid #383a41;\r\n\tmargin-right: 20px;\r\n\tborder-top-left-radius: 22px;\r\n\tborder-top-right-radius: 22px;\r\n\tborder-bottom: 0;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\twidth: 30px;\r\n\theight: 15px;\r\n\tborder: 7px solid #383a41;\r\n\tmargin-left: 20px;\r\n\tborder-top-left-radius: 22px;\r\n\tborder-top-right-radius: 22px;\r\n\tborder-bottom: 0;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .dimples[_ngcontent-%COMP%] {\r\n\twidth: 180px;\r\n\tmargin: 0 auto;\r\n\tmargin-top: 15px;\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .dimples[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin-right: 80px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: rgba(235, 109, 109, 0.4);\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .dimples[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin-left: 80px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: rgba(235, 109, 109, 0.4);\r\n}\r\n\r\n .face[_ngcontent-%COMP%]   .mouth[_ngcontent-%COMP%] {\r\n\twidth: 40px;\r\n\theight: 5px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: #383a41;\r\n\tmargin: 0 auto;\r\n\tmargin-top: 25px;\r\n}\r\n\r\n h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n\tcolor: #383a41;\r\n\ttext-align: center;\r\n}\r\n\r\n h1[_ngcontent-%COMP%] {\r\n\tfont-weight: 800;\r\n\tfont-size: 2.5em;\r\n\tpadding-top: 20px;\r\n}\r\n\r\n @media screen and (max-width: 400px) {\r\n\t h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n\t\tpadding-left: 20px;\r\n\t\tpadding-right: 20px;\r\n\t\tfont-size: 2em;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0NBQ0EsdUJBQXVCO0NBQ3ZCLCtCQUErQjtBQUNoQzs7Q0FFQztDQUNBLFlBQVk7Q0FDWixhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsbUJBQW1CO0FBQ3BCOztDQUVDO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0NBQ3RCO0FBQ0Q7O0NBRUM7Q0FDQSxZQUFZO0NBQ1osWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7Q0FFQztDQUNBLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gseUJBQXlCO0FBQzFCOztDQUVDO0NBQ0Esc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxzQkFBc0I7QUFDdkI7O0NBRUM7Q0FDQSxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLHlCQUF5QjtBQUMxQjs7Q0FFQztDQUNBLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLFdBQVc7Q0FDWCwwQ0FBMEM7Q0FDMUMsa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7Q0FFQztDQUNBLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLFdBQVc7Q0FDWCx1Q0FBdUM7Q0FDdkMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixRQUFRO0NBQ1IsaUJBQWlCO0FBQ2xCOztDQUVDO0NBQ0EsWUFBWTtDQUNaLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0NBRUM7Q0FDQSxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLGdCQUFnQjtBQUNqQjs7Q0FFQztDQUNBLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsV0FBVztDQUNYLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsZ0JBQWdCO0FBQ2pCOztDQUVDO0NBQ0EsWUFBWTtDQUNaLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0NBRUM7Q0FDQSxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQiwwQ0FBMEM7QUFDM0M7O0NBRUM7Q0FDQSxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQiwwQ0FBMEM7QUFDM0M7O0NBRUM7Q0FDQSxXQUFXO0NBQ1gsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7Q0FFQTtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7O0NBRUM7Q0FDQSxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7Q0FHQztFQUNDO0VBQ0Esa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0NBQ2Y7QUFDRCIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG5cclxuIC5mYWNlIHtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuXHRib3JkZXI6IDRweCBzb2xpZCAjMzgzYTQxO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRtYXJnaW46IDEwJSBhdXRvIDQlO1xyXG59XHJcblxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHQuZmFjZSB7XHJcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG5cdH1cclxufVxyXG5cclxuIC5mYWNlIC5iYW5kIHtcclxuXHR3aWR0aDogMzUwcHg7XHJcblx0aGVpZ2h0OiAyN3B4O1xyXG5cdGJvcmRlcjogNHB4IHNvbGlkICMzODNhNDE7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4gLmZhY2UgLmJhbmQgLnJlZCB7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMCUgLyAzKTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWI2ZDZkO1xyXG59XHJcblxyXG4gLmZhY2UgLmJhbmQgLndoaXRlIHtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwJSAvIDMpO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiAuZmFjZSAuYmFuZCAuYmx1ZSB7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMCUgLyAzKTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3ZmRjO1xyXG59XHJcblxyXG4gLmZhY2UgLmJhbmQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRoZWlnaHQ6IDI3cHg7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbiAuZmFjZSAuYmFuZDphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0aGVpZ2h0OiAyN3B4O1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU4LCA2NSwgMC4zKTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogOTk5O1xyXG5cdHJpZ2h0OiAwO1xyXG5cdG1hcmdpbi10b3A6IC0yN3B4O1xyXG59XHJcblxyXG4gLmZhY2UgLmV5ZXMge1xyXG5cdHdpZHRoOiAxMjhweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4gLmZhY2UgLmV5ZXM6YmVmb3JlIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0Ym9yZGVyOiA3cHggc29saWQgIzM4M2E0MTtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjJweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjJweDtcclxuXHRib3JkZXItYm90dG9tOiAwO1xyXG59XHJcblxyXG4gLmZhY2UgLmV5ZXM6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMTVweDtcclxuXHRib3JkZXI6IDdweCBzb2xpZCAjMzgzYTQxO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuIC5mYWNlIC5kaW1wbGVzIHtcclxuXHR3aWR0aDogMTgwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuIC5mYWNlIC5kaW1wbGVzOmJlZm9yZSB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogODBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDEwOSwgMTA5LCAwLjQpO1xyXG59XHJcblxyXG4gLmZhY2UgLmRpbXBsZXM6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHRtYXJnaW4tbGVmdDogODBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDEwOSwgMTA5LCAwLjQpO1xyXG59XHJcblxyXG4gLmZhY2UgLm1vdXRoIHtcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM4M2E0MTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG5oMSwgaDIge1xyXG5cdGNvbG9yOiAjMzgzYTQxO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIGgxIHtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG5cdGZvbnQtc2l6ZTogMi41ZW07XHJcblx0cGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHQgaDEsIGgyIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0XHRmb250LXNpemU6IDJlbTtcclxuXHR9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "6Kw5":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class DateAgoPipe {
    transform(value, args) {
        console.log("VALUE " + value);
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds > 86400) { // bigger than a day
                // value = 
                // value = new Date().toISOString().slice(0,10);
                // value = moment(value, "MM-DD-YYYY");
                value = moment__WEBPACK_IMPORTED_MODULE_1__(value).format('ll');
                return value;
            }
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateAgo',
                pure: true
            }]
    }], null, null); })();


/***/ }),

/***/ "6XdS":
/*!********************************************************************************!*\
  !*** ./src/app/profile/dialog-add-education/dialog-add-education.component.ts ***!
  \********************************************************************************/
/*! exports provided: DialogAddEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddEducationComponent", function() { return DialogAddEducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");













function DialogAddEducationComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r3.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r3.year, " ");
} }
function DialogAddEducationComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r4.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r4.year, " ");
} }
class DialogAddEducationComponent {
    constructor(profileService, dialogRef, data, _snackBar) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.educationToAdd = {};
        this.years = [
            { year: 2010 },
            { year: 2011 },
            { year: 2012 },
            { year: 2013 },
            { year: 2014 },
            { year: 2015 }
        ];
    }
    CloseDialog() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.userId = this.data.User.id;
        this.profileId = this.data.Profile;
        console.log(this.userId);
        console.log(this.profileId);
    }
    onSubmitEducation(data) {
        this.educationToAdd = {
            "degreeEducation": data.degreeEducation,
            "descriptionEducation": data.descriptionEducation,
            "endYearEducation": parseInt(data.startYearEducation),
            "fieldStudy": data.fieldStudy,
            "profileId": this.profileId,
            "school": data.school,
            "startYearEducation": parseInt(data.endYearEducation)
        };
        this.profileService.addEducation(this.educationToAdd, this.userId, this.profileId);
        this.CloseDialog();
    }
}
DialogAddEducationComponent.ɵfac = function DialogAddEducationComponent_Factory(t) { return new (t || DialogAddEducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
DialogAddEducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogAddEducationComponent, selectors: [["app-dialog-add-education"]], decls: 30, vars: 3, consts: [[1, "text-center", "border-silver", 3, "ngSubmit"], ["userEducation", "ngForm"], [1, "input-full-width"], ["required", "", "matInput", "", "type", "text", "name", "school", "ngModel", "", "placeholder", "School/University"], ["required", "", "name", "startYearEducation", "ngModel", ""], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", "name", "endYearEducation", "ngModel", ""], ["required", "", "matInput", "", "type", "text", "name", "degreeEducation", "ngModel", "", "placeholder", "Degree"], ["required", "", "matInput", "", "type", "text", "name", "fieldStudy", "ngModel", "", "placeholder", "Field"], ["required", "", "matInput", "", "type", "text", "name", "descriptionEducation", "ngModel", "", "placeholder", "ex: I have had a very good experience"], ["mdbBtn", "", "type", "submit", "rounded", "true", "id", "submitButton", "id", "submitButton", 3, "disabled"], ["mdbBtn", "", "type", "button", 1, "closeButton", 3, "click"], [3, "value"]], template: function DialogAddEducationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DialogAddEducationComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmitEducation(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Starting Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DialogAddEducationComponent_mat_option_10_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ending Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DialogAddEducationComponent_mat_option_15_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogAddEducationComponent_Template_button_click_28_listener() { return ctx.CloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MdbBtnDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYWRkLWVkdWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogAddEducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-add-education',
                templateUrl: './dialog-add-education.component.html',
                styleUrls: ['./dialog-add-education.component.css']
            }]
    }], function () { return [{ type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "8XhR":
/*!**************************************************!*\
  !*** ./src/app/services/errors/error.service.ts ***!
  \**************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorService {
    getClientMessage(error) {
        return error.message ? error.message : error.toString();
    }
    getServerMessage(error) {
        let message = `Error Code: ${error.status},  Message: ${error.error}`;
        return message;
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AJCd":
/*!**********************************************************************!*\
  !*** ./src/app/profile/add-information/add-information.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInformationComponent", function() { return AddInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.component */ "W6KJ");




class AddInformationComponent {
    constructor() {
        this.passedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // parentPosts: any[]=[];
        this.experienceToAdd = {};
    }
    ngOnInit() {
    }
    PassEvent() {
        this.passedEvent.emit();
        // console.log(this.passedEvent);
    }
    onSubmitExperience(data) {
        // this.passedEvent = data;
        // this.passedEvent.emit();
        console.log(data);
        this.experienceToAdd = {
            "company": data.company,
            "descriptionExperience": data.descriptionExperience,
            "employmentType": data.employementType,
            "endDateExperience": data.endDateExperience,
            "id": 43,
            "profileId": "",
            "locationId": data.locationId,
            "startDateExperience": data.startDateExperience,
            "title": data.title
        };
    }
}
AddInformationComponent.ɵfac = function AddInformationComponent_Factory(t) { return new (t || AddInformationComponent)(); };
AddInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddInformationComponent, selectors: [["app-add-information"]], outputs: { passedEvent: "passedEvent" }, decls: 67, vars: 1, consts: [["type", "button", "data-toggle", "modal", "data-target", "#myModal", "id", "buttonAdd", 1, "btn", "btn-primary"], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "text-center", "border", "border-silver", 3, "ngSubmit"], ["userExperience", "ngForm"], ["type", "text", "name", "company", "ngModel", "", "placeholder", "Company"], ["type", "text", "name", "title", "ngModel", "", "placeholder", "title"], ["type", "text", "name", "employementType", "ngModel", "", "placeholder", "title"], ["type", "text", "name", "locationId", "ngModel", "", "placeholder", "locationId"], ["type", "date", "name", "startDateExperience", "ngModel", "", "placeholder", "startDateExperience"], ["type", "date", "name", "endDateExperience", "ngModel", "", "placeholder", "endDateExperience"], ["type", "text", "name", "descriptionExperience", "ngModel", "", "placeholder", "descriptionExperience"], ["type", "submit", "id", "submitButton"], [3, "expToAdd"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"]], template: function AddInformationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-information works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddInformationComponent_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.onSubmitExperience(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Job Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Location Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Start Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " End Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-profile", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Modal body.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expToAdd", ctx.experienceToAdd);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-information',
                templateUrl: './add-information.component.html',
                styleUrls: ['./add-information.component.css']
            }]
    }], function () { return []; }, { passedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
// filter.pipe.ts


class FilterPipe {
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @returns {any[]}
     */
    transform(items, searchText) {
        let userId = parseInt(localStorage.getItem("userId"));
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toString().toLowerCase();
        console.log(searchText);
        return items.filter(it => {
            let user = it.user.id == userId ? it.friend : it.user;
            // if(loggedInUser)
            let fullName = user.firstName + ' ' + user.lastName;
            console.log(fullName);
            return fullName.toString().toLowerCase().indexOf(searchText) >= 0;
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appFilter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'appFilter' }]
    }], null, null); })();


/***/ }),

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _start_conversation_start_conversation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../start-conversation/start-conversation.component */ "ynSF");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/message/message.service */ "0UgC");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _directives_material_elevation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/material-elevation.directive */ "YAXs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");













const _c0 = ["scrollable"];
function MessagesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const conversation_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSelected(conversation_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Student at Fontys of Applied Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conversation_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.selectedIndex == i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.userId != conversation_r2.firstUser.id ? conversation_r2.firstUser.image : conversation_r2.secondUser.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.userId != conversation_r2.firstUser.id ? conversation_r2.firstUser.firstName + " " + conversation_r2.firstUser.lastName : conversation_r2.secondUser.firstName + " " + conversation_r2.secondUser.lastName, " ");
} }
const _c1 = function (a0, a1) { return { "desktop-view": a0, "mobile-view": a1 }; };
class MessagesComponent {
    // @ViewChild('scrollable') private scrollable: ElementRef;
    // private shouldScrollDown: boolean;
    constructor(messageService, userService, router, route, dialog) {
        this.messageService = messageService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.defaultElevation = 3;
        this.raisedElevation = 5;
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('below');
        this.disableScrollDown = false;
        this.selectedIndex = -1;
        this.userId = this.userService.getUserIdOfLoggedIn();
    }
    ngOnInit() {
        this.messageService.getInfo().subscribe(val => {
            console.log("Get information: " + val);
            this.getMessages();
        });
        this.getMessages();
    }
    getMessages() {
        this.messageService.getAll()
            .subscribe((data) => {
            this.conversations = data;
            // Show first conversation
            if (this.conversations.length > 0) {
                this.router.navigate([this.conversations[0].id], { relativeTo: this.route });
            }
        });
    }
    get width() {
        return window.innerWidth;
    }
    // When a conversation is selected
    onSelected(conversation, index) {
        this.selectedConversation = conversation;
        this.selectedIndex = index;
        // Redirect and pass the cselected conversation object
        this.router.navigate([conversation.id], { relativeTo: this.route });
    }
    // Start new Conversation Dialog
    openDialogStartConversation() {
        const dialogRef = this.dialog.open(_start_conversation_start_conversation_component__WEBPACK_IMPORTED_MODULE_2__["StartConversationComponent"], {
            maxWidth: '50%',
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.ngOnInit();
            // Show last conversation
            // this.router.navigate([this.conversations[this.conversations.length - 1].id], {relativeTo: this.route});
        });
    }
    // Scroll
    onScroll() {
        let element = this.scrollable.nativeElement;
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false;
        }
        else {
            this.disableScrollDown = true;
        }
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], viewQuery: function MessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollable = _t.first);
    } }, decls: 14, vars: 9, consts: [["appMaterialElevation", "", 1, "container", "border", "my-5", 3, "defaultElevation", "raisedElevation", "ngClass"], [1, "flex-container"], [1, "item"], ["id", "icons"], ["aria-hidden", "false", "aria-label", "Example chat icon", "matTooltip", "Chat with someone new", 3, "matTooltipPosition", "click"], [1, "heading-divider"], [1, "scroll-viewport", 3, "scroll"], ["scrollable", ""], [4, "ngFor", "ngForOf"], [3, "vertical"], [1, "selected-message"], [1, "messages", 3, "click"], ["onerror", "this.src='assets/placeholder.png'", 1, "conversation-img", 3, "src"], [1, "firend-desc", "message-item"], [1, "friend-name"], [1, "conversation-divider"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_Template_mat_icon_click_5_listener() { return ctx.openDialogStartConversation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MessagesComponent_Template_div_scroll_8_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessagesComponent_div_10_Template, 9, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultElevation", ctx.defaultElevation)("raisedElevation", ctx.raisedElevation)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.width >= 768, ctx.width < 768));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conversations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
    } }, directives: [_directives_material_elevation_directive__WEBPACK_IMPORTED_MODULE_7__["MaterialElevationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\r\n\twidth: 80%;\r\n    \r\n    background: white;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n    height: 85vh;\r\n}\r\n\r\n.item[_ngcontent-%COMP%], .selected-message[_ngcontent-%COMP%] {\r\n\tpadding: 3%;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n\twidth: 40%;\r\n}\r\n\r\n.selected-message[_ngcontent-%COMP%] {\r\n\twidth: 60%;\r\n\theight: inherit;\r\n}\r\n\r\n.scroll-viewport[_ngcontent-%COMP%] {\r\n    height: 87%;\r\n\twidth: 100%;\r\n    margin-bottom: 7%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#icons[_ngcontent-%COMP%] {\r\n\ttext-align: right;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin: auto 2%;\r\n    cursor: pointer;\r\n}\r\nmat-icon[_ngcontent-%COMP%]:hover {\r\n    color: #0075db;\r\n}\r\n\r\n  .mat-tooltip {\r\n    font-size: 0.8em;\r\n}\r\n\r\n.heading-divider[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    width: 80%;\r\n    margin: 4% 10%;\r\n}\r\n\r\n.conversation-img[_ngcontent-%COMP%] {\r\n    width: 84px;\r\n    margin: auto 4% auto 1%;\r\n    height: 62%;\r\n    border-radius: 50%;\r\n}\r\n.conversation-img[_ngcontent-%COMP%], .firend-desc[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.friend-name[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-weight: 580;\r\n    color: #252525;\r\n    margin-bottom: 2px;\r\n}\r\n.conversation-divider[_ngcontent-%COMP%] {\r\n    width: 87%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0NBQ0MsVUFBVTtJQUNQLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFHQSxtQkFBbUI7QUFDbkI7Q0FDQyxhQUFhO0NBQ2IsV0FBVztJQUNSLFlBQVk7QUFDaEI7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxXQUFXO0FBQ1o7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxVQUFVO0FBQ1g7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtBQUNoQjtBQUdBLFdBQVc7QUFDWDtJQUNJLFdBQVc7Q0FDZCxXQUFXO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUdBLDJEQUEyRDtBQUMzRDtDQUNDLGlCQUFpQjtBQUNsQjtBQUVBLFVBQVU7QUFDVjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLFlBQVk7QUFDWjtJQUNJLGdCQUFnQjtBQUNwQjtBQUdBLHlCQUF5QjtBQUN6QjtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuXHR3aWR0aDogODAlO1xyXG4gICAgLyogaGVpZ2h0OiA4NnZoOyAqL1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiBGbGV4IGNvbnRhaW5lciAqL1xyXG4uZmxleC1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbn1cclxuXHJcbi8qIEZsZXggaXRlbXMgKi9cclxuLml0ZW0sIC5zZWxlY3RlZC1tZXNzYWdlIHtcclxuXHRwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLyogaXRlbSwgbGVmdCAqL1xyXG4uaXRlbSB7XHJcblx0d2lkdGg6IDQwJTtcclxufVxyXG5cclxuLyogaXRlbSwgcmlnaHQgKi9cclxuLnNlbGVjdGVkLW1lc3NhZ2Uge1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0aGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLyogU2Nyb2xsICovXHJcbi5zY3JvbGwtdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiA4NyU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3JTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuXHJcbi8qIEljb25zIGNvbnRhaW5lciAoZGVsZXRlLCBzZW5kIGEgbWVzc2FnZSB0byBzb21lb25lIG5ldyAqL1xyXG4jaWNvbnMge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4vKiBpY29ucyAqL1xyXG5tYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogYXV0byAyJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWljb246aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDc1ZGI7XHJcbn1cclxuXHJcbi8qIHRvb2x0aXAgKi9cclxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG5cclxuLyogSGVhZGluZyBkaXZpZGVyL2xpbmUgKi9cclxuLmhlYWRpbmctZGl2aWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4vKiBMaXN0IG9mIGNoYXRzICovXHJcbi5tZXNzYWdlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDQlIDEwJTtcclxufVxyXG5cclxuLyogZnJpZW5kJ3MgaW1hZ2UgKi9cclxuLmNvbnZlcnNhdGlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDg0cHg7XHJcbiAgICBtYXJnaW46IGF1dG8gNCUgYXV0byAxJTtcclxuICAgIGhlaWdodDogNjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWltZywgLmZpcmVuZC1kZXNjIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogZnJpZW5kJ3MgbmFtZSAqL1xyXG4uZnJpZW5kLW5hbWUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDU4MDtcclxuICAgIGNvbG9yOiAjMjUyNTI1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWRpdmlkZXIge1xyXG4gICAgd2lkdGg6IDg3JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.css']
            }]
    }], function () { return [{ type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { scrollable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollable']
        }] }); })();


/***/ }),

/***/ "DslI":
/*!******************************************************!*\
  !*** ./src/app/update-post/update-post.component.ts ***!
  \******************************************************/
/*! exports provided: UpdatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostComponent", function() { return UpdatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/posts.service */ "jwUf");




class UpdatePostComponent {
    constructor(route, routes, postService) {
        this.route = route;
        this.routes = routes;
        this.postService = postService;
        this.postId = 0;
        this.data = {};
    }
    saveVal(item) {
        this.newContent = item.target.value;
    }
    updatePost() {
        this.data = {
            "content": this.newContent,
            "date": this.post.date,
            "id": this.postId,
            "userId": localStorage.getItem("userId")
        };
        this.postService.updatePost(this.data, this.postId);
        this.routes.navigate(['/posts']);
    }
    ngOnInit() {
        this.postId = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log(this.postId);
        this.postService.getPost(this.postId)
            .subscribe((data) => {
            console.log(data);
            this.post = data;
        });
    }
}
UpdatePostComponent.ɵfac = function UpdatePostComponent_Factory(t) { return new (t || UpdatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
UpdatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePostComponent, selectors: [["app-update-post"]], decls: 11, vars: 1, consts: [[1, "container"], ["id", "creatPostBlock"], ["placeholder", "Your awesome post...", "id", "newPostText", 3, "keyup"], ["newContent", ""], [1, "postBtn", 3, "click"]], template: function UpdatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UpdatePostComponent_Template_textarea_keyup_3_listener($event) { return ctx.saveVal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePostComponent_Template_button_click_7_listener() { return ctx.updatePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.content);
    } }, styles: [".post-block[_ngcontent-%COMP%] {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    margin-bottom: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 4px -3px rgba(0,0,0,0.75);\r\n}\r\n\r\n.p-date[_ngcontent-%COMP%] {\r\n    float:right;\r\n    font-size: 14px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    resize: none;\r\n  }\r\n\r\n#newPostText[_ngcontent-%COMP%]{\r\n    min-width: 700px;\r\n    max-width: 700px;\r\n    min-height: 100px;\r\n    border-radius: 4px;\r\n}\r\n\r\n#creatPostBlock[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto \r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]{\r\n    height: 37px;\r\n    width: 125px;\r\n    background-color: #0075db;\r\n    color: white;\r\n    border: none;\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]:hover{\r\n    background-color: #47a9ff;\r\n}\r\n\r\n.deleteBtn[_ngcontent-%COMP%]{\r\n    float:right;\r\n    border:none;\r\n    background-color: #f5f5f5;\r\n    font-size: 13px;\r\n    transition-duration: 0.3s;\r\n}\r\n\r\n.deleteBtn[_ngcontent-%COMP%]:hover{\r\n    color:#663366 ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUdsQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJ1cGRhdGUtcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA0cHggLTNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDRweCAtM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAtM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuXHJcbi5wLWRhdGUge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICB9XHJcblxyXG4jbmV3UG9zdFRleHR7XHJcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiNjcmVhdFBvc3RCbG9ja3tcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gXHJcbn1cclxuLnBvc3RCdG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnBvc3RCdG57XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NWRiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxufVxyXG4ucG9zdEJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2E5ZmY7XHJcbn1cclxuLmRlbGV0ZUJ0bntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxufVxyXG4uZGVsZXRlQnRuOmhvdmVye1xyXG4gICAgY29sb3I6IzY2MzM2NiA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-post',
                templateUrl: './update-post.component.html',
                styleUrls: ['./update-post.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }]; }, null); })();


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class DataService {
    constructor(url, http) {
        this.url = url;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.http = http;
        this.readLocalStorageValue();
        console.log("http option in data service " + this.httpOptions);
    }
    readLocalStorageValue() {
        if (localStorage.getItem("userToken") != null) {
            this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem("userToken"));
        }
        ;
    }
    getAll() {
        console.log("Get all contacts " + this.url);
        console.log(this.httpOptions);
        return this.http.get(this.url, this.httpOptions)
            .pipe(
        // transform this response object to an array of js objects
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    get(id) {
        return this.http.get(this.url + "/" + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    create(resource) {
        console.log(resource);
        return this.http.post(this.url, JSON.stringify(resource), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    delete(id) {
        return this.http.delete(this.url + '/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
}
DataService.ɵfac = function DataService_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FFgP":
/*!********************************************************!*\
  !*** ./src/app/filter-users/filter-users.component.ts ***!
  \********************************************************/
/*! exports provided: FilterUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUsersComponent", function() { return FilterUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/filter/filter.service */ "rkyv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");

















function FilterUsersComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterUsersComponent_mat_option_32_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.getUsersByStudyYear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r5.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r5.viewValue, " ");
} }
function FilterUsersComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterUsersComponent_mat_option_40_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.getUsersByWorkYear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r8.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r8.viewValue, " ");
} }
function FilterUsersComponent_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterUsersComponent_mat_option_48_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.getUsersByLocation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r11.viewValue, " ");
} }
function FilterUsersComponent_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterUsersComponent_mat_option_56_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.getUsersByDepartment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", d_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r14.viewValue, " ");
} }
const _c0 = function (a1, a3) { return ["/users", a1, "profiles", a3]; };
function FilterUsersComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fontys University of Applied Sciences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, user_r17.id, user_r17.profileId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r17.firstName, " ", user_r17.lastName, "");
} }
class FilterUsersComponent {
    constructor(filterService, route) {
        this.filterService = filterService;
        this.route = route;
        this.years = [
            { value: '1996-1', viewValue: '1996' },
            { value: '1997-2', viewValue: '1997' },
            { value: '1998-3', viewValue: '1998' },
            { value: '1999-4', viewValue: '1999' },
            { value: '2000-5', viewValue: '2000' },
            { value: '2001-6', viewValue: '2001' },
            { value: '2002-7', viewValue: '2002' },
            { value: '2003-8', viewValue: '2003' },
            { value: '2004-9', viewValue: '2004' },
            { value: '2005-10', viewValue: '2005' },
            { value: '2006-11', viewValue: '2006' },
            { value: '2007-12', viewValue: '2007' },
            { value: '2008-13', viewValue: '2008' },
            { value: '2009-14', viewValue: '2009' },
            { value: '2010-15', viewValue: '2010' },
            { value: '2011-16', viewValue: '2011' },
            { value: '2012-17', viewValue: '2012' },
            { value: '2013-18', viewValue: '2013' },
            { value: '2014-19', viewValue: '2014' },
            { value: '2015-20', viewValue: '2015' },
            { value: '2016-21', viewValue: '2016' },
            { value: '2017-22', viewValue: '2017' },
            { value: '2018-23', viewValue: '2018' },
            { value: '2019-24', viewValue: '2019' },
            { value: '2020-25', viewValue: '2020' }
        ];
        this.departments = [
            { value: '1', viewValue: 'ICT' },
            { value: '2', viewValue: 'Pedagogy' },
            { value: '3', viewValue: 'Buisness' },
            { value: '4', viewValue: 'Economy' }
        ];
        this.locations = [
            { value: '1', viewValue: 'Eindhoven' },
            { value: '2', viewValue: 'Venlo' },
            { value: '3', viewValue: 'Tilburg' }
        ];
        this.loggedInUser = 3;
        this.searchText = '';
        this.StudentDisabled = false;
        this.EmployeeDisabled = false;
    }
    ngOnInit() {
    }
    combinedFilter() {
        console.log(this.searchText);
        if (this.TypeSelection != null && this.syearSelection != null && this.locationSelection != null && this.departmentSelection != null) {
            console.log("Student Year");
            this.filterService.filterUsersByTypeLocationDepartmentStudyYear(this.TypeSelection, this.syearSelection, this.locationSelection, this.departmentSelection).subscribe((data) => {
                this.users = data;
                console.log(this.users);
            });
        }
        else if (this.TypeSelection != null && this.wyearSelection != null && this.locationSelection != null && this.departmentSelection != null) {
            console.log("Employee Year");
            this.filterService.filterUsersByTypeLocationDepartmentWorkYearFontysStaff(this.TypeSelection, this.wyearSelection, this.locationSelection, this.departmentSelection).subscribe((data) => {
                this.users = data;
                console.log(this.users);
            });
        }
        else if (this.searchText != null && this.TypeSelection != null && this.locationSelection != null && this.departmentSelection != null) {
            console.log("using search box in combining the search");
            this.filterService.filterUsersByTypeLocationDepartmentName(this.searchText, this.locationSelection, this.departmentSelection, this.TypeSelection).subscribe((data) => {
                this.users = data;
                console.log(this.users);
            });
        }
        else if (this.TypeSelection != null && this.locationSelection != null && this.departmentSelection != null) {
            console.log("Users wothout year");
            this.filterService.filterUsersByTypeLocationDepartment(this.TypeSelection, this.locationSelection, this.departmentSelection).subscribe((data) => {
                this.users = data;
                console.log(this.users);
            });
        }
    }
    getUsersByFirstNameChars() {
        if (this.searchText != null) {
            this.filterService.filterUsersByName(this.searchText).subscribe((data) => {
                this.users = data;
                console.log(this.users);
            });
        }
    }
    getUsersByType() {
        if (this.TypeSelection == "Student") {
            this.filterService.filterByUserType(this.TypeSelection).subscribe((data) => {
                this.users = data;
                this.StudentDisabled = true;
                this.EmployeeDisabled = false;
                console.log(this.users);
            });
        }
        else {
            this.filterService.filterByUserType(this.TypeSelection).subscribe((data) => {
                this.users = data;
                this.StudentDisabled = false;
                this.EmployeeDisabled = true;
                console.log(this.users);
            });
        }
    }
    getUsersByStudyYear() {
        this.filterService.filterUsersByStartStudyYear(this.syearSelection).subscribe((data) => {
            this.users = data;
            console.log(this.users);
        });
    }
    getUsersByWorkYear() {
        this.filterService.filterUsersByStartWorkYear(this.wyearSelection).subscribe((data) => {
            this.users = data;
            console.log(this.users);
        });
    }
    getUsersByLocation() {
        this.filterService.filterUserByLocation(this.locationSelection).subscribe((data) => {
            this.users = data;
            console.log(this.users);
        });
    }
    getUsersByDepartment() {
        this.filterService.filterUserByDepartment(this.departmentSelection).subscribe((data) => {
            this.users = data;
            console.log(this.users);
        });
    }
    ClearFilters() {
        window.location.reload();
    }
    foundDataByUserType() {
        return this.TypeSelection;
    }
    foundDataByYear() {
        return this.syearSelection;
    }
    foundDataByDepartment() {
        return this.departmentSelection;
    }
    foundDataByLocation() {
        return this.locationSelection;
    }
    foundDataByStartWorkYear() {
        return this.wyearSelection;
    }
    foundDataByInput() {
        return this.searchText;
    }
}
FilterUsersComponent.ɵfac = function FilterUsersComponent_Factory(t) { return new (t || FilterUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
FilterUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterUsersComponent, selectors: [["app-filter-users"]], decls: 76, vars: 13, consts: [[1, "container"], [1, "row"], [1, "col-sm"], [1, "filter-card"], ["mat-icon-button", "", "ria-label", "", 1, "float-right", 3, "click"], ["matTooltip", "Clear filters"], ["aria-label", "Select an option", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "filter", "value", "Student"], ["type", "radio", "name", "filter", "value", "Teacher"], ["type", "radio", "name", "filter", "value", "FontysStaff"], ["appearance", "fill"], ["ng-model", "", 3, "disabled", "ngModel", "ngModelChange"], ["name", "filter", 3, "value", "click", 4, "ngFor", "ngForOf"], ["ng-model", "", 3, "ngModel", "ngModelChange"], [1, "actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "found-card"], [1, "example-form", "float-right"], [1, "example-full-width"], ["type", "text", "matInput", "", "placeholder", "Search", "id", "search-text", "aria-describedby", "search-text", "name", "searchText", "autofocus", "", 3, "ngModel", "ngModelChange"], ["id", "testUser", 4, "ngFor", "ngForOf"], ["name", "filter", 3, "value", "click"], ["id", "testUser"], [1, "font-italic"], [3, "routerLink"], ["onerror", "this.src='assets/placeholder.png'", 1, "userImage", 3, "src"]], template: function FilterUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterUsersComponent_Template_button_click_5_listener() { return ctx.ClearFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " cleaning_services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filter Users:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterUsersComponent_Template_mat_radio_group_ngModelChange_13_listener($event) { return ctx.TypeSelection = $event; })("ngModelChange", function FilterUsersComponent_Template_mat_radio_group_ngModelChange_13_listener() { return ctx.getUsersByType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FontysStaff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Start Study Year *Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterUsersComponent_Template_mat_select_ngModelChange_31_listener($event) { return ctx.syearSelection = $event; })("ngModelChange", function FilterUsersComponent_Template_mat_select_ngModelChange_31_listener() { return ctx.foundDataByYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FilterUsersComponent_mat_option_32_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Start Work Year *Fontys staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterUsersComponent_Template_mat_select_ngModelChange_39_listener($event) { return ctx.wyearSelection = $event; })("ngModelChange", function FilterUsersComponent_Template_mat_select_ngModelChange_39_listener() { return ctx.foundDataByStartWorkYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FilterUsersComponent_mat_option_40_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterUsersComponent_Template_mat_select_ngModelChange_47_listener($event) { return ctx.locationSelection = $event; })("ngModelChange", function FilterUsersComponent_Template_mat_select_ngModelChange_47_listener() { return ctx.foundDataByLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, FilterUsersComponent_mat_option_48_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterUsersComponent_Template_mat_select_ngModelChange_55_listener($event) { return ctx.departmentSelection = $event; })("ngModelChange", function FilterUsersComponent_Template_mat_select_ngModelChange_55_listener() { return ctx.foundDataByDepartment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, FilterUsersComponent_mat_option_56_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterUsersComponent_Template_button_click_58_listener() { return ctx.combinedFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Show Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterUsersComponent_Template_input_ngModelChange_66_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterUsersComponent_Template_button_click_67_listener() { return ctx.getUsersByFirstNameChars(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Users:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, FilterUsersComponent_tr_74_Template, 13, 7, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.TypeSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.StudentDisabled)("ngModel", ctx.syearSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.EmployeeDisabled)("ngModel", ctx.wyearSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.locationSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.departmentSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"]], styles: [".filter-card[_ngcontent-%COMP%] {\r\n  max-width: 350px;\r\n  max-height: 1000px;\r\n  \r\n  margin-top: 100px;\r\n  \r\n}\r\n\r\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\r\nmargin-left: 16px;\r\n}\r\n\r\n.found-card[_ngcontent-%COMP%] {\r\nmax-width: 600px;\r\nmargin-top: 100px;\r\n}\r\n\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\r\nbackground-color: white;\r\ncolor: palevioletred;\r\n}\r\n\r\n.actions[_ngcontent-%COMP%]{\r\nmargin-right: 10px;\r\n}\r\n\r\n.userImage[_ngcontent-%COMP%]{\r\n  width: 75px;\r\n  margin: auto 4% auto 1%;\r\n  height: 55%;\r\n  border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsaUJBQWlCOztBQUVuQjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImZpbHRlci11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcclxuICBcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4uZm91bmQtY2FyZCB7XHJcbm1heC13aWR0aDogNjAwcHg7XHJcbm1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWZhYi5tYXQtYWNjZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbn1cclxuXHJcbi5hY3Rpb25ze1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51c2VySW1hZ2V7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgbWFyZ2luOiBhdXRvIDQlIGF1dG8gMSU7XHJcbiAgaGVpZ2h0OiA1NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-users',
                templateUrl: './filter-users.component.html',
                styleUrls: ['./filter-users.component.css']
            }]
    }], function () { return [{ type: _services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "G5hp":
/*!**********************************************!*\
  !*** ./src/app/classes/Profile/Education.ts ***!
  \**********************************************/
/*! exports provided: Education */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
class Education {
    constructor(id, profileId, school, startYearEducation, endYearEducation, degreeEducation, fieldStudy, descriptionEducation) {
        this.id = id;
        this.profileId = profileId;
        this.school = school;
        this.startYearEducation = startYearEducation;
        this.endYearEducation = endYearEducation;
        this.degreeEducation = degreeEducation;
        this.fieldStudy = fieldStudy;
        this.descriptionEducation = descriptionEducation;
    }
}


/***/ }),

/***/ "IcB3":
/*!********************************************!*\
  !*** ./src/app/newsfeed/post.validator.ts ***!
  \********************************************/
/*! exports provided: PostValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostValidator", function() { return PostValidator; });
class PostValidator {
    static cannotContainSpace(control) {
        if (control.value.replace(/\s/g, "").length == 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
}


/***/ }),

/***/ "JFKi":
/*!**********************************************************************************!*\
  !*** ./src/app/update-profile-experience/update-profile-experience.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UpdateProfileExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileExperienceComponent", function() { return UpdateProfileExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _classes_Profile_Experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../classes/Profile/Experience */ "iaT6");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UpdateProfileExperienceComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const types_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", types_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", types_r8.type, " ");
} }
function UpdateProfileExperienceComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r9.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r9.year, " ");
} }
function UpdateProfileExperienceComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r10.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r10.year, " ");
} }
class UpdateProfileExperienceComponent {
    constructor(service, dialogRef, data) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.typeOfEmployment = [
            { type: 'FullTime' }, { type: 'PartTime' }, { type: 'FreeLancer' }
        ];
        this.years = [
            { year: 2010 },
            { year: 2011 },
            { year: 2012 },
            { year: 2013 },
            { year: 2014 },
            { year: 2015 },
            { year: 2016 },
            { year: 2017 },
            { year: 2018 },
            { year: 2019 },
            { year: 2020 },
            { year: 2021 },
            { year: 2022 },
            { year: 2023 },
            { year: 2024 },
            { year: 2025 },
        ];
        this.notification = null;
        this.experience = new _classes_Profile_Experience__WEBPACK_IMPORTED_MODULE_2__["Experience"](1, 1, "Kassa medewerker", "Shell", "Fulltime", "Idk", 1999, 2000, "Working at gas station");
    }
    ngOnInit() {
        this.id = this.data.experience.id;
        this.service.GetOneExperience(this.id)
            .subscribe((data) => {
            console.log(data);
            this.experience = data;
        });
    }
    updateExperience() {
        this.service.updateExperience(this.experience, this.id).subscribe((res) => {
            console.log("updated");
        });
        this.dialogRef.close();
    }
}
UpdateProfileExperienceComponent.ɵfac = function UpdateProfileExperienceComponent_Factory(t) { return new (t || UpdateProfileExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
UpdateProfileExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateProfileExperienceComponent, selectors: [["app-update-profile-experience"]], decls: 46, vars: 11, consts: [[1, "container", "h-100", "d-flex", "justify-content-center"], [3, "ngSubmit"], ["ExperienceForm", "ngForm"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-right"], [1, "row", "mt-3"], [1, "col-md-12"], [1, "labels"], ["type", "text", "id", "company", "required", "", "name", "company", 1, "form-control", 3, "ngModel", "ngModelChange"], ["company", "ngModel"], ["id", "employmentType", "name", "employmentType", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "id", "location", "required", "", "name", "location", 1, "form-control", 3, "ngModel", "ngModelChange"], ["location", "ngModel"], ["id", "startDateExperience", "name", "startDateExperience", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "endDateExperience", "name", "endDateExperience", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "title", "required", "", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["type", "text", "id", "descriptionExperience", "required", "", "name", "descriptionExperience", 1, "form-control", 3, "ngModel", "ngModelChange"], ["descriptionExperience", "ngModel"], [1, "mt-5", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "profile-button", 3, "disabled"], [3, "value"]], template: function UpdateProfileExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateProfileExperienceComponent_Template_form_ngSubmit_1_listener() { return ctx.updateExperience(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit your Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileExperienceComponent_Template_input_ngModelChange_10_listener($event) { return ctx.experience.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Employment type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileExperienceComponent_Template_select_ngModelChange_15_listener($event) { return ctx.experience.employmentType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UpdateProfileExperienceComponent_option_16_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileExperienceComponent_Template_input_ngModelChange_20_listener($event) { return ctx.experience.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Start year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileExperienceComponent_Template_select_ngModelChange_26_listener($event) { return ctx.experience.startDateExperience = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UpdateProfileExperienceComponent_option_27_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "End year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileExperienceComponent_Template_select_ngModelChange_31_listener($event) { return ctx.experience.endDateExperience = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UpdateProfileExperienceComponent_option_32_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileExperienceComponent_Template_input_ngModelChange_36_listener($event) { return ctx.experience.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileExperienceComponent_Template_input_ngModelChange_41_listener($event) { return ctx.experience.descriptionExperience = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.experience.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.experience.employmentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeOfEmployment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.experience.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.experience.startDateExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.experience.endDateExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.experience.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.experience.descriptionExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS1leHBlcmllbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-profile-experience',
                templateUrl: './update-profile-experience.component.html',
                styleUrls: ['./update-profile-experience.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "JtCm":
/*!************************************************************************!*\
  !*** ./src/app/profile/dialog-change-dp/dialog-change-dp.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogChangeDpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogChangeDpComponent", function() { return DialogChangeDpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");








class DialogChangeDpComponent {
    constructor(profileService, dialogRef, data, _snackBar, formBuilder) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.formBuilder = formBuilder;
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            var reader = new FileReader();
            reader.onload = (event) => {
                this.profileUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('profile').value);
        this.profileService.uploadPicture(this.userId, formData).subscribe((data) => {
            this.profileUrl = data;
            console.log("data");
            console.log(this.profileUrl);
        }, (error) => {
            console.log("Error");
            console.log(error);
            if (error.status === 409) {
                this._snackBar.open('Already Exist!!', 'End now', {
                    duration: 1000,
                });
            }
        });
    }
    ngOnInit() {
        // this.userId = this.data.User.id;
        this.userId = parseInt(localStorage.getItem("userId"));
        this.profileService.getUser(this.userId).subscribe(response => {
            this.foundUser = response;
            this.profileUrl = this.foundUser.image;
            // this.userImage = this.foundUser.userImage;
            console.log("Found User");
            console.log(this.foundUser);
        });
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
    }
}
DialogChangeDpComponent.ɵfac = function DialogChangeDpComponent_Factory(t) { return new (t || DialogChangeDpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
DialogChangeDpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogChangeDpComponent, selectors: [["app-dialog-change-dp"]], decls: 13, vars: 2, consts: [[1, "container"], ["width", "100%", 3, "src"], [3, "formGroup", "ngSubmit"], ["type", "file", "name", "profile", 1, "select-profile-picture", 2, "display", "none", 3, "change"], ["selectPicture", ""], [1, "buttons"], ["mdbBtn", "", "type", "button", "rounded", "true", 3, "click"], ["mdbBtn", "", "type", "submit", "rounded", "true", "id", "submitButton"]], template: function DialogChangeDpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DialogChangeDpComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DialogChangeDpComponent_Template_input_change_6_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogChangeDpComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Change Picture ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"]], styles: [".container[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  margin-left: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1jaGFuZ2UtZHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJkaWFsb2ctY2hhbmdlLWRwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogChangeDpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-change-dp',
                templateUrl: './dialog-change-dp.component.html',
                styleUrls: ['./dialog-change-dp.component.css']
            }]
    }], function () { return [{ type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "MMwS":
/*!************************************************************************!*\
  !*** ./src/app/profile/dialog-add-skill/dialog-add-skill.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogAddSkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddSkillComponent", function() { return DialogAddSkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");










class DialogAddSkillComponent {
    constructor(profileService, dialogRef, data, _snackBar) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
    }
    CloseDialog() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.userId = this.data.User.id;
        this.profileId = this.data.Profile;
        console.log(this.userId);
        console.log(this.profileId);
    }
    onSubmitSkill(data) {
        this.skillToAdd = {
            "id": 17,
            "name": data.skill,
            "profileId": this.profileId
        };
        this.profileService.addSkill(this.skillToAdd, this.userId, this.profileId);
        this.CloseDialog();
    }
}
DialogAddSkillComponent.ɵfac = function DialogAddSkillComponent_Factory(t) { return new (t || DialogAddSkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
DialogAddSkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogAddSkillComponent, selectors: [["app-dialog-add-skill"]], decls: 13, vars: 0, consts: [[1, "text-center", "border-silver", 3, "ngSubmit"], ["userSkill", "ngForm"], [1, "input-full-width"], ["matInput", "", "type", "text", "name", "skill", "ngModel", "", "placeholder", "C#"], ["mdbBtn", "", "type", "submit", "rounded", "true", "id", "submitButton", "id", "submitButton"], ["mdbBtn", "", "type", "button", 1, "closeButton", 3, "click"]], template: function DialogAddSkillComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DialogAddSkillComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmitSkill(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogAddSkillComponent_Template_button_click_11_listener() { return ctx.CloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MdbBtnDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYWRkLXNraWxsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogAddSkillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-add-skill',
                templateUrl: './dialog-add-skill.component.html',
                styleUrls: ['./dialog-add-skill.component.css']
            }]
    }], function () { return [{ type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Onjk":
/*!****************************************************!*\
  !*** ./src/app/connection/connection.component.ts ***!
  \****************************************************/
/*! exports provided: ConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionComponent", function() { return ConnectionComponent; });
/* harmony import */ var _delete_connection_delete_connection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../delete-connection/delete-connection.component */ "WmUH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/contact/contact.service */ "vSZU");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _directives_material_elevation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/material-elevation.directive */ "YAXs");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/filter.pipe */ "BhhM");


















const _c0 = function (a1, a3) { return ["/users", a1, "profiles", a3]; };
const _c1 = function () { return ["/users", 1, "\n\t\t\t\t  messages"]; };
function ConnectionComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Student at Fontys of Applied Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectionComponent_div_11_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const contact_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openDialog(contact_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " remove_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.userId == contact_r3.friend.id ? contact_r3.user.image : contact_r3.friend.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx_r0.userId == contact_r3.friend.id ? contact_r3.user.id : contact_r3.friend.id, ctx_r0.userId == contact_r3.friend.id ? contact_r3.user.profileId : contact_r3.friend.profileId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.userId == contact_r3.friend.id ? contact_r3.user.firstName + " " + contact_r3.user.lastName : contact_r3.friend.firstName + " " + contact_r3.friend.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", contact_r3.user.profileId, " ", contact_r3.friend.profileId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1))("matTooltipPosition", ctx_r0.position.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r0.position.value);
} }
function ConnectionComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.requests == null ? null : ctx_r1.requests.length);
} }
function ConnectionComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Student at Fontys of Applied Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectionComponent_div_18_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.accept(ctx_r8.requests[i_r7]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectionComponent_div_18_Template_mat_icon_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.reject(ctx_r10.requests[i_r7]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.userId == request_r6.friend.id ? request_r6.user.image : request_r6.friend.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx_r2.userId == request_r6.friend.id ? request_r6.user.id : request_r6.friend.id, ctx_r2.userId == request_r6.friend.id ? request_r6.user.profileId : request_r6.friend.profileId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.userId == request_r6.friend.id ? request_r6.user.firstName + " " + request_r6.user.lastName : request_r6.friend.firstName + " " + request_r6.friend.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r2.position.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r2.position.value);
} }
class ConnectionComponent {
    constructor(contactService, userService, dialog) {
        this.contactService = contactService;
        this.userService = userService;
        this.dialog = dialog;
        this.searchText = '';
        this.userId = this.userService.getUserIdOfLoggedIn();
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('below');
        this.defaultElevation = 3;
        this.raisedElevation = 5;
    }
    ngOnInit() {
        // GET ACCEPTED CONTACTS
        this.getAcceptedContacts();
        // GET REQUESTS
        this.getRequests();
    }
    // GO TO MESSAGES
    message() {
        // navigate to message with query param username
    }
    // GET CONTACTS
    getAcceptedContacts() {
        this.contactService.getAcceptedContacts()
            .subscribe(contacts => {
            this.contacts = contacts;
            console.log("All contacts " + this.contacts);
        });
    }
    // GET REQUESTS
    getRequests() {
        this.contactService.getContactRequests()
            .subscribe(requests => {
            this.requests = requests;
            console.log("Requests " + this.requests);
        });
    }
    // ACCEPT REQUEST
    accept(contact) {
        contact.isAccepted = true;
        this.contactService.update(contact)
            .subscribe(() => {
            this.getRequests();
            this.getAcceptedContacts();
        });
    }
    // REJECT REQUEST
    reject(contact) {
        this.contactService.delete(contact.id)
            .subscribe(updatedContact => {
            console.log(updatedContact);
            this.getRequests();
        });
    }
    // DELETE DIALOG
    openDialog(connection) {
        const dialogRef = this.dialog.open(_delete_connection_delete_connection_component__WEBPACK_IMPORTED_MODULE_0__["DeleteConnectionComponent"], {
            maxWidth: '50%',
            data: { connection: connection }
        });
        dialogRef.afterClosed()
            .subscribe(result => {
            // empty input
            // this.searchForm.reset('');
            this.getAcceptedContacts();
        });
    }
}
ConnectionComponent.ɵfac = function ConnectionComponent_Factory(t) { return new (t || ConnectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
ConnectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConnectionComponent, selectors: [["app-connection"]], decls: 21, vars: 13, consts: [["appMaterialElevation", "", 1, "container", "border", "my-5", 3, "defaultElevation", "raisedElevation"], ["animationDuration", "1000ms"], ["label", "My Connections"], [1, "heading"], [1, "example-form"], [1, "example-full-width"], ["type", "text", "matInput", "", "placeholder", "Connection's Name", "id", "search-text", "aria-describedby", "search-text", "name", "searchText", "autofocus", "", 3, "ngModel", "ngModelChange"], [1, "headingLine"], ["class", "connection", 4, "ngFor", "ngForOf"], ["mat-tab-label", ""], [1, "connection"], ["onerror", "this.src='assets/placeholder.png'", 1, "item", 3, "src"], [1, "item", "connectionDesc", 3, "routerLink"], [1, "connectionName"], [1, "dividerConnections"], ["aria-hidden", "false", "aria-label", "Example chat icon", "matTooltip", "Go to messages", 3, "routerLink", "matTooltipPosition"], ["aria-hidden", "false", "aria-label", "Example remove_circle_outline icon", "matTooltip", "Delete connection", 3, "matTooltipPosition", "click"], ["matBadgeOverlap", "false", "matBadgeSize", "small", 3, "matBadge"], [1, "item", "connectionDesc"], [1, "connectionName", 3, "routerLink"], ["aria-hidden", "false", "aria-label", "Example add_circle_outline icon", "matTooltip", "Accept the request", 3, "matTooltipPosition", "click"], ["aria-hidden", "false", "aria-label", "Example cancel icon", "matTooltip", "Reject the request", 3, "matTooltipPosition", "click"]], template: function ConnectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConnectionComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ConnectionComponent_div_11_Template, 13, 14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "appFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ConnectionComponent_ng_template_14_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ConnectionComponent_div_18_Template, 12, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultElevation", ctx.defaultElevation)("raisedElevation", ctx.raisedElevation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("My Connections (", ctx.contacts == null ? null : ctx.contacts.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 8, ctx.contacts, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Requests (", ctx.requests == null ? null : ctx.requests.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 11, ctx.contacts), "\n");
    } }, directives: [_directives_material_elevation_directive__WEBPACK_IMPORTED_MODULE_6__["MaterialElevationDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabLabel"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadge"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["JsonPipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background: white;\r\n}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\r\n    height: 180px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    display: inline-block;\r\n}\r\n\r\n.headingLine[_ngcontent-%COMP%] {\r\n    width: 94%;\r\n    margin: 0 3%;\r\n}\r\n.badge[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    padding: 5px 10px;\r\n    border-radius: 50%;\r\n    background: red;\r\n    color: white;\r\n}\r\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\r\n    background: #0075db;\r\n}\r\n.connection[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 2% 10%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    height: 18vh;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    align-self: flex-start;\r\n}\r\n\r\nimg.item[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.connectionName[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.item.connectionDesc[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 60%;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin: auto 1%;\r\n    cursor: pointer;\r\n}\r\nmat-icon[_ngcontent-%COMP%]:hover {\r\n    color: #0075db;\r\n}\r\n#notification[_ngcontent-%COMP%] {\r\n    font-size: 1.8em;\r\n}\r\n\r\n  .mat-tooltip {\r\n    font-size: 0.8em;\r\n}\r\n\r\nhr.dividerConnections[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    color: gray;\r\n    position: absolute;\r\n    margin-top: 2rem;\r\n    right: 15%;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    float: right;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n    img.item[_ngcontent-%COMP%] {\r\n        width: 90px;\r\n        margin: auto 4% auto 0;\r\n    }  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2Y7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQSxZQUFZO0FBQ1o7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBRUEsZUFBZTtBQUNmO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQztJQUNHLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGVBQWU7QUFDbkI7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBRUEsVUFBVTtBQUNWO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQSxZQUFZO0FBQ1o7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBR0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFJQSxpQkFBaUI7QUFDakI7SUFDSTtRQUNJLFdBQVc7UUFDWCxzQkFBc0I7SUFDMUI7QUFDSiIsImZpbGUiOiJjb25uZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDT05ORUNUSU9OICovXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi8qIEhlYWRpbmcgKi9cclxuLmhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIEhlYWRpbmcgaHIgKi9cclxuLmhlYWRpbmdMaW5lIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBtYXJnaW46IDAgMyU7XHJcbn1cclxuXHJcbiAuYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3NWRiO1xyXG59XHJcblxyXG5cclxuLmNvbm5lY3Rpb24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMiUgMTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDE4dmg7XHJcbn1cclxuXHJcbi8qIENvbm5lY3Rpb24gaXRlbXMgKi9cclxuLml0ZW0ge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLyogQ29ubmVjdGlvbiBpbWFnZSAqL1xyXG5pbWcuaXRlbSB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbm5lY3Rpb24gbmFtZSAqL1xyXG4uY29ubmVjdGlvbk5hbWUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDb25uZWN0aW9uIERlc2NyaXB0aW9uICovXHJcbi5pdGVtLmNvbm5lY3Rpb25EZXNjIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi8qIEljb25zICovXHJcbm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvIDElO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5tYXQtaWNvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwNzVkYjtcclxufVxyXG5cclxuI25vdGlmaWNhdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcblxyXG4vKiBUb29sdGlwICovXHJcbjo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLyogRGl2aWRlciBociAqL1xyXG5oci5kaXZpZGVyQ29ubmVjdGlvbnMge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIHJpZ2h0OiAxNSU7XHJcbn1cclxuXHJcblxyXG4vKiBTRUFSQ0ggRk9STSAqL1xyXG5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIHNtYWxsIHNjcmVlbiAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gICAgaW1nLml0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0byA0JSBhdXRvIDA7XHJcbiAgICB9ICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConnectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-connection',
                templateUrl: './connection.component.html',
                styleUrls: ['./connection.component.css']
            }]
    }], function () { return [{ type: _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    readLocalStorageValue() {
        return localStorage.getItem('userToken');
    }
    canActivate(next, state) {
        if (this.readLocalStorageValue() != null) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "P64D":
/*!****************************************************!*\
  !*** ./src/app/errors/server-error.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ServerErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function() { return ServerErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_errors_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/errors/error.service */ "8XhR");
/* harmony import */ var _services_errors_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/errors/notification.service */ "rMZW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class ServerErrorInterceptor {
    constructor(injector, router) {
        this.injector = injector;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            const errorService = this.injector.get(_services_errors_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]); // gets the error message
            const notifier = this.injector.get(_services_errors_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]); // show a pop up on screen
            // Check type of error
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) { // Server or connection error happened
                console.log("ERROR " + error.status);
                if (!navigator.onLine) {
                    console.log("offline");
                    // Handle offline error
                    this.router.navigate(['offline']);
                }
                else {
                    console.log("server error");
                    if (error.status == 401) { // Unauthorized
                        this.router.navigate(['login']);
                    }
                    else if (error.status == 403) { // Forbidden
                        this.router.navigate(['forbidden']);
                    }
                    else if (error.status == 404) { // Not found
                        this.router.navigate(['not-found']);
                    }
                    else if (error.status == 500) { // Internal server error
                        this.router.navigate(['internal-server-error']);
                    }
                    else if (error.status == 0) { // Unexpected error (Server is down)
                        this.router.navigate(['unexpected-error']);
                    }
                    else { // other
                        let message = errorService.getServerMessage(error);
                        notifier.showError(message);
                    }
                }
            }
            else { // Handle Client Error (Angular Error, ReferenceError...)     
                console.log("client error");
                let message = errorService.getClientMessage(error);
                notifier.showError(message);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message);
        }));
    }
}
ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) { return new (t || ServerErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ServerErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServerErrorInterceptor, factory: ServerErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "PPJz":
/*!*****************************************************!*\
  !*** ./src/app/errors/offline/offline.component.ts ***!
  \*****************************************************/
/*! exports provided: OfflineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineComponent", function() { return OfflineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OfflineComponent {
    constructor() { }
    ngOnInit() {
    }
}
OfflineComponent.ɵfac = function OfflineComponent_Factory(t) { return new (t || OfflineComponent)(); };
OfflineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfflineComponent, selectors: [["app-offline"]], decls: 6, vars: 0, consts: [["id", "container"], ["src", "assets/offline.jpg", "alt", ""]], template: function OfflineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Slow or No internet connection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please check your internet settings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 94vh;\r\n    background: white;\r\n    text-align: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    margin: 15% auto 1%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    font-family: myriad-pro, 'Myriad Pro', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 2.5em;\r\n    font-weight: 400;\r\n    line-height: 1.7em;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 1.3em;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n\ttext-transform:uppercase;\r\n\tfont-weight: 300;\r\n\tletter-spacing:0.1em;\r\n\tcolor: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtHQUFrRztBQUN0Rzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7Q0FDdkIsd0JBQXdCO0NBQ3hCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsWUFBWTtBQUNiIiwiZmlsZSI6Im9mZmxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk0dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogMTUlIGF1dG8gMSU7XHJcbn1cclxuXHJcbmgxLCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBteXJpYWQtcHJvLCAnTXlyaWFkIFBybycsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG5cdGxldHRlci1zcGFjaW5nOjAuMWVtO1xyXG5cdGNvbG9yOiBibG9jaztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfflineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-offline',
                templateUrl: './offline.component.html',
                styleUrls: ['./offline.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qpl/":
/*!**********************************************************************!*\
  !*** ./src/app/delete-conversation/delete-conversation.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConversationComponent", function() { return DeleteConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message/message.service */ "0UgC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DeleteConversationComponent {
    constructor(messageService, dialogRef, data) {
        this.messageService = messageService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loggedInUser = 1;
        console.log(data);
    }
    ngOnInit() {
    }
    // delete conversation
    deleteConversation() {
        this.messageService.deleteConversation(this.loggedInUser, this.data.conversation.id).subscribe();
        console.log(this.loggedInUser + " " + this.data.conversation.id + " " + "Deleted :)");
        // Close dialog
        this.dialogRef.close();
    }
    //close dialog 
    noClick() {
        this.dialogRef.close();
    }
}
DeleteConversationComponent.ɵfac = function DeleteConversationComponent_Factory(t) { return new (t || DeleteConversationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeleteConversationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteConversationComponent, selectors: [["app-delete-conversation"]], decls: 8, vars: 0, consts: [["id", "confirm", "mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function DeleteConversationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Do you want to delete this Conversation?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConversationComponent_Template_button_click_4_listener() { return ctx.deleteConversation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConversationComponent_Template_button_click_6_listener() { return ctx.noClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#confirm[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    margin: 5%;\r\n}\r\n\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n    min-width: 40%;\r\n    margin: 15% 5%;\r\n    background: #0075db;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1130px) {\r\n    \r\n    .mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n        min-width: 90%;\r\n        margin: 5%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jb252ZXJzYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxXQUFXO0FBQ1g7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBR0EsMkJBQTJCO0FBQzNCO0lBQ0ksc0NBQXNDO0lBQ3RDO1FBQ0ksY0FBYztRQUNkLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImRlbGV0ZS1jb252ZXJzYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFFVRVNUSU9OICovXHJcbiNjb25maXJtID4gcCB7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4vKiBCVVRUT04gKi9cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogMTUlIDUlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNzVkYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIHNjcmVlbnMgbGVzcyB0aGFuIDExMzAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEzMHB4KSB7XHJcbiAgICAvKiBzdGFjayBidXR0b24gb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cclxuICAgIC5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDUlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteConversationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-conversation',
                templateUrl: './delete-conversation.component.html',
                styleUrls: ['./delete-conversation.component.css']
            }]
    }], function () { return [{ type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");





function AppComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
} }
class AppComponent {
    constructor() {
        this.title = 'FontyIN-Client';
    }
    readLocalStorageValue() {
        return localStorage.getItem('userToken');
    }
    userIsLogged() {
        if (this.readLocalStorageValue() != null) {
            return true;
        }
        else {
            return false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 1, 0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLogged());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "T4tH":
/*!*************************************************************************!*\
  !*** ./src/app/messages/selected-message/selected-message.component.ts ***!
  \*************************************************************************/
/*! exports provided: SelectedMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedMessageComponent", function() { return SelectedMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_delete_conversation_delete_conversation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/delete-conversation/delete-conversation.component */ "Qpl/");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/message/message.service */ "0UgC");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/date-ago.pipe */ "6Kw5");

















const _c0 = ["scrollable"];
function SelectedMessageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", message_r4 == null ? null : message_r4.sender.firstName, " ", message_r4 == null ? null : message_r4.sender.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1.getTooltipDate(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 6, ctx_r1.getLocalDate(message_r4.dateTime), 0, 19)))("matTooltipPosition", ctx_r1.position.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 12, ctx_r1.getLocalDate(message_r4.dateTime), 0, 19)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r4 == null ? null : message_r4.content, " ");
} }
class SelectedMessageComponent {
    constructor(messageService, userService, router, route, dialog) {
        this.messageService = messageService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.userId = this.userService.getUserIdOfLoggedIn();
        this.disableScrollDown = false;
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('below');
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['conversationId'];
            this.getConversation();
        });
    }
    //open dialog for deleting conversation
    openDialogDeleteConversation(conversation) {
        const dialogRef = this.dialog.open(src_app_delete_conversation_delete_conversation_component__WEBPACK_IMPORTED_MODULE_3__["DeleteConversationComponent"], {
            maxWidth: '50%',
            data: { conversation: conversation }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.conversation = null;
            this.messageService.setInfo('Conversation is deleted');
            this.router.navigate(['/messages']);
        });
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    // Format tooltip date as (Nov 19, 2020 2:42 AM)
    getTooltipDate(date) {
        date = moment__WEBPACK_IMPORTED_MODULE_2__(date).format('lll');
        return date;
    }
    // Convert date and time from UTC to local
    getLocalDate(date) {
        var gmtDateTime = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](date, "YYYY-MM-DD HH:mm");
        var local = gmtDateTime.local().format('YYYY-MMM-DD HH:mm');
        return local;
    }
    getConversation() {
        this.messageService.get(this.id)
            .subscribe((data) => {
            this.conversation = data;
            // console.log("CON " + this.conversation.firstUser.id + " " + this.conversation.secondUser.id)
            if (this.conversation.messages.length > 0) {
                // Get users
                this.currentUser = (this.conversation.messages[0].receiver.id == this.userId) ? this.conversation.messages[0].receiver : this.conversation.messages[0].sender;
                this.friend = (this.conversation.messages[0].receiver.id == this.userId) ? this.conversation.messages[0].sender : this.conversation.messages[0].receiver;
            }
            else {
                this.currentUser = (this.userId == this.conversation.firstUser.id) ? this.conversation.firstUser : this.conversation.secondUser;
                this.friend = (this.userId == this.conversation.firstUser.id) ? this.conversation.secondUser : this.conversation.firstUser;
            }
        });
    }
    // Scroll
    onScroll() {
        let element = this.scrollable.nativeElement;
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false;
        }
        else {
            this.disableScrollDown = true;
        }
    }
    scrollToBottom() {
        if (this.disableScrollDown) {
            return;
        }
        try {
            this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    // Send message
    submit(f) {
        let newMessage = {
            conversationId: this.conversation.id,
            sender: this.currentUser,
            receiver: this.friend,
            content: f.value.message
        };
        this.messageService.create(newMessage)
            .subscribe(() => {
            this.getConversation();
            f.reset();
            this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
        });
    }
}
SelectedMessageComponent.ɵfac = function SelectedMessageComponent_Factory(t) { return new (t || SelectedMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
SelectedMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectedMessageComponent, selectors: [["app-selected-message"]], viewQuery: function SelectedMessageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollable = _t.first);
    } }, decls: 19, vars: 6, consts: [["onerror", "this.src='assets/placeholder.png'", 1, "firend-img", 3, "src"], ["aria-hidden", "false", "aria-label", "Example remove_circle_outline icon", "matTooltip", "Delete chat", 1, "float-right", 3, "matTooltipPosition", "click"], [1, "friend-name"], [1, "scroll-viewport", 3, "scroll"], ["scrollable", ""], [1, "chat-container"], [4, "ngFor", "ngForOf"], [1, "example-form", 3, "ngSubmit"], ["f", "ngForm"], ["appearance", "outline", 1, "full-width-field"], ["matInput", "", "ngModel", "", "name", "message"], ["message", "ngModel"], ["mat-raised-button", "", "color", "accent", "id", "send-message", 3, "disabled"], [1, "message"], [1, "sender"], [1, "time", 3, "matTooltip", "matTooltipPosition"], [1, "message-content"], [1, "conversation-divider"]], template: function SelectedMessageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectedMessageComponent_Template_mat_icon_click_1_listener() { return ctx.openDialogDeleteConversation(ctx.conversation); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " remove_circle_outline\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SelectedMessageComponent_Template_div_scroll_6_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectedMessageComponent_div_9_Template, 12, 16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SelectedMessageComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.submit(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Send a message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.friend == null ? null : ctx.friend.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.friend == null ? null : ctx.friend.firstName, " ", ctx.friend == null ? null : ctx.friend.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conversation == null ? null : ctx.conversation.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(_r3.value == null ? null : _r3.value.trim()));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_14__["DateAgoPipe"]], styles: [".scroll-viewport[_ngcontent-%COMP%] {\r\n    height: 49vh;\r\n\twidth: 100%;\r\n    margin-bottom: 7%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.chat-container[_ngcontent-%COMP%] {\r\n\tpadding-right: 3%;\r\n}\r\n\r\n.friend-name[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tfont-size: 1.9em;\r\n    font-weight: 580;\r\n    color: #252525;\r\n}\r\n\r\n.firend-img[_ngcontent-%COMP%] {\r\n\twidth: 90px;\r\n    margin-right: 4%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n    margin: 4% auto;\r\n}\r\n\r\n.conversation-divider[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    color: gray;\r\n    margin: auto 10%;\r\n}\r\n\r\n.sender[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2em;\r\n    font-weight: 500;\r\n}\r\n\r\n.sender[_ngcontent-%COMP%]    > .time[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n    font-size: 0.8em;\r\n}\r\n\r\n.message-content[_ngcontent-%COMP%] {\r\n\tmargin-top: 2%;\r\n    line-height: 1.7em;\r\n}\r\n\r\n.full-width-field[_ngcontent-%COMP%] {\r\n   width: 100%;\r\n}\r\n\r\n#send-message[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n}\r\n\r\n  .mat-tooltip {\r\n    font-size: 0.8em;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n\t\r\n\timg[_ngcontent-%COMP%] {\r\n    \twidth: 71px;\r\n\t    height: 78px;\r\n\t}\r\n\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n\t\r\n\timg[_ngcontent-%COMP%] {\r\n\t\twidth: 80px;\r\n\t\theight: 100px;\r\n\t\tmargin-right: 4%;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGVkLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FBQ1g7SUFDSSxZQUFZO0NBQ2YsV0FBVztJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFHQSxtQkFBbUI7QUFDbkI7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQSxvQkFBb0I7QUFDcEI7Q0FDQyxXQUFXO0lBQ1IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUdBLHNCQUFzQjtBQUN0QjtJQUNJLGVBQWU7QUFDbkI7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBLGtCQUFrQjtBQUNsQjtDQUNDLGdCQUFnQjtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBLG9CQUFvQjtBQUNwQjtDQUNDLFlBQVk7SUFDVCxnQkFBZ0I7QUFDcEI7QUFFQSxvQkFBb0I7QUFDcEI7Q0FDQyxjQUFjO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUEscUJBQXFCO0FBQ3JCO0dBQ0csV0FBVztBQUNkO0FBRUEsZ0JBQWdCO0FBQ2hCO0NBQ0MsWUFBWTtBQUNiO0FBR0EsWUFBWTtBQUNaO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBR0E7Ozs7Ozs7R0FPRztBQUdIO0NBQ0MsbUJBQW1CO0NBQ25CO0tBQ0ksV0FBVztLQUNYLFlBQVk7Q0FDaEI7O0FBRUQ7QUFFQSxpQkFBaUI7QUFDakI7Q0FDQyxtQkFBbUI7Q0FDbkI7RUFDQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjtBQUNEIiwiZmlsZSI6InNlbGVjdGVkLW1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNjcm9sbCAqL1xyXG4uc2Nyb2xsLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogNDl2aDtcclxuXHR3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDclO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG5cclxuLyogQ2hhdCBjb250YWluZXIgKi9cclxuLmNoYXQtY29udGFpbmVyIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuLyogZmlyZW5kIG5hbWUgKi9cclxuLmZyaWVuZC1uYW1lIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1ODA7XHJcbiAgICBjb2xvcjogIzI1MjUyNTtcclxufVxyXG5cclxuLyogZnJpZW5kcydzIGltYWdlICovXHJcbi5maXJlbmQtaW1nIHtcclxuXHR3aWR0aDogOTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblxyXG4vKiBNZXNzYWdlIGNvbnRhaW5lciAqL1xyXG4ubWVzc2FnZSB7XHJcbiAgICBtYXJnaW46IDQlIGF1dG87XHJcbn1cclxuXHJcbi8qIGxpbmUgYmV0d2VlbiBtZXNzYWdlcyAqL1xyXG4uY29udmVyc2F0aW9uLWRpdmlkZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luOiBhdXRvIDEwJTtcclxufVxyXG5cclxuLyogc2VuZGVyJ3MgbmFtZSAqL1xyXG4uc2VuZGVyIHtcclxuXHRmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogdGltZSBvZiBtZXNzYWdlICovXHJcbi5zZW5kZXIgPiAudGltZSB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLyogbWVzc2FnZSBjb250ZW50ICovXHJcbi5tZXNzYWdlLWNvbnRlbnQge1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG59XHJcblxyXG4vKiB0ZXh0YXJlYSBtZXNzYWdlICovXHJcbi5mdWxsLXdpZHRoLWZpZWxkIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIHNlbmQgYnV0dG9uICovXHJcbiNzZW5kLW1lc3NhZ2Uge1xyXG5cdGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuXHJcbi8qIFRvb2x0aXAgKi9cclxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG5cclxuLyogLmRlc2t0b3AtdmlldyB7XHJcblxyXG59XHJcblxyXG5cclxuLm1vYmlsZS12aWV3IHtcclxuXHJcbn0gKi9cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuXHQvKiBmcmllbmQncyBpbWFnZSAqL1xyXG5cdGltZyB7XHJcbiAgICBcdHdpZHRoOiA3MXB4O1xyXG5cdCAgICBoZWlnaHQ6IDc4cHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLyogc21hbGwgc2NyZWVuICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XHJcblx0LyogZnJpZW5kJ3MgaW1hZ2UgKi9cclxuXHRpbWcge1xyXG5cdFx0d2lkdGg6IDgwcHg7XHJcblx0XHRoZWlnaHQ6IDEwMHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0JTtcclxuXHR9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selected-message',
                templateUrl: './selected-message.component.html',
                styleUrls: ['./selected-message.component.css'],
            }]
    }], function () { return [{ type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { scrollable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollable']
        }] }); })();


/***/ }),

/***/ "TdOT":
/*!********************************************************!*\
  !*** ./src/app/post-details/post-details.component.ts ***!
  \********************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/posts.service */ "jwUf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PostDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comm_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comment left by user: ", comm_r1.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comm_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comm_r1.date);
} }
class PostDetailsComponent {
    constructor(route, postService) {
        this.route = route;
        this.postService = postService;
        this.postId = 0;
        this.data = {};
    }
    createComment() {
        this.data = {
            "content": this.content,
            "date": "2020-10-20",
            "id": 0,
            "postId": this.postId,
            "userId": 1
        };
        this.postService.newComment(this.data);
        window.location.reload();
    }
    ngOnInit() {
        this.postId = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log(this.postId);
        this.postService.getPost(this.postId)
            .subscribe((data) => {
            console.log(data);
            this.post = data;
        });
        this.postService.getCommentsByPostId(this.postId)
            .subscribe((data) => {
            console.log(data);
            this.comments = data;
        });
    }
}
PostDetailsComponent.ɵfac = function PostDetailsComponent_Factory(t) { return new (t || PostDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
PostDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDetailsComponent, selectors: [["app-post-details"]], decls: 29, vars: 5, consts: [[1, "container"], ["id", "creatPostBlock"], [1, "p-date"], ["placeholder", "Your awesome comment...", "id", "newPostText", 3, "ngModel", "ngModelChange"], [1, "postBtn", 3, "click"], [4, "ngFor", "ngForOf"], [1, "post-block"], [2, "font-size", "11px"]], template: function PostDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostDetailsComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_Template_button_click_21_listener() { return ctx.createComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PostDetailsComponent_div_28_Template, 10, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("user id: ", ctx.post.userId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".post-block[_ngcontent-%COMP%] {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    margin-bottom: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 4px -3px rgba(0,0,0,0.75);\r\n}\r\n\r\n.p-date[_ngcontent-%COMP%] {\r\n    float:right;\r\n    font-size: 14px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    resize: none;\r\n  }\r\n\r\n#newPostText[_ngcontent-%COMP%]{\r\n    min-width: 700px;\r\n    max-width: 700px;\r\n    min-height: 100px;\r\n    border-radius: 4px;\r\n}\r\n\r\n#creatPostBlock[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto \r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]{\r\n    height: 37px;\r\n    width: 125px;\r\n    background-color: #c4c4c4;\r\n    color: white;\r\n    border: none;\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]:hover{\r\n    background-color: #d09fd7;\r\n}\r\n\r\n.deleteBtn[_ngcontent-%COMP%]{\r\n    float:right;\r\n    border:none;\r\n    background-color: #f5f5f5;\r\n    font-size: 13px;\r\n    transition-duration: 0.3s;\r\n}\r\n\r\n.deleteBtn[_ngcontent-%COMP%]:hover{\r\n    color:#663366 ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFHbEIsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQjtBQUNKOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoicG9zdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1ibG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDRweCAtM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggNHB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG5cclxuLnAtZGF0ZSB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gIH1cclxuXHJcbiNuZXdQb3N0VGV4dHtcclxuICAgIG1pbi13aWR0aDogNzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuI2NyZWF0UG9zdEJsb2Nre1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byBcclxufVxyXG4ucG9zdEJ0bntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ucG9zdEJ0bntcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcbi5wb3N0QnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwOWZkNztcclxufVxyXG4uZGVsZXRlQnRue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG59XHJcbi5kZWxldGVCdG46aG92ZXJ7XHJcbiAgICBjb2xvcjojNjYzMzY2IDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-details',
                templateUrl: './post-details.component.html',
                styleUrls: ['./post-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }]; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _dialog_change_dp_dialog_change_dp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-change-dp/dialog-change-dp.component */ "JtCm");
/* harmony import */ var _dialog_add_skill_dialog_add_skill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-add-skill/dialog-add-skill.component */ "MMwS");
/* harmony import */ var _delete_experience_delete_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../delete-experience/delete-experience.component */ "uMLo");
/* harmony import */ var _delete_education_delete_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../delete-education/delete-education.component */ "ZH1G");
/* harmony import */ var _delete_skill_delete_skill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../delete-skill/delete-skill.component */ "jqpw");
/* harmony import */ var _update_profile_about_update_profile_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../update-profile-about/update-profile-about.component */ "1VeS");
/* harmony import */ var _update_profile_education_update_profile_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../update-profile-education/update-profile-education.component */ "dUpz");
/* harmony import */ var _update_profile_experience_update_profile_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../update-profile-experience/update-profile-experience.component */ "JFKi");
/* harmony import */ var _dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-add-profile/dialog-add-profile.component */ "dZqw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_add_experience_dialog_add_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-add-experience/dialog-add-experience.component */ "nh+d");
/* harmony import */ var _dialog_add_education_dialog_add_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog-add-education/dialog-add-education.component */ "6XdS");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/contact/contact.service */ "vSZU");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
























function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r19.openDialogProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Add New Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("routerLink", "/export/", ctx_r2.profileId, "");
} }
function ProfileComponent_ng_container_8_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Connected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_container_8_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Request sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_container_8_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_ng_container_8_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r25.createContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Connect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_container_8_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_ng_container_8_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r27.acceptContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_ng_container_8_button_1_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_ng_container_8_button_2_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProfileComponent_ng_container_8_button_3_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_ng_container_8_button_4_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.isConnected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r3.isConnected && ctx_r3.isRequestSent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r3.isConnected && !ctx_r3.isRequestSent && !ctx_r3.isRequestReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r3.isConnected && ctx_r3.isRequestReceived);
} }
function ProfileComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate2"]("href", "/users/", p_r29.userId, "/profiles/", p_r29.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r29.language, "");
} }
function ProfileComponent_div_17_ul_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r32.profileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_17_ul_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_17_ul_1_ng_template_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r35.openDialogDp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r34.profileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_17_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_17_ul_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_div_17_ul_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r30.sameUser)("ngIfElse", _r33);
} }
function ProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_17_ul_1_Template, 4, 2, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.aboutList);
} }
function ProfileComponent_ng_template_18_ul_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_ng_template_18_ul_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_ng_template_18_ul_0_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r42.openDialogDp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Upload Profile Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_18_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_ng_template_18_ul_0_div_1_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_ng_template_18_ul_0_ng_template_2_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r37.sameUser)("ngIfElse", _r40);
} }
function ProfileComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ProfileComponent_ng_template_18_ul_0_Template, 4, 2, "ul", 17);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r8.aboutList);
} }
function ProfileComponent_ul_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_ul_25_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_ul_25_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const p_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r48.openDialogAbout(p_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "border_color");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ul_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_ul_25_div_2_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProfileComponent_ul_25_ng_template_3_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r44 = ctx.$implicit;
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r44.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r9.sameUser)("ngIfElse", _r46);
} }
function ProfileComponent_ul_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_ul_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_ul_27_ng_template_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r55.openDialogExperience(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ul_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_ul_27_div_1_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_ul_27_ng_template_2_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r10.sameUser)("ngIfElse", _r53);
} }
function ProfileComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("fas fa-exclamation-circle ", ctx_r11.allowedToSee.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r11.allowedToSee.message, " ");
} }
function ProfileComponent_tr_34_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_tr_34_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_tr_34_ng_template_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r63); const p_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r61.openDialogUpdateExp(p_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "border_color");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_tr_34_ng_template_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r63); const p_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r64.openDialogExp(p_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ProfileComponent_tr_34_div_13_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ProfileComponent_tr_34_ng_template_14_Template, 7, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r57 = ctx.$implicit;
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](15);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 9, p_r57.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", p_r57.company, " . ", p_r57.employmentType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", p_r57.startDateExperience, " - ", p_r57.endDateExperience, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r57.descriptionExperience, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r57.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r12.sameUser)("ngIfElse", _r59);
} }
function ProfileComponent_ul_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_ul_36_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_ul_36_ng_template_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r70.openDialogEducation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ul_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_ul_36_div_1_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_ul_36_ng_template_2_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r13.sameUser)("ngIfElse", _r68);
} }
function ProfileComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("fas fa-exclamation-circle ", ctx_r14.allowedToSee.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.allowedToSee.message, " ");
} }
function ProfileComponent_tr_43_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_tr_43_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_tr_43_ng_template_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r78); const p_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r76.openDialogUpdateEdu(p_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "border_color");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_tr_43_ng_template_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r78); const p_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r79.openDialogEdu(p_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ProfileComponent_tr_43_div_9_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ProfileComponent_tr_43_ng_template_10_Template, 7, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r72 = ctx.$implicit;
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r72.school, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", p_r72.degreeEducation, ", ", p_r72.fieldStudy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", p_r72.startYearEducation, " - ", p_r72.endYearEducation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r72.descriptionEducation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r15.sameUser)("ngIfElse", _r74);
} }
function ProfileComponent_ul_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_ul_45_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_ul_45_ng_template_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r85.openSkillDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_ul_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_ul_45_div_1_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_ul_45_ng_template_2_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r16.sameUser)("ngIfElse", _r83);
} }
function ProfileComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("fas fa-exclamation-circle ", ctx_r17.allowedToSee.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r17.allowedToSee.message, " ");
} }
function ProfileComponent_tr_51_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} }
function ProfileComponent_tr_51_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_tr_51_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r93); const s_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r91.openDialogSkill(s_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProfileComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProfileComponent_tr_51_div_3_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_tr_51_ng_template_4_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r87 = ctx.$implicit;
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](s_r87.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r18.sameUser)("ngIfElse", _r89);
} }
class ProfileComponent {
    // console.log(dataToAdd);
    constructor(profileService, contactService, userService, route, dialog, _snackBar, formBuilder, sanitizer) {
        this.profileService = profileService;
        this.contactService = contactService;
        this.userService = userService;
        this.route = route;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.loggedInUser = this.userService.getUserIdOfLoggedIn();
        this.isConnected = false;
        this.isRequestSent = false;
        this.isRequestReceived = false;
        this.userId = this.loggedInUser;
        this.allowedToSee = { class: 'text-danger', message: 'Sorry you cant see this!' };
        this.expToAdd = {};
        this.selectedFile = null;
        this.educationToAdd = {};
        this.experienceToAdd = {};
        this.skillToAdd = {};
        this.currentProfile = "";
        this.years = [
            { year: 2010 },
            { year: 2011 },
            { year: 2012 },
            { year: 2013 },
            { year: 2014 },
            { year: 2015 }
        ];
        this.languages = [
            { name: "English" },
            { name: "French" },
            { name: "Spanish" },
            { name: "Urdu" }
        ];
        this.jobType = [
            { name: "FullTime" },
            { name: "PartTime" },
            { name: "FreeLancer" }
        ];
    }
    // onSubmitEducation(data)
    // {
    //  this.educationToAdd = {
    //    "degreeEducation": data.degreeEducation,
    //    "descriptionEducation": data.descriptionEducation,
    //    "endYearEducation": parseInt(data.startYearEducation),
    //    "fieldStudy": data.fieldStudy,
    //    "profileId": this.profileId,
    //    "school": data.school,
    //    "startYearEducation": parseInt(data.endYearEducation)
    //    }
    //    this.profileService.addEducation(<JSON>this.educationToAdd, this.userId, this.profileId)
    //    this.ngOnInit();
    // }
    // onSubmitSkill(data)
    // {
    //  this.skillToAdd = {
    //       "id": 17,
    //       "name": data.skill,
    //       "profileId": this.profileId
    //   }
    //    this.profileService.addSkill(<JSON>this.skillToAdd, this.userId, this.profileId)
    //    this.ngOnInit();
    // }
    // onSubmitExperience(data){
    //   this.experienceToAdd = {
    //     "company": data.company,
    //     "descriptionExperience": data.descriptionExperience,
    //     "employmentType":data.employementType,
    //     "endDateExperience": parseInt(data.endDateExperience),
    //     // "id":453,
    //     "location": data.locationId,
    //     "profileId": this.profileId,
    //     "startDateExperience": parseInt(data.startDateExperience),
    //     "title": data.title
    //      }
    //      console.warn(this.experienceToAdd);
    //      this.profileService.addExperience(<JSON>this.experienceToAdd, this.userId, this.profileId)
    //      this.ngOnInit();
    // }
    //   onSubmitProfile(data){
    //     this.profileToAdd = {
    //       "language": data.language,
    //       "userId": this.userId
    //     }
    //     this.profileService.addProfile(<JSON>this.profileToAdd, this.userId)
    //       .subscribe(
    //         newProfile => {
    //           console.log("New Profile Added ----------------");
    //           console.log(newProfile);
    //           this.aboutToAdd = {
    //             "content": data.about,
    //             "profileId": newProfile
    //         }
    //           this.profileService.addAbout(<JSON>this.aboutToAdd,  this.userId, newProfile)
    //           console.log("test about");
    //           console.log(this.aboutToAdd);
    //           //this.isConnected = true;
    //         },(error: Response) => {
    //           if(error.status === 409){
    //             this._snackBar.open('Given Language already exist Exists!', 'End now', {
    //               duration: 2000,
    //             });
    //             }  else if(error.status === 401){
    //               console.log("sorry not sorry");
    //               this.showAllowedToSee();
    //             } 
    //             else 
    //             {
    //               alert('error')
    //             }
    //         });
    //  // window.location.reload();
    //  this.ngOnInit();
    //  //this.refresh();
    // }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            console.log("yes aadded");
        }
    }
    openDialogDp() {
        const dialogRef = this.dialog.open(_dialog_change_dp_dialog_change_dp_component__WEBPACK_IMPORTED_MODULE_0__["DialogChangeDpComponent"], {
            width: '50%',
            data: { User: this.foundUser },
            panelClass: ['custom-modalbox', 'animate__animated', 'animate__slideInLeft']
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllExperience();
        });
    }
    openDialogProfile() {
        const dialogRef = this.dialog.open(_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_8__["DialogAddProfileComponent"], {
            width: '50%',
            data: { User: this.foundUser },
            panelClass: ['custom-modalbox', 'animate__animated', 'animate__slideInLeft']
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllExperience();
        });
    }
    openDialogExperience() {
        const dialogRef = this.dialog.open(_dialog_add_experience_dialog_add_experience_component__WEBPACK_IMPORTED_MODULE_10__["DialogAddExperienceComponent"], {
            width: '50%',
            data: { User: this.foundUser, Profile: this.profileId },
            panelClass: ['custom-modalbox', 'animate__animated', 'animate__slideInLeft']
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllExperience();
        });
    }
    openDialogEducation() {
        const dialogRef = this.dialog.open(_dialog_add_education_dialog_add_education_component__WEBPACK_IMPORTED_MODULE_11__["DialogAddEducationComponent"], {
            width: '50%',
            data: { User: this.foundUser, Profile: this.profileId },
            panelClass: ['custom-modalbox', 'animate__animated', 'animate__slideInLeft']
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllEducation();
        });
    }
    openSkillDialog() {
        const dialogRef = this.dialog.open(_dialog_add_skill_dialog_add_skill_component__WEBPACK_IMPORTED_MODULE_1__["DialogAddSkillComponent"], {
            maxWidth: '50%',
            data: { User: this.foundUser, Profile: this.profileId },
            panelClass: ['custom-modalbox', 'animate__animated', 'animate__slideInLeft']
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllSkills();
        });
    }
    // get all skills 
    getAllSkills() {
        this.profileService.getSkillsById(this.userId, this.profileId)
            .subscribe(data => {
            this.skills = data;
            this.ngOnInit();
        });
    }
    //open dialog for skills
    openDialogSkill(skill) {
        console.log(skill);
        const dialogRef = this.dialog.open(_delete_skill_delete_skill_component__WEBPACK_IMPORTED_MODULE_4__["DeleteSkillComponent"], {
            maxWidth: '50%',
            data: { skill: skill }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllSkills();
            this.ngOnInit();
        });
    }
    // get all Education
    getAllEducation() {
        this.profileService.getEducationsById(this.userId, this.profileId)
            .subscribe(data => {
            this.educations = data;
            this.ngOnInit();
        });
    }
    //open dialog for education
    openDialogEdu(education) {
        console.log(education);
        const dialogRef = this.dialog.open(_delete_education_delete_education_component__WEBPACK_IMPORTED_MODULE_3__["DeleteEducationComponent"], {
            maxWidth: '50%',
            data: { education: education }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllEducation();
        });
    }
    // get all Experience
    getAllExperience() {
        this.profileService.getExperienceById(this.userId, this.profileId)
            .subscribe(data => {
            this.experiences = data;
            this.ngOnInit();
        });
    }
    //open dialog for experience
    openDialogExp(experience) {
        console.log(experience);
        const dialogRef = this.dialog.open(_delete_experience_delete_experience_component__WEBPACK_IMPORTED_MODULE_2__["DeleteExperienceComponent"], {
            maxWidth: '50%',
            data: { experience: experience }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllExperience();
        });
    }
    GetAllAbout() {
        this.profileService.getAboutById(this.userId, this.profileId).subscribe((data) => {
            this.about = data;
            this.ngOnInit();
            console.log(this.about);
            this.ngOnInit();
        });
    }
    openDialogAbout(about) {
        const dialogRef = this.dialog.open(_update_profile_about_update_profile_about_component__WEBPACK_IMPORTED_MODULE_5__["UpdateProfileAboutComponent"], {
            maxWidth: '50%',
            data: { about: about }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.GetAllAbout();
        });
    }
    openDialogUpdateEdu(education) {
        const dialogRef = this.dialog.open(_update_profile_education_update_profile_education_component__WEBPACK_IMPORTED_MODULE_6__["UpdateProfileEducationComponent"], {
            maxWidth: '50%',
            data: { education: education }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllEducation();
        });
    }
    openDialogUpdateExp(experience) {
        const dialogRef = this.dialog.open(_update_profile_experience_update_profile_experience_component__WEBPACK_IMPORTED_MODULE_7__["UpdateProfileExperienceComponent"], {
            maxWidth: '50%',
            data: { experience: experience }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            this.getAllExperience();
        });
    }
    refresh() {
        window.location.reload();
    }
    clickMethod(name) {
        if (confirm("Are you sure to delete " + name)) {
            console.log("Implement delete functionality here");
        }
    }
    CurrentProfile(idG) {
        var self = this;
        this.profileData.forEach(function (value) {
            if (value.id == idG) {
                self.currentProfile = value.language;
                // console.log(this.tempProfile)
            }
        });
        console.log("Language");
        console.log(this.currentProfile);
    }
    refreshProfile() {
        this.profileService.getProfile(this.userId).
            subscribe(data => {
            this.profileData = data;
            console.log("Total profiles are");
            console.log(this.profileData);
        });
        this.profileService.getUser(this.userId)
            .subscribe((data) => {
            this.foundUser = data;
            this.userFirstName = this.foundUser.firstName;
            this.userLastName = this.foundUser.lastName;
            if (this.foundUser.image == "") {
                this.profileUrl = "https://lh5.googleusercontent.com/proxy/HRnHradLWE7OZ2OZqlQI6puaWBYYxL0M9hK4zdYCyy64DowTsbZfWtzEt5PmlEbD_-lsEEJ2JpulUqQhJwX2lrx5q3sIT00R4IB6QZttREX8WGVztVqCJuHxKHA4Dhh2vRXOeIasK-8lN6Xq1rjE2dbq6ps=w1200-h630-p-k-no-nu";
                console.log(this.profileUrl);
            }
            else {
                this.profileUrl = this.foundUser.image;
            }
            // this.profileUrl = this.sanitizer.bypassSecurityTrustUrl(this.profileUrl);
            // this.userImage = this.foundUser.userImage;
            console.log("Found User");
            console.log(this.foundUser);
            console.log("Found img");
            console.log(this.profileUrl);
        });
        this.profileService.getEducationsById(this.userId, this.profileId).subscribe((data) => {
            this.errorMsgEdu = false;
            this.educationsList = data;
            console.log(this.educationsList);
            console.log("profile id");
            console.log(this.profileId);
            this.CurrentProfile(this.profileId);
        }
        //   ,
        //   (error: Response) => {
        //     if(error.status === 404){
        //       this._snackBar.open('Id is wrong!!', 'End now', {
        //         duration: 1000,
        //       });
        //       }  else if(error.status === 401){
        //         console.log("sorry not sorry");
        //         this.errorMsgEdu = true;
        //       } 
        //   }
        );
        this.profileService.getExperienceById(this.userId, this.profileId).subscribe((data) => {
            this.errorMsgExp = false;
            this.experiencesList = data;
            console.log(this.experiencesList);
        }
        // ,
        // (error: Response) => {
        //   if(error.status === 404){
        //     this._snackBar.open('Id is wrong!!', 'End now', {
        //       duration: 1000,
        //      });
        //    } else if(error.status === 401){
        //     console.log("sorry not sorry");
        //     this.errorMsgExp = true;
        //   }  
        // }
        );
        this.profileService.getSkillsById(this.userId, this.profileId).subscribe((data) => {
            this.errorMsgSki = false;
            this.skillsList = data;
            console.log(this.skillsList);
        }
        // ,
        // (error: Response) => {
        //   if(error.status === 404){
        //     this._snackBar.open('Id is wrong!!', 'End now', {
        //       duration: 1000,
        //      });
        //    }
        //    else if(error.status === 401){
        //      console.log("sorry not sorry");
        //      this.errorMsgSki = true;
        //    }
        // }
        );
        this.profileService.getAboutById(this.userId, this.profileId).subscribe((data) => {
            this.aboutList = data;
            console.log(this.aboutList);
        }
        // ,
        // (error: Response) => {
        //   if(error.status === 404){
        //     this._snackBar.open('Id is wrong!!', 'End now', {
        //       duration: 1000,
        //      });
        //    } 
        // }
        );
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                this.url = event.target.result;
                console.log("text for image");
                console.log(this.url);
            };
        }
    }
    ngOnInit() {
        let profileUserId = +this.route.snapshot.paramMap.get('id');
        this.anotherUserId = +this.route.snapshot.paramMap.get('id');
        console.log("Another User Profile id " + this.anotherUserId);
        console.log("Your Profile id " + this.userId);
        if (this.userId == this.anotherUserId) {
            this.sameUser = true;
        }
        this.profileService.getUser(profileUserId)
            .subscribe((data) => {
            this.profileUser = data;
            console.log("Profile user " + this.profileUser.profileId);
        });
        // this.profileService.getPicture().subscribe(response=>{
        //   console.log("------------------");
        //   console.log(response);
        // });
        //this.profileUser = +this.route.snapshot.paramMap.get('id');
        this.userId = +this.route.snapshot.paramMap.get('id');
        this.profileId = +this.route.snapshot.paramMap.get('profileId');
        console.log(this.profileId);
        console.log(this.userId);
        console.log(this.profileUser);
        this.refreshProfile();
        // GET ALL CONTACTS
        this.contactService.getAll()
            .subscribe(contacts => {
            this.contacts = contacts;
            console.log("CONTACTS " + contacts);
            if (this.contacts.length > 0) {
                this.contacts.forEach(contact => {
                    var _a, _b, _c, _d;
                    // Logged in user sent request or other user sent request, status isAccepted true
                    if (((contact.user.id == this.loggedInUser && contact.friend.id == ((_a = this.profileUser) === null || _a === void 0 ? void 0 : _a.id)) || (contact.user.id == ((_b = this.profileUser) === null || _b === void 0 ? void 0 : _b.id) && contact.friend.id == this.loggedInUser)) && contact.isAccepted == true) {
                        this.isRequestSent = true;
                        this.isConnected = true;
                        this.contact = contact;
                        return;
                    }
                    // Logged in user sent request, status isAccepted false, status isAccepted false
                    else if (((contact.user.id == this.loggedInUser && contact.friend.id == ((_c = this.profileUser) === null || _c === void 0 ? void 0 : _c.id)) && !contact.isAccepted)) {
                        this.isRequestSent = true;
                        this.isConnected = false;
                        this.contact = contact;
                        return;
                    }
                    else if (((contact.friend.id == this.loggedInUser && contact.user.id == ((_d = this.profileUser) === null || _d === void 0 ? void 0 : _d.id)) && !contact.isAccepted)) {
                        this.isRequestReceived = true;
                        this.isConnected = false;
                        this.contact = contact;
                        return;
                    }
                });
            }
            this.getUserDTO();
        });
    }
    getUserDTO() {
        this.profileService.getUser(this.loggedInUser)
            .subscribe((data) => {
            this.currentUser = data;
            console.log("CURRENT " + this.currentUser);
        });
    }
    //deleting skill data
    deleteSkill() {
        this.profileService.deleteSkill(this.profile.userId, this.skill.profileId, this.skill.id).subscribe((data) => {
            this.skillsList = data;
            console.log(this.skillsList);
        });
    }
    //deleting experience data
    deleteEducation() {
        this.profileService.deleteEducation(this.profile.userId, this.education.profileId, this.education.id).subscribe((data) => {
            this.educationsList = data;
            console.log(this.educationsList);
        });
    }
    //deleting experience data
    deleteExperience(experineceId) {
        this.profileService.deleteExperience(this.userId, this.profileId, experineceId).subscribe(data => {
            console.log(data);
        });
    }
    //  constructor(private route: ActivatedRoute) {
    //     this.route.params.subscribe(params => console.log(params))
    //    }
    //  // educations: Education[];
    //   ngOnInit(): void {
    //     // this.profileService.getProfile().subscribe((data)=>
    //     // {
    //     //   console.log(data);
    //     //   t his.educations=<Education[]>data;
    //   // });
    /*------------------------------------------------------ CONTACTS -------------------------------------------------------- */
    getContacts() {
        this.contactService.getAll()
            .subscribe(contacts => {
            this.contacts = contacts;
        });
    }
    createContact() {
        let user;
        this.contacts.forEach(contact => {
            if (contact.user.id == this.loggedInUser) {
                user = contact.user;
                return;
            }
            else if (contact.friend.id == this.loggedInUser) {
                user = contact.friend;
                return;
            }
        });
        user = this.currentUser;
        // get logged in user id from auth and friendId from url
        let contact = { user: user, friend: this.profileUser, isAccepted: false };
        this.contactService.create(contact)
            .subscribe(newContact => {
            this.isRequestSent = true;
        });
    }
    // deleteContact() {
    //   // get logged in user id from auth and contatcId from link
    //   this.contactService.delete(1)
    //     .subscribe();
    // }
    // ACCEPT REQUEST
    acceptContact() {
        this.contact.isAccepted = true;
        this.contactService.update(this.contact)
            .subscribe(updatedContact => {
            this.isConnected = true;
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], inputs: { expToAdd: "expToAdd" }, decls: 52, vars: 19, consts: [[1, "container"], [1, "clearfix"], [1, "float-right", "add-new-profile", "clearfix"], [4, "ngIf", "ngIfElse"], ["isSameUser", ""], [1, "container", "big-container", "border", "clearfix", "mat-elevation-z3"], [1, "float-right"], [4, "ngIf"], [1, "dropdown"], [1, "dropbtn", "dropdown-toggle", "switch-profile-button"], [1, "dropdown-content"], [4, "ngFor", "ngForOf"], ["id", "pdfTable"], ["pdfTable", ""], ["ng-controller", "userImage, userFirstName, userLastName", 1, "name"], ["noProfilePicture", ""], [1, "container", "p-3", "my-3", "border", "block-profile"], ["id", "test", "class", "edit", 4, "ngFor", "ngForOf"], [1, "table", "table-striped"], ["id", "test", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "add-new-profile-button", "float-right", 3, "routerLink"], ["type", "button", 1, "btn", "add-new-profile-button", "float-right", 3, "click"], ["mat-raised-button", "", "id", "contact", "class", "float-right", 4, "ngIf"], ["mat-raised-button", "", "id", "contact", "class", "float-right", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "id", "contact", 1, "float-right"], ["mat-raised-button", "", "id", "contact", 1, "float-right", 3, "click"], [1, "dropdown-item", "switch-profile", 3, "href"], ["id", "test", 1, "edit"], ["width", "100%", 1, "zoom", 3, "src"], ["width", "100%", 1, "zoom", 3, "src", "click"], [3, "click"], ["mat-icon-button", "", "ria-label", "", 1, "edit-icon", "icons", 3, "click"], ["aria-hidden", "false", "aria-label", "Example add icon", "id", "buttonAdd", 1, "icons", "float-right", "add-icon", 3, "click"], ["id", "test"], [1, "font-italic"], ["differentUser", ""], [1, "icons"], ["mat-icon-button", "", "ria-label", "", 3, "click"], ["mat-icon-button", "", "ria-label", "", 1, "float-right", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_ng_template_4_Template, 5, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ProfileComponent_ng_container_8_Template, 5, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ProfileComponent_li_13_Template, 3, 3, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, ProfileComponent_div_17_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ProfileComponent_ng_template_18_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ProfileComponent_ul_25_Template, 5, 3, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ProfileComponent_ul_27_Template, 4, 2, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, ProfileComponent_span_32_Template, 3, 4, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ProfileComponent_tr_34_Template, 16, 11, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, ProfileComponent_ul_36_Template, 4, 2, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Educations");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, ProfileComponent_span_41_Template, 3, 4, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, ProfileComponent_tr_43_Template, 12, 8, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, ProfileComponent_ul_45_Template, 4, 2, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ProfileComponent_span_48_Template, 3, 4, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, ProfileComponent_tr_51_Template, 6, 3, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.sameUser)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loggedInUser != (ctx.profileUser == null ? null : ctx.profileUser.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.currentProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.profileData);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.profileUrl == null ? null : ctx.profileUrl.length) > 0)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx.userFirstName, " ", ctx.userLastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.aboutList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.aboutList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.errorMsgExp);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.experiencesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.aboutList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.errorMsgEdu);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.educationsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.aboutList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.errorMsgSki);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.skillsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["UpperCasePipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.ProfilePage-Block[_ngcontent-%COMP%] {\r\n  background-color: gainsboro;\r\n}\r\n#buttonAdd[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  margin-bottom: 3%;\r\n  cursor: pointer;\r\n}\r\n.block-profile[_ngcontent-%COMP%] {\r\n  \r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  padding-left: 2%;\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  margin-bottom: 5%;\r\n  margin-bottom: 2rem !important;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  \r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  font-size: 18px;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n#contact[_ngcontent-%COMP%] {\r\n  margin: 2% 0% 2% 75%;\r\n  background-color: #0075db;\r\n  color: white;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  \r\n}\r\n.modal-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  float: left;\r\n  padding-top: 25px;\r\n}\r\n#submitButton[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: #0075db;\r\n  color: white;\r\n  text-decoration: none;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n.modal-header[_ngcontent-%COMP%] {\r\n  background-color: #623165;\r\n  color: white;\r\n}\r\n.hide[_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n.dropbtn[_ngcontent-%COMP%] {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n}\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n\r\n  \r\n  list-style: none;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\nwidth: -webkit-fit-content;\r\nwidth: -moz-fit-content;\r\nwidth: fit-content;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #ddd;\r\n}\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.input-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n#contact[_ngcontent-%COMP%] {\r\n  background-color: #0075db;\r\n  color: white;\r\n  height: 3em;\r\n  \r\n  margin: 0;\r\n  \r\n}\r\n#contact[_ngcontent-%COMP%]:hover {\r\n  background: white;\r\n  color: #0075db;\r\n  border: 1px solid #0075db;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  \r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  font-size: 18px;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  \r\n  margin: 30px auto;\r\n}\r\n\r\n.big-container[_ngcontent-%COMP%] {\r\n  background: white;\r\n  padding-top: 3%;\r\n  margin: 1% auto 6%;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 30%;\r\n}\r\n.name[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\r\n  font-size: 2.1em;\r\n}\r\n\r\n.add-new-profile[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  margin: 3% auto;\r\n}\r\n.btn.add-new-profile-button[_ngcontent-%COMP%] {\r\n  background-color: #0075db;\r\n  color: white;\r\n  margin-right: 0;\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%] {\r\n  border-radius: 7%;\r\n  font-size: 1em;\r\n  padding: 0.8em;\r\n  margin-right: 1em;\r\n  background-color: #fff;\r\n  border: 1px solid #524d43;\r\n  color: #000;\r\n  transition: box-shadow 0.3s;\r\n  margin-right: 1em;\r\n}\r\na.switch-profile[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n  float: right;\r\n  color: #e40086;\r\n  background-color: transparent;\r\n}\r\n.material-icons[_ngcontent-%COMP%] {\r\n  font-size: 1.4em;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n  padding-left: 0 !important;\r\n}\r\n.edit-icon[_ngcontent-%COMP%] {\r\n  float: right;\r\n  text-align: center;\r\n}\r\n\r\n.add-icon[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n}\r\n.zoom[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  transition: transform 0.2s; \r\n  margin: 0 auto;\r\n}\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.5); \r\n}\r\n\r\n@media screen and (max-width: 1190px) {\r\n  .add-new-profile[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    margin: 3% auto;\r\n  }\r\n\r\n  \r\n  .btn.add-new-profile-button[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n  }\r\n}\r\n  .mat-form-field {\r\n  width: 100%;\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBOztFQUVFLFlBQVk7QUFDZDtBQUVBLFlBQVk7QUFDWjtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7O0dBRUc7QUFDSDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCOztFQUVyQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQiwwQkFBa0I7QUFBbEIsdUJBQWtCO0FBQWxCLGtCQUFrQjtFQUNoQiwrQ0FBK0M7RUFDL0MsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsU0FBUztFQUNULHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsU0FBUztBQUNUO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUEsUUFBUTtBQUNSO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUUsY0FBYztFQUMxQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxxQkFBcUIsRUFBRSxlQUFlO0FBQ3hDO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQSxvQkFBb0I7RUFDcEI7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDUlOyAqL1xyXG59XHJcbi5Qcm9maWxlUGFnZS1CbG9jayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG59XHJcblxyXG4jYnV0dG9uQWRkIHtcclxuICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgLyogbWFyZ2luLXJpZ2h0OiAxMCU7ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ibG9jay1wcm9maWxlIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcclxufVxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC8qIG1heC13aWR0aDogNzAwcHg7ICovXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIsXHJcbmE6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLyogQ29udGFjdCAqL1xyXG4jY29udGFjdCB7XHJcbiAgbWFyZ2luOiAyJSAwJSAyJSA3NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzVkYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIC5tb2RhbC1ib2R5IHtcclxuICBcclxufSAqL1xyXG4ubW9kYWwtYm9keSBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogbWFyZ2luOiAxMHB4OyAqL1xyXG59XHJcbi5tb2RhbC1ib2R5IGxhYmVsIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuI3N1Ym1pdEJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc1ZGI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIzMTY1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAvKiBtYXJnaW4tbGVmdDogODAlOyAqL1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG53aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTsgKi9cclxufVxyXG5cclxuLmlucHV0LWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNjb250YWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NWRiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDNlbTtcclxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXHJcbiAgbWFyZ2luOiAwO1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cclxufVxyXG5cclxuI2NvbnRhY3Q6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMDA3NWRiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDc1ZGI7XHJcbn1cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAvKiBtYXgtd2lkdGg6IDcwMHB4OyAqL1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyLFxyXG5hOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8qIG1hcmdpbjozMHB4ICovXHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgZW50aXJlIHByb2ZpbGUgKi9cclxuLmJpZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxuICBtYXJnaW46IDElIGF1dG8gNiU7XHJcbn1cclxuXHJcbi8qIFVzZXIgbmFtZSAqL1xyXG4ubmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5uYW1lID4gaDEge1xyXG4gIGZvbnQtc2l6ZTogMi4xZW07XHJcbn1cclxuXHJcbi8qIEFkZCBuZXcgcHJvZmlsZSAqL1xyXG4uYWRkLW5ldy1wcm9maWxlIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbjogMyUgYXV0bztcclxufVxyXG5cclxuLmJ0bi5hZGQtbmV3LXByb2ZpbGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NWRiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIFN3aXRjaCBwcm9maWxlIGJ1dHRvbiAqL1xyXG4uZHJvcGJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogNyU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogMC44ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTI0ZDQzO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuYS5zd2l0Y2gtcHJvZmlsZSB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi8qIEljb25zICovXHJcbi5pY29ucyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZTQwMDg2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuXHJcbi8qIEVkaXQgKi9cclxuLmVkaXQge1xyXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdC1pY29uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBBZGQgKi9cclxuLmFkZC1pY29uIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi56b29tIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uem9vbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiAoMTUwJSB6b29tKSovXHJcbn1cclxuLyogc21hbGwgc2NyZWVuICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTBweCkge1xyXG4gIC5hZGQtbmV3LXByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogMyUgYXV0bztcclxuICB9XHJcblxyXG4gIC8qIEFkZCBuZXcgcHJvZmlsZSAqL1xyXG4gIC5idG4uYWRkLW5ldy1wcm9maWxlLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgLyogZm9udC1zaXplOiAxMHB4OyAgICAqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"] }, { type: _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"] }]; }, { expToAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
        }] }); })();


/***/ }),

/***/ "WhT/":
/*!***********************************************************************!*\
  !*** ./src/app/errors/unexpected-error/unexpected-error.component.ts ***!
  \***********************************************************************/
/*! exports provided: UnexpectedErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnexpectedErrorComponent", function() { return UnexpectedErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UnexpectedErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnexpectedErrorComponent.ɵfac = function UnexpectedErrorComponent_Factory(t) { return new (t || UnexpectedErrorComponent)(); };
UnexpectedErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnexpectedErrorComponent, selectors: [["app-unexpected-error"]], decls: 7, vars: 0, consts: [["id", "content"], ["src", "assets/unexpected-error.png", "alt", ""], [1, "type"]], template: function UnexpectedErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Something went wrong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please try again later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n\twidth: 400px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  font-family: myriad-pro, 'Myriad Pro', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  margin: 0;\r\n  -webkit-margin-before: 0;\r\n  -webkit-margin-after: 0;\r\n  -webkit-margin-start: 0;\r\n  -webkit-margin-end: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n  font-weight:400;\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  h2[_ngcontent-%COMP%] {\r\n\tfont-size: 40px;\r\n\tline-height: 45px;\r\n  }\r\n  p[_ngcontent-%COMP%] {\r\n\tfont-size: 22px;\r\n\tline-height: 50px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 980px) {\r\n  h2[_ngcontent-%COMP%] {\r\n\tfont-size: 2.9em;\r\n\tline-height: 50px;\r\n  }\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n\tposition:relative;\r\n\tdisplay:block;\r\n\tpadding:15px;\r\n\tmargin:0 auto;\r\n\tmax-width: 100%;\r\n\ttext-align:center;\r\n\theight:calc(100vh - 60px);\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%] {\r\n\tposition:absolute;\r\n\tdisplay:block;\r\n\twidth:calc(100% - 30px); height:auto;\r\n\ttop:50%;\r\n\ttransform:translateY(-50%);\r\n}\r\n\r\n.type[_ngcontent-%COMP%] {\r\n\tdisplay:inline-block;\r\n\tfont-size:16px; \r\n\tline-height: 55px;\r\n\ttext-transform:uppercase;\r\n\tfont-weight:600;\r\n\tletter-spacing:0.1em;\r\n\t\r\n\tcolor: block;\r\n\tmargin-bottom:30px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n\tfont-size: 1.4em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZXhwZWN0ZWQtZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTs7RUFFRSxrR0FBa0c7RUFDbEcsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0NBQ0QsZUFBZTtDQUNmLGlCQUFpQjtFQUNoQjtFQUNBO0NBQ0QsZUFBZTtDQUNmLGlCQUFpQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0U7Q0FDRCxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0VBQ2hCO0FBQ0Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLFlBQVk7Q0FDWixhQUFhO0NBQ2IsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHVCQUF1QixFQUFFLFdBQVc7Q0FDcEMsT0FBTztDQUNQLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InVuZXhwZWN0ZWQtZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5oMixcclxucCB7XHJcbiAgZm9udC1mYW1pbHk6IG15cmlhZC1wcm8sICdNeXJpYWQgUHJvJywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIC13ZWJraXQtbWFyZ2luLWJlZm9yZTogMDtcclxuICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMDtcclxuICAtd2Via2l0LW1hcmdpbi1zdGFydDogMDtcclxuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGgyIHtcclxuXHRmb250LXNpemU6IDQwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG4gIHAge1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRsaW5lLWhlaWdodDogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIHtcclxuICBoMiB7XHJcblx0Zm9udC1zaXplOiAyLjllbTtcclxuXHRsaW5lLWhlaWdodDogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0cGFkZGluZzoxNXB4O1xyXG5cdG1hcmdpbjowIGF1dG87XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGhlaWdodDpjYWxjKDEwMHZoIC0gNjBweCk7XHJcbn1cclxuICBcclxuc2VjdGlvbiAjY29udGVudCB7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHR3aWR0aDpjYWxjKDEwMCUgLSAzMHB4KTsgaGVpZ2h0OmF1dG87XHJcblx0dG9wOjUwJTtcclxuXHR0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4gIFxyXG4udHlwZSB7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOjE2cHg7IFxyXG5cdGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDo2MDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6MC4xZW07XHJcblx0LyogY29sb3I6I2NjYzsgKi9cclxuXHRjb2xvcjogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LXNpemU6IDEuNGVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnexpectedErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unexpected-error',
                templateUrl: './unexpected-error.component.html',
                styleUrls: ['./unexpected-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WmUH":
/*!******************************************************************!*\
  !*** ./src/app/delete-connection/delete-connection.component.ts ***!
  \******************************************************************/
/*! exports provided: DeleteConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConnectionComponent", function() { return DeleteConnectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contact/contact.service */ "vSZU");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






// expect const DIALOG_DATA = new InjectionToken('DIALOG_DATA');
class DeleteConnectionComponent {
    constructor(contactService, dialogRef, data) {
        this.contactService = contactService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loggedInUser = 1;
        console.log("Data " + data.connectionId);
    }
    onNoClick() {
        // Close dialog
        this.dialogRef.close();
    }
    delete() {
        // Delete connection
        console.log("DELETING ID: " + this.data.connection);
        console.log("DELETING ID: " + this.data.connection.firstName);
        this.contactService.delete(this.data.connection.id)
            .subscribe();
        // Close dialog
        this.dialogRef.close();
    }
}
DeleteConnectionComponent.ɵfac = function DeleteConnectionComponent_Factory(t) { return new (t || DeleteConnectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeleteConnectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteConnectionComponent, selectors: [["app-delete-connection"]], decls: 8, vars: 1, consts: [["id", "question", "mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function DeleteConnectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConnectionComponent_Template_button_click_4_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConnectionComponent_Template_button_click_6_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to delete ", ctx.loggedInUser == ctx.data.connection.user.id ? ctx.data.connection.friend.firstName + " " + ctx.data.connection.friend.lastName : ctx.data.connection.user.firstName + " " + ctx.data.connection.user.lastName, "?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#question[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    margin: 5%;\r\n}\r\n\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n    min-width: 40%;\r\n    margin: 15% 5%;\r\n    background: #0075db;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1130px) {\r\n    \r\n    .mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n        min-width: 90%;\r\n        margin: 5%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jb25uZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiO0lBQ0ksVUFBVTtBQUNkO0FBR0EsV0FBVztBQUNYO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUdBLDJCQUEyQjtBQUMzQjtJQUNJLHNDQUFzQztJQUN0QztRQUNJLGNBQWM7UUFDZCxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJkZWxldGUtY29ubmVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUVVFU1RJT04gKi9cclxuI3F1ZXN0aW9uID4gcCB7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG5cclxuLyogQlVUVE9OICovXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDE1JSA1JTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc1ZGI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiBzY3JlZW5zIGxlc3MgdGhhbiAxMTMwICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xyXG4gICAgLyogc3RhY2sgYnV0dG9uIG9uIHRvcCBvZiBlYWNoIG90aGVyICovXHJcbiAgICAubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiA1JTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteConnectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-connection',
                templateUrl: './delete-connection.component.html',
                styleUrls: ['./delete-connection.component.css']
            }]
    }], function () { return [{ type: _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Y3/I":
/*!*************************************************************************!*\
  !*** ./src/app/post/update-post-dialog/update-post-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdatePostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostDialogComponent", function() { return UpdatePostDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts.service */ "jwUf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UpdatePostDialogComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePostDialogComponent_div_19_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closeImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UpdatePostDialogComponent {
    constructor(postService, formBuilder, dialogRef, data) {
        this.postService = postService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.postId = 0;
        this.data1 = {};
    }
    saveVal(item) {
        this.newContent = item.target.value;
        console.log(this.newContent);
    }
    updatePost() {
        var _a, _b, _c, _d;
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('profile').value);
        this.postService.uploadPicture(localStorage.getItem("userId"), formData).subscribe((data) => {
            this.postUrl = data;
            console.log("data");
            console.log(this.postUrl);
        });
        console.log(this.lenImg());
        if (this.lenImg()) {
            this.data = {
                "content": this.newContent,
                "date": this.post.date,
                "id": (_a = this.post) === null || _a === void 0 ? void 0 : _a.id,
                "userId": localStorage.getItem("userId"),
                "image": "assets/" + localStorage.getItem("userId") + this.uploadForm.get('profile').value.name
            };
        }
        else {
            this.data = {
                "content": this.newContent,
                "date": this.post.date,
                "id": (_b = this.post) === null || _b === void 0 ? void 0 : _b.id,
                "userId": localStorage.getItem("userId"),
                "image": (_c = this.post) === null || _c === void 0 ? void 0 : _c.image
            };
        }
        console.log(this.data);
        console.log(this.postId);
        this.postService.updatePost(this.data, (_d = this.post) === null || _d === void 0 ? void 0 : _d.id);
    }
    CloseDialog() {
        this.dialogRef.close();
    }
    lenImg() {
        var _a;
        if (((_a = this.postUrl) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    closeImg() {
        this.postUrl = "";
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            var reader = new FileReader();
            reader.onload = (event) => {
                this.postUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.post.image = "";
    }
    ngOnInit() {
        this.post = this.data.p;
        this.newContent = this.post.content;
        console.log(this.post);
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
    }
}
UpdatePostDialogComponent.ɵfac = function UpdatePostDialogComponent_Factory(t) { return new (t || UpdatePostDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
UpdatePostDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePostDialogComponent, selectors: [["app-update-post-dialog"]], decls: 28, vars: 5, consts: [[1, "update-block"], ["placeholder", "Your awesome post...", "id", "newPostText", 3, "keyup"], ["newContent", ""], [3, "formGroup"], ["type", "file", "name", "profile", 2, "display", "none", 3, "change"], ["selectPicture", ""], [1, "buttons"], ["type", "button", "rounded", "true", 1, "uploadBtn", 3, "click"], [2, "text-align", "center"], [4, "ngIf"], [1, "post-img", 3, "src"], [1, "postBtn", 3, "click"], [1, "closeBtn", 3, "click"], [2, "float", "right", 3, "click"]], template: function UpdatePostDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update your post!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UpdatePostDialogComponent_Template_textarea_keyup_5_listener($event) { return ctx.saveVal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatePostDialogComponent_Template_input_change_12_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePostDialogComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UpdatePostDialogComponent_div_19_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePostDialogComponent_Template_button_click_23_listener() { return ctx.updatePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePostDialogComponent_Template_button_click_25_listener() { return ctx.CloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lenImg());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.postUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".post-block[_ngcontent-%COMP%] {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    margin-bottom: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 4px -3px rgba(0,0,0,0.75);\r\n}\r\n.uploadBtn[_ngcontent-%COMP%]{\r\n    height: 36px;\r\n    width: 36px;\r\n    background-color: white;\r\n    background-image: url(\"camera.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    color: black;\r\n    border:none;\r\n    transition-duration: 0.4s;\r\n}\r\n.p-date[_ngcontent-%COMP%] {\r\n    float:right;\r\n    font-size: 14px;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n    resize: none;\r\n  }\r\n#newPostText[_ngcontent-%COMP%]{\r\n    min-width: 500px;\r\n    max-width: 700px;\r\n    min-height: 100px;\r\n    border-radius: 4px;\r\n}\r\n#creatPostBlock[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto \r\n}\r\n.postBtn[_ngcontent-%COMP%]{\r\n    height: 37px;\r\n    width: 125px;\r\n    background-color: #5aa6e8;\r\n    color: white;\r\n    border: none;\r\n    transition-duration: 0.4s;\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n}\r\n.postBtn[_ngcontent-%COMP%]:hover{\r\n    background-color: #78bdfa;\r\n}\r\n.deleteBtn[_ngcontent-%COMP%]{\r\n    float:right;\r\n    border:none;\r\n    background-color: #f5f5f5;\r\n    font-size: 13px;\r\n    transition-duration: 0.3s;\r\n}\r\n.deleteBtn[_ngcontent-%COMP%]:hover{\r\n    color:#663366 ;\r\n}\r\n.update-block[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n}\r\n.closeBtn[_ngcontent-%COMP%]{\r\n    height: 37px;\r\n    width: 125px;\r\n    background-color: white;\r\n    color: black;\r\n    border: 1px solid black;\r\n    transition-duration: 0.4s;\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n}\r\n.post-img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    max-width: 500px;\r\n    \r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wb3N0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFHbEIsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7RUFDZDtBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQjtBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoidXBkYXRlLXBvc3QtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1ibG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDRweCAtM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggNHB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4udXBsb2FkQnRue1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImNhbWVyYS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcbi5wLWRhdGUge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICB9XHJcblxyXG4jbmV3UG9zdFRleHR7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiNjcmVhdFBvc3RCbG9ja3tcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gXHJcbn1cclxuXHJcbi5wb3N0QnRue1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYTZlODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLnBvc3RCdG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhiZGZhO1xyXG59XHJcbi5kZWxldGVCdG57XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbn1cclxuLmRlbGV0ZUJ0bjpob3ZlcntcclxuICAgIGNvbG9yOiM2NjMzNjYgO1xyXG59XHJcblxyXG4udXBkYXRlLWJsb2Nre1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNsb3NlQnRue1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLnBvc3QtaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePostDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-post-dialog',
                templateUrl: './update-post-dialog.component.html',
                styleUrls: ['./update-post-dialog.component.css']
            }]
    }], function () { return [{ type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "YAXs":
/*!************************************************************!*\
  !*** ./src/app/directives/material-elevation.directive.ts ***!
  \************************************************************/
/*! exports provided: MaterialElevationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialElevationDirective", function() { return MaterialElevationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// Create shadow around elements
class MaterialElevationDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.setElevation(this.defaultElevation);
    }
    ngOnChanges(_changes) {
        this.setElevation(this.defaultElevation);
    }
    onMouseEnter() {
        this.setElevation(this.raisedElevation);
    }
    onMouseLeave() {
        this.setElevation(this.defaultElevation);
    }
    setElevation(amount) {
        // remove all elevation classes
        const classesToRemove = Array.from(this.element.nativeElement.classList).filter(c => c.startsWith('mat-elevation-z'));
        classesToRemove.forEach((c) => {
            this.renderer.removeClass(this.element.nativeElement, c);
        });
        // add the given elevation class
        const newClass = `mat-elevation-z${amount}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }
}
MaterialElevationDirective.ɵfac = function MaterialElevationDirective_Factory(t) { return new (t || MaterialElevationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
MaterialElevationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MaterialElevationDirective, selectors: [["", "appMaterialElevation", ""]], hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialElevationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appMaterialElevation]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { defaultElevation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], raisedElevation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/message/message.service */ "0UgC");
/* harmony import */ var _profile_add_information_add_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/add-information/add-information.component */ "AJCd");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/contact/contact.service */ "vSZU");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-post/update-post.component */ "DslI");
/* harmony import */ var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post-details/post-details.component */ "TdOT");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "2f1s");
/* harmony import */ var _update_profile_education_update_profile_education_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./update-profile-education/update-profile-education.component */ "dUpz");
/* harmony import */ var _update_profile_experience_update_profile_experience_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./update-profile-experience/update-profile-experience.component */ "JFKi");
/* harmony import */ var _update_profile_about_update_profile_about_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./update-profile-about/update-profile-about.component */ "1VeS");
/* harmony import */ var _connection_connection_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./connection/connection.component */ "Onjk");
/* harmony import */ var _delete_connection_delete_connection_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./delete-connection/delete-connection.component */ "WmUH");
/* harmony import */ var _delete_skill_delete_skill_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./delete-skill/delete-skill.component */ "jqpw");
/* harmony import */ var _delete_experience_delete_experience_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./delete-experience/delete-experience.component */ "uMLo");
/* harmony import */ var _delete_education_delete_education_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./delete-education/delete-education.component */ "ZH1G");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pipes/filter.pipe */ "BhhM");
/* harmony import */ var _directives_material_elevation_directive__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./directives/material-elevation.directive */ "YAXs");
/* harmony import */ var _filter_users_filter_users_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./filter-users/filter-users.component */ "FFgP");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _profile_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./profile/dialog-add-profile/dialog-add-profile.component */ "dZqw");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _profile_dialog_add_experience_dialog_add_experience_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./profile/dialog-add-experience/dialog-add-experience.component */ "nh+d");
/* harmony import */ var _profile_dialog_add_education_dialog_add_education_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./profile/dialog-add-education/dialog-add-education.component */ "6XdS");
/* harmony import */ var _profile_dialog_add_skill_dialog_add_skill_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./profile/dialog-add-skill/dialog-add-skill.component */ "MMwS");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./pipes/search.pipe */ "xaSU");
/* harmony import */ var _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./newsfeed/newsfeed.component */ "4lpD");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _messages_selected_message_selected_message_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./messages/selected-message/selected-message.component */ "T4tH");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./pipes/date-ago.pipe */ "6Kw5");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _profile_dialog_change_dp_dialog_change_dp_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./profile/dialog-change-dp/dialog-change-dp.component */ "JtCm");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _comment_username_comment_username_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./comment-username/comment-username.component */ "px1z");
/* harmony import */ var _delete_conversation_delete_conversation_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./delete-conversation/delete-conversation.component */ "Qpl/");
/* harmony import */ var _start_conversation_start_conversation_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./start-conversation/start-conversation.component */ "ynSF");
/* harmony import */ var _post_update_post_dialog_update_post_dialog_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./post/update-post-dialog/update-post-dialog.component */ "Y3/I");
/* harmony import */ var _cv_builder_cv_builder_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./cv-builder/cv-builder.component */ "z4ew");
/* harmony import */ var _errors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./errors/server-error.interceptor */ "P64D");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "4rg4");
/* harmony import */ var _errors_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./errors/forbidden/forbidden.component */ "3ug3");
/* harmony import */ var _errors_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./errors/unexpected-error/unexpected-error.component */ "WhT/");
/* harmony import */ var _errors_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./errors/bad-request/bad-request.component */ "gLj1");
/* harmony import */ var _errors_offline_offline_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./errors/offline/offline.component */ "PPJz");
/* harmony import */ var _errors_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./errors/internal-server-error/internal-server-error.component */ "xWOo");
































































 // -> imported filter pipe





































// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   wheelPropagation: true
// };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _services_message_message_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HTTP_INTERCEPTORS"],
            useClass: _errors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_93__["ServerErrorInterceptor"],
            multi: true
        }
        //     {
        //   provide: PERFECT_SCROLLBAR_CONFIG,
        //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        // }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_69__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
            // MatAutocompleteModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_66__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_26__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_30__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_32__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_72__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_45__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_71__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_47__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_76__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_49__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_50__["MatToolbarModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_52__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_69__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_71__["MatSelectModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_72__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_76__["MatSnackBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_73__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_13__["UpdatePostComponent"],
        _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__["PostDetailsComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_53__["HeaderComponent"],
        _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_54__["UserSettingsComponent"],
        _update_profile_education_update_profile_education_component__WEBPACK_IMPORTED_MODULE_55__["UpdateProfileEducationComponent"],
        _update_profile_experience_update_profile_experience_component__WEBPACK_IMPORTED_MODULE_56__["UpdateProfileExperienceComponent"],
        _update_profile_about_update_profile_about_component__WEBPACK_IMPORTED_MODULE_57__["UpdateProfileAboutComponent"],
        _connection_connection_component__WEBPACK_IMPORTED_MODULE_58__["ConnectionComponent"],
        _delete_connection_delete_connection_component__WEBPACK_IMPORTED_MODULE_59__["DeleteConnectionComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_63__["FilterPipe"],
        _directives_material_elevation_directive__WEBPACK_IMPORTED_MODULE_64__["MaterialElevationDirective"],
        _delete_skill_delete_skill_component__WEBPACK_IMPORTED_MODULE_60__["DeleteSkillComponent"],
        _delete_education_delete_education_component__WEBPACK_IMPORTED_MODULE_62__["DeleteEducationComponent"],
        _delete_experience_delete_experience_component__WEBPACK_IMPORTED_MODULE_61__["DeleteExperienceComponent"],
        _filter_users_filter_users_component__WEBPACK_IMPORTED_MODULE_65__["FilterUsersComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        // UpdateProfileComponent,
        _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
        _profile_add_information_add_information_component__WEBPACK_IMPORTED_MODULE_1__["AddInformationComponent"],
        _profile_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_75__["DialogAddProfileComponent"],
        _profile_dialog_add_experience_dialog_add_experience_component__WEBPACK_IMPORTED_MODULE_77__["DialogAddExperienceComponent"],
        _profile_dialog_add_education_dialog_add_education_component__WEBPACK_IMPORTED_MODULE_78__["DialogAddEducationComponent"],
        _profile_dialog_add_skill_dialog_add_skill_component__WEBPACK_IMPORTED_MODULE_79__["DialogAddSkillComponent"],
        _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_80__["SearchPipe"],
        _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_81__["NewsfeedComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_82__["MessagesComponent"],
        _messages_selected_message_selected_message_component__WEBPACK_IMPORTED_MODULE_83__["SelectedMessageComponent"],
        _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_84__["DateAgoPipe"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_85__["LoginComponent"],
        _profile_dialog_change_dp_dialog_change_dp_component__WEBPACK_IMPORTED_MODULE_86__["DialogChangeDpComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_87__["RegistrationComponent"],
        _comment_username_comment_username_component__WEBPACK_IMPORTED_MODULE_88__["CommentUsernameComponent"],
        _delete_conversation_delete_conversation_component__WEBPACK_IMPORTED_MODULE_89__["DeleteConversationComponent"],
        _start_conversation_start_conversation_component__WEBPACK_IMPORTED_MODULE_90__["StartConversationComponent"],
        _post_update_post_dialog_update_post_dialog_component__WEBPACK_IMPORTED_MODULE_91__["UpdatePostDialogComponent"],
        _cv_builder_cv_builder_component__WEBPACK_IMPORTED_MODULE_92__["CvBuilderComponent"], _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_94__["NotFoundComponent"], _errors_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_95__["ForbiddenComponent"], _errors_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_96__["UnexpectedErrorComponent"], _errors_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_97__["BadRequestComponent"], _errors_offline_offline_component__WEBPACK_IMPORTED_MODULE_98__["OfflineComponent"], _errors_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_99__["InternalServerErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_69__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
        // MatAutocompleteModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_66__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_26__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_30__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_32__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_72__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_45__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_71__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_47__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_76__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_49__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_50__["MatToolbarModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_52__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_69__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_71__["MatSelectModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_72__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_76__["MatSnackBarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_73__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_13__["UpdatePostComponent"],
                    _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__["PostDetailsComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_53__["HeaderComponent"],
                    _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_54__["UserSettingsComponent"],
                    _update_profile_education_update_profile_education_component__WEBPACK_IMPORTED_MODULE_55__["UpdateProfileEducationComponent"],
                    _update_profile_experience_update_profile_experience_component__WEBPACK_IMPORTED_MODULE_56__["UpdateProfileExperienceComponent"],
                    _update_profile_about_update_profile_about_component__WEBPACK_IMPORTED_MODULE_57__["UpdateProfileAboutComponent"],
                    _connection_connection_component__WEBPACK_IMPORTED_MODULE_58__["ConnectionComponent"],
                    _delete_connection_delete_connection_component__WEBPACK_IMPORTED_MODULE_59__["DeleteConnectionComponent"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_63__["FilterPipe"],
                    _directives_material_elevation_directive__WEBPACK_IMPORTED_MODULE_64__["MaterialElevationDirective"],
                    _delete_skill_delete_skill_component__WEBPACK_IMPORTED_MODULE_60__["DeleteSkillComponent"],
                    _delete_education_delete_education_component__WEBPACK_IMPORTED_MODULE_62__["DeleteEducationComponent"],
                    _delete_experience_delete_experience_component__WEBPACK_IMPORTED_MODULE_61__["DeleteExperienceComponent"],
                    _filter_users_filter_users_component__WEBPACK_IMPORTED_MODULE_65__["FilterUsersComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    // UpdateProfileComponent,
                    _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
                    _profile_add_information_add_information_component__WEBPACK_IMPORTED_MODULE_1__["AddInformationComponent"],
                    _profile_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_75__["DialogAddProfileComponent"],
                    _profile_dialog_add_experience_dialog_add_experience_component__WEBPACK_IMPORTED_MODULE_77__["DialogAddExperienceComponent"],
                    _profile_dialog_add_education_dialog_add_education_component__WEBPACK_IMPORTED_MODULE_78__["DialogAddEducationComponent"],
                    _profile_dialog_add_skill_dialog_add_skill_component__WEBPACK_IMPORTED_MODULE_79__["DialogAddSkillComponent"],
                    _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_80__["SearchPipe"],
                    _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_81__["NewsfeedComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_82__["MessagesComponent"],
                    _messages_selected_message_selected_message_component__WEBPACK_IMPORTED_MODULE_83__["SelectedMessageComponent"],
                    _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_84__["DateAgoPipe"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_85__["LoginComponent"],
                    _profile_dialog_change_dp_dialog_change_dp_component__WEBPACK_IMPORTED_MODULE_86__["DialogChangeDpComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_87__["RegistrationComponent"],
                    _comment_username_comment_username_component__WEBPACK_IMPORTED_MODULE_88__["CommentUsernameComponent"],
                    _delete_conversation_delete_conversation_component__WEBPACK_IMPORTED_MODULE_89__["DeleteConversationComponent"],
                    _start_conversation_start_conversation_component__WEBPACK_IMPORTED_MODULE_90__["StartConversationComponent"],
                    _post_update_post_dialog_update_post_dialog_component__WEBPACK_IMPORTED_MODULE_91__["UpdatePostDialogComponent"],
                    _cv_builder_cv_builder_component__WEBPACK_IMPORTED_MODULE_92__["CvBuilderComponent"], _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_94__["NotFoundComponent"], _errors_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_95__["ForbiddenComponent"], _errors_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_96__["UnexpectedErrorComponent"], _errors_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_97__["BadRequestComponent"], _errors_offline_offline_component__WEBPACK_IMPORTED_MODULE_98__["OfflineComponent"], _errors_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_99__["InternalServerErrorComponent"],
                ],
                entryComponents: [_profile_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_75__["DialogAddProfileComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_69__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
                    // MatAutocompleteModule,
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_66__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_26__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_30__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_32__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_72__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_45__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_71__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_47__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_76__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_49__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_50__["MatToolbarModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_52__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_68__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_69__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_71__["MatSelectModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_72__["MatMenuModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_74__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_76__["MatSnackBarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_73__["NgbModule"],
                ],
                providers: [
                    _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
                    _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _services_message_message_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HTTP_INTERCEPTORS"],
                        useClass: _errors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_93__["ServerErrorInterceptor"],
                        multi: true
                    }
                    //     {
                    //   provide: PERFECT_SCROLLBAR_CONFIG,
                    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    // }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZH1G":
/*!****************************************************************!*\
  !*** ./src/app/delete-education/delete-education.component.ts ***!
  \****************************************************************/
/*! exports provided: DeleteEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEducationComponent", function() { return DeleteEducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DeleteEducationComponent {
    constructor(profileService, dialogRef, data) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loggedInUser = 5;
        console.log(data);
    }
    ngOnInit() {
    }
    //close dialog 
    noClick() {
        this.dialogRef.close();
    }
    //delete education
    deleteEducation() {
        this.profileService.deleteEducation(this.loggedInUser, this.data.education.profileId, this.data.education.id).subscribe();
        console.log(this.loggedInUser + " " + this.data.education.profileId + " " + this.data.education.id);
        // Close dialog
        this.dialogRef.close();
    }
}
DeleteEducationComponent.ɵfac = function DeleteEducationComponent_Factory(t) { return new (t || DeleteEducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeleteEducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteEducationComponent, selectors: [["app-delete-education"]], decls: 8, vars: 0, consts: [["id", "confirm", "mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function DeleteEducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Do you want to delete this Education?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteEducationComponent_Template_button_click_4_listener() { return ctx.deleteEducation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteEducationComponent_Template_button_click_6_listener() { return ctx.noClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#confirm[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    margin: 5%;\r\n}\r\n\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n    min-width: 40%;\r\n    margin: 15% 5%;\r\n    background: #0075db;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1130px) {\r\n    \r\n    .mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n        min-width: 90%;\r\n        margin: 5%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1lZHVjYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxXQUFXO0FBQ1g7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBR0EsMkJBQTJCO0FBQzNCO0lBQ0ksc0NBQXNDO0lBQ3RDO1FBQ0ksY0FBYztRQUNkLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImRlbGV0ZS1lZHVjYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFFVRVNUSU9OICovXHJcbiNjb25maXJtID4gcCB7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4vKiBCVVRUT04gKi9cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogMTUlIDUlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNzVkYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIHNjcmVlbnMgbGVzcyB0aGFuIDExMzAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEzMHB4KSB7XHJcbiAgICAvKiBzdGFjayBidXR0b24gb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cclxuICAgIC5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDUlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteEducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-education',
                templateUrl: './delete-education.component.html',
                styleUrls: ['./delete-education.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "c7H9":
/*!*****************************************************!*\
  !*** ./src/app/services/profile/profile.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class ProfileService {
    constructor(httpClient, _snackBar) {
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.readLocalStorageValue();
    }
    readLocalStorageValue() {
        if (localStorage.getItem("userToken") != null) {
            this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem("userToken"));
        }
        ;
    }
    getAllUsers() {
        return this.httpClient.get('http://localhost:9090/users/', this.httpOptions);
    }
    getProfile(userId) {
        return this.httpClient.get('http://localhost:9090/users/' + userId + '/profiles', this.httpOptions);
    }
    getUser(userId) {
        return this.httpClient.get('http://localhost:9090/users/' + userId, this.httpOptions);
    }
    getUserById(userId) {
        console.log("GETTING USER BY ID");
        return this.httpClient.get('http://localhost:9090/users/p/' + userId, this.httpOptions);
    }
    getExperienceById(userId, profileId) {
        this.httpOptions.headers = this.httpOptions.headers.set('visitorId', '5');
        console.log(this.httpOptions.headers);
        return this.httpClient.get('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/experiences', this.httpOptions);
    }
    getEducationsById(userId, profileId) {
        this.httpOptions.headers = this.httpOptions.headers.set('visitorId', '2');
        console.log(this.httpOptions.headers);
        return this.httpClient.get('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/educations', this.httpOptions);
    }
    getSkillsById(userId, profileId) {
        this.httpOptions.headers = this.httpOptions.headers.set('visitorId', '2');
        console.log(this.httpOptions.headers);
        return this.httpClient.get('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/skills', this.httpOptions);
    }
    getAboutById(userId, profileId) {
        return this.httpClient.get('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/abouts', this.httpOptions);
    }
    addAbout(data, userId, profileId) {
        return this.httpClient.post('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/abouts/new', data, this.httpOptions);
    }
    addEducation(data, userId, profileId) {
        return this.httpClient.post('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/educations/new', data, this.httpOptions).toPromise().then(data => {
            console.log(data);
        });
    }
    addExperience(data, userId, profileId) {
        return this.httpClient.post('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/experiences/new', data, this.httpOptions).subscribe((data) => {
        }, (error) => {
            if (error.status === 409) {
                this._snackBar.open('Already Exist!!', 'End now', {
                    duration: 1000,
                });
            }
            else {
                alert(error.status);
            }
        });
    }
    addSkill(data, userId, profileId) {
        return this.httpClient.post('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/skills/new', data, this.httpOptions).subscribe((data) => {
        }, (error) => {
            if (error.status === 409) {
                this._snackBar.open('Already Exist!!', 'End now', {
                    duration: 1000,
                });
            }
            else {
                alert('error');
            }
        });
    }
    addProfile(resource, userId) {
        //console.log(this.url);
        return this.httpClient.post('http://localhost:9090/users/' + userId + '/profiles/new', JSON.stringify(resource), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    // public addProfile(data, userId){
    //   return this.httpClient.post('http://localhost:9090/users/' + userId + '/profiles/new', data).subscribe((data)=>
    //   {
    //   },
    //   (error: Response) => {
    //     if(error.status === 409){
    //       this._snackBar.open('Already Exist!!', 'End now', {
    //         duration: 1000,
    //       });
    //       } 
    //       else 
    //       {
    //         alert('error')
    //       }
    //   });
    // }
    //delete data in profile page
    deleteEducation(userId, profileId, educationId) {
        return this.httpClient.delete('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/educations/' + educationId, this.httpOptions);
    }
    deleteExperience(userId, profileId, experienceId) {
        return this.httpClient.delete('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/experiences/' + experienceId, this.httpOptions);
    }
    deleteSkill(userId, profileId, skillId) {
        return this.httpClient.delete('http://localhost:9090/users/' + userId + '/profiles/' + profileId + '/skills/' + skillId, this.httpOptions);
    }
    GetOneEducation(id) {
        const url = 'http://localhost:9090/users/profile/education/' + id;
        return this.httpClient.get(url, this.httpOptions);
    }
    GetOneExperience(id) {
        const url = 'http://localhost:9090/users/profile/experience/' + id;
        return this.httpClient.get(url, this.httpOptions);
    }
    GetOneAbout(id) {
        const url = 'http://localhost:9090/users/profile/about/' + id;
        return this.httpClient.get(url, this.httpOptions);
    }
    GetOneAddress(id) {
        const url = 'http://localhost:9090/users/address/' + id;
        return this.httpClient.get(url, this.httpOptions);
    }
    GetOneUser(id) {
        const url = 'http://localhost:9090/users/user/' + id;
        return this.httpClient.get(url, this.httpOptions);
    }
    updateEducation(model, id) {
        const url = 'http://localhost:9090/users/profile/education/' + id;
        return this.httpClient.put(url, model, this.httpOptions);
    }
    updateExperience(model, id) {
        const url = 'http://localhost:9090/users/profile/experience/' + id;
        return this.httpClient.put(url, model, this.httpOptions);
    }
    updateAbout(model, id) {
        const url = 'http://localhost:9090/users/profile/about/' + id;
        return this.httpClient.put(url, model, this.httpOptions);
    }
    updateAddress(model, id) {
        const url = 'http://localhost:9090/users/address/' + id;
        return this.httpClient.put(url, model, this.httpOptions);
    }
    updatePhoneNumber(model, id) {
        const url = 'http://localhost:9090/users/' + id;
        return this.httpClient.put(url, model, this.httpOptions);
    }
    GetOnePrivacy() {
        const url = 'http://localhost:9090/users/privacy/me';
        return this.httpClient.get(url, this.httpOptions);
    }
    updatePrivacy(model) {
        const url = 'http://localhost:9090/users/privacy/' + model.id;
        return this.httpClient.put(url, model, this.httpOptions);
    }
    uploadPicture(userId, data) {
        return this.httpClient.put('http://localhost:9090/upload/' + userId + '/uploadPicture', data, { responseType: 'text' });
    }
    getFontysLocations() {
        return this.httpClient.get('http://localhost:9090/users/fontysLocations');
    }
    getFontysDepartments() {
        return this.httpClient.get('http://localhost:9090/users/fontysDepartments');
    }
    addAddress(data) {
        return this.httpClient.post('http://localhost:9090/users/newAddress', data);
    }
    addNewUser(data) {
        return this.httpClient.post('http://localhost:9090/users/new', data);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "dUpz":
/*!********************************************************************************!*\
  !*** ./src/app/update-profile-education/update-profile-education.component.ts ***!
  \********************************************************************************/
/*! exports provided: UpdateProfileEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileEducationComponent", function() { return UpdateProfileEducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_Profile_Education__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../classes/Profile/Education */ "G5hp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UpdateProfileEducationComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r7.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r7.year, " ");
} }
function UpdateProfileEducationComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r8.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r8.year, " ");
} }
class UpdateProfileEducationComponent {
    constructor(service, dialogRef, data) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.notification = null;
        this.years = [
            { year: 2010 },
            { year: 2011 },
            { year: 2012 },
            { year: 2013 },
            { year: 2014 },
            { year: 2015 },
            { year: 2016 },
            { year: 2017 },
            { year: 2018 },
            { year: 2019 },
            { year: 2020 },
            { year: 2021 },
            { year: 2022 },
            { year: 2023 },
            { year: 2024 },
            { year: 2025 },
        ];
        this.education = new _classes_Profile_Education__WEBPACK_IMPORTED_MODULE_1__["Education"](1, 1, "fontys", 1999, 2000, "ICT", "It", "Description idk");
    }
    ngOnInit() {
        console.log(this.data.education.id);
        this.id = this.data.education.id;
        this.service.GetOneEducation(this.id)
            .subscribe((data) => {
            console.log(data);
            this.education = data;
        });
    }
    updateEducation() {
        this.service.updateEducation(this.education, this.id).subscribe((res) => {
            console.log("updated");
        });
        this.dialogRef.close();
    }
}
UpdateProfileEducationComponent.ɵfac = function UpdateProfileEducationComponent_Factory(t) { return new (t || UpdateProfileEducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
UpdateProfileEducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateProfileEducationComponent, selectors: [["app-update-profile-education"]], decls: 41, vars: 8, consts: [[1, "container", "h-100", "d-flex", "justify-content-center"], [3, "ngSubmit"], ["EducationForm", "ngForm"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "row", "mt-3"], [1, "col-md-12"], [1, "labels"], ["type", "text", "id", "school", "required", "", "name", "school", 1, "form-control", 3, "ngModel", "ngModelChange"], ["school", "ngModel"], ["id", "startYearEducation", "name", "startYearEducation", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "endYearEducation", "name", "endYearEducation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "degreeEducation", "required", "", "name", "degreeEducation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["degreeEducation", "ngModel"], ["type", "text", "id", "fieldStudy", "required", "", "name", "fieldStudy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fieldStudy", "ngModel"], ["type", "text", "id", "descriptionEducation", "required", "", "name", "descriptionEducation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["descriptionEducation", "ngModel"], [1, "mt-5", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "profile-button"], [3, "value"]], template: function UpdateProfileEducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateProfileEducationComponent_Template_form_ngSubmit_1_listener() { return ctx.updateEducation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit your Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileEducationComponent_Template_input_ngModelChange_10_listener($event) { return ctx.education.school = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Start year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileEducationComponent_Template_select_ngModelChange_15_listener($event) { return ctx.education.startYearEducation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UpdateProfileEducationComponent_option_16_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "End year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileEducationComponent_Template_select_ngModelChange_20_listener($event) { return ctx.education.endYearEducation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UpdateProfileEducationComponent_option_21_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileEducationComponent_Template_input_ngModelChange_26_listener($event) { return ctx.education.degreeEducation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Field of study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileEducationComponent_Template_input_ngModelChange_31_listener($event) { return ctx.education.fieldStudy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileEducationComponent_Template_input_ngModelChange_36_listener($event) { return ctx.education.descriptionEducation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.education.school);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.education.startYearEducation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.education.endYearEducation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.education.degreeEducation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.education.fieldStudy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.education.descriptionEducation);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS1lZHVjYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileEducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-profile-education',
                templateUrl: './update-profile-education.component.html',
                styleUrls: ['./update-profile-education.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "dZqw":
/*!****************************************************************************!*\
  !*** ./src/app/profile/dialog-add-profile/dialog-add-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: DialogAddProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddProfileComponent", function() { return DialogAddProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");













function DialogAddProfileComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r4.name, " ");
} }
function DialogAddProfileComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " About is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DialogAddProfileComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" minimum length is ", _r2.errors.minlength.requiredLength, " ");
} }
function DialogAddProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogAddProfileComponent_div_17_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogAddProfileComponent_div_17_div_2_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors.minlength);
} }
class DialogAddProfileComponent {
    constructor(profileService, dialogRef, data, _snackBar, router) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.router = router;
        this.userId = parseInt(localStorage.getItem('userId'));
        //User = new User(1, "adsf");
        this.languages = [
            { name: "English" },
            { name: "French" },
            { name: "Spanish" },
            { name: "Urdu" }
        ];
    }
    CloseDialog() {
        this.dialogRef.close();
    }
    submit(pId) {
        this.router.navigate(['users/', this.userId, 'profiles', pId]);
        this.CloseDialog();
    }
    ngOnInit() {
        // this.userId = this.data.User.id;
        console.log("in diload add profile");
        console.log(this.userId);
    }
    onSubmitProfile(data) {
        this.profileToAdd = {
            "language": data.language,
            "userId": this.userId
        };
        this.profileService.addProfile(this.profileToAdd, this.userId)
            .subscribe(newProfile => {
            console.log("New Profile Added ----------------");
            console.log(newProfile);
            this.aboutToAdd = {
                "content": data.about,
                "profileId": newProfile
            };
            this.profileService.addAbout(this.aboutToAdd, this.userId, newProfile).subscribe(data => {
                console.log("test about");
                console.log(this.aboutToAdd);
                this.submit(newProfile);
            });
            //  this.CloseDialog();
        }, (error) => {
            if (error.status === 409) {
                this._snackBar.open('Given Language already exist Exists!', 'End now', {
                    duration: 2000,
                });
            }
            else if (error.status === 401) {
                console.log("sorry not sorry");
            }
            else {
                alert('error');
            }
        });
    }
}
DialogAddProfileComponent.ɵfac = function DialogAddProfileComponent_Factory(t) { return new (t || DialogAddProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DialogAddProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogAddProfileComponent, selectors: [["app-dialog-add-profile"]], decls: 22, vars: 2, consts: [[1, "text-center", 3, "ngSubmit"], ["userProfile", "ngForm"], ["appearance", "fill"], ["name", "language", "ngModel", ""], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["for", "about"], ["required", "", "minlength", "25", "maxlength", "200", "ngModel", "", "name", "about", "id", "about", "cols", "25", "rows", "10", 1, "form-control"], ["about", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["mdbBtn", "", "type", "submit", "rounded", "true", "id", "submitButton"], ["mdbBtn", "", "type", "button", 1, "closeButton", 3, "click"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function DialogAddProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DialogAddProfileComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmitProfile(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Choose a language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DialogAddProfileComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DialogAddProfileComponent_div_17_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogAddProfileComponent_Template_button_click_20_listener() { return ctx.CloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.touched && !_r2.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MdbBtnDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYWRkLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogAddProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-add-profile',
                templateUrl: './dialog-add-profile.component.html',
                styleUrls: ['./dialog-add-profile.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "egqR":
/*!*****************************************!*\
  !*** ./src/app/classes/Profile/User.ts ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id) {
        this.id = id;
    }
    ;
    ;
}


/***/ }),

/***/ "eqYL":
/*!******************************************!*\
  !*** ./src/app/classes/Profile/About.ts ***!
  \******************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
class About {
    constructor(id, profileId, content) {
        this.id = id;
        this.profileId = profileId;
        this.content = content;
    }
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _profile_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/dialog-add-profile/dialog-add-profile.component */ "dZqw");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/search.pipe */ "xaSU");













function HeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_11_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openDialogProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a3) { return ["/users", a1, "profiles", a3]; };
function HeaderComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, user_r11.id, user_r11.profileId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r11.firstName, " ", user_r11.lastName, " ");
} }
const _c1 = function () { return ["/messages"]; };
const _c2 = function () { return ["/users", 1, "connections"]; };
const _c3 = function () { return ["/users", "filter"]; };
class HeaderComponent {
    constructor(service, profileService, route, router, dialog) {
        this.service = service;
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.searchText = '';
        this.userId = this.service.getUserIdOfLoggedIn();
    }
    submit() {
        this.router.navigate(['users/', this.userId, 'profiles', this.profileId]);
        //   window.location.href = 'users/'+this.userId+'/profiles/'+this.profileId;
    }
    openDialogProfile() {
        const dialogRef = this.dialog.open(_profile_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_1__["DialogAddProfileComponent"], {
            width: '50%',
            data: { Id: this.userId },
            panelClass: ['custom-modalbox', 'animate__animated', 'animate__slideInLeft']
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            location.reload();
        });
    }
    ngOnInit() {
        this.profileService.getProfile(this.userId).subscribe(response => {
            var _a;
            this.profiles = response;
            // this.userId = parseInt(localStorage.getItem("userId"));
            this.profileId = (_a = this.profiles[0]) === null || _a === void 0 ? void 0 : _a.id;
        });
        this.profileService.getAllUsers().subscribe(data => {
            this.users = data;
            console.log(data);
        });
    }
    logout() {
        localStorage.clear();
        this.service.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 37, vars: 14, consts: [["SideClass", "navbar navbar-expand-lg navbar-dark", 1, "customNav", 3, "containerInside"], ["href", "#", 1, "navbar-brand"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["href", "/", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], [1, "sr-only"], [4, "ngIf", "ngIfElse"], ["noProfile", ""], ["href", "#", "mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "routerLink"], ["mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "routerLink"], [1, "navbar-nav", "ml-auto", "nav-flex-icons"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "dropdown-toggle", "waves-light"], [1, "caret"], ["class", "dropdown-menu dropdown dropdown-primary", "role", "menu", 4, "dropdownMenu"], ["mdbWavesEffect", "", 1, "form-inline", "waves-light"], [1, "md-form", "my-0"], ["list", "browsers", "id", "search-text", "name", "searchText", "type", "search", "placeholder", "Search", "autofocus", "", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["id", "browsers"], [4, "ngFor", "ngForOf"], [1, "example-button-container"], ["mat-mini-fab", "", "aria-label", "Example icon button with a filter alt icon", 3, "routerLink"], ["mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "click"], ["role", "menu", 1, "dropdown-menu", "dropdown", "dropdown-primary"], ["mdbWavesEffect", "", "href", "settings", 1, "dropdown-item", "waves-light"], [1, "divider", "dropdown-divider"], ["routerLink", "/", 1, "dropdown-item", 3, "click"], [1, "font-italic"], [3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FontysIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_ng_template_12_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Connections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_div_25_Template, 6, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_28_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "datalist", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HeaderComponent_div_30_Template, 5, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "filter_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.profiles == null ? null : ctx.profiles.length) > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 8, ctx.users, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["LinksComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]], pipes: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchPipe"]], styles: [".customNav nav\r\n{\r\n      background-color: #623165;\r\n}\r\n\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\r\n      background-color: white;\r\n}\r\n\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\r\n      color: palevioletred;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztNQUVNLHlCQUF5QjtBQUMvQjs7QUFFQTtNQUNNLHVCQUF1QjtBQUM3Qjs7QUFFRTtNQUNJLG9CQUFvQjtBQUMxQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY3VzdG9tTmF2IG5hdlxyXG57XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjMxNjU7XHJcbn1cclxuXHJcbi5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCB7XHJcbiAgICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "fQWx":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_Profile_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Profile/User */ "egqR");
/* harmony import */ var _update_post_dialog_update_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-post-dialog/update-post-dialog.component */ "Y3/I");
/* harmony import */ var _post_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.validator */ "2Jbh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/posts.service */ "jwUf");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comment_username_comment_username_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../comment-username/comment-username.component */ "px1z");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function PostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PostComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.deletePost(ctx_r12.post.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openUpdateDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "border_color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_ng_template_5_Template(rf, ctx) { }
function PostComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PostComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 24);
} }
function PostComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ng_template_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r15.likePost(); return ctx_r15.clicked = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("test", ctx_r10.wasClicked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r10.clicked);
} }
const _c0 = function (a1) { return ["/users", a1, "profiles", 1]; };
function PostComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Comment left by user: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-comment-username", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comm_r17 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, comm_r17.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx_r11.post.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comm_r17.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r11.post.date.substring(0, 10), " ", ctx_r11.post.date.substring(11, 16), "");
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class PostComponent {
    constructor(postService, profileService, router, dialog, _snackBar, userService) {
        this.postService = postService;
        this.profileService = profileService;
        this.router = router;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.userService = userService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            postText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _post_validator__WEBPACK_IMPORTED_MODULE_3__["PostValidator"].cannotContainSpace]),
        });
        this.userId = this.userService.getUserIdOfLoggedIn();
        this.data = {};
        this.commentData = {};
        this.likeData = {};
        this.likeCount = 0;
        this.wasClicked = true;
        this.clicked = false;
    }
    getUserById(id) {
        user: _classes_Profile_User__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.profileService.getUser(this.post.userId)
            .subscribe((data) => {
            return data;
        });
    }
    createComment(id) {
        this.commentData = {
            "content": this.commentContent,
            "id": 0,
            "postId": id,
            "userId": this.userId
        };
        this.postService.newComment(this.commentData);
        // window.location.reload();
    }
    checkIds() {
        var _a, _b;
        console.log("compare to ids");
        console.log(this.userId);
        console.log((_a = this.post) === null || _a === void 0 ? void 0 : _a.userId);
        if (this.userId == ((_b = this.post) === null || _b === void 0 ? void 0 : _b.userId)) {
            this.checked = true;
        }
        else {
            this.checked = false;
        }
        console.log(this.checked);
    }
    createPost() {
        this.data = {
            "content": this.content,
            "id": 5,
            "userId": this.userId
        };
        this.postService.newPost(this.data);
        window.location.reload();
    }
    deletePost(id) {
        this.postService.deletePost(id);
        window.location.reload();
    }
    likePost() {
        this.likeData = {
            "id": 1,
            "likerId": this.userId,
            "postId": this.id
        };
        this.postService.newLikeOnPost(this.id, this.likeData);
        this.likeCount += 1;
    }
    openUpdateDialog() {
        const dialogRef = this.dialog.open(_update_post_dialog_update_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__["UpdatePostDialogComponent"], {
            width: '50%',
            data: { p: this.post },
            panelClass: ['custom-modalbox', 'animate__animated', 'animate__slideInLeft']
        });
        dialogRef.afterClosed();
    }
    lenImg() {
        var _a;
        if (((_a = this.postUrl) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this.postService.getPostLikesCount(this.id)
            .subscribe((data) => {
            this.likeCount = data;
        });
        this.postService.getPostLikeByUser(this.id, this.userId)
            .subscribe((data) => {
            this.userLikeOnPost = data;
        });
        this.checkIds();
        this.postService.getCommentsByPostId(this.id)
            .subscribe((data) => {
            console.log(data);
            this.comments = data;
        });
        this.profileService.getUser(this.post.userId)
            .subscribe((data) => {
            console.log(data);
            this.user = data;
        });
        this.postUrl = this.post.image;
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { post: "post", id: "id" }, decls: 42, vars: 22, consts: [[1, "container"], [1, "post-block"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenB", ""], ["elseB", ""], [2, "font-size", "11px"], ["target", "_blank", 2, "text-decoration", "underline", 3, "routerLink"], [3, "userId"], [4, "ngIf"], [1, "p-date"], ["thenBlock", ""], ["elseBlock", ""], ["disabled", "", 1, "like_input", 3, "ngModel", "ngModelChange"], [1, "comment-block"], ["id", "creatPostBlock"], ["name", "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["placeholder", "Your awesome comment...", "id", "newPostText", "formControlName", "postText", "required", "", 3, "ngModel", "ngClass", "ngModelChange"], [1, "invalid-feedback"], [1, "postBtn", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], [1, "icons"], ["mat-icon-button", "", "ria-label", "", 1, "float-right", 3, "click"], [1, "post-img", 3, "src"], ["disabled", "", 1, "liked_btn"], [1, "like_btn", 3, "hidden", "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_ng_template_3_Template, 7, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostComponent_ng_template_5_Template, 0, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-comment-username", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_div_13_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PostComponent_div_18_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostComponent_ng_template_19_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PostComponent_ng_template_21_Template, 2, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_input_ngModelChange_23_listener($event) { return ctx.likeCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostComponent_Template_form_ngSubmit_28_listener() { return ctx.form.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_textarea_ngModelChange_30_listener($event) { return ctx.commentContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "You need to write something first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_button_click_35_listener() { return ctx.createComment(ctx.post.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PostComponent_div_41_Template, 13, 7, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checked)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.post.userId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx.post.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lenImg());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.post.date.substring(0, 10), " ", ctx.post.date.substring(11, 16), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userLikeOnPost)("ngIfThen", _r7)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.likeCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.commentContent)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.form.get("postText").touched && ctx.form.get("postText").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _comment_username_comment_username_component__WEBPACK_IMPORTED_MODULE_12__["CommentUsernameComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]], styles: [".post-block[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    padding: 15px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    margin-bottom: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 7px -3px rgba(0,0,0,0.75);\r\n}\r\n\r\n.p-date[_ngcontent-%COMP%] {\r\n    float:right;\r\n    font-size: 14px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    resize: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n#newPostText[_ngcontent-%COMP%]{\r\n    min-width: 700px;\r\n    max-width: 700px;\r\n    min-height: 100px;\r\n    border-radius: 4px;\r\n}\r\n\r\n#creatPostBlock[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto \r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]{\r\n    height: 37px;\r\n    width: 125px;\r\n    background-color: #0075db;\r\n    color: white;\r\n    border: none;\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n.postBtn[_ngcontent-%COMP%]:hover{\r\n    background-color: #47a9ff;\r\n}\r\n\r\n.deleteBtn[_ngcontent-%COMP%]{\r\n    float:right;\r\n    border:none;\r\n    height: 15px;\r\n    width: 15px;\r\n    background-image: url('x-mark.png');\r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover;\r\n    margin: 3px;\r\n    \r\n}\r\n\r\n.editBtn[_ngcontent-%COMP%]{\r\n    float:right;\r\n    border:none;\r\n    height: 15px;\r\n    width: 15px;\r\n    background-image: url('edit.png');\r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover;\r\n    margin: 3px;\r\n}\r\n\r\n.comment-block[_ngcontent-%COMP%]{\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n    margin-top: 35px;\r\n}\r\n\r\n.like_btn[_ngcontent-%COMP%]{\r\n    background-image: url('like.png');\r\n    border: none;\r\n    background-repeat: no-repeat;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    margin-top: -10px;\r\n    background-color: white;\r\n}\r\n\r\n.liked_btn[_ngcontent-%COMP%]{\r\n    background-image: url('liked.png');\r\n    border: none;\r\n    background-repeat: no-repeat;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    margin-top: -10px;\r\n    background-color: white;\r\n}\r\n\r\n.like_input[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 20px;\r\n    font-size: 15px;\r\n    padding-bottom: 5px;\r\n    margin-left: 25px;\r\n    margin-top: -7px;\r\n    display: block;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    background-image:url('liked.png'); \r\n  }\r\n\r\n.disabled[_ngcontent-%COMP%] {\r\n    background: #eee;\r\n    color: #aaa;\r\n  }\r\n\r\n\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #e40086;\r\n    background-color: transparent;\r\n  }\r\n\r\n.material-icons[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n  }\r\n\r\n.post-img[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    max-width: 800px;\r\n    min-width: 500px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBR2xCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUVGO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUNBQXVDO0lBQ3ZDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFdBQVc7O0FBRWY7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUNBQXFDO0lBQ3JDLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtDQUFzQztJQUN0QyxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBSUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQXFDO0VBQ3ZDOztBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFQSxVQUFVOztBQUNaO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBQ0Y7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoicG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA3cHggLTNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDdweCAtM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCAtM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuXHJcbi5wLWRhdGUge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICB9XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI25ld1Bvc3RUZXh0e1xyXG4gICAgbWluLXdpZHRoOiA3MDBweDtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4jY3JlYXRQb3N0QmxvY2t7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvIFxyXG59XHJcbi5wb3N0QnRue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5wb3N0QnRue1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzVkYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuLnBvc3RCdG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdhOWZmO1xyXG59XHJcbi5kZWxldGVCdG57XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcveC1tYXJrLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIFxyXG59XHJcbi5lZGl0QnRue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL2VkaXQucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5jb21tZW50LWJsb2Nre1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG59XHJcblxyXG4ubGlrZV9idG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvbGlrZS5wbmdcIik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5saWtlZF9idG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvbGlrZWQucG5nXCIpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4ubGlrZV9pbnB1dHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiaW1nL2xpa2VkLnBuZ1wiKTsgXHJcbiAgfVxyXG4uZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gIH1cclxuXHJcbiAgLyogSWNvbnMgKi9cclxuLmljb25zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjZTQwMDg2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gIH1cclxuLnBvc3QtaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"] }, { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gLj1":
/*!*************************************************************!*\
  !*** ./src/app/errors/bad-request/bad-request.component.ts ***!
  \*************************************************************/
/*! exports provided: BadRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadRequestComponent", function() { return BadRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BadRequestComponent {
    constructor() { }
    ngOnInit() {
    }
}
BadRequestComponent.ɵfac = function BadRequestComponent_Factory(t) { return new (t || BadRequestComponent)(); };
BadRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadRequestComponent, selectors: [["app-bad-request"]], decls: 8, vars: 0, consts: [["id", "content"], [1, "type"]], template: function BadRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Error: 400 Bad Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The request cannot be fulfilled due to bad syntax.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".uppercase[_ngcontent-%COMP%] {\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: 90px;\r\n\tline-height: 90px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n\tcolor:#D9232E;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-size: 32px;\r\n\tline-height: 40px;\r\n\tfont-weight:400;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\th1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 130px;\r\n\t\tline-height: 130px;\r\n\t}\r\n\th2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 40px;\r\n\t\tline-height: 45px;\r\n\t}\r\n}\r\n\r\n@media only screen and (min-width: 980px) {\r\n\th1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 190px;\r\n\t\tline-height: 190px;\r\n\t}\r\n\th2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 45px;\r\n\t\tline-height: 50px;\r\n\t}\r\n}\r\n\r\n\r\n\r\nsection[_ngcontent-%COMP%] {\r\n\tposition:relative;\r\n\tdisplay:block;\r\n\tpadding:15px;\r\n\tmargin:0 auto;\r\n\twidth: 80%;\r\n\ttext-align:center;\r\n\theight:calc(100vh - 60px);\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%] {\r\n\tposition:absolute;\r\n\tdisplay:block;\r\n\twidth:calc(100% - 30px); height:auto;\r\n\ttop:50%;\r\n\ttransform:translateY(-50%);\r\n}\r\n\r\n.type[_ngcontent-%COMP%] {\r\n\tdisplay:inline-block;\r\n\tfont-size:16px; \r\n\tline-height:1;\r\n\ttext-transform:uppercase;\r\n\tfont-weight:600;\r\n\tletter-spacing:0.1em;\r\n\tcolor:#ccc;\r\n\tmargin-bottom:30px\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n\tfont-size: 1.4em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDs7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDs7QUFDQTtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEOztBQUVBLDJCQUEyQjs7QUFDM0I7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLFlBQVk7Q0FDWixhQUFhO0NBQ2IsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHVCQUF1QixFQUFFLFdBQVc7Q0FDcEMsT0FBTztDQUNQLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLFVBQVU7Q0FDVjtBQUNEOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6ImJhZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBwZXJjYXNlIHtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuaDEge1xyXG5cdGZvbnQtc2l6ZTogOTBweDtcclxuXHRsaW5lLWhlaWdodDogOTBweDtcclxuXHRwYWRkaW5nLXRvcDogM3B4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAzcHg7XHJcblx0Y29sb3I6I0Q5MjMyRTtcclxufVxyXG5oMiB7XHJcblx0Zm9udC1zaXplOiAzMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRwYWRkaW5nLXRvcDogM3B4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHRoMSB7XHJcblx0XHRmb250LXNpemU6IDEzMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEzMHB4O1xyXG5cdH1cclxuXHRoMiB7XHJcblx0XHRmb250LXNpemU6IDQwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDVweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkge1xyXG5cdGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMTkwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTkwcHg7XHJcblx0fVxyXG5cdGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogNDVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdH1cclxufVxyXG5cclxuLyovLy8vLy9CQVNJQyBMQVlPVVQvLy8vLy8qL1xyXG5zZWN0aW9uIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdHBhZGRpbmc6MTVweDtcclxuXHRtYXJnaW46MCBhdXRvO1xyXG5cdHdpZHRoOiA4MCU7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0aGVpZ2h0OmNhbGMoMTAwdmggLSA2MHB4KTtcclxufVxyXG4gIFxyXG5zZWN0aW9uICNjb250ZW50IHtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdHdpZHRoOmNhbGMoMTAwJSAtIDMwcHgpOyBoZWlnaHQ6YXV0bztcclxuXHR0b3A6NTAlO1xyXG5cdHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbiAgXHJcbi50eXBlIHtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6MTZweDsgXHJcblx0bGluZS1oZWlnaHQ6MTtcclxuXHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdGxldHRlci1zcGFjaW5nOjAuMWVtO1xyXG5cdGNvbG9yOiNjY2M7XHJcblx0bWFyZ2luLWJvdHRvbTozMHB4XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtc2l6ZTogMS40ZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bad-request',
                templateUrl: './bad-request.component.html',
                styleUrls: ['./bad-request.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iDNu":
/*!*******************************************!*\
  !*** ./src/app/classes/Profile/Resume.ts ***!
  \*******************************************/
/*! exports provided: Resume, Experience, Education, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
class Resume {
    constructor() {
        this.experiences = [];
        this.educations = [];
        this.skills = [];
        this.experiences.push(new Experience());
        this.educations.push(new Education());
        this.skills.push(new Skill());
    }
}
class Experience {
}
class Education {
}
class Skill {
}


/***/ }),

/***/ "iaT6":
/*!***********************************************!*\
  !*** ./src/app/classes/Profile/Experience.ts ***!
  \***********************************************/
/*! exports provided: Experience */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
var EmplymentType;
(function (EmplymentType) {
    EmplymentType[EmplymentType["FullTime"] = 0] = "FullTime";
    EmplymentType[EmplymentType["PartTime"] = 1] = "PartTime";
    EmplymentType[EmplymentType["FreeLancer"] = 2] = "FreeLancer";
})(EmplymentType || (EmplymentType = {}));
class Experience {
    constructor(id, profileId, title, company, employmentType, location, startDateExperience, endDateExperience, descriptionExperience) {
        this.id = id;
        this.profileId = profileId;
        this.title = title;
        this.company = company;
        this.employmentType = employmentType;
        this.location = location;
        this.startDateExperience = startDateExperience;
        this.endDateExperience = endDateExperience;
        this.descriptionExperience = descriptionExperience;
    }
}


/***/ }),

/***/ "jqpw":
/*!********************************************************!*\
  !*** ./src/app/delete-skill/delete-skill.component.ts ***!
  \********************************************************/
/*! exports provided: DeleteSkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSkillComponent", function() { return DeleteSkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DeleteSkillComponent {
    constructor(profileService, dialogRef, data) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loggedInUser = 5;
        console.log(data);
    }
    ngOnInit() {
    }
    //close dialog 
    noClick() {
        this.dialogRef.close();
    }
    //delete skill
    deleteSkill() {
        this.profileService.deleteSkill(this.loggedInUser, this.data.skill.profileId, this.data.skill.id).subscribe();
        console.log(this.loggedInUser + " " + this.data.skill.profileId + " " + this.data.skill.id);
        // Close dialog
        this.dialogRef.close();
    }
}
DeleteSkillComponent.ɵfac = function DeleteSkillComponent_Factory(t) { return new (t || DeleteSkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeleteSkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteSkillComponent, selectors: [["app-delete-skill"]], decls: 8, vars: 0, consts: [["id", "confirm", "mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function DeleteSkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Do you want to delete this skill?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteSkillComponent_Template_button_click_4_listener() { return ctx.deleteSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteSkillComponent_Template_button_click_6_listener() { return ctx.noClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#confirm[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: 5%;\r\n}\r\n\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n}\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n  min-width: 40%;\r\n  margin: 15% 5%;\r\n  background: #0075db;\r\n  color: white;\r\n}\r\n\r\n@media screen and (max-width: 1130px) {\r\n  \r\n  .mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n    min-width: 90%;\r\n    margin: 5%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1za2lsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7QUFDYjtFQUNFLFVBQVU7QUFDWjtBQUVBLFdBQVc7QUFDWDtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHNDQUFzQztFQUN0QztJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJkZWxldGUtc2tpbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFFVRVNUSU9OICovXHJcbiNjb25maXJtID4gcCB7XHJcbiAgbWFyZ2luOiA1JTtcclxufVxyXG5cclxuLyogQlVUVE9OICovXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBtaW4td2lkdGg6IDQwJTtcclxuICBtYXJnaW46IDE1JSA1JTtcclxuICBiYWNrZ3JvdW5kOiAjMDA3NWRiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogc2NyZWVucyBsZXNzIHRoYW4gMTEzMCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTMwcHgpIHtcclxuICAvKiBzdGFjayBidXR0b24gb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteSkillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-skill',
                templateUrl: './delete-skill.component.html',
                styleUrls: ['./delete-skill.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PostsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.readLocalStorageValue();
    }
    readLocalStorageValue() {
        if (localStorage.getItem("userToken") != null) {
            this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem("userToken"));
        }
        ;
    }
    getPosts() {
        return this.httpClient.get('http://localhost:9090/posts/user/' + 1, this.httpOptions);
    }
    getPostLikes(id) {
        return this.httpClient.get('http://localhost:9090/posts/' + id + "/likes", this.httpOptions);
    }
    newLikeOnPost(id, data) {
        return this.httpClient.post('http://localhost:9090/posts/' + id + "/likes", data, this.httpOptions).toPromise().then(data => {
            console.log(data);
        });
    }
    getPostLikeByUser(id, userid) {
        return this.httpClient.get('http://localhost:9090/posts/' + id + "/likes/user/" + userid, this.httpOptions);
    }
    getPostLikesCount(id) {
        return this.httpClient.get('http://localhost:9090/posts/' + id + "/likes/count", this.httpOptions);
    }
    getNewsfeed(id) {
        return this.httpClient.get('http://localhost:9090/posts/newsfeed/' + id, this.httpOptions);
    }
    getPost(id) {
        return this.httpClient.get('http://localhost:9090/posts/' + id, this.httpOptions);
    }
    newPost(data) {
        return this.httpClient.post('http://localhost:9090/posts', data, this.httpOptions).toPromise().then(data => {
            console.log(data);
        });
    }
    updatePost(data, id) {
        return this.httpClient.put('http://localhost:9090/posts/' + id, data, this.httpOptions).toPromise().then(data => {
            console.log(data);
        });
    }
    deletePost(id) {
        return this.httpClient.delete('http://localhost:9090/posts/' + id, this.httpOptions).toPromise().then(data => {
            console.log(data);
        });
    }
    getCommentsByPostId(id) {
        return this.httpClient.get('http://localhost:9090/comments/post/' + id, this.httpOptions);
    }
    uploadPicture(userId, data) {
        return this.httpClient.put('http://localhost:9090/posts/' + userId + '/uploadPicture', data, { responseType: 'text' });
    }
    newComment(data) {
        return this.httpClient.post('http://localhost:9090/comments', data, this.httpOptions).toPromise().then(data => {
            console.log(data);
        });
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nh+d":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/dialog-add-experience/dialog-add-experience.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DialogAddExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddExperienceComponent", function() { return DialogAddExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");












function DialogAddExperienceComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r4.name, " ");
} }
function DialogAddExperienceComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r5.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r5.year, " ");
} }
function DialogAddExperienceComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r6.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r6.year, " ");
} }
class DialogAddExperienceComponent {
    constructor(profileService, dialogRef, data) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.years = [
            { year: 2010 },
            { year: 2011 },
            { year: 2012 },
            { year: 2013 },
            { year: 2014 },
            { year: 2015 }
        ];
        this.languages = [
            { name: "English" },
            { name: "French" },
            { name: "Spanish" },
            { name: "Urdu" }
        ];
        this.jobType = [
            { name: "FullTime" },
            { name: "PartTime" },
            { name: "FreeLancer" }
        ];
    }
    CloseDialog() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.userId = this.data.User.id;
        this.profileId = this.data.Profile;
        console.log(this.userId);
        console.log(this.profileId);
    }
    onSubmitExperience(data) {
        this.experienceToAdd = {
            "company": data.company,
            "descriptionExperience": data.descriptionExperience,
            "employmentType": data.employementType,
            "endDateExperience": parseInt(data.endDateExperience),
            // "id":453,
            "location": data.locationId,
            "profileId": this.profileId,
            "startDateExperience": parseInt(data.startDateExperience),
            "title": data.title
        };
        console.warn(this.experienceToAdd);
        this.profileService.addExperience(this.experienceToAdd, this.userId, this.profileId);
        this.CloseDialog();
    }
}
DialogAddExperienceComponent.ɵfac = function DialogAddExperienceComponent_Factory(t) { return new (t || DialogAddExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogAddExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogAddExperienceComponent, selectors: [["app-dialog-add-experience"]], decls: 38, vars: 4, consts: [[1, "text-center", "border-silver", 3, "ngSubmit"], ["userExperience", "ngForm"], [1, "input-full-width"], ["required", "", "matInput", "", "type", "text", "name", "company", "ngModel", "", "placeholder", "Company"], ["required", "", "matInput", "", "type", "text", "name", "title", "ngModel", "", "placeholder", "Title"], ["required", "", "name", "employementType", "ngModel", ""], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", "matInput", "", "type", "text", "name", "locationId", "ngModel", "", "placeholder", "London, United Kingdom"], ["required", "", "name", "startDateExperience", "ngModel", ""], ["required", "", "name", "endDateExperience", "ngModel", ""], ["required", "", "matInput", "", "type", "text", "name", "descriptionExperience", "ngModel", "", "placeholder", "Ex: I have had a very good experience"], ["mdbBtn", "", "type", "submit", "rounded", "true", "id", "submitButton", "id", "submitButton", 3, "disabled"], ["mdbBtn", "", "type", "button", 1, "closeButton", 3, "click"], [3, "value"]], template: function DialogAddExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DialogAddExperienceComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmitExperience(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Job Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DialogAddExperienceComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Starting Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DialogAddExperienceComponent_mat_option_23_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ending Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DialogAddExperienceComponent_mat_option_29_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogAddExperienceComponent_Template_button_click_36_listener() { return ctx.CloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbBtnDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYWRkLWV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogAddExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-add-experience',
                templateUrl: './dialog-add-experience.component.html',
                styleUrls: ['./dialog-add-experience.component.css']
            }]
    }], function () { return [{ type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "px1z":
/*!****************************************************************!*\
  !*** ./src/app/comment-username/comment-username.component.ts ***!
  \****************************************************************/
/*! exports provided: CommentUsernameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentUsernameComponent", function() { return CommentUsernameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/posts.service */ "jwUf");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");




class CommentUsernameComponent {
    constructor(postService, profileService) {
        this.postService = postService;
        this.profileService = profileService;
    }
    ngOnInit() {
        this.profileService.getUser(this.userId)
            .subscribe((data) => {
            this.user = data;
        });
    }
}
CommentUsernameComponent.ɵfac = function CommentUsernameComponent_Factory(t) { return new (t || CommentUsernameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"])); };
CommentUsernameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentUsernameComponent, selectors: [["app-comment-username"]], inputs: { userId: "userId" }, decls: 1, vars: 2, template: function CommentUsernameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50LXVzZXJuYW1lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentUsernameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment-username',
                templateUrl: './comment-username.component.html',
                styleUrls: ['./comment-username.component.css']
            }]
    }], function () { return [{ type: _services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }, { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");





class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.readLocalStorageValue();
    }
    readLocalStorageValue() {
        if (localStorage.getItem("userToken") != null) {
            this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem("userToken"));
        }
        ;
    }
    login(email, password) {
        const body = email + ":" + password;
        return this.httpClient.post('http://localhost:9090/users/login', body, { responseType: 'text' });
    }
    logout() {
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
    }
    getDecodedAccessToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    }
    getUserIdOfLoggedIn() {
        var decoded = this.getDecodedAccessToken(localStorage.getItem("userToken"));
        var userId = decoded['jti'];
        return userId;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rMZW":
/*!*********************************************************!*\
  !*** ./src/app/services/errors/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class NotificationService {
    constructor(snackBar, zone) {
        this.snackBar = snackBar;
        this.zone = zone;
    }
    showSuccess(message) {
        // Had an issue with the snackbar being ran outside of angular's zone.
        this.zone.run(() => {
            this.snackBar.open(message);
        });
    }
    showError(message) {
        this.zone.run(() => {
            // The second parameter is the text in the button. 
            // In the third, we send in the css class for the snack bar.
            this.snackBar.open(message, 'X', { panelClass: ['error'] });
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "rkyv":
/*!***************************************************!*\
  !*** ./src/app/services/filter/filter.service.ts ***!
  \***************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class FilterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.readLocalStorageValue();
    }
    readLocalStorageValue() {
        if (localStorage.getItem("userToken") != null) {
            this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem("userToken"));
        }
        ;
    }
    filterByUserType(userType) {
        return this.httpClient.get('http://localhost:9090/users?type=' + userType, this.httpOptions);
    }
    filterUsersByStartStudyYear(year) {
        return this.httpClient.get('http://localhost:9090/users?studyYear=' + year, this.httpOptions);
    }
    filterUserByLocation(location) {
        return this.httpClient.get('http://localhost:9090/users?location=' + location, this.httpOptions);
    }
    filterUserByDepartment(department) {
        return this.httpClient.get('http://localhost:9090/users?department=' + department, this.httpOptions);
    }
    filterUsersByStartWorkYear(year) {
        return this.httpClient.get('http://localhost:9090/users?workingYear=' + year, this.httpOptions);
    }
    filterUsersByName(name) {
        return this.httpClient.get('http://localhost:9090/users?firstName=' + name, this.httpOptions);
    }
    filterUsersByTypeLocationDepartment(type, locId, depId) {
        return this.httpClient.get('http://localhost:9090/users?type=' + type + '&location=' + locId + '&department=' + depId, this.httpOptions);
    }
    filterUsersByTypeLocationDepartmentStudyYear(type, year, locId, depId) {
        return this.httpClient.get('http://localhost:9090/users?type=' + type + '&studyYear=' + year + '&location=' + locId + '&department=' + depId, this.httpOptions);
    }
    filterUsersByTypeLocationDepartmentWorkYearFontysStaff(type, year, locId, depId) {
        return this.httpClient.get('http://localhost:9090/users?type=' + type + '&workingYear=' + year + '&location=' + locId + '&department=' + depId, this.httpOptions);
    }
    filterUsersByTypeLocationDepartmentName(name, locId, depId, type) {
        return this.httpClient.get('http://localhost:9090/users?firstName=' + name + '&location=' + locId + '&department=' + depId + '&type=' + type, this.httpOptions);
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uMLo":
/*!******************************************************************!*\
  !*** ./src/app/delete-experience/delete-experience.component.ts ***!
  \******************************************************************/
/*! exports provided: DeleteExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteExperienceComponent", function() { return DeleteExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DeleteExperienceComponent {
    constructor(profileService, dialogRef, data) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loggedInUser = 5;
        console.log(data);
    }
    ngOnInit() {
    }
    //close dialog 
    noClick() {
        this.dialogRef.close();
    }
    //delete experience
    deleteExperience() {
        this.profileService.deleteExperience(this.loggedInUser, this.data.experience.profileId, this.data.experience.id).subscribe();
        console.log(this.loggedInUser + " " + this.data.experience.profileId + " " + this.data.experience.id);
        // Close dialog
        this.dialogRef.close();
    }
}
DeleteExperienceComponent.ɵfac = function DeleteExperienceComponent_Factory(t) { return new (t || DeleteExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeleteExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteExperienceComponent, selectors: [["app-delete-experience"]], decls: 8, vars: 0, consts: [["id", "confirm", "mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function DeleteExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Do you want to delete this Experience?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteExperienceComponent_Template_button_click_4_listener() { return ctx.deleteExperience(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteExperienceComponent_Template_button_click_6_listener() { return ctx.noClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#confirm[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    margin: 5%;\r\n}\r\n\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n.mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n    min-width: 40%;\r\n    margin: 15% 5%;\r\n    background: #0075db;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1130px) {\r\n    \r\n    .mat-dialog-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\r\n        min-width: 90%;\r\n        margin: 5%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiO0lBQ0ksVUFBVTtBQUNkO0FBRUEsV0FBVztBQUNYO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUdBLDJCQUEyQjtBQUMzQjtJQUNJLHNDQUFzQztJQUN0QztRQUNJLGNBQWM7UUFDZCxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJkZWxldGUtZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUVVFU1RJT04gKi9cclxuI2NvbmZpcm0gPiBwIHtcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi8qIEJVVFRPTiAqL1xyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAxNSUgNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3NWRiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogc2NyZWVucyBsZXNzIHRoYW4gMTEzMCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTMwcHgpIHtcclxuICAgIC8qIHN0YWNrIGJ1dHRvbiBvbiB0b3Agb2YgZWFjaCBvdGhlciAqL1xyXG4gICAgLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogNSU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-experience',
                templateUrl: './delete-experience.component.html',
                styleUrls: ['./delete-experience.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vSZU":
/*!*****************************************************!*\
  !*** ./src/app/services/contact/contact.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "qfBg");







class ContactService extends _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] {
    constructor(http, userService) {
        super('http://localhost:9090/users/' + userService.getUserIdOfLoggedIn() + '/contacts', http);
        this.userService = userService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.readLocalStorageValue();
    }
    readLocalStorageValue() {
        if (localStorage.getItem("userToken") != null) {
            this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem("userToken"));
        }
        ;
    }
    getId() {
        let id = this.userService.getUserIdOfLoggedIn();
        return id;
    }
    getContactRequests() {
        return this.http.get('http://localhost:9090/users/' + this.getId() + '/requests', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
    getAcceptedContacts() {
        return this.http.get('http://localhost:9090/users/' + this.getId() + '/acceptedContacts', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _errors_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors/bad-request/bad-request.component */ "gLj1");
/* harmony import */ var _profile_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/dialog-add-profile/dialog-add-profile.component */ "dZqw");
/* harmony import */ var _messages_selected_message_selected_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/selected-message/selected-message.component */ "T4tH");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _connection_connection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection/connection.component */ "Onjk");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-post/update-post.component */ "DslI");
/* harmony import */ var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-details/post-details.component */ "TdOT");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "2f1s");
/* harmony import */ var _filter_users_filter_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter-users/filter-users.component */ "FFgP");
/* harmony import */ var _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newsfeed/newsfeed.component */ "4lpD");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _cv_builder_cv_builder_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cv-builder/cv-builder.component */ "z4ew");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "4rg4");
/* harmony import */ var _errors_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./errors/forbidden/forbidden.component */ "3ug3");
/* harmony import */ var _errors_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./errors/unexpected-error/unexpected-error.component */ "WhT/");
/* harmony import */ var _errors_offline_offline_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./errors/offline/offline.component */ "PPJz");
/* harmony import */ var _errors_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./errors/internal-server-error/internal-server-error.component */ "xWOo");

























const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
    },
    {
        path: 'export/:profileId',
        component: _cv_builder_cv_builder_component__WEBPACK_IMPORTED_MODULE_17__["CvBuilderComponent"],
    },
    {
        path: 'users/:id/profiles/:profileId',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    }, {
        path: 'posts',
        component: _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_14__["NewsfeedComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'update-post/:id',
        component: _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_10__["UpdatePostComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'post/:id',
        component: _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_11__["PostDetailsComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'users/:id/connections',
        component: _connection_connection_component__WEBPACK_IMPORTED_MODULE_5__["ConnectionComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'users/:id/messages',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] // MessageComponent
    },
    {
        path: 'settings',
        component: _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_12__["UserSettingsComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'users/filter',
        component: _filter_users_filter_users_component__WEBPACK_IMPORTED_MODULE_13__["FilterUsersComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'register',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"],
        children: [
            {
                path: ':conversationId',
                component: _messages_selected_message_selected_message_component__WEBPACK_IMPORTED_MODULE_2__["SelectedMessageComponent"],
                canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
            }
        ],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'addProfile',
        component: _profile_dialog_add_profile_dialog_add_profile_component__WEBPACK_IMPORTED_MODULE_1__["DialogAddProfileComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'forbidden',
        component: _errors_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_19__["ForbiddenComponent"],
    },
    {
        path: 'unexpected-error',
        component: _errors_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_20__["UnexpectedErrorComponent"],
    },
    {
        path: 'bad-request',
        component: _errors_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_0__["BadRequestComponent"],
    },
    {
        path: 'offline',
        component: _errors_offline_offline_component__WEBPACK_IMPORTED_MODULE_21__["OfflineComponent"]
    },
    {
        path: 'internal-server-error',
        component: _errors_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_22__["InternalServerErrorComponent"]
    },
    {
        path: '**',
        component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_Profile_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Profile/User */ "egqR");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Incorrect username or password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.isLoginError = false;
        this.user = new _classes_Profile_User__WEBPACK_IMPORTED_MODULE_1__["User"](3);
    }
    ngOnInit() {
        if (this.readLocalStorageValue() != null) {
            this.loggedIn = true;
            this.router.navigate(['/posts']);
        }
        else {
            this.loggedIn = false;
        }
    }
    getDecodedAccessToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    }
    OnSubmit(email, password) {
        this.service.login(email, password)
            .subscribe((res) => {
            console.log(res);
            localStorage.setItem('userToken', res);
            location.reload();
            this.router.navigate(['/posts']);
        }, (error) => {
            if (error.status === 404) {
                console.log("not found");
                this.isLoginError = true;
            }
        });
    }
    readLocalStorageValue() {
        return localStorage.getItem('userToken');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 35, vars: 2, consts: [[1, "container"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "card-body"], ["class", "red-text center error-message", 4, "ngIf"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "ngModel", "", "name", "email", "placeholder", "email", "required", ""], ["email", ""], [1, "fas", "fa-key"], ["type", "password", "ngModel", "", "name", "password", "placeholder", "password", "required", ""], ["password", ""], [1, "form-group"], ["type", "submit", 1, "btn-large", "btn-submit", 3, "disabled"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["href", "/register"], [1, "red-text", "center", "error-message"], [1, "material-icons"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx.OnSubmit(_r2.value, _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Don't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n    background-color: #623165;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    font-family: 'Numans', sans-serif;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    align-content: center;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n    height: 370px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    width: 400px;\r\n    background-color: rgba(0,0,0,0.5) !important;\r\n    }\r\n    \r\n    .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: white;\r\n    }\r\n    \r\n    input[_ngcontent-%COMP%] {\r\n        background-color:rgba(0,0,0,0.5);\r\n      }\r\n    \r\n    input[type=text][_ngcontent-%COMP%] {\r\n        background-color:rgba(0,0,0,0.5);\r\n        color:white;\r\n      }\r\n    \r\n    input[type=password][_ngcontent-%COMP%] {\r\n        background-color:rgba(0,0,0,0.5);\r\n        color:white;\r\n      }\r\n    \r\n    .input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        width: 50px;\r\n        background-color:rgba(0,0,0,0.5);\r\n        color: white;\r\n        border:0 !important;\r\n        }\r\n    \r\n    input[_ngcontent-%COMP%]:focus{\r\n    outline: 0 0 0 0  !important;\r\n    box-shadow: 0 0 0 0 !important;\r\n    \r\n    }\r\n    \r\n    .login_btn[_ngcontent-%COMP%]{\r\n    color: white;\r\n    background-color: #9fa8da;\r\n    width: 100px;\r\n    }\r\n    \r\n    .login_btn[_ngcontent-%COMP%]:hover{\r\n    color:white;\r\n    background-color:#c5cae9 ;\r\n    }\r\n    \r\n    .links[_ngcontent-%COMP%]{\r\n    color: white;\r\n    }\r\n    \r\n    .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin-left: 4px;\r\n    \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDOztJQUVBO0lBQ0EsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQjs7SUFFQTtJQUNBLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUM7O0lBSUE7SUFDQSxZQUFZO0lBQ1o7O0lBRUE7UUFDSSxnQ0FBZ0M7TUFDbEM7O0lBQ0E7UUFDRSxnQ0FBZ0M7UUFDaEMsV0FBVztNQUNiOztJQUNBO1FBQ0UsZ0NBQWdDO1FBQ2hDLFdBQVc7TUFDYjs7SUFDRjtRQUNJLFdBQVc7UUFDWCxnQ0FBZ0M7UUFDaEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQjs7SUFFSjtJQUNBLDRCQUE0QjtJQUM1Qiw4QkFBOEI7O0lBRTlCOztJQUdBO0lBQ0EsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1o7O0lBRUE7SUFDQSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCOztJQUVBO0lBQ0EsWUFBWTtJQUNaOztJQUVBO0lBQ0EsZ0JBQWdCOztJQUVoQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyMzE2NTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZHtcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLmNhcmQtaGVhZGVyIGgze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICB9XHJcbiAgICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmxvZ2luX2J0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmE4ZGE7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2M1Y2FlOSA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saW5rc3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpbmtzIGF7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "xWOo":
/*!*********************************************************************************!*\
  !*** ./src/app/errors/internal-server-error/internal-server-error.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InternalServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function() { return InternalServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InternalServerErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
InternalServerErrorComponent.ɵfac = function InternalServerErrorComponent_Factory(t) { return new (t || InternalServerErrorComponent)(); };
InternalServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternalServerErrorComponent, selectors: [["app-internal-server-error"]], decls: 10, vars: 0, consts: [["id", "content"], [1, "type"]], template: function InternalServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Error: 500 Internal Server Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The server is currently unable to handle this request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please try again later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n\tfont-family: myriad-pro, 'Myriad Pro', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\tfont-style: normal;\r\n\tfont-weight: 300;\r\n\tmargin: 0;\r\n\t-webkit-margin-before: 0;\r\n\t-webkit-margin-after: 0;\r\n\t-webkit-margin-start: 0;\r\n\t-webkit-margin-end: 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: 90px;\r\n\tline-height: 90px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n\tcolor:#D9232E;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-size: 32px;\r\n\tline-height: 40px;\r\n\tfont-weight:400;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n\tfont-size: 20px;\r\n\tline-height: 25px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\th1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 130px;\r\n\t\tline-height: 130px;\r\n\t}\r\n\th2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 40px;\r\n\t\tline-height: 45px;\r\n\t}\r\n\tp[_ngcontent-%COMP%] {\r\n\t\tfont-size: 22px;\r\n\t\tline-height: 50px;\r\n\t}\r\n}\r\n\r\n@media only screen and (min-width: 980px) {\r\n\th1[_ngcontent-%COMP%] {\r\n\t\tfont-size: 6.9em;\r\n\t\tline-height: 150px; \r\n\t}\r\n\th2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 2.9em;\r\n\t\tline-height: 50px;\r\n\t}\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n\tposition:relative;\r\n\tdisplay:block;\r\n\tpadding:15px;\r\n\tmargin:0 auto;\r\n\tmax-width:1600px;\r\n\ttext-align:center;\r\n\theight:calc(100vh - 60px);\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%] {\r\n\tposition:absolute;\r\n\tdisplay:block;\r\n\twidth:calc(100% - 30px); height:auto;\r\n\ttop:50%;\r\n\ttransform:translateY(-50%);\r\n}\r\n\r\n.type[_ngcontent-%COMP%] {\r\n\tdisplay:inline-block;\r\n\tfont-size:16px; \r\n\tline-height:1;\r\n\ttext-transform:uppercase;\r\n\tfont-weight:600;\r\n\tletter-spacing:0.1em;\r\n\tcolor:#ccc;\r\n\tmargin-bottom:30px\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n\tfont-size: 1.4em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybmFsLXNlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FHQyxrR0FBa0c7Q0FDbEcsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1Qsd0JBQXdCO0NBQ3hCLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDs7QUFDQTtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEOztBQUdBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixZQUFZO0NBQ1osYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYix1QkFBdUIsRUFBRSxXQUFXO0NBQ3BDLE9BQU87Q0FDUCwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQixVQUFVO0NBQ1Y7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJpbnRlcm5hbC1zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxucCB7XHJcblx0Zm9udC1mYW1pbHk6IG15cmlhZC1wcm8sICdNeXJpYWQgUHJvJywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdC13ZWJraXQtbWFyZ2luLWJlZm9yZTogMDtcclxuXHQtd2Via2l0LW1hcmdpbi1hZnRlcjogMDtcclxuXHQtd2Via2l0LW1hcmdpbi1zdGFydDogMDtcclxuXHQtd2Via2l0LW1hcmdpbi1lbmQ6IDA7XHJcbn1cclxuXHJcbmgxIHtcclxuXHRmb250LXNpemU6IDkwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDkwcHg7XHJcblx0cGFkZGluZy10b3A6IDNweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5cdGNvbG9yOiNEOTIzMkU7XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LXNpemU6IDMycHg7XHJcblx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdHBhZGRpbmctdG9wOiAzcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cdHBhZGRpbmctdG9wOiAzcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cdGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMTMwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTMwcHg7XHJcblx0fVxyXG5cdGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5cdH1cclxuXHRwIHtcclxuXHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MHB4KSB7XHJcblx0aDEge1xyXG5cdFx0Zm9udC1zaXplOiA2LjllbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxNTBweDsgXHJcblx0fVxyXG5cdGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogMi45ZW07XHJcblx0XHRsaW5lLWhlaWdodDogNTBweDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5zZWN0aW9uIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdHBhZGRpbmc6MTVweDtcclxuXHRtYXJnaW46MCBhdXRvO1xyXG5cdG1heC13aWR0aDoxNjAwcHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0aGVpZ2h0OmNhbGMoMTAwdmggLSA2MHB4KTtcclxufVxyXG4gIFxyXG5zZWN0aW9uICNjb250ZW50IHtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdHdpZHRoOmNhbGMoMTAwJSAtIDMwcHgpOyBoZWlnaHQ6YXV0bztcclxuXHR0b3A6NTAlO1xyXG5cdHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbiAgXHJcbi50eXBlIHtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6MTZweDsgXHJcblx0bGluZS1oZWlnaHQ6MTtcclxuXHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdGxldHRlci1zcGFjaW5nOjAuMWVtO1xyXG5cdGNvbG9yOiNjY2M7XHJcblx0bWFyZ2luLWJvdHRvbTozMHB4XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtc2l6ZTogMS40ZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-internal-server-error',
                templateUrl: './internal-server-error.component.html',
                styleUrls: ['./internal-server-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xaSU":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchPipe {
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @returns {any[]}
     */
    transform(items, searchText) {
        // let loggedInUser = 1;
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toString().toLowerCase();
        console.log(searchText);
        // return items.filter(it => {
        //   let fullName = it.firstName + ' ' + it.lastName;
        //   console.log(fullName.toString().toLowerCase());
        //   return fullName.toString().toLowerCase().indexOf(searchText) == 0;
        // });
        return items.filter(it => {
            let fullName = it.firstName + ' ' + it.lastName;
            console.log(fullName);
            return fullName.toString().toLowerCase().indexOf(searchText) >= 0;
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


/***/ }),

/***/ "ynSF":
/*!********************************************************************!*\
  !*** ./src/app/start-conversation/start-conversation.component.ts ***!
  \********************************************************************/
/*! exports provided: StartConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartConversationComponent", function() { return StartConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message/message.service */ "0UgC");
/* harmony import */ var _services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/filter/filter.service */ "rkyv");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");

















const _c0 = function (a1, a3) { return ["/users", a1, "profiles", a3]; };
function StartConversationComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartConversationComponent_tr_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startNewConversation(user_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, user_r1.id, user_r1.profileId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r1.firstName, " ", user_r1.lastName, " ");
} }
class StartConversationComponent {
    constructor(messageService, filterService, dialogRef, data) {
        this.messageService = messageService;
        this.filterService = filterService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.searchText = "";
        console.log(data);
    }
    ngOnInit() {
        this.logId = localStorage.getItem('userId');
    }
    //get user by type letters of his/her name
    getUsersByFirstNameChars() {
        if (this.searchText != null) {
            this.filterService.filterUsersByName(this.searchText).subscribe((data) => {
                this.users = data;
                console.log(this.users);
            });
        }
    }
    //close dialog
    Close() {
        this.dialogRef.close();
    }
    // Send message
    startNewConversation(id) {
        console.log("In start conversation method --- second user=  " + id + "first user id= " + this.logId);
        let newConversation = {
            firstUserId: this.logId,
            secondUserId: id
        };
        this.messageService.startConversation(newConversation);
        console.log("Added" + newConversation);
        this.Close();
    }
}
StartConversationComponent.ɵfac = function StartConversationComponent_Factory(t) { return new (t || StartConversationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
StartConversationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartConversationComponent, selectors: [["app-start-conversation"]], decls: 16, vars: 2, consts: [[1, "col-sm"], [1, "found-card"], [1, "example-form", "float-right"], [1, "example-full-width"], ["type", "text", "matInput", "", "placeholder", "Search for new contact", "id", "search-text", "aria-describedby", "search-text", "name", "searchText", "autofocus", "", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "ria-label", "", 1, "float-right", 3, "click"], ["id", "testUser", 4, "ngFor", "ngForOf"], ["id", "testUser"], [1, "font-italic"], [3, "routerLink"], ["mat-icon-button", "", "ria-label", "", 1, "btn", 3, "click"], ["matTooltip", "Add New Conversation"]], template: function StartConversationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StartConversationComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartConversationComponent_Template_button_click_7_listener() { return ctx.getUsersByFirstNameChars(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StartConversationComponent_tr_14_Template, 13, 6, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"]], styles: [".filter-card[_ngcontent-%COMP%] {\r\n    max-width: 350px;\r\n    max-height: 1000px;\r\n    \r\n    margin-top: 100px;\r\n    \r\n}\r\n  \r\n.found-card[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  max-height: 1000px;\r\n  margin-top: 10px;\r\n}\r\n  \r\n.btn[_ngcontent-%COMP%]{\r\n  margin-left: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LWNvbnZlcnNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7SUFFbEIsaUJBQWlCOztBQUVyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InN0YXJ0LWNvbnZlcnNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgXHJcbn1cclxuICBcclxuLmZvdW5kLWNhcmQge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbiAgXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartConversationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start-conversation',
                templateUrl: './start-conversation.component.html',
                styleUrls: ['./start-conversation.component.css']
            }]
    }], function () { return [{ type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "z4ew":
/*!****************************************************!*\
  !*** ./src/app/cv-builder/cv-builder.component.ts ***!
  \****************************************************/
/*! exports provided: Experience2, Education2, Skill2, CvBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience2", function() { return Experience2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education2", function() { return Education2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill2", function() { return Skill2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvBuilderComponent", function() { return CvBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_Profile_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/Profile/User */ "egqR");
/* harmony import */ var _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/Profile/Resume */ "iDNu");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/profile/profile.service */ "c7H9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function (a0) { return { "is-invalid": a0 }; };
function CvBuilderComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_45_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const s_r9 = ctx.$implicit; return s_r9.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "skill", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.useExisting)("ngModel", s_r9.value)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _r11.invalid && (_r11.touched || _r0.submitted)));
} }
function CvBuilderComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_55_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ex_r14 = ctx.$implicit; return ex_r14.employer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_55_Template_textarea_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ex_r14 = ctx.$implicit; return ex_r14.jobDescription = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_55_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ex_r14 = ctx.$implicit; return ex_r14.jobTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_55_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ex_r14 = ctx.$implicit; return ex_r14.experience = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "employer", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.useExisting)("ngModel", ex_r14.employer)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, _r16.invalid && (_r16.touched || _r0.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "jobDescription", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.useExisting)("ngModel", ex_r14.jobDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "jobTitle", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.useExisting)("ngModel", ex_r14.jobTitle)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, _r17.invalid && (_r17.touched || _r0.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "exInMonths", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.useExisting)("ngModel", ex_r14.experience)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, _r18.invalid && (_r18.touched || _r0.submitted)));
} }
function CvBuilderComponent_div_65_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", d_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r31);
} }
function CvBuilderComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_65_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ed_r24 = ctx.$implicit; return ed_r24.degree = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvBuilderComponent_div_65_option_5_Template, 2, 2, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_65_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ed_r24 = ctx.$implicit; return ed_r24.college = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_65_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ed_r24 = ctx.$implicit; return ed_r24.passingYear = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_div_65_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ed_r24 = ctx.$implicit; return ed_r24.percentage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ed_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "degree", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.useExisting)("ngModel", ed_r24.degree)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, _r26.invalid && (_r26.touched || _r0.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.degrees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "college", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.useExisting)("ngModel", ed_r24.college)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, _r28.invalid && (_r28.touched || _r0.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "passingYear", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.useExisting)("ngModel", ed_r24.passingYear)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, _r29.invalid && (_r29.touched || _r0.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "result", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.useExisting)("ngModel", ed_r24.percentage)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, _r30.invalid && (_r30.touched || _r0.submitted)));
} }
function CvBuilderComponent_img_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.resume.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class Experience2 {
    constructor(id, profileId, title, company, employmentType, location, startDateExperience, endDateExperience, descriptionExperience) {
        this.id = id;
        this.profileId = profileId;
        this.title = title;
        this.company = company;
        this.employmentType = employmentType;
        this.location = location;
        this.startDateExperience = startDateExperience;
        this.endDateExperience = endDateExperience;
        this.descriptionExperience = descriptionExperience;
    }
}
class Education2 {
    constructor(id, profileId, school, startYearEducation, endYearEducation, degreeEducation, fieldStudy, descriptionEducation) {
        this.id = id;
        this.profileId = profileId;
        this.school = school;
        this.startYearEducation = startYearEducation;
        this.endYearEducation = endYearEducation;
        this.degreeEducation = degreeEducation;
        this.fieldStudy = fieldStudy;
        this.descriptionEducation = descriptionEducation;
    }
}
class Skill2 {
}
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default.a.pdfMake.vfs;
class CvBuilderComponent {
    constructor(profileService, route) {
        this.profileService = profileService;
        this.route = route;
        this.resume = new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Resume"]();
        this.degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];
        this.user = new _classes_Profile_User__WEBPACK_IMPORTED_MODULE_3__["User"](3);
        this.resume = JSON.parse(sessionStorage.getItem('resume')) || new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Resume"]();
        if (!this.resume.experiences || this.resume.experiences.length === 0) {
            this.resume.experiences = [];
            this.resume.experiences.push(new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Experience"]());
        }
        if (!this.resume.educations || this.resume.educations.length === 0) {
            this.resume.educations = [];
            this.resume.educations.push(new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Education"]());
        }
        if (!this.resume.skills || this.resume.skills.length === 0) {
            this.resume.skills = [];
            this.resume.skills.push(new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Skill"]());
        }
    }
    useExist() {
        if (this.useExisting) {
            this.resume.skills = [];
            this.skills2.forEach(ski => {
                var newSkill = new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Skill"]();
                newSkill.value = ski.name;
                this.resume.skills.push(newSkill);
            });
            console.log(this.resume.skills);
        }
        else {
            console.log("false");
            console.log(this.resume.skills);
        }
    }
    addExperience() {
        this.resume.experiences.push(new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Experience"]());
    }
    addEducation() {
        this.resume.educations.push(new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Education"]());
    }
    generatePdf(action = 'open') {
        const documentDefinition = this.getDocumentDefinition();
        switch (action) {
            case 'open':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.createPdf(documentDefinition).open();
                break;
            case 'print':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.createPdf(documentDefinition).print();
                break;
            case 'download':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.createPdf(documentDefinition).download();
                break;
            default:
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.createPdf(documentDefinition).open();
                break;
        }
    }
    resetForm() {
        this.resume = new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Resume"]();
    }
    getDocumentDefinition() {
        console.log(this.user.firstName);
        console.log(this.user.email);
        this.useExist();
        sessionStorage.setItem('resume', JSON.stringify(this.resume));
        return {
            content: [
                {
                    text: 'RESUME',
                    bold: true,
                    fontSize: 20,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                {
                    columns: [
                        [{
                                text: this.user.firstName + ' ' + this.user.lastName,
                                style: 'name'
                            },
                            {
                                text: this.resume.address
                            },
                            {
                                text: 'Email : ' + this.user.email,
                            },
                            {
                                text: 'Phonenumber : ' + this.resume.contactNo,
                            },
                            {
                                text: 'GitHub: ' + this.resume.socialProfile,
                                link: this.resume.socialProfile,
                                color: 'blue',
                            }
                        ],
                        [
                            this.getProfilePicObject()
                        ]
                    ]
                },
                {
                    text: 'Skills',
                    style: 'header'
                },
                {
                    columns: [
                        {
                            ul: [
                                ...this.resume.skills.filter((value, index) => index % 3 === 0).map(s => s.value)
                            ]
                        },
                        {
                            ul: [
                                ...this.resume.skills.filter((value, index) => index % 3 === 1).map(s => s.value)
                            ]
                        },
                        {
                            ul: [
                                ...this.resume.skills.filter((value, index) => index % 3 === 2).map(s => s.value)
                            ]
                        }
                    ]
                },
                {
                    text: 'Experience',
                    style: 'header'
                },
                this.getExperienceObject(this.resume.experiences),
                {
                    text: 'Education',
                    style: 'header'
                },
                this.getEducationObject(this.resume.educations),
                {
                    text: 'Other Details',
                    style: 'header'
                },
                {
                    text: this.resume.otherDetails
                },
                {
                    text: 'Signature',
                    style: 'sign'
                },
                {
                    columns: [
                        { qr: this.user.firstName + ' ' + this.user.lastName + ', Phone number : ' + this.resume.contactNo, fit: 100 },
                        {
                            text: `${this.user.firstName + ' ' + this.user.lastName}`,
                            alignment: 'right',
                        }
                    ]
                }
            ],
            info: {
                title: this.user.firstName + ' ' + this.user.lastName + '_RESUME',
                author: this.user.firstName + ' ' + this.user.lastName,
                subject: 'RESUME',
                keywords: 'RESUME, ONLINE RESUME',
            },
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                    decoration: 'underline'
                },
                name: {
                    fontSize: 16,
                    bold: true
                },
                jobTitle: {
                    fontSize: 14,
                    bold: true,
                    italics: true
                },
                sign: {
                    margin: [0, 50, 0, 10],
                    alignment: 'right',
                    italics: true
                },
                tableHeader: {
                    bold: true,
                }
            }
        };
    }
    getExperienceObject(experiences) {
        if (this.useExisting) {
            if (this.experiences2.length < 1) {
                console.log("not enough");
                return null;
            }
            const exs = [];
            this.experiences2.forEach(experience => {
                exs.push([{
                        columns: [
                            [{
                                    text: experience.title,
                                    style: 'jobTitle'
                                },
                                {
                                    text: experience.company,
                                },
                                {
                                    text: experience.location,
                                }],
                            {
                                text: 'Start date: ' + experience.startDateExperience + ' End date ' + experience.endDateExperience,
                                alignment: 'right'
                            }
                        ]
                    }]);
            });
            return {
                table: {
                    widths: ['*'],
                    body: [
                        ...exs
                    ]
                }
            };
        }
        else {
            const exs = [];
            experiences.forEach(experience => {
                exs.push([{
                        columns: [
                            [{
                                    text: experience.jobTitle,
                                    style: 'jobTitle'
                                },
                                {
                                    text: experience.employer,
                                },
                                {
                                    text: experience.jobDescription,
                                }],
                            {
                                text: 'Experience : ' + experience.experience + ' Months',
                                alignment: 'right'
                            }
                        ]
                    }]);
            });
            return {
                table: {
                    widths: ['*'],
                    body: [
                        ...exs
                    ]
                }
            };
        }
    }
    getEducationObject(educations) {
        if (this.useExisting) {
            if (this.educations2.length < 1) {
                console.log("not enough");
                return null;
            }
            return {
                table: {
                    widths: ['*', '*', '*', '*'],
                    body: [
                        [{
                                text: 'Degree',
                                style: 'tableHeader'
                            },
                            {
                                text: 'College',
                                style: 'tableHeader'
                            },
                            {
                                text: 'Start year',
                                style: 'tableHeader'
                            },
                            {
                                text: 'End Year',
                                style: 'tableHeader'
                            },
                        ],
                        ...this.educations2.map(ed => {
                            return [ed.degreeEducation, ed.school, ed.startYearEducation, ed.endYearEducation];
                        })
                    ]
                }
            };
        }
        else {
            return {
                table: {
                    widths: ['*', '*', '*', '*'],
                    body: [
                        [{
                                text: 'Degree',
                                style: 'tableHeader'
                            },
                            {
                                text: 'College',
                                style: 'tableHeader'
                            },
                            {
                                text: 'Passing Year',
                                style: 'tableHeader'
                            },
                            {
                                text: 'Result',
                                style: 'tableHeader'
                            },
                        ],
                        ...educations.map(ed => {
                            return [ed.degree, ed.college, ed.passingYear, ed.percentage];
                        })
                    ]
                }
            };
        }
    }
    getProfilePicObject() {
        if (this.resume.profilePic) {
            return {
                image: this.resume.profilePic,
                width: 75,
                alignment: 'right'
            };
        }
        return null;
    }
    fileChanged(e) {
        const file = e.target.files[0];
        this.getBase64(file);
    }
    getBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result);
            this.resume.profilePic = reader.result;
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }
    addSkill() {
        this.resume.skills.push(new _classes_Profile_Resume__WEBPACK_IMPORTED_MODULE_4__["Skill"]());
    }
    ngOnInit() {
        this.id = localStorage.getItem('userId');
        this.profileId = +this.route.snapshot.paramMap.get('profileId');
        this.profileService.GetOneUser(this.id)
            .subscribe((data) => {
            console.log(data);
            this.user = data;
            this.profileService.getEducationsById(this.id, this.profileId)
                .subscribe(data => {
                this.educations2 = data;
            });
            this.profileService.getSkillsById(this.id, this.profileId)
                .subscribe(data => {
                this.skills2 = data;
                console.log(this.skills2);
            });
            this.profileService.getExperienceById(this.id, this.profileId)
                .subscribe(data => {
                this.experiences2 = data;
            });
        });
    }
}
CvBuilderComponent.ɵfac = function CvBuilderComponent_Factory(t) { return new (t || CvBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
CvBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvBuilderComponent, selectors: [["app-cv-builder"]], decls: 104, vars: 28, consts: [[1, "container-fluid"], [3, "ngModel", "ngModelChange"], ["resumeForm", "ngForm"], [1, "row"], [1, "col-md-8"], [1, "shadow-sm", "card"], [1, "card-body"], [1, "card-title", "d-flex", "align-items-center"], [1, "material-icons"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "Name", 1, "form-control", 3, "disabled", "ngModel", "ngClass", "ngModelChange"], ["Name", "ngModel"], ["name", "address", "rows", "3", "placeholder", "Address", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["Address", "ngModel"], ["type", "text", "name", "contactNo", "placeholder", "Contact No.", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["ContactNo", "ngModel"], ["type", "text", "name", "emailId", "placeholder", "Email ID", 1, "form-control", 3, "disabled", "ngModel", "ngClass", "ngModelChange"], ["Email", "ngModel"], ["type", "text", "name", "socialProfile", "placeholder", "Social Profile ", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between", "card-title"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-md-12"], ["type", "text", "name", "otherDetails", "rows", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "shadow-sm", "card", "action-buttons"], [1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", 3, "click"], ["type", "reset", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "card", "p-4"], ["for", "", 1, "h4", "mb-3"], ["type", "file", "aria-describedby", "fileHelpId", 1, "form-control-file", 3, "change"], ["class", "img-thumbnail", 3, "src", 4, "ngIf"], ["type", "text", "placeholder", "e.g. Java / Angular / .Net ", 1, "form-control", 3, "disabled", "name", "ngModel", "ngClass", "ngModelChange"], ["Skill", "ngModel"], ["type", "text", "placeholder", "Employer", "required", "", 1, "form-control", 3, "disabled", "name", "ngModel", "ngClass", "ngModelChange"], ["Employer", "ngModel"], ["rows", "3", "placeholder", "Job Description", 1, "form-control", 3, "disabled", "name", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Job Title", "required", "", 1, "form-control", 3, "disabled", "name", "ngModel", "ngClass", "ngModelChange"], ["JobTitle", "ngModel"], ["type", "number", "placeholder", "Experience in months", "required", "", 1, "form-control", 3, "disabled", "name", "ngModel", "ngClass", "ngModelChange"], ["Experience", "ngModel"], [1, "col-md-3"], ["placeholder", "Degree", "required", "", 1, "form-control", 3, "disabled", "name", "ngModel", "ngClass", "ngModelChange"], ["Degree", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "School/College", "required", "", 1, "form-control", 3, "disabled", "name", "ngModel", "ngClass", "ngModelChange"], ["College", "ngModel"], ["type", "number", "placeholder", "Passing Year", "required", "", 1, "form-control", 3, "disabled", "name", "ngModel", "ngClass", "ngModelChange"], ["PassingYear", "ngModel"], ["type", "number", "placeholder", "Percentage", "required", "", 1, "form-control", 3, "disabled", "name", "ngModel", "ngClass", "ngModelChange"], ["Percentage", "ngModel"], [3, "value"], [1, "img-thumbnail", 3, "src"]], template: function CvBuilderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) { return ctx.useExisting = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Use my existing information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " account_circle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_20_listener($event) { return ctx.user.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_Template_textarea_ngModelChange_24_listener($event) { return ctx.resume.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_28_listener($event) { return ctx.resume.contactNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_31_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_34_listener($event) { return ctx.resume.socialProfile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_42_listener() { return ctx.addSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CvBuilderComponent_div_45_Template, 4, 6, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_53_listener() { return ctx.addExperience(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CvBuilderComponent_div_55_Template, 15, 21, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " school ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_63_listener() { return ctx.addEducation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CvBuilderComponent_div_65_Template, 18, 25, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Other Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvBuilderComponent_Template_textarea_ngModelChange_75_listener($event) { return ctx.resume.otherDetails = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.valid ? ctx.generatePdf("open") : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " picture_as_pdf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Open PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.valid ? ctx.generatePdf("download") : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " cloud_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Download PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.valid ? ctx.generatePdf("print") : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Print PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_93_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Show your picture in Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvBuilderComponent_Template_input_change_102_listener($event) { return ctx.fileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, CvBuilderComponent_img_103_Template, 1, 1, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.useExisting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx.user.firstName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, _r1.invalid && (_r1.touched || _r0.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resume.address)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, _r2.invalid && (_r2.touched || _r0.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resume.contactNo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, _r3.invalid && (_r3.touched || _r0.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx.user.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, _r4.invalid && (_r4.touched || _r0.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resume.socialProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.useExisting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resume.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.useExisting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resume.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.useExisting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resume.educations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resume.otherDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resume.profilePic);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]], styles: [".row[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n}\r\n.material-icons[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n}\r\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin : 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN2LWJ1aWxkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY3YtYnVpbGRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmJ1dHRvbiBzcGFue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5hY3Rpb24tYnV0dG9ucyBidXR0b257XHJcbiAgICBtYXJnaW4gOiA1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cv-builder',
                templateUrl: './cv-builder.component.html',
                styleUrls: ['./cv-builder.component.css']
            }]
    }], function () { return [{ type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map