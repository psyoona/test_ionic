import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  data: {name:string, phonenumber:number,type:string,memo:string,star:string}={name:'',phonenumber:0,type:'tourist',memo:'메모없음',star:'★'};

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  plus() {
    this.view.dismiss(this.data);
  }
  dismiss() {
      console.log('dismiss');
      this.view.dismiss(0);
    }
}
