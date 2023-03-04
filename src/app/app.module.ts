import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloomNavigationComponent } from './bloom-navigation/bloom-navigation.component';
import { FirstNavComponent } from './bloom-navigation/first-nav/first-nav.component';
import { SecondNavComponent } from './bloom-navigation/second-nav/second-nav.component';
import { SearchListComponent } from './bloom-navigation/first-nav/search-list/search-list.component';
import { MainHomeComponent } from './main-content/main-home/main-home.component';
import { HomeFirstComponent } from './main-content/main-home/home-first/home-first.component';
import { HomeNewArrivalsComponent } from './main-content/main-home/home-new-arrivals/home-new-arrivals.component';
import { HomeBlogComponent } from './main-content/main-home/home-blog/home-blog.component';
import { BloomFooterComponent } from './bloom-footer/bloom-footer.component';
import { MainTeaComponent } from './main-content/main-tea/main-tea.component';
import { TeaFirstComponent } from './main-content/main-tea/tea-first/tea-first.component';
import { TeaFilterCardComponent } from './main-content/main-tea/tea-filter-card/tea-filter-card.component';
import { NotFoundErrorComponent } from './error/not-found-error.component';
import { MainExtrasComponent } from './main-content/main-extras/main-extras.component';
import { ExtrasFirstComponent } from './main-content/main-extras/extras-first/extras-first.component';
import { ExtrasCardsComponent } from './main-content/main-extras/extras-cards/extras-cards.component';
import { MainAboutComponent } from './main-content/main-about/main-about.component';
import { AboutFirstComponent } from './main-content/main-about/about-first/about-first.component';
import { AboutInfoComponent } from './main-content/main-about/about-info/about-info.component';
import { ProductPageComponent } from './main-content/product-page/product-page.component';
import { ProductPageFirstComponent } from './main-content/product-page/product-page-first/product-page-first.component';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';
import { MainBlogComponent } from './main-content/main-blog/main-blog.component';
import { BlogFirstComponent } from './main-content/main-blog/blog-first/blog-first.component';
import { BlogCardsComponent } from './main-content/main-blog/blog-cards/blog-cards.component';
import { MainBlogPostComponent } from './main-content/main-blog-post/main-blog-post.component';
import { MainContactComponent } from './main-content/main-contact/main-contact.component';
import { ContactFirstComponent } from './main-content/main-contact/contact-first/contact-first.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { SignPageComponent } from './sign-page/sign-page.component';
import { SignInComponent } from './sign-page/sign-in/sign-in.component';
import { SignUpComponent } from './sign-page/sign-up/sign-up.component';
import { ContactMapComponent } from './main-content/main-contact/contact-map/contact-map.component';
import { MainBuyComponent } from './main-content/main-buy/main-buy.component';
import { BuyFirstComponent } from './main-content/main-buy/buy-first/buy-first.component';

@NgModule({
  declarations: [
    AppComponent,
    BloomNavigationComponent,
    FirstNavComponent,
    SecondNavComponent,
    SearchListComponent,
    MainHomeComponent,
    HomeFirstComponent,
    HomeNewArrivalsComponent,
    HomeBlogComponent,
    BloomFooterComponent,
    MainTeaComponent,
    TeaFirstComponent,
    TeaFilterCardComponent,
    NotFoundErrorComponent,
    MainExtrasComponent,
    ExtrasFirstComponent,
    ExtrasCardsComponent,
    MainAboutComponent,
    AboutFirstComponent,
    AboutInfoComponent,
    ProductPageComponent,
    ProductPageFirstComponent,
    MainBlogComponent,
    BlogFirstComponent,
    BlogCardsComponent,
    MainBlogPostComponent,
    MainContactComponent,
    ContactFirstComponent,
    SignPageComponent,
    SignInComponent,
    SignUpComponent,
    ContactMapComponent,
    MainBuyComponent,
    BuyFirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule,
    FormsModule,
    AccordionModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9ncLr0ygiIDjCgr-6t4OGndwri3I-H3I',
    }),
    AgmDirectionModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
