import Gif from './Gif';
import {
  GridGifContainer,
  GridGif,
  GridGifH2,
} from '../elements/styles/StyledGridGif';
import PropTypes from 'prop-types';

const FavGif = ({ favoriteGifs, setModalGifShow }) => {
  const handleClickGif = (card) => {
    setModalGifShow({
      id: card.id,
      title: card.title,
      url: card.url,
      show: true,
    });
  };

  return (
    <GridGifContainer>
      <GridGifH2>Favorites</GridGifH2>

      <GridGif>
        {favoriteGifs.map((card) => {
          return (
            <Gif key={card.id} card={card} handleClickGif={handleClickGif} />
          );
        })}
      </GridGif>
    </GridGifContainer>
  );
};

FavGif.propTypes = {
  favoriteGifs: PropTypes.array.isRequired,
  setModalGifShow: PropTypes.func.isRequired,
};

export default FavGif;
