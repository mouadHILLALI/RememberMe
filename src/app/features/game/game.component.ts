import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { GameService } from '../../services/GameService.component';
import { Sequence } from '../../models/sequence/sequence.module';
import { CommonModule } from '@angular/common';
=======
import { Sequence } from '../../models/sequence/sequence.module';
import { GameService } from '../../services/GameService.component';
import { CommonModule } from '@angular/common';
import { Animations } from '../../shared/animations/animations';
import { resolve } from 'path';
>>>>>>> REM-8-Implement-ajouterCouleur-to-add-a-new-color-to-the-sequence

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
<<<<<<< HEAD
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
=======
  styleUrl: './game.component.css',
  providers: [GameService], 
  animations : [Animations.changeColor]
})
export class GameComponent implements OnInit {
  public sequences: Sequence[] = [];
  public levels: number = 1;
  public kickGame: boolean = true;
  public counter: number = 0;
  public score : number = 0;
  public highlite : number [] = [];
  public currentHighlight: number | null = null;
  public clickedButtons : number [] = []; 
  public gameOver : boolean | undefined;
  constructor(private gameServices: GameService) {}

  async getKick(): Promise<void> {
    this.kickGame = true; 
    this.sequences = this.gameServices.addSequences(this.levels);
    await this.startCountdown(15); 
    this.kickGame = false;  
  }
  ngOnInit(): void {
    this.getKick();
    this.highlite = this.getHighlitedSequences();
  }


  private startCountdown(seconds: number): Promise<void> {
    return new Promise((resolve) => {
      this.counter = seconds;
      const interval = setInterval(() => {
        this.counter--;
        this.startHighlightSequence();
        if (this.counter == 0) {
          clearInterval(interval);
          this.endCountdown(15);
          resolve();
        }

      }, 1000); 
    });
  }

  private endCountdown(seconds : number) : Promise<void>{
    return new Promise((resolve)=>{
      this.counter = seconds;
      const interval = setInterval(()=>{
        this.counter--;
        if(this.counter == 0){
          clearInterval(interval);
          if(this.gameServices.nextLevel(this.clickedButtons,this.highlite)){
              this.levels++;
              this.score+=10;
              this.getKick();
          }else{
            this.gameOver = true;
          }
          resolve();
        }
      } , 1000)
    });
  }


  getHighlitedSequences(): number[]{
    return this.gameServices.highLightSequences();
  } 

  async startHighlightSequence(): Promise<void> {
    for (const index of this.highlite) {
      if (!this.kickGame) break; 
      this.currentHighlight = index;
      await this.delay(2000); 
    }
    this.currentHighlight = null; 
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  shouldHighlight(index : number) : boolean{
    return this.highlite.includes(index);
  } 
  clickedButton (index : number) : void {
     this.clickedButtons.push(index);
  }

  resetGame(): void {
    this.levels = 1;
    this.score = 0;
    this.gameOver = false;
    this.getKick();
  }
  
>>>>>>> REM-8-Implement-ajouterCouleur-to-add-a-new-color-to-the-sequence
}
