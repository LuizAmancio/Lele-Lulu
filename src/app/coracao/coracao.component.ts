import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-coracao',
  templateUrl: './coracao.component.html',
  styleUrls: ['./coracao.component.css']
})
export class CoracaoComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) { // quantidade de corações
      this.addHeart();
    }
  }

  addHeart() {
    const heart = this.renderer.createElement('div');
    this.renderer.addClass(heart, 'heart');

    // posição e delay randômico
    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 5; // entre 8 e 13s
    const delay = Math.random() * 5;

    this.renderer.setStyle(heart, 'left', `${left}vw`);
    this.renderer.setStyle(heart, 'animation-duration', `${duration}s`);
    this.renderer.setStyle(heart, 'animation-delay', `${delay}s`);

    this.renderer.appendChild(this.el.nativeElement, heart);
  }
}
