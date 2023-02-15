import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { AppRouting } from './app.routing'
import { FilterTokenInterceptor } from './interceptors/filter-token.interceptor'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { counterReducer } from './store/reducers/counter.reducer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: FilterTokenInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
