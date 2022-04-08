import React, { useState } from "react";

import calculate from "../../services/calculate";
import Button from "../Button";

const initialState = ''

export default function Calculator() {
    const [result, setResult] = useState(initialState)
    const [value , setValue] = useState(initialState)

    const handleNumber = ({ target }) => {
      setValue(value + target.value)
    }

    const clear = () => {
      setValue(initialState)
      setResult(initialState)
    }

    const getResult = () => {
      const total = calculate(value)
      setResult(total)
    }

    return (
        <div className="wrapper">
          <h1>{result}</h1>
          <input className="inputValue" value={value} onChange={({ target }) => setValue(target.value)} />
          <div>
            <Button onClick={handleNumber} value='('>(</Button>
            <Button onClick={handleNumber} value=')'>)</Button>
            <Button onClick={handleNumber} value='%'>%</Button>
            <Button onClick={clear}>AC</Button>
          </div>
          <div>
            <Button onClick={handleNumber} className="strong--gray" value={7}>7</Button>
            <Button onClick={handleNumber} className="strong--gray" value={8}>8</Button>
            <Button onClick={handleNumber} className="strong--gray" value={9}>9</Button>
            <Button onClick={handleNumber} className="orange" value="/">/</Button>
          </div>
          <div>
            <Button onClick={handleNumber} className="strong--gray" value={4}>4</Button>
            <Button onClick={handleNumber} className="strong--gray" value={5}>5</Button>
            <Button onClick={handleNumber} className="strong--gray" value={6}>6</Button>
            <Button onClick={handleNumber} className="orange" value='*'>*</Button>
          </div>
          <div>
            <Button onClick={handleNumber} className="strong--gray" value={1}>1</Button>
            <Button onClick={handleNumber} className="strong--gray" value={2}>2</Button>
            <Button onClick={handleNumber} className="strong--gray" value={3}>3</Button>
            <Button onClick={handleNumber} className="orange" value="-">-</Button>
          </div>
          <div>
            <Button onClick={handleNumber} className="strong--gray" value={0}>0</Button>
            <Button onClick={handleNumber} className="strong--gray" value='.'>.</Button>
            <Button onClick={getResult} value='='>=</Button>
            <Button onClick={handleNumber} className="orange" value='+'>+</Button>
          </div>
        </div>
    )
}