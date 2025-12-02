const selectElementagent = document.getElementById(Agents)

fetch("../../public/data/agents.json")
.then((Response) => Response.json())
.then((data) => {
        if (data.length > 0 ) { 
                for (let i = 0; i < 3; i++) { 
                        selectElementagent.innerHTML += `
                        class></a> <a`
                }
        }
})