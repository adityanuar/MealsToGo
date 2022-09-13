import React from 'react';
import {Text} from "react-native";
import {Card} from "react-native-paper";
import styled from "styled-components/native";
import {SvgXml} from "react-native-svg";

import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: white
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary}
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary}
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

function RestaurantInfo({restaurant = {}}) {
  const {
    name = 'Some Restaurant', icon, photos = [
      "https://whatsnewindonesia.com/yogyakarta/wp-content/uploads/sites/6/2020/04/Mediterranea-Restaurant-by-Kamil.jpg"
    ], address = "100 some random street", isOpenNow = true, rating = 4, isClosedTemporarily
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
      <Info>
        <Title>{name}</Title>
        <Rating>
          {
            ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20}/>
            ))
          }
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}

export default RestaurantInfo;