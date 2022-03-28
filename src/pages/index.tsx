import type { NextPage } from 'next';
import useSWR from 'swr';

import { Head } from 'components/head/Head';
import { Map } from 'components/map/Map';

const Index: NextPage = () => {
  const { data, error } = useSWR('/api/locations');

  if (error) <>Error...</>;
  if (!data) <>Loading...</>;

  return (
    <>
      <Head title="Index" />

      <Map />
    </>
  );
};

export default Index;
