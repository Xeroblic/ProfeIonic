import { Component, OnInit, ElementRef,ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements AfterViewInit {
  @ViewChild('claudia') claudia!: ElementRef;

  constructor(private router: Router,
              private aniCtrl: AnimationController) { }
  
  ngAfterViewInit(): void {
      const mi_animacion=this.aniCtrl.create()
      .addElement(this.claudia.nativeElement)
      .duration(7000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0) ' },
      ]);
      mi_animacion.play();
  }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },7000);
  }

}
