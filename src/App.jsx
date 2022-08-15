import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <div className="topBar">
          <div className="logo">BerYoga</div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item_active nav__item">Home</li>
              <li className="nav__item">About Us</li>
              <li className="nav__item">Contact</li>
              <li className="nav__item">Pricing</li>
            </ul>
          </nav>
          <div className="login">
            <button className="button login__button">Login</button>
          </div>
        </div>
        <article className="welcome">
          <h1 className="title">Beautiful videos. Become your best self with BerYoGa.</h1>
          <p className="text">
            For me, BerYoga is more than just a sport – it is lifestyle, a state mind, a philosophy.
            {<br />}
            Now I decided to open BerYoga so that I can share my love and joy of bikram yoga. It is
            my hope that you too can discover all the positive impacts of bikram yoga and make
            bikram yoga as a part of your life.
          </p>
          <button className="button service">Service</button>
          <button className="button signup">Sign Up</button>
        </article>
      </header>
      <main></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
