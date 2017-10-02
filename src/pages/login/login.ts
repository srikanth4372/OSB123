import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, Loading,AlertController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';





@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loading: Loading;
	  registerCredentials = { mobile: '', password: '' };


  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

	public login() {
	    this.showLoading()
	    this.auth.login(this.registerCredentials).subscribe(allowed => {
	      if (allowed) {        
	        this.navCtrl.setRoot('HomePage');
	      } else {
	        this.showError("login failed");
	      }
	    },
	      error => {
	        this.showError(error);
	      });
	  }
	showLoading() {this.loading = this.loadingCtrl.create({content: 'Please wait...',dismissOnPageChange: true});this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
