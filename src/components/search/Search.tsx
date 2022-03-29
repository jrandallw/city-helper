import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import '@reach/combobox/styles.css';

import { ACTIONS } from 'contexts/locations/actions';
import { useLocationsStore } from 'contexts/locations/LocationsContext';

import s from './Search.module.scss';

export const Search = () => {
  const { state, dispatch } = useLocationsStore();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val: string) => {
    setValue(val, false);
    clearSuggestions();
    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    dispatch({ type: ACTIONS.SET_CENTER, payload: { lat, lng } });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className={s.search__input}
        placeholder="Search an address..."
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => {
              return <ComboboxOption key={place_id} value={description} />;
            })}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
