import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbCollapseModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducationComponent } from './education/education.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { BlogsAndContactsComponent } from './blogs-and-contacts/blogs-and-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    EducationComponent,
    MyWorkComponent,
    BlogsAndContactsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbCollapseModule,
    NgbNavModule,
    SharedModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbAccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
