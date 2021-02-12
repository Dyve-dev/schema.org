import { Organization, WithContext } from 'schema-dts';
import { Base } from './base';

type OrganizationType = WithContext<Organization>;
const OrganizationEntity: OrganizationType = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
};

export class OrganizationJsonLd extends Base {
  _data: OrganizationType = {
    //@ts-ignore
    ...OrganizationEntity,
  };
  constructor(data: Organization) {
    super();
    this._data = {
      //@ts-ignore
      ...this._data,
      ...data,
    };
  }
}
