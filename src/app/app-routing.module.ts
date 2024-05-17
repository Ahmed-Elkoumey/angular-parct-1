import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EducationComponent } from './education/education.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { BlogsAndContactsComponent } from './blogs-and-contacts/blogs-and-contacts.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,data:{animation:'home'}},
  {path:'about',component:AboutComponent,data:{animation:'about'}},
  {path:'gallery',component:GalleryComponent,data:{animation:'gallery'}},
  {path:'skills',component:GalleryComponent,data:{animation:'skills'}},
  {path:'education',component:EducationComponent,data:{animation:'education'}},
  {path:'exprince',component:GalleryComponent,data:{animation:'exprince'}},
  {path:'work',component:MyWorkComponent,data:{animation:'work'}},
  {path:'blog',component:BlogsAndContactsComponent,data:{animation:'blog'}},
  {path:'contact',component:BlogsAndContactsComponent,data:{animation:'contact'}},
  {path:'**',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
