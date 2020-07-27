const fs = require('fs');
const {generators, generatePage} = require('../src/page-template')

const writeFile = fileContent => {
    
    const generateHtml = () => {
        let html = '';
        fileContent.forEach(element => {
           let x = generators[element.constructor.name.toLowerCase()](element)
           html += x;
        });
        return generatePage(html);
    }
    const content = generateHtml();
    console.log(content);
    return new Promise((resolve, reject) => {
        
        fs.writeFile('./dist/index.html', content, err => {
            
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File ccopied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };