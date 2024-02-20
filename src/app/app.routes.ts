import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CompetitionsComponent} from "../competitions/competitions.component";



export const routes: Routes = [
  { path: 'competitions', component: CompetitionsComponent },
];


