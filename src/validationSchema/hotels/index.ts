import * as yup from 'yup';

export const hotelValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  provider_id: yup.string().nullable().required(),
});
