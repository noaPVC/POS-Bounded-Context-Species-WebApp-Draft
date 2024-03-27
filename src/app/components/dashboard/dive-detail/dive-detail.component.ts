import { Component, Input } from '@angular/core';
import { Dive } from '../../../models/dive';

@Component({
  selector: 'app-dive-detail',
  standalone: true,
  imports: [],
  templateUrl: './dive-detail.component.html',
  styleUrl: './dive-detail.component.scss',
})
export class DiveDetailComponent {
  @Input() dive: Dive | null = null;
}
