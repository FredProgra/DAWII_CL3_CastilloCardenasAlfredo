import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EpisodiosIDComponent } from './dashboard/episodios-id/episodios-id.component';
import { ImgfiltroComponent } from './dashboard/imgfiltro/imgfiltro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent,
 
    children: [
        {path: "episodios-id", component: EpisodiosIDComponent},
        {path: "imgfiltro", component: ImgfiltroComponent},            
        
    ]
},
{path: "", redirectTo: "dashboard", pathMatch: "full"},
{path: "**", component: PageNotFoundComponent}
];
