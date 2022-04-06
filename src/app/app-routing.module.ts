import { AdminGuard } from './common/guards/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from './common/guards/app.guard';
import { CompaniesListComponent } from './components/companies/companies-list.component';
import { CompanyEditComponent } from './components/companies/company-edit.component';
import { CompanyViewComponent } from './components/companies/company-view.component';
import { HomePageComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { UserListComponent } from './components/user/user-list.component';
import { UserVerificationComponent } from './components/user/user-verification.component';
import { UserViewComponent } from './components/user/user-view.component';
import { VisitorListComponent } from './components/visitor/visitor-list.component';
import { VisitorViewComponent } from './components/visitor/visitor-view.component';
import { VisitorEditComponent } from './components/visitor/visitor-edit.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [AppAuthGuard],
        component: HomePageComponent,
    },

    {
        path: 'users',
        canActivate: [AppAuthGuard],
        children: [
            {
                path: 'list',
                component: UserListComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'view/:id',
                component: UserViewComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'verification/:id',
                component: UserVerificationComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'edit/:id',
                component: UserEditComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'new',
                component: UserEditComponent,
                canActivate: [AppAuthGuard],
            },
        ],
    },

    {
        path: 'companies',
        canActivate: [AppAuthGuard],
        children: [
            {
                path: 'list',
                component: CompaniesListComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'view/:id',
                component: CompanyViewComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'edit/:id',
                component: CompanyEditComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'new',
                component: CompanyEditComponent,
                canActivate: [AppAuthGuard],
            },
        ],
    },

    {
        path: 'visitors',
        canActivate: [AppAuthGuard],
        children: [
            {
                path: 'list',
                component: VisitorListComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'view/:id',
                component: VisitorViewComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'edit/:id',
                component: VisitorEditComponent,
                canActivate: [AppAuthGuard],
            },
            {
                path: 'new',
                component: VisitorEditComponent,
                canActivate: [AppAuthGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
