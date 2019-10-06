// Test away!

import React from "react";
import { render } from "@testing-library/react";

import Controls from "./Controls";

test("it should render controls", () => {
    console.log("Default controls render")
    render(
          <Controls />
    )
});

test("should match controls snapshot", () => {
    expect(render(<Controls />)).toMatchSnapshot()
});