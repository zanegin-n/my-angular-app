import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface MenuItem {
  name: string;
  value: number;
  checked: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { name: 'Item 1', value: 20, checked: false },
    { name: 'Item 2', value: 30, checked: false },
    { name: 'Item 3', value: 40, checked: true },
    { name: 'Item 4', value: 50, checked: false },
  ];

  get selectedCount(): number {
    return this.menuItems.filter(item => item.checked).length;
  }

  get totalValue(): number {
    return this.menuItems
      .filter(item => item.checked)
      .reduce((sum, item) => sum + item.value, 0);
  }

  get selectedTypes(): string {
    const types = this.menuItems
      .filter(item => item.checked)
      .map(item => item.name);
    return types.length ? types.join(', ') : 'ничего не выбрано';
  }
}