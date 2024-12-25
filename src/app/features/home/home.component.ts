import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { CanvasHomeComponent } from "../canvas-home/canvas-home.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CanvasHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(private router: Router){
      
  }
  goToGame():void {
    this.router.navigate(['/game']);
  }
}
