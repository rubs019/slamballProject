import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { OrderByNamePipe } from './order-by-name.pipe';
import { LocalstorageService } from './localstorage.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
   path: 'vote',
    component: VoteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent,
    OrderByNamePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
