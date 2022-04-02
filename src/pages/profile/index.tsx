import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Head } from 'components/head/Head';
import { Input } from 'elements/input/Input';

const Profile = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    bio: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    bio: Yup.string().required('Bio is required'),
  });

  return (
    <>
      <Head title="Flags" />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            await fetch(`/api/profile/update`, {
              method: 'POST',
              body: JSON.stringify(values),
            });
            actions.resetForm({ values: initialValues });
          }}
        >
          <Form>
            <Input type="text" name="firstName" required />
            <Input type="text" name="lastName" required />
            <Input type="textarea" name="bio" required />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Profile;
