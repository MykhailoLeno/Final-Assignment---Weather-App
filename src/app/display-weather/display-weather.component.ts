import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-weather.component.html',
  styleUrl: './display-weather.component.scss'
})
export class DisplayWeatherComponent implements OnInit {

  @Input() data: any

  constructor() {}

  ngOnInit(): void {
    
  }
}
