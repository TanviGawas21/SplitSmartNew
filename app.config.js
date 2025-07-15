export default {
  expo: {
    name: "SplitSmart",
    slug: "splitsmart-app",
    version: "1.21.27",
    orientation: "portrait",
    icon: "./assets/images/GooglePlayStore.png",
    scheme: "splitsmart",
    userInterfaceStyle: "automatic",

   

    assetBundlePatterns: ["**/*"],

    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.splitsmart.app",
      buildNumber: "1.0.0"
    },

    android: {
      compileSdkVersion: 35,
      targetSdkVersion: 35,
      minSdkVersion: 21,
      adaptiveIcon: {
        foregroundImage: "./assets/images/GooglePlayStore.png",
        backgroundColor: "#3b82f6"
      },
      package: "com.splitsmart.app",
      versionCode: 21,
      permissions: [
        "android.permission.INTERNET",
        "android.permission.ACCESS_NETWORK_STATE"
      ],
      
      proguardConfig: "./proguard-rules.pro"
    },

    web: {
      favicon: "./assets/images/favicon.png",
      bundler: "metro"
    },

    plugins: [
      "expo-router",
      "expo-font",
      "expo-web-browser",
    
  
    
      
    ],

    experiments: {
      typedRoutes: true
    },

    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: "a726039e-4ad0-4dc2-8f35-d5a2b2e69ec4"
      }
    }
  }
};
