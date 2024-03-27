import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveDetailComponent } from './dive-detail.component';

describe('DiveDetailComponent', () => {
  let component: DiveDetailComponent;
  let fixture: ComponentFixture<DiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiveDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
