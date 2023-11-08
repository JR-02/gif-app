import { useState } from 'react';
import Header from './components/Header';
import HomeGif from './components/HomeGif';
import FavGif from './components/FavGif';
import ModalGif from './components/ModalGif';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [categories, setCategories] = useState(['Cat']);

  const [favoriteGifs, setFavoriteGifs] = useState([]);

  const [modalGifShow, setModalGifShow] = useState({
    id: '',
    title: '',
    url: '',
    show: false,
  });

  return (
    <BrowserRouter>
      <div className='container-body'>
        <Header setCategories={setCategories} />
        {modalGifShow.show && (
          <ModalGif
            modalGifShow={modalGifShow}
            setModalGifShow={setModalGifShow}
            setFavoriteGifs={setFavoriteGifs}
          />
        )}
        <Routes>
          <Route
            path='/Favorite'
            element={
              <FavGif
                favoriteGifs={favoriteGifs}
                setModalGifShow={setModalGifShow}
              />
            }
          />

          <Route
            path='/'
            element={categories.map((category) => {
              return (
                <HomeGif
                  key={category}
                  category={category}
                  setModalGifShow={setModalGifShow}
                />
              );
            })}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
