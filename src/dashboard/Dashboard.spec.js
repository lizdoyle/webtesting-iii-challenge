// Test away

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";


test("it should render dashboard", () => {
    console.log("Default dashboard render")
    render(
          <Dashboard />
    )
});

test("Gate Default on Dashboard", () => {
    const {getByText} = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);

});

test("button text changes", () => {
    const dash = render(<Dashboard />);
    let button = dash.getByText("Close Gate");
    fireEvent.click(button);
    button = component.getByText("Open Gate");
    expect(button);
})


test("should match dashboard snapshot", () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
});

