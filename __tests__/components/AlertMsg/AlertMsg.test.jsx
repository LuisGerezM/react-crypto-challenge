import { AlertMsg } from "@/components";
import { cleanup, render, screen } from "@testing-library/react";

describe("AlertMsg", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(<AlertMsg text='Test Alert' alertClass='custom-class' />);
  });

  test("renders text prop correcly", () => {
    const alertText = screen.queryByText(/test alert/i);
    expect(alertText).toBeInTheDocument();
  });

  test("renders with custom className prop", async () => {
    const alertText = screen.queryByText(/test alert/i);
    expect(alertText).toHaveClass("custom-class");
  });
});
