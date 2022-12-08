import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  locales = [
    "Olá, meu nome é Gabriel Farias e eu sou um desenvolvedor Front-End, Tecnologias que tenho experiência:",
    "Hello there, my name is Gabriel Farias and I am a Front-End developer, Technologies I have experience with:",
    "Hola, mi nombre es Gabriel Farias y soy desarrollador Front-End, Tecnologías que tengo experiencia:"
  ];

  pt = [
    "Português",
    "Portuguese",
    "Portugués"
  ];

  en = [
    "Inglês",
    "English",
    "Inglés"
  ];

  es = [
    "Espanhol",
    "Spanish",
    "Español"
  ]

  i = 0;

  setIndex(n: number) {
    return this.i = n
  }
}
