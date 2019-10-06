// Test away!

import React from "react";
import { render } from "@testing-library/react";

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

// test("mock display test", () => {
//     const mock = jest.fn();
    
//     mock("");
//     mock("");
//     expect(mock).toHaveBeenCalled();
//     expect(mock).toHaveBeenCalledTimes();
//     expect(mock).toHaveBeenCalledWith();


// })




test("closed", () => {
    console.log("It is closed")
    render(
        <div></div>
    )
})