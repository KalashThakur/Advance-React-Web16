import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import { createRenderer } from "react-dom/test-utils";
import renderer from "react-test-renderer";
//render test our component virtually, it will not really create the component in browser
//render in index.js create the dom structure in browser

describe("Button tests", () => {

    it("should have button in dom", () => {

        render(<Button>Click Me</Button>) //virtually
        // screen.debug(); //will show dom virtually in terminal
        let button = screen.getByText("Click Me") //screen is similar to document
        expect(button).toBeInTheDocument();
    });

    it("should have button with text Click Me in App.js", () => {
        render(<App></App>)
        let button = screen.getByTestId("cButton")
        expect(button).toBeInTheDocument();
    });

    it("should render empty button", () => {
        render(<Button></Button>);
        let button = screen.getByTestId("cButton");
        expect(button).toBeEmptyDOMElement();
    });

    it("should change theme", () => {
        render(<App></App>);
        let h3 = screen.getByText("Current Theme is light");
        expect(h3).toHaveTextContent("light");

        //after click on button, we again check h3
        let themeButton = screen.getByText("Change Theme");
        // userEvent.click(themeButton);
              //OR
        fireEvent.click(themeButton);
        expect(h3).toHaveTextContent("dark");
    });

    it("should call the given function", () => {
        const mockfn = jest.fn(); //we don't care how does this function work, we just want to check if our function onClick is triggered or not
        render(<Button onClick={mockfn}>Click Me</Button>);
        const btn = screen.getByTestId('cButton');
        fireEvent.click(btn);

        expect(mockfn).toBeCalled()
    });

    // Snapshot -> takes a screenshot of our code, represented in a particular format
    // it.only -> test only that test case
    it("should match snapshot", () => {
        const tree = renderer.create(<Button colorScheme={'green'} variant={'ghost'}>Add Counter</Button>).toJSON()
        expect(tree).toMatchSnapshot();
    });

    //basic utilities, hooks (not react hooks)

    // 1. beforeAll();
    // //before running test cases, this func will run first
    // //make a db call => output

    //2.  beforeEach();
    // //this func will run before every test case
    // //get the deployed link

    //3.  afterAll();

    //4.  afterEach();

})