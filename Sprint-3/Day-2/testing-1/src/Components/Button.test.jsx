import { Button } from "./Button";
import {render, screen} from "@testing-library/react";
import App from "../App"

//describe -> tells that what are you testing
describe("Button Tests", () => {
    test("should have button in dom", () => {
        // render(<Button> Click Me </Button>); //virtually
        render(<App></App>); //virtually
        let button = screen.getByText("Click Me"); // searching for button with text = Click Me //similar to document.getElementById()....
        expect(button).toBeInTheDocument();
    })
})

//Expectation --> Actual results

//npm run test