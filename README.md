# PhoneBook Test
=====================
Prueba Técnica para cursor basada en [Ionic Framework](http://ionicframework.com/)


## Cli packages, global packages, local packages
- @ionic/cli-utils      : 1.19.2
- ionic (Ionic CLI)     : 3.20.0
- cordova (Cordova CLI) : 8.0.0 
- @ionic/app-scripts    : 3.1.10
- Cordova Platforms     : ios 4.5.4
- Ionic Framework       : ionic-angular 3.9.2

## System
- Android SDK Tools : 26.1.1
- ios-deploy        : 1.9.2 
- ios-sim           : 5.0.8 
- Node              : v7.9.0
- npm               : 4.2.0 
- OS                : macOS High Sierra
- Xcode             : Xcode 9.4 Build version 9F1027a

## Paquetes de terceros
- ng2-rut : ^0.2.3

##Caracteristicas
- Buscar usuarios por nombre y/o apellido
- Filtrar por región y comuna
- Ver detalle de cada persona
- Llamadas nativas si el número es válido
- Informa en caso de datos corruptos (Rut, teléfono)
- Diseño basado en la web de cursor
- Iconos y splash basado en cursor


###Screenshots
#### Ios
<img alt="Ios" src="https://github.com/Dema1348/phoneBookTest/raw/master/screen-ios-1.png" width=300 />
#### Android
<img alt="android" src="https://github.com/Dema1348/phoneBookTest/blob/master/screen-android-1.png" width=300 /> | 

##Test 
- Iphone 6s Ios 11.4
- Nexus 5 Android 6.0.1

## Build app Android
1. npm install
2. ionic cordova platform add android
2. ionic cordova platform build android

## Build app Ios
1. npm install
2. ionic cordova platform add ios
2. ionic cordova platform build ios