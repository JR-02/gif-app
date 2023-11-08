import PropTypes from 'prop-types';
import {
  GifContainer,
  GifImage,
  GifParagraph,
} from '../elements/styles/StyledGif';

const Gif = ({ card, handleClickGif }) => {
  return (
    <GifContainer
      className='animate__animated animate__fadeIn'
      onClick={() => handleClickGif(card)}
    >
      <GifImage src={card.url} alt={card.title} />
      <GifParagraph>{card.title}</GifParagraph>
    </GifContainer>
  );
};

Gif.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  handleClickGif: PropTypes.func.isRequired,
};

export default Gif;
