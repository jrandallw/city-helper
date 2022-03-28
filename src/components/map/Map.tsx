import { useState, useMemo, useCallback, useRef } from 'react';

import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from '@react-google-maps/api';
import { useLoadScript } from '@react-google-maps/api';

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

import { Heading } from 'elements/heading/Heading';

import s from './Map.module.scss';

export const Map = () => {
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 40.7589545, lng: -73.9893574 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      mapId: 'ce67ff007f2686a',
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={s.map}>
      <div className={s.map__controls}>
        <Heading tag="h1">Controls</Heading>
      </div>
      <div className={s.map__map}>
        <GoogleMap
          zoom={10}
          center={center}
          options={options}
          onLoad={onLoad}
          mapContainerClassName={s.map__container}
        />
      </div>
    </div>
  );
};
