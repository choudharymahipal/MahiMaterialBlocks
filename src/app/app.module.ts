import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginOneScreenComponent } from './Screens/Login/login-one-screen/login-one-screen.component';
import { LoginTwoScreenComponent } from './Screens/Login/login-two-screen/login-two-screen.component';
import { HeaderOneScreenComponent } from './Screens/Header/header-one-screen/header-one-screen.component';
import { HeaderTwoScreenComponent } from './Screens/Header/header-two-screen/header-two-screen.component';
import { FooterOneScreenComponent } from './Screens/Footer/footer-one-screen/footer-one-screen.component';
import { FooterTwoScreenComponent } from './Screens/Footer/footer-two-screen/footer-two-screen.component';
import { BlogOneScreenComponent } from './Screens/Blog/blog-one-screen/blog-one-screen.component';
import { BlogTwoScreenComponent } from './Screens/Blog/blog-two-screen/blog-two-screen.component';
import { MenusComponent } from './Shared/Components/menus/menus.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
    //HighlightModule
  ],
  providers: [
    //Help: https://ngx-highlight.netlify.app/

    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: <HighlightOptions>{
    //     lineNumbers: true,
    //     coreLibraryLoader: () => import('highlight.js/lib/core'),
    //     //lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
    //     themePath: 'node_modules/highlight.js/styles/github.css',
    //     languages: {
    //       typescript: () => import('highlight.js/lib/languages/typescript'),
    //       css: () => import('highlight.js/lib/languages/css'),
    //       xml: () => import('highlight.js/lib/languages/xml'),
    //     },
    //   },
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
