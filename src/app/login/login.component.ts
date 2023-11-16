import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;
// submit(){
// console.log("user name is " + this.username)
// this.clear();
// }
// clear(){
// this.username ="";
// this.password = "";
// this.show = true;}
// click(){
//   console.log("its me",this.username,this.password);
// }

login(): void {
  // console.log('Username:', this.username);
  // console.log('Password:', this.password);

  alert('clicled');

  // You can add your authentication logic here
}
handleClick(): void {
  alert('Paragraph clicked!');
  // Add your custom logic here
}
 }
