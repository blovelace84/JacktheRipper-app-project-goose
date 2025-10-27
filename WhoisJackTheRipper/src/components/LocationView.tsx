import { Location } from "./types";

interface Props {
  location: Location;
}

export default function LocationView({ location }: Props) {
  return (
    <div>
      <h2>{location.name}</h2>
      <p>{location.description}</p>
      {location.clues.length > 0 && (
        <>
          <h3>Clues Here:</h3>
          <ul>
            {location.clues.map((clue) => (
              <li key={clue.id}>{clue.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
