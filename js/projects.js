async function cargarMainProject(){
    try{
        const projectMain = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
        if(!projectMain){
            throw new Error("error al cargar el JSON del proyecto");
        }
            const project = await projectMain.json();   //aqui cargue mi JSON
            
            const name = project[3].name;        //guardo la propiedad name del Json project en la posicion3
            const description = project[3].description;
            const content = project[3].content; 
            const completed_on = project[3].completed_on;
            const image = project[3].image;  
            
            
            document.getElementById("projectName").textContent = name;
            document.getElementById("description").textContent = description; //con byClassName no me funciona
            document.getElementById("completed_on").textContent = completed_on;
            document.getElementById("content").innerHTML = content;
            img_project.src = image;
            

    } catch (error){
        console.error("Error: ", error);
    }
}
cargarMainProject();


        /* Alternative way to inyect data
            const test = document.getElementById("test")
            test.innerHTML = `
            <section>                          
            <h1 class="title">${name}</h1>
            <div class="subtitle">
            <span class="UI-design-title"></span>
        
            <span class="completed-title">Completed on
            <span class="completed-title-data"></span>
            </span>
            </div>
        
            <div class="project-image-section">
            <img src="${image} class="project-image" alt="Simplify image" />  
            </div>
            <article class="project-description"></article>
            </section>
            `
        */