import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDesechable'
})
export class FilterDesechablePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value
    const resultadoPost = []
    for(const post of value){
      if(post.NombreDesechable.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPost.push(post)
      }
    }
    return resultadoPost
  }

}

