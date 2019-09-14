import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {InputOutputComponent} from './input-output/input-output.component';


const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'propertybinding', component: PropertyBindingComponent},
  {path: 'twoway', component: TwoWayComponent},
  {path: 'dynamiccomponent', component: DynamicComponent},
  {path: 'io', component: InputOutputComponent},
  {path: '', component: InterpolationComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
