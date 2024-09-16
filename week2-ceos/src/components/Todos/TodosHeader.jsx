import styled from "styled-components";

export default function TodosHeader({ clickedDate }) {
  return (
    <>
      <HeaderText>{clickedDate}</HeaderText>
      <DividedLine />
    </>
  );
}

const HeaderText = styled.p`
  ${({ theme }) => theme.fonts.Body1};
`;

const DividedLine = styled.hr`
  margin-top: -2rem;
  background-color: ${({ theme }) => theme.colors.gray3};
`;