import { Fragment } from "react";
import {
    USERS
} from "../../constants/Common"
import { UserList } from "../../components/users";

const borderStyles = {
    border: "1px solid #d6d6d6"
}

function Body (){
  
  const users = [
    {
        id: 1,
        name: "Maneesh Singh",
        age: 32
    },
    {
        id: 2,
        name: "Sanjay Singh",
        age: 30
    },
    {
        id: 3,
        name: "Karan Singh",
        age: 28

    },
    {
        id: 4,
        name: "Harsh Singh",
        age: 26
    },
    // {
    //     id: 5,
    //     name: "Raj Singh",
    //     age: 24
    // },
  ]

  const lists = [
      {
          id: 1,
          name: "Maneesh Singh",
          age: 32,
          email: "msingh@gmail.com",
          phone: 9876543213,
      },
      {
          id: 2,
          name: "Sanjay Singh",
          age: 30,
          email: "msingh01@gmail.com",
          phone: 9876543232,
      },
      {
          id: 3,
          name: "Ram Singh",
          age: 28,
          email: "msingh02@gmail.com",
          phone: 9834783210,

      },
      {
          id: 4,
          name: "Harsh Singh",
          age: 26,
          email: "msingh03@gmail.com",
          phone: 9878903210,
      },
      {
          id: 5,
          name: "Raj Singh",
          age: 24,
          email: "msingh04@gmail.com",
          phone: 9876456210,
      },
  ]

  const usersJSX = users.map(user => (
      // <Fragment>
          <div 
          id={`list-${user.id}`} 
          key={user.id} 
          // className={`array-class-${user.id}`}
          className={`userLists`}
          >
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
          </div>
      // </Fragment>
  ));

  const listsJSX = lists.map(list => (
      // <Fragment>
          <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.age}</td>
              <td>{list.email}</td>
              <td>{list.phone}</td>
          </tr>
      // </Fragment>
  ));

    return(
      <main>

        {/* <h1>{users [0].id}</h1>
        <h2>{users [1].name}</h2>
        <h3>{users [2].age}</h3> */}

        {/* One */}

        {/* {users.map(user => (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <h2>{user.age}</h2>
            </div>

        ))}; */}

        {/* Two */}

        {/* <div className="App">
            { usersJSX }
        </div> */}

        {/* Three */}

        <Fragment>
            <div className="users"> { usersJSX }</div>
        </Fragment>

        <div className="tableBox">
            <table style={borderStyles}>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {listsJSX}
                </tbody>
            </table>
        </div>
        
        <div className="usersList">
            <UserList users={USERS} />
        </div>

      </main>
    );
  
}


export default Body;