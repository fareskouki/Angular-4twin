import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,OnChanges{
klass="4twin6 Esprit";
kolor='red'

sayHello(){
  alert('bonjour 4twin')
}
changeColor(){
  this.kolor='green'
}
changeColor2(newColor:any){
  this.kolor='green'
}
constructor(){
  console.log('cons')

}  
ngOnInit(): void {
  console.log('ngOnit')
}
ngOnChanges(changes: SimpleChanges): void {
 console.log(changes)   
}
}
