class Tarot {
    constructor(name,meanUp,meanRev){
        this.name = name;
        this.meanUp = meanUp;
        this.meanRev = meanRev;
    }
    describe(){
        document.querySelector('h1').innerHTML =
        `${this.name} has shown up for you. Upright, it shares this message: "${this.meanUp}." But if reversed, its energy shifts — revealing a deeper layer, a hidden lesson: "${this.meanRev}."`

    }
}
        document.querySelector('button').addEventListener('click', () => {
            const tarotCard = document.querySelector('#major').value;
                if (!tarotCard){
                    alert('Unfortunately, cards you\'ve pulled with an imaginary click can\'t be read.')
                        return;
                }
                fetch(`https://tarotapi.dev/api/v1/cards/${tarotCard}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const newCard = new Tarot(
                        data.card.name,
                        data.card.meaning_up,
                        data.card.meaning_rev
                )
                newCard.describe()
                return fetch(`https://api.giphy.com/v1/gifs/search?api_key=B4USSGj3Gs8Qvz6Tj9i9N4NTb1EX5Yt2&q=${encodeURIComponent(data.card.name)}&limit=1&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`);
                        })
                        .then(res => res.json())
                        .then(dataTwo => {
                            console.log(dataTwo)
                            document.querySelector('iframe').src = dataTwo.data[0].embed_url;
                        })
                        .catch(err => {
                            console.error("Spin that again:", err);
                        });
                    });
                    
                    
                    //  https://api.giphy.com/v1/gifs/search?api_key=B4USSGj3Gs8Qvz6Tj9i9N4NTb1EX5Yt2&q=${encodeURIComponent(data.name)}