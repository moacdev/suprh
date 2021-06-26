import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaieModuleRoutingModule } from './paie-module-routing.module';
import { Routes } from '@angular/router';
import { UserCardComponent } from '../user-card/user-card.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,

    PaieModuleRoutingModule
  ]
})

export class PaieModuleModule { }
