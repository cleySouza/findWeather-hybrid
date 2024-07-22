import React from "react";
import { Generic } from "../../components/templates";
import { theme } from "../../theme/colors";

export function OnboardingScreen({navigation}: any) {
  return(
    <Generic
      containerProps={{
        style: {
          alignItems: "center",
        }
      }}
      image={{source: require('../../assets/images/cloud-and-thunder.png'), }}
      textCenter={{
        text: 'Descubra o Clima \n na sua Cidade',
        styles: {
          color: theme?.colors?.white,
          fontSize: 33,
          textAlign: "center",
          fontFamily: theme.font.bold
        }
      }}
      longText={{
        text: "Com o",
        text2: " Find",
        text3: "Weather",
        text4: " nunca",
        text5: "ficou tão fácil ter a previsão do\ntempo na palma da sua mão",
        styles2: {
          fontFamily: theme.font.semiBold
        },
        styles3: {
          fontFamily: theme?.font?.bold
        },
        viewProps: {flexDirection: "row", justifyContent: "center"}
      }}
      button={{
        text: "Iniciar",
        props: {
          onPress: () => navigation.navigate("Home")
        }
      }}
    />
  )
}