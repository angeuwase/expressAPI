const express = require('express');
const cors = require('cors');   




const app = express();


// Middleware
app.use(express.json());    // will be able to work with req.body directly in the code
app.use(cors())             // allow applications from different domains to interact with each other



// Main Application ///
// public route
app.get('/', (req, res)=>{
    res.send('Main application landing page')
})

// public route


const tenants = [
    {id: 1, name: "tenantA", email:'test@gmail.com', questions: 'Who served you?, How would you rate the service?'},
    {id: 2, name: "tenantB", email:'test2@gmail.com'},
];



const tenantAQuestions = [
    {id: 1, dscription:'Who served you?', required: true, },
    {id: 2, dscription:'How would you rate the service?', required: true, }
];

const tenantBQuestions = [
    {id: 1, dscription:'What show did you attend?', required: true, },
    {id: 2, dscription:'What artist did you enjoy the most?', required: true, }
];





// register tenant
app.post('/register', async (req, res)=>{


// login tenant
app.get('/:tenantName/login', (req, res)=>{
    res.send(`this is the login page for tenants. Logging in ${req.params.tenantName}`)

})

// get configuration details for the tenant's survey form
app.get('/config/:tenantName', (req, res)=>{
    res.send(`This is where the react app will be able to request for the tenant's config. Requesting config details for ${req.params.tenantName}`)
})
 
// users submitting surveys 
app.post('/:tenantName/survey', (req, res)=>{
    res.send(`This is the endpoint for accepting survey submissions and saving them to the database.`)
})


// tenant can view all the surveys submitted if logged in
app.get('/:tenantName/surveys', (req, res)=>{
    res.send(`This is a reserved route. ${req.params.tenantName} able to access and interact with their submitted surveys`)
})













const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })