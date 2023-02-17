import css from './App.module.css';
import SideBar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      <SideBar />
      <NavBarForm />
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;