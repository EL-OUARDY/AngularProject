import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({

  exports: [
    MatCheckboxModule,
    MatProgressSpinnerModule
  ]
})
export class CustomMaterialsModule { }
