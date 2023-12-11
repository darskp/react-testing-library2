import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Learn React link in the header', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App Component', () => {
  test('displays a list with 3 list items', () => {
    render(<App />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  test('displays a list with a role of list', () => {
    render(<App />);
    const listElement = screen.queryAllByRole('list');
    expect(listElement.length).toBe(1);
  });

  test('displays an element with a role of myId1', () => {
    render(<App />);
    const element = screen.queryAllByRole('myId1');
    expect(element.length).toBe(1);
  });

  test('displays an element with a data-testid of myId', () => {
    render(<App />);
    const element = screen.getByTestId('myId');
    expect(element).toBeInTheDocument();
  });

  test('displays a heading element', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
    screen.debug();
  });

  test('displays a span element with the title sum and content 30', () => {
    render(<App />);
    const sumElement = screen.getByTitle('sum');
    expect(sumElement).toBeInTheDocument();
    expect(sumElement.textContent).toBe('30');
  });

  test.only('displays a image', () => {
    render(<App />)
    const ele = screen.queryAllByRole('img');
    expect(ele).toHaveLength(1)
    screen.debug()
  });
});
