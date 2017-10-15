import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './navigation/top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { MenuButtonService } from './providers/menu-button.service';
import { HeaderImageComponent } from './home/header-image/header-image.component';
import { CvComponent } from './cv/cv.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    ChartsModule,
    RouterModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    HeaderImageComponent,
    CvComponent,
    BlogComponent,
    ContactComponent
  ],
  providers: [
    MenuButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
