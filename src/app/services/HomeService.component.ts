import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {
    private soundtrack: HTMLAudioElement | null = null; 

    constructor() {
        if (typeof window !== 'undefined') {
            this.soundtrack = new Audio('../../assets/audio/super-mario-soundtrack.mp3');
            this.soundtrack.loop = true;
            this.soundtrack.volume = 0.5;
            this.soundtrack.load(); 
        }
    }

    playMusic(mute: boolean): void {
        if (this.soundtrack) {
            if (mute) {
                this.soundtrack.pause();
            } else {
                this.soundtrack.play().catch((error) => {
                    console.error("Error playing audio:", error);
                });
            }
        }
    }
}
