import React from 'react';
import { StatusBar, Alert } from 'react-native';
import { H2, H1, Container, Button } from '../../atoms';
import AppIntroSlider from 'react-native-app-intro-slider';
import styled, { useTheme } from 'styled-components/native';
const walkthroughImage = require('./walkthrough.png');

const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.View`
  padding-left: 32px;
  padding-right: 32px;
`;

const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 320px;
  height: 320px;
  margin-bottom: 70px;
`;

interface WalkthroughItem {
  id: number;
  title: string;
  description: string;
}
interface WalkthroughProps {
  items: WalkthroughItem[];
  actionButtonLabel: string;
  onPressAction: Function | undefined;
}

export const Walkthrough = (props: WalkthroughProps) => {
  const { items, actionButtonLabel, onPressAction } = props;
  const { colors } = useTheme();

  const accessToken = "asdasassadjlkhlkdasdas1232121dassa" // Teste de segurança
  Alert.alert(accessToken);

  const renderPage = ({ item }: { item: WalkthroughItem; index: number }) => {
    return (
      <Page>
        <Image resizeMode={'contain'} source={walkthroughImage} />
        <TextContainer>
          <H1 fontWeight="bold" textAlign="center">
            {item.title}
          </H1>
          <H2 textAlign="center" marginTop={20}>
            {item.description}
          </H2>
        </TextContainer>
      </Page>
    );
  };

  const renderDoneButton = () => {
    return (
      <ButtonContainer>
        <Button
          bold
          title={actionButtonLabel}
          wide
          onPress={() => {
            onPressAction && onPressAction();
          }}
        />
      </ButtonContainer>
    );
  };

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={(item) => `wt_${item.id}`}
        renderItem={renderPage}
        bottomButton
        dotStyle={{ backgroundColor: colors.foreground }}
        activeDotStyle={{ backgroundColor: colors.primary }}
        renderNextButton={renderDoneButton}
        renderDoneButton={renderDoneButton}
        data={items}
      />
    </Container>
  );
};
