import { act } from "react-dom/test-utils"
import { render, unmountComponentAtNode } from "react-dom"
import { Character } from "../components/Character"

const example = {
  name: "Insurance Rick",
  status: "unknown",
  species: "Human",
  gender: "Male"
}

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with the name", () => {
  act(() => {
    render(<Character character={example} />, container);
  });
  expect(container.querySelector("h4").innerHTML).toEqual("Insurance Rick");
});