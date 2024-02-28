import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <Sidebar />
      <StatefulGreeting greeting="I love Mew!" />
    </div>
  );
}

export default App;