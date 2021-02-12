import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div style={{ height: '20px', background: 'red', width: '200px' }}>
      <span>
        {result}
      </span>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
