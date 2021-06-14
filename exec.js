const { renameSync, existsSync } = require("fs")


const exec = (name)=>{
    const execsync = require("child_process").execSync
    if (existsSync("make-applecake-app") || existsSync(`${name}`)) {
        throw Error(`There is directory named make-applecake-app or ${name} . please delete it `)
    }
    execsync("git clone https://github.com/applecakejs/make-applecake-app")
    renameSync("./make-applecake-app" , `${name}`)
}
module.exports = {
    exec
}
