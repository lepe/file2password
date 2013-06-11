/*!
  * domready (c) Dustin Diaz 2012 - License MIT
  */
!function(a,ctx,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):ctx[a]=b()}("domready",this,function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}});
/**
 * File password generator.
 * @author: Alberto Lepe (www.alepe.com)
 * @license: GNU LGPL
 * @since: 2013-05-01
 */
domready(function(){
    if (typeof window.FileReader === 'undefined') {
        return false; //don't do anything for now
    }
    var upload = document.createElement('input'),
        holder = document.createElement('div'),
        pass = document.getElementById('fpass');

    upload.setAttribute('type', 'file');
    holder.setAttribute('id', 'fpass_holder');
    pass.parentNode.insertBefore(holder, pass.nextSibling);
    holder.className = 'hidden';
    holder.appendChild(upload);

    pass.onfocus = function(e) {
        holder.className = '';
    };
    pass.onchange = function(e) {
        holder.className = 'hidden';
    };

    upload.onchange = function (e) {
      e.preventDefault();

      var file = upload.files[0],
          reader = new FileReader();
      reader.onload = function (event) {
        upload.value = "";
        genPass(event.target.result);
      };
      reader.readAsDataURL(file);
      return false;
    };
    holder.ondragover = function () { this.className = 'hover'; return false; };
    holder.ondragend = function () { this.className = ''; return false; };
    holder.ondrop = function (e) {
      this.className = '';
      e.preventDefault();
     
    var fileUrl = e.dataTransfer.getData('Text');
    if(fileUrl.indexOf("http") == 0) {
        return false;
    }

      var file = e.dataTransfer.files[0],
          reader = new FileReader();
      reader.onload = function (event) {
        genPass(event.target.result);
      };
      //console.log(file);
      reader.readAsDataURL(file);
      return false;
    };
    function genPass(data) {
        data = data.replace(/(\r\n|\n|\r|\/)/gm,"").replace(/.*base64,/,'').replace(/\+/g,'');
        data = data.replace(/(.)(?=\1)/g,"").match(/[0-9a-zA-Z]/gm).slice(20,50).join("");
        if(data.length != 30) {
            alert("File is too small to generate password, please choose another one (try a file with more than 40 bytes large)");
        }
        pass.value = data;
        var repeat = document.getElementById('fpassr');
        if(repeat !== null) repeat.value = data;
        holder.className = 'hidden';
    }
});
