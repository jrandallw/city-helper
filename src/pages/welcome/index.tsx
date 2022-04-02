import { Head } from 'components/head/Head';
import { Heading } from 'elements/heading/Heading';

const Welcome = () => {
  return (
    <>
      <Head title="Welcome" />
      <div>
        <Heading tag="h1">Welcome</Heading>
      </div>
    </>
  );
};

export default Welcome;
