import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode:boolean = true;
  title:string = "Iniciar sesión";
  footerText:string = '¿No tiene una cuenta?'
  submitBtn:string = 'Iniciar Sesión'
  footerBtn:string = 'Registrarme'

  usernameInput:string = "";
  passwordInput:string = "";

  users:{username:string, password:string}[] = []

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  changeMode(){
    this.mode = !this.mode;

    if (this.mode == true) {
      //LOGIN MODE
      this.title = "Iniciar sesión";
      this.submitBtn = 'Iniciar Sesión'
      this.footerText = '¿No tiene una cuenta?'
      this.footerBtn = 'Registrarme'
    } else {
      //REGISTER MODE
      this.title = "Registro";
      this.submitBtn = 'Registrarme'
      this.footerText = '¿Ya tiene una cuenta?'
      this.footerBtn = 'Iniciar Sesión'
    }
  }

  onSubmit(){
    let user = {
      username: this.usernameInput,
      password: this.passwordInput
    }
    
    console.log(user);
    
    if (this.mode == true) {
      //LOGIN MODE

      //VALIDATE USERNAME AND PASSWORD
      let userExists = this.users.find(u => u.username == user.username && u.password == user.password);
      console.log(userExists);
      
      if (userExists) {
        //Save the current logged user into the local storage
        localStorage.setItem('currentUser', JSON.stringify(user));

        //LOGIN SUCCESSFUL
        Swal.fire({
          title: `¡Hola de nuevo, ${this.usernameInput}!`,
          text: 'Te has logueado exitosamente.',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(x => {
          this.router.navigate(['/']);
        })
      } else {
        //LOGIN FAILED
        Swal.fire({
          title: `¡Acceso denegado!`,
          text: 'Revise los datos ingresados e intente nuevamente.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }

      //CLEAR INPUTS
      this.usernameInput = "";
      this.passwordInput = "";
    }else {
      //REGISTER MODE
      this.users.push(user);

      let userExists = this.users.find(u => u.username == user.username);
      console.log(userExists);

      
      if (userExists) {
        alert("User already exists");
      }

      localStorage.setItem('users', JSON.stringify(this.users));
    }    
  }
}
