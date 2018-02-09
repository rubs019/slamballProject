import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { OrderByNamePipe } from './order-by-name.pipe';
import { LocalstorageService } from './localstorage.service';
import { MapComponent } from "./map/map.component";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
   path: 'vote',
    component: VoteComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent,
    OrderByNamePipe,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      'apiKey': 'AIzaSyAXF6qdsnwE2v_QBgs0TKzHbuOTkfXUSXY'
    }),
    AgmDirectionModule,
    FormsModule
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
