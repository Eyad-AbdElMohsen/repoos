import inquirer from "inquirer"
import axios from "axios"
import fs from "fs"
inquirer
    .prompt([
        {
            type: 'input',
            name: 'UserName',
            message: 'what is ur username'
        }
    ])
    .then(async (answers) => {
            try {
                const email =`https://api.github.com/users/${answers.UserName}/repos`;
                const response = await axios.get(email);
                const data = response.data.map((item)=>item.name);
                const join = data.join('\n');
                fs.writeFile('USERNAME.txt', join , ()=>{})
            } catch (error) {
                console.log("error" , error.message);
            }
        }
    )