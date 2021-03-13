import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

const mods = [MatDialogModule, MatToolbarModule, MatButtonModule,MatInputModule,MatCheckboxModule,MatSelectModule,MatCardModule, MatIconModule,MatDividerModule];

@NgModule({
  declarations: [],
  imports: mods,
  exports: mods
})
export class MaterialModule { }
