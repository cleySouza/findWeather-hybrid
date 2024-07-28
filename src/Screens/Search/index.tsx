import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import {Container} from '../../components/molecules';
import {AtomButton, AtomImage, AtomText} from '../../components/atoms';
import {theme} from '../../theme/colors';
import Icon from 'react-native-vector-icons/Octicons';
import IconLocation from 'react-native-vector-icons/MaterialIcons';
import {useSearch} from '../../hooks/Search/useSearch';
import * as url from 'node:url';

export function Search({navigation}: any) {
  const [textInput, setTextInput] = useState('');

  const {setText, data, text} = useSearch();

  function handleSearch() {
    setText(textInput);
  }

  const dataList = data === undefined ? [] : [data];
  console.log(dataList);
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <AtomButton
          styles={{
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: theme?.colors.gray_600,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          buttonProps={{
            onPress: () => navigation.goBack(),
          }}>
          <Icon name="chevron-left" size={25} color={theme?.colors.white} />
        </AtomButton>
        <AtomText text="Busca" styles={{}} />
        <View
          style={{
            width: 40,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: theme?.colors.dark_400,
            padding: 16,
            borderRadius: 10,
            width: '85%',
          }}>
          <Icon name="search" size={19} color={theme?.colors.white} />
          <TextInput
            value={textInput}
            onChangeText={setTextInput}
            placeholder="Digite o nome de uma cidade"
            placeholderTextColor={theme?.colors.gray_200}
            style={{
              color: theme?.colors.white,
              fontSize: 16,
              marginLeft: 20,
            }}
          />
        </View>
        <AtomButton
          buttonProps={{
            onPress: () => handleSearch(),
          }}
          styles={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme?.colors.dark_400,
            padding: 10,
            borderRadius: 10,
          }}>
          <IconLocation
            name="location-on"
            size={29}
            color={theme?.colors.white}
          />
        </AtomButton>
      </View>

      {dataList.length >= 1 && (
        <FlatList
          data={dataList}
          renderItem={({item}) => (
            <View
              style={{
                width: 164,
                backgroundColor: theme.colors.dark_300,
                borderWidth: 1.5,
                borderColor: theme.colors.dark_100,
                borderRadius: 20,
                padding: 10,
                marginTop: 40,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <AtomText
                    text={item?.current?.temp_c}
                    styles={{
                      fontSize: 30,
                      fontFamily: theme.font.bold,
                    }}
                  />
                  <AtomText
                    text="º"
                    styles={{
                      fontSize: 18,
                    }}
                  />
                </View>
                <AtomImage
                  prop={{
                    source: {uri: `https:${item?.current?.condition?.icon}`},
                    resizeMode: 'contain',
                    style: {flex: 1, marginLeft: 25},
                  }}
                />
              </View>
              <AtomText
                text={item?.current?.condition?.text}
                styles={{
                  color: theme.colors.gray_100,
                  fontSize: 18,
                  marginBottom: 10,
                }}
              />

              <AtomText text={item?.location?.name} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </Container>
  );
}
