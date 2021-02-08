import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe2'
})
export class CustomPipe2Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const firstArg = args[0];
    value = value.toUpperCase().split('');
    for (let i = 0; i < value.length - 1; i ++){
      value[i] += '+';
    }
    for (let i = 0; i <= firstArg; i++){
      value += '$';
    }

    return value;
  }

}
