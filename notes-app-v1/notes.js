const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!!'))
    }    
}

const removeNote = (title) => {
    const notes = loadNotes()    
    const updatedNotes = notes.filter((note) => note.title !== title)    
    if (notes.length > updatedNotes.length) {
        saveNotes(updatedNotes)
        console.log(chalk.green.inverse('Note removed!!'))
    } else {
        console.log(chalk.red.inverse('No note found!!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach(note => {
        console.log(chalk.yellow(note.title))
    });
}

const readNote = (title) => {
    const note = loadNotes().find((note) => note.title === title)
    if (note) {
        console.log(`Title ${chalk.green(note.title)} Body: ${note.body}`)
    } else {
        console.log(chalk.red.inverse('Note title taken!!'))
    } 
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }   
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON) 
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}