import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rForm: FormGroup;
  post: any;    // A property for our submitted form
  description: string = '';
  // name: string = '';

  name ='Christa';

  updateName() {
    this.name = 'Stephens'
  }
}
