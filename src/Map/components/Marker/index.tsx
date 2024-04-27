
import { Marker } from 'react-map-gl/maplibre';
import type { LngLat } from 'react-map-gl';
import Pin from './Pin';
import React from 'react';

const MarkerCustom = () => {
    
  const [marker, setMarker] = React.useState({
    latitude: -12.056682,
    longitude: -77.117197
  });

  const [events, logEvents] = React.useState<Record<string, LngLat>>({});

  const onMarkerDragStart = React.useCallback((event : any) => {
    logEvents((_events : any) => ({..._events, onDragStart: event.lngLat}));
  }, []);

  const onMarkerDrag = React.useCallback((event : any) => {
    logEvents((_events : any ) => ({..._events, onDrag: event.lngLat}));

    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat
    });
  }, []);

  console.log(events)

  const onMarkerDragEnd = React.useCallback((event : any) => {
    logEvents((_events : any ) => ({..._events, onDragEnd: event.lngLat}));
  }, []);

    return (
        <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            draggable
            onDragStart={onMarkerDragStart}
            onDrag={onMarkerDrag}
            onDragEnd={onMarkerDragEnd}
          >
            <Pin size={20} />
          </Marker>
    );
}
export default MarkerCustom;