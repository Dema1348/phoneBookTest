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

##Caracteristicas
- Buscar usuarios por nombre y/o apellido
- Filtrar por región y comuna
- Ver detalle de cada persona
- Llamadas nativas si el número es válido
- Informa en caso de datos corruptos (Rut, teléfono)
- Diseño basado en la web de cursor
- Iconos y splash basado en cursor


###Screenshots
![Alt text](screenshot0.png)
![Alt text](screenshot1.png)

###Demo
[Demo apk](https://drive.google.com/file/d/0BwwgQHARYYdiSWNCNnJrRHVtVGM/view?usp=sharing)

## Getting Started

### Configure Firebase

0. Go to your [Firebase Dashboard](https://www.firebase.com/account/) and create a new Firebase app.
1. Edit [`constants.js`](www/vendor/core/constants.js) and change the value of `FBURL` to point to your Firebase.


### Configure Cloudinary

0. Go to your [Cloudinary Settings](https://cloudinary.com/console/settings/upload) and add uploading preset unsigned.
1. Edit [`constants.js`](www/vendor/core/constants.js) and change the value of `CLOUDINARY_URI` with your api upload .
2. Edit [`constants.js`](www/vendor/core/constants.js) and change `CLOUDINARY_UPLOAD_PRESET` with your upload preset.


**Install Ionic**

If you haven't installed Ionic already, follow the instructions [here](http://ionicframework.com/getting-started/).



**Add your platforms**

    $ ionic platform add android
    
**Add Cordova plugins**

    $ cordova plugin add cordova-plugin-file
    $ cordova plugin add cordova-plugin-file-transfer
    $ cordova plugin add cordova-plugin-camera
    $ cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
    $ cordova plugin add https://github.com/apache/cordova-plugin-whitelist.git

**Run the app with Ionic**

    $ ionic build android
    $ ionic emulate android 

## Data Structure Example

	$ {
	$	"countGlobal":{
	$		"count":2
	$	},
	$	"posts" :{
	$		"b":{
	$			"-KAhQ63u6mRWHAEEo4fn":{
	$				"count": 1,
	$				"img": "h9prm8koyto9xz4vw48p",
	$				"imgBytes": "97523",
	$				"imgFormat":"jpg",
	$				"num":1,
	$				"time":1455682253418
	$			}
	$		}
	$	},
	$	"comment":{
	$		"b":{
	$			"-KAhQ63u6mRWHAEEo4fn":{
	$				"-KAhRhE5yuUkCdWBf2qe":{
	$					"count": 1,
	$					"num":1,
	$					"time":1455682253418,
	$					text: ">>1\nDude"
 	$
	$				}
	$			}
	$		}
	$	}
	$
	$  }


## Help
Contact via email at eds.perez@outlook.com 