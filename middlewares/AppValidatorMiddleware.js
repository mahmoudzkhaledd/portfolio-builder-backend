exports.appValidatorMiddleWare = (req, res, next) => {
    next();
    // const key = req.headers.appKey;
    // if (key == process.env.MOBILE_APP_ACCESS || req.url == '/signout') {

    //     next();
    // } else { 
    //     return res.sendStatus(455);
    // }
}