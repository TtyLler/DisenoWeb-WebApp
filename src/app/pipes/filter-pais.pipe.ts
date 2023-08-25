import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPais'
})
export class FilterPaisPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value
    const resultadoPost = []
    for(const post of value){
      if(post.NombrePais.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPost.push(post)
      }
    }
    return resultadoPost
  }

}
