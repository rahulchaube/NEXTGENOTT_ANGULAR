import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchdetailComponent } from './components/searchdetail/searchdetail/searchdetail.component';
import { SearchComponent } from './components/search/search.component';
import { ActordetailComponent } from './components/actordetail/actordetail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  {path: 'details/:type/:id', component: SearchdetailComponent},
  {path: 'castDetail/:type/:id', component: ActordetailComponent},
  {path: '', component: SearchComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contactus', component: ContactComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
