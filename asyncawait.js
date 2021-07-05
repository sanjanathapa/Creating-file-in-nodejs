const { resolve } = require("path/posix");

const getName=(name)=>{
    return new Promise((resolve,rejected)=>{
            setTimeout(()=>{
                resolve(name);
            },2000)
    })
    }
    const getHobbies=(name)=>{
        return new Promise((resolve,rejected)=>{
            resolve(['crrr','eating','singing'])
        })
    }
  async function showHobby(){
        const nm =await getName('sonam')
        const hobby= await getHobbies(nm)      
        console.log(nm,"has","these hobbies",hobby)
    
    }
    showHobby()