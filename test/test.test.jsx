import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import Navbar from "../src/components/Navbar";

import { expect, test, describe } from "vitest";

describe("test", () => {
  test("test", () => {
    render(<Navbar/>)
    const tittle = screen.getByText(/Home/i)
    expect(tittle).toBeDefined();
  });
});
