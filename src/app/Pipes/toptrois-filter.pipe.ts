import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toptroisFilter',
  standalone: true
})
export class ToptroisFilterPipe implements PipeTransform {

  transform(items:any[], top:boolean): any[] {
    let resultArray = [] ;
    for (let item of items) {
      if (item.top) {
        resultArray.push(item)
      }
    }
    return resultArray
  }

}
