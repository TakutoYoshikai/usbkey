const usbDetect = require("usb-detection");
const fs = require("fs");
const execSync = require("child_process").execSync;
const crypto = require("crypto");

function makeHash(id) {
  return crypto.createHash("sha256").update(id, "utf8").digest("hex");
}

function makeUniqueId(device) {
  return makeHash(device.deviceName + ":" + device.manufacturer + ":" + device.serialNumber);
}

function register() {
  usbDetect.on("add", (device) => {
    if (process.argv[2] === "register") {
      const pw = makeUniqueId(device);
      fs.writeFileSync(__dirname + "/pw.txt", pw);
      usbDetect.stopMonitoring();
      process.exit(0);
      return;
    }
    const pw = fs.readFileSync(__dirname + "/pw.txt", "utf8").slice(0, 64);
    const id = makeUniqueId(device); 
    if (pw === id) {
      execSync("/home/lucky/tbin/tsys on");
    }
  });
  usbDetect.startMonitoring();
}
function run(events) {
  usbDetect.on("add", (device) => {
    const pw = fs.readFileSync(__dirname + "/pw.txt", "utf8").slice(0, 64);
    const id = makeUniqueId(device); 
    if (pw === id) {
      execSync(events.add);
    }
  });

  usbDetect.on("remove", (device) => {
    let pw = fs.readFileSync(__dirname + "/pw.txt", "utf8").slice(0, 64);
    const id = makeUniqueId(device); 
    if (pw === id) {
      execSync(events.remove);
    }
  });
  usbDetect.startMonitoring();
}

module.exports = {
  run,
  register,
}
