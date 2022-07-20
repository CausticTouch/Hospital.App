import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})
export class HubPage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { 
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }
  appointments() {
    this.router.navigate(['appointments']);
  }
  documents() {
    this.router.navigate(['documents']);
  }
  contact() {
    this.router.navigate(['contact']);
  }
}

