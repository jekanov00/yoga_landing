/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import choose_time from './assets/images/choose_time.png';
import choose_phone from './assets/images/choose_phone.png';
import choose_person from './assets/images/choose_person.png';

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
          <h1 className="welcome__title">Beautiful videos. Become your best self with BerYoGa.</h1>
          <p className="welcome__text">
            For me, BerYoga is more than just a sport &#8211; it is lifestyle, a state mind, a
            philosophy.
            {<br />}
            Now I decided to open BerYoga so that I can share my love and joy of bikram yoga. It is
            my hope that you too can discover all the positive impacts of bikram yoga and make
            bikram yoga as a part of your life.
          </p>
          <button className="button welcome__service">Service</button>
          <button className="button welcome__signup">Sign Up</button>
        </article>
      </header>
      <main>
        <article className="choose">
          <div className="chooseHeading">
            <h1 className="chooseHeading__title">Why Choose BerYoga?</h1>
            <p className="chooseHeading__text">
              Access hundreds of online yoga classes shot in natural studios around the world.
            </p>
            <p className="chooseHeading__text">Unlimited access for $150/Years.</p>
          </div>
          <div className="chooseCardsContainer">
            <div className="chooseCard">
              <img className="chooseCard__image" alt="time" src={choose_time} />
              <h2 className="chooseCard__title">Lifetime Updates</h2>
              <p className="chooseCard__text">Free lifetime updates for our lates collection.</p>
            </div>
            <div className="chooseCard">
              <img className="chooseCard__image" alt="phone" src={choose_phone} />
              <h2 className="chooseCard__title">Anywhere Videos</h2>
              <p className="chooseCard__text">
                Access world-class online yoga videos can be seen on the application & web
              </p>
            </div>
            <div className="chooseCard">
              <img className="chooseCard__image" alt="person" src={choose_person} />
              <h2 className="chooseCard__title">Access Unlimited</h2>
              <p className="chooseCard__text">
                Find lots of yoga video tutorials, from all over the world
              </p>
            </div>
          </div>
        </article>
        <article className="whats">
          <div className="whatsContainer">
            <h1 className="whats__title">What&#8217;s on BerYoga?</h1>
            <ul className="whatsList">
              <li className="whatsList__item">
                <h2 className="whatsList__item_title">New Classes Every Week</h2>
                <p className="whatsList__item_text">
                  Discover hundreds of classes in our library. Save your favorites, try new styles
                  and customize your routine to fit your schedule.
                </p>
              </li>
              <li className="whatsList__item">
                <h2 className="whatsList__item_title">Series</h2>
                <p className="whatsList__item_text">
                  Our multi-class series are designed to help you achieve your fitness and wellness
                  goals. t
                </p>
              </li>
              <li className="whatsList__item">
                <h2 className="whatsList__item_title">Pose Directory</h2>
                <p className="whatsList__item_text">
                  Get step-by-step instructions on poses and sequences in our extensive video pose
                  directory.
                </p>
              </li>
            </ul>
          </div>
        </article>
        <article className="healing">
          <div className="healingContainer">
            <p className="healing__author">By Brittany Risherjan _____</p>
            <h1 className="healing__title">The Healing Power of Trauma-Informed Yoga Classes.</h1>
            <p className="healing__text">
              Celebrating five years of service, the nonprofit Exhale to Inhale brings free,
              trauma-informed yoga classes to rape crisis centers and domestic violence shelters in
              Jakarta.
            </p>
            <a className='healing__link' href="#">Read More &#62;</a>
          </div>
        </article>
        <article className="ways">
          <div className='waysContainer'></div>
        </article>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
