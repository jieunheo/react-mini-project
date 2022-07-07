import RandomItem from "./RandomItem";

const RandomList = ({ users }) => {
	return (
    <div>
      {users.map(user => <RandomItem key={user.id.value} user={user} />)}
    </div>
  )
}

export default RandomList;