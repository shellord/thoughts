import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native-size-scaling';
import tw from '~/lib/tailwind';
import LinearGradient from 'react-native-linear-gradient';
import ActivityFeedScreen from '~/screens/activity-feed/ActivityFeedScreen';
import ProfileScreen from '~/screens/profile/ProfileScreen';
import SearchScreen from '~/screens/search/SearchScreen';
import NotificationScreen from '~/screens/notifications/NotificationScreen';

const BottomTabBar = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'ActivityFeed':
        icon = 'ios-home-outline';
        break;
      case 'Profile':
        icon = 'ios-person-outline';
        break;
      case 'Search':
        icon = 'ios-search-outline';
        break;
      case 'Notification':
        icon = 'ios-notifications-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={23}
        color={routeName === selectedTab ? '#ED5096' : 'gray'}
      />
    );
  };

  return (
    <View style={tw`flex-1`}>
      <CurvedBottomBar.Navigator
        type={'DOWN'}
        height={60}
        circleWidth={55}
        bgColor="#2A2A2A"
        borderTopLeftRight={true}
        strokeWidth={2}
        strokeColor="#2A2A2A"
        initialRouteName="title1"
        screenOptions={{
          headerShown: false,
        }}
        renderCircle={() => (
          <TouchableOpacity>
            <LinearGradient
              colors={['#ED5096', '#B766D5']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={styles.btnCircle}>
              <Feather name="plus" size={23} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        )}
        tabBar={({routeName, selectedTab, navigate}) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(routeName)}
              style={tw`flex-1 justify-center items-center`}>
              {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
          );
        }}>
        <CurvedBottomBar.Screen
          name="ActivityFeed"
          position="LEFT"
          //@ts-ignore
          component={ActivityFeedScreen}
        />
        <CurvedBottomBar.Screen
          name="Search"
          position="LEFT"
          //@ts-ignore
          component={SearchScreen}
        />
        <CurvedBottomBar.Screen
          name="Notification"
          //@ts-ignore
          component={NotificationScreen}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="Profile"
          //@ts-ignore
          component={ProfileScreen}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

const RootStack = () => {
  return <BottomTabBar />;
};

export default RootStack;

const styles = StyleSheet.create({
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4c1d95',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6',
  },
  img: {
    width: 30,
    height: 30,
  },
});
