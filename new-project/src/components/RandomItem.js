const RandomItem = ({ user }) => {
	return (
		<div key={user.id.value}>
      <h5>{user.name.first}</h5>
      <p>{user.email}</p>
    </div>
	);
}

export default RandomItem;