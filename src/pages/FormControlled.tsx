import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../hooks/redux';
import { setState } from '../store/controlledFormSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { User } from '../interfaces/state';
import { COUNTRIES } from '../constants/common';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { FormSchema } from '../shema/shema';
import { convertImage } from '../utils/convertImage';

export const FormControlled = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: 'onBlur',
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = async (data: User) => {
    const userData = data;
    userData.image = await convertImage(userData.image as unknown as File);
    dispatch(setState(userData));
    form.reset();
    navigate('/');
  };

  const onChangeImage = (event: React.FocusEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const image = files[0];
      form.setValue('image', image);
      form.trigger('image');
    }
  };

  const inputStyle = 'mt-1 mb-4 border-2 rounded-lg p-1';
  const buttonStyle =
    'm-auto w-64 mt-2 border-2 rounded-lg p-1 bg-teal-300 hover:bg-teal-400 disabled:bg-teal-50 ease-linear transition-all';

  return (
    <>
      <form
        className="flex flex-col w-2/5 m-auto"
        action="submit"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <label>
          {form.formState.errors?.name ? (
            <p className="text-red-700">
              {`Your name: Error - ${form.formState.errors?.name?.message}`}
            </p>
          ) : (
            <p>Your name:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your name'}
          autoComplete="on"
          {...form.register('name')}
        />

        <label>
          {form.formState.errors?.age ? (
            <p className="text-red-700">
              {`Your age: Error - ${form.formState.errors?.age?.message}`}
            </p>
          ) : (
            <p>Your age:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your age'}
          autoComplete="on"
          {...form.register('age')}
        />

        <label>
          {form.formState.errors?.email ? (
            <p className="text-red-700">
              {`Your e-mail: Error - ${form.formState.errors?.email?.message}`}
            </p>
          ) : (
            <p>Your e-mail:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your email'}
          autoComplete="on"
          {...form.register('email')}
        />

        <label>
          {form.formState.errors?.password ? (
            <p className="text-red-700">
              {`Password: Error - ${form.formState.errors?.password?.message}`}
            </p>
          ) : (
            <p>Password:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="password"
          placeholder={'enter your password'}
          autoComplete="new-password"
          {...form.register('password')}
        />

        <label>
          {form.formState.errors?.confirmPassword ? (
            <p className="text-red-700">
              {`Confirm password: Error - ${form.formState.errors?.confirmPassword?.message}`}
            </p>
          ) : (
            <p>Confirm pass:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="password"
          placeholder={'confirm your password'}
          autoComplete="new-password"
          {...form.register('confirmPassword')}
        />

        <label>
          {form.formState.errors?.gender ? (
            <p className="text-red-700">
              {`Your gender: Error - ${form.formState.errors?.gender?.message}`}
            </p>
          ) : (
            <p>Your gender:</p>
          )}
        </label>

        <select
          className={inputStyle}
          defaultValue=""
          autoComplete="on"
          {...form.register('gender')}
        >
          <option value="" disabled>
            enter your gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <label>
          {form.formState.errors?.image ? (
            <p className="text-red-700">{`Click here: Error - ${form.formState.errors?.image?.message}`}</p>
          ) : (
            <p>Your image:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={onChangeImage}
          autoComplete="on"
        />

        <label>
          {form.formState.errors?.country ? (
            <p className="text-red-700">
              {`Your country: Error - ${form.formState.errors?.country?.message}`}
            </p>
          ) : (
            <p>Your country:</p>
          )}
        </label>

        <select
          className={inputStyle}
          defaultValue=""
          autoComplete="on"
          {...form.register('country')}
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
          {form.formState.errors?.terms ? (
            <p className="text-red-700">{`Click here: Error - ${form.formState.errors?.terms?.message}`}</p>
          ) : (
            <p>Click here:</p>
          )}
          <input
            className="mt-1 mb-5 mr-3"
            type="checkbox"
            {...form.register('terms')}
          />
          Я принимаю лецензионное соглашение
        </label>

        <button
          className={buttonStyle}
          type="submit"
          disabled={!form.formState.isValid}
        >
          Save
        </button>
      </form>
    </>
  );
};
