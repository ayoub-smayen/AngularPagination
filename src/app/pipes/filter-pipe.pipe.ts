import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(list: any[], value: string) {
    
    if(list.find){
      return value ? list.filter(item => item.subject === value) : list;

    }
    else {
      return list;
    }
  }

}
