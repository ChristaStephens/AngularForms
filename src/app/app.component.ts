import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Form';
  rForm: FormGroup;
  post: any;    // A property for our submitted form
  description: string = '';
  name: string = '';

  // name ='Christa';

  // updateName() {
  //   this.name = 'Stephens'
  // }

  //specify form validation. 'r' is related it reactive forms
  constructor (private fb: FormBuilder) {
    this.rForm =fb.group({
      //has two values 'form value and validation'
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });
   }

   //handling the submitted form - add post
   addPost(post) {
     this.description = post.description;
     this.name = post.name;
   }
}
