
import database from "../database/mock_database.js";
import mock_database from "../database/mock_database.js";


async function getAllUsersAPI(req, res) {

    let result = mock_database;

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
    
    try {
        let { id, first_name, last_name, email, gender, ip_address } = req.body;
        console.log("Received body: ", req.body);

        mock_database.push(req.body)

        res.status(200).json({
            "success": true,
            "message": "Successfully created user."
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": errors
        })
    }
}

async function editUserAPI(req, res) {
    
    try {
        console.log("This is the new details of the user: ", req.body);
        let targetId = req.body.id;
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
            "message": "There was an error editing a user.",
            "data": error
        })
    }
}


async function deleteUserAPI(req, res) {

} 

async function getUserAPI(req, res) {

}

async function filteredGetAPI(req,res) {

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