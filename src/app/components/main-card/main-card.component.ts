import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
})
export class MainCardComponent {
  @Input()
  photoCover = ''
  @Input()
  cardTitle = ''
  @Input()
  cardDescription = ''
  @Input()
  cardDate = ''
  @Input()
  id = '0'
}
