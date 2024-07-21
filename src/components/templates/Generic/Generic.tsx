import React from "react";
import { View, SafeAreaView } from "react-native";
import { DefaultStyles } from "./styles";
import { AtomButton, AtomImage, AtomText, TextButton } from "../../atoms";
import { IGenericProps } from "./interfaces";
import { TextTypes } from "../../molecules";

export function Generic({
  button, 
  image, 
  textCenter, 
  title, 
  longText, 
  textButton, 
  containerProps
}: IGenericProps) {
  return(
    <SafeAreaView style={[containerProps?.style, DefaultStyles.View]} {...containerProps?.props}>
      {title && (
        <View>
          <AtomText text={title?.text} styles={title?.style}/>
          {title?.text2 && <AtomText text={title?.text2} styles={title?.style2}/>}
        </View>
      )}
      
      {image && <AtomImage prop={image}/> }

      {textCenter && (
        <AtomText 
          text={textCenter?.text} 
          props={textCenter?.props} 
          styles={textCenter?.styles} 
        />
      )}

      {longText && (
        <View
          style={{width: "100%", alignItems: "center"}}
        >
          <TextTypes 
            text={longText?.text}
            text2={longText?.text2}
            text3={longText?.text3}
            text4={longText?.text4}
            stylesText={{
              styles: {...DefaultStyles?.textLong, ...longText?.styles},
              styles2: {...DefaultStyles?.textLong, ...longText?.styles2},
              styles3: {...DefaultStyles?.textLong, ...longText?.styles3},
              styles4: {...DefaultStyles?.textLong, ...longText?.styles4},

            }}
            viewProps={{
              styles: longText?.viewProps
            }}
          />
          <AtomText text={longText?.text5} styles={{...DefaultStyles?.textLong, ...longText?.styles5}}/>
        </View>
      )}

      {button && (
        <View style={{paddingHorizontal: 20, width: "100%"}}>
        <AtomButton 
          buttonProps={button?.props} 
          styles={{
            ...DefaultStyles?.button, 
            ...button?.style
            }}
          >
          <AtomText text={button?.text} />
        </AtomButton>
        </View> 
      )}

      {textButton && (
        <TextButton 
          props={{
            title: textButton.title,
          }} 
        />
      )}
    </SafeAreaView>
  )
}