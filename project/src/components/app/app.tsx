import Main from '../../pages/main/main';

type AppProps = {
  title: string,
  genre: string,
  year: number,
};

const App = (PromoData: AppProps): JSX.Element => (
  <Main
    title={PromoData.title}
    genre={PromoData.genre}
    year={PromoData.year}
  />
);

export default App;
