import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient, private router: Router, private menuCtrl: MenuController, public toastController: ToastController) { 
    this.menuCtrl.enable(false);
  }

  usrs : any = [];

  ngOnInit() {
  }

  email ='';
  password ='';

  async login() {
    this.http.get('https://localhost:44343/api/app/usr/of-users')
    .subscribe(data => {
      this.usrs = data;
    })

    this.usrs.forEach(async usr => {
      if(this.email == usr.email && this.password == usr.password){
        const toast = await this.toastController.create({
          message: 'Login Successful',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['hub']);
      }else{
        const toast = await this.toastController.create({
          message: 'Your email or password is worng try again',
          duration: 2000
        });
        toast.present();
      }
    });
  }
  register() {
    this.router.navigate(['register']);
  }
}
