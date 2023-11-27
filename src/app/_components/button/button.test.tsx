import { describe } from "node:test";
import { getByRole, getByText, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button Component", () => {
  test("renders default button", () => {
    const { getByText } = render(<Button>click here</Button>);
    expect(getByText("click here")).toBeInTheDocument();
  });

  test("disables button when disable prop is true", () => {
    render(<Button isDisabled={true}>click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applying the correct css classes for different variants", () => {
    const { rerender } = render(<Button variant="primary">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });

  test("applying the correct css classes for different shapes", () => {
    const { rerender } = render(<Button shape="wide">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-wide");

    rerender(<Button shape="full">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-block");
  });
  test("when button is loading", () => {
    render(<Button isLoading={true}>loading</Button>);
    expect(screen.getByRole("button")).toHaveClass("opacity-80");
  });

  test("when button is outlined", () => {
    render(<Button isOutline={true}>click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-outline");
  });

  test("when button is a simple link", () => {
    render(<Button isLink={true}>click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-link");
  });

  test("render a button", () => {
    render(
      <Button variant="primary" isOutline={true} isDisabled={true}>
        click here
      </Button>
    );

    screen.debug();
  });
});
