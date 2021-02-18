const yargs=require("yargs");
const fs=require("fs");
const chalk=require("chalk");
const { string, argv } = require("yargs");
const note=require("./note.js");


//add a note
yargs.command({
    command:"add",
    description:"Add a new note",
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{
            description:"Note Body",
            demandOption:true,
            type:"string"
        }
    },
    handler: (argv)=>{
        note.add(argv.title,argv.body)
    }
})

//remove a note
yargs.command({
    command:"remove",
    description:"remove a note",
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        note.removeNote(argv.title)
    }
})

//read a note
yargs.command({
    command:"read",
    description:"read a note",
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        note.readNote(argv.title)
    }
})
//list all notes
yargs.command({
    command:"list",
    description:"list the notes",
    handler: function(){
        note.listNotes()
    }
})

yargs.parse()

