import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService.component';
import { Sequence } from '../../models/sequence/sequence.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css' , 
  providers : [GameService]

})
export class GameComponent implements OnInit {
  public sequences : Sequence[] = [];
  constructor(private gameServices : GameService){
  }
  ngOnInit(): void {
      this.sequences = this.gameServices.addSequences();
  }
}
