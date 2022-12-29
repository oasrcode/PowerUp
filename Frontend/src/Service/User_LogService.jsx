

export function User_LogService(){
 

     const  getAllLiftByExercise=async(exercise_id,firebase_id, token)=> {
    
        var config = {
          method: "get",
          url: "http://localhost:8080/api/user_logs/"+exercise_id+"/"+firebase_id,
          headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
            "Content-Type": "application/json",
            AuthToken: token,
          },
        };
        return axios(config);
      }


      return(getAllLiftByExercise)
    


}

