/**
 * @file 生成模板
 * @author Justineo(justice360@gmail.com)
 */
var fs = require('fs');
var etpl = require('etpl');
etpl.config({
    strip: true
});

var projects = require('./projects.json');

function stringLiteralize(source) {
    return '"'
        + source
            .replace(/\x5C/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/\x0A/g, '\\n')
            .replace(/\x09/g, '\\t')
            .replace(/\x0D/g, '\\r')
        + '"';
}

var tplFiles = fs.readdirSync('./tpl');
tplFiles.forEach(function (file) {
    var tpl = fs.readFileSync('./tpl/' + file, {
        encoding: 'utf8'
    });

    var html = etpl.compile(tpl)({
        projects: projects
    });

    fs.writeFileSync('./html/' + file.replace('.tpl', ''), html, {
        encoding: 'utf8'
    });

    fs.writeFileSync(
        './js/' + file.replace('.tpl.html', '.js'), 
        'document.write(' + stringLiteralize(html) + ');', 
        {encoding: 'utf8'}
    );
});
