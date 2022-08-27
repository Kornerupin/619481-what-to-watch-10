const MoviePage = () => {
  <div className='page-content'>
    <section className='catalog catalog--like-this'>
      <h2 className='catalog__title'>More like this</h2>

      <div className='catalog__films-list'>
        <article className='small-film-card catalog__films-card'>
          <div className='small-film-card__image'>
            <img src={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} alt='Fantastic Beasts: The Crimes of Grindelwald' width='280' height='175'/>
          </div>
          <h3 className='small-film-card__title'>
            <a className='small-film-card__link' href={'film-page.html'}>Fantastic Beasts: The Crimes of Grindelwald</a>
          </h3>
        </article>

        <article className='small-film-card catalog__films-card'>
          <div className='small-film-card__image'>
            <img src={'img/bohemian-rhapsody.jpg'} alt='Bohemian Rhapsody' width='280' height='175'/>
          </div>
          <h3 className='small-film-card__title'>
            <a className='small-film-card__link' href={'film-page.html'}>Bohemian Rhapsody</a>
          </h3>
        </article>

        <article className='small-film-card catalog__films-card'>
          <div className='small-film-card__image'>
            <img src={'img/macbeth.jpg'} alt='Macbeth' width='280' height='175'/>
          </div>
          <h3 className='small-film-card__title'>
            <a className='small-film-card__link' href={'film-page.html'}>Macbeth</a>
          </h3>
        </article>

        <article className='small-film-card catalog__films-card'>
          <div className='small-film-card__image'>
            <img src={'img/aviator.jpg'} alt='Aviator' width='280' height='175'/>
          </div>
          <h3 className='small-film-card__title'>
            <a className='small-film-card__link' href={'film-page.html'}>Aviator</a>
          </h3>
        </article>
      </div>
    </section>

    <footer className='page-footer'>
      <div className='logo'>
        <a href={'main.html'} className='logo__link logo__link--light'>
          <span className='logo__letter logo__letter--1'>W</span>
          <span className='logo__letter logo__letter--2'>T</span>
          <span className='logo__letter logo__letter--3'>W</span>
        </a>
      </div>

      <div className='copyright'>
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

export default MoviePage;
