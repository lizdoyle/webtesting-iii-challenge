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