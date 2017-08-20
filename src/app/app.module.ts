import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './navigation/top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { MenuButtonService } from './providers/menu-button.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MenuButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
