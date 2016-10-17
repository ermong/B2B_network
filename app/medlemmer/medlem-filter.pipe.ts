import {Pipe, PipeTransform} from 'angular2/core';
import {IMedlem} from './medlem';

@Pipe({
    name: 'medlemsFilter'
})
export class MedlemFilterPipe implements PipeTransform{
    transform(value: IMedlem[], args: string[]): IMedlem[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((medlem: IMedlem) =>
        medlem.navn.toLocaleLowerCase().indexOf(filter) != -1): value;
    }
}