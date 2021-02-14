import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const firstEl = args[0];
    for (let i = 0; i < firstEl; i++){
      value += '.';
    }
    return value;
  }

}
