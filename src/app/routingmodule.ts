import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Exercise1Component } from "./pages/exercise1/exercise1.component";
import { Exercise2Component } from "./pages/exercise2/exercise2.component";


const routes: Routes = [
    { path: "", component: Exercise1Component},
    { path: "tag2", component: Exercise2Component}

]
@NgModule({
   imports:[RouterModule.forRoot( routes ) ],
   exports: [RouterModule]
})
export class AppRoutingModule{}