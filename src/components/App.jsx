import { FormCreate } from './FormCreate/FormCreate';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <FormCreate />
      </Main>
    </>
  );
};
