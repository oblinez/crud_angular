import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {

    const ddi = phone.substring(0,2)
    const ddd = phone.substring(2,4)
    const midNumber = phone.substring(4,9)
    const finalNumber = phone.substring(9,14)

    return `+${ddi} (${ddd}) ${midNumber}-${finalNumber}`
  }
}
