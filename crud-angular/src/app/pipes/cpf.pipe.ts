import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(cpf: string): string {

    let _cpf: string = '';

    const first = cpf.substring(0, 3);
    const second = cpf.substring(3, 6);
    const third = cpf.substring(6, 9);
    const digit = cpf.substring(9,11);

    _cpf = `${first}.${second}.${third}-${digit}`;

    return _cpf;
  }
}
