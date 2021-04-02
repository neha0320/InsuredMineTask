import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogeComponent } from './login-dialoge.component';

describe('LoginDialogeComponent', () => {
  let component: LoginDialogeComponent;
  let fixture: ComponentFixture<LoginDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDialogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
