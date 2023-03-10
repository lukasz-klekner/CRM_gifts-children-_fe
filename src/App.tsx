import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { GiftView } from './views/GiftView';
import { NotfoundView } from './views/NotFoundView';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftView />} />
        <Route path="*" element={<NotfoundView />} />
      </Routes>
    </div>
  );
}

export default App;
