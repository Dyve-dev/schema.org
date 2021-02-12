export declare const JSONLD_OPEN_TAG = "<script type=\"application/ld+json\">";
export declare const JSONLD_CLOSE_TAG = "</script>";
export declare class Base {
    _data: any;
    render: (minifiy?: boolean) => string;
    json: (minifiy?: boolean) => string;
    get data(): any;
    get withContext(): any;
}
