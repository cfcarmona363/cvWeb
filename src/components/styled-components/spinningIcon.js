import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  {
    50%,
    100% {
      transform: rotatey(360deg);
    }
  }
`

const SpinningIcon = styled.div`
  svg {
    color: rgb(0, 210, 255);
    font-size: 30px;
    margin-left: -10px;
    animation: ${spin} ${({ time }) => time}s ease infinite;
  }
`

export default SpinningIcon
