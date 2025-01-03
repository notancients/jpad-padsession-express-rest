
import { mockDatabase } from "../database/mock_database.js";

let database = [ ...mockDatabase ];

async function getAllUsersAPI(req, res) {
    console.log("Received a get all users request.");
    let result = database;

    try {
        res.status(200).json({
            "success": true,
            "message": "Successfully created user.",
            "data": result
        })
    } catch (error) {
        res.status(400).json({
            "success":false,
            "message": error
        })
    }
}

async function createUserAPI(req, res) {
    console.log("Received a create user request.");
    try {
        let { id, first_name, last_name, email, gender, ip_address } = req.body;
        // console.log("Received body: ", req.body); // Example for showing the body

        database.push(req.body)

        res.status(200).json({
            "success": true,
            "message": "Successfully created user."
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            "success": false,
            "message": error
        })
    }
}

async function editUserAPI(req, res) {
    console.log("Received an edit user request.");
    try {
        // console.log("This is the new details of the user: ", req.body);
        let targetId = req.body.id;
        // For showing an error 
        // database = database.map( (user) => {
        //     if (user.id == targetId) {
        //         return req.body;
        //     } else {
        //         return user;
        //     }
        // });

        database.forEach((user, index) => {
            if (user.id == targetId) {
                database[index] = req.body;
            }
        })

        // console.log(oldDetails)
        res.status(200).json({
            "success":true,
            "message":  "Successfully edited the target user."
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            "success":false,
            "message": "There was an error with editing a user.",
        })
    }
}


async function deleteUserAPI(req, res) {
    console.log("Received a delete user request.");

    try {
        let targetId = req.params.id;
        database = database.filter( user => user.id != targetId);

        res.status(200).json({
            "success": true,
            "message": "Successfully deleted a user from the database."
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            "success":false,
            "message": "There was an error with deleting a user.",
        })
    }

} 

async function getUserAPI(req, res) {
    console.log("Received a get user request.");

    try {
        let targetId = req.params.id;
        let result = database.filter( user => user.id == targetId);
        res.status(200).json({
            "success": true,
            "message": "Successfully retrieved target user.",
            "data": result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            "success":false,
            "message": "There was an error with getting a user.",
        })
    }
}

async function filteredGetAPI(req,res) {
    console.log("Received a filtered get request.");

    try {
        let filter = req.query;
        let filterKeys = Object.keys(filter);
        console.log(filterKeys.length)
        console.log(req.query);
        let result = database.filter((user) => {
            let truths = 0;
            filterKeys.forEach((value) => {
                if (filter[value] == user[value]) {
                    truths += 1
                }})
            console.log(truths, user.first_name, filterKeys.length)
            if (truths == filterKeys.length) {
                return user;
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Successfully retrieved according to filter.",
            "data": result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            "success":false,
            "message": "There was an error with searching for a user(s).",
        })
    }
}

export {
    getAllUsersAPI,
    createUserAPI,
    getUserAPI,
    deleteUserAPI,
    editUserAPI,
    filteredGetAPI
}

console.log("")