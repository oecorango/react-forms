import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COUNTRIES } from '../constants/common';
import { useAppDispatch } from '../hooks/redux';
import { setUser } from '../store/uncontrolledFormSlice';
import { User, UserErrors } from '../interfaces/state';
import { convertImage } from '../utils/convertImage';

export const FormUncontrolled = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formRef = useRef<HTMLFormElement>(null);
  const [formFieldErrors, setFormFieldErrors] = useState<UserErrors>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log(files);
      const urlImage = URL.createObjectURL(files[0]);
      return urlImage;
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const userData: User = {
      name: formRef.current?.firstName.value,
      age: formRef.current?.age.value,
      email: formRef.current?.email.value,
      password: formRef.current?.password.value,
      confirmPassword: formRef.current?.confirmPassword.value,
      gender: formRef.current?.confirmPassword.value,
      country: formRef.current?.country.value,
      terms: formRef.current?.terms.checked,
      image: formRef.current?.image.files
        ? formRef.current?.image.files[0]
        : undefined,
    };

    userData.image = await convertImage(userData.image as unknown as File);

    dispatch(setUser(userData));
    navigate('/');
  };

  const inputStyle = 'mt-1 mb-4 border-2 rounded-lg p-1';
  const buttonStyle =
    'm-auto w-64 mt-2 border-2 rounded-lg p-1 bg-teal-300 hover:bg-teal-400 disabled:bg-teal-50 ease-linear transition-all';

  return (
    <>
      <form
        className="flex flex-col w-2/5 m-auto"
        action="submit"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label>
          {formFieldErrors?.name ? (
            <p className="text-red-700">
              {`Your name: Error - ${formFieldErrors.name}`}
            </p>
          ) : (
            <p>Your name:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your name'}
          name="firstName"
          // required
        />

        <label>
          {formFieldErrors?.age ? (
            <p className="text-red-700">{`Your age: Error - ${formFieldErrors.age}`}</p>
          ) : (
            <p>Your age:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your age'}
          name="age"
          // required
        />

        <label>
          {formFieldErrors?.email ? (
            <p className="text-red-700">
              {`Your e-mail: Error - ${formFieldErrors.email}`}
            </p>
          ) : (
            <p>Your e-mail:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your email'}
          name="email"
          // required
        />

        <label>
          {formFieldErrors?.password ? (
            <p className="text-red-700">
              {`Password: Error - ${formFieldErrors.password}`}
            </p>
          ) : (
            <p>Password:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="password"
          placeholder={'enter your password'}
          autoComplete=""
          name="password"
          // required
        />

        <label>
          {formFieldErrors?.confirmPassword ? (
            <p className="text-red-700">
              {`Confirm password: Error - ${formFieldErrors.confirmPassword}`}
            </p>
          ) : (
            <p>Confirm pass:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="password"
          placeholder={'confirm your password'}
          autoComplete=""
          name="confirmPassword"
          // required
        />

        <label>
          {formFieldErrors?.gender ? (
            <p className="text-red-700">
              {`Your gender: Error - ${formFieldErrors.gender}`}
            </p>
          ) : (
            <p>Your gender:</p>
          )}
        </label>

        <select
          className={inputStyle}
          defaultValue=""
          name="gender"
          // required
        >
          <option value="" disabled>
            enter your gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <label>
          {formFieldErrors?.image ? (
            <p className="text-red-700">{`Click here: Error - ${formFieldErrors.image}`}</p>
          ) : (
            <p>Your image:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="file"
          accept=".png, .jpg, .jpeg"
          name="image"
          onChange={onChange}
          // required
        />

        <label>
          {formFieldErrors?.country ? (
            <p className="text-red-700">
              {`Your country: Error - ${formFieldErrors.country}`}
            </p>
          ) : (
            <p>Your country:</p>
          )}
        </label>

        <select
          className={inputStyle}
          defaultValue=""
          name="country"
          // required
        >
          <option value="" disabled>
            enter your country
          </option>
          {COUNTRIES.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </select>

        <label>
          {formFieldErrors?.terms ? (
            <p className="text-red-700">{`Click here: Error - ${formFieldErrors.terms}`}</p>
          ) : (
            <p>Click here:</p>
          )}
          <input className="mt-1 mb-5 mr-3" type="checkbox" name="terms" />Я
          принимаю лецензионное соглашение
        </label>

        <button className={buttonStyle} type="submit">
          Save
        </button>
      </form>
    </>
  );
};
