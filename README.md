# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

## How to create app from zero:

create .env file and provide

```bash
RAPID_API_KEY="b12698aa05msh1b1c114cdafef16p1d6d07jsn532e1b219402"
```

```bash
npx create-expo-app@latest --example with-router ./
npm i expo-font axios react-native-dotenv
```

`npm start` doesn't work. Use expo-cli instead:

```bash
npm i -g expo-cli
expo-cli start --tunnel
```
