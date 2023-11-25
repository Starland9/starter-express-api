const { getMessaging } = require("firebase-admin/messaging");

const sendNotification = async (req, res) => {
  try {
    const { token, title, body, type } = req.body;
    // This registration token comes from the client FCM SDKs.
    const registrationToken =
      "fzUD4B8pQKqE5t_hUKz0Hz:APA91bEs5K1MCtPItoIZzhtAjVy7huogSSieG1PdZDokMCpPj_xQhSJdnJCTJzsIZa7bt4--vMgzmaVKKlokLiVFEhx9pKdpT-rCPLmYZXbjgf9it3Y0DHHoIHmjSffvy2EBBqrQdU4G";

    const message = {
      data: {
        title: title,
        body: body,
        type: type,
      },
      token: token || registrationToken,
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
