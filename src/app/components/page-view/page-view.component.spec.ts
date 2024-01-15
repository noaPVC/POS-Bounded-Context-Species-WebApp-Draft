import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewComponent } from './page-view.component';

describe('PageViewComponent', () => {
  let component: PageViewComponent;
  let fixture: ComponentFixture<PageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
