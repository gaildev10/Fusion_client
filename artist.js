document.querySelector('button').addEventListener('click', apiRequest )

async function apiRequest(){
    const groupName = document.querySelector('input').value
    
    try{
        const response = await fetch(`https://simple-fusion-api.herokuapp.com/api/${groupName}`)
        const data = await response.json()

        document.querySelector('.groupName').innerText=data.groupName
        document.querySelector('.yearsActive').innerText=data.yearsActive
        document.querySelector('.recordLabel').innerText=data.recordLabel
        document.querySelector('.musicians').innerText=data.musicians['musicianName']
        document.querySelector('.releases').innerText=data.releases
        document.querySelector('#groupImage').src=data.groupImage
        document.querySelector('#groupCaption').innerText=data.groupCaption
       


    } catch(error) {
        console.log(error)
    }
}

