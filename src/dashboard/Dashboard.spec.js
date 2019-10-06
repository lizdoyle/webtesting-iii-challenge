// Test away

import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

test("it should render dashboard", () => {
    console.log("Default dashboard render")
    render(
          <Dashboard />
    )
});

test("should match dashboard snapshot", () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
});