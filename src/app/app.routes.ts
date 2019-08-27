import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';


// Definicion de rutas
const appRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: NopagefoundComponent }, // cualquier otra ruta que no este definida me muestre el componente page
];

// Para poder importar las rutas se necesita definir el modulo de las rutas (en el importpoer RouterModule)
export const APP_ROUTES = RouterModule.forRoot (appRoutes, {useHash: true});


