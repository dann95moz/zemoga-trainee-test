let negatives = null;
let positives = null;

function getData() {
    fetch("../assets/data.json")
        .then(res => res.json())
        .then(json => {

            let dataJson = json.data

            for (let index = 0; index < dataJson.length; index++) {


                positives = dataJson[index].votes.positive
                console.log(positives);
                negatives = dataJson[index].votes.negative
                let totalVotes = positives + negatives
                let positivePercentage = ((positives / totalVotes) * 100).toFixed(2)
                let negativePercentage = ((negatives / totalVotes) * 100).toFixed(2)

                console.log(positivePercentage, "porcentajes positivos");

                let img = "../assets/img/thumbs-down.svg";
                let thumbstatus = "down";


                document.querySelector(".introSurvey").style.backgroundSize = '100%'
                document.querySelector(".introSurvey").style.backgroundRepeat = 'no-repeat'
                if (positivePercentage > negativePercentage) {
                    img = "../assets/img/thumbs-up.svg"
                    thumbstatus = "up"
                }

                document.querySelector(".Card").innerHTML += `
                
             
               <div class="innerCard"id="card${index}" height:300px; width:300px; >
                
                <img src="${dataJson[index].picture}" alt="" class="card-img" >
                
                <img class="globalVotes ${thumbstatus}" src="${img}" alt="" >
                <h1 class=name>${dataJson[index].name}</h1>
                <h5 class=description>${dataJson[index].description}</h5>
                <div class=vote>
                <button class="up" id=up${index}><img src="../assets/img/thumbs-up.svg" alt=""></button>
                <button class="down" id=down${index}><img src="../assets/img/thumbs-down.svg" alt=""></button>
                <button id="vote${index}"class="voteButton" disabled>Vote now</button>
                </div>
                <div class=votesCalc>
                
                <div class="positive" style= width:${positivePercentage}%>
                <img src="../assets/img/thumbs-up.svg" alt="" width="15">
                <h4 id="positiveText${index}">${positivePercentage}%<h4/>
                </div>
                <div class="negative" style= width:${negativePercentage}%>
                
                <h4>${negativePercentage}%</h4>
                <img src="../assets/img/thumbs-down.svg" alt="" width="15"></div>
                <div/>
                </div>`


            }

        })


}
getData()

