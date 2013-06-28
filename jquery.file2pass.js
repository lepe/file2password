/**
 * File password generator.
 * @author: Alberto Lepe (www.alepe.com)
 * @license: GNU LGPL
 * @since: 2013-05-01
 * @version: 1.1 (jQuery version)
 * 
 * Automatically will set it on input.f2p:
 * <input class='f2p' /> 
 *
 * Manually set (by element):
 * $("input[type='password']").file2pass();
 * Equivalent to:
 * $.file2pass({ target : "input[type='password']" });
 *
 */
jQuery(function() {
    if($ === undefined) var $ = jQuery;
    //----- for elements ----
    $.fn.file2pass = function() {
        jQuery.file2pass({target : this});
    };
    //----- Initialize ------
    $.file2pass = function(options) {
        //--- Auto initialize:
        var instance = this;
        if ( !(instance instanceof jQuery.file2pass) )  {
            instance = new jQuery.file2pass(options);
            instance.start();
            return instance;
        } else {
            this.options = $.extend({ //DEFAULT
                target : "input.f2p"
            }, options || {});
        }
    };
    //---- Main class -----------
    $.file2pass.prototype = {
        start : function() {
            var genPass = this.genpass;
            if (typeof window.FileReader === 'undefined') {
                return false; //don't do anything for now
            }
            var $pass = $(this.options.target);
            $pass.each(function() {
                var $holder = $('<div class="fpass_holder">');
                $holder.hide().append('<input type="file">');
                $(this).after($holder);
            });
            //---- Set Triggers -----
            $pass.on('focus', function(){
                $(this).next(".fpass_holder").slideDown();
            }).on('blur', function(){
                $(this).next(".fpass_holder").slideUp();
            });
            $(".fpass_holder input").on('change', function(e) {
                var $upfile = $(this);
                e.preventDefault();
                var file = $upfile.get(0).files[0],
                    reader = new FileReader();
                reader.onload = function (event) {
                    $upfile.closest(".fpass_holder").prev($pass).val(genPass(event.target.result)).blur();
                };
                reader.readAsDataURL(file);
                return false;
            });
            $(".fpass_holder").on('dragover', function() {
                $(this).addClass('hover');
            }).on('dragend', function() {
                $(this).removeClass('hover');
                return false;
            }).on('drop', function(e){
                var $hold = $(this);
                $(this).removeClass('hover');
                e.preventDefault();
                var fileUrl = e.dataTransfer.getData('Text');
                if(fileUrl.indexOf("http") == 0) {
                    return false;
                }
                var file = e.dataTransfer.files[0],
                    reader = new FileReader();
                reader.onload = function (event) {
                    $hold.prev($pass).val(genPass(event.target.result)).blur();
                };
                reader.readAsDataURL(file);
                return false;
            });
        },
        genpass : function(data) {
            data = data.replace(/(\r\n|\n|\r|\/)/gm,"").replace(/.*base64,/,'').replace(/\+/g,'');
            data = data.replace(/(.)(?=\1)/g,"").match(/[0-9a-zA-Z]/gm).slice(20,50).join("");
            if(data.length != 30) {
                alert("File is too small to generate password, please choose another one (try a file with more than 40 bytes large)");
            }
            return data;
        }
    };
    //You may erase the next lines if you don't want to automatically set it:
    //----------------------------------------------------
    $("input[type='password']").file2pass();  //Auto start
    //-----------------------------------------------------
});
