import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadToDoComponent } from './head-to-do/head-to-do.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { AllToDoComponent } from './all-to-do/all-to-do.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadToDoComponent,
    ListToDoComponent,
    AllToDoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
