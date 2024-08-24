# Welcome to your Expo app 👋

This app is an assignment for a senior mobile developer using React native, I implemented an architecture that should be closer to a real-world application

# Lets take a quick walk throw the file structure 


    .
    ├── api             # this handles the API requests, in our case I used Axios but in future we can add more middleware like GraphQL for example
    │   ├── axios       # exports the axios instance with the custom configrations for the requests and response 
    │   ├── index       # Export the general 'callAPI' function which serves as an abstraction layer so we can chnge axios any time and by simply change this function or add more options to it
    │   ├── types       # Contains the types that are required for this folder
    ├── services        # This folder have the Api calls that need for each app module its an abstraction over the API layer 
    │   ├── CommentsService
    │   ├── PostsService  
    │   └── ...
    ├── hooks           # 
    │   ├── useColorScheme     # Export 'useColorScheme' from 'react-native' for potential future changes and improved web compatibility.
    │   ├── useColorScheme.web #  he default React Native styling doesn't support server rendering, so this file for webview 
    │   ├── useComments        # This hook handles the logic for the "CommentsContext", Utilizing @tanstack/react-query to handle data fetching status.
    │   ├── usePosts           # This hook handles the logic for the "PostsContext", Utilizing @tanstack/react-query to handle data fetching status 
    │   ├── useThemeColor      # 
    │   └── ...
    ├── app             # 
    │   ├── (posts)     # 
    │   │   ├── _layout # 
    │   │   ├── [postId]# 
    │   │   └── index   # 
    │   ├── _layout     # 
    │   └── ...
    ├── ...     
    ├── constants       # 
    │   ├── (posts)     # 
    │   ├── (posts)     #  
    │   └── ...

    ├── hooks           # 
    │   ├── (posts)     # 
    │   ├── (posts)     #  
    │   └── ...
    └── ...
    ├── .env           # Tools and utilities
    ├── Env.ts
    └── Env.d.ts




---
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
