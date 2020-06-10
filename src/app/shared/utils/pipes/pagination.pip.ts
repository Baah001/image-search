import {Pipe, PipeTransform} from '@angular/core';
import {PaginatePipe} from 'ngx-pagination';

@Pipe({
  name: 'PaginationPipe',
})
export class PaginationPipe extends PaginatePipe implements PipeTransform {
}
