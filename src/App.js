 import './App.css';
import AddTransaction from './component/AddTransaction';
import Balance from './component/Balance';
import Header from './component/Header';
// import IncomeExpance from './component/IncomeExpance';
import TranscationList from './component/TranscationList';
import { GlobleProvider } from './context/GlobleState';

function App() {
  return (
   <GlobleProvider>
      <div className="App">
      <Header title="Expance tracker " />
      <div className="container">
       <Balance />
       {/* <IncomeExpance /> */}
       <TranscationList />
       <AddTransaction />
      </div>
    </div>
   </GlobleProvider>
  );
}

export default App;
