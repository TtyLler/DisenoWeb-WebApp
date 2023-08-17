import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComestible'
})
export class FilterComestiblePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value
    const resultadoPost = []
    for(const post of value){
      if(post.NombreComestible.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPost.push(post)
      }
    }
    return resultadoPost
  }
}
