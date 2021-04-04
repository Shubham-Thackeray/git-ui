import { Component, Input, OnInit } from '@angular/core';
import { faStar,  } from '@fortawesome/free-solid-svg-icons';

interface cards {
  username: string;
  name: string;
  description?: string;
  language?: string;
  stargazers_count: number;
  forks: number;
  fork?: boolean;
}
@Component({
  selector: 'app-git-cards',
  templateUrl: './git-cards.component.html',
  styleUrls: ['./git-cards.component.scss']
})
export class GitCardsComponent implements OnInit {
  fastar = faStar;
  @Input() cardData:cards;
  constructor() { }

  ngOnInit() {
  }

  kFormatter(num: number): string {
    if (Math.abs(num) < 999) return String(num);
    const value = Math.sign(num) * Number(Math.abs(num) / 1000);

    return `${value.toFixed(1)}k`;
  }
}
