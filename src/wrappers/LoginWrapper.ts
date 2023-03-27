import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  img {
    margin-bottom:20px;
  }
  
  footer {
    font-size: 1rem;
    margin-top: 70px;
    margin-right: 20px;
    color: var(--grey-500);
    text-align: center;
  }
  

`
export default Wrapper;