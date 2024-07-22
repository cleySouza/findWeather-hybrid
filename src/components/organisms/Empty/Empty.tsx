import { View } from "react-native";
import { Container } from "../../molecules";
import { HomeStyle } from "./styles";
import { AtomButton, AtomImage, AtomText } from "../../atoms";

export function Empty({navigation}: any) {
  return (
    <Container
      style={HomeStyle.container}
    >
      <View
        style={HomeStyle.contentTitleMain}
      >
        <AtomText
          text="Find"
          styles={HomeStyle.firstTitleMain}
        />
        <AtomText
          text="Weather"
          styles={HomeStyle.secondTitleMain}
        />
      </View>
      <AtomImage
        prop={{
          source: require('../../../assets/images/climate-change.png'),
        }}
      />

      <AtomButton
        buttonProps={{
          onPress: () => navigation.navigate('Search')
        }}
        styles={{
          alignItems: "center"
        }}       
      >
        <AtomText
          text="Selecione aqui um local e"
          styles={HomeStyle.textButton}
        />
        <AtomText
          text="encontre o clima em tempo real"
          styles={HomeStyle.textButton}
        />
      </AtomButton>
    </Container>
  )
}