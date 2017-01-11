import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewPage } from '../new_page/new_page';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

  }
  goNewView(){this.navCtrl.push(NewPage)}
}
