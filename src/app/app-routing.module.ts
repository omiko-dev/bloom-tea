import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExtrasComponent } from './main-content/main-extras/main-extras.component';
import { MainHomeComponent } from './main-content/main-home/main-home.component';
import { MainTeaComponent } from './main-content/main-tea/main-tea.component';
import { NotFoundErrorComponent } from './error/not-found-error.component';
import { MainAboutComponent } from './main-content/main-about/main-about.component';
import { ProductPageComponent } from './main-content/product-page/product-page.component';
import { MainBlogComponent } from './main-content/main-blog/main-blog.component';
import { MainBlogPostComponent } from './main-content/main-blog-post/main-blog-post.component';
import { MainContactComponent } from './main-content/main-contact/main-contact.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { MainBuyComponent } from './main-content/main-buy/main-buy.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },

  { path: 'Home', component: MainHomeComponent },

  { path: 'Tea', component: MainTeaComponent },

  { path: 'Extras', component: MainExtrasComponent },

  { path: 'Product', component: ProductPageComponent },

  { path: 'Blog', component: MainBlogComponent },

  { path: 'Post', component: MainBlogPostComponent },

  { path: 'Contact', component: MainContactComponent },

  { path: 'About', component: MainAboutComponent },

  { path: 'Registre', component: SignPageComponent },

  { path: 'Buy', component: MainBuyComponent },

  { path: '**', component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
