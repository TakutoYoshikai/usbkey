# usbkey
usbkey is a shell command executer by specific usb device.

### Usage
**install**
```bash
npm install --save TakutoYoshikai/usbkey
```

**example**
```javascript
const usbkey = require("usbkey");
usbkey.register("/path/to/password-file"); //register key

//observe usb device
usbkey.run("/path/to/password-file", {
  add: "shell command when key is inserted",
  remove: "shell command when key is removed",
});
```

### License
MIT License
