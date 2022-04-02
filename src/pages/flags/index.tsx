import { ErrorMessage, Field, Form, Formik } from 'formik';
import useSWR from 'swr';
import * as Yup from 'yup';

import { Head } from 'components/head/Head';
import { Checkbox } from 'elements/checkbox/Checkbox';
import { capitalizeText } from 'utils/capitalize/capitalizeText';

const Flags = () => {
  const { data, error, mutate: reload } = useSWR('/api/flags');

  const initialValues = {
    key: '',
  };

  const validationSchema = Yup.object({
    key: Yup.string().required('Key is required'),
  });

  if (error) return <div>Sorry for the error</div>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Head title="Flags" />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            await fetch(`/api/flags/${values.key}/enable`);
            reload();
            actions.resetForm({ values: initialValues });
          }}
        >
          <Form>
            <Field name="key" type="text" />
            <ErrorMessage name="key" />
            <button type="submit">Enable</button>
          </Form>
        </Formik>
      </div>
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
              <button
                onClick={async () => {
                  await fetch(`/api/flags/${flag.key}/remove`);
                  reload();
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Flags;
