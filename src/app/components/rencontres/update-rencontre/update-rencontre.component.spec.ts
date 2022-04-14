import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRencontreComponent } from './update-rencontre.component';

describe('UpdateRencontreComponent', () => {
  let component: UpdateRencontreComponent;
  let fixture: ComponentFixture<UpdateRencontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRencontreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
