import { UserListRowItem } from ".";
import { IUser } from "../../interface/Users";

const UserListRow = (props: propTypes) => {

    const { user } =  props;

    return(
        <tr>
            {/* <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td> */}
            <UserListRowItem value={user.id}/>
            <UserListRowItem value={user.name}/>
            <UserListRowItem value={user.age}/>
            <UserListRowItem value={user.email}/>
            <UserListRowItem value={user.phone}/>
        </tr>
    );
}

export default UserListRow

interface propTypes{
    user: IUser
}


