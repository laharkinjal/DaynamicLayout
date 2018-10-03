
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';
import { SortablejsModule } from 'angular-sortablejs';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteguardService } from './services/business/routeguard.service';

import { AppComponent } from './app.component';
import { ObjectsComponent } from './objects/objects.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { routes } from "./app.routes";
import { NavbarComponent } from './navbar/navbar.component';
import { PagelayoutsComponent } from './pagelayouts/pagelayouts.component';
import { CreatelayoutComponent } from './createlayout/createlayout.component';
import { QueryBuilderModule } from "angular2-query-builder";

// primeNg Components
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CalendarModule} from 'primeng/calendar';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TabViewModule} from 'primeng/tabview';
import {GrowlModule} from 'primeng/growl';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TreeTableModule} from 'primeng/treetable';
// BN
import {DragDropModule} from 'primeng/dragdrop';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DataTableModule} from 'primeng/datatable';

import {MessageService} from 'primeng/components/common/messageservice';
import {ConfirmationService} from 'primeng/api';
// End primeNg


import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreatescreenComponent } from './createscreen/createscreen.component';
import { SearchobjectsPipe } from './pipes/searchobjects.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewscreenComponent } from './viewscreen/viewscreen.component';
import { AdvancesearchComponent } from './advancesearch/advancesearch.component';
import { OthertasksComponent } from './othertasks/othertasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TokenInterceptor } from './services/interceptor/jwt.interceptor';
import { AdminsettingsComponent } from './admin/adminsettings/adminsettings.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { UserformComponent } from './admin/usermanagement/userform/userform.component';
import { GrantsComponent } from './admin/grants/grants.component';
import { RolesComponent } from './admin/roles/roles.component';
import { GrantslistComponent } from './admin/grants/grantslist/grantslist.component';
import { BusinessunitComponent } from './admin/businessunit/businessunit.component';
import { BusinessunitlistComponent } from './admin/businessunit/businessunitlist/businessunitlist.component';
import { BusinessunitviewComponent } from './admin/businessunit/businessunitview/businessunitview.component';
import { BusinessunitformComponent } from './admin/businessunit/businessunitform/businessunitform.component';
import { UserlistComponent } from './admin/usermanagement/userlist/userlist.component';
import { RoleviewComponent } from './admin/roles/roleview/roleview.component';
import { RoleslistComponent } from './admin/roles/roleslist/roleslist.component';
import { RolesformComponent } from './admin/roles/rolesform/rolesform.component';
import { RoleextlistComponent } from './admin/roles/roleextlist/roleextlist.component';
// BN
import { BussinessunitrolesComponent } from './admin/businessunit/bussinessunitroles/bussinessunitroles.component';
import { BusinessunitOGrantComponent } from './admin/businessunit/bussinessunitroles/businessunit-o-grant/businessunit-o-grant.component';
import { BusinessunitLGrantComponent } from './admin/businessunit/bussinessunitroles/businessunit-l-grant/businessunit-l-grant.component';
import { RoleOGrantComponent } from './admin/roles/role-o-grant/role-o-grant.component';
import { RoleLGrantComponent } from './admin/roles/role-l-grant/role-l-grant.component';
import { RoleFGrantComponent } from './admin/roles/role-f-grant/role-f-grant.component';
import { RolegrantsComponent } from './admin/roles/rolegrants/rolegrants.component';
import { ObjectlistComponent } from './admin/roles/objectlist/objectlist.component';

import { AdminObjectListComponent} from './admin/admin-object/admin-object-list/admin-object-list.component';
import { AdminObjectComponent} from './admin/admin-object/admin-object.component';
import { AdminObjectFormComponent } from './admin/admin-object/admin-object-form/admin-object-form.component';
import { AdminObjectDetailsComponent } from './admin/admin-object/admin-object-details/admin-object-details.component';
import { AdminObjectFieldsComponent } from './admin/admin-object/admin-object-fields/admin-object-fields.component';
import { AdminObjectValidaitonRulesComponent } from './admin/admin-object/admin-object-validation-rules/admin-object-validation-rules.component';
import { AdminObjectBusinessRulesComponent } from './admin/admin-object/admin-object-business-rules/admin-object-business-rules.component';
import { AdminObjectLayoutsComponent } from './admin/admin-object/admin-object-layouts/admin-object-layouts.component';
import { AdminObjectRolesComponent } from './admin/admin-object/admin-object-roles/admin-object-roles.component';
import { RecordtypeListComponent } from './admin/admin-object/recordtype-list/recordtype-list.component';
import { EditValidationRulesComponent } from './admin/admin-object/admin-object-validation-rules/edit-validation-rules/edit-validation-rules.component';
import { EditBusinessRulesComponent } from './admin/admin-object/admin-object-business-rules/edit-business-rules/edit-business-rules.component';
import { UserdetailsComponent } from './admin/usermanagement/userdetails/userdetails.component';
import { UsergrantsComponent } from './admin/usermanagement/usergrants/usergrants.component';
import { UserrolesComponent } from './admin/usermanagement/userroles/userroles.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectsComponent,
    PagenotfoundComponent,
    NavbarComponent,
    PagelayoutsComponent,
    CreatelayoutComponent,
    CreatescreenComponent,
    SearchobjectsPipe,
    LoginComponent,
    HomeComponent,
    ViewscreenComponent,
    AdvancesearchComponent,
    OthertasksComponent,
    DashboardComponent,
    AdminsettingsComponent,
    UsermanagementComponent,
    UserformComponent,
    GrantsComponent,
    RolesComponent,
    GrantslistComponent,
    BusinessunitComponent,
    BusinessunitlistComponent,
    BusinessunitviewComponent,
    BusinessunitformComponent,
    UserlistComponent,
    RoleviewComponent,
    RoleslistComponent,
    RolesformComponent,
    RoleextlistComponent,
    BussinessunitrolesComponent,
    BusinessunitOGrantComponent,// BN
    BusinessunitLGrantComponent, // BN
    RoleOGrantComponent, // BN
    RoleLGrantComponent, // BN
    RoleFGrantComponent, // BN
    RolegrantsComponent, // BN
    ObjectlistComponent, // BN
    AdminObjectComponent,
    AdminObjectListComponent,
    AdminObjectFormComponent,
    AdminObjectDetailsComponent,
    AdminObjectFieldsComponent,
    AdminObjectValidaitonRulesComponent,
    AdminObjectBusinessRulesComponent,
    AdminObjectLayoutsComponent,
    AdminObjectRolesComponent,
    RecordtypeListComponent,
    EditValidationRulesComponent,
    EditBusinessRulesComponent,
    UserdetailsComponent,
    UsergrantsComponent,
    UserrolesComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    ScrollPanelModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    CardModule,
    AccordionModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    BreadcrumbModule,
    TabViewModule,
    GrowlModule,
    ConfirmDialogModule,
    TreeTableModule,
    QueryBuilderModule,
    // BN
    DragDropModule,
    OverlayPanelModule,
    ProgressSpinnerModule,
    AutoCompleteModule,
    DataTableModule,

    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    DndModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150 }),
    FormsModule
  ],
  entryComponents: [
  ],
  providers: [
    MessageService,
    ConfirmationService,
    RouteguardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
