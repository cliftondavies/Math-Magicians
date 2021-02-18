import renderer from 'react-test-renderer';
import App from '../components/App';

test('renders elements on calculator page', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
