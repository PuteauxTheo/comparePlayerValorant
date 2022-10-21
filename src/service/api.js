//let url = 'https://api.henrikdev.xyz/valorant/v1/account/'
//getPuuid('LoveOfGod','1234')
// hugo id = e0d86137-d2cf-5771-b15d-423dccaf0e4a
// kyky id = 300d4e84-05a8-5ee9-bd2a-8001ef59c925

export async function getPuuid(name, tag ){
    let response = await fetch(`https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`)
    let account = await response.json()
    console.log('Donnée du compte '+account.data)


    return account.data.puuid
}

export async function getArrayOfMatch(name, tag, region){
    let response = await fetch(`https://api.henrikdev.xyz/valorant/v3/matches/${region}/${name}/${tag}`)
    let matches = await response.json()
    console.log('Tableau des 5 derniers match'+matches.data)

    return matches.data
}

//getArrayOfMatch('LoveOfGod','1234','eu')

export const exempleMatch = {
    "status": 200,
    "data": [
      {
        "metadata": {
          "map": "Split",
          "game_version": "release-03.12-shipping-16-649370",
          "game_length": 2356581,
          "game_start": 1641934366,
          "game_start_patched": "Tuesday, January 11, 2022 9:52 PM",
          "rounds_played": 23,
          "mode": "Competitive",
          "queue": "Standard",
          "season_id": "a16955a5-4ad0-f761-5e9e-389df1c892fb",
          "platform": "PC",
          "matchid": "bee2376f-606a-4120-84de-89aa9b7eac60",
          "region": "eu",
          "cluster": "London"
        },
        "players": {
          "all_players": [
            {
              "puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
              "name": "Henrik3",
              "tag": "EUW3",
              "team": "Red",
              "level": 104,
              "character": "Sova",
              "currenttier": 12,
              "currenttier_patched": "Gold 1",
              "player_card": "8edf22c5-4489-ab41-769a-07adb4c454d6",
              "player_title": "e3ca05a4-4e44-9afe-3791-7d96ca8f71fa",
              "party_id": "b7590bd4-e2c9-4dd3-8cbf-05f04158375e",
              "session_playtime": {
                "minutes": 26,
                "seconds": 1560,
                "milliseconds": 1560000
              },
              "assets": {
                "card": {
                  "small": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/smallart.png",
                  "large": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/largeart.png",
                  "wide": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/wideart.png"
                },
                "agent": {
                  "small": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
                  "full": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
                  "bust": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/bustportrait.png",
                  "killfeed": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png"
                }
              },
              "behaviour": {
                "afk_rounds": 0,
                "friendly_fire": {
                  "incoming": 0,
                  "outgoing": 0
                },
                "rounds_in_spawn": 0
              },
              "platform": {
                "type": "PC",
                "os": {
                  "name": "Windows",
                  "version": "10.0.22000.1.768.64bit"
                }
              },
              "ability_casts": {
                "c_cast": 16,
                "q_cast": 5,
                "e_cast": 26,
                "x_cast": 0
              },
              "stats": {
                "score": 4869,
                "kills": 18,
                "deaths": 18,
                "assists": 5,
                "bodyshots": 48,
                "headshots": 9,
                "legshots": 5
              },
              "economy": {
                "spent": {
                  "overall": 59750,
                  "average": 2598
                },
                "loadout_value": {
                  "overall": 71700,
                  "average": 3117
                }
              },
              "damage_made": 3067,
              "damage_received": 3115
            }
          ],
          "red": [
            {
              "puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
              "name": "Henrik3",
              "tag": "EUW3",
              "team": "Red",
              "level": 104,
              "character": "Sova",
              "currenttier": 12,
              "currenttier_patched": "Gold 1",
              "player_card": "8edf22c5-4489-ab41-769a-07adb4c454d6",
              "player_title": "e3ca05a4-4e44-9afe-3791-7d96ca8f71fa",
              "party_id": "b7590bd4-e2c9-4dd3-8cbf-05f04158375e",
              "session_playtime": {
                "minutes": 26,
                "seconds": 1560,
                "milliseconds": 1560000
              },
              "assets": {
                "card": {
                  "small": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/smallart.png",
                  "large": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/largeart.png",
                  "wide": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/wideart.png"
                },
                "agent": {
                  "small": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
                  "full": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
                  "bust": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/bustportrait.png",
                  "killfeed": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png"
                }
              },
              "behaviour": {
                "afk_rounds": 0,
                "friendly_fire": {
                  "incoming": 0,
                  "outgoing": 0
                },
                "rounds_in_spawn": 0
              },
              "platform": {
                "type": "PC",
                "os": {
                  "name": "Windows",
                  "version": "10.0.22000.1.768.64bit"
                }
              },
              "ability_casts": {
                "c_cast": 16,
                "q_cast": 5,
                "e_cast": 26,
                "x_cast": 0
              },
              "stats": {
                "score": 4869,
                "kills": 18,
                "deaths": 18,
                "assists": 5,
                "bodyshots": 48,
                "headshots": 9,
                "legshots": 5
              },
              "economy": {
                "spent": {
                  "overall": 59750,
                  "average": 2598
                },
                "loadout_value": {
                  "overall": 71700,
                  "average": 3117
                }
              },
              "damage_made": 3067,
              "damage_received": 3115
            }
          ],
          "blue": [
            {
              "puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
              "name": "Henrik3",
              "tag": "EUW3",
              "team": "Red",
              "level": 104,
              "character": "Sova",
              "currenttier": 12,
              "currenttier_patched": "Gold 1",
              "player_card": "8edf22c5-4489-ab41-769a-07adb4c454d6",
              "player_title": "e3ca05a4-4e44-9afe-3791-7d96ca8f71fa",
              "party_id": "b7590bd4-e2c9-4dd3-8cbf-05f04158375e",
              "session_playtime": {
                "minutes": 26,
                "seconds": 1560,
                "milliseconds": 1560000
              },
              "assets": {
                "card": {
                  "small": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/smallart.png",
                  "large": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/largeart.png",
                  "wide": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/wideart.png"
                },
                "agent": {
                  "small": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
                  "full": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
                  "bust": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/bustportrait.png",
                  "killfeed": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png"
                }
              },
              "behaviour": {
                "afk_rounds": 0,
                "friendly_fire": {
                  "incoming": 0,
                  "outgoing": 0
                },
                "rounds_in_spawn": 0
              },
              "platform": {
                "type": "PC",
                "os": {
                  "name": "Windows",
                  "version": "10.0.22000.1.768.64bit"
                }
              },
              "ability_casts": {
                "c_cast": 16,
                "q_cast": 5,
                "e_cast": 26,
                "x_cast": 0
              },
              "stats": {
                "score": 4869,
                "kills": 18,
                "deaths": 18,
                "assists": 5,
                "bodyshots": 48,
                "headshots": 9,
                "legshots": 5
              },
              "economy": {
                "spent": {
                  "overall": 59750,
                  "average": 2598
                },
                "loadout_value": {
                  "overall": 71700,
                  "average": 3117
                }
              },
              "damage_made": 3067,
              "damage_received": 3115
            }
          ]
        },
        "teams": {
          "red": {
            "has_won": true,
            "rounds_won": 13,
            "rounds_lost": 10
          },
          "blue": {
            "has_won": false,
            "rounds_won": 10,
            "rounds_lost": 13
          }
        },
        "rounds": [
          {
            "winning_team": "Red",
            "end_type": "Eliminated",
            "bomb_planted": true,
            "bomb_defused": false,
            "plant_events": {
              "plant_location": {
                "x": -1325,
                "y": -1325
              },
              "planted_by": {
                "puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
                "display_name": "Henrik3#EUW3",
                "team": "Red"
              },
              "plant_site": "A",
              "plant_time_in_round": 26345,
              "player_locations_on_plant": [
                {
                  "player_puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
                  "player_display_name": "Henrik3#EUW3",
                  "player_team": "Red",
                  "location": {
                    "x": 5177,
                    "y": -8908
                  },
                  "view_radians": 0.5277854
                }
              ]
            },
            "defuse_events": {
              "defuse_location": {
                "x": -1325,
                "y": -1325
              },
              "defused_by": {
                "puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
                "display_name": "Henrik3#EUW3",
                "team": "Red"
              },
              "defuse_time_in_round": 26345,
              "player_locations_on_defuse": [
                {
                  "player_puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
                  "player_display_name": "Henrik3#EUW3",
                  "player_team": "Red",
                  "location": {
                    "x": 5177,
                    "y": -8908
                  },
                  "view_radians": 0.5277854
                }
              ]
            },
            "player_stats": [
              {
                "ability_casts": {
                  "c_casts": 2,
                  "q_casts": 5,
                  "e_casts": 20,
                  "x_casts": 1
                },
                "player_puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
                "player_display_name": "Henrik3#EUW3",
                "player_team": "Red",
                "damage_events": [],
                "damage": 282,
                "bodyshots": 7,
                "headshots": 1,
                "legshots": 1,
                "kill_events": [],
                "kills": 2,
                "score": 430,
                "economy": {
                  "loadout_value": 3900,
                  "weapon": {
                    "id": "462080D1-4035-2937-7C09-27AA2A5C27A7",
                    "name": "Spectre",
                    "assets": {
                      "display_icon": "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png",
                      "killfeed_icon": "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/killstreamicon.png"
                    }
                  },
                  "armor": {
                    "id": "822BCAB2-40A2-324E-C137-E09195AD7692",
                    "name": "Heavy Shields",
                    "assets": {
                      "display_icon": "https://media.valorant-api.com/gear/822bcab2-40a2-324e-c137-e09195ad7692/displayicon.png"
                    }
                  },
                  "remaining": 5300,
                  "spent": 1550
                },
                "was_afk": false,
                "was_penalized": false,
                "stayed_in_spawn": false
              }
            ]
          }
        ]
      }
    ]
  }