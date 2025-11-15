import MapView, { Marker } from "react-native-maps";
import { events } from "../data/event";

export default function MapScreen() {
  return (
    <MapView
      className="flex-1"
      initialRegion={{
        latitude: 51.518,
        longitude: -0.07,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    >
      {events.map((ev) => (
        <Marker
          key={ev.id}
          coordinate={{ latitude: ev.coords.lat, longitude: ev.coords.lng }}
          title={ev.title}
          description={ev.date}
        />
      ))}
    </MapView>
  );
}
