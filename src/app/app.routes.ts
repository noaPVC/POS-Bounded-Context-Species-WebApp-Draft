import { Routes } from '@angular/router';
import { DangerousFeedPageComponent } from './components/dangerous-feed-page/dangerous-feed-page.component';
import { SpeciesPageComponent } from './components/species-page/species-page.component';
import { StatsPageComponent } from './components/stats-page/stats-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dangerous-feed'
    },
    {
        path: 'dangerous-feed',
        component: DangerousFeedPageComponent
    },
    {
        path: 'species',
        component: SpeciesPageComponent
    },
    {
        path: 'statistics',
        component: StatsPageComponent
    }
]