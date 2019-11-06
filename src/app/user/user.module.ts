import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule  } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
