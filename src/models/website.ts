import { WebSite, WithContext } from 'schema-dts';
import { Base } from './base';

const WebSiteEntity: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
};

export class WebSiteJsonLd extends Base {
  _data: WithContext<WebSite> = {
    ...WebSiteEntity,
  };
  constructor(data?: WebSite) {
    super();
    this._data = {
      ...this._data,
      ...data,
    };
  }
}
