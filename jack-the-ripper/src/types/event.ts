export interface Event{
    id: string;
    title: string;
    date: string;
    description: string;
    location: { lat: number; lng: number };
}