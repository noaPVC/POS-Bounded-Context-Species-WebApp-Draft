import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerousFeedItemComponent } from './dangerous-feed-item.component';

describe('DangerousFeedItemComponent', () => {
  let component: DangerousFeedItemComponent;
  let fixture: ComponentFixture<DangerousFeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DangerousFeedItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DangerousFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
