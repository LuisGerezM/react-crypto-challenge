import { CustomButton } from "@/components";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockOnClick } from "../../../.jest/mocks/onClickButton.mock";

describe("CustomButton", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(<CustomButton onClick={mockOnClick} text='Click button' />);
  });

  test("should button render correctly", () => {
    const button = screen.getByRole("button", { name: /Click button/i });
    expect(button).toBeInTheDocument();
  });

  test("should button contain 'click button' text", () => {
    const button = screen.getByText("Click button");
    expect(button).toHaveTextContent("Click button");
  });

  test("should call the onClick function when the button is clicked", async () => {
    await userEvent.click(screen.getByText("Click button"));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
