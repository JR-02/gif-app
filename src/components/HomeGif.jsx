import useGetGifs from '../hooks/useGetGifs';
import LoadingSpin from '../elements/LoadingSpin';
import Gif from './Gif';
import {
  GridGifContainer,
  GridGif,
  GridGifH2,
} from '../elements/styles/StyledGridGif';
import PropTypes from 'prop-types';

const HomeGif = ({ category, setModalGifShow }) => {
  const { data, loading } = useGetGifs(category);

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
      <GridGifH2>{category}</GridGifH2>

      <GridGif>
        {loading && <LoadingSpin />}

        {data.map((card) => {
          return (
            <Gif key={card.id} card={card} handleClickGif={handleClickGif} />
          );
        })}
      </GridGif>
    </GridGifContainer>
  );
};

HomeGif.propTypes = {
  category: PropTypes.string.isRequired,
  setModalGifShow: PropTypes.func.isRequired,
};

export default HomeGif;
