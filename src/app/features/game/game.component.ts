import { Component } from '@angular/core';
import { Sequence } from '../../models/sequence/sequence.module';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css' , 

})
export class GameComponent {
  sequences : Sequence [] = []
}
