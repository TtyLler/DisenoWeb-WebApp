import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEspecialidad'
})
export class FilterEspecialidadPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length <= 3) return value
    const resultadoPost = []
    for(const post of value){
      if(post.NombreEspecial.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPost.push(post)
      }
    }
    return resultadoPost
  }

}
