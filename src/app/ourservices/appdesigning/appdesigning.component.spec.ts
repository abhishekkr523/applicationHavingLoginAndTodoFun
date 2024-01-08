import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdesigningComponent } from './appdesigning.component';

describe('AppdesigningComponent', () => {
  let component: AppdesigningComponent;
  let fixture: ComponentFixture<AppdesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppdesigningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppdesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
