import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ // Importieren der NavbarComponent hier, wenn sie standalone ist
        RouterTestingModule,
        NavbarComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo with correct text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoElement = compiled.querySelector('.logo') as HTMLElement;
    expect(logoElement).toBeTruthy();
    if (logoElement) {
      expect(logoElement.textContent).toContain('Species WEB-Draft');
    }
  });
});



describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent,
        RouterTestingModule.withRoutes([
          { path: 'dangerous-feed', component: DummyComponent },
          { path: 'species', component: DummyComponent },
          { path: 'statistics', component: DummyComponent }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should activate the correct nav link for the route', async () => {
    await router.navigate(['species']);
    fixture.detectChanges();
    const speciesLink = fixture.nativeElement.querySelector('.nav-link[routerLink="species"]');
    expect(speciesLink).toBeTruthy();
    if (speciesLink) {
      expect(speciesLink.classList.contains('active')).toBe(true);
    }
  });
});

class DummyComponent {}