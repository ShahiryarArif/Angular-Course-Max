import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SuccessalertComponent } from "./successalert/successalert.component";
import { WarningAlertComponent } from "./warningalert/warningalert.component";

@NgModule({
  declarations: [AppComponent, WarningAlertComponent, SuccessalertComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
