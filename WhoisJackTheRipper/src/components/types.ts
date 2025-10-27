export interface Clue{
    id: string;
    name: string;
    description: string;
}

export interface Location{
    id: string;
    name: string;
    description: string;
    clues: Clue[];
}

export interface PlayerState{
    currentLocation: Location;
    inventory: Clue[];
}