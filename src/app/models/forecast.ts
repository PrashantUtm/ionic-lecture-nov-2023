import { ForecastTypes } from "../enums/forecast-types";

export interface Forecast {
    type: ForecastTypes;
    readonly date: Date;
    region: string;
    rainfall?: number;
}
