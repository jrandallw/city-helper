import { useState, useMemo, useCallback, useRef, useEffect } from 'react';

import { Location } from '@prisma/client';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useLoadScript } from '@react-google-maps/api';
import useSWR from 'swr';

import { Search } from 'components/search/Search';
import { ACTIONS } from 'contexts/locations/actions';
import { useLocationsStore } from 'contexts/locations/LocationsContext';
import { Heading } from 'elements/heading/Heading';

import s from './Map.module.scss';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export const Map = () => {
  const { state, dispatch } = useLocationsStore();
  const { data, error } = useSWR('/api/locations');

  const mapRef = useRef<GoogleMap>();

  const options = useMemo<MapOptions>(
    () => ({
      mapId: 'ce67ff007f2686a',
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  useEffect(() => {
    mapRef.current?.panTo(state.center);
  }, [state.center]);

  if (error) return <div>Error!</div>;

  return (
    <div className={s.map}>
      <GoogleMap
        zoom={10}
        center={state.center}
        options={options}
        onLoad={onLoad}
        mapContainerClassName={s.map__container}
      >
        {data && data.locations
          ? data.locations?.map((marker: Location) => (
              <Marker
                key={`${marker.latitude}-${marker.longitude}`}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                onClick={() => {
                  console.log(marker);
                  dispatch({
                    type: ACTIONS.SET_SELECTED,
                    payload: marker,
                  });
                }}
                // icon={{
                //   url: `/bear.svg`,
                //   origin: new window.google.maps.Point(0, 0),
                //   anchor: new window.google.maps.Point(15, 15),
                //   scaledSize: new window.google.maps.Size(30, 30),
                // }}
              />
            ))
          : null}

        {state.selected ? (
          <InfoWindow
            position={{
              lat: state.selected.latitude,
              lng: state.selected.longitude,
            }}
            onCloseClick={() => {
              dispatch({
                type: ACTIONS.SET_SELECTED,
                payload: null,
              });
            }}
          >
            <div>
              <h2>{state.selected.name}</h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};
