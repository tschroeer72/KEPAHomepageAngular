import { Component, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // nameFormControl = new FormControl('', [Validators.required]);
  // nachrichtFormControl = new FormControl('', [Validators.required]);

  // matcher = new MyErrorStateMatcher();

  @ViewChild(NgForm) private ngForm!: NgForm;
  private form!: FormGroup;

  sendEmail(value: any){
    console.log(value);
  }

  getMailBody(value: any) : string{
    //const txtBody = 'Name = ' + value.Name + "\n\rTelefon = " + value.Telefon + "\n\rEmail = " + value.Email + '\n\rNachricht:\n\r\n\r' + value.Nachricht;
    const txtBody = `Name = ${value.Name}
                     Telefon = ${value.Telefon} 
                     Email = ${value.Email} 
                     Nachricht:
                     ${value.Nachricht}`;
    console.log("txtBody = " + txtBody);
    
    return txtBody;
  }
}
