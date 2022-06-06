document.querySelector('button').addEventListener('click', apiRequest )

async function apiRequest(){
    const groupName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-fusion-api.herokuapp.com/api/${groupName}`)
        const data = await response.json()
        console.log(data)

        // document.getElementById('.groupName').innerText="groupName"
        // document.getElementById('.yearsActive').innerText="data.yearsActive"
        // document.getElementById('.musicians').innerText="data.musicians"
        // document.getElementById('.releases').innerText="data.releases"
        // document.getElementById('#groupCaption').src="data.groupCaption"

    } catch(error) {
        console.log(error)
    }
}

