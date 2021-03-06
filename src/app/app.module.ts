import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './navigation/top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { MenuButtonService } from './providers/menu-button.service';
import { HeaderImageComponent } from './home/header-image/header-image.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CvModule } from './cv/cv.module';

@NgModule({
  imports: [
    CvModule,
    RouterModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    HeaderImageComponent,
    BlogComponent,
    ContactComponent
  ],
  providers: [
    MenuButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
