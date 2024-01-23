import { Pipe, PipeTransform } from '@angular/core';
import { WaterType } from '../models/models';

@Pipe({
  name: 'waterType',
  standalone: true
})
export class WaterTypePipe implements PipeTransform {
  transform(value: WaterType): string {
    switch (value) {
      case WaterType.Sweet:
        return 'Sweet'
      case WaterType.Salt:
        return 'Salt'
      case WaterType.Both:
        return 'Sweet and Salt'
      default:
        return 'Unknown'
    }
  }
}