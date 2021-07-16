const rpc = require("discord-rpc");
const client = new rpc.client({transport: "ipc"});

const activity = {
    details: "Zombie",
    assets: {
        large_image: "image_1",
        large_text: "Z simulator",
        small_image: "image_1",
        small_text: "joue a zombie simulator"
    },
    button: [{
        "label": "chek this out",
        "url": "#"
    }
  ],
  timestamps: {start: Date.now()},
  instance: True
};

client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: Process.pid, activity: activity});
    console.log("done.")
})

client.login({ clientId: "865295663055241246"});