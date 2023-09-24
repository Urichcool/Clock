import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import RenderWithProvider from "../tests-helpers/RenderWithProvider";


describe("App test", () => {
    test("app sections render", () => {
        render(
            <RenderWithProvider component={<App />} />
        );
        const clockSection =  screen.getByTestId("clock-section");
    })
})