import {Component, HostListener, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-games',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent implements OnInit  {
  showImage = false;

  ngOnInit() {
    this.checkScroll(); // Проверяем при загрузке
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const target = document.getElementById('target-block');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Показываем картинку, если верх блока виден в пределах окна (например, верх блока ниже 80% высоты окна)
    if (rect.top < windowHeight * 1 && rect.bottom > windowHeight * 0) {
      this.showImage = true;
    } else {
      this.showImage = false;
    }
  }
}
