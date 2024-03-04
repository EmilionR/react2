import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentHooks from './components/ContentHooks';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <HTTPHooks />
      
    </div>
  );
}

export default App;