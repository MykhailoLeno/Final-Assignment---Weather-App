export interface Coord {
    lon: number,
    lat: number,
}

export interface WeatherData {
    temperature: number,
    description: string,
    wind: number,
    city: string,
    coord: Coord,
}