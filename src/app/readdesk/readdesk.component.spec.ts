import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaddeskComponent } from './readdesk.component';

describe('ReaddeskComponent', () => {
  let component: ReaddeskComponent;
  let fixture: ComponentFixture<ReaddeskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReaddeskComponent]
    });
    fixture = TestBed.createComponent(ReaddeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
