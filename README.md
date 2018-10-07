# photosets.css

a stylesheet by [@annasthms](https://annasthms.tumblr.com/) and [@espoirthemes](https://espoirthemes.tumblr.com/) on Tumblr

photosets.css is a CSS stylesheet (compiled by JavaScript, ironically) that lays out all photoset layouts using solely CSS and a nifty photosets variable, `{PhotosetLayout}`. The photosets’ pictures are arranged using the CSS grid layout, though a fallback using inline blocks has been provided, in case anyone is using a browser that doesn’t support CSS grid.

[Demo](https://codepen.io/annasthms/pen/RYwVXa) | [Learn more + Install](https://annasthms.github.io/photosets/)

### General Information
**built:** July 30, 2018 <br>
**by:** annasthms (Anna) and espoirthemes (Bridgette) <br>
**for:** use in Tumblr themes

#### Change Log
- August 17, 2018: added `display:inline-block;` fallback for those who don't use browsers that support CSS grid
- October 7, 2018: added "find out more" link to credits comment

<br><hr><hr><br>


## Basic Usage
1. under `<head>`, paste 
```html 
<link href="https://static.tumblr.com/0podkko/oDSpg7y88/photosets.css" rel="stylesheet">
```
2. replace your photosets block (e.g. `{Photoset}` or pxu's photoset) with
```html
<div class="photoset-grid" photoset-layout="{PhotosetLayout}">{block:Photos}<div><img src="{PhotoURL-HighRes}" /></div>{/block:Photos}</div>
```

<br>

## Basic Customization
The photosets have three "layers":
1. the photoset container
2. the image container
3. the image

To get a better idea of how the photosets are set up, please visit the [photosets.css installation guide](https://annasthms.github.io/photosets/#custom).

Here is a very basic rundown of the different CSS selectors for each layer and some basic styling options:
```css
/***** the entire photoset/photoset container *****/
[photoset-layout] {
  grid-column-gap: ##; /* this is the gap between the columns */
  grid-row-gap: ##; /* this is the gap between the rows */
  grid-gap: ##; /* this is the gap between both the rows and the columns; you should probably use this if they are the same value */
}
```
```css
/***** the image container *****/
[photoset-layout] div {
  padding: ##; /* padding in the each image's container */
  border: _____; /* border around each image's container */
}
```
```css
/***** the image *****/
[photoset-layout] img {
  border: _____; /* border around each image */
  border-radius: ##; /* each image's border radius */
}
```

<br>

## Things included in the [installation guide](https://annasthms.github.io/photosets/) not included here:
* An embedded demo
* Enabling the native Tumblr photoset lightboxes
* A combination of both of our styles (that took Anna quite some time to craft)

<br><hr><hr><br>

# Contact Us
If you have any questions that haven’t been answered, spot any layouts* that are missing, want to suggest a new feature, or simply would like to leave your feedback, please let either one or both of us know! Here is [Anna's askbox](https://annasthms.tumblr.com/faq) and [Bridgette's askbox](https://espoirthemes.tumblr.com/contact). We simply ask that you look through the installation guide and the [photosets.css tag on Anna's blog](https://annasthms.tumblr.com/tagged/a:%20photosets.css) before coming to us with questions.

<small><i>*a layout is the way the pictures in a photoset are organized; for example: a photoset with a layout of "13" would have two rows – the first row having one picture, the second row having three pictures</i></small>

<small><i>this readme was written by Anna very late at night so if there are any problems, please let her know.</i></small>
