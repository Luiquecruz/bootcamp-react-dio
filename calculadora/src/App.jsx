import { useState } from 'react';
import Button from './components/Button'
import Display from './components/Display';
import { Container, Calculator, Controls, Wrapper, Numbers, Actions, Operations } from './styles';

function App() {
  const [number, setNumber] = useState('0')
  const [firstValue, setFirstValue] = useState('0')
  const [operation, setOperation] = useState('')

  // actions
  const clear = () => {
    setNumber('0')
    setFirstValue('0')
    setOperation('')
  }

  const handleInput = (n) => setNumber(prev => `${prev === '0' ? '' : prev}${n}`)

  const backspace = () => setNumber(() => number.substring(0, number.length -1))

  // operations
  const addition = () => {
    if (firstValue === '0') {
      setFirstValue(String(number))
      setNumber('0')
      setOperation('+')
    }

    if (firstValue !== '0') {
      setNumber(String(Number(firstValue) + Number(number)))
      setFirstValue('0')
      setOperation('')
    }
  }

  const subtraction = () => {
    if (firstValue === '0') {
      setFirstValue(String(number))
      setNumber('0')
      setOperation('-')
    }

    if (firstValue !== '0') {
      setNumber(String(Number(firstValue) - Number(number)))
      setFirstValue('0')
      setOperation('')
    }
  }

  const multiplication = () => {
    if (firstValue === '0') {
      setFirstValue(String(number))
      setNumber('0')
      setOperation('*')
    }

    if (firstValue !== '0') {
      setNumber(String(Number(firstValue) * Number(number)))
      setFirstValue('0')
      setOperation('')
    }
  }

  const division = () => {
    if (firstValue === '0') {
      setFirstValue(String(number))
      setNumber('0')
      setOperation('/')
    }

    if (firstValue !== '0') {
      setNumber(String(Number(firstValue) / Number(number)))
      setFirstValue('0')
      setOperation('/')
    }
  }

  const equals = () => {
    if (firstValue!== '0' && operation !== '' && number !== '0') {
      switch(operation) {
        case '+':
          addition()
          break
        case '-':
          subtraction()
          break
        case '*':
          multiplication()
          break
        case '/':
          division()
          break

        default:
          break
      }
    }
  }

  return (
    <Container className="App">
      <Calculator>
        <Display value={number} />

        <Controls>
          <Wrapper>
            <Actions>
              <Button label="ac" event={clear} />
              <Button label="<" event={backspace} />
            </Actions>

            <Numbers>
              <Button label="7" event={() => handleInput('7')} />
              <Button label="8" event={() => handleInput('8')} />
              <Button label="9" event={() => handleInput('9')} />
              <Button label="4" event={() => handleInput('4')} />
              <Button label="5" event={() => handleInput('5')} />
              <Button label="6" event={() => handleInput('6')} />
              <Button label="1" event={() => handleInput('1')} />
              <Button label="2" event={() => handleInput('2')} />
              <Button label="3" event={() => handleInput('3')} />
              <Button label="0" event={() => handleInput('0')} />
              <Button label="." event={() => handleInput('.')} />
            </Numbers>
          </Wrapper>

          <Operations>
            <Button label="&divide;" event={division} />
            <Button label="x" event={multiplication} />
            <Button label="-" event={subtraction} />
            <Button label="+" event={addition} />
            <Button label="=" event={equals} />
          </Operations>
        </Controls>
      </Calculator>
    </Container>
  );
}

export default App;
