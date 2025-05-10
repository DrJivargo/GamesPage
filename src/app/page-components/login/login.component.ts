import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  isVisible = false;

  ngOnInit() {
    setTimeout(() => this.isVisible = true, 0);
  }

  public myForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  })
  public handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert('Форма не валидна')
    }
    console.log(this.myForm.get(['login'])?.value)
  }
  @Output() closed = new EventEmitter<void>();
  @Output() registered = new EventEmitter<{email: string, password: string}>();

  close() {
    this.isVisible = false;
    setTimeout(() => this.closed.emit(), 1000);
  }
}
