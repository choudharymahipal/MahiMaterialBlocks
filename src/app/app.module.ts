import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MenusComponent } from './Shared/Components/menus/menus.component';
import { MaterialModule } from './material.module';
import { CommonService } from './Shared/Services/common.service';
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
    CommonService
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
