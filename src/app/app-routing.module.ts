import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { SearchListingComponent } from './components/search-listing/search-listing.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'search-listing',
    component: SearchListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
