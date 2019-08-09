/* Sircl $$version$$ unicons */
/* (c) Rudi Breedenraedt */

/// Unicode-Icons:
/// I.e: <span class="rb-unicon umbrella"></span>
/// See also: http://www.fileformat.info/info/unicode/block/miscellaneous_symbols/utf8test.htm
///           http://www.fileformat.info/info/unicode/block/dingbats/utf8test.htm
///           http://www.fileformat.info/info/unicode/block/miscellaneous_symbols_and_pictographs/utf8test.htm
///           http://www.fileformat.info/info/unicode/block/emoticons/utf8test.htm
///           http://www.fileformat.info/info/unicode/block/transport_and_map_symbols/utf8test.htm
rbLoaderExtensions.push([function (loaded) {
    $(loaded).find(".rb-unicon").each(function () {
        if ($(this).hasClass("sun")) $(this).html("&#x2600"); // ☀
        else if ($(this).hasClass("cloud")) $(this).html("&#x2601"); // ☁
        else if ($(this).hasClass("umbrella")) $(this).html("&#x2602"); // ☂
        else if ($(this).hasClass("snowman")) $(this).html("&#x2603"); // ☃
        else if ($(this).hasClass("comet")) $(this).html("&#x2604"); // ☄
        else if ($(this).hasClass("star")) $(this).html("&#x2605"); // ★
        else if ($(this).hasClass("star-empty")) $(this).html("&#x2606"); // ☆
        else if ($(this).hasClass("vintage-phone")) $(this).html("&#x260E"); // ☎
        else if ($(this).hasClass("vintage-phone-empty")) $(this).html("&#x260F"); // ☏
        else if ($(this).hasClass("balance")) $(this).html("&#x2696"); // ⚖
        else if ($(this).hasClass("number")) $(this).html("&#x2116"); // №
        else if ($(this).hasClass("alarm-clock")) $(this).html("&#x23f0"); // ⏰
        else if ($(this).hasClass("print-screen")) $(this).html("&#x2399"); // ⎙
    });
}]);