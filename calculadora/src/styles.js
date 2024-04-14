import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100dvh;
  background-color: #010101;
  padding: 32px 0;
`

export const Calculator = styled.section`
  width: 100%;
  max-width: 320px;
  background-color: #1d1d1d;
  border: 1px solid #1f1f1f;
  border-radius: 2px;
  margin: auto;
  padding: 6px;
`

export const Controls = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Actions = styled.div`
  display: flex;
  align-items: baseline;

  button {
    flex: 1;
  }
`

export const Numbers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(60px, 1fr));

  button {
    &:last-child {
      grid-column: span 3;
    }
  }
`

export const Operations = styled.div`
  display: flex;
  flex-direction: column;

  button {
    min-width: 60px;
    width: 100%;
  }
`