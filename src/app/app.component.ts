import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrap';
  uname = 'Anjali';
  uage = 10;
  // student = [
  //   { id: 101, name: 'John Doe', loc:'Ald' ,laptop:'Asus'},
  //   { id: 102, name: 'Jane Smith',loc:'Ald', laptop:'HP'},
  //   { id: 203, name: 'Anjali', loc:'Ptn' ,laptop:'Lenovo'},
  //   { id: 426, name: 'jyoti',loc:'Ddn', laptop:'Dell'},
  //   { id: 234, name: 'vaishu', loc:'Knp' ,laptop:'Acer'},
  //   { id: 145, name: 'Ashish',loc:'Ramnp', laptop:'HP'},

  // ]

  // anjali(laptop:any){
  //   switch(laptop){
  //     case 'Hp': return "orange";
  //     case 'Lenovo': return "yellow";
  //     case 'Asus': return "green";
  //     case 'Dell': return "blue";
  //     case 'Acer': return "pink";
      
  //   }
  //   return null;
  // }
}
