const inquirer = require('inquirer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const templates = require('./src/generate-template')
const fs = require('fs')
const generateTemplate = require('./src/generate-template')

const members = []

const renderMenu = () => {
    return inquirer
    .prompt({
        type:'list',
        name:'menu',
        message:'What would you like to do',
        choices:['Add Engineer','Add Intern','Finish and Build the Page']
    }).then((choice) => {
        if(choice.menu === 'Add Engineer') {
            getEngineer()
        } else if(choice.menu === 'Add Intern'){
            getIntern()
        } else if (choice.menu === 'Finish and Build the Page'){
            let template = generateTemplate(members)
            fs.writeFile('./dist/index.html',template,err => {
                if (err) throw err
            })
        }
    })
}

const getIntern = () => {
    return inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:"Enter the name of the intern?"
        },
        {
            type:'input',
            name:'id',
            message:"Enter the id of the intern"
        },
        {
            type:'input',
            name:'email',
            message:'Enter the email of the intern'
        },
        {
            type:'input',
            name:'school',
            message:'Enter the name of the school'
        }
        ])
        .then((answers) => {
            const intern = new Intern(answers.name,answers.id,answers.email,answers.school)
            members.push(intern)
            renderMenu()
        })
}

const getManager = () => {
    return inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:"Enter the name of the manager?"
        },
        {
            type:'input',
            name:'id',
            message:"Enter the id of the manager"
        },
        {
            type:'input',
            name:'email',
            message:'Enter the email of the manager'
        },
        {
            type:'input',
            name:'officeNumber',
            message:'Enter the number of the manager office'
        }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber)
            members.push(manager)
            renderMenu()
        })
}

const getEngineer = () => {
        return inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:"Enter the name of the engineer?"
            },
            {
                type:'input',
                name:'id',
                message:"Enter the id of the engineer"
            },
            {
                type:'input',
                name:'email',
                message:'Enter the email of the engineer'
            },
            {
                type:'input',
                name:'github',
                message:'Enter the github username of the engineer'
            }
            ])
            .then((answers) => {
                const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
                members.push(engineer)
                renderMenu()
            })
}



getManager()