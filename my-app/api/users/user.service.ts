import {customFetch} from "@/utils/customFetch"

export interface Users {
    id: string,
    name: string,
    username:string,
    email:string,
    website:string,
    phone:string
}

export interface UsersListing {
    data:Users[]
}

export const  getUsers = async ()=>{
  const response = await customFetch({
   method:"GET",
   path: "users"
  })
//   console.log("api response",response);
  
  return response
}