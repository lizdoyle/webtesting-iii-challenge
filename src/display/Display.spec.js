// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
 

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


test("Display Gate Closed/Locked ", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    getByText(/closed/i);
    getByText(/locked/i);
  });
  
  test("Display Gate Closed/Unlocked ", () => {
    const { getByText } = render(<Display closed={true} locked={false} />);
    getByText(/closed/i);
    getByText(/Unlock/i);
  }); 

  test("Display Gate Open/Unlocked", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    getByText(/open/i);
    getByText(/Unlock/);
  });
  
  test("Use red-led for locked or closed", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    expect(getByText(/locked/i)).toHaveClass("red-led");
    expect(getByText(/closed/i)).toHaveClass("red-led");
  });
  
  test("Use green-led for unlocked or open", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
  
    expect(getByText(/unlocked/i)).toHaveClass("green-led");
    expect(getByText(/open/i)).toHaveClass("green-led");
  });