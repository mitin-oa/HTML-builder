const fs = require('fs');
const { stdin, stdout } = require('process');

const output = fs.createWriteStream('./02-write-file/text.txt');
console.log ('Пожалуйста, введите текст');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit'){
        stdout.write('Пока!');
        process.exit();
    }

    else{
        output.write(data);
    }
});

process.on('SIGINT',() => {
    stdout.write('Пока!');
    process.exit();
}) 