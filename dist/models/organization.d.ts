import { Organization, WithContext } from 'schema-dts';
import { Base } from './base';
declare type OrganizationType = WithContext<Organization>;
export declare class OrganizationJsonLd extends Base {
    _data: OrganizationType;
    constructor(data: Organization);
}
export {};
