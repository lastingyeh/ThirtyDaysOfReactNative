## Exercise for ThirtyDaysOfReactNative demo

### project structure

    src/
  
      index.js (entry application)
      
      route.js (mainView(from components),day1,day2,day3,...,day30)

      utile.js (device size,api,and others for common functions)

    src/view/

      Day1/index.js 

      Day2/index.js

      Day3/index.js

      Day4/index.js

      Day5/index.js

      Day6/index.js

### Modify

    2.1 'navigator' replaced with react-navigation

    2.2 adjust styles to meet android && ios devices (now just for emulator(Nex6,iPhone 6s))

    2.3 divide into js files from single js file

    2.4 correct navigation action behaviour

### demo

    3.1 MainView

  ![alt tag](https://github.com/lastingyeh/ThirtyDaysOfReactNative/blob/master/demo/mainView.gif)

    3.2 Day1

  ![alt tag](https://github.com/lastingyeh/ThirtyDaysOfReactNative/blob/master/demo/Day1.gif)

    3.3 Day2 

  ![alt tag](https://github.com/lastingyeh/ThirtyDaysOfReactNative/blob/master/demo/Day2.gif)

    3.4 Day3

  ![alt tag](https://github.com/lastingyeh/ThirtyDaysOfReactNative/blob/master/demo/Day3.gif)

    3.5 Day4

    To be update

    3.6 Day5

    ##### step for map setup

      3.6.1 npm i --save react-native-maps 

      3.6.2 import MapView from 'react-native-maps'

      3.6.3 rnpm link

      3.6.4 for android use

        3.6.4.1 apply for Android key - 
        
                get API_KEY from https://developers.google.com/maps/documentation/android-api/signup

        3.6.4.2 Added API Key in android/app/src/main/AndroidManifest.xml

                <meta-data
                  android:name="com.google.android.geo.API_KEY"
                  android:value="your-api-key"/>

        3.6.4.3 android/app/src/main/java/com/thirtydaysofreactnative/MainApplication.
        
                import com.airbnb.android.react.maps.MapsPackage;

                @Override
                protected List<ReactPackage> getPackages() {
                  return Arrays.<ReactPackage>asList(
                      new MapsPackage(),
                      new MainReactPackage()
                  );
                }

  ![alt tag](https://github.com/lastingyeh/ThirtyDaysOfReactNative/blob/master/demo/Day5.gif)

    3.7 Day6

    To be update

    3.8 Day7 

  ![alt tag](https://github.com/lastingyeh/ThirtyDaysOfReactNative/blob/master/demo/Day7.gif)

    3.9 Day8

    #### update list
    
    3.9.1 use DrawerNavigator instead of original View

    3.9.2 menu items includes Day1,Day2,Day3,Day5

  ![alt tag](https://github.com/lastingyeh/ThirtyDaysOfReactNative/blob/master/demo/Day8.gif)

    3.10 Day9

    #### update list *see Day9/modify

    3.9.1 BasicParallaxView instead of ScrollView and PanResponder respond

      3.9.1.1 use react-native-parallax-scroll-view

      3.9.1.2 add refreshControl
    
    3.9.2 use ListView 

      3.9.2.1 add item 

      3.9.2.2 scroll to targetScorll positioin

    3.9.3 use self-make 'SegmentControl' to use in cross-platform

    3.9.4 at ios platform, add self-make 'FloatBackButton' to get back

    3.9.5 issues waits to resolve 'as scroll to top stickyHeader,it can't fixed the listview header..

  ![alt tag](https://github.com/lastingyeh/ThirtyDaysOfReactNative/blob/master/demo/Day9.gif)

    
### refs by and thanks

    https://github.com/fangwei716/30-days-of-react-native