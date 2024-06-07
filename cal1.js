const express = require('express');
const bodyParser = require('body-parser');
const calculator = require('./calculator');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/cal.html');
});

// Handle form submission
app.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operation = req.body.operation;

    let result;
    switch (operation) {
        case 'add':
            result = calculator.add(num1,num2);
            break;
        case 'subtract':
            result = calculator.subtract(num1,num2);;
            break;
        case 'multiply':
            result = calculator.multiply(num1,num2);;
            break;
        case 'divide':
            result = calculator.divide(num1,num2);;
            break;
        case 'modulo':
            result = calculator.modulo(num1,num2);;
            break;
        case 'power':
            result = calculator.power(num1,num2);;
            break
        default:
            result = 'Invalid operation';
    }

    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

