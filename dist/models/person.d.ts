import { Person, WithContext } from 'schema-dts';
import { Base } from './base';
declare type PersonType = WithContext<Person>;
export declare class PersonJsonLd extends Base {
    _data: PersonType;
    constructor(data: Person);
}
export {};
