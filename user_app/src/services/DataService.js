export const getInformation= async()=>{
    const response = await fetch(`http://localhost:8080/user`);
    const getInfo = await response.json();
    return {
        getInfo
    }
}

export const createNewUser = async(user)=>{
    await fetch(`http://localhost:8080/user`,{
        body: JSON.stringify(user),
        headers:{
            "Content-type":"application/json"
        } ,
        method: "POST"
    })
};

export const deleteUser = async(id)=>{
    await fetch(`http://localhost:8080/user/${id}`,{
        method : "DELETE"
    })
};