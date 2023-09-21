import * as yup from 'yup';

export const providerValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  country: yup.string().nullable(),
  name: yup.string().required(),
  mobile: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
