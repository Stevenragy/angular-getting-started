import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.css',
  imports: [FontAwesomeModule],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth = 90;
  faStar = faStar;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    this.cropWidth = this.rating * (90 / 5);
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} has been clicked`);
  }
}
