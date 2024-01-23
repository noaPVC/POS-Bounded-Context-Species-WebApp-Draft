import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesPageComponent } from './species-page.component';

describe('SpeciesPageComponent', () => {
  let component: SpeciesPageComponent;
  let fixture: ComponentFixture<SpeciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
