
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

        res.status(200).json({
            "success": true,
            "message": "Successfully created user."
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": error
        })
    }
}


export {
    getAllUsersAPI,
    createUserAPI
}

console.log("")