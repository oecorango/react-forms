import * as yup from 'yup';
import {
  emailValid,
  firstUpperCase,
  oneLowerCase,
  oneNumber,
  oneSpecialChar,
  oneUpperCase,
} from '../constants/regExp';

export const FormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'min 3 chapters')
    .matches(firstUpperCase, 'name starts with a capital letter')
    .required('the field must not be empty'),

  age: yup
    .number()
    .min(14, 'min 14')
    .typeError('field must be a number')
    .required('the field must not be empty'),

  email: yup
    .string()
    .matches(emailValid, 'email must be a valid email')
    .required('the field must not be empty'),

  password: yup
    .string()
    .matches(oneLowerCase, 'must contain at least one lowercase')
    .matches(oneUpperCase, 'must contain at least one uppercase')
    .matches(oneNumber, 'must contain at least one number')
    .matches(oneSpecialChar, 'must contain special character')
    .required('the field must not be empty'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'password mismatch')
    .required('the field must not be empty'),

  gender: yup.string().required('the field must not be empty'),

  image: yup
    .mixed()
    .test('fileSize', 'The file is too large', (value) => {
      const file = value as File;
      return file ? file.size <= 3000000 : false;
    })
    .test(
      'type',
      'Only the following formats are accepted: .jpeg, .jpg, .png',
      (value) => {
        const file = value as File;
        return file
          ? file &&
              (file.type === 'image/jpeg' ||
                file.type === 'image/jpg' ||
                file.type === 'image/png')
          : false;
      }
    )
    .required('You need to provide a file'),

  country: yup.string().required('the field must not be empty'),

  terms: yup
    .boolean()
    .isTrue('Check the box if you agree to the terms')
    .required('the field must not be empty'),
});
