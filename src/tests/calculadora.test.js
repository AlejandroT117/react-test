import { substract, sum } from "../utils/calculadora";

describe("calculadora", ()=>{
  test("suma", ()=>{
    const expected = sum(2,15)
    const result = 17
    expect(expected).toBe(result)
  })

  test("resta", ()=>{
    const expected = substract(105, 110)
    const result = -5
    expect(expected).toBe(result)
  })
})