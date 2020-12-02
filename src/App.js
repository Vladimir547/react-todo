import { useSelector } from 'react-redux';

import './App.css';
import List from './list/ListWrapper/List';
import Modal from './components/modal/modal';

function App() {
  const isShow = useSelector((state) => state.isModalShow );
  const resetLocalStorageFunc = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(false)
  }
  return (
    <div className="App">
      <List classProps='todo'/>
      <List classProps='doing'/>
      <List classProps='done'/>
      <List classProps='delete'/>
      { isShow && <Modal />}
      <button className='reset-btn' onClick={(e) => resetLocalStorageFunc(e)}>reset localStorage</button>
    </div>
  );
}

export default App;
