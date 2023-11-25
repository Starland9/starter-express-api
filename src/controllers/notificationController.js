const { getMessaging } = require("firebase-admin/messaging");

const sendNotification = async (req, res) => {
  try {
    const { token, title, body, type } = req.body;

    const message = {
      data: {
        title: title,
        body: body,
        type: type,
      },
      token: token,
    };

    // Send a message to the device corresponding to the provided
    // registration token.
    getMessaging()
      .send(message)
      .then((response) => {
        // Response is a message ID string.
        console.log("Successfully sent message:", response);
        res.status(200).json({ message: "Notification sent successfully" });
      })
      .catch((error) => {
        console.log("Error sending message:", error);
        res.status(500).json({ message: "Internal server error" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  sendNotification,
};
