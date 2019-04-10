### **THIS PROJECT IS NO LONGER BEING MAINTAINED*

![](https://image.ibb.co/j0DbPy/photopile_preview_small.jpg)

Photopile JS
------------
**Photopile JS** is a JavaScript/jQuery image gallery that simulates
a pile of photos scattered about on a surface. Thumbnail clicks remove photos
from the pile, *(enlarging them as if being picked up by the user)*, and
once in view a secondary click returns the photo to the pile.
Thumbnails are draggable, enhancing the experience by allowing photos
buried deep in the pile to be uncovered.

**Demo:** [https://bri.how/project/photopile/demo.html](https://bri.how/projects/photopile/demo.html)

Usage
-----
**Include in your project:**

* jQuery
* jQuery UI
* jQuery UI Touch Punch
* photopile.css
* photopile.js
* loading.gif
* nav-sprites.png

*Reference demo.html for details*

Add gallery markup:

    <div class="photopile-wrapper">
      <ul class="photopile">
        <li>
          <a href="PATH/TO/YOUR/FULLSIZE/IMAGE">
            <img src="PATH/TO/YOUR/THUMBNAIL/IMAGE" alt="Image description" ... />
          </a>
        </li>
        <!-- Add as many list items as you require for your gallery :) -->
      </div>
    </div>

And script:

    PhotoPile({
      OPTION: VALUE,
      ...
    }).scatter()

Optionables here (with default values):

    // Thumbnails
    numLayers:          5,          // number of layers in the pile (max zindex)
    thumbOverlap:       50,         // overlap amount (px)
    thumbRotation:      45,         // maximum rotation (deg)
    thumbBorderWidth:   2,          // border width (px)
    thumbBorderColor:   'white',    // border color
    thumbBorderHover:   '#EAEAEA',  // border hover color
    draggable:          true,       // enable draggable thumbnails

    // Photo container
    fadeDuration:       200,        // speed at which photo fades (ms)
    pickupDuration:     500,        // speed at which photo is picked up & put down (ms)
    photoZIndex:        100,        // z-index (show above all)
    photoBorder:        10,         // border width around fullsize image
    photoBorderColor:   'white',    // border color
    showInfo:           true,       // include photo description (alt tag) in photo container

    // Autoplay
    autoplayGallery:    false,      // autoplay the photopile
    autoplaySpeed:      5000,       // ms

    // Images
    loading:            'images/loading.gif'  // path to img displayed while gallery/thumbnails loads

The MIT License (MIT)
---------------------

Copyright (c) 2014 Photopile JS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
