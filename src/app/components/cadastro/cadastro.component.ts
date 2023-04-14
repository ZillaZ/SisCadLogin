import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

email : string = '';
password : string = '';

constructor(private auth : AuthService){}

ngOnInit(): void {

}

cadastro(){

    if(this.email == ''){
      alert('Por Favor Digite um email');
      return;
  }
    if(this.password == ''){
    alert('Por Favor Digite uma senha');
    return;
  }
    this.auth.cadastro(this.email,this.password);
    this.email = '';
    this.password = '';
 }
} 