import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { ChildView } from './views/ChildView';
import { GiftPreviewView } from './views/GiftPreviewView';
import { GiftView } from './views/GiftView';
import { NotfoundView } from './views/NotFoundView';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftView />} />
        <Route path="gift/:id" element={<GiftPreviewView />} />
        <Route path="/child" element={<ChildView />} />
        <Route path="*" element={<NotfoundView />} />
      </Routes>
    </div>
  );
}

export default App;
