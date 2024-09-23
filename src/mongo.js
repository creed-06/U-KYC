const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.log('failed');
    });

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    EmailAddress: {
        type: String,
        required: true
    },
    DateofBirth: {
        type: Date,
        required: true
    },
    generatedNumber:{
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    files: [{
        fileName: String,
        filePath: String
    }]
});

const LogInCollection = mongoose.model('LogInCollection', logInSchema);

module.exports = LogInCollection;
