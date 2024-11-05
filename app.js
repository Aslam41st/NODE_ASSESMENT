const displayMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, this is a message from the Promise!");
        }, 1000);
    });
};

displayMessage()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

    const fs = require('fs').promises;

const createFile = async () => {
    try {
        await fs.writeFile('message.txt', 'Hello, this is a file created using fs and async/await!');
        console.log('File created successfully!');
    } catch (error) {
        console.error('Error creating file:', error);
    }
};

createFile();