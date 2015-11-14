var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.setFontSize(14);
editor.getSession().setMode("ace/mode/c_cpp");
editor.getSession().setUseWrapMode(true);
editor.getSession().setTabSize(4);
editor.setValue("int a;int b;");
var debbug = document.getElementById("debbug");


function main(){
    var code = new Array;
    var variables = new Array;

    code = editor.getValue().split(";");
    console.log(code);

    for(var i = 0; i < code.length - 1; i++){
        if( /int /.test(code[i]) ) {
            code[i] = code[i].replace(/int /, "");
            //console.log(code[i]);
            variables.push({label: code[i], value: null});
            console.log(variables);
        }
    }
}
