import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Group,
  Genre,
  Items,
  Item,
  Image,
  Meta,
  Title,
  Text,
  Feature,
  Content,
  FeatureTitle,
  FeatureText,
  FeatureCloseButton,
  Maturity
} from './styles/card';

const FeatureContext = createContext(null);

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(false);

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Genre = function CardGenre({ children, ...restProps }) {
  return <Genre {...restProps}>{children}</Genre>;
};

Card.Items = function CardItems({ children, ...restProps }) {
  return <Items {...restProps}>{children}</Items>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureCloseButton onClick={() => setShowFeature(false)}>
          <img src='/images/icons/close.png' alt='Close' title='Close' />
        </FeatureCloseButton>

        <Group margin='30px 0' flexDirection='row' alignItems='center'>
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight='bold'>
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
