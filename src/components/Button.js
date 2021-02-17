import PropTypes from 'prop-types';

const Button = props => {
  const {
    buttonName, clickHandler, color, wide,
  } = props;

  const handleClick = e => {
    clickHandler(e.target.textContent);
  };

  const buttonClass = () => {
    if (color && wide) { return 'button-wide'; }
    if (color) { return 'button-grey'; }
    return 'button-default';
  };

  return (
    <button type="button" onClick={handleClick} className={buttonClass()}>
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  color: false,
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
