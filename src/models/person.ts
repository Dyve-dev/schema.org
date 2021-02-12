import { Person, WithContext } from 'schema-dts';
import { Base } from './base';

type PersonType = WithContext<Person>;
const OrganizationEntity: PersonType = {
  '@context': 'https://schema.org',
  '@type': 'Person',
};

export class PersonJsonLd extends Base {
  _data: PersonType = {
    //@ts-ignore
    ...OrganizationEntity,
  };
  constructor(data: Person) {
    super();
    this._data = {
      //@ts-ignore
      ...this._data,
      ...data,
    };
  }
}
