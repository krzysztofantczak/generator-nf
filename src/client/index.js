module.exports.container = function container ( id, content )
{
    document.body.innerHTML += '<div id="'+ id +'">' + content + '</div>';
};