import { sequence } from "@angular/animations";
import { Sequence } from "../models/sequence/sequence.module";
import { Color } from "three";

export class GameService { 
    private level : number = 1;
    private sequences : number = 2;

    addSequences():Sequence []{
        const arrayOfSequences: Sequence[] = [];
        for (let index = 0; index <= this.sequences; index++) {
           arrayOfSequences.push({
            color : `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}` , 
            width : 15 , 
            height : 15
           })
        }
        this.sequences++;
        return arrayOfSequences;
    }

    trackLevel(): number{
        return 0;
    }

    trackScore():number{
        return 0;
    }
    kickCounter(): void{
        setTimeout(()=>{
            return true;
        } , 15);
    }

    endCounter() : void{
        setTimeout(()=>{
            return true;
        } , 15);
    }

}