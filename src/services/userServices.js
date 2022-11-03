const BASE_API = "http://localhost:9000/"

export const userSignUp = async function (user){
  let response = await fetch(BASE_API + "users/addNewUser",{
    mode: "cors",
    headers:{
      'Content-Type' : 'application/json'
    },
    method: "POST",
    body:JSON.stringify(user)
  })

  let data = await response.json()

  console.log(data)
}

