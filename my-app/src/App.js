import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';
import EventBinding from './components/EventBinding';


function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <Sidebar />
      <EventBinding />
    </div>
  );
}

export default App;