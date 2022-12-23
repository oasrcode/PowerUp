export function formatDate(date){
     let dateBirth = date ? date : "loading";

     const [year, month, day] = dateBirth.split('-');
    
     const result = [day, month, year].join('-');
    
    // console.log(result); // 👉️ "09/24/2022"
    return result
}