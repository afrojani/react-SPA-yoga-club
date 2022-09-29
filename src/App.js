
import './App.css';
import Exercises from './components/Exercises/Exercises';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='bg-secondary d-flex'>
      <div className='border border-primary col-9'>
        <Exercises></Exercises>
      </div>
      <div className='bg-light border border-warning col-3'>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
