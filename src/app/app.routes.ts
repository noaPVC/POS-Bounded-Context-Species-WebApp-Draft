import { Routes } from '@angular/router';
import { PageViewComponent } from './components/page-view/page-view.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/demo'
    },
    {
        path: 'demo',
        component: PageViewComponent
    }
]