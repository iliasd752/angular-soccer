import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {importProvidersFrom} from "@angular/core";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: 'APP_CONFIG', useValue: appConfig}
  ],
})
  .catch((err) => console.error(err));
