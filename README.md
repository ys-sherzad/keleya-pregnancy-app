# Keleya pregnancy app onboarding

**Installation**

Clone the repo
```
git clone https://github.com/ys-sherzad/keleya-pregnancy-app.git
```
On your project directory

```
yarn install
or
npm run install
```
Install pods for iOS
```
npx pod-install
```
Run the app
```
yarn ios
or
yarn android
```

Feel free to create an issue if you face any problems running the project.


**Comments**

I really enjoyed working on this task, full of challenges and dealing with Header Images was a bit tricky. I wish I had more time to improve on UI and UX and also:

* improve on the DatePicker. the `@react-native-community/datetimepicker` seems to be problematic in styling the text for both platforms,
* improve the Workout screen `Picker` items to be responsive on tablets and ipads,
* fix workout option selected button on android,
* improve upon `scale.ts` helper functions or perhaps use alternative libraries to handle responsiveness on tablets and ipads,
* Write unit tests and finish up e2e tests with screenshots,
* Prevent going back on the `Success` screen,
* add subtle animations to the elements on screen load.
