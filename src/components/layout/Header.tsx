import { Fragment } from 'react';
import logo from '../../assets/images/logo.svg';
import Link, { LinkProps } from '@mui/material/Link';

const menubar = {
  display: "flex",
}

// const useStyles = makeStyles((theme: Theme) =>
// const useStyles = makeStyles((theme: Theme) =>
//     // createStyles({
//         button: {
//             // marginTop: theme.spacing(1),
//             // marginRight: theme.spacing(1),
//         },
//     // }),
// );

function Header (){
  
    // const classes = useStyles();

    const user = {
      name: "Maneesh Singh",
      email: "msingh@gmail.com"
    }
    let topHeader = "inactive"
    let main = "main"

    if (true){
      topHeader = "active"
    }


    return(
      <header className="App-header">
          {/* <div 
            // className='topNav'
            className={`Head ${topHeader} ${main}`}
          >
             <div className='name'>{user.name}</div>
             <div className='email'>{user.email}</div>
          </div> */}
          <img src={logo} className="App-logo" alt="logo" />
          <div style={menubar}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
    );
  
}


export default Header;