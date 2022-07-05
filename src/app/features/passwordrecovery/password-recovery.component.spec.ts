import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrecoveryComponent } from './password-recovery.component';

describe('PasswordrecoveryComponent', () => {
  let component: PasswordrecoveryComponent;
  let fixture: ComponentFixture<PasswordrecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordrecoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
