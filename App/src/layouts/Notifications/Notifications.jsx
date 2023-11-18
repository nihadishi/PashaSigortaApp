import {View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {styles} from './style';
import {useMenuNotificationContext} from '../../assets/contexts/MenuNotificationContext';

const Notifications = () => {
  const {menuIsOpen, setmenuIsOpen, notificationIsOpen, setnotificationIsOpen} =
    useMenuNotificationContext();
  return (
    notificationIsOpen && (
      <View style={styles.main}>
        <Animatable.View
          animation={notificationIsOpen ? 'slideInRight' : 'slideOutRight'}
          duration={150}
          style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Notifications</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
            <View style={styles.item}>
              <Image
                source={require('./img/notification_main.png')}
                style={styles.itemNeedy}
              />
              <View style={styles.texts}>
                <Text style={styles.name}>OJSC Pasha Bank</Text>
                <Text style={styles.description}>
                  We encourage applicants from diverse backgrounds and
                  underrepresented groups and would invite you to apply. A
                  diverse workforce is a highly productive one.
                </Text>
                <Text style={styles.time}>10:44</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./img/notification_main.png')}
                style={styles.itemNeedy}
              />
              <View style={styles.texts}>
                <Text style={styles.name}>OJSC Pasha Bank</Text>
                <Text style={styles.description}>
                  We encourage applicants from diverse backgrounds and
                  underrepresented groups and would invite you to apply. A
                  diverse workforce is a highly productive one.
                </Text>
                <Text style={styles.time}>10:56</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./img/notification_main.png')}
                style={styles.itemNeedy}
              />
              <View style={styles.texts}>
                <Text style={styles.name}>OJSC Pasha Bank</Text>
                <Text style={styles.description}>
                  We encourage applicants from diverse backgrounds and
                  underrepresented groups and would invite you to apply. A
                  diverse workforce is a highly productive one.
                </Text>
                <Text style={styles.time}>21:44</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./img/notification_main.png')}
                style={styles.itemNeedy}
              />
              <View style={styles.texts}>
                <Text style={styles.name}>OJSC Pasha Bank</Text>
                <Text style={styles.description}>
                  We encourage applicants from diverse backgrounds and
                  underrepresented groups and would invite you to apply. A
                  diverse workforce is a highly productive one.
                </Text>
                <Text style={styles.time}>12:34</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./img/notification_main.png')}
                style={styles.itemNeedy}
              />
              <View style={styles.texts}>
                <Text style={styles.name}>OJSC Pasha Bank</Text>
                <Text style={styles.description}>
                  We encourage applicants from diverse backgrounds and
                  underrepresented groups and would invite you to apply. A
                  diverse workforce is a highly productive one.
                </Text>
                <Text style={styles.time}>10:54</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./img/notification_main.png')}
                style={styles.itemNeedy}
              />
              <View style={styles.texts}>
                <Text style={styles.name}>OJSC Pasha Bank</Text>
                <Text style={styles.description}>
                  We encourage applicants from diverse backgrounds and
                  underrepresented groups and would invite you to apply. A
                  diverse workforce is a highly productive one.
                </Text>
                <Text style={styles.time}>14:26</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./img/notification_main.png')}
                style={styles.itemNeedy}
              />
              <View style={styles.texts}>
                <Text style={styles.name}>OJSC Pasha Bank</Text>
                <Text style={styles.description}>
                  We encourage applicants from diverse backgrounds and
                  underrepresented groups and would invite you to apply. A
                  diverse workforce is a highly productive one.
                </Text>
                <Text style={styles.time}>23:52</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./img/notification_main.png')}
                style={styles.itemNeedy}
              />
              <View style={styles.texts}>
                <Text style={styles.name}>OJSC Pasha Bank</Text>
                <Text style={styles.description}>
                  We encourage applicants from diverse backgrounds and
                  underrepresented groups and would invite you to apply. A
                  diverse workforce is a highly productive one.
                </Text>
                <Text style={styles.time}>06:42</Text>
              </View>
            </View>
          </ScrollView>
        </Animatable.View>
        <TouchableHighlight
          style={styles.outContainer}
          underlayColor="transparent"
          onPress={() => {
            setnotificationIsOpen(false);
          }}>
          <View></View>
        </TouchableHighlight>
      </View>
    )
  );
};

export default Notifications;
