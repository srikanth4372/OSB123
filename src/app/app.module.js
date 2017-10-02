var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MyApp } from './app.component';
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
import { LogoutPage } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
var cloudSettings = {
    'core': {
        'app_id': '695c447e'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            //HomePage,
            RenewalPage,
            RequestHistoryPage,
            MyProfilePage,
            MyAccountPage,
            ReferFriendPage,
            AddressPage,
            OffersPage,
            TroubleshootPage,
            ShortcutsPage,
            VoluntarySuspensionPage,
            LogoutPage, LoginPage
        ],
        imports: [
            BrowserModule,
            HttpModule,
            IonicModule.forRoot(MyApp),
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            //  HomePage,
            RenewalPage,
            RequestHistoryPage,
            MyProfilePage,
            MyAccountPage,
            ReferFriendPage,
            AddressPage,
            OffersPage,
            TroubleshootPage,
            ShortcutsPage,
            VoluntarySuspensionPage,
            LogoutPage, LoginPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            AuthServiceProvider, GoogleMaps
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map