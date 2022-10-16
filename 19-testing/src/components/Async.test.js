import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request successed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    render(<Async />);

    // 3rd parameter is waitForElementOptions, default wait 1 second
    // const listenItemElement = await screen.findAllByRole("listitem", {}, {});
    const listenItemElement = await screen.findAllByRole("listitem");
    expect(listenItemElement).not.toHaveLength(0);
  });
});
