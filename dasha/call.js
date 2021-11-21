async function call(phoneNumber, balance) {
    var sendAmount = "0"
    var sendTo = "0"

    const dasha = require("@dasha.ai/sdk");
    const app = await dasha.deploy("./dasha");

    await app.start();

    // Uncomment this code (and comment the two lines below) to have the entire conversation occur in the console instead of a phone call
    // const conv = app.createConversation({ phone: "", balance: balance });
    // await dasha.chat.createConsoleChat(conv);
    // const result = await conv.execute({ channel: "text" });

    const conv = app.createConversation({ phone: phoneNumber, balance: balance });
    const result = await conv.execute();

    await app.stop();
    app.dispose();

    sendAmount = result.output.sendAmount;
    sendTo = result.output.sendTo;

    return { sendAmount, sendTo }
}
