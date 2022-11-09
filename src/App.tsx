import { Routes, Route } from 'react-router-dom';
import './app.scss';
import { MainLayout } from './components/layouts/MainLayout';
import About from './scenes/About';
import Contacts from './scenes/Contacts';
import Main from './scenes/Main';
import Reviews from './scenes/Reviews';
import Services from './scenes/Services';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Main />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About/>}/>
          <Route path="reviews" element={<Reviews />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
