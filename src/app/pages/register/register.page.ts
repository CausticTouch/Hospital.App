import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private http: HttpClient,  private menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

  email     = '';
  password     = '';
  gender     = '';
  firstName     = '';
  lastName     = '';
  nationality     = '';
  dateBirth: any     = '';
  ocupation     = '';
  address     = '';
  postCode     = '';
  height     = '';
  weight     = '';
  phone     = '';
  register(){
    let newUsr = {
      "email": this.email,
      "password": this.password,
      "gender": this.gender,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "nationality": this.nationality,
      "dateBirth": this.dateBirth,
      "ocupation": this.ocupation,
      "address": this.address,
      "postCode": this.postCode,
      "height": this.height,
      "weight": this.weight,
      "phone": this.phone,
    }
    this.http.post('https://localhost:44343/api/app/usr', newUsr).subscribe;
    this.router.navigate(['login']);
  }
}
