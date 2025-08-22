import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CounterComponent } from './components/counter/counter.component';

// Swiper Angular
import { register } from 'swiper/element/bundle';

register(); // registra web components do Swiper (modo element)

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CounterComponent
  ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
