import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./login";

jest.mock("axios", () => ({
    __esModule: true,
    default: {
        get: () => ({
            data: { id: 1, name: "Darshan_mock_data" }
        })
        //post
    }
}));

function renderComponent() {
  render(<Login />);
}

test("username input should be rendered", () => {
    renderComponent();
    const ele = screen.queryByPlaceholderText(new RegExp(`Enter your useRname`, 'i'));
    expect(ele).toBeInTheDocument()
})

test("password input should be rendered", () => {
    renderComponent();
    const ele = screen.queryByPlaceholderText(new RegExp(`Enter your pAssword`, 'i'));
    expect(ele).toBeInTheDocument()
})

test("button should be rendered", () => {
    renderComponent();
    const ele = screen.queryByText(new RegExp(`loGIN`, 'i'));
    expect(ele).toBeInTheDocument()
})

test("username should be empty", () => {
    renderComponent();
    const ele = screen.queryByPlaceholderText(new RegExp(`Enter your useRname`, 'i'));
    expect(ele.value).toBe("")
})

test("password should be empty", () => {
    renderComponent();
    const ele = screen.queryByPlaceholderText(new RegExp(`Enter your pAssword`, 'i'));
    expect(ele.value).toBe("")
})

test("button should be disabled", () => {
    renderComponent();
    const ele = screen.queryByText(new RegExp(`loGIN`, 'i'));
    expect(ele).toBeDisabled();
})

test("error should be not be visible", () => {
    renderComponent();
    expect(screen.getByTestId('error')).not.toBeVisible()
})

test("username input should change", () => {
    renderComponent();
    const ele = screen.queryByPlaceholderText(new RegExp(`Enter your username`, 'i'));
    const testValue = "Darshan"
    fireEvent.change(ele, { target: { value: testValue } })
    expect(ele.value).toBe(testValue)
})

test("password input should change", () => {
    renderComponent();
    const ele = screen.queryByPlaceholderText(new RegExp(`Enter your pAssword`, 'i'));
    const testValue = "Darshan"
    fireEvent.change(ele, { target: { value: testValue } })
    expect(ele.value).toBe(testValue)
})

test("button should not be disabled when inputs exist", () => {
    renderComponent();
    const button = screen.getByRole("button", { name: /login/i })
    const userEle = screen.queryByPlaceholderText(new RegExp(`Enter your username`, 'i'));
    const passwordEle = screen.queryByPlaceholderText(new RegExp(`Enter your pAssword`, 'i'));
    const testuserValue = "Darshan"
    const testpasswordValue = "darshan@123#"
    fireEvent.change(userEle, { target: { value: testuserValue } })
    fireEvent.change(passwordEle, { target: { value: testpasswordValue } })
    expect(button).not.toBeDisabled()
})

test("loading should not be rendered", () => {
    renderComponent();
    const ele = screen.queryByText(new RegExp(`loGIN`, 'i'));
    expect(ele).not.toHaveTextContent(/wait/i)
})


test("loading should be rendered when click", () => {
    renderComponent();
    const ele = screen.queryByText(new RegExp(`loGIN`, 'i'));
    const userEle = screen.queryByPlaceholderText(new RegExp(`Enter your username`, 'i'));
    const passwordEle = screen.queryByPlaceholderText(new RegExp(`Enter your pAssword`, 'i'));
    const testuserValue = "Darshan"
    const testpasswordValue = "darshan@123#"
    fireEvent.change(userEle, { target: { value: testuserValue } })
    fireEvent.change(passwordEle, { target: { value: testpasswordValue } })
    fireEvent.click(ele)
    expect(ele).toHaveTextContent(/wait/i)
})

test("loading should be visible after fetching", async () => {
    renderComponent();
    const ele = screen.queryByText(new RegExp(`loGIN`, 'i'));
    const userEle = screen.queryByPlaceholderText(new RegExp(`Enter your username`, 'i'));
    const passwordEle = screen.queryByPlaceholderText(new RegExp(`Enter your pAssword`, 'i'));
    const testuserValue = "Darshan"
    const testpasswordValue = "darshan@123#"
    fireEvent.change(userEle, { target: { value: testuserValue } })
    fireEvent.change(passwordEle, { target: { value: testpasswordValue } })
    fireEvent.click(ele)
    await waitFor(() =>
        expect(ele).not.toHaveTextContent(/wait/i))
})


test("loading should be visible after fetching", async () => {
    renderComponent();
    const ele = screen.queryByText(new RegExp(`loGIN`, 'i'));
    const userEle = screen.queryByPlaceholderText(new RegExp(`Enter your username`, 'i'));
    const passwordEle = screen.queryByPlaceholderText(new RegExp(`Enter your pAssword`, 'i'));
    const testuserValue = "Darshan"
    const testpasswordValue = "darshan@123#"
    fireEvent.change(userEle, { target: { value: testuserValue } })
    fireEvent.change(passwordEle, { target: { value: testpasswordValue } })
    fireEvent.click(ele)
    await waitFor(() =>
        expect(ele).not.toHaveTextContent(/wait/i)
    )
})


test("username text should be visible after fetching", async () => {
  renderComponent();
  const ele = screen.getByRole("button");
  const userEle = screen.queryByPlaceholderText(new RegExp(`Enter your username`, 'i'));
  const passwordEle = screen.queryByPlaceholderText(new RegExp(`Enter your pAssword`, 'i'));
  const testuserValue = "Darshan";
  const testpasswordValue = "darshan@123#";

  fireEvent.change(userEle, { target: { value: testuserValue } });
  fireEvent.change(passwordEle, { target: { value: testpasswordValue } });
  fireEvent.click(ele);

  const userName = await screen.findByText(/Darshan_mock_data/i);
  expect(userName).toBeInTheDocument();
});
