/**********************************************************

  modified PHOTOSETS.CSS/.JS by annasthms
  original PHOTOSETS.CSS by annasthms and espoirthemes

  compiled July 30, 2018
  modified January 13, 2019
  find out more at https://annasthms.github.io/photosets

  change log:
  - August 17, 2018: added display:inline-block; fallback

**********************************************************/

function addElementClass(e, c) {
  let classes = e.className.split(' ');
  if (!classes.includes(c)) classes.push(c);
  e.className = classes.join(' ').trim();
}
function initPhotosets(callback = null) {
  const photosets = document.querySelectorAll('[photoset-layout]:not(.initialized_photoset)')
  for (let i = 0; i < photosets.length; i++) {
    const photoset = photosets[i];
    const layout = photoset.getAttribute('photoset-layout');
    let p = 0;
    for (let l = 0; l < layout.length; l++) for (let j = 0; j < layout[l]; j++) {
      photoset.children[p].setAttribute('index',p);
      addElementClass(photoset.children[p++], 'span-' + 6 / parseInt(layout[l]));
    }
    addElementClass(photoset, 'initialized_photoset');
  }
  if ((typeof callback).toLowerCase() == "function") callback();
}
function gatherData(images, arr) {
  for (let i = 0; i < images.length; i++) {
    let currentData = {
      "width": images[i].getAttribute('data-width'),
      "height": images[i].getAttribute('data-height'),
      "low_res": images[i].getAttribute('data-lowres'),
      "high_res": images[i].getAttribute('data-highres')
    };
    arr.push(currentData);
  }
}
function getIndex(elem) {
  let i = 0;
  while( (elem = elem.previousElementSibling) != null ) i++;
  return i;
}
function lightbox(elem) {
  let currentPhotoset = elem.parentNode;
  let photosetPhotos = currentPhotoset.getElementsByTagName('div');
  let data = [];
  gatherData(photosetPhotos, data);
  Tumblr.Lightbox.init(data, getIndex(elem) + 1);
}
