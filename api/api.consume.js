export async function loadData(){
    try{
        const response = await fetch('https://health-app-9b5fa-default-rtdb.firebaseio.com/clinicas.json')
        const data = await response.json()
        return data
        
    }catch(e){
        console.log(">",e);
    }
} 

export async function loadCita(){
    try{
        const response = await fetch('https://health-app-9b5fa-default-rtdb.firebaseio.com/citas.json')
        const data = await response.json()
        return data
        
    }catch(e){
        console.log(">",e);
    }
} 