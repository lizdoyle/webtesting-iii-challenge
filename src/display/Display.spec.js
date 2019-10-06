// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {toBeInTheDocument, toHaveClass } from "@testing-library/jest-dom";
 

import Display from "./Display";

test("it should render display", () => {
    console.log("Default display render")
    render(
          <Display />
    )
});

test("should match display snapshot", () => {
    expect(render(<Display />)).toMatchSnapshot()
});

test("mock display test", () => {
    const mock = jest.fn();
    const actual = mock('')
 
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);


})


test("It should default to unlocked and open", () => {
    const {getByText} = render(<Display locked={false} closed={false} />);

    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);

    fireEvent.click(getByText("Unlocked"));
    fireEvent.click(getByText("Open"));

    expect(unlocked).toHaveClass('green-led');
    expect(open).toHaveClass('green-led');
});