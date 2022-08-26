# usbkey
usbkey is an event runner by specific USB device.

### Usage
### Install
```bash
npm install --save TakutoYoshikai/usbkey
```

### Example

#### Register USB device
Run below
```javascript
const usbkey = require("usbkey");
usbkey.register("/path/to/password-file"); //register key
```


#### Observe USB device
Run below
```javascript
const usbkey = require("usbkey");
//observe usb device
usbkey.observe("/path/to/password-file", {
  add: function() {},
  remove: function() {},
});
```

### License
MIT License
