# usbkey
usbkey is an event runner by specific USB device.

### Usage
### Install
```bash
npm install --save TakutoYoshikai/usbkey
```

### Example

#### Register USB device

```bash
usbkey-register
# insert USB device, then ./usbkey is generated.
```


#### Observe USB device

```javascript
const usbkey = require("usbkey");
//observe usb device
usbkey.observe("./usbkey", {
  add: function() {},
  remove: function() {},
});
```

### License
MIT License
