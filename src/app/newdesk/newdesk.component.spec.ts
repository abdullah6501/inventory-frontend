import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdeskComponent } from './newdesk.component';

describe('NewdeskComponent', () => {
  let component: NewdeskComponent;
  let fixture: ComponentFixture<NewdeskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewdeskComponent]
    });
    fixture = TestBed.createComponent(NewdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
