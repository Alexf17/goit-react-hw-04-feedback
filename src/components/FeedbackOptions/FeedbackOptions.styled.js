import styled from "styled-components";

export const FeedbackUL = styled.ul`
display: flex;
justify-content: center;
align-content:space-between;
`

export const FeedbackLi = styled.li`
&:not(:last-child) {
    margin-right: 30px;
  }
`;

export const FeedbackBtn = styled.button`
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
border: 1px solid black;
width: 120px;
padding: 15px 0;
font-weight: 500;
font-size: 18px;
background-color:lightgrey;
transition: background-color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
&:hover,
&:focus {
    background-color:lightblue;
    scale:1.1;
}
`