import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.css'],
})
export class SecondaryCardComponent {
  @Input()
  photoCover = ''
  @Input()
  cardTitle = ''
  @Input()
  cardDate = ''
  @Input()
  id = '0'
}
