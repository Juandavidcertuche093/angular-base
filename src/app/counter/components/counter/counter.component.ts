import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public title: string = 'Hola Counter';
  public counter: number = 10;

  increaseBy(value: number):void {
    this.counter +=value;
  }

  ResetCounter(){
    this.counter = 10
  }

}
