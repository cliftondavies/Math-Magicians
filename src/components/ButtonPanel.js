import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => {
    const { clickHandler } = props;
    clickHandler(buttonName);
  };

  const renderButton = value => <Button buttonName={value} clickHandler={handleClick} />;

  const buttonGroup = (first, second, third, fourth = '') => (
    <div>
      {renderButton(first)}
      {renderButton(second)}
      {renderButton(third)}
      {(fourth) ? renderButton(fourth) : null}
    </div>
  );

  return (
    <div>
      {buttonGroup('AC', '+/-', '%', '/')}
      {buttonGroup('7', '8', '9', 'x')}
      {buttonGroup('4', '5', '6', '-')}
      {buttonGroup('1', '2', '3', '+')}
      {buttonGroup('0', '.', '=')}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
