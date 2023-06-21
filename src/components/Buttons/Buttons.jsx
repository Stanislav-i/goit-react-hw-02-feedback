import css from './Buttons.module.css';
import PropTypes from 'prop-types';

export const Buttons = ({ onBtnClick }) => {
  return (
    <div>
      <button
        type="button"
        id="good"
        className={css.btnstyle}
        onClick={onBtnClick}
      >
        Good
      </button>
      <button
        type="button"
        id="neutral"
        className={css.btnstyle}
        onClick={onBtnClick}
      >
        Neutral
      </button>
      <button
        type="button"
        id="bad"
        className={css.btnstyle}
        onClick={onBtnClick}
      >
        Bad
      </button>
    </div>
  );
};

Buttons.propTypes = {
  onBtnClick: PropTypes.func,
};