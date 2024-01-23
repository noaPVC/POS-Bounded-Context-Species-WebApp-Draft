import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesItemComponent } from './species-item.component';

describe('SpeciesItemComponent', () => {
  let component: SpeciesItemComponent;
  let fixture: ComponentFixture<SpeciesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
