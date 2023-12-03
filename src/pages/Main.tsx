import { useAppSelector } from '../hooks/redux';

export const Main = (): JSX.Element => {
  const state = useAppSelector((state) => state.controlledForm);
  const styleParagraph = 'text-center';
  const styleColumn = 'flex flex-col items-center';

  return (
    <>
      <h1 className="mb-7 text-5xl text-center font-bold">main page</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className={styleColumn}>
          {state.users.length ? (
            state.users.map((user, index) => {
              return (
                <div
                  className="h64 w-64 mb-4 p-5 border-2 rounded-lg"
                  key={index}
                >
                  <img
                    src={user.image}
                    className={user.image ? 'f-full w-full' : ''}
                  />
                  <p className={styleParagraph}>
                    {user.email ? `E-male: ${user.email}` : ''}
                  </p>
                  <p className={styleParagraph}>
                    {user.name ? `Name: ${user.name}` : ''}
                  </p>
                  <p className={styleParagraph}>
                    {user.age ? `Age: ${user.age}` : ''}
                  </p>
                  <p className={styleParagraph}>
                    {user.gender ? `Gender: ${user.gender}` : ''}
                  </p>
                  <p className={styleParagraph}>
                    {user.country ? `Country: ${user.country}` : ''}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-3xl">No Data!!!</p>
          )}
        </div>

        <div className={styleColumn}>
          {state.users.length ? (
            state.users.map((user, index) => {
              return (
                <div
                  className="h64 w-64 mb-4 p-5 border-2 rounded-lg"
                  key={index}
                >
                  <img
                    src={user.image}
                    className={user.image ? 'f-full w-full' : ''}
                  />
                  <p className={styleParagraph}>
                    {user.email ? `E-male: ${user.email}` : ''}
                  </p>
                  <p className={styleParagraph}>
                    {user.name ? `Name: ${user.name}` : ''}
                  </p>
                  <p className={styleParagraph}>
                    {user.age ? `Age: ${user.age}` : ''}
                  </p>
                  <p className={styleParagraph}>
                    {user.gender ? `Gender: ${user.gender}` : ''}
                  </p>
                  <p className={styleParagraph}>
                    {user.country ? `Country: ${user.country}` : ''}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-3xl">No Data!!!</p>
          )}
        </div>
      </div>
    </>
  );
};
