# README #

# Note:  We are using yarn for this project #

## Running the app on iPhone simulator
1. yarn install
2. cd ios
3. pod install
4. cd ..
5. react-native run-ios 
      or
 yarn run ios

 ## Running the app on Android
1. yarn install
2. create a file called local.properties in android folder and paste your android sdk dir path. ex:=  sdk.dir = /Users/username/Library/Android/sdk
5. react-native run-android 
      or
 yarn run android

 ## Generating the android apk
1. yarn install 
2. react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
3. rm -rf android/app/src/main/res/drawable-*
4. rm -rf android/app/src/main/res/raw
5. cd android
6. ./gradlew assembleRelease