import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export class Animations {
  static neonGlow = trigger('neonGlow', [
    state('void', style({ opacity: 0 })), // Initial state
    transition(':enter', [
      animate('2s ease-in-out', keyframes([
        style({ 
          opacity: 0, 
          textShadow: '0 0 5px rgba(255, 0, 0, 0.8)', 
          offset: 0 
        }),
        style({
          opacity: 1,
          textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6)',
          offset: 0.5 
        }),
        style({
          opacity: 1,
          textShadow: '0 0 15px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6), 0 0 45px rgba(255, 0, 0, 0.4)',
          offset: 1
        })
      ]))
    ]),
    transition(':leave', [
      animate('1s ease-out', keyframes([
        style({
          opacity: 1,
          textShadow: '0 0 20px rgba(255, 0, 0, 0.8)',
          offset: 0
        }),
        style({
          opacity: 0,
          textShadow: '0 0 5px rgba(255, 0, 0, 0.6)',
          offset: 1
        })
      ]))
    ])
  ]);

  static changeColor = trigger('colorChange', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('500ms', style({ opacity: 0 }))
    ]),
    transition('* => *', [
      animate(
        '2s infinite',
        keyframes([
          style({ color: 'red', offset: 0 }),
          style({ color: 'green', offset: 0.33 }),
          style({ color: 'blue', offset: 0.66 }),
          style({ color: 'orange', offset: 1 })
        ])
      )
    ])
  ]);
}
