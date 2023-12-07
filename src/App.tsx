import { Route, Routes } from 'react-router';
import { Main } from './pages/Main';
import { Layout } from './layouts/Layout';
import { FormControlled } from './pages/FormControlled';
import { FormUncontrolled } from './pages/FormUncontrolled';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/form-controlled" element={<FormControlled />} />
        <Route path="/form-uncontrolled" element={<FormUncontrolled />} />
      </Route>
    </Routes>
  );
}

export default App;
