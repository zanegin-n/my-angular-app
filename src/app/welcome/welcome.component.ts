import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="text-align: center; margin-top: 50px;">
      <h1>Добро пожаловать в приложение!</h1>
      <p>Это первая страница с приветствием.</p>
      <a routerLink="/menu">Перейти к меню</a>
    </div>
  `,
})
export class WelcomeComponent {}