import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myFormModel: FormGroup;

  countryCtrl: FormControl;
  phoneCtrl: FormControl;

  constructor(fb: FormBuilder){
    this.myFormModel = fb.group({
      country: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    this.countryCtrl = this.myFormModel.get('country') as FormControl;
    this.phoneCtrl = this.myFormModel.get('phone') as FormControl;

    this.countryCtrl.valueChanges.subscribe(country => {
      if ('USA' === country) {
        this.phoneCtrl.setValidators([Validators.minLength(10)]);
      }else {
        this.phoneCtrl.setValidators([Validators.minLength(11)]);
      }
      this.phoneCtrl.updateValueAndValidity();
    })
  };
}
