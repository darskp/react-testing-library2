import { Provider } from "react-redux";
import Counter from "./Counter";
import { createStore } from "redux";
import reduce from "../redux/reducer";
import { fireEvent, render, screen } from '@testing-library/react';

const store = createStore(reduce);

function renderComponent() {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

test('renders with initial count value=0', () => {
  renderComponent()
  const ele = screen.getByText(/Count value=/i);
  expect(ele).toBeInTheDocument();
  expect(ele.textContent).toContain('0');
});


test('increments count on btn click', () => {
  renderComponent()
  const increbtn = screen.getByText(/INCRE/i);
  fireEvent.click(increbtn);
  const countElement = screen.getByText(/Count value=/i);
  expect(countElement.textContent).toContain('1');
});

test('decrement count on btn click when count is zero', () => {
  renderComponent()
  const decbtn = screen.getByText(/DECRE/i);
  fireEvent.click(decbtn);
  const countElement = screen.getByText(/Count value=/i);
  expect(countElement.textContent).toContain('0');
});

test('reset count on btn click when count is zero', () => {
  renderComponent()
  const btn = screen.getByText(/reset/i);
  fireEvent.click(btn);
  const countElement = screen.getByText(/Count value=/i);
  expect(countElement.textContent).toContain('0');
});
