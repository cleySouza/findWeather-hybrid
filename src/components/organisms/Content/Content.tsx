import {View} from 'react-native';
import {Container} from '../../molecules';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../../theme/colors';
import {AtomButton, AtomImage, AtomText} from '../../atoms';

export function Content() {
  return (
    <Container
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Icon name="location-on" size={18} color={theme?.colors.white} />
        <View style={{}}>
          <AtomText
            text="A Coruna, Espanha"
            styles={{
              color: theme?.colors.white,
              fontSize: 18,
            }}
          />
          <AtomText
            text="Domingo, 01 Jan de 2023"
            styles={{
              color: theme?.colors.gray_100,
              fontSize: 16,
            }}
          />
        </View>
      </View>
      <AtomImage
        prop={{
          source: require('../../../assets/images/raining3.png'),
          resizeMode: 'contain',
          style: {
            width: 172,
            height: 140,
            marginTop: 40,
          },
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <AtomText
          text="23"
          styles={{
            fontSize: 76,
            fontFamily: theme.font.bold,
          }}
        />
        <AtomText
          text="º"
          styles={{
            fontSize: 30,
            // marginTop: 10,
          }}
        />
      </View>
      <AtomText
        text="Chuva Moderada"
        styles={{
          color: theme.colors.gray_100,
          fontSize: 30,
        }}
      />

      <View
        style={{
          width: '100%',
          borderRadius: 18,
          borderWidth: 1,
          borderColor: theme.colors.gray_600,
          padding: 6,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: 40,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <AtomImage
            prop={{
              source: require('../../../assets/images/drop-miniature.png'),
              resizeMode: 'contain',
              style: {
                width: 20,
                height: 20,
              },
            }}
          />
          <AtomText
            text="24%"
            styles={{
              fontFamily: theme.font.bold,
              fontSize: 16,
            }}
          />
          <AtomText
            text="Umidade"
            styles={{
              fontFamily: theme.font.light,
              fontSize: 16,
              color: theme.colors.gray_400,
            }}
          />
        </View>

        <View
          style={{
            width: 1,
            height: 36,
            backgroundColor: theme.colors.gray_600,
          }}
        />

        <View
          style={{
            alignItems: 'center',
          }}>
          <AtomImage
            prop={{
              source: require('../../../assets/images/drop-miniature.png'),
              resizeMode: 'contain',
              style: {
                width: 20,
                height: 20,
              },
            }}
          />
          <AtomText
            text="24%"
            styles={{
              fontFamily: theme.font.bold,
              fontSize: 16,
            }}
          />
          <AtomText
            text="Umidade"
            styles={{
              fontFamily: theme.font.light,
              fontSize: 16,
              color: theme.colors.gray_400,
            }}
          />
        </View>

        <View
          style={{
            width: 1,
            height: 36,
            backgroundColor: theme.colors.gray_600,
          }}
        />

        <View
          style={{
            alignItems: 'center',
          }}>
          <AtomImage
            prop={{
              source: require('../../../assets/images/drop-miniature.png'),
              resizeMode: 'contain',
              style: {
                width: 20,
                height: 20,
              },
            }}
          />
          <AtomText
            text="24%"
            styles={{
              fontFamily: theme.font.bold,
              fontSize: 16,
            }}
          />
          <AtomText
            text="Umidade"
            styles={{
              fontFamily: theme.font.light,
              fontSize: 16,
              color: theme.colors.gray_400,
            }}
          />
        </View>
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
        }}>
        <AtomText
          text="Hoje"
          styles={{
            fontSize: 16,
          }}
        />

        <AtomButton
          styles={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AtomText
            text="Próximos 5 dias"
            styles={{
              fontFamily: theme.font.medium,
              fontSize: 16,
              color: theme.colors.gray_100,
            }}
          />
          <Icon name="chevron-right" size={20} color={theme.colors.gray_100} />
        </AtomButton>
      </View>

      <View
        style={{
          marginTop: 30,
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            backgroundColor: theme.colors.dark_300,
            borderColor: theme.colors.dark_100,
            borderWidth: 1.5,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            alignItems: 'center',
            width: 70,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AtomText
              text="23"
              styles={{
                fontFamily: theme.font.bold,
                fontSize: 18,
              }}
            />
            <AtomText
              text="º"
              styles={{
                fontSize: 12,
                color: theme.colors.gray_100,
              }}
            />
          </View>
          <AtomImage
            prop={{
              source: require('../../../assets/images/image1.png'),
              resizeMode: 'contain',
              style: {
                width: 30,
                height: 30,
                marginBottom: 10,
                marginTop: 2,
              },
            }}
          />
          <AtomText
            text="09:00"
            styles={{
              color: theme?.colors?.gray_100,
              fontFamily: theme?.font?.bold,
              fontSize: 12,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: theme.colors.dark_300,
            borderColor: theme.colors.dark_100,
            borderWidth: 1.5,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            alignItems: 'center',
            width: 70,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AtomText
              text="18"
              styles={{
                fontFamily: theme.font.bold,
                fontSize: 18,
              }}
            />
            <AtomText
              text="º"
              styles={{
                fontSize: 12,
                color: theme.colors.gray_100,
              }}
            />
          </View>
          <AtomImage
            prop={{
              source: require('../../../assets/images/image6.png'),
              resizeMode: 'contain',
              style: {
                width: 30,
                height: 30,
                marginBottom: 10,
                marginTop: 2,
              },
            }}
          />
          <AtomText
            text="13:00"
            styles={{
              color: theme?.colors?.gray_100,
              fontFamily: theme?.font?.bold,
              fontSize: 12,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: theme.colors.dark_300,
            borderColor: theme.colors.dark_100,
            borderWidth: 1.5,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            alignItems: 'center',
            width: 70,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AtomText
              text="8"
              styles={{
                fontFamily: theme.font.bold,
                fontSize: 18,
              }}
            />
            <AtomText
              text="º"
              styles={{
                fontSize: 12,
                color: theme.colors.gray_100,
              }}
            />
          </View>
          <AtomImage
            prop={{
              source: require('../../../assets/images/image5.png'),
              resizeMode: 'contain',
              style: {
                width: 30,
                height: 30,
                marginBottom: 10,
                marginTop: 2,
              },
            }}
          />
          <AtomText
            text="17:00"
            styles={{
              color: theme?.colors?.gray_100,
              fontFamily: theme?.font?.bold,
              fontSize: 12,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: theme.colors.dark_300,
            borderColor: theme.colors.dark_100,
            borderWidth: 1.5,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            alignItems: 'center',
            width: 70,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AtomText
              text="28"
              styles={{
                fontFamily: theme.font.bold,
                fontSize: 18,
              }}
            />
            <AtomText
              text="º"
              styles={{
                fontSize: 12,
                color: theme.colors.gray_100,
              }}
            />
          </View>
          <AtomImage
            prop={{
              source: require('../../../assets/images/image4.png'),
              resizeMode: 'contain',
              style: {
                width: 30,
                height: 30,
                marginBottom: 10,
                marginTop: 2,
              },
            }}
          />
          <AtomText
            text="23:00"
            styles={{
              color: theme?.colors?.gray_100,
              fontFamily: theme?.font?.bold,
              fontSize: 12,
            }}
          />
        </View>
      </View>
    </Container>
  );
}
