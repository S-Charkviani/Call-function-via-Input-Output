import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controler',
  templateUrl: './game-controler.component.html',
  styleUrls: ['./game-controler.component.css']
})
export class GameControlerComponent {
  
 @Output() intervalFired=new EventEmitter<number>();
  interval:any;
  count=0;

 
  counting(){ 
    this.interval=setInterval(()=>{
      this.intervalFired.emit(this.count+1);
        this.count++;
    },1000)
  }
  
  pause(){
    clearInterval(this.interval);
  }
 
}
