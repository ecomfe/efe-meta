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
});
