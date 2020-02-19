import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;


    h2 {
      font-weight: 530;
      font-size: 18px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #e83f6f;
      border: 0;
      cursor: pointer;
    }

    button:hover {
      background: #e01d55;
    }

    button:active {
      transform: scale(.95);
    }
  }

  ul {
    margin-top: 30px;
  }
`;
