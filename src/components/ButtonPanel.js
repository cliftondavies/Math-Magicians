import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const ops = ['+', '-', 'x', '/', '='];

  const handleClick = buttonName => {
    const { clickHandler } = props;
    clickHandler(buttonName);
  };

  const renderButton = value => {
    if (value === '0') { return <Button buttonName={value} clickHandler={handleClick} color wide />; }
    if (ops.includes(value)) { return <Button buttonName={value} clickHandler={handleClick} />; }
    return <Button buttonName={value} clickHandler={handleClick} color />;
  };

  const buttonGroup = (first, second, third, fourth = '') => (
    <div>
      {renderButton(first)}
      {renderButton(second)}
      {renderButton(third)}
      {(fourth) ? renderButton(fourth) : null}
    </div>
  );

  return (
    <div className="button-panel">
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
