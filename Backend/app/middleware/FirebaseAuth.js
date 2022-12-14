var admin = require("firebase-admin");

var serviceAccount = require("../config/jacked-oasrcode-firebase-adminsdk-ml404-85dbf96ef9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


exports.checkAuth= async (req, res, next)=> {
    if (req.headers.authtoken) {
      admin
        .auth()
        .verifyIdToken(req.headers.authtoken)
        .then(() => {
          next();
        })
        .catch((err) => {
          console.log(err);
          res.status(403).send(err);
        });
    } else {
      res.status(403).send("token no enviado");
    }
  }