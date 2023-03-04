import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { importProvidersFrom } from '@angular/core'
import { provideFirebaseApp, initializeApp} from '@angular/fire/app'
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore())
    ),
  ],
});
