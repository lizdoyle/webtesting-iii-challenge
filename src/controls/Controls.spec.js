// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";

test("it should render controls", () => {
    console.log("Default controls render")
    render(
          <Controls />
    )
});

test("Buttons Render On Control", () => {
    const locked = false;
    const closed = false;
    const toggleLocked = jest.fn(() => !locked);
    const toggleClosed = jest.fn(() => !closed);
    const {getByText} = render(
        <Controls locked={locked} closed={closed} toggleLocked={toggleLocked} toggleClosed={toggleClosed} />
    )
    getByText(/lock gate/i);
    getByText(/close gate/i);

})

test("Close Button Disabled if Locked", () => {
    const locked = true;
    const closed = false;
    const toggleLocked = jest.fn(() => !locked);
    const toggleClosed = jest.fn(() => !closed);
    const {getByText} = render(
        <Controls locked={locked} closed={closed} toggleLocked={toggleLocked} toggleClosed={toggleClosed} />
    )
    expect(getByText(/close gate/i)).toBeDisabled()

})

test("Lock Button Disabled if Locked", () => {
    const locked = false;
    const closed = false;
    const toggleLocked = jest.fn(() => !locked);
    const toggleClosed = jest.fn(() => !closed);
    const {getByText} = render(
        <Controls locked={locked} closed={closed} toggleLocked={toggleLocked} toggleClosed={toggleClosed} />
    )
    expect(getByText(/lock gate/i)).toBeDisabled()

})


test("should match controls snapshot", () => {
    expect(render(<Controls />)).toMatchSnapshot()
});