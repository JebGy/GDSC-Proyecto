async function loadData(){
    try{
        const response = await fetch('https://health-app-9b5fa-default-rtdb.firebaseio.com/clinicas')
        const data = await response.json()
        return data
        
    }catch(e){
        console.log(response);
    }

} 

export default loadData;