# React Native core
-keep class com.facebook.react.** { *; }

# Keep all ViewManagers
-keep class * extends com.facebook.react.uimanager.ViewManager { *; }

# Expo modules
-keep class expo.modules.** { *; }

# Gesture Handler
-keep class com.swmansion.** { *; }

# Reanimated (if used)
-keep class com.facebook.react.uimanager.ViewManagerDelegate { *; }
-keep class com.facebook.react.uimanager.ViewManagerPropertyUpdater { *; }

# Custom ViewManagers (add if you use any)
-keep class expo.modules.lineargradient.LinearGradientViewManager { *; }
