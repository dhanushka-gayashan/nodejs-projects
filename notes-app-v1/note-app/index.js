const notes = require('./notes')
const yargs = require('yargs')

// run: node index.js --version 
yargs.version('1.1.0')

// run: node index.js add --title="my note" --body="this is my note"
yargs.command({
    command: 'add',
    description: 'add a new note',
    builder: {
        title: {
            description: 'note title',
            demandOption: true, 
            type: 'string' 
        },
        body: {
            description: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// run: node index.js remove --title="my note"
yargs.command({
    command: 'remove',
    description: 'remove a note',
    builder: {
        title: {
            description: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// run: node index.js list
yargs.command({
    command: 'list',
    description: 'list your notes',
    handler() {
        notes.listNotes()
    }
})

// run: node index.js read --title="my note"
yargs.command({
    command: 'read',
    description: 'show seleted note content',
    builder: {
        title: {
            description: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)