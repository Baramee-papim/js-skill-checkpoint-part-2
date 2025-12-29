let getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json()
      return data;
  };
  
  async function getCustomerData() {
    /* Start coding here 🤩 */
     try {
      const userdata = await getUsers()
      //console.log(userdata)
      const userdataname = userdata.map((user) => user.name).filter((name) => name.length > 17 )
      console.log(userdataname);
    } catch {
        console.log('error')
      }
  }
  
getCustomerData()

  