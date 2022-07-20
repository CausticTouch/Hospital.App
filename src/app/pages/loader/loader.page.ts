import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { 
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
    },500);
  }

}
