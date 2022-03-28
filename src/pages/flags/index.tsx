import type { NextPage } from 'next';
import useSWR from 'swr';

import { Head } from 'components/head/Head';
import { Checkbox } from 'elements/checkbox/Checkbox';
import { capitalizeText } from 'utils/capitalize/capitalizeText';

const Flags: NextPage = () => {
  const { data, error, mutate: reload } = useSWR('/api/flags');

  if (error) return <div>Sorry for the error</div>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Head title="Flags" />
      <div>
        {data.flags.map((flag: { key: string; enabled: boolean }) => {
          const method = flag.enabled ? 'disable' : 'enable';

          return (
            <div key={flag.key}>
              <Checkbox
                checked={flag.enabled}
                label={capitalizeText(flag.key)}
                onChange={async () => {
                  await fetch(`/api/flags/${flag.key}/${method}`);
                  reload();
                }}
              />
            </div>
          );
        })}
        <h1>Flags</h1>
      </div>
    </>
  );
};

export default Flags;
