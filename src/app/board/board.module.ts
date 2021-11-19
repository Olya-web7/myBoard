import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BoardItemComponent } from './board-item/board-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
