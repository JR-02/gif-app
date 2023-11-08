import PropTypes from 'prop-types';
import SvgHeart from '../assets/svg/SvgHeart';

const ModalGif = ({ setModalGifShow, modalGifShow, setFavoriteGifs }) => {
  const handleClickBackdrop = (e) => {
    if (e.target.className === 'BackdropModal') {
      setModalGifShow({
        show: false,
      });
    }
  };

  const handleClickFavorite = () => {
    setFavoriteGifs((cats) => {
      for (const cat of cats) {
        const { id } = cat;
        if (id === modalGifShow.id) {
          return [...cats];
        }
      }
      const newFavorite = {
        id: modalGifShow.id,
        title: modalGifShow.title,
        url: modalGifShow.url,
      };
      return [...cats, newFavorite];
    });
  };

  return (
    <div className='BackdropModal' onClick={handleClickBackdrop}>
      <section className='ModalGif'>
        <img src={modalGifShow.url} alt='' />
        <div>
          <h3>{modalGifShow.title}</h3>
          <button onClick={handleClickFavorite}>
            <SvgHeart />
          </button>
        </div>
        <button className='ModalGifDownloand'>Descargar</button>
      </section>
    </div>
  );
};

ModalGif.propTypes = {
  setModalGifShow: PropTypes.func.isRequired,
  setFavoriteGifs: PropTypes.func.isRequired,
  modalGifShow: (PropTypes.shape = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default ModalGif;
