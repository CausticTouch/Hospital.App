import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HubPage } from './hub.page';

describe('HubPage', () => {
  let component: HubPage;
  let fixture: ComponentFixture<HubPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate', ()=> {
    spyOn(router, 'navigate');
    
    expect(router.navigate).toHaveBeenCalledWith(['hub']);
  })
});

