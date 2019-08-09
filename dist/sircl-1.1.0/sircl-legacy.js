/* Sircl $$version$$ legacy */
/* (c) Rudi Breedenraedt */

/// Components / features moved to legacy:
/// - Retina display support
///   Retired because HTML 5.1 now supports multiple resolution images through the srcset attribute.
/// - Context menu support
///   Retired because HTML 5.1 now natively supports context menus.
///   

/// Detect hi-res (retina) displays:
/// (from: http://www.sitepoint.com/support-retina-displays/)
var isHighResolutionDisplay = (
    window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)
);

/// Perform image substitution on high-res ('retina') displays:
/// i.e: <img src="house.jpg" rb-hires-src="house@2x.jpg" />
if (isHighResolutionDisplay) {
    rbLoaderExtensions.push([function (loaded) {
        $(loaded).find("IMG[rb-hires-src]").each(function (index, elem) {
            $(this).attr('src', $(this).attr('rb-hires-src'));
        });
    }]);
}


rbLoaderExtensions.push([function (loaded) {

    // Add handler on parent of a .contextmenu element to show/hide context menu:
    $(loaded).find(".contextmenu").each(function () {
        var cm = $(this);
        var target = $($(this).attr('contextmenu-for'));
        if (target.length == 0) target = $(this).parent();
        target.on("contextmenu", function (event) {
            // Hides any currently visible context menu:
            var wasVisible = false;
            $(".contextmenu").each(function () {
                if ($(this).css("display") != "none") {
                    $(this).css("display", "none");
                    wasVisible = true;
                }
            });

            // If no context menu was currently visible, show current:
            if (!wasVisible) {
                cm.css("top", (event.pageY - window.pageYOffset) + "px").css("left", (event.pageX - window.pageXOffset) + "px").css("position", "fixed").css("display", "block");
            }

            // Event is handled:
            event.stopPropagation();
            event.preventDefault();
        });
        target.on("click", function (event) {
            // On regular click, hide context menu:
            $(".contextmenu").each(function () {
                if ($(this).css("display") != "none") {
                    $(this).css("display", "none");
                }
            });
        });
    });

}]);
