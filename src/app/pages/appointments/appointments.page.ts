import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { IonModal, MenuController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  constructor(private http: HttpClient, private menuCtrl: MenuController) { 
    this.menuCtrl.enable(true);
  }

  appointments: any = [];

  ngOnInit() {
    this.http.get('https://localhost:44343/api/app/appointment')
      .subscribe(data => {
        this.appointments = data;
      });
  }

  @ViewChild(IonModal) modal: IonModal;

  name = '';
  dr = '';
  datetime: any  = '';
  description = '';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    let newAppointment = {
      "name": this.name,
      "dr": this.dr,
      "date": this.datetime,
      "time": this.datetime,
      "description": this.description
    }
    this.http.post('https://localhost:44343/api/app/appointment', newAppointment).subscribe(data =>{
      this.ngOnInit()});
    this.modal.dismiss(newAppointment, 'confirm');
    this.ngOnInit();
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      
    }
  }

}
