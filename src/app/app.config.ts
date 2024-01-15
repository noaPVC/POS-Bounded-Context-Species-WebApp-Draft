import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DataService } from './services/data.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    DatePipe
  ]
}