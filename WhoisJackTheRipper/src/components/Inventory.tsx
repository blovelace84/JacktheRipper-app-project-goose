import { Clue } from "./types";

interface Props {
  items: Clue[];
}

export default function Inventory({ items }: Props) {
  if (items.length === 0) return <p>Your Inventory is empty.</p>;

  return (
    <div>
      <h3>Inventory:</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
