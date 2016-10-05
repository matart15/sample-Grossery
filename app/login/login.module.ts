import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { loginRouting } from "./login.routing";
import { LoginComponent } from "./login.component";
import { TestImageComponent } from "../test_image/test_image.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    loginRouting
  ],
  declarations: [
    // TestImageComponent,
    LoginComponent
  ]
})
export class LoginModule { }
