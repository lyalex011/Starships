
function shipCard ({ data }) {

    return ( 
        <div className="list">
            {data.map((ship, index) => {
                return (<div key={index} className="card"><h2>{ship.name}</h2> Speed: {ship.max_atmosphering_speed}, Crew: {ship.crew}, Passengers: {ship.passengers}</div>)
            })}
        </div>
     );
}


export default shipCard;