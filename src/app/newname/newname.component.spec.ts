import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnameComponent } from './newname.component';

describe('NewnameComponent', () => {
  let component: NewnameComponent;
  let fixture: ComponentFixture<NewnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewnameComponent]
    });
    fixture = TestBed.createComponent(NewnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
