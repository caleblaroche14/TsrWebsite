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
                        "tags": ["audio","media"],
                        "children": {
                            "ALBUMS":{
                                "id": "C:/MUSIC/ALBUMS",
                                "type": "directory",
                                "children": {
                                    "CarrierWave": {
                                        "id": "C:/MUSIC/ALBUMS/CarrierWave",
                                        "type": "directory",
                                        "children": {
                                            "Artwork.jpg": { "id": "C:/MUSIC/ALBUMS/CarrierWave/Artwork.jpg", "artist": "TSR", "type": "file", "tags": ["image","album"], "content": "(jpeg image)", "filepath": '/assets/music/albums/CarrierWave/tsr_cover_v2.jpg', 'album': 'Carrier Wave' },
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
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "GAMES": {
                        "id": "C:/GAMES",
                        "type": "directory",
                        "tags": ["entertainment"],
                        "children": {
                            "DOOM.EXE": { "id": "C:/GAMES/DOOM.EXE", "type": "file", "tags": ["game","exe"], "content": "(game binary)" },
                            "ZORK.EXE": { "id": "C:/GAMES/ZORK.EXE", "type": "file", "tags": ["game"], "content": "(text adventure)" },
                            "HIGH.SCO": { "id": "C:/GAMES/HIGH.SCO", "type": "file", "tags": ["save"], "content": "Player: STRANGER  Score: 9999" },
                            "SNAKE.EXE": { "id": "C:/GAMES/SNAKE.EXE", "type": "file", "tags": ["game"], "content": "(simple arcade)" }
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
                            "USERS.DAT": { "id": "C:/BBS/USERS.DAT", "type": "file", "tags": ["data"], "content": "user1,user2,stranger" },
                            "MESSAGES.MSG": { "id": "C:/BBS/MESSAGES.MSG", "type": "file", "tags": ["message"], "content": "<12:34> stranger: Anyone near the pier tonight?" }
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
                    "STRANGER": {
                        "id": "C:/STRANGER",
                        "type": "directory",
                        "tags": ["home","user"],
                        "children": {
                            "DIARY.TXT": { "id": "C:/STRANGER/DIARY.TXT", "type": "file", "tags": ["private","diary"], "content": "1994-11-05  Late shift. Saw neon on the pier. Don't tell Mom." },
                            "DIARY_1995.TXT": { "id": "C:/STRANGER/DIARY_1995.TXT", "type": "file", "tags": ["private","diary"], "content": "1995-02-10  Found a broken node by the docks." },
                            "BILLS.TXT": { "id": "C:/STRANGER/BILLS.TXT", "type": "file", "tags": ["personal","finance"], "content": "Electric: $34\nWater: $12\nPhone: $22\n" },
                            "TAX95.TXT": { "id": "C:/STRANGER/TAX95.TXT", "type": "file", "tags": ["personal","finance"], "content": "Year: 1994 - refund expected" },
                            "ADDRESS.TXT": { "id": "C:/STRANGER/ADDRESS.TXT", "type": "file", "tags": ["personal"], "content": "12 Harbor Lane\nApartment 3B\n" },
                            "RESUME.DOC": { "id": "C:/STRANGER/RESUME.DOC", "type": "file", "tags": ["personal"], "content": "Strk, J.  Experienced deck tech." },
                            "PIC001.BMP": { "id": "C:/STRANGER/PIC001.BMP", "type": "file", "tags": ["image","personal"], "content": "(bitmap image)" },
                            "PIC002.BMP": { "id": "C:/STRANGER/PIC002.BMP", "type": "file", "tags": ["image"], "content": "(bitmap image - pier)" },
                            "MAIL": { "id": "C:/STRANGER/MAIL", "type": "directory", "children": { "INBOX.MSG": { "id": "C:/STRANGER/MAIL/INBOX.MSG", "type": "file", "tags": ["mail"], "content": "From: boss@work\nSubject: Shift schedule" }, "SENT.MSG": { "id": "C:/STRANGER/MAIL/SENT.MSG", "type": "file", "content": "To: kasey@bbs - Re: tonight" } } },
                            "CONTACTS.TXT": { "id": "C:/STRANGER/CONTACTS.TXT", "type": "file", "tags": ["personal","contacts"], "content": "Kasey - 555-0101\nBoss - 555-0202\n" },
                            "SHOPLIST.TXT": { "id": "C:/STRANGER/SHOPLIST.TXT", "type": "file", "tags": ["personal","todo"], "content": "Milk\nPads\nCable ties\n" },
                            "MEDS.TXT": { "id": "C:/STRANGER/MEDS.TXT", "type": "file", "tags": ["personal"], "content": "Aspirin - 20 tabs" },
                            "EMPLOYER.DAT": { "id": "C:/STRANGER/EMPLOYER.DAT", "type": "file", "tags": ["work"], "content": "Pierworks Co. - shift records" },
                            "MEETING-PLACES": {
                                "id": "C:/STRANGER/MEETING-PLACES",
                                "type": "directory",
                                "children": {
                                    "Cafe.BAR": { "id": "C:/STRANGER/MEETING-PLACES/Cafe.BAR", "type": "file", "tags": ["location"], "content": "Downtown cafe and bar" },
                                    "Docks.YRD": { "id": "C:/STRANGER/MEETING-PLACES/Docks.YRD", "type": "file", "tags": ["location"], "content": "Old shipping docks yard" },
                                    "LOCKED":{
                                        "id": "C:/STRANGER/MEETING-PLACES/LOCKED",
                                        "type": "directory",
                                        "children": {
                                            "Secret.SPT": { "id": "C:/STRANGER/MEETING-PLACES/LOCKED/Secret.SPT", "type": "file", "tags": ["location","secret"], "content": "Top secret meeting spot" }
                                        }
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
            },
            "README_FOR_MACHINE.txt": {
                "id": "README_FOR_MACHINE.txt",
                "type": "file",
                "tags": ["note","system"],
                "content": "This mock filesystem is part of a simulated device. Metadata added for testing."
            }
        }
    }
}
