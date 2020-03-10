$.fn.isOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(document).ready(function () {
    window.odometerOptions = {
        auto: false, // Don't automatically initialize everything with class 'odometer'
        selector: '.my-numbers', // Change the selector used to automatically find things to be animated
        format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
        duration: 1000000000, // Change how long the javascript expects the CSS animation to take
        theme: 'car', // Specify the theme (if you have more than one theme css file on the page // Count is a simpler animation method which just increments the value,
        // use it when you're looking for something more subtle.
    };
    odometer.innerHTML = 999999;
});