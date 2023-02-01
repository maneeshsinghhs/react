import { UserListRow } from ".";
import { IUser } from "../../interface/Users";

const UserList = (props: propTypes) => {

    const {users} =  props;

    return(
        <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <UserListRow 
                            key = {user.id}
                            user= {user}
                        />
                    ))
                }
                
            </tbody>
        </table>
    );
}

export default UserList

interface propTypes{
    users: IUser[]
}


