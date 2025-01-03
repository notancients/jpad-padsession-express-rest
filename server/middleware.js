

function modifyBody(req, res, next) {
    req.body = {
        "id": 1000,
        "first_name": "Constantine",
        "last_name": "Lao",
        "email": "constantine@up.edu.ph",
        "gender": "N/A",
        "ip_address": "2.2.2.2"
    }
    
    next();
}

function printAMiddleware(req, res, next) {
    console.log("This is the first middleware.");
    next();
}

function printBMiddleware(req, res, next) {
    console.log("This is the second middleware.");
    next();
}

function missingNextMiddleware(req, res, next) {
    console.log("This is a middleware where the next function is never called.");
}

function specificPathMiddlware(req, res, next) {
    console.log("This is a middleware that will only apply to /specific/* paths.");
    next();
}

export function routerUseMiddleware(req, res, next) {
    console.log("This is a middleware that is going to be used with all routes in the router.");
    next();
}



export {
    modifyBody,
    printAMiddleware,
    printBMiddleware,
    missingNextMiddleware,
    specificPathMiddlware
}