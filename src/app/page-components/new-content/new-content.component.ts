import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-new-content',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './new-content.component.html',
  styleUrl: './new-content.component.scss'
})
export class NewContentComponent {
  publishDate1 = new Date('2023-04-15');
  publishDate2 = new Date('2023-05-05');
  publishDate3 = new Date('2023-04-26');
}
