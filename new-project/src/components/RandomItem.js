const RandomItem = ({ user }) => {
	return (
		<div className='user-card' key={user.id.value}>
      <img className='user-img' src={user.picture.medium} alt={user.name.first} />
      <div className='user-profile'>
        <h5 className='user-name'>{user.name.first}</h5>
        <p className='user-email'>{user.email}</p>
        <small className='user-phone'>{user.phone}</small>
        <address className='user-addr'>{user.location.city} {user.location.state} {user.location.country} {user.location.postcode}</address>
      </div>
    </div>
	);
}

export default RandomItem;