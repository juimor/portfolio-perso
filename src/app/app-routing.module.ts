import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { RouteErrorComponent } from './pages/route-error/route-error.component';

const routes: Routes = [
  {
    path: 'works',
    title: 'works',
    component: PersonalProjectsComponent,
  },
  {
    path: '',
    title: 'by Juimor',
    component: HomepageComponent,
  },
  { path: '**', component: RouteErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
