import React from "react";
import Overlay from "./Overlay";
import { render } from "@testing-library/react";

describe("Overlay", () => {
  it("renders correctly", () => {
    const { container } = render(<Overlay />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('has a "Michal Nowotnik" h1 tag', () => {
    const { getByText } = render(<Overlay />);

    expect(getByText(/Michal/)).toBeInTheDocument();
    expect(getByText(/Nowotnik/)).toBeInTheDocument();
  });

  it('has a "Front-End Developer" h2 tag', () => {
    const { getByText } = render(<Overlay />);

    expect(getByText(/Front-End Developer/)).toBeInTheDocument();
  });
});
