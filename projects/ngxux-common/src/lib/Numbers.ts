// @dynamic
export class Numbers {

    public static getNumber(target: any): number {

        const parsed = parseInt(target);

        if (Number.isNaN(parsed)) {

            return 0;

        } else {

            return parsed;

        }

    }

    public static numberWithCommas(x): string {

        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    }

}
