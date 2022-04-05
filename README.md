# ShieldsIO.Badge.PCF ![GitHub all releases](https://img.shields.io/github/downloads/drivardxrm/ShieldsIO.Badge.PCF/total?style=plastic)
 PowerApps Component framework (PCF) Control to render awesome [shields.io](https://shields.io/) badges in Dataverse Model-driven forms and Canvas Apps
 
 ![PowerApps + shieldsio](https://img.shields.io/badge/PowerApps_%E2%99%A5%EF%B8%8F-Shields.io-404040?style=plastic&labelColor=742774&logo=powerapps&logoColor=null)
 
 * Download latest version here : https://github.com/drivardxrm/ShieldsIO.Badge.PCF/releases/latest

💸 If you like shieldsio, please consider donating : https://opencollective.com/shields

#### Features:

- **Generic** : Can be bound to most of the available Dataverse fields types (see available input types)
- **Portable** : Works in Model-driven apps, Canvas apps, PowerApps portals
- Provide a redirect URL to turn your badge clickable


# Parameters
| Parameter         | Description                                                                                  | Default     |
|-------------------|----------------------------------------------------------------------------------------------|----------   |
| Message  | Main Message of the badge, can be bound to any available field type (see available input types below) |             |
| Show Label  | Show label on the left side of the badge |   false          |
| Custom Label   |  (Optional) Custom label text, if blank the display name of the field will be shown   | |
| Color   | (Optional) Color of the Message 🎨|  |
| Label Color |(Optional) Color of the Label 🎨 |     |
| Style | Style of the Badge (plastic, flat, flat-square, for-the-badge, social) |  plastic   |
| Logo | (Optional) Logo. see https://simpleicons.org/ for available logos |     |
| Logo Color | (Optional) Color of the Logo 🎨 |     |
| Url | (Optional) Redirect to this URL on click of the badge |     |

🎨 For color parmeters :  hex, rgb, rgba, hsl, hsla and css named colors supported

## Available Input types ##
SingleLine.Text  
SingleLine.Email   
SingleLine.Phone   
SingleLine.Ticker  
SingleLine.URL  
SingleLine.TextArea  
Whole.None  
Currency  
FP  
Decimal  
Lookup.Simple  
DateAndTime.DateAndTime  
DateAndTime.DateOnly  
OptionSet  
TwoOptions  
Enum  
Multiple  
MultiSelectOptionSet  

# Screenshots

![shieldsbadge](https://user-images.githubusercontent.com/38399134/159392553-92deca84-ab02-4c70-a2aa-b1fe13901e96.png)


![image](https://user-images.githubusercontent.com/38399134/159392415-8787d133-758b-4720-845f-5e6a694e2169.png)

![image](https://user-images.githubusercontent.com/38399134/159394924-d2bc30fa-14d5-4146-be65-b69495e739b0.png)

![image](https://user-images.githubusercontent.com/38399134/159395186-d531471d-ea00-4621-9dbc-e7f709e7bef8.png)

![2022-04-03 19_27_48-Window](https://user-images.githubusercontent.com/38399134/161654109-990121ba-f5ce-470d-b311-29908f9c42fb.png)

![creds](https://user-images.githubusercontent.com/38399134/161654141-d4d6fbe5-89e5-498e-b0b5-2f483b1a6e32.png)


# Installation
You can install the component directly from solution files contained in the 'Release' section
https://github.com/drivardxrm/Shields.Badge.PCF/releases/latest
