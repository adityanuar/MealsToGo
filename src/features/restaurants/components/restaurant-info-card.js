import React from 'react';
import {SvgXml} from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {Spacer} from "../../../components/spacer/spacer.component";
import {Text} from "../../../components/typography/text.component";
import {
  Address,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd
} from "./restaurant-info-card.styles";


function RestaurantInfo({restaurant = {}}) {
  const {
    name = 'Some Restaurant', icon = "https://cdn-icons-png.flaticon.com/512/34/34994.png", photos = [
      "https://whatsnewindonesia.com/yogyakarta/wp-content/uploads/sites/6/2020/04/Mediterranea-Restaurant-by-Kamil.jpg"
    ], address = "100 some random street", isOpenNow = true, rating = 4, isClosedTemporarily = true, placeId
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
      <Info>
        <Text variant={'label'}>{name}</Text>
        <Section>
          <Rating>
            {
              ratingArray.map((_, idx) => (
                <SvgXml xml={star} width={20} height={20} key={`star-${placeId}-${idx}`}/>
              ))
            }
          </Rating>
          <SectionEnd>
            {
              isClosedTemporarily && (
                <Text variant={"caption"} style={{color: 'red'}}>CLOSED TEMPORARILY</Text>
              )
            }
            <Spacer position={'left'} size={'large'}>
              {
                isOpenNow && <SvgXml xml={open} width={20} height={20}/>
              }
            </Spacer>
            <Spacer position={'left'} size={'large'}>
              <Icon source={{uri: icon}}/>
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}

export default RestaurantInfo;