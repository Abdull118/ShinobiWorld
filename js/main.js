document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charactersName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${charactersName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('Name').innerText = data.Name
        document.getElementById('Age').innerText = data.age
        document.getElementById('BirthDate').innerText = data.birthDate
        document.getElementById('Village').innerText = data.Village
        document.getElementById('Clan').innerText = data.Clan
        document.getElementById('Status').innerText = data.Status
    }catch(error){
        console.log(error)
    }
}