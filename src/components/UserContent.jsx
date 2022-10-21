import { getPuuid, getArrayOfMatch, exempleMatch } from '../service/api.js';
import { useState, useEffect } from 'react';
import { UserData } from '../components/User.jsx';

export function UserContent() {

    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [puuid, setPuuid] = useState('');
    const [matches, setMatches] = useState();

    console.log(matches)

    function formatName(name){
        name.replace(' ','%20')
    }

    async function handleData() {
        const dataPuuid = await getPuuid(name, tag)
        console.log(dataPuuid)
        setPuuid(dataPuuid)
        const dataMatches = await getArrayOfMatch(name, tag, 'eu')
        setMatches(dataMatches)
    }
    useEffect(() => {

    }, [matches])

    return (
        <div>
            
            <div>
                <label>Name</label>
                <input onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Tag</label>
                <input onChange={e => setTag(e.target.value)} />
            </div>

            <button onClick={handleData}>submit</button>
            <div>

                <UserData id={puuid} matches={matches}/>
            </div>
        </div>
    )
}