import {LocationStrategy, PathLocationStrategy, registerLocaleData} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import localeGb from '@angular/common/locales/en-GB';
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MsalInterceptor} from "@azure/msal-angular";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";


registerLocaleData(localeGb);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  providers: [
    MatDatepickerModule,
    {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true},
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: []
})
export class AppModule {
}
