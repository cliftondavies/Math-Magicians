import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';

describe('App functionaity', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('addition', () => {
    test('when accurate', () => {
      fireEvent.click(screen.getByText('1'));
      fireEvent.click(screen.getByText('+'));
      fireEvent.click(screen.getByText('9'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByText('10')).toBeInTheDocument();
    });

    test('when inaccurate', () => {
      fireEvent.click(screen.getByText('1'));
      fireEvent.click(screen.getByText('+'));
      fireEvent.click(screen.getByText('9'));
      fireEvent.click(screen.getByText('='));
      expect(screen.queryByText('19')).toBeNull();
    });
  });

  describe('subtraction', () => {
    test('when accurate', () => {
      fireEvent.click(screen.getByText('8'));
      fireEvent.click(screen.getByText('0'));
      fireEvent.click(screen.getByText('-'));
      fireEvent.click(screen.getByText('2'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByText('78')).toBeInTheDocument();
    });

    test('when inaccurate', () => {
      fireEvent.click(screen.getByText('8'));
      fireEvent.click(screen.getByText('-'));
      fireEvent.click(screen.getByText('2'));
      fireEvent.click(screen.getByText('='));
      expect(screen.queryByText('10')).toBeNull();
    });
  });

  describe('multiplication', () => {
    test('when accurate', () => {
      fireEvent.click(screen.getByText('3'));
      fireEvent.click(screen.getByText('x'));
      fireEvent.click(screen.getByText('7'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByText('21')).toBeInTheDocument();
    });

    test('when inaccurate', () => {
      fireEvent.click(screen.getByText('3'));
      fireEvent.click(screen.getByText('x'));
      fireEvent.click(screen.getByText('7'));
      fireEvent.click(screen.getByText('='));
      expect(screen.queryByText('10')).toBeNull();
    });
  });

  describe('division', () => {
    test('when accurate', () => {
      fireEvent.click(screen.getByText('4'));
      fireEvent.click(screen.getByText('6'));
      fireEvent.click(screen.getByText('/'));
      fireEvent.click(screen.getByText('2'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByText('23')).toBeInTheDocument();
    });

    test('when inaccurate', () => {
      fireEvent.click(screen.getByText('4'));
      fireEvent.click(screen.getByText('6'));
      fireEvent.click(screen.getByText('/'));
      fireEvent.click(screen.getByText('2'));
      fireEvent.click(screen.getByText('='));
      expect(screen.queryByText('46/2')).toBeNull();
    });

    test('when dividing by 0', () => {
      fireEvent.click(screen.getByText('5'));
      fireEvent.click(screen.getByText('/'));
      fireEvent.click(screen.getByText('0'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByText('undefined')).toBeInTheDocument();
    });
  });

  test('+/-', () => {
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByText('-4')).toBeInTheDocument();
  });

  describe('percentage', () => {
    test('when accurate', () => {
      fireEvent.click(screen.getByText('5'));
      fireEvent.click(screen.getByText('%'));
      expect(screen.getByText('0.05')).toBeInTheDocument();
    });

    test('when inaccurate', () => {
      fireEvent.click(screen.getByText('5'));
      fireEvent.click(screen.getByText('%'));
      expect(screen.queryByText('5%')).toBeNull();
    });
  });
});
