function Generate(){
        let adjective = document.getElementById("adjectives").value
        let noun = document.getElementById("nouns").value
        let verb = document.getElementById("verbs").value
        let name = document.getElementById("name").value

        let story = `You are travelling down a road near an old ${noun}, and see your sworn enemy ${name}. you fight it very ${adjective}, but you lose because you were ${verb} too much`;
        console.log (story)
        generate.innerHTML = story
}
