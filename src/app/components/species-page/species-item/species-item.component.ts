import { Component, Input } from '@angular/core';
import { FishSpecies } from '../../../models/models';
import { CommonModule } from '@angular/common';
import { WaterTypePipe } from '../../../pipes/water-type.pipe';

@Component({
  selector: 'app-species-item',
  standalone: true,
  imports: [
    CommonModule,
    WaterTypePipe
  ],
  templateUrl: './species-item.component.html',
  styleUrl: './species-item.component.scss'
})
export class SpeciesItemComponent {

  @Input() species!: FishSpecies

  constructor() { }

}
