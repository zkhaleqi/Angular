import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-orders/section-sales/section-sales.component';
import { SectionHealthComponent } from './app/sections/section-orders/section-health/section-health.component';
import { SectionOrdersComponent } from './app/sections/section-orders/section-orders.component';

export const appRoutes: Routes = [
    { path: 'sales', component: SectionSalesComponent },
    { path: 'orders', component: SectionOrdersComponent },
    { path: 'health', component: SectionHealthComponent },
    { path: '', redirectTo: '/sales', pathMatch: 'full' }
];
