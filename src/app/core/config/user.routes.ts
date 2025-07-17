import { Routes } from '@angular/router';
import { Login } from '../../features/example/presentation/pages/login/login';
import { register } from 'module';
import { Register } from '../../features/example/presentation/pages/register/register';
import { LadingPage } from '../../shared/pages/lading-page/lading-page';
import { WaterQualityChart } from '../../shared/pages/water-quality-chart/water-quality-chart';
import { WaterQualityReport } from '../../shared/pages/water-quality-report/water-quality-report';
import { WaterQuality } from '../../shared/pages/water-quality/water-quality';

export const userRoute: Routes = [
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: '', component: LadingPage},
    {path: 'water', component: WaterQualityChart},
    {path: 'water2', component: WaterQualityReport},
    {path: 'water3', component: WaterQuality},
];
