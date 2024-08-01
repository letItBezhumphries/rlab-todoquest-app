import './App.css';
import Header from './components/Header';
import QuestForm from './components/QuestForm';
import QuestList from './components/QuestList';

/*
Bring in initial state of quests todos


*/

function App() {
  return (
    <div className='app'>
      <Header />
      <QuestForm />
      <QuestList />
    </div>
  );
}

export default App;
