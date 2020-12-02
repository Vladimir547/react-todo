import { useSelector } from 'react-redux';

import './App.css';
import List from './list/ListWrapper/List';
import Modal from './components/modal/modal';

function App() {
  const isShow = useSelector((state) => state.isModalShow );
  return (
    <div className="App">
      <List classProps='todo'/>
      <List classProps='doing'/>
      <List classProps='done'/>
      <List classProps='delete'/>
      { isShow && <Modal />}
    </div>
  );
}

export default App;
