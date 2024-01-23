import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerousFeedPageComponent } from './dangerous-feed-page.component';

describe('DangerousFeedPageComponent', () => {
  let component: DangerousFeedPageComponent;
  let fixture: ComponentFixture<DangerousFeedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DangerousFeedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DangerousFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
