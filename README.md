# Lulu & Lele — One Page (Angular 15)

Este projeto é uma base pronta para um site *one page* romântico ❤️ com:
- Carrossel de fotos (Swiper)
- Título com nomes e um texto
- Cronômetro responsivo (anos, meses, dias, horas, minutos, segundos) desde o início do namoro

## Como usar (Angular 15)

1) **Crie um projeto Angular 15 vazio** (se quiser fixar a versão 15):
```bash
npx @angular/cli@15 new love-site --routing=false --style=css
cd love-site
```

2) **Instale o Swiper (carrossel)**:
```bash
npm i swiper
```

3) **Copie o conteúdo desta pasta `src`** para dentro do seu projeto, substituindo a `src` padrão.

4) **Rode o projeto**:
```bash
npm start
# ou
ng serve -o
```

### Coloque suas fotos
Adicione suas fotos em `src/assets/photos/` e ajuste a lista no `carousel.component.ts` (propriedade `photos`).

### Ajuste a data do namoro
Edite `counter.component.ts` e altere `startDate = new Date('2024-09-12T00:00:00')` para a data de vocês.

---

## Estrutura
- `app.component.html`: monta a One Page (carrossel, título/texto, contador).
- `carousel.component.*`: carrossel com Swiper, responsivo e com paginação.
- `counter.component.*`: contador preciso por calendário (anos/meses reais), atualiza a cada segundo.
- `styles.css`: estilos globais (fonte, cores, responsividade).
