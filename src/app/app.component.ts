import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('swiper', { static: false }) swiperRef!: ElementRef;

  showContent = false;
  mostrarCarta = false;
  animandoFechar = false;
  mostrarDicas = false;

  heroTexts = [
    'Ele guarda o que não se vê. Tem braços que levantam em silêncio, e uma boca que só abre pra quem crê.',
    'Entre sonhos e segredos fico escondido, onde o peso descansa e a dúvida cede.',
    'Não é cofre, não é armário… Mas se o céu da noite sobe, o tesouro aparece'

  ];

  dicas = [
    '🔑 Dica 1: Não está em um lugar que se vê de primeira.',
    '🔑 Dica 2: Para encontrar, é preciso levantar o que parece pesado.',
    '🔑 Dica 3: Você descansa nele todas as noites.'
  ];

  textos = [''];

  abrirCarta() {
    this.mostrarCarta = true;
    this.animandoFechar = false;
    this.textos = this.heroTexts;
    this.mostrarDicas = false;
  }

  fecharCarta() {
    this.animandoFechar = true;

  setTimeout(() => {
    this.mostrarCarta = false;
    this.animandoFechar = false;
  }, 600); 
  }

  abrirDicas() {
    this.mostrarDicas = true;
  this.textos = this.dicas;
  setTimeout(() => {
    this.swiperRef?.nativeElement?.swiper?.update();
    this.swiperRef?.nativeElement?.swiper?.slideTo(0); // volta para o primeiro slide
  });
}
}
