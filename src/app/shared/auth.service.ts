import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

    login(email : string, password : string) {
      this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
          localStorage.setItem('token','true');
          this.router.navigate(['home']);
      }, err => {
          alert('Algo deu errado');
          this.router.navigate(['/login']);
      })
    }

    cadastro(email : string, password : string){
      this.fireauth.createUserWithEmailAndPassword(email,password).then(() => {
        alert('Conta Criada com Sucesso');
          this.router.navigate(['/login']);
      }, err =>{
        alert('Algo deu errado');
        this.router.navigate(['/cadastro']);
      } )
    }
}
