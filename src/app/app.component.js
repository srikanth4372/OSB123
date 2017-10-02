var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { RenewalPage } from '../pages/renewal/renewal';
import { RequestHistoryPage } from '../pages/request-history/request-history';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyAccountPage } from '../pages/my-account/my-account';
import { ReferFriendPage } from '../pages/refer-friend/refer-friend';
import { AddressPage } from '../pages/address/address';
import { OffersPage } from '../pages/offers/offers';
import { TroubleshootPage } from '../pages/troubleshoot/troubleshoot';
import { ShortcutsPage } from '../pages/shortcuts/shortcuts';
import { VoluntarySuspensionPage } from '../pages/voluntary-suspension/voluntary-suspension';
import { LoginPage } from '../pages/login/login';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = LoginPage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage, class: 'home' },
            { title: 'Renewal', component: RenewalPage, class: 'card' },
            { title: 'Request History', component: RequestHistoryPage, class: 'create' },
            { title: 'My Profile', component: MyProfilePage, class: 'contact' },
            { title: 'My Account', component: MyAccountPage, class: 'paper' },
            { title: 'Refer Friend', component: ReferFriendPage, class: 'person-add' },
            { title: 'Address', component: AddressPage, class: 'pin' },
            { title: 'Offers', component: OffersPage, class: 'pricetags' },
            { title: 'Troubleshoot', component: TroubleshootPage, class: 'logo-steam' },
            { title: 'Shortcuts', component: ShortcutsPage, class: 'jet' },
            { title: 'Voluntary Suspension', component: VoluntarySuspensionPage, class: 'cut' },
            { title: 'Log out', component: LoginPage, class: 'log-out' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map