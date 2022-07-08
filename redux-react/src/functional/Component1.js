import { useLocation, useParams } from "react-router";


const Component1 = props => {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <div>
      Component pathname: {pathname}<br />
      Component id: {id}
    </div>
  );
}

export default Component1;