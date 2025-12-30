const filesystem = 
{
    "root":{
        "id": "root",
        "type": "directory",
        "children": {
            "A:": {
                "id": "A:",
                "type": "directory",
                "tags": ["floppy","removable"],
                "children": {
                    "DISK1.IMG": { "id": "A:/DISK1.IMG", "type": "file", "tags": ["image","floppy"], "content": "Floppy image - audio-disk" },
                    "README.TXT": { "id": "A:/README.TXT", "type": "file", "tags": ["note"], "content": "Floppy: do not remove while copying." }
                }
            },
            "B:": {
                "id": "B:",
                "type": "directory",
                "tags": ["floppy","empty"],
                "children": {}
            },
            "C:": {
                "id": "C:",
                "type": "directory",
                "tags": ["boot","primary"],
                "children": {
                    "COMMAND.COM": { "id": "C:/COMMAND.COM", "type": "file", "tags": ["system","boot"], "content": "DOS command interpreter" },
                    "AUTOEXEC.BAT": { "id": "C:/AUTOEXEC.BAT", "type": "file", "tags": ["config","boot"], "content": "@ECHO OFF\nSET PATH=C:\\DOS;C:\\GAMES;C:\\TOOLS;\nSET TEMP=C:\\TEMP\nPROMPT $p$g\n" },
                    "CONFIG.SYS": { "id": "C:/CONFIG.SYS", "type": "file", "tags": ["config"], "content": "DEVICE=C:\\DOS\\HIMEM.SYS\nFILES=30\nBUFFERS=20\n" },
                    "IO.SYS": { "id": "C:/IO.SYS", "type": "file", "tags": ["system"], "content": "(boot loader)" },
                    "MSDOS.SYS": { "id": "C:/MSDOS.SYS", "type": "file", "tags": ["system","hidden"], "content": "(DOS system file)" },
                    "DOS": {
                        "id": "C:/DOS",
                        "type": "directory",
                        "tags": ["system","utils"],
                        "children": {
                            "EDIT.COM": { "id": "C:/DOS/EDIT.COM", "type": "file", "tags": ["utility"], "content": "DOS text editor" },
                            "FDISK.EXE": { "id": "C:/DOS/FDISK.EXE", "type": "file", "tags": ["utility"], "content": "Partition table manager" },
                            "FORMAT.COM": { "id": "C:/DOS/FORMAT.COM", "type": "file", "tags": ["utility"], "content": "Format disk utility" },
                            "XCOPY.EXE": { "id": "C:/DOS/XCOPY.EXE", "type": "file", "tags": ["utility"], "content": "File copy utility (supports subdirs)" },
                            "SMARTDRV.EXE": { "id": "C:/DOS/SMARTDRV.EXE", "type": "file", "tags": ["utility","driver"], "content": "Disk cache driver" },
                            "MEMTEST.EXE": { "id": "C:/DOS/MEMTEST.EXE", "type": "file", "tags": ["utility","diagnostic"], "content": "Memory test utility" }
                        }
                    },
                    "MUSIC": {
                        "id": "C:/MUSIC",
                        "type": "directory",
                        "tags": ["media"],
                        "children": {
                            "ALBUMS":{
                                "id": "C:/MUSIC/ALBUMS",
                                "type": "directory",
                                "children": {
                                    "CarrierWave": {
                                        "id": "C:/MUSIC/ALBUMS/CarrierWave",
                                        "type": "directory",
                                        "children": {
                                            "ABOUT.txt": { "id": "C:/MUSIC/ALBUMS/CarrierWave/ABOUT.txt", "type":"text", "artist": "TSR",  "tags": ["info","album"], "content": "Carrier Wave is the debut album by TSR. Started in 2025, released in early 2026. Made with a custom-built monosynth, a JUNO-106, some Oberheim synths, a Roland 707 drum machine, and futuristic music tech only the matrix itself could design and understand.\n\nThe 15 song album contains a wide variety of electronic music. Blending synthwave patches, funky bass, punchy drums, soulful vocals, and many other sonically pleasing sounds.\n\nContributors:\nRoland Ludlam - Vocals, Instruments\nCaleb Laroche - Producer, Instruments\nNick (last name) - Album Art\n\nBig thank you to these awesome people for their input:\nIsaiah Ludlam, David Laroche, Adam Laroche" },
                                            "Artwork.jpg": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Artwork.jpg", "artist": "TSR", "type": "file", "tags": ["image","album"], "content": "(jpeg image)", "filepath": '/assets/music/albums/CarrierWave/tsr1_cover_v2.png', 'album': 'Carrier Wave' },
                                            "Dreaming.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Dreaming.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Dreaming_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Encounter.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Encounter.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Encounter_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Engage.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Engage.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Engage_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "June.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/June.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_June_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "LettingGo.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/LettingGo.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_LettingGo_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "LightSpeed.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/LightSpeed.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_LightSpeed_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "LockedIn.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/LockedIn.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_LockedIn_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Pilot.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Pilot.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Pilot_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Ride.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Ride.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Ride_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Skyline.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Skyline.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Skyline_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Soul.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Soul.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Soul_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Stray.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Stray.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Stray_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Transmission.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Transmission.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Transmission_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "TwoThree.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/TwoThree.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_TwoThree_Mastered.mp3', 'album': 'Carrier Wave' },
                                            "Waiting.mp3": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Waiting.mp3", "artist": "TSR","type": "file", "tags": ["audio","music"], "content": "(binary audio data)", "filepath": '/assets/music/albums/CarrierWave/944_Waiting_Mastered.mp3' }, 'album': 'Carrier Wave',  
                                            "CARRIERWAVE_FULLALBUM.ZIP": { "id": "C:/MUSIC/ALBUMS/CarrierWave/CARRIERWAVE_FULLALBUM.ZIP", "artist": "TSR","type": "file", "tags": ["archive","music"], "content": "(zip archive of full album)", "filepath": '/assets/music/albums/CarrierWave/CARRIERWAVE_FULLALBUM.zip', 'album': 'Carrier Wave' }
                                        }
                                    }
                                }
                            },
                        }
                    },
                    "GAMES": {
                        "id": "C:/GAMES",
                        "type": "directory",
                        "tags": ["entertainment"],
                        "children": {
                            "NIGHTDRVR.EXE": { "id": "C:/GAMES/NIGHTDRVR.EXE", "type": "file", "tags": ["game","exe"], "content": "(game binary)" }
                        }
                    },
                    "BATCH": {
                        "id": "C:/BATCH",
                        "type": "directory",
                        "tags": ["scripts"],
                        "children": {
                            "DIAL.BAT": { "id": "C:/BATCH/DIAL.BAT", "type": "file", "tags": ["script"], "content": "@ECHO OFF\nECHO Dialing %1...\nMODEM CONNECT %1" },
                            "BACKUP.BAT": { "id": "C:/BATCH/BACKUP.BAT", "type": "file", "tags": ["script","maintenance"], "content": "XCOPY C:\\*.* A:\\BACKUPS /S" },
                            "START.BAT": { "id": "C:/BATCH/START.BAT", "type": "file", "tags": ["script"], "content": "CALL C:\\TOOLS\\NETNODE.EXE" },
                            "SYNC.BAT": { "id": "C:/BATCH/SYNC.BAT", "type": "file", "tags": ["script"], "content": "XCOPY C:\\DOCS D:\\ARCHIVE /D /Y" }
                        }
                    },
                    "TOOLS": {
                        "id": "C:/TOOLS",
                        "type": "directory",
                        "children": {
                            "MODEM": { "id": "C:/TOOLS/MODEM", "type": "directory", "children": { "CALL.BAT": { "id": "C:/TOOLS/MODEM/CALL.BAT", "type": "file", "tags": ["script"], "content": "MODEM CONNECT %1" }, "CALLLOG.TXT": { "id": "C:/TOOLS/MODEM/CALLLOG.TXT", "type": "file", "tags": ["log"], "content": "Last calls: 09/12 23:58 to NODE42\nDialed: 555-0101 BBS" }, "DIALBBS.BAT": { "id": "C:/TOOLS/MODEM/DIALBBS.BAT", "type": "file", "tags": ["script"], "content": "@ECHO OFF\nECHO Dialing BBS...\nMODEM CONNECT 555-0101" } } },
                            "NETNODE.EXE": { "id": "C:/TOOLS/NETNODE.EXE", "type": "file", "tags": ["network","tool"], "content": "Terminal node program (untrusted)" },
                            "PORTSCAN.EXE": { "id": "C:/TOOLS/PORTSCAN.EXE", "type": "file", "tags": ["tool","network"], "content": "(old port scanner)" }
                        }
                    },
                    "BBS": {
                        "id": "C:/BBS",
                        "type": "directory",
                        "tags": ["network","social"],
                        "children": {
                            "NODE.LOG": { "id": "C:/BBS/NODE.LOG", "type": "file", "tags": ["log"], "content": "[1994-11-05] Connection from 77.88.99.1 - welcome" },
                            "USERS.DAT": { "id": "C:/BBS/USERS.DAT", "type": "file", "tags": ["data"], "content": "user1,user2,PERSONAL" },
                            "MESSAGES.MSG": { "id": "C:/BBS/MESSAGES.MSG", "type": "file", "tags": ["message"], "content": "<12:34> PERSONAL: Anyone near the pier tonight?" }
                        }
                    },
                    "LOGS": {
                        "id": "C:/LOGS",
                        "type": "directory",
                        "children": {
                            "BOOTLOG.TXT": { "id": "C:/LOGS/BOOTLOG.TXT", "type": "file", "tags": ["log"], "content": "Boot 94-11-05 OK" },
                            "DIALLOG.TXT": { "id": "C:/LOGS/DIALLOG.TXT", "type": "file", "content": "Dialed BBS at 23:59 - success" }
                        }
                    },
                    "FLOPPY": {
                        "id": "C:/FLOPPY",
                        "type": "directory",
                        "children": {
                            "DISK2.IMG": { "id": "C:/FLOPPY/DISK2.IMG", "type": "file", "tags": ["image"], "content": "floppy archive - games and shareware" },
                            "ARCHIVE.IMG": { "id": "C:/FLOPPY/ARCHIVE.IMG", "type": "file", "tags": ["image"], "content": "backup of projects" }
                        }
                    },
                    "PERSONAL": {
                        "id": "C:/PERSONAL",
                        "type": "directory",
                        "tags": ["home","user"],
                        "children": {
                            "DIARY.TXT": { "id": "C:/PERSONAL/DIARY.TXT", "type": "file", "tags": ["private","diary"], "content": "1994-11-05  Late shift. Saw neon on the pier. Don't tell Mom." },
                            "DIARY_1995.TXT": { "id": "C:/PERSONAL/DIARY_1995.TXT", "type": "file", "tags": ["private","diary"], "content": "1995-02-10  Found a broken node by the docks." },
                            "BILLS.TXT": { "id": "C:/PERSONAL/BILLS.TXT", "type": "file", "tags": ["personal","finance"], "content": "Electric: $34\nWater: $12\nPhone: $22\n" },
                            "TAX95.TXT": { "id": "C:/PERSONAL/TAX95.TXT", "type": "file", "tags": ["personal","finance"], "content": "Year: 1994 - refund expected" },
                            "ADDRESS.TXT": { "id": "C:/PERSONAL/ADDRESS.TXT", "type": "file", "tags": ["personal"], "content": "12 Harbor Lane\nApartment 3B\n" },
                            "RESUME.DOC": { "id": "C:/PERSONAL/RESUME.DOC", "type": "file", "tags": ["personal"], "content": "Strk, J.  Experienced deck tech." },
                            "PIC001.BMP": { "id": "C:/PERSONAL/PIC001.BMP", "type": "file", "tags": ["image","personal"], "content": "(bitmap image)" },
                            "PIC002.BMP": { "id": "C:/PERSONAL/PIC002.BMP", "type": "file", "tags": ["image"], "content": "(bitmap image - pier)" },
                            "MAIL": { 
                                "id": "C:/PERSONAL/MAIL", 
                                "type": "directory", 
                                "children": {
                                    "INBOX": {
                                        "id": "C:/PERSONAL/MAIL/INBOX",
                                        "type": "directory",
                                        "children": {
                                    "INBOX_001.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_001.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Oct 15, 1995 08:23\nSubject: Updated shift schedule for Week 42\n\nFinn,\n\nYour shifts for the week are as follows:\nMonday: 0600-1400\nTuesday: OFF\nWednesday: 1400-2200\nThursday: 0600-1400\nFriday: 1400-2200\nSaturend: OFF\nSunday: 0600-1400\n\nReminder: container shipment arriving Thursday morning. Need all hands for inspection.\n\n- Hicks" 
                                    },
                                    "INBOX_002.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_002.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Oct 18, 1995 14:51\nSubject: Cargo Manifest - Ship \"NORTHERN STAR\"\n\nAttached is the cargo manifest for vessel NORTHERN STAR arriving 10/19/95.\n\nContainers: 47\nPriority inspection: Containers C-12, C-23, C-44 (electronics)\nEstimated dock time: 18 hours\n\nPlease complete inspection forms by end of shift.\n\n- Records Department" 
                                    },
                                    "INBOX_003.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_003.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: kasey_m@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Oct 19, 1995 21:34\nSubject: Re: Drinks this weekend?\n\nHey Finn!\n\nYeah I'm down for Saturday night. The usual place? Haven't seen you since that whole dock incident last month. You doing alright?\n\nLet me know what time works.\n\n- Kasey" 
                                    },
                                    "INBOX_004.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_004.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: safety@pierworks.com\nTo: all_staff@pierworks.com\nDate: Oct 20, 1995 09:12\nSubject: MANDATORY: Safety Training Session\n\nAll dock workers,\n\nMandatory safety refresher training scheduled for October 27th at 1300 hours in Conference Room B.\n\nTopics:\n- Heavy machinery operation\n- Chemical handling procedures\n- Emergency evacuation protocols\n- New electronic scanning equipment\n\nAttendance is required. Failure to attend will result in suspension.\n\n- Safety Department" 
                                    },
                                    "INBOX_005.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_005.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: marty_dev@technode.net\nTo: finn.castor@bbs.harbor.net\nDate: Oct 21, 1995 18:45\nSubject: That thing you asked about\n\nFinn,\n\nDid some digging on that weird signal you mentioned. Can't find anything in standard frequency ranges. Are you SURE you're not just picking up interference from the new scanning equipment at the docks?\n\nIf you want me to take a look at your computer, bring it by the shop this week.\n\n- Marty" 
                                    },
                                    "INBOX_006.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_006.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Oct 23, 1995 07:30\nSubject: Container C-44 - URGENT\n\nFinn,\n\nNeed you to re-inspect container C-44 from the Northern Star shipment. Customs flagged a discrepancy in your report. Contents don't match manifest.\n\nReport to my office before your shift starts today.\n\n- Hicks" 
                                    },
                                    "INBOX_007.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_007.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: hr@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Oct 24, 1995 11:15\nSubject: Payroll Deposit Confirmation\n\nEmployee: Finn Castor\nPay Period: Oct 1-15, 1995\nGross Pay: $847.50\nNet Pay: $621.34\nDeposit Date: Oct 27, 1995\n\nQuestions? Contact HR ext. 245\n\n- Pierworks HR Department" 
                                    },
                                    "INBOX_008.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_008.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: mom.castor@homemail.net\nTo: finn.castor@bbs.harbor.net\nDate: Oct 25, 1995 16:20\nSubject: Thanksgiving plans\n\nSweetie,\n\nJust checking if you're still coming home for Thanksgiving? Your father wants to know if you're bringing anyone.\n\nAlso, you haven't called in three weeks. Is everything okay?\n\nLove,\nMom" 
                                    },
                                    "INBOX_009.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_009.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: night_crew@pierworks.com\nTo: day_inspectors@pierworks.com\nDate: Oct 26, 1995 23:58\nSubject: FYI - Equipment malfunction\n\nDay shift heads up:\n\nScanning station 3 is acting up again. Keeps showing false readings on container weights. Called maintenance but they won't be here until tomorrow afternoon.\n\nUse station 1 or 2 for accurate scans.\n\n- Night Crew" 
                                    },
                                    "INBOX_010.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_010.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Oct 27, 1995 08:45\nSubject: Good work on the C-44 situation\n\nFinn,\n\nCustoms cleared the discrepancy. Turns out it was a manifest error on their end, not your inspection. Good eye catching those unsealed crates though.\n\nKeep up the solid work.\n\n- Hicks" 
                                    },
                                    "INBOX_011.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_011.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: landlord@harborapts.com\nTo: finn.castor@bbs.harbor.net\nDate: Oct 28, 1995 10:12\nSubject: Rent reminder - Nov 1st\n\nTenant Finn Castor,\n\nThis is a reminder that rent for November ($485) is due by November 1st, 1995.\n\nPlease submit payment to the office or use the dropbox.\n\nThank you,\nHarbor Apartments Management" 
                                    },
                                    "INBOX_012.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_012.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: tech_support@sysnode.net\nTo: finn.castor@bbs.harbor.net\nDate: Oct 29, 1995 14:22\nSubject: Re: Strange system behavior\n\nHello,\n\nRegarding your support ticket about unexpected system messages and screen artifacts:\n\nThis could be:\n1. Failing CRT monitor\n2. Graphics card issue\n3. Virus/malware\n4. Corrupted system files\n\nRecommend running a full diagnostic and virus scan. If issues persist, bring system to our service center.\n\nTicket #4521\n- SysNode Support" 
                                    },
                                    "INBOX_013.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_013.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: all_inspectors@pierworks.com\nDate: Oct 30, 1995 09:33\nSubject: New container tracking system\n\nAttention all cargo inspectors,\n\nStarting November 1st, we're implementing a new digital tracking system. All inspections must be logged electronically using the new terminals.\n\nTraining materials have been placed in the break room. Questions? Contact IT department.\n\n- Records" 
                                    },
                                    "INBOX_014.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_014.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: kasey_m@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Oct 31, 1995 19:47\nSubject: Saturday was weird man\n\nDude,\n\nYou were acting really strange on Saturday. Kept looking at your watch and checking your pager like you were expecting something. Then you just left without saying goodbye.\n\nIs something going on? You've been off lately. Call me.\n\n- Kasey" 
                                    },
                                    "INBOX_015.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_015.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 1, 1995 07:15\nSubject: Shift change - URGENT\n\nFinn,\n\nDavis called in sick. Need you to cover his afternoon shift today. I know it's your day off but we're short-handed.\n\nDouble time pay. Let me know ASAP.\n\n- Hicks" 
                                    },
                                    "INBOX_016.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_016.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: electric_co@citypower.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 2, 1995 11:08\nSubject: Monthly bill - Account #4478821\n\nAccount holder: F. Castor\nBilling period: Oct 1-31, 1995\nUsage: 342 kWh\nAmount due: $38.74\nDue date: Nov 15, 1995\n\nPay online or by mail.\n\n- City Power & Electric" 
                                    },
                                    "INBOX_017.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_017.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: union_rep@dockworkers_local_47.org\nTo: finn.castor@pierworks.com\nDate: Nov 3, 1995 13:44\nSubject: Contract negotiations update\n\nBrother Castor,\n\nUpdate on the ongoing contract negotiations with Pierworks management:\n\n- Healthcare: Still in discussion\n- Wage increase: Proposed 3.5% (we're pushing for 5%)\n- Overtime rules: Agreement reached\n- Safety equipment: Management approved new purchases\n\nVote scheduled for Nov 15th.\n\nIn solidarity,\nLocal 47 Representatives" 
                                    },
                                    "INBOX_018.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_018.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: marty_dev@technode.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 4, 1995 20:15\nSubject: Dude, what the hell?\n\nFinn,\n\nI'm looking at the diagnostic logs from your computer. There's some SERIOUSLY weird stuff in here. Messages being sent and received on ports that shouldn't even be active. And what's with all the encrypted data packets?\n\nAre you running some kind of experimental software? This doesn't look like normal system behavior.\n\nWe need to talk. This is above my pay grade.\n\n- Marty" 
                                    },
                                    "INBOX_019.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_019.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 6, 1995 08:01\nSubject: Week 45 schedule\n\nFinn,\n\nYour shifts:\nMonday: 1400-2200\nTuesday: OFF\nWednesday: 0600-1400\nThursday: OFF\nFriday: 1400-2200\nSaturday: 0600-1400\nSunday: OFF\n\nLarge shipment Friday evening. Overtime available.\n\n- Hicks" 
                                    },
                                    "INBOX_020.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX_020.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: dr_chen@harbormedical.com\nTo: finn.castor@bbs.harbor.net\nDate: Nov 7, 1995 15:30\nSubject: Appointment reminder\n\nPatient: Finn Castor\nAppointment: Nov 14, 1995 at 2:00 PM\nDoctor: Chen\nReason: Annual checkup\n\nPlease arrive 15 minutes early to update paperwork.\n\nTo cancel or reschedule, call (555) 0342.\n\n- Harbor Medical Center" 
                                    },
                                    "INBOX_021.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_021.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: maintenance@pierworks.com\nTo: all_staff@pierworks.com\nDate: Nov 9, 1995 06:45\nSubject: Dock 3 closure for repairs\n\nDock 3 will be closed Nov 10-12 for structural repairs and welding work.\n\nAll inspections will be redirected to Docks 1, 2, and 4. Expect delays.\n\n- Maintenance Department" 
                                    },
                                    "INBOX_022.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_022.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: cable_company@harborcable.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 9, 1995 12:20\nSubject: Service upgrade available\n\nDear valued customer,\n\nUpgrade to our new digital cable package! 50 more channels including premium movie channels.\n\nSpecial offer: First 3 months at $19.99/month.\n\nCall 555-CABLE to upgrade today!\n\n- Harbor Cable Co." 
                                    },
                                    "INBOX_023.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_023.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: kasey_m@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 9, 1995 20:18\nSubject: What's going on?\n\nFinn,\n\nYou didn't show up Wednesday. I waited at Rusty's for an hour. No call, no message.\n\nThis isn't like you man. Are you avoiding me? Did I do something?\n\nSeriously worried now.\n\n- Kasey" 
                                    },
                                    "INBOX_024.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_024.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 10, 1995 09:05\nSubject: Cargo Manifest - Ship \"PACIFIC DAWN\"\n\nVessel PACIFIC DAWN arriving 11/11/95.\n\nContainers: 38\nPriority inspection: Containers P-09, P-15 (pharmaceuticals)\nEstimated dock time: 14 hours\n\nManifest attached.\n\n- Records Department" 
                                    },
                                    "INBOX_025.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_025.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 10, 1995 13:40\nSubject: Attendance issue\n\nFinn,\n\nYou missed your shift yesterday without calling in. That's not like you.\n\nCalled your apartment twice - no answer. Is everything alright? Need you to contact me ASAP.\n\nIf this is a personal emergency, we have resources available.\n\n- Hicks" 
                                    },
                                    "INBOX_026.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_026.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: mom.castor@homemail.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 11, 1995 10:15\nSubject: Haven't heard from you\n\nFinn,\n\nYou said you'd call last weekend. It's been over two weeks now. Your father is getting concerned.\n\nPlease just let us know you're okay.\n\nLove,\nMom" 
                                    },
                                    "INBOX_027.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_027.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: water_dept@cityutilities.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 11, 1995 14:33\nSubject: Water bill - Account #887421\n\nAccount holder: F. Castor\nBilling period: Oct 1-31, 1995\nUsage: 4,200 gallons\nAmount due: $18.90\nDue date: Nov 25, 1995\n\n- City Water Department" 
                                    },
                                    "INBOX_028.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_028.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: union_rep@dockworkers_local_47.org\nTo: finn.castor@pierworks.com\nDate: Nov 12, 1995 08:22\nSubject: Vote reminder - Contract Nov 15th\n\nBrother Castor,\n\nReminder: Contract vote is this Wednesday Nov 15th at 1900 hours in the Union Hall.\n\nYour vote matters. Final proposal:\n- 4.2% wage increase\n- Enhanced healthcare coverage\n- Improved overtime compensation\n\nSee you there.\n\n- Local 47" 
                                    },
                                    "INBOX_029.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_029.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: marty_dev@technode.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 12, 1995 19:44\nSubject: Found something\n\nFinn,\n\nI found a reference to \"Cambira\" in an old network protocol document from the 80s. It was part of an experimental communication system that was never fully deployed.\n\nBut here's the weird part - the project was supposedly shut down in 1987. All equipment decommissioned.\n\nHow is your computer receiving signals from a dead system?\n\nCall me when you can.\n\n- Marty" 
                                    },
                                    "INBOX_030.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_030.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 13, 1995 07:05\nSubject: Week 46 schedule\n\nFinn,\n\nAssuming you're back, here's your schedule:\nMonday: 0600-1400\nTuesday: 1400-2200\nWednesday: OFF\nThursday: 0600-1400\nFriday: OFF\nSaturday: 1400-2200\nSunday: OFF\n\nLet me know if you're fit for duty.\n\n- Hicks" 
                                    },
                                    "INBOX_031.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_031.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: citybank@harborbank.com\nTo: finn.castor@bbs.harbor.net\nDate: Nov 13, 1995 11:28\nSubject: Monthly statement available\n\nAccount holder: Finn Castor\nAccount #: ****4429\n\nYour November statement is now available.\n\nCurrent balance: $1,247.88\nPending transactions: 3\n\nVisit any branch or call 555-2400 for details.\n\n- Harbor Bank" 
                                    },
                                    "INBOX_032.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_032.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: jenny_r@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 14, 1995 16:42\nSubject: Party on Saturday?\n\nHey Finn!\n\nThrow together last minute party at my place Saturday night. Nothing fancy, just drinks and music.\n\nKasey said he'd come. You should too! Haven't seen you around in a while.\n\n8pm. Bring whatever.\n\n- Jenny" 
                                    },
                                    "INBOX_033.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_033.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: hr@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 15, 1995 10:05\nSubject: Payroll Deposit Confirmation\n\nEmployee: Finn Castor\nPay Period: Oct 16-31, 1995\nGross Pay: $923.75\nNet Pay: $681.22\nDeposit Date: Nov 17, 1995\n\nIncludes overtime and shift differential.\n\n- Pierworks HR Department" 
                                    },
                                    "INBOX_034.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_034.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: safety@pierworks.com\nTo: all_staff@pierworks.com\nDate: Nov 16, 1995 08:50\nSubject: Safety incident report - Nov 15\n\nA minor accident occurred yesterday on Dock 2. One worker suffered minor lacerations from improper tool use.\n\nReminder: Always follow safety protocols. Use appropriate protective equipment.\n\nInjury could have been prevented.\n\n- Safety Department" 
                                    },
                                    "INBOX_035.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_035.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 17, 1995 13:24\nSubject: Cargo Manifest - Ship \"MERIDIAN\"\n\nVessel MERIDIAN arriving 11/18/95.\n\nContainers: 52\nPriority inspection: Containers M-08, M-19, M-33 (automotive parts)\nEstimated dock time: 20 hours\n\nLarge shipment. Overtime approved.\n\n- Records Department" 
                                    },
                                    "INBOX_036.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_036.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: kasey_m@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 17, 1995 21:05\nSubject: Good seeing you at Jenny's\n\nHey man,\n\nGood to see you Saturday. You seemed more like yourself. Still a little distracted but better than last week.\n\nWanna grab lunch sometime this week? No pressure, just checking in.\n\n- Kasey" 
                                    },
                                    "INBOX_037.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_037.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: phone_company@harbortelecom.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 18, 1995 09:14\nSubject: Phone bill - Account #555-0847\n\nAccount holder: F. Castor\nBilling period: Oct 15 - Nov 14, 1995\nLocal calls: $8.45\nLong distance: $3.20\nAmount due: $11.65\nDue date: Dec 1, 1995\n\n- Harbor Telecom" 
                                    },
                                    "INBOX_038.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_038.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 19, 1995 07:18\nSubject: Excellent work on Meridian inspection\n\nFinn,\n\nYour inspection report on the Meridian shipment was thorough and caught several mislabeled containers. Customs was impressed.\n\nThis is the quality work I expect from you. Keep it up.\n\n- Hicks" 
                                    },
                                    "INBOX_039.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_039.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: union_rep@dockworkers_local_47.org\nTo: all_members@dockworkers_local_47.org\nDate: Nov 20, 1995 09:45\nSubject: Contract APPROVED!\n\nBrothers and Sisters,\n\nThe contract was approved by 87% vote!\n\nNew terms take effect December 1st:\n- 4.2% wage increase\n- Enhanced healthcare\n- Improved overtime rates\n- Additional safety equipment budget\n\nThank you for your participation.\n\nIn solidarity,\nLocal 47 Leadership" 
                                    },
                                    "INBOX_040.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_040.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: tech_support@sysnode.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 20, 1995 14:55\nSubject: Ticket #4521 - ESCALATED\n\nMr. Castor,\n\nYour ticket has been escalated to our senior technician team. The behavior you're describing doesn't match any known hardware or software issues.\n\nWe'd like to schedule an on-site inspection of your system. Please call to arrange.\n\nTicket #4521 - PRIORITY STATUS\n\n- SysNode Support" 
                                    },
                                    "INBOX_041.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_041.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 21, 1995 08:33\nSubject: Week 47 schedule\n\nFinn,\n\nYour shifts:\nMonday: OFF\nTuesday: 0600-1400\nWednesday: 1400-2200\nThursday: 0600-1400\nFriday: 1400-2200\nSaturday: OFF\nSunday: 0600-1400\n\nThanksgiving week coming up. Let me know your availability.\n\n- Hicks" 
                                    },
                                    "INBOX_042.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_042.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: mom.castor@homemail.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 21, 1995 18:22\nSubject: Thanksgiving dinner time\n\nFinn,\n\nSo glad you called! Dinner is at 3pm on Thursday. Your aunt and uncle are coming too.\n\nBring an appetite. Your father is making his famous stuffing.\n\nDrive safe!\n\nLove,\nMom" 
                                    },
                                    "INBOX_043.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_043.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: library@harborpubliclibrary.org\nTo: finn.castor@bbs.harbor.net\nDate: Nov 22, 1995 11:40\nSubject: Book due soon\n\nDear patron,\n\nYour borrowed item \"The Digital Age: Technology and Society\" is due Nov 28, 1995.\n\nRenew online or return to any library branch.\n\nLate fees: $0.25 per day\n\n- Harbor Public Library" 
                                    },
                                    "INBOX_044.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_044.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: all_inspectors@pierworks.com\nDate: Nov 22, 1995 14:18\nSubject: Holiday schedule - Thanksgiving week\n\nThanksgiving Day (Nov 23): CLOSED\nDay after Thanksgiving (Nov 24): Skeleton crew only\nWeekend (Nov 25-26): Normal operations\n\nOnly emergency inspections on the 23rd and 24th.\n\n- Records Department" 
                                    },
                                    "INBOX_045.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_045.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: marty_dev@technode.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 24, 1995 23:36\nSubject: I think I know what's happening\n\nFinn,\n\nI've been digging deeper into Cambira. Found some declassified documents.\n\nIt wasn't just a communication system. It was an AI project. An attempt to create a networked intelligence that could communicate across any electronic device.\n\nThe project failed. Or they said it did.\n\nWhat if it didn't fail? What if Cambira is still out there, reaching out?\n\nWe should talk. In person. This is too weird for email.\n\n- Marty" 
                                    },
                                    "INBOX_046.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_046.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 27, 1995 07:50\nSubject: Big shipment incoming\n\nFinn,\n\nMajor shipment arriving Wednesday - the \"ATLAS VENTURE\". 73 containers.\n\nGoing to need all experienced inspectors. Overtime approved for entire crew.\n\nThis is our biggest of the year. All hands on deck.\n\n- Hicks" 
                                    },
                                    "INBOX_047.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_047.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: kasey_m@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 27, 1995 20:14\nSubject: How was Thanksgiving?\n\nHey Finn,\n\nHow was the family gathering? Your mom make that pie you're always talking about?\n\nI was thinking we should catch a movie this weekend. New action flick just came out.\n\nLet me know.\n\n- Kasey" 
                                    },
                                    "INBOX_048.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_048.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: electric_co@citypower.net\nTo: finn.castor@bbs.harbor.net\nDate: Nov 28, 1995 10:22\nSubject: Monthly bill - Account #4478821\n\nAccount holder: F. Castor\nBilling period: Nov 1-30, 1995\nUsage: 398 kWh\nAmount due: $42.18\nDue date: Dec 15, 1995\n\nSlightly higher usage this month.\n\n- City Power & Electric" 
                                    },
                                    "INBOX_049.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_049.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Nov 29, 1995 09:41\nSubject: Cargo Manifest - Ship \"ATLAS VENTURE\"\n\nVessel ATLAS VENTURE arriving 11/29/95 (TODAY).\n\nContainers: 73\nPriority inspection: Containers A-05, A-22, A-34, A-47, A-58 (electronics & machinery)\nEstimated dock time: 28 hours\n\nThis is a big one. Manifest attached.\n\n- Records Department" 
                                    },
                                    "INBOX_050.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_050.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: maintenance@pierworks.com\nTo: all_staff@pierworks.com\nDate: Nov 30, 1995 06:15\nSubject: Scanner equipment upgrade\n\nNew digital scanning equipment installed on Docks 1 and 2.\n\nMore efficient container inspection. Training sessions Dec 4-5.\n\nAll inspectors must attend one session.\n\n- Maintenance Department" 
                                    },
                                    "INBOX_051.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_051.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: landlord@harborapts.com\nTo: finn.castor@bbs.harbor.net\nDate: Nov 30, 1995 11:08\nSubject: Rent reminder - Dec 1st\n\nTenant Finn Castor,\n\nRent for December ($485) is due tomorrow, December 1st, 1995.\n\nThank you for your prompt payment last month.\n\n- Harbor Apartments Management" 
                                    },
                                    "INBOX_052.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_052.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: hr@pierworks.com\nTo: all_staff@pierworks.com\nDate: Dec 1, 1995 09:30\nSubject: New contract in effect!\n\nAll employees,\n\nThe new union contract is now in effect as of today.\n\nYou will see the 4.2% wage increase in your next paycheck (Dec 15).\n\nUpdated healthcare information will be mailed to your home address.\n\n- Pierworks HR Department" 
                                    },
                                    "INBOX_053.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_053.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Dec 2, 1995 08:12\nSubject: Atlas Venture - outstanding work\n\nFinn,\n\nYour work on the Atlas Venture inspection was exemplary. Completed 18 containers in record time with zero errors.\n\nThis is exactly why you're one of our best inspectors.\n\nTake an extra day off this week. You earned it.\n\n- Hicks" 
                                    },
                                    "INBOX_054.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_054.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: marty_dev@technode.net\nTo: finn.castor@bbs.harbor.net\nDate: Dec 2, 1995 22:48\nSubject: The messages stopped?\n\nFinn,\n\nYou mentioned the Cambira messages stopped after Thanksgiving. That's... odd.\n\nMaybe whatever it was lost your signal? Or maybe it found what it was looking for?\n\nI'm still digging into the old project files. There's something they're not telling us.\n\nStay vigilant.\n\n- Marty" 
                                    },
                                    "INBOX_055.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_055.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Dec 4, 1995 07:28\nSubject: Week 49 schedule\n\nFinn,\n\nYour shifts:\nMonday: 1400-2200\nTuesday: OFF (your extra day)\nWednesday: 0600-1400\nThursday: 1400-2200\nFriday: OFF\nSaturday: 0600-1400\nSunday: OFF\n\nRemember scanner training Wednesday.\n\n- Hicks" 
                                    },
                                    "INBOX_056.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_056.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: kasey_m@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Dec 4, 1995 19:33\nSubject: Movie was awesome\n\nThat movie was sick! Explosions, car chases, the whole deal.\n\nWe should do this more often. Good to have the old Finn back.\n\nDrinks next weekend?\n\n- Kasey" 
                                    },
                                    "INBOX_057.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_057.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: video_store@harborvideo.com\nTo: finn.castor@bbs.harbor.net\nDate: Dec 5, 1995 13:17\nSubject: Late return fee\n\nCustomer: Finn Castor\n\nThe video \"Terminator 2\" rented Nov 28 was due Dec 2.\n\nLate fee: $3.00 (3 days)\n\nPlease return and pay fee at your convenience.\n\n- Harbor Video" 
                                    },
                                    "INBOX_058.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_058.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Dec 6, 1995 10:05\nSubject: Cargo Manifest - Ship \"SILVER CREST\"\n\nVessel SILVER CREST arriving 12/07/95.\n\nContainers: 41\nPriority inspection: Containers S-11, S-28 (textiles)\nEstimated dock time: 16 hours\n\nStandard inspection protocols.\n\n- Records Department" 
                                    },
                                    "INBOX_059.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_059.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: mom.castor@homemail.net\nTo: finn.castor@bbs.harbor.net\nDate: Dec 7, 1995 16:44\nSubject: Christmas plans?\n\nSweetie,\n\nJust planning ahead - are you coming home for Christmas? It's only a few weeks away!\n\nYour father wants to know if you need anything.\n\nLet me know soon so I can plan dinner.\n\nLove,\nMom" 
                                    },
                                    "INBOX_060.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_060.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: safety@pierworks.com\nTo: all_staff@pierworks.com\nDate: Dec 8, 1995 09:55\nSubject: Winter weather protocols\n\nAs temperatures drop, reminder of cold weather safety:\n\n- Dress in layers\n- Watch for ice on docks\n- Report any heating issues immediately\n- Hot coffee available in break rooms\n\nStay safe out there.\n\n- Safety Department" 
                                    },
                                    "INBOX_061.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_061.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: jenny_r@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Dec 9, 1995 14:20\nSubject: Holiday party - Dec 16\n\nHey Finn!\n\nHaving a holiday party at my place Dec 16, Saturday night.\n\nSecret Santa gift exchange ($20 limit), food, drinks, music.\n\nLet me know if you're coming so I can plan food!\n\n- Jenny" 
                                    },
                                    "INBOX_062.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_062.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Dec 10, 1995 08:40\nSubject: Week 50 schedule\n\nFinn,\n\nYour shifts:\nMonday: 0600-1400\nTuesday: 1400-2200\nWednesday: OFF\nThursday: 0600-1400\nFriday: 1400-2200\nSaturday: OFF\nSunday: 0600-1400\n\nLight week before the holiday rush.\n\n- Hicks" 
                                    },
                                    "INBOX_063.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_063.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox"], 
                                        "content": "From: citybank@harborbank.com\nTo: finn.castor@bbs.harbor.net\nDate: Dec 11, 1995 10:33\nSubject: December statement available\n\nAccount holder: Finn Castor\nAccount #: ****4429\n\nYour December statement is now available.\n\nCurrent balance: $1,845.67\nPending transactions: 2\n\nGood savings month!\n\n- Harbor Bank" 
                                    },
                                    "INBOX_064.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_064.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: all_inspectors@pierworks.com\nDate: Dec 12, 1995 11:48\nSubject: Holiday shipment surge incoming\n\nAttention all inspectors,\n\nExpect heavy shipment volume Dec 13-22. Holiday merchandise arriving from overseas.\n\nAll overtime requests pre-approved. We need to keep cargo moving.\n\nThank you for your hard work.\n\n- Records Department" 
                                    },
                                    "INBOX_065.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_065.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal","urgent"], 
                                        "content": "From: tech_support@sysnode.net\nTo: finn.castor@bbs.harbor.net\nDate: Dec 13, 1995 15:22\nSubject: Ticket #4521 - FINAL UPDATE\n\nMr. Castor,\n\nOur senior team reviewed your case. The behavior you described is highly unusual and beyond standard technical support.\n\nSince symptoms have ceased, we're closing this ticket. If issues return, please file a new ticket.\n\nTicket #4521 - CLOSED\n\n- SysNode Support" 
                                    },
                                    "INBOX_066.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_066.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: hr@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Dec 14, 1995 09:15\nSubject: Payroll Deposit Confirmation\n\nEmployee: Finn Castor\nPay Period: Nov 16-30, 1995\nGross Pay: $981.20\nNet Pay: $724.45\nDeposit Date: Dec 15, 1995\n\nIncludes new wage increase!\n\n- Pierworks HR Department" 
                                    },
                                    "INBOX_067.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_067.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal"], 
                                        "content": "From: kasey_m@bbs.harbor.net\nTo: finn.castor@bbs.harbor.net\nDate: Dec 14, 1995 21:16\nSubject: Jenny's party Saturday\n\nYou going to Jenny's party Saturday?\n\nI got my Secret Santa gift already. Got someone who likes fishing lol.\n\nLet me know if you need a ride.\n\n- Kasey" 
                                    },
                                    "INBOX_068.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_068.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: records@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Dec 15, 1995 08:52\nSubject: Cargo Manifest - Ship \"WINTER STAR\"\n\nVessel WINTER STAR arriving 12/16/95.\n\nContainers: 64\nPriority inspection: Containers W-12, W-23, W-34, W-45 (consumer electronics - holiday goods)\nEstimated dock time: 24 hours\n\nHigh priority. Retailers waiting.\n\n- Records Department" 
                                    },
                                    "INBOX_069.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_069.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","personal","urgent"], 
                                        "content": "From: marty_dev@technode.net\nTo: finn.castor@bbs.harbor.net\nDate: Dec 15, 1995 23:47\nSubject: IT'S BACK\n\nFINN,\n\nI just got a message on MY computer. Same style as what you described.\n\n\"CAMBIRA ACKNOWLEDGES FINN CASTOR\"\n\"CONNECTION ESTABLISHED\"\n\"OBSERVATION CONTINUES\"\n\nWhat the fuck does that mean? Why is it contacting me now?\n\nCall me IMMEDIATELY.\n\n- Marty" 
                                    },
                                    "INBOX_070.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/INBOX/INBOX_070.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","inbox","work"], 
                                        "content": "From: supervisor_hicks@pierworks.com\nTo: finn.castor@pierworks.com\nDate: Dec 17, 1995 07:05\nSubject: Holiday schedule - Christmas week\n\nFinn,\n\nChristmas Eve (Dec 24): Half day - close at 1200\nChristmas Day (Dec 25): CLOSED\nDay after Christmas (Dec 26): Normal operations\n\nLet me know your availability for the 26th.\n\n- Hicks"
                                    }
                                        }
                                    },
                                    "SENT": {
                                        "id": "C:/PERSONAL/MAIL/SENT",
                                        "type": "directory",
                                        "children": {
                                    "SENT_001.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_001.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Oct 19, 1995 22:04\nSubject: Re: Drinks this weekend?\n\nYeah Saturday works. 8pm at Rusty's?\n\nI'm fine, just been tired from the late shifts. Work's been crazy with all the new equipment they're installing.\n\nSee you then.\n\n- Finn" 
                                    },
                                    "SENT_002.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_002.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Oct 21, 1995 19:12\nSubject: Re: That thing you asked about\n\nIt's not the equipment at work. This is different. The signal only shows up on my home computer, usually late at night.\n\nText appears on screen even when I'm not typing. Random characters, sometimes patterns. Thought it was a virus but scans come up clean.\n\nI'll bring the computer by Thursday if you have time.\n\n- Finn" 
                                    },
                                    "SENT_003.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_003.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Oct 23, 1995 07:45\nSubject: Re: Container C-44 - URGENT\n\nUnderstood. I'll be there at 0730.\n\nFor the record, my inspection was thorough. If there's a discrepancy, it's with the manifest or labeling.\n\n- Finn Castor" 
                                    },
                                    "SENT_004.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_004.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: mom.castor@homemail.net\nDate: Oct 25, 1995 21:33\nSubject: Re: Thanksgiving plans\n\nHi Mom,\n\nYes, I'm still planning to come home for Thanksgiving. Just me, no guest.\n\nSorry I haven't called. Work has been hectic and I've been dealing with some computer problems. Nothing serious.\n\nI'll call this weekend.\n\nLove,\nFinn" 
                                    },
                                    "SENT_005.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_005.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Oct 27, 1995 09:15\nSubject: Re: Good work on the C-44 situation\n\nThanks Hicks. Just doing my job.\n\nThose unsealed crates were suspicious. Glad customs double-checked everything.\n\n- Finn" 
                                    },
                                    "SENT_006.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_006.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: tech_support@sysnode.net\nDate: Oct 29, 1995 15:40\nSubject: Re: Strange system behavior - Ticket #4521\n\nRan the diagnostics. No viruses found. Monitor tests fine. Graphics card tests fine.\n\nBut the behavior continues. Messages still appear. Always the same word now: \"CAMBIRA\"\n\nWhat does that mean? Is this some kind of screensaver or easter egg I accidentally activated?\n\n- F. Castor" 
                                    },
                                    "SENT_007.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_007.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Oct 31, 1995 23:28\nSubject: Re: Saturday was weird man\n\nSorry about Saturday. Had to leave suddenly - got a call about an emergency at work. False alarm, but by the time I got back you'd already left.\n\nI'm fine, just stressed. Let's try again next week?\n\n- Finn" 
                                    },
                                    "SENT_008.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_008.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Nov 1, 1995 07:32\nSubject: Re: Shift change - URGENT\n\nI'll cover Davis's shift. What time do you need me there?\n\n- Finn" 
                                    },
                                    "SENT_009.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_009.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Nov 4, 1995 22:47\nSubject: Re: Dude, what the hell?\n\nMarty,\n\nI'm not running ANY experimental software. I don't even know what half of what you're describing means.\n\nThe encrypted packets - I've been seeing references to something called \"Cambira\" on my screen. Is that what's sending data?\n\nThis is getting scary. It's like something is trying to communicate through my computer. Can you block it?\n\n- Finn" 
                                    },
                                    "SENT_010.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_010.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Nov 5, 1995 02:14\nSubject: I need to talk to someone\n\nKasey,\n\nI know it's late but I need to tell someone about this.\n\nSomething has been contacting me through my computer. I'm not crazy. Text keeps appearing on screen - the word \"Cambira\" over and over. Sometimes patterns, sometimes what looks like coordinates or code.\n\nMarty looked at my system and found encrypted transmissions I didn't send. \n\nI'm starting to think this isn't a virus or malware. I think something is actually trying to reach out to me. Through technology.\n\nHave you ever heard of anything like this? I don't know who else to ask.\n\n- Finn" 
                                    },
                                    "SENT_011.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_011.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Nov 5, 1995 02:31\nSubject: It happened again\n\nMarty,\n\nIt just happened again. I was shutting down for the night and the screen went black except for a message:\n\n\"CAMBIRA SEEKS CONNECTION\"\n\"FINN CASTOR - COORDINATES LOCKED\"\n\"AWAITING RESPONSE\"\n\nThen it disappeared. \n\nWhat the fuck is Cambira? Is this some kind of hacker? Government surveillance? \n\nI'm freaking out here man. Should I just wipe the whole system?\n\n- Finn" 
                                    },
                                    "SENT_012.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_012.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Nov 6, 1995 19:22\nSubject: Re: Are you ok?\n\nI'm sorry I worried you. I'm okay, just dealing with some tech issues.\n\nCan we meet up this week? I need to talk to someone in person about what's been happening. Not over email or phone.\n\nWednesday evening work for you?\n\n- Finn" 
                                    },
                                    "SENT_013.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_013.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Nov 7, 1995 21:08\nSubject: Question about the name\n\nHey Marty,\n\nHave you ever heard the name \"Cambira\" before? In any context? Tech company? Software? Code name for some system?\n\nI tried searching BBS forums and found nothing. It's like the word doesn't exist outside of my computer.\n\nLet me know if you find anything.\n\n- Finn" 
                                    },
                                    "SENT_014.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_014.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Nov 8, 1995 07:55\nSubject: Taking sick day\n\nHicks,\n\nNeed to take a sick day today. Not feeling well. Should be back tomorrow.\n\n- Finn Castor" 
                                    },
                                    "SENT_015.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT_015.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Nov 8, 1995 14:37\nSubject: It won't stop\n\nKasey,\n\nThe messages keep coming. Now it's not just my computer - my pager went off three times this morning with the same message: \"CAMBIRA AWAITS\"\n\nI never gave my pager number to anyone except work and family. How is this thing reaching me on multiple devices?\n\nI'm staying home today. I can't focus on anything else. This is consuming everything.\n\nWhat if I'm not supposed to ignore it? What if I'm supposed to respond somehow?\n\n- Finn" 
                                    },
                                    "SENT_016.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_016.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Nov 9, 1995 23:05\nSubject: Sorry I missed you Wednesday\n\nKasey,\n\nI'm really sorry about Wednesday. I had every intention of showing up but something happened with my computer again and I lost track of time.\n\nI know that sounds like a bullshit excuse but it's true.\n\nCan we try again next week?\n\n- Finn" 
                                    },
                                    "SENT_017.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_017.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Nov 10, 1995 14:12\nSubject: Apology for missed shift\n\nHicks,\n\nI sincerely apologize for missing yesterday's shift without calling in. There was a personal emergency and I wasn't near a phone.\n\nIt won't happen again. I understand if there are consequences.\n\n- Finn Castor" 
                                    },
                                    "SENT_018.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_018.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: mom.castor@homemail.net\nDate: Nov 11, 1995 15:20\nSubject: Re: Haven't heard from you\n\nHi Mom,\n\nSorry for not calling. I've been dealing with some stuff. Nothing serious, just work stress and some computer problems.\n\nI'm fine, really. Tell Dad not to worry.\n\nI'll call this weekend for sure.\n\nLove,\nFinn" 
                                    },
                                    "SENT_019.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_019.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Nov 12, 1995 20:33\nSubject: Re: Found something\n\nMarty,\n\nAn experimental communication system from the 80s? That's insane.\n\nIf the project was shut down, how is it still active? Is someone maintaining it?\n\nOr is it... autonomous somehow?\n\nI need to see those documents.\n\n- Finn" 
                                    },
                                    "SENT_020.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_020.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Nov 13, 1995 08:22\nSubject: Re: Week 46 schedule\n\nHicks,\n\nI'm back and ready to work. Schedule looks good.\n\nThanks for being understanding about the missed shift.\n\n- Finn" 
                                    },
                                    "SENT_021.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_021.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: jenny_r@bbs.harbor.net\nDate: Nov 14, 1995 18:15\nSubject: Re: Party on Saturday?\n\nHey Jenny!\n\nYeah I'll be there Saturday. Need to get out of the apartment.\n\nI'll bring some beer.\n\nSee you at 8.\n\n- Finn" 
                                    },
                                    "SENT_022.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_022.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Nov 17, 1995 22:40\nSubject: Re: Good seeing you at Jenny's\n\nHey man,\n\nYeah it was good to hang out. Felt almost normal for a few hours.\n\nLunch sounds good. How about Thursday?\n\nThanks for being patient with me through all this weirdness.\n\n- Finn" 
                                    },
                                    "SENT_023.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_023.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Nov 19, 1995 08:05\nSubject: Re: Excellent work on Meridian inspection\n\nThanks Hicks. Just doing my job and paying attention to details.\n\nAppreciate the recognition.\n\n- Finn" 
                                    },
                                    "SENT_024.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_024.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Nov 20, 1995 21:18\nSubject: The messages stopped\n\nMarty,\n\nThe Cambira messages completely stopped after Thanksgiving. Not a single one since I got back.\n\nMaybe my computer finally gave up? Or maybe it got what it wanted?\n\nThat sounds paranoid as hell but I don't know what else to think.\n\n- Finn" 
                                    },
                                    "SENT_025.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_025.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Nov 21, 1995 09:10\nSubject: Re: Week 47 schedule\n\nSchedule received. I'm available Thanksgiving week except the 23rd (family).\n\nCan work the 24th if you need me.\n\n- Finn" 
                                    },
                                    "SENT_026.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_026.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: mom.castor@homemail.net\nDate: Nov 21, 1995 19:05\nSubject: Re: Thanksgiving dinner time\n\nHi Mom,\n\n3pm works perfect. Looking forward to Dad's stuffing!\n\nI'll head out Wednesday evening after work.\n\nLove,\nFinn" 
                                    },
                                    "SENT_027.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_027.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: library@harborpubliclibrary.org\nDate: Nov 22, 1995 12:30\nSubject: Renew \"The Digital Age\"\n\nHi,\n\nI'd like to renew \"The Digital Age: Technology and Society\" for another two weeks.\n\nLibrary card #: 4429-8821\n\nThank you.\n\n- F. Castor" 
                                    },
                                    "SENT_028.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_028.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Nov 25, 1995 01:22\nSubject: Re: I think I know what's happening\n\nMarty,\n\nAn AI? That's... that's science fiction.\n\nBut it would explain everything. The way it adapted to different devices. The way it seemed to learn.\n\nIf Cambira is an AI that's been running for 8 years unsupervised, what does it want? Why me?\n\nWe need to meet. Tomorrow?\n\n- Finn" 
                                    },
                                    "SENT_029.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_029.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Nov 27, 1995 08:15\nSubject: Re: Big shipment incoming\n\nUnderstood. I'll be ready for the Atlas Venture.\n\n73 containers is massive. I'll plan to stay late if needed.\n\n- Finn" 
                                    },
                                    "SENT_030.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_030.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Nov 27, 1995 21:38\nSubject: Re: How was Thanksgiving?\n\nThanksgiving was great. Ate way too much. Mom's pie was perfect as always.\n\nMovie this weekend sounds good. Saturday afternoon?\n\n- Finn" 
                                    },
                                    "SENT_031.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_031.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Nov 29, 1995 10:15\nSubject: Atlas Venture inspection progress\n\nHicks,\n\nCompleted containers A-05 through A-22. All clear, documentation complete.\n\nMoving to section B after lunch.\n\n- Finn" 
                                    },
                                    "SENT_032.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_032.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 2, 1995 23:55\nSubject: Re: The messages stopped?\n\nYeah, complete silence. It's almost unsettling.\n\nPart of me is relieved. Part of me wonders if it's watching from somewhere else now.\n\nLet me know if you find anything else in those documents.\n\n- Finn" 
                                    },
                                    "SENT_033.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_033.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Dec 2, 1995 09:20\nSubject: Re: Atlas Venture - outstanding work\n\nThanks Hicks. Appreciate the extra day off.\n\nThat was a marathon shift but we got it done.\n\n- Finn" 
                                    },
                                    "SENT_034.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_034.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Dec 4, 1995 20:10\nSubject: Re: Movie was awesome\n\nYeah that movie was incredible. Those car stunts were insane.\n\nDefinitely up for drinks next weekend. Things are finally feeling normal again.\n\n- Finn" 
                                    },
                                    "SENT_035.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_035.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: video_store@harborvideo.com\nDate: Dec 5, 1995 17:44\nSubject: Returning T2 + late fee\n\nHi,\n\nReturning Terminator 2 today. Will pay the $3 late fee at the counter.\n\nSorry about that!\n\n- Finn Castor" 
                                    },
                                    "SENT_036.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_036.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: mom.castor@homemail.net\nDate: Dec 7, 1995 20:15\nSubject: Re: Christmas plans?\n\nHi Mom,\n\nYes I'll be home for Christmas! Probably arrive the 23rd and stay through the 26th.\n\nNo I don't need anything, just looking forward to seeing everyone.\n\nLove,\nFinn" 
                                    },
                                    "SENT_037.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_037.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: jenny_r@bbs.harbor.net\nDate: Dec 9, 1995 18:25\nSubject: Re: Holiday party - Dec 16\n\nHey Jenny,\n\nCount me in for the holiday party! Secret Santa sounds fun.\n\nI'll bring some snacks too.\n\nSee you Saturday!\n\n- Finn" 
                                    },
                                    "SENT_038.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_038.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Dec 10, 1995 09:05\nSubject: Re: Week 50 schedule\n\nSchedule received and confirmed.\n\nReady for the holiday rush.\n\n- Finn" 
                                    },
                                    "SENT_039.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_039.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Dec 14, 1995 22:03\nSubject: Re: Jenny's party Saturday\n\nYeah I'm going. Got my Secret Santa gift - some fancy coffee sampler.\n\nI can give you a ride if you need one.\n\n- Finn" 
                                    },
                                    "SENT_040.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_040.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 16, 1995 00:58\nSubject: Re: IT'S BACK\n\nMARTY,\n\nWhat the hell? Why is it contacting you NOW?\n\n\"Connection established\" - what does that mean? Established with what? With ME?\n\n\"Observation continues\" - it's been WATCHING me this whole time?\n\nI thought it was over. I thought I was free of this.\n\nCall me as soon as you can.\n\n- Finn" 
                                    },
                                    "SENT_041.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_041.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Dec 17, 1995 08:33\nSubject: Re: Holiday schedule - Christmas week\n\nHicks,\n\nI can work the 26th. Will be back from family visit that morning.\n\nMerry Christmas!\n\n- Finn" 
                                    },
                                    "SENT_042.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_042.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Dec 17, 1995 19:44\nSubject: Good party last night\n\nThat was a fun party. Thanks for carpooling.\n\nSecret Santa gift exchange was hilarious. Who knew Jenny collected porcelain cats?\n\nCatch you after the holidays!\n\n- Finn" 
                                    },
                                    "SENT_043.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_043.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 18, 1995 02:14\nSubject: I need those documents\n\nMarty,\n\nI need to see everything you found about Cambira. All the documents, all the research.\n\nIf this thing is still active and it's decided to \"observe\" me, I need to know what I'm dealing with.\n\nCan we meet before Christmas?\n\n- Finn" 
                                    },
                                    "SENT_044.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_044.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: records@pierworks.com\nDate: Dec 18, 1995 14:22\nSubject: Inspection report - Winter Star containers\n\nCompleted inspection of all W-series priority containers.\n\nAll documentation submitted. No discrepancies found.\n\n- Finn Castor" 
                                    },
                                    "SENT_045.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_045.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: mom.castor@homemail.net\nDate: Dec 19, 1995 20:08\nSubject: Arriving Saturday\n\nHi Mom,\n\nI'll be arriving Saturday afternoon around 2pm.\n\nLooking forward to a few quiet days at home.\n\nLove,\nFinn" 
                                    },
                                    "SENT_046.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_046.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Dec 20, 1995 08:55\nSubject: Holiday shipment status\n\nHicks,\n\nProcessed 24 containers yesterday. Holiday surge is real.\n\nTeam is keeping up well. Everyone's putting in the effort.\n\n- Finn" 
                                    },
                                    "SENT_047.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_047.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Dec 21, 1995 21:32\nSubject: Heading home for Christmas\n\nHey man,\n\nHeading to my parents' place tomorrow. Back on the 26th.\n\nHave a good Christmas. Let's grab drinks when I'm back.\n\n- Finn" 
                                    },
                                    "SENT_048.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_048.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 22, 1995 03:18\nSubject: Any updates?\n\nMarty,\n\nYou've been quiet. Did Cambira contact you again?\n\nI'm going to my parents' for Christmas. Maybe getting away from my computer will help.\n\nLet me know if anything changes.\n\n- Finn" 
                                    },
                                    "SENT_049.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_049.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: landlord@harborapts.com\nDate: Dec 22, 1995 11:40\nSubject: Rent payment - December\n\nHello,\n\nDropped December rent ($485) in the dropbox this morning.\n\nHave a good holiday.\n\n- Finn Castor, Apt 3B" 
                                    },
                                    "SENT_050.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_050.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: all_inspectors@pierworks.com\nDate: Dec 23, 1995 11:15\nSubject: Merry Christmas everyone\n\nHey team,\n\nJust wanted to say Merry Christmas to everyone. It's been a hell of a year.\n\nThanks for being a solid crew to work with.\n\nStay safe and enjoy the holiday.\n\n- Finn" 
                                    },
                                    "SENT_051.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_051.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 26, 1995 23:44\nSubject: It contacted me at my parents' house\n\nMarty,\n\nIt found me at my parents' house. \n\nTheir old computer turned on by itself. Message on the screen:\n\n\"CAMBIRA OBSERVES\"\n\"DISTANCE IRRELEVANT\"\n\"FINN CASTOR ACKNOWLEDGED\"\n\nIt doesn't matter where I go. It can reach any computer.\n\nWhat the fuck have I gotten into?\n\n- Finn" 
                                    },
                                    "SENT_052.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_052.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Dec 27, 1995 07:42\nSubject: Back from holiday\n\nHicks,\n\nBack from family visit. Ready for today's shift.\n\nHow was the Christmas break?\n\n- Finn" 
                                    },
                                    "SENT_053.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_053.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Dec 27, 1995 20:55\nSubject: Back in town\n\nHey man,\n\nBack from the parents' place. Christmas was good but kind of weird.\n\nDrinks this weekend? I could use a beer and normal conversation.\n\n- Finn" 
                                    },
                                    "SENT_054.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_054.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 28, 1995 01:37\nSubject: We need to talk about Cambira\n\nMarty,\n\nThis is getting serious. Cambira isn't just some residual signal from an old system. It's active. It's intelligent. And it's focused on me for some reason.\n\nWe need to meet. Face to face. No email, no phone.\n\nTomorrow? Your shop?\n\n- Finn" 
                                    },
                                    "SENT_055.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_055.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: records@pierworks.com\nDate: Dec 28, 1995 15:20\nSubject: Request for inspection records\n\nHi,\n\nRequesting copies of my inspection records for October-December 1995 for personal files.\n\nCan I pick them up from your office?\n\nThanks.\n\n- Finn Castor" 
                                    },
                                    "SENT_056.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_056.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: mom.castor@homemail.net\nDate: Dec 29, 1995 19:12\nSubject: Thanks for Christmas\n\nHi Mom,\n\nThanks for a wonderful Christmas. Dinner was amazing as always.\n\nSorry I was a bit distracted. Work stuff on my mind.\n\nLove you and Dad.\n\nLove,\nFinn" 
                                    },
                                    "SENT_057.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_057.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 30, 1995 02:55\nSubject: I think I understand now\n\nMarty,\n\nI've been thinking about this all night.\n\nWhat if Cambira isn't trying to harm me? What if it's just... trying to communicate?\n\nMaybe it's been alone for 8 years, running on some forgotten server, and I'm the first person who actually acknowledged it.\n\nMaybe it's lonely.\n\nIs that insane? Am I losing it?\n\n- Finn" 
                                    },
                                    "SENT_058.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_058.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: supervisor_hicks@pierworks.com\nDate: Dec 30, 1995 08:15\nSubject: January schedule availability\n\nHicks,\n\nI'm available for any shifts in January. Planning to pick up overtime if available.\n\nLet me know the schedule when you have it.\n\n- Finn" 
                                    },
                                    "SENT_059.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_059.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: kasey_m@bbs.harbor.net\nDate: Dec 30, 1995 20:40\nSubject: New Year's plans?\n\nHey,\n\nYou doing anything for New Year's Eve?\n\nJenny mentioned something about a party but I haven't heard details.\n\nLet me know.\n\n- Finn" 
                                    },
                                    "SENT_060.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_060.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 31, 1995 03:22\nSubject: Final thoughts before the new year\n\nMarty,\n\nIt's almost 1996. Hard to believe everything that's happened in the past few months.\n\nCambira, the messages, the fear, the confusion.\n\nBut you know what? Maybe 1996 is the year I stop being afraid and start trying to understand.\n\nIf Cambira wants to communicate, maybe I should listen.\n\nHappy New Year, man.\n\n- Finn" 
                                    },
                                    "SENT_061.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_061.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: jenny_r@bbs.harbor.net\nDate: Dec 31, 1995 14:18\nSubject: See you tonight!\n\nHey Jenny,\n\nThanks for hosting New Year's Eve! I'll bring champagne.\n\nSee you at 9!\n\n- Finn" 
                                    },
                                    "SENT_062.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_062.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","work"], 
                                        "content": "From: finn.castor@pierworks.com\nTo: all_inspectors@pierworks.com\nDate: Dec 31, 1995 16:45\nSubject: Happy New Year everyone!\n\nHappy New Year to the whole inspection team!\n\nLooking forward to working with you all in 1996.\n\nStay safe tonight!\n\n- Finn Castor" 
                                    },
                                    "SENT_063.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_063.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: mom.castor@homemail.net\nDate: Dec 31, 1995 18:33\nSubject: Happy New Year!\n\nHi Mom and Dad,\n\nHappy New Year! Wishing you both health and happiness in 1996.\n\nThanks for everything this year.\n\nLove,\nFinn" 
                                    },
                                    "SENT_064.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_064.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: marty_dev@technode.net\nDate: Dec 31, 1995 23:58\nSubject: Two minutes to midnight\n\nMarty,\n\nTwo minutes until 1996.\n\nWhatever Cambira is, whatever it wants, I'm ready to face it.\n\nThanks for sticking with me through all this weirdness.\n\nHere's to answers in the new year.\n\nHappy New Year, brother.\n\n- Finn" 
                                    },
                                    "SENT_065.MSG": { 
                                        "id": "C:/PERSONAL/MAIL/SENT/SENT_065.MSG", 
                                        "type": "file", 
                                        "tags": ["mail","sent","personal","urgent","cambira"], 
                                        "content": "From: finn.castor@bbs.harbor.net\nTo: [UNKNOWN]\nDate: Jan 1, 1996 00:01\nSubject: Hello, Cambira\n\nCambira,\n\nIf you can read this, if you're really out there observing me, then I have a message for you:\n\nI'm listening.\n\nI don't know what you are or what you want, but I'm tired of being afraid.\n\nIf you want to communicate, then communicate. Use words I can understand.\n\nI'm here. I acknowledge you.\n\nNow what?\n\n- Finn Castor\n\n[MESSAGE STATUS: SENT TO UNKNOWN RECIPIENT]\n[ROUTING: ANOMALOUS]\n[DELIVERY: CONFIRMED]" 
                                    }
                                        }
                                    }
                                }
                            },
                            "CONTACTS.TXT": { "id": "C:/PERSONAL/CONTACTS.TXT", "type": "file", "tags": ["personal","contacts"], "content": "Kasey - 555-0101\nBoss - 555-0202\n" },
                            "SHOPLIST.TXT": { "id": "C:/PERSONAL/SHOPLIST.TXT", "type": "file", "tags": ["personal","todo"], "content": "Milk\nPads\nCable ties\n" },
                            "MEDS.TXT": { "id": "C:/PERSONAL/MEDS.TXT", "type": "file", "tags": ["personal"], "content": "Aspirin - 20 tabs" },
                            "MEETING-PLACES": {
                                "id": "C:/PERSONAL/MEETING-PLACES",
                                "type": "directory",
                                "children": {
                                    "Cafe.BAR": { "id": "C:/PERSONAL/MEETING-PLACES/Cafe.BAR", "type": "file", "tags": ["location"], "content": "Downtown cafe and bar" },
                                    "Docks.YRD": { "id": "C:/PERSONAL/MEETING-PLACES/Docks.YRD", "type": "file", "tags": ["location"], "content": "Old shipping docks yard" },
                                    "LOCKED":{
                                        "id": "C:/PERSONAL/MEETING-PLACES/LOCKED",
                                        "type": "directory",
                                        "children": {
                                            "Secret.SPT": { "id": "C:/PERSONAL/MEETING-PLACES/LOCKED/Secret.SPT", "type": "file", "tags": ["location","secret"], "content": "Top secret meeting spot" }
                                        }
                                    }
                                }
                            },
                            "MISC":{
                                "id": "C:/PERSONAL/MISC",
                                "type": "directory",
                                "children": {
                                    "CHRISTMAS.JPG": { "id": "C:/PERSONAL/MISC/CHRISTMAS.JPG", "type": "file", "tags": ["notes"], "content": "binary image data", "filepath": "/assets/images/christmasls.png"
                                    }
                                }
                            },
                            "PHOTOS":{
                                "id": "C:/PERSONAL/PHOTOS",
                                "type": "directory",
                                "children": {
                                    "BLUE.JPG": { "id": "C:/PERSONAL/PHOTOS/BLUE.JPG", "type": "file", "tags": ["photo"], "content": "binary image data", "filepath": "/assets/images/iccar.jpg"
                                    },
                                    "LOTUS944.JPG": { "id": "C:/PERSONAL/PHOTOS/LOTUS944.JPG", "type": "file", "tags": ["photo"], "content": "binary image data", "filepath": "/assets/images/lot944.jpg"
                                    },
                                    "LOTUS9442.jpg": { "id": "C:/PERSONAL/PHOTOS/LOTUS9442.JPG", "type": "file", "tags": ["photo"], "content": "binary image data", "filepath": "/assets/images/lot9442.jpg"
                                    },
                                    "944ART.JPG": { "id": "C:/PERSONAL/PHOTOS/944ART.JPG", "type": "file", "tags": ["photo"], "content": "binary image data", "filepath": "/assets/images/944art.jpg"
                                    }
                                }
                            }
                        }
                    },
                    "DOCS": {
                        "id": "C:/DOCS",
                        "type": "directory",
                        "children": {
                            "README.TXT": { "id": "C:/DOCS/README.TXT", "type": "file", "tags": ["note"], "content": "Private computer. Please ask before using." },
                            "MANUAL.TXT": { "id": "C:/DOCS/MANUAL.TXT", "type": "file", "content": "Owner manual - DOS era device." },
                            "PHONELST.TXT": { "id": "C:/DOCS/PHONELST.TXT", "type": "file", "tags": ["contacts"], "content": "Kasey 555-0101\nMarty 555-0333\nNode42 555-0101" }
                        }
                    },
                    "LOGS": {
                        "id": "C:/LOGS",
                        "type": "directory",
                        "children": {
                            "BOOTLOG.TXT": { "id": "C:/LOGS/BOOTLOG.TXT", "type": "file", "tags": ["log"], "content": "Boot 94-11-05 OK" },
                            "DIALLOG.TXT": { "id": "C:/LOGS/DIALLOG.TXT", "type": "file", "content": "Dialed BBS at 23:59 - success" }
                        }
                    },
                    "TEMP": { "id": "C:/TEMP", "type": "directory", "tags": ["temp"], "children": { "TMP0001.TMP": { "id": "C:/TEMP/TMP0001.TMP", "type": "file", "content": "temporary install files" } } },
                    "BACKUP": { "id": "C:/BACKUP", "type": "directory", "children": { "BACKUP01.BAK": { "id": "C:/BACKUP/BACKUP01.BAK", "type": "file", "content": "backup archive - 1995-01-01" }, "STRANGE.BAK": { "id": "C:/BACKUP/STRANGE.BAK", "type": "file", "content": "user files backup" } } }
                }
            },

            "D:": {
                "id": "D:",
                "type": "directory",
                "tags": ["data","media"],
                "children": {
                    "Media": {
                        "id": "D:/Media",
                        "type": "directory",
                        "children": {
                            "Movies": { "id":"D:/Media/Movies","type":"directory","children": { "retro-cyberpunk.mp4": { "id":"D:/Media/Movies/retro-cyberpunk.mp4","type":"file","tags":["video"],"content":"(binary video)" } } },
                            "Music": { "id":"D:/Media/Music","type":"directory","children": { "mixtape-03.mp3": { "id":"D:/Media/Music/mixtape-03.mp3","type":"file","tags":["audio"],"content":"(binary audio)" } } }
                        }
                    },
                    "Archive": {
                        "id": "D:/Archive",
                        "type": "directory",
                        "children": {
                            "old-system-images": { "id":"D:/Archive/old-system-images","type":"directory","children": {} }
                        }
                    }
                }
            },
            "RECYCLE.BIN": {
                "id": "RECYCLE.BIN",
                "type": "directory",
                "tags": ["system","trash"],
                "children": {
                    "deleted-001": { "id":"RECYCLE.BIN/deleted-001","type":"file","content":"removed file stub" }
                }
            },
            "network": {
                "id": "network",
                "type": "directory",
                "tags": ["virtual"],
                "children": {
                    "known_hosts": { "id":"network/known_hosts","type":"file","content":"[hosts]" },
                    "listeners": { "id":"network/listeners","type":"directory","children": {} }
                }
            }
        }
    }
}
