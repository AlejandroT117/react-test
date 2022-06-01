import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import { Box } from "../components/Box/Box";

test("render content of the Box", ()=>{

  const box = render(<Box/>)

  box.getByText('Hola Mundo')

})

test("click on button", ()=>{
  const mockHandler = jest.fn()
  const box = render(<Box action={mockHandler}/>)
  const button = box.getByText('Botón')
  fireEvent.click(button)

  expect(mockHandler).toHaveBeenCalledTimes(1)

})