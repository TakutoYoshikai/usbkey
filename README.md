# usbkey
usbkey is an event runner by specific USB device.

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
usbkey.observe("/path/to/password-file", {
  add: function() {},
  remove: function() {},
});
```

### License
MIT License
