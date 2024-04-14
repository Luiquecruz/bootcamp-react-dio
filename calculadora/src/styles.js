import styled from "styled-components";

const innerGap = '2px'

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
  gap: ${innerGap};
`

export const Wrapper = styled.div`
  display: flex;
  gap: ${innerGap};
  flex-direction: column;
  width: 100%;
`

export const Actions = styled.div`
  display: flex;
  gap: ${innerGap};
  align-items: baseline;

  button {
    flex: 1;
    background-color: #0f0f0f;
  }
`

export const Numbers = styled.div`
  display: grid;
  gap: ${innerGap};
  grid-template-columns: repeat(3, minmax(60px, 1fr));

  button {
    &:last-child {
      background-color: #0f0f0f;
    }

    &:nth-last-child(2) {
      grid-column: span 2;
    }
  }
`

export const Operations = styled.div`
  display: flex;
  gap: ${innerGap};
  flex-direction: column;

  button {
    background-color: #0f0f0f;
    min-width: 60px;
    width: 100%;
  }
`