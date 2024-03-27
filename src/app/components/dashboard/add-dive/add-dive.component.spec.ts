import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiveComponent } from './add-dive.component';

describe('AddDiveComponent', () => {
  let component: AddDiveComponent;
  let fixture: ComponentFixture<AddDiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
