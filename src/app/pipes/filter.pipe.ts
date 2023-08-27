import { Pipe, PipeTransform } from '@angular/core';
import { FilterBy } from '../models/filterBy';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform<T>(values: T[], trigger: boolean, ...args: FilterBy[]): T[] {
    let newValues = values
    args.forEach(arg => {
      if(arg.value == "") return
      newValues = newValues.filter(val => {
        let value: any = val

        arg.key.forEach(k => {
          value = value[k as keyof typeof value]
        });
        return value == arg.value
      })
    });
    return newValues;
  }

}
