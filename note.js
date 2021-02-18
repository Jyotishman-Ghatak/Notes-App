const fs=require("fs");
const { title } = require("process");
const chalk=require("chalk")

const add=function(title,body){
    const note=load()
    const duplicateNote=note.find((note)=> note.title===title)
    if(!duplicateNote){
        note.push({
            title: title,
            body: body
        })
        console.log("Adding notes...")
        saveNotes(note)
        console.log(chalk.green.inverse("Note added!"))
    }
    else{
        console.log(chalk.red.inverse("Note title already exist"))
    }
}

const saveNotes=(note)=>{
    const dataString=JSON.stringify(note)
    fs.writeFileSync("notes.json",dataString)
}

const readNote=(title)=>{
    const note=load()
    const requiredNote=note.find((note)=> note.title===title)
    if(requiredNote){
        console.log(chalk.white.bold.underline(requiredNote.title))
        console.log(requiredNote.body)
    }
    else{
        console.log(chalk.red.inverse("Note of "+title+" not found."))
    }
}
const listNotes=()=>{
    dataJSON=load()
    if(dataJSON.length!==0){
        console.log(chalk.white.inverse("Here are the notes"))
        dataJSON.forEach((dataJSON) => {
            console.log(dataJSON.title)
        });
    }
    else{
        console.log(chalk.yellow.inverse("No Note has been added yet"))
    }    
}

const load=()=>{
    try{
        const dataBuffer=fs.readFileSync("notes.json")
        const stringData=dataBuffer.toString()
        const dataJSON=JSON.parse(stringData)
        return dataJSON
    }
    catch(e){
        return []
    }
}

const removeNote=(title)=>{
    const note=load()
    const notesToKeep=note.filter((note)=>note.title!==title)
    const noteToDelete=note.filter((note)=>note.title ===title)
    if(noteToDelete.length===0){
        console.log(chalk.red.inverse("No note of title "+title+" found!"))
        
    }
    else{
        console.log(chalk.green.inverse("Note has been deleted successfully"))
        saveNotes(notesToKeep)
    }

}

module.exports={
    add: add,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}