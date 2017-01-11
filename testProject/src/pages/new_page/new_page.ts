import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-new_page',
  templateUrl: 'new_page.html'
})

export class NewPage{
  constructor(public newCtrl: NavController){

  }
}
