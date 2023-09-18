


const API_URL='https://reqres.in/api/users?page=2';




//fetching user data from the api
export async function getUser() {
  
    const res = await fetch(`${API_URL}`);
  
    /*fetch won't throw error on 400 errors (e.g. when URL is wrong), 
    so we need to do it manually. This will then go into the catch block, 
    where the message is set*/
  
    if (!res.ok) throw Error('Failed getting menu');
  
    const { data } = await res.json();
    return data;
  }
  





  