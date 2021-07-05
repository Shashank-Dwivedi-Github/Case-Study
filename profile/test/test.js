const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../profile')
const User = require('../models/userModel')


// Assertion style ... should
chai.should()
chai.use(chaiHttp)

describe('Profile API', () => {
    /**
     * Test the GET Route
     */
    describe('GET LOGIN AND SIGNUP PAGE', () => {
        it('It should get login page', () => {
            chai.request(app)
                .get('/login')
                .then(response => {
                    response.should.have.status(200)
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
                })
        })

        it('It should get signup page', () => {
            chai.request(app)
                .get('/signup')
                .then(response => {
                    response.should.have.status(200)
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
                })
        })
    })

    describe('POST SIGNUP AND LOGIN', () => {
        it('It should signup', () => {
            chai.request(app)
                .post('/signup')
                .send({
                    "email":"darshan@gmail.com",
                    "password":"darshan"
                })
                .then((err, response) => {
                    response.should.have.status(200)
                    should.exist(res.body);
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should login', () => {
            chai.request(app)
                .post('/login')
                .send({
                    "email":"darshan@gmail.com",
                    "password":"darshan"
                })
                .then((err, response) => {
                    response.should.have.status(200)
                    should.exist(res.body);
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

    })

    describe('GET USER PROFILE', () => {
        it('It should get user profile', () => {
            chai.request(app)
                .get('/user/profile')
                .then(response => {
                    response.should.have.status(200)
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
                })
        })
    })

    describe('EDIT USER PROFILE', () => {
        it('Add additional details to complete profile', () => {
            chai.request(app)
                .post('/user/profile')
                .send({
                    "name":"Shashank Dwivedi",
                    "address": [{
                        "pincode":"454775",
                        "city": "Indore",
                        "address1": "Pratibha Colony",
                        "state": "Madhya pradesh",
                        "country": "India"
                    }]
                })
                .then(response => {
                    response.should.have.status(400)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('Add additional details to complete profile', () => {
            chai.request(app)
                .post('/user/profile')
                .send({
                    "name":"Shashank Dwivedi",
                })
                .then(response => {
                    response.should.have.status(400)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('Add additional details to complete profile', () => {
            chai.request(app)
                .post('/user/profile')
                .send({
                    "address": [{
                        "pincode":"454775",
                        "city": "Indore",
                        "address1": "Pratibha Colony",
                        "state": "Madhya Pradesh",
                        "country": "India"
                    }]
                })
                .then( response => {
                    response.should.have.status(400)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

    })

})