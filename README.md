# Welcome to your Expo app 👋

This app is an assignment for a senior mobile developer using React native, I implemented an architecture that should be closer to a real-world application

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



# Lets take a quick walk throw the file structure 

* [env.d.ts](.\news-app\env.d.ts) => Declare types for env variables
* [Env.ts](.\news-app\Env.ts) => Returns variables from [.env](.\news-app\.env) file
* [.env](.\news-app\.env) => Contans enviroment secrets like base URL and api keys ...etc. I upladed it to get just for the sake of assignment testing
* [api/](.\news-app\api) => this handles the API requests, in our case I used Axios but in future we can add more middleware like GraphQL for example
  * [axios.ts](.\news-app\api\axios.ts) => exports the axios instance with the custom configrations for the requests and response 
  * [index.ts](.\news-app\api\index.ts) => Export the general 'callAPI' function which serves as an abstraction layer so we can chnge axios any time and by simply change this function or add more options to it
  * [types.ts](.\news-app\api\types.ts) => Contains the types that are required for this folder

* [services/](.\news-app\services) => Contains all API calls
  * [CommentsService.ts](.\news-app\services\CommentsService.ts) => Contains all API calls for the comments
  * [PostsService.ts](.\news-app\services\PostsService.ts) => Contains all API calls for the Posts
  
* [hooks/](.\news-app\hooks) => Consider this Folder contains the main logic for the app.
  * [useColorScheme.ts](.\news-app\hooks\useColorScheme.ts) => Export 'useColorScheme' from 'react-native' for potential future changes and improved web compatibility.
  * [useColorScheme.web.ts](.\news-app\hooks\useColorScheme.web.ts) => he default React Native styling doesn't support server rendering, so this file for webview 
  * [useComments.ts](.\news-app\hooks\useComments.ts) => This hook handles the logic for the "CommentsContext", Utilizing @tanstack/react-query to handle data fetching status.
  * [usePosts.ts](.\news-app\hooks\usePosts.ts) => This hook handles the logic for the "PostsContext", Utilizing @tanstack/react-query to handle data fetching status 
  * [useThemeColor.ts](.\news-app\hooks\useThemeColor.ts) => This hook handles the logic for the "ThemeProvider"

* [app/](.\news-app\app) => The Core folder that contains all the app screens
  * [(posts)/](.\news-app\app\(posts)) => Structural folder that files all posts screens
    * [index.tsx](.\news-app\app\\(posts)\\index.tsx) => Render List of Posts which gets its data from postsContext
    * [[postId].tsx](.\news-app\app\\(posts)\\[postId].tsx) => Render post detals and list of Comments which gets its data from commentsContext
    * [_layout.tsx](.\news-app\app\\(posts)\\_layout.tsx) => Provides the data for Posts Context and handle general layout for posts
  * [+html.tsx](.\news-app\app\+html.tsx)
  * [+not-found.tsx](.\news-app\app\+not-found.tsx) => In case of redirect to any wrong page this will be the fallback page
  * [_layout.tsx](.\news-app\app\_layout.tsx) => Contains the providers for theme and react-query client.
* [components/](.\news-app\components) => Any reusable components will be here, and any sections should have it's own folder
  * [Collapsible.tsx](.\news-app\components\Collapsible.tsx) => 
  * [EmptyState.tsx](.\news-app\components\EmptyState.tsx) => Renders in case any list is empty
  * [HelloWave.tsx](.\news-app\components\HelloWave.tsx) => Handle Animation in pull to refresh
  * [ParallaxScrollView.tsx](.\news-app\components\ParallaxScrollView.tsx) => Give palext effect on scroll
  * [posts](.\news-app\components\posts) => Components used in posts screens
    * [PostCard.tsx](.\news-app\components\posts/PostCard.tsx) => 
    * [PostComment.tsx](.\news-app\components\posts/PostComment.tsx) => 
    * [PostUser.tsx](.\news-app\components\posts/PostUser.tsx) => Handle post User data fetching by using post ID
  * [ThemedText.tsx](.\news-app\components\ThemedText.tsx) => Extends Text component to apply theme styles with extra options
  * [ThemedView.tsx](.\news-app\components\ThemedView.tsx) => Extends View component to apply theme styles with extra options
* [constants/](.\news-app\constants) => Make our life easier when we decide to change things in the future
  * [Colors.ts](.\news-app\constants\Colors.ts) => Conatins all colors for both light and dark themes.
  * [Image.ts](.\news-app\constants\Image.ts) => Exports all images url as objects

* [types/](.\news-app\types) All systems modules will declare its types here 
  * [comments.ts](.\news-app\types\comments.ts)
  * [posts.ts](.\news-app\types\posts.ts)
  * [user.ts](.\news-app\types\user.ts)


  
* [assets/](.\news-app\assets)

  * [fonts/](.\news-app\assets\fonts)
    * [SpaceMono-Regular.ttf](.\news-app\assets\fonts\SpaceMono-Regular.ttf)
    * other Fonts...

  * [images/](.\news-app\assets\images)
    * [adaptive-icon.png](.\news-app\assets\images\adaptive-icon.png)
    * [favicon.png](.\news-app\assets\images\favicon.png)
    * [icon.png](.\news-app\assets\images\icon.png)
    * [smallLogo.png](.\news-app\assets\images\smallLogo.png)
    * [largeLogoWhite.png](.\news-app\assets\images\largeLogoWhite.png)
    * [largeLogo.png](.\news-app\assets\images\largeLogo.png)

* [scripts/](.\news-app\scripts)
  * [reset-project.js](.\news-app\scripts\reset-project.js)


* [.gitignore](.\news-app\.gitignore)
* [app.json](.\news-app\app.json)
* [babel.config.js](.\news-app\babel.config.js)
* [expo-env.d.ts](.\news-app\expo-env.d.ts)
* [package-lock.json](.\news-app\package-lock.json)
* [package.json](.\news-app\package.json)
* [README.md](.\news-app\README.md)
* [tsconfig.json](.\news-app\tsconfig.json)

-----------------





---

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
