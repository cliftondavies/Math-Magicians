import Button from './Button';

const ButtonPanel = () => {
  const renderButton = value => <Button buttonName={value} />;

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
      {buttonGroup('7', '8', '9', 'X')}
      {buttonGroup('4', '5', '6', '-')}
      {buttonGroup('1', '2', '3', '+')}
      {buttonGroup('0', '.', '=')}
    </div>
  );
};

export default ButtonPanel;
