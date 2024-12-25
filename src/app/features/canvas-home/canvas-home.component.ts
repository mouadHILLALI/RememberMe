import { Component,  ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CanvasService } from './canvas-service';

@Component({
  selector: 'app-canvas-home',
  templateUrl: './canvas-home.component.html',
  standalone: true,
  styleUrls: ['./canvas-home.component.css']
})
export class CanvasHomeComponent implements AfterViewInit {

  @ViewChild('canvas-box', { static: false })
  public canvasRef!: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: CanvasService) {
  }
  public ngAfterViewInit(): void {
    this.engServ.createScene(this.canvasRef);
    this.engServ.animate();
  }
}
