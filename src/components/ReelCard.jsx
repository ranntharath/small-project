import { NavLink } from 'react-router-dom'

function ReelCard({id,image, name, price}) {
    return (
        <div>
            <NavLink to={`/reels/${id}`}>
                <img className='rounded-xl w-full h-80' src={image} alt="" />
            </NavLink>
            <div>
                <h1>{name}</h1>
                <p>Price: {price}</p>
            </div>
        </div>
    )
}

export default ReelCard