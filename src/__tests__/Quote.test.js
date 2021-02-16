import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('renders elements on quote page', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
