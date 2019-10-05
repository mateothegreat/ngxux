export class NgxuxFileUploaderConfig {

    public API_BASE: string;
    public ROUTE?: string;
    public TOKEN?: string;

    public constructor(obj: {

        API_BASE: string,
        ROUTE?: string,
        TOKEN?: string,

    }) {

        this.API_BASE = obj.API_BASE;
        this.ROUTE = obj.ROUTE;
        this.TOKEN = obj.TOKEN;

    }

}
