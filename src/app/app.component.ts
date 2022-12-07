import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dummyGame';
  oddNumbers: number[]=[];
  evenNumbers: number[]=[];
  
onCounting(firedNumber: number){
if (firedNumber%2===0){
  this.evenNumbers.push(firedNumber);

}else{
  this.oddNumbers.push(firedNumber);
}
}
}
