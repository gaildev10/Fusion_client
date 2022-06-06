document.querySelector('button').addEventListener('click', apiRequest )

async function apiRequest(){
    const groupName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-fusion-api.herokuapp.com/api/${groupName}`)
        const data = await response.json()

        document.querySelector('.groupName').innerText=data.groupName
        document.querySelector('.yearsActive').innerText=data.yearsActive
        document.querySelector('.musicians').innerText=data.musicians
        document.querySelector('.releases').innerText=data.releases
        document.querySelector('.groupCaption').src=data.groupCaption

    } catch(error) {
        console.log(error)
    }
}

