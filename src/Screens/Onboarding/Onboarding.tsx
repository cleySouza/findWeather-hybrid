import React from "react";
import { Generic } from "../../components/templates";
import { colors } from "../../theme/colors";

export function OnboardingScreen() {
  return(
    <Generic
      containerProps={{
        style: {
          alignItems: "center",
        }
      }}
      image={{source: require('../../assets/images/cloud-and-thunder.png'), }}
      textCenter={{
        text: 'Descubra o Clima\na sua Cidade',
        styles: {
          color: colors?.white,
          fontSize: 33,
          textAlign: "center",
          fontWeight: "600"
        }
      }}
      longText={{
        text: "Com o",
        text2: " Find",
        text3: "Weather",
        text4: " nunca",
        text5: "ficou tão fácil ter a previsão do\ntempo na palma da sua mão",
        styles2: {fontWeight: "600"},
        styles3: {fontWeight: "700"},
        viewProps: {flexDirection: "row", justifyContent: "center"}
      }}
      button={{
        text: "Iniciar"
      }}
    />
  )
}