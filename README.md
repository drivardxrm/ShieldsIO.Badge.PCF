# Shields.Badge.PCF ![GitHub all releases](https://img.shields.io/github/downloads/drivardxrm/ShieldsIO.Badge.PCF/total?style=plastic)
 PowerApps Component framework (PCF) Control to render awesome [shields.io](https://shields.io/) badges in Dataverse Model-driven forms and Canvas Apps
 
 ![PowerApps + shieldsio](https://img.shields.io/badge/PowerApps_%E2%99%A5%EF%B8%8F-Shields.io-404040?style=plastic&labelColor=742774&logo=powerapps&logoColor=null)
 
 * Download latest version here : https://github.com/drivardxrm/ShieldsIO.Badge.PCF/releases/latest

💸 If you like shieldsio, please consider donating : https://opencollective.com/shields

#### Features:

- **Generic** : Can be bound to most of the available ![Dataverse](https://img.shields.io/badge/-Dataverse-brightgreen?style=plastic&labelColor=null&logo=powerapps&logoColor=white) fields types (see available input types)
- **Portable** : Works in Model-driven apps, Canvas apps, PowerApps portals
- Provide a redirect URL to turn your badge clickable


# Parameters
| Parameter         | Description                                                                                  | Default     |
|-------------------|----------------------------------------------------------------------------------------------|----------   |
| message  | Main Message of the badge, can be bound to any available field type (see available input types below) |             |
| showLabel  | Show label on the left side of the badge |   false          |
| customlabel   |  (Optional) Custom label text, if blank the display name of the field will be shown   | |
| color   | (Optional) Color of the Message, see https://shields.io/ for available colors|  |
| labelcolor | (Optional) Color of the Message, see https://shields.io/ for available colors |     |
| style | Style of the Badge, see https://shields.io/ for available styles |     |
| logo | (Optional) Logo. see https://simpleicons.org/ for available logos |     |
| logocolor | (Optional) Logo Color. see https://shields.io/ for available colors |     |
| url | (Optional) Redirect to this URL on click of the badge |     |



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


# Installation
You can install the component directly from solution files contained in the 'Release' section
https://github.com/drivardxrm/Shields.Badge.PCF/releases/latest
