import { ReactElement } from 'react';

import { useLoadScript } from '@react-google-maps/api';
import type { NextPage } from 'next';
import useSWR from 'swr';

import { Head } from 'components/head/Head';
import { Map } from 'components/map/Map';
import { Sidebar } from 'components/sidebar/Sidebar';
import { Grid } from 'containers/grid/Grid';
import { LocationsContextProvider } from 'contexts/locations/LocationsContext';
import { DefaultLayout } from 'layouts/default/Default';

const Index = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
    libraries: ['places'],
  });
  const { data, error } = useSWR('/api/locations');

  if (error) <>Error...</>;
  if (!data && !isLoaded) <>Loading...</>;

  return (
    <>
      <Head title="Index" />
      <Grid>
        <Sidebar />
        <Map />
      </Grid>
    </>
  );
};

Index.getLayout = (page: ReactElement) => (
  <LocationsContextProvider>
    <DefaultLayout>{page}</DefaultLayout>
  </LocationsContextProvider>
);

export default Index;
