// day screens
import Day1 from './view/Day1';
import Day2 from './view/Day2';
import Day3 from './view/Day3';
import Day4 from './view/Day4';
import Day5 from './view/Day5';
import Day6 from './view/Day6';

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
    navigationOptions: { title: 'A stopwatch' },
    isFA: false,
    icon: 'ios-stopwatch',
    size: 48,
    color: '#ff856c',
    hideNav: false,
    barStyle: 'default'
  },
  Day2: {
    screen: Day2,
    navigationOptions: { title: 'A weather app', header: null },
    isFA: false,
    icon: 'ios-partly-sunny',
    size: 60,
    color: '#90bdc1',
    hideNav: true,
    barStyle: 'light-content'
  },
  Day3: {
    screen: Day3,
    navigationOptions: { title: 'twitter', header: null },
    isFA: false,
    icon: 'logo-twitter',
    size: 50,
    color: '#2aa2ef',
    hideNav: true,
    barStyle: 'default'
  },
  Day4: {
    screen: Day4,
    navigationOptions: { title: 'cocoapods' },
    isFA: true,
    icon: 'contao',
    size: 50,
    color: '#FF9A05',
    hideNav: false,
    barStyle: 'default'
  },
  Day5: {
    screen: Day5,
    navigationOptions: { title: 'find my location' },
    isFA: false,
    icon: 'md-pin',
    size: 50,
    color: '#00D204',
    hideNav: true,
    barStyle: 'default'
  },
  Day6: {
    screen: Day6,
    navigationOptions: { title: 'Spotify' },
    isFA: true,
    icon: 'spotify',
    size: 50,
    color: '#777',
    hideNav: true,
    barStyle: 'default'
  }
};
