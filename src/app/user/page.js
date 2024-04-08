async function userList (){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}

const User = async () => {
    let users = await userList();
    console.log(users)
    
  return (
    <div>
        <h1>User list</h1>
        {users.map((user,index)=>{
            return(
                <li>{user.firstName}</li>
            )
        })}
    </div>
  )
}

export default User