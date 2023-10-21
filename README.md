Appium Tests for Android and iOS App

Install Android SDK Tools - Through Android Studio UI/ Command Line

Set below in zsh profile

run command in terminal ```nano $HOME/.zshrc```

***Must include next lines:***

```export PATH=$PATH:~/Library/Android/sdk/platform-tools```
```export ANDROID_HOME=~/Library/Android/sdk```
```export PATH="$HOME/.bin:$PATH"```
```export PATH="~/Library/Android/sdk/platform-tools":$PATH```

Setup Xcode with desired Simulator and run ```npm run iosApp```

Setup Android Studio and run ```npm run androidApp```
