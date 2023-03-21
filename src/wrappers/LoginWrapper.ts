import styled from 'styled-components'
import { Button } from '../components';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  img {
    margin: 0 auto;
  }
  Button {
    margin-left: 20px;
    margin-top: 30px;
  }

`
export default Wrapper;