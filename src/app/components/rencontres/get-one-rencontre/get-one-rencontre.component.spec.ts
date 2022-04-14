import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneRencontreComponent } from './get-one-rencontre.component';

describe('GetOneRencontreComponent', () => {
  let component: GetOneRencontreComponent;
  let fixture: ComponentFixture<GetOneRencontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneRencontreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneRencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
