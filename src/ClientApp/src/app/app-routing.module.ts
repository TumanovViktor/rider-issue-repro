import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MsalGuard} from "@azure/msal-angular";
import {BrowserUtils} from "@azure/msal-browser";
import {HomeComponent} from "@components/home/home.component";
import {LogoutComponent} from "@components/logout/logout.component";
import {NotFoundComponent} from "@components/not-found/not-found.component";
import {SharedUrlComponent} from "@components/shared-url/shared-url.component";
import {OverviewComponent} from "./pnl/components/overview/overview.component";
import {PnlComponent} from "./pnl/components/pnl/pnl.component";
import {VarComponent} from "./var/components/var.component";
import {AdminPanelComponent} from "./admin-panel/components/admin-panel.component";

const routes: Routes = [
  {path: ``, component: HomeComponent, pathMatch: 'full', canActivate: [MsalGuard]},
  {path: `admin`, component: AdminPanelComponent, canActivate: [MsalGuard]},
  {path: `logout`, component: LogoutComponent},
  {path: `overview`, component: OverviewComponent, canActivate: [MsalGuard]},
  {path: `pnl`, component: PnlComponent, canActivate: [MsalGuard]},
  {path: `share`, component: SharedUrlComponent, canActivate: [MsalGuard]},
  {path: `share/:shortUrl`, component: SharedUrlComponent, canActivate: [MsalGuard]},
  {path: `var`, component: VarComponent, canActivate: [MsalGuard]},
  {path: `**`, component: NotFoundComponent, canActivate: [MsalGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Don't perform initial navigation in iframes or popups
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
