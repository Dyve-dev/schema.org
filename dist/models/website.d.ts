import { WebSite, WithContext } from 'schema-dts';
import { Base } from './base';
export declare class WebSiteJsonLd extends Base {
    _data: WithContext<WebSite>;
    constructor(data?: WebSite);
}
