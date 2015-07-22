// see http://stackoverflow.com/questions/3401136/resize-font-to-fit-in-a-div-on-one-line

(function ($) {
  $.fn.getTextWidth = function() {
    var spanText = $("BODY #spanCalculateTextWidth");

    if (spanText.size() <= 0) {
      spanText = $("<span id='spanCalculateTextWidth' style='filter: alpha(0);'></span>");
      spanText.appendTo("BODY");
    }

    var valu = this.val();
    if (!valu) valu = this.text();

    spanText.text(valu);

    spanText.css({
      "fontSize": this.css('fontSize'),
      "fontWeight": this.css('fontWeight'),
      "fontFamily": this.css('fontFamily'),
      "position": "absolute",
      "top": 0,
      "opacity": 0,
      "left": -2000
    });

    return spanText.outerWidth() + parseInt(this.css('paddingLeft')) + 'px';
  };

  /**
   * Adjust the font-size of the text so it fits the container.
   *
   * @param minSize     Minimum font size?
   * @param maxSize     Maximum font size?
   * @param truncate    Truncate text after sizing to make sure it fits?
   */
  $.fn.autoTextSize = function(minSize, maxSize, truncate) {
    var _self = this,
        _width = _self.innerWidth(),
        _textWidth = parseInt(_self.getTextWidth()),
        _fontSize = parseInt(_self.css('font-size'));

    console.log(_self)
    console.log(_width)
    console.log(_textWidth)
    console.log(_fontSize)

    while (_width < _textWidth || (maxSize && _fontSize > parseInt(maxSize))) {
      if (minSize && _fontSize <= parseInt(minSize)) break;

      _fontSize++;
      _self.css('font-size', _fontSize + 'px');

      _textWidth = parseInt(_self.getTextWidth());
    }

    if (truncate) _self.autoTruncateText();
  };

})(jQuery);

Template.logo.onRendered(function  () {
  // $('.logo-text a').flowtype({
  //  minimum : 200,
  //  maximum : 210
  // });

  // $('.logo-text').autoTextSize(24, 100, false);

  $('.logo-text').quickfit({
    min: 24,
    max: 100,
    truncate: false, 
    width: 210
  });
});