import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {Comp1Component} from './dynamic/comp1/comp1.component';
import {Comp2Component} from './dynamic/comp2/comp2.component';
import {DirecDirective} from './dynamic/direc.directive';
import {TwoWayComponent} from './two-way/two-way.component';
import {InputOutputComponent} from './input-output/input-output.component';
import {ParentComponent} from './input-output/parent/parent.component';
import {Child1Component} from './input-output/child1/child1.component';
import {Child2Component} from './input-output/child2/child2.component';
import {ChildService1Component} from './input-output/child-service1/child-service1.component';
import {ChildService2Component} from './input-output/child-service2/child-service2.component';
import {NgModelComponent} from './ng-model/ng-model.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormComponent} from './ng-model/reactive-form/reactive-form.component';
import {ShortenPipe} from './shared/pipes/shorten.pipe';
import {UsepipeComponent} from './usepipe/usepipe.component';
import {HttpComponent} from './http/http.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/in-memory-data.service';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';
import { BetterBasicHighlightDirective } from './shared/directives/better-basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    DynamicComponent,
    Comp1Component,
    Comp2Component,
    DirecDirective,
    TwoWayComponent,
    InputOutputComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    ChildService1Component,
    ChildService2Component,
    NgModelComponent,
    ReactiveFormComponent,
    ShortenPipe,
    UsepipeComponent,
    HttpComponent,
    BasicHighlightDirective,
    BetterBasicHighlightDirective,
  ],
  entryComponents: [Comp1Component, Comp2Component],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
