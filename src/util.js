
export default {
  get12HrsForm: function (time) {
    if (time === 12) { return time + " pm"; }
    else if (time > 12) { return (time - 12) + " pm"; }
    else if (time === 0) { return 12 + " am" }
    else { return time + " am"; }
  },
  trimPath: function (path) {
    var trimmed = path.substring(path.lastIndexOf('/') + 1, path.length).split('-')
    return trimmed.length === 2 ? trimmed[0] + ' ' + trimmed[1] : trimmed[0]
  },
  handleDragStart: function (evt) {
    evt.target.style.opacity = '0.4';
    window.dragSrcEl = this;
    // eslint-disable-next-line
    evt.dataTransfer = effectAllowed = 'move';
    evt.dataTransfer.setData('text/html', this.innerHTML);
  },
  handleDragEnter: function (evt) {
    evt.target.classList.add('over');
  },
  handleDragOver: function (evt) {
    if (evt.preventDefault) { evt.preventDefault(); }
    evt.dataTransfer.dropEffect = 'move';
    return false;
  },
  handleDragLeave: function (evt) {
    evt.target.classList.remove('over');
  },
  handleDrop: function (evt) {
    if (evt.stopPropagation) { evt.stopPropagation(); }

    if (window.dragSrcEl != this) {
      window.dragSrcEl.style.opacity = '1';
      window.dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = evt.dataTransfer.getData('text/html');
    }

    return false;
  },
  handleDragEnd: function () {
    window.cols.forEach(function (col) {
      col.classList.remove('over');
    })
  },
  flashSalesRowTop: function (index) {
    return '<div class="-V-align -col-2 -no_padding"><div class="-V-inner"><p class="-arrow-bck -align-right">12 am</p><h2 class="-uppercase -align-left">live  <br/>now</h2></div></div><div class="position-absolutely" id="arrow-container"><div class="to-float left" id="prev-' + index + '">   <img class="bf-fs-arrow" src="./left-arrow.png" width="50" height="50" alt="left arrow"></div><div class="to-float right" id="next-' + index + '"><img class="bf-fs-arrow" src="./right-arrow.png" width="50" height="50" alt="right arrow"></div></div><div id="slider-' + index + '" class="-col-10 -no_padding -scrollable">'
  },
  flashSaleRowBottom: '</div></div>',
  codeRegEx: /\r\n|\n\r|\n|\r/g
}
