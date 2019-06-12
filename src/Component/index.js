import React from "react";
import styled from "styled-components";
import farm from "../agriculture.svg";
import { color } from "../ui/theme";
import "../index.css";

const Title = styled.h3`
  font-size: 1.3rem;
  text-align: left;
  color: palevioletred;
`;

const Component = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  align-content: space-around;
  background: ${props => props.bgColor};
  max-width: 40rem;
`;

//NOTE: this needs to be more flexible, less inline css
//next few lines sets the default values for the Container const
const Container = ({
  backgroundColor = color.papaya,
  title = "Component",
  img = farm,
  alt = "farm",
  children
}) => (
  <Component bgColor={backgroundColor}>
    <img src={img} style={{ width: 70, height: 70 }} alt={alt} />
    <Title>{title}</Title>
    {children}
  </Component>
);

Container.propTypes = {};

export default Container;
