const admin = require("firebase-admin");
const serviceAccount = require("../../firekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendNotification = async (req, res) => {
  try {
    const { token, title, body, imageUrl, type } = req.body;

    const response = await admin.messaging().send({
      token: token,
      data: {
        type: type,
      },
      notification: {
        title: title,
        body: body,
        imageUrl: imageUrl,
      },
      // Set Android priority to "high"
      android: {
        priority: "high",
      },
      // Add APNS (Apple) config
      apns: {
        payload: {
          aps: {
            contentAvailable: true,
          },
        },
        headers: {
          "apns-push-type": "background",
          "apns-priority": "5", // Must be `5` when `contentAvailable` is set to true.
          "apns-topic": "io.flutter.plugins.firebase.messaging", // bundle identifier
        },
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  sendNotification,
};
