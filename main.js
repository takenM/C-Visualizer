var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.setFontSize(14);
editor.getSession().setMode("ace/mode/c_cpp");
editor.getSession().setUseWrapMode(true);
editor.getSession().setTabSize(4);
editor.setValue(" int a, b;\nint c;");
var debbug = document.getElementById("debbug");


function main(){
    var code = new Array;
    var variables = new Array;
    var tempCode = new Array;

    code = editor.getValue().split(";");
    //空要素削除
    for(var j = 0; j < code.length; j++)
        if(code[j] === '') code.splice(j,1);
    console.log(code);
    /**************:お前ちょっと寝てろ！！（ほかのやり方でやってみる）**************
    for(var i = 0; i < code.length - 1; i++){
        //変数宣言の場合
        if( /int /.test(code[i]) ) {
            code[i] = code[i].replace(/int /, "");
            code[i] = code[i].replace(/\s/,"");

            //console.log(code[i]);
            variables.push({label: code[i], value: null, type: "int", array: false});
            console.log(variables);
        }
        //変数宣言の場合
    }
    *****************************************************************************/
    //一週目！一番大きなループ 一文に区切る
    for(var i = 0; i < code.length; i++){
        tempCode = code[i].replace(/\n/, '');
        tempCode = tempCode.split(/\s|,/);
        //空要素削除
        for(var j = 0; j < tempCode.length; j++)
            if(tempCode[j] === '') tempCode.splice(j,1);
        //区切った文を処理していく

        console.log(tempCode);
    }

}
