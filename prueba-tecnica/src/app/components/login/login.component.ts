import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginUsuario: FormGroup;
loading: boolean =false;

constructor(
  private fb: FormBuilder,
  private afAuth: AngularFireAuth,
  private router: Router,
  private toastr: ToastrService
  ) {
    this.loginUsuario=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

ngOnInit(): void {
  
}
login(){
  const email=this.loginUsuario.value.email;
  const password=this.loginUsuario.value.password;

  this.loading=true;
  this.afAuth.signInWithEmailAndPassword(email,password).then((user)=>{
    console.log(user);
    this.loading=false;
    this.toastr.success('Datos ingresados correctamente','Bienvenido'); 
    this.router.navigate(['/main']);

  }).catch((error)=>{
    console.log(error);
    this.loading=false;
    this.toastr.error(this.firebaseError(error.code),'Error');
  })
}

firebaseError(code: string){
  switch(code){
    case 'auth/invalid-email':
    return 'Email no registrado';
    case 'auth/internal-error':
    return 'Datos erroneos';
    default:
      return 'Error desconocido';
  }
}
}
