
import './App.css';
import Exercises from './components/Exercises/Exercises';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='bg-secondary d-flex'>
      <div className='border border-primary col-10'>
        <Exercises></Exercises>
      </div>
      <div className='border border-warning col-2'>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
