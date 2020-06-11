import {AbstractControl, ValidatorFn} from '@angular/forms';
import * as Filter from 'bad-words'

export function isNotProfane(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
	const filterInstance = new Filter();

	return filterInstance.isProfane(control.value) ? {profane: {value: ''}} : null;
  };
}
