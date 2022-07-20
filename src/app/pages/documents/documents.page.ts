import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  constructor(private http: HttpClient, private menuCtrl: MenuController) { 
    this.menuCtrl.enable(true);
  }

  documents: any = [];

  ngOnInit() {
    this.http.get('https://localhost:44343/api/app/document')
    .subscribe(data => {
      this.documents = data;
    })
  }
  @ViewChild(IonModal) modal: IonModal;

  firstName ='';
  lastName ='';
  email ='';
  phoneNumber ='';
  patientInfo ='';
  desc ='';
  

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    let newDocument = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "phoneNumber": this.phoneNumber,
      "patientInfo": this.patientInfo,
      "desc": this.desc
    };
    this.http.post('https://localhost:44343/api/app/document', newDocument).subscribe(data =>{
      this.ngOnInit();
    });
    this.modal.dismiss(newDocument, 'confirm');
    this.ngOnInit();
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      
    }
  }

}
