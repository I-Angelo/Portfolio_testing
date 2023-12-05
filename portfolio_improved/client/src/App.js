// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimatedRoutes from './components/animations/AnimatedRoutes';
import './App.css'

function App() {
  return (
    <div className="App">
      {/* You can include any global styles or common components here if needed */}
      <div className="background"></div>
      <Routes>
        <Route path="/*" element={<AnimatedRoutes />} />
      </Routes>
    </div>
  );
}

export default App;



























// import axios from 'axios';
// import React from 'react';





// function ContactMe() {

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });

//     axios.post('http://localhost:8080/contact_me', data)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <form className='mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-cyan-400 mt-36 h-84' onSubmit={submitHandler}>
//         {/* ... your form inputs */}
//         <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='first_name' type='text' placeholder='First Name' name='first_name' />
//         <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='last_name' type='text' placeholder='Last Name' name='last_name' />
//         <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='message_content' type='text' placeholder='Message content' name='message_content' />
//         <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='contact_number' type='text' placeholder='Contact Number' name='contact_number' />
//         <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='email_address' type='text' placeholder='Email Address' name='email_address' />
//         {/* ... other inputs */}
//         <button className='px-3 py-1 rounded-sm bg-cyan-400' type='submit'>Submit</button>
//       </form>
//     </div>
//   );

// };

// export default ContactMe;

// const apiCall = () => {
//   axios.get('http://localhost:8080').then((data) => {
//     console.log(data)
//   })
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={apiCall}>Make API Call</button>
//       </header>
//     </div>
//   );
// }

// export default App;



/*
1. coming from the indexedDB.js file from the server setImmediate, we erase the content of anything
  between the header tags but leave the classname for now.
2. we dont need to import the logo either.
3. no on the terminal on the server side install axios
4. import axios
5. create a button to test the API call with an onclick event and calling the respective function
    <button onClick={apiCall}>Make API Call</button>
6. Create the arrow function apiCall
7. run the client side npm run start and get rid of webvitals on index.js in the client side
8. You will get an arror related to CORS
9. Go back to the server side on the terminal and install cors....
10. coming back from the index.js server side, we are going to check if we are 'get'ing the data 
  'like and subscribe' from our server side. For that we are going to get rid of the 'woohoo' and 
  pass the argument 'data' to our apiCall function:

  from :

    const apiCall = () => {
      axios.get('http://localhost:8080').then(() => {
        console.log('wohoo!')
      })
    }

  to: 

    const apiCall = () => {
      axios.get('http://localhost:8080').then((data) => {
        console.log(data)
      })
    }

11. We should see our data 'object' in the inspect console and we are done with the connection!
12. Now we are going to create the database schema in mysql
13. After creating the database, we move to the server side to install mysql on the terminal.... 

*/