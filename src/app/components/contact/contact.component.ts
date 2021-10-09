import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  //FormData: FormGroup;

  constructor() { }
  
  // ngOnInit(): void {
  //   this.FormData = this.builder.group({
  //     Fullname: new FormControl('', [Validators.required]),
  //     //Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
  //     Comment: new FormControl('', [Validators.required])
  // }

}
