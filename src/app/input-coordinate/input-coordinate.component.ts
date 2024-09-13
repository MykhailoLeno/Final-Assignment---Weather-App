import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { WeatherService } from '../shared/weather.service';
import { WeatherData } from '../shared/interfaces';

@Component({
  selector: 'app-input-coordinate',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-coordinate.component.html',
  styleUrl: './input-coordinate.component.scss'
})
export class InputCoordinateComponent implements OnInit{

  @Output() weatherDataChanged = new EventEmitter<WeatherData>()

  data: any = {}
  coGiven: string = ''

  form!: FormGroup
  submitted: boolean = false

  constructor (
    private weatherServ: WeatherService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      latitude: [null, [Validators.required, Validators.min(-90), Validators.max(90)]],
      longitude: [null, [Validators.required, Validators.min(-180), Validators.max(180)]],
    })
  }

  private dmsToDecimal(degrees: number, minutes: number, seconds: number): number {
    return degrees + (minutes / 60) + (seconds / 3600);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const order = {
      latitude: this.form.value.latitude,
      longitude: this.form.value.longitude,
    }

    this.weatherServ.getData(order.latitude, order.longitude).subscribe(res => {
      this.data = res;
      this.weatherDataChanged.emit(this.data);
      console.log(res);
      this.form.reset();
      this.coGiven = "Coordinates are given";
      setTimeout(() => {
        this.coGiven = '';
      }, 4000);
      this.submitted = false;
    })
  }
}
