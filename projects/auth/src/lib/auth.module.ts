import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [AuthComponent, WrapperComponent],
  imports: [
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
