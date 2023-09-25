import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import RenderWithProvider from "../tests-helpers/RenderWithProvider";
import axios from "axios";

jest.mock("axios");

describe("App test", () => {
  test("app clock section render", () => {
    render(<RenderWithProvider component={<App />} />);
    const clockSection: HTMLElement = screen.getByTestId("clock-section");
    expect(clockSection).toBeInTheDocument();
  });
  test("app more section render", () => {
    render(<RenderWithProvider component={<App />} />);
    const moreSection: HTMLElement = screen.getByTestId("more-section");
    const moreButton: HTMLElement = screen.getByTestId("more-button");
    fireEvent.click(moreButton);
    expect(moreSection).toHaveStyle({ transform: "translateY(0)" });
    fireEvent.click(moreButton);
    expect(moreSection).toHaveStyle({ transform: "translateY(100%)" });
  });
  test("app more btn text switch", () => {
    render(<RenderWithProvider component={<App />} />);
    const moreButton: HTMLElement = screen.getByTestId("more-button");
    fireEvent.click(moreButton);
    expect(moreButton).toHaveTextContent("less");
    fireEvent.click(moreButton);
    expect(moreButton).toHaveTextContent("more");
  });
  test("quote container test", () => {
    render(<RenderWithProvider component={<App />} />);
    const moreButton: HTMLElement = screen.getByTestId("more-button");
    const quoteContainer: HTMLElement = screen.getByTestId("quote-container");
    expect(quoteContainer).toBeInTheDocument();
    fireEvent.click(moreButton);
    expect(quoteContainer).not.toBeInTheDocument();
    fireEvent.click(moreButton);
  });
  test("quote is loading test", () => {
    render(<RenderWithProvider component={<App />} />);
    const quoteButton: HTMLElement = screen.getByTestId("quote-button");
    fireEvent.click(quoteButton);
    expect(axios.get).toBeCalledTimes(4);
  });
  test("axios calls test", () => {
    render(<RenderWithProvider component={<App />} />);
    expect(axios.get).toBeCalledTimes(3);
  });
});
