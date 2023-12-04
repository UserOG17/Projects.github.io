console.log("hello")
function Get_Data(){
        axios({
            method: "get",
            url: "https://opentdb.com/api.php",
            params:{
                amount: 1,
                category: 28,
                difficulty: "easy",
                type: "boolean"
            }
        }).then((response)=>{

            triviaResponse = response.data.results
            console.log(triviaResponse)
            questions.innerHTML=triviaResponse[0].question
        })

    }
    
let questions = document.getElementById("questions")
console.log(questions.innerHTML)
Get_Data()

let all_choices =["Toriel", "Papyrus","Undyne", "Alphys"]


