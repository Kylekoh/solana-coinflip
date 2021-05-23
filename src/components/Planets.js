import {useQuery} from 'react-query'

const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planetsd/');
    return res.json();
}

const Planets = () => {
    const { data, status} = useQuery('planets', fetchPlanets)
    console.log('데이터', data)

    return ( 
        <div>
            <h2>Planets page</h2>
            {/* <p>{status}</p> */}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}

{status === 'error' && (
                <div>Error fetching data</div>
            )}

{status === 'error' && (
                <div>Error fetching data</div>
            )}
            
        </div>
     );
}
 
export default Planets;