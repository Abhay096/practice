import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DiService } from './di.service';
import { FormsModule } from '@angular/forms';
import { MypipePipe } from './mypipe.pipe';
import { HttpcompComponent } from './httpcomp/httpcomp.component';
import { HttpserviceService } from './httpservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MypipePipe,
    HttpcompComponent,
    Routing1Component,
    Routing2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'routing1/:id',
        component: Routing1Component
      },
      {
        path: 'routing2',
        component: Routing2Component
      }
    ])
  ],
  providers: [DiService, HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
