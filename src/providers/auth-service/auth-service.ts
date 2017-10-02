import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User{
	mobile:string;
	username:string

	constructor(mobile:string,username:string){
	 	this.mobile=mobile;
	 	this.username=username;
	}
}

@Injectable()
export class AuthServiceProvider {

CurrentUser: User;	

	public login(credentials) {
    if (credentials.mobile === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "s" && credentials.mobile === "s");
        // this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

}
