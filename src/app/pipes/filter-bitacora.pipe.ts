import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBitacora'
})
export class FilterBitacoraPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value
    const resultadoPost = []
    for(const post of value){
      if(post.Usuario.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPost.push(post)
      }
    }
    return resultadoPost
  }
}
