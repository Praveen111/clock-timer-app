import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from '../components/Home.component';

const app: Routes = [
    {path: '' , component: HomeComponent}
];

@NgModule({
    imports:  [RouterModule.forRoot(app)],
    exports : [RouterModule]
})
export class RouteModule { }
