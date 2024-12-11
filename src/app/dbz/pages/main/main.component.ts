import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {

  constructor(
    private dbzservice: DbzService
  ){}

  get characters(): Character[] {
    return [...this.dbzservice.character]
  }

  onDeleteCharacter(id: string):void{
    this.dbzservice.deleteCharacterByid(id)
  }

  onNewCharacter(character: Character): void{
    this.dbzservice.addCharacter(character)
  }
}
