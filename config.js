const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233533812238";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_12_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDY1LFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaURoTTNxMWVrU241MkRuWnhJYVBnWlpFTWNJSG9DOExSVDJ2ZXNSeU0ybz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaDFURmx2aEVSZmVFSG52QkxDMzZUZ1wiLFxuICBcInBob25lSWRcIjogXCJkZmIzYjA4Zi1lMzEyLTRjYmMtODllYS00OGJkMjc3YzM2M2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxMjksXG4gICAgICAyMTIsXG4gICAgICAyNSxcbiAgICAgIDIsXG4gICAgICA1NixcbiAgICAgIDIyNCxcbiAgICAgIDg0LFxuICAgICAgMjQyLFxuICAgICAgODksXG4gICAgICAxOTMsXG4gICAgICAyNDMsXG4gICAgICAxNSxcbiAgICAgIDIxOSxcbiAgICAgIDIwOCxcbiAgICAgIDM4LFxuICAgICAgMjYsXG4gICAgICAyOCxcbiAgICAgIDExNixcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDYwLFxuICAgICAgMjI2LFxuICAgICAgOTgsXG4gICAgICAyMTUsXG4gICAgICAxNjUsXG4gICAgICAxLFxuICAgICAgMjE1LFxuICAgICAgMTk0LFxuICAgICAgMTA0LFxuICAgICAgNjIsXG4gICAgICAyMTQsXG4gICAgICAxOCxcbiAgICAgIDMzLFxuICAgICAgNzQsXG4gICAgICA0NSxcbiAgICAgIDIwNyxcbiAgICAgIDI1MSxcbiAgICAgIDE1MyxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BlRWl3b1FpS0dIdFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMmphemJXR2NpRFA2SzhsRDdSaFdTdXRaeWxRb1ZwNWl6aURkSmljc2dUaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyMHhuUWgxeEtIeGVvUGNpR2wrMVNRRnBZNUlBd2w2Tkt5eHBHckMrdE45UTg4N0NYVEMyS25aNUU0V2swZTFubzFMZUJ3MFg1alV5V2N5VnVpenNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6NDVpOXkyZk5zempmd2FtL1IrZG8wcjJaNUF1Z2pRVmIvMys3ZGdDb3Y0b2NwOHFkS3RjMXdkUXV5Mi9uZU00Y211dzVSU1pSTkxNWENxQXljM2pBUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzMzgxMjIzODoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI0MDI1ODYzMjg2ODQ2OjI0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTMzODEyMjM4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4ODA3MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDQnFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNCcS5qc29uIjogIntcImtleURhdGFcIjpcInJzU3FPNzFadW5aY29XQXNoY1NwaGIzbnQ4S1J3Uk5KdTZLOUNLNUY3N289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExNTIzNzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc3MjUxNDY5NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  ||".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "concious",
  ownername:process.env.OWNER_NAME|| "concious",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
