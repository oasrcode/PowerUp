var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_APP_TYPE,
    project_id: process.env.FIREBASE_APP_PRROJECT_ID,
    private_key_id: process.env.FIREBASE_APP_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_APP_PRIVATE_KEY,
    client_email: process.env.FIREBASE_APP_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_APP_client_id,
    auth_uri: process.env.FIREBASE_APP_AUTH_URI,
    token_uri: process.env.FIREBASE_APP_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_APP_AUTH_PROVIDER_CERTS,
    client_x509_cert_url: process.env.FIREBASE_APP_CLIENT_CERT_URL,
  }),
});

exports.checkAuth = async (req, res, next) => {
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
    res.status(403).send("token missed");
  }
};
