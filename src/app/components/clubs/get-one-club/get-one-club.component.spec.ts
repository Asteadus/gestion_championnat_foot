import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneClubComponent } from './get-one-club.component';

describe('GetOneClubComponent', () => {
  let component: GetOneClubComponent;
  let fixture: ComponentFixture<GetOneClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
