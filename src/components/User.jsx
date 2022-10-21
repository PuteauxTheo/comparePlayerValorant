export function UserData({id, matches, name} ) {

    function calculRatio(kills, death) {
        return kills / death
    }
    console.log(matches)
    return (
        !id || !matches ? 
        null
        :
        <div>
            {matches[0].players.all_players.map(player => {
                return (player.puuid === id ?
                    <div key={id}>
                        <p>Champion joue {player.character}</p>
                        <p>dégats effectué {player.damage_made} </p>
                        <p>dégats reçu {player.damage_received}</p>
                        <p>kills {player.stats.kills} / death {player.stats.deaths} : ratio {calculRatio(player.stats.kills, player.stats.deaths)}</p>
                        <p> headshot {player.stats.headshots} bodyshot {player.stats.bodyshots} legshots {player.stats.legshots}</p>
                        

                    </div>
                    :
                    null
                )
            })}
            {
                matches[0].kills.length
            }
        </div>
    )
}