import { SafeAreaView, View } from "react-native";
import { AtomButton, AtomImage, AtomText } from "../../atoms";
import { HomeStyle } from "./styles";
import { Container } from "../../molecules";
import { colors } from "../../../theme/colors";

export function GenericHome() {
  return(
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