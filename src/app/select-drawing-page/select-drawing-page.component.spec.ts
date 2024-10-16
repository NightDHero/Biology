import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDrawingPageComponent } from './select-drawing-page.component';

describe('SelectDrawingPageComponent', () => {
  let component: SelectDrawingPageComponent;
  let fixture: ComponentFixture<SelectDrawingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDrawingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDrawingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
