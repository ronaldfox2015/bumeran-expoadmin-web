import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgiconsComponent } from './svgicons.component';

describe('SvgiconsComponent', () => {
  let component: SvgiconsComponent;
  let fixture: ComponentFixture<SvgiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
