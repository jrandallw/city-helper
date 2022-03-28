import { Head } from 'components/head/Head';
import { Map } from 'components/map/Map';
import { Container } from 'containers/container/Container';
import type { NextPage } from 'next';
import useSWR from 'swr';

const Index: NextPage = () => {
  const { data, error } = useSWR('/api/locations');

  if (error) <>Error...</>;
  if (!data) <>Loading...</>;

  return (
    <>
      <Head title="Index" />
      <Container>{JSON.stringify(data, null, 4)}</Container>
      <Map />
    </>
  );
};

export default Index;
