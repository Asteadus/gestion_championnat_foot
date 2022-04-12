import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneChampionnatComponent } from './get-one-championnat.component';

describe('GetOneChampionnatComponent', () => {
  let component: GetOneChampionnatComponent;
  let fixture: ComponentFixture<GetOneChampionnatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneChampionnatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneChampionnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
