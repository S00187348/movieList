
import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result=0;
  constructor(){

  }
AddNumbers(x:HTMLInputElement, y:HTMLInputElement):boolean{
let myresult = parseInt(x.value)+parseInt(y.value);
this.result= myresult;
return false;
}


}
