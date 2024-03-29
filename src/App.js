import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { AppContext } from './context/contextApi';
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                     <Routes>
                        <Route path="/" exact element={<Feed />} />
                         
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
  );
}

export default App;
