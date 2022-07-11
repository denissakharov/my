import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PostsContainer: React.FC = (props) => {
  return <Root>{props.children}</Root>;
};
