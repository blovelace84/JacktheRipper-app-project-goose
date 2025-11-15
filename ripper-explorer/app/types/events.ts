export interface RipperEvent{
    id: number;
    title: string;
    date: string;
    location: string;
    coords: {
        lat: number;
        lng: number;
    };
    summary: string;
}