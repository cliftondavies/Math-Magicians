import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('renders elements on home page', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
