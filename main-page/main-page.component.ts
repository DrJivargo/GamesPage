import {Component, ElementRef, ViewChild} from '@angular/core';
import {GamesComponent} from "../app/page-components/games/games.component";
import {HeaderComponent} from "../app/page-components/header/header.component";
import {NavigationComponent} from "../app/page-components/navigation/navigation.component";
import {NewContentComponent} from "../app/page-components/new-content/new-content.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {SvgIconComponent} from "../helpers/svg-icon.component";

interface Card {
  id: number;
  image: string;
  backgroundImage: string;
  link: string;
  buttonText: string;
}

@Component({
  selector: 'app-main-page',
  imports: [
    GamesComponent,
    HeaderComponent,
    NavigationComponent,
    NewContentComponent,
    NgForOf,
    NgIf,
    SvgIconComponent,
    NgStyle
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  cards: Card[] = [
    {
      id: 1,
      image: 'https://picsum.photos/id/1011/300/200',
      backgroundImage: 'https://picsum.photos/id/1005/600/400',
      link: 'https://example.com/1',
      buttonText: 'Sign-up'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/1012/300/200',
      backgroundImage: 'https://picsum.photos/id/1011/600/400',
      link: 'https://example.com/2',
      buttonText: 'Sign-up'
    },
    {
      id: 3,
      backgroundImage: 'https://picsum.photos/id/1016/600/400',
      image: 'https://picsum.photos/id/1012/300/200',
      link: 'https://example.com/3',
      buttonText: 'Sign-up'
    },
    {
      id: 4,
      backgroundImage: 'https://picsum.photos/id/1020/600/400',
      image: 'https://picsum.photos/id/1012/300/200',
      link: 'https://example.com/4',
      buttonText: 'Sign-up'
    },
    {
      id: 5,
      backgroundImage: 'https://picsum.photos/id/1024/600/400',
      image: 'https://picsum.photos/id/1012/300/200',
      link: 'https://example.com/5',
      buttonText: 'Sign-up'
    }
  ];

  currentIndex = 0;
  cardWidth = 1420; // ширина карточки + margin (подкорректируй под CSS)


  scrollToIndex(index: number) {
    if (!this.carousel) return;
    const scrollPosition = index * this.cardWidth ;
    this.carousel.nativeElement.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    this.currentIndex = index;
  }

  swipeLeft() {
    if (this.currentIndex < this.cards.length - 1) {
      this.scrollToIndex(this.currentIndex + 1);
    }
  }

  swipeRight() {
    if (this.currentIndex > 0) {
      this.scrollToIndex(this.currentIndex - 1);
    }
  }
}
