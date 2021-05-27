import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  name = new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]);
  email = new FormControl('', [Validators.email]);
  message = new FormControl('Hola escriba su mensaje', [Validators.minLength(2), Validators.maxLength(30)]);

  constructor() {
  }

  ngOnInit(): void {
  }

}
