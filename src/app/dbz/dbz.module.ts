import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';




@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class DbzModule { }
