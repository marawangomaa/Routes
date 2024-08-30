import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { Star2Component } from "../star2/star2.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent, Star2Component],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  flag:boolean = true;
  srcImg:string='';
  imgs:string[]=[
    '../../assets/imgs/port1.png',
    '../../assets/imgs/port2.png',
    '../../assets/imgs/port3.png',
    '../../assets/imgs/port1.png',
    '../../assets/imgs/port2.png',
    '../../assets/imgs/port3.png'
  ];
  hideimg(element: EventTarget|null, img: HTMLImageElement): void{
    if(element == img)return;
    this.flag =true;
  }
}
