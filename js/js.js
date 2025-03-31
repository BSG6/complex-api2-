document.querySelector('button').addEventListener('click', getTarot)



    function getTarot(){
        fetch(`https://tarotapi.dev/api/v1/cards/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}