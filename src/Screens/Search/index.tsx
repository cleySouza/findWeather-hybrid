import { TextInput, View } from "react-native";
import { Container } from "../../components/molecules";
import { AtomButton, AtomText } from "../../components/atoms";
import { theme } from "../../theme/colors";
import Icon from "react-native-vector-icons/Octicons";
import IconLocation from "react-native-vector-icons/MaterialIcons";

export function Search({navigation}: any) {
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <AtomButton
          styles={{
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: theme?.colors.gray_600,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
          buttonProps={{
            onPress: () => navigation.goBack()
          }}
        >
          <Icon 
            name="chevron-left"
            size={25}
            color={theme?.colors.white}
          />
        </AtomButton>
        <AtomText
          text="Busca"
          styles={{}}
        />
        <View
          style={{
            width: 40
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 40
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: theme?.colors.dark_400,
            padding: 16,
            borderRadius: 10,
            width: "85%"
          }}
        >
          <Icon name="search" size={19} color={theme?.colors.white}/>
          <TextInput
            placeholder="Digite o nome de uma cidade"
            placeholderTextColor={theme?.colors.gray_200}
            style={{
              color: theme?.colors.white,
              fontSize: 16,
              marginLeft: 20
            }}
          />
        </View>
        <AtomButton
          styles={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme?.colors.dark_400,
            padding: 10,
            borderRadius: 10
          }}
        >
          <IconLocation 
            name="location-on"
            size={29}
            color={theme?.colors.white}
          />
        </AtomButton>
      </View>
    </Container>
  )
}