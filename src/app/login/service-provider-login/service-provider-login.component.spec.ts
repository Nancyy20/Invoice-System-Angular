import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderLoginComponent } from './service-provider-login.component';

describe('ServiceProviderLoginComponent', () => {
  let component: ServiceProviderLoginComponent;
  let fixture: ComponentFixture<ServiceProviderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProviderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
