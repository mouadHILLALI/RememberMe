import { Injectable } from "@angular/core";
import { Sequence } from "../models/sequence/sequence.module";



@Injectable()
export class GameService { 
    private sequences : number = 2;
    private highlightedSequences : number [] = [];
    private arrayOfSequences: Sequence[] = [];
    
    addSequences(levels: number): Sequence[] {
        this.arrayOfSequences = []; 
        for (let index = 0; index < this.sequences + levels; index++) {
            this.arrayOfSequences.push({
                color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`,
                width: 60,
                height: 60
            });
        }
        return this.arrayOfSequences;
    }
    
    highLightSequences(): number[] {
        this.highlightedSequences = []; 
        const length = this.arrayOfSequences.length;
        const numberToHighlight = Math.min(5, length); 
        while (this.highlightedSequences.length < numberToHighlight) {
            const randomIndex = Math.floor(Math.random() * length);
            if (!this.highlightedSequences.includes(randomIndex)) {
                this.highlightedSequences.push(randomIndex);
            }
        }
        return this.highlightedSequences;
    }
    kickCounter(): Promise<boolean>{
        return new Promise((resolve)=>{
            setTimeout(()=>resolve(true),
        15)
        })
    }
    endCounter() : void{
        setTimeout(()=>{
            return true;
        } , 15);
    }
    nextLevel(clickedButtons: number[], highlightedButtons: number[]): boolean {
        if (clickedButtons.length !== highlightedButtons.length) {
            return false; 
        }
        return clickedButtons.every((button, index) => button === highlightedButtons[index]);
    }
    
}