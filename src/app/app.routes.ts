import { BusinessunitComponent } from './admin/businessunit/businessunit.component';
import { ViewscreenComponent } from './viewscreen/viewscreen.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreatescreenComponent } from './createscreen/createscreen.component';
import { Routes } from "@angular/router";
import { ObjectsComponent } from "./objects/objects.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { PagelayoutsComponent } from "./pagelayouts/pagelayouts.component";
import { CreatelayoutComponent } from "./createlayout/createlayout.component";
import { AdvancesearchComponent } from './advancesearch/advancesearch.component';
import { OthertasksComponent } from './othertasks/othertasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsettingsComponent } from './admin/adminsettings/adminsettings.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { RouteguardService } from './services/business/routeguard.service';
import { GrantsComponent } from './admin/grants/grants.component';
import { RolesComponent } from './admin/roles/roles.component';
import {AdminObjectComponent} from './admin/admin-object/admin-object.component';

export const routes:Routes = [
        { path: 'login', component: LoginComponent },
        {
            path: 'home',
            component: HomeComponent,
            canActivate: [RouteguardService],
            children: [
                { path:'dashboard', component:DashboardComponent},
                { path: 'objects/:objectID', component: ObjectsComponent },
                {
                    path: 'page-layouts/:objectID',
                    component: PagelayoutsComponent
                },
                {
                    path: 'create-layout/:objectID',
                    component: CreatelayoutComponent
                },
                {
                    path: 'edit-layout/:objectID/:layoutId',
                    component: CreatelayoutComponent
                },
                {
                    path: 'create-screen/:objectID',
                    component: CreatescreenComponent
                },
                {
                    path: 'edit-screen/:objectID/:screenId',
                    component: CreatescreenComponent
                },
                {
                    path: 'view-screen/:objectID/:screenId',
                    component: ViewscreenComponent
                },
                {
                    path: 'advance-search/:objectID',
                    component: AdvancesearchComponent
                },
                {
                    path: 'other-details/:objectID',
                    component: OthertasksComponent
                }
            ]
        },
        {
          path:"admin",
          component:AdminsettingsComponent,
          canActivate: [RouteguardService],
          children:[
            { path:'user-management', component:UsermanagementComponent},
            { path:'grants', component:GrantsComponent},
            { path:'business-unit', component:BusinessunitComponent},
            { path:'roles', component:RolesComponent},
            { path:'objects', component:AdminObjectComponent},
          ]
        },
        {
            path: '',
            redirectTo: '/login',
            pathMatch: 'full'
        },
        { path: '**', component: PagenotfoundComponent }
];
