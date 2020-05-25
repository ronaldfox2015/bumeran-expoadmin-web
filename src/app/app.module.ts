import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from 'app/all/guards/user.guards';
import { UserService } from 'app/services/user.service';
import { SharedModule } from './all/components/share.module';
import { URL_BASE } from './app.constans';
import { LayoutComponent } from './all/components/layout/layout.component';
import { HeaderComponent } from './all/components/layout/header/header.component';
import { AsideMenuComponent } from './all/components/layout/aside-menu/aside-menu.component';
import { HttpClient } from 'app/all/library/http-client';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideMenuComponent,
    LoginComponent,
    LayoutComponent,
    PageNotFoundComponent,
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    {
      provide: 'url',
      useValue: URL_BASE
    },
    HttpClient,
    UserService,
    LoggedInGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
