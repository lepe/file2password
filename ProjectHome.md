**Convert any file to a password to be used in your own websites!**. Add an alternative password input to increase security. It's easy and secure!

# Problem: #
Longer and more complicated passwords are recommended nowadays, making them more difficult to remember (to most people). [Learn More ...](http://code.google.com/p/file2password/wiki/Introduction)

# Solution: #
Select a file (picture, document, music, etc...) and it will generate a secure password based on it. [Learn More ...](http://code.google.com/p/file2password/wiki/Introduction)

# Advantages: #
  * No need to remember any password (just a picture or a filename).
  * Most of the time people carry their files with them (USB, Smartphone, tablet, notebook, etc).
  * Small: only 2Kb library (+css)
  * Highly secure as it does not upload or shows the file used.
  * Drag & Drop is possible.
  * Alternatively, the password can be stored separately as text.
  * As a file, you password can be kept securely.
  * Encrypted directories can be used.
  * Online storage can be used.
  * No server-side scripting necessary.
  * It uses the File API, so it does not upload any file (no extra code required).
  * Different algorithms: same file, different passwords (TODO)
[Learn More ...](http://code.google.com/p/file2password/wiki/Introduction)

# DEMO #
http://file2password.alepe.com

# Browser Support: #

Tested:

  * Chrome
  * Firefox (Desktop & Android)
  * Opera (Opera Mobile)

Not supported:

  * Android browser 2.3.4

Untested:

  * Safari
  * IE
  * IPhone, etc.

Check File API compatibility: http://caniuse.com/fileapi

# How to: #

Just include the JS and CSS files in your HTML headers:

```html

<script src="file2pass.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<link rel="stylesheet" href="file2pass.css" type="text/css" />

...

<input type="text" id="fpass" value="" />
```

**You need one input field with ID = "fpass" (this restriction will be removed in JQuery version)**

And save the **upload.png** in the same directory or modify the **file2pass.css** path.

# Sites Using this Library: #

(coming soon)
