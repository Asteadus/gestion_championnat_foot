import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneClassementComponent } from './get-one-classement.component';

describe('GetOneClassementComponent', () => {
  let component: GetOneClassementComponent;
  let fixture: ComponentFixture<GetOneClassementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneClassementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
