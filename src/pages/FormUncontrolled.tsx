import { useNavigate } from 'react-router-dom';
import { COUNTRIES } from '../constants/common';
import { useAppDispatch } from '../hooks/redux';

export const FormUncontrolled = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  /* const onSubmit = (data: FormData) => {}; */

  const errors = {
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    terms: '',
    image: '',
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log(files);
      const urlImage = URL.createObjectURL(files[0]);
      return urlImage;
    }
  };

  const inputStyle = 'mt-1 mb-4 border-2 rounded-lg p-1';
  const buttonStyle =
    'm-auto w-64 mt-2 border-2 rounded-lg p-1 bg-teal-300 hover:bg-teal-400 disabled:bg-teal-50 ease-linear transition-all';

  return (
    <>
      <form
        className="flex flex-col w-2/5 m-auto"
        action="submit" /* onSubmit={} */
      >
        <label>
          {errors.name ? (
            <p className="text-red-700">
              {`Your name: Error - ${errors.name}`}
            </p>
          ) : (
            <p>Your name:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your name'}
          required
        />

        <label>
          {errors.age ? (
            <p className="text-red-700">{`Your age: Error - ${errors.age}`}</p>
          ) : (
            <p>Your age:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your age'}
          required
        />

        <label>
          {errors.email ? (
            <p className="text-red-700">
              {`Your e-mail: Error - ${errors.email}`}
            </p>
          ) : (
            <p>Your e-mail:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="text"
          placeholder={'enter your email'}
          required
        />

        <label>
          {errors.password ? (
            <p className="text-red-700">
              {`Password: Error - ${errors.password}`}
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
          required
        />

        <label>
          {errors.confirmPassword ? (
            <p className="text-red-700">
              {`Confirm password: Error - ${errors.confirmPassword}`}
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
          required
        />

        <label>
          {errors.gender ? (
            <p className="text-red-700">
              {`Your gender: Error - ${errors.gender}`}
            </p>
          ) : (
            <p>Your gender:</p>
          )}
        </label>

        <select className={inputStyle} defaultValue="" required>
          <option value="" disabled>
            enter your gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <label>
          {errors?.image ? (
            <p className="text-red-700">{`Click here: Error - ${errors.image}`}</p>
          ) : (
            <p>Your image:</p>
          )}
        </label>

        <input
          className={inputStyle}
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={onChange}
          required
        />

        <label>
          {errors.country ? (
            <p className="text-red-700">
              {`Your country: Error - ${errors.country}`}
            </p>
          ) : (
            <p>Your country:</p>
          )}
        </label>

        <select className={inputStyle} defaultValue="" required>
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
          {errors.terms ? (
            <p className="text-red-700">{`Click here: Error - ${errors.terms}`}</p>
          ) : (
            <p>Click here:</p>
          )}
          <input className="mt-1 mb-5 mr-3" type="checkbox" />Я принимаю
          лецензионное соглашение
        </label>

        <button className={buttonStyle} type="submit" /* disabled={} */>
          Save
        </button>
      </form>
    </>
  );
};
