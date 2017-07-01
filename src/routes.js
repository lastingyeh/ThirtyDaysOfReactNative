// day screens
import Day1 from './view/Day1';
import Day2 from './view/Day2';
import Day3 from './view/Day3';
import Day4 from './view/Day4';
import Day5 from './view/Day5';
import Day6 from './view/Day6';
import Day7 from './view/Day7';
import Day8 from './view/Day8';
import Day9 from './view/Day9';

// export const days = [
//   {
//     key: 'Day1',
//     title: 'A stopwatch',
//     component: Day1,
//     isFA: false,
//     icon: 'ios-stopwatch',
//     size: 48,
//     color: '#ff856c',
//     hideNav: false
//   },
//   {
//     key: 'Day2',
//     title: 'A weather app',
//     component: Day2,
//     isFA: false,
//     icon: 'ios-partly-sunny',
//     size: 60,
//     color: '#90bdc1',
//     hideNav: true
//   },
//   {
//     key: 'Day3',
//     title: 'twitter',
//     component: Day3,
//     isFA: false,
//     icon: 'logo-twitter',
//     size: 50,
//     color: '#2aa2ef',
//     hideNav: true
//   }
// ];

export const navigationDays = {
  Day1: {
    screen: Day1,
    navigationOptions: {
      title: 'A stopwatch',
      gesturesEnabled: false
    },
    isFA: false,
    icon: 'ios-stopwatch',
    size: 48,
    color: '#ff856c',
    hideNav: false,
    barStyle: 'default'
  },
  Day2: {
    screen: Day2,
    navigationOptions: {
      title: 'A weather app',
      header: null,
      gesturesEnabled: false
    },
    isFA: false,
    icon: 'ios-partly-sunny',
    size: 60,
    color: '#90bdc1',
    hideNav: true,
    barStyle: 'light-content'
  },
  Day3: {
    screen: Day3,
    navigationOptions: {
      title: 'twitter',
      header: null,
      gesturesEnabled: false
    },
    isFA: false,
    icon: 'logo-twitter',
    size: 50,
    color: '#2aa2ef',
    hideNav: true,
    barStyle: 'default'
  },
  Day4: {
    screen: Day4,
    navigationOptions: {
      title: 'cocoapods',
      gesturesEnabled: false
    },
    isFA: true,
    icon: 'contao',
    size: 50,
    color: '#FF9A05',
    hideNav: false,
    barStyle: 'default'
  },
  Day5: {
    screen: Day5,
    navigationOptions: {
      title: 'find my location',
      header: null,
      gesturesEnabled: false
    },
    isFA: false,
    icon: 'md-pin',
    size: 50,
    color: '#00D204',
    hideNav: true,
    barStyle: 'default'
  },
  Day6: {
    screen: Day6,
    navigationOptions: {
      title: 'Spotify',
      gesturesEnabled: false
    },
    isFA: true,
    icon: 'spotify',
    size: 50,
    color: '#777',
    hideNav: true,
    barStyle: 'default'
  },
  Day7: {
    screen: Day7,
    navigationOptions: {
      title: 'Moveable Circle',
      gesturesEnabled: false
    },
    isFA: false,
    icon: 'ios-baseball',
    size: 50,
    color: '#5e2a06',
    hideNav: true,
    barStyle: 'default'
  },
  Day8: {
    screen: Day8,
    navigationOptions: {
      title: 'Swipe Left Menu',
      gesturesEnabled: false,
      header: null
    },
    isFA: true,
    icon: 'google',
    size: 50,
    color: '#4285f4',
    hideNav: true,
    barStyle: 'default'
  },
  Day9: {
    screen: Day9,
    navigationOptions: {
      title: 'Twitter Parallax View',
      gesturesEnabled: false,
      header: null
    },
    isFA: true,
    icon: 'twitter-square',
    size: 50,
    color: '#2aa2ef',
    hideNav: true,
    barStyle: 'default'
  }
};
