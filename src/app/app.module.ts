import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
