import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string='';
  password:string='';

  constructor(private router:Router,
              private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  async irMenu(){
    if (this.usuario=="admin" && this.password=="1234") {
        this.router.navigate(['/menu']);
    }else{
      let t=this.toastCtrl.create({
        message:"usuario o password incorrecto",
        duration:3000,
        position:'bottom'
      });
      (await t).present();
    }
    
  }

}
