(function($) {
    $.fn.typist = function(options) {
        var settings = $.extend({
            speed: 100,
            delay: 500,
            text: "Welcome to my Resume!"
        }, options);

        var element = this;
        var text = settings.text;
        var index = 0;

        function typeText() {
            if (index < text.length) {
                element.append(text.charAt(index));
                index++;
                setTimeout(typeText, settings.speed);
            }
        }

        setTimeout(typeText, settings.delay);
    };
})(jQuery);

// Example usage:
$('.dynamic-txts').typist({
    text: "Welcome to my Resume!",
    speed: 100
});
