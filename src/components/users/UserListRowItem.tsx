// import { UserListRow } from ".";
// import { IUser } from "../../interface/users";

const UserListRowItem = (props: propTypes) => {

  const { value } =  props;

  return(
    <td>{ value }</td>
  );
}

export default UserListRowItem

interface propTypes{
  value: number | string
}


