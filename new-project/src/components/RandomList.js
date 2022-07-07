import RandomItem from "./RandomItem";

const RandomList = ({ users }) => {
	return (
    <div className='random-list'>
      {users.map(user => <RandomItem key={user.id.value} user={user} />)}
    </div>
  )
}

export default RandomList;