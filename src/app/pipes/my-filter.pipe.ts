import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items ) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return filter ? items.filter(item => item.title === filter) : items;
}

}
