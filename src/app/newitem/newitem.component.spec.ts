import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewitemComponent } from './newitem.component';

describe('NewitemComponent', () => {
  let component: NewitemComponent;
  let fixture: ComponentFixture<NewitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewitemComponent]
    });
    fixture = TestBed.createComponent(NewitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
