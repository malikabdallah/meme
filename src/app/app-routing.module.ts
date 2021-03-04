import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'search',component:SearchComponent},
  { path: 'trends',component:TrendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
