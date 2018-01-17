#pragma strict
var Import : UnityEngine.UI.InputField;
var Export : UnityEngine.UI.Text;

var numboro: int;

var imports = new Array ();
var Imports : String;

var str : String;

function Changer () {
	Imports = Import.text;
	numboro = 1;
	imports.Clear();
	while (numboro < Import.text.length + 1) {
		if (Imports.Substring(Import.text.length - numboro, 1) == "A" || Imports.Substring(Import.text.length - numboro, 1) == "a") {
			imports[numboro] = "ɐ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "B" || Imports.Substring(Import.text.length - numboro, 1) == "b") {
			imports[numboro] = "q";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "C" || Imports.Substring(Import.text.length - numboro, 1) == "c") {
			imports[numboro] = "ɔ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "D" || Imports.Substring(Import.text.length - numboro, 1) == "d") {
			imports[numboro] = "p";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "E" || Imports.Substring(Import.text.length - numboro, 1) == "e") {
			imports[numboro] = "ǝ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "F" || Imports.Substring(Import.text.length - numboro, 1) == "f") {
			imports[numboro] = "ɟ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "G" || Imports.Substring(Import.text.length - numboro, 1) == "g") {
			imports[numboro] = "ƃ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "H" || Imports.Substring(Import.text.length - numboro, 1) == "h") {
			imports[numboro] = "ɥ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "I" || Imports.Substring(Import.text.length - numboro, 1) == "i") {
			imports[numboro] = "ᴉ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "J" || Imports.Substring(Import.text.length - numboro, 1) == "j") {
			imports[numboro] = "ɾ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "K" || Imports.Substring(Import.text.length - numboro, 1) == "k") {
			imports[numboro] = "ʞ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "L" || Imports.Substring(Import.text.length - numboro, 1) == "l") {
			imports[numboro] = "l";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "M" || Imports.Substring(Import.text.length - numboro, 1) == "m") {
			imports[numboro] = "ɯ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "N" || Imports.Substring(Import.text.length - numboro, 1) == "n") {
			imports[numboro] = "u";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "O" || Imports.Substring(Import.text.length - numboro, 1) == "o") {
			imports[numboro] = "o";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "P" || Imports.Substring(Import.text.length - numboro, 1) == "p") {
			imports[numboro] = "d";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "Q" || Imports.Substring(Import.text.length - numboro, 1) == "q") {
			imports[numboro] = "b";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "R" || Imports.Substring(Import.text.length - numboro, 1) == "r") {
			imports[numboro] = "ɹ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "S" || Imports.Substring(Import.text.length - numboro, 1) == "s") {
			imports[numboro] = "s";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "T" || Imports.Substring(Import.text.length - numboro, 1) == "t") {
			imports[numboro] = "ʇ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "U" || Imports.Substring(Import.text.length - numboro, 1) == "u") {
			imports[numboro] = "n";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "V" || Imports.Substring(Import.text.length - numboro, 1) == "v") {
			imports[numboro] = "ʌ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "W" || Imports.Substring(Import.text.length - numboro, 1) == "w") {
			imports[numboro] = "ʍ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "X" || Imports.Substring(Import.text.length - numboro, 1) == "x") {
			imports[numboro] = "x";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "Y" || Imports.Substring(Import.text.length - numboro, 1) == "y") {
			imports[numboro] = "ʎ";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == "Z" || Imports.Substring(Import.text.length - numboro, 1) == "z") {
			imports[numboro] = "z";
		}else if (Imports.Substring(Import.text.length - numboro, 1) == " ") {
			imports[numboro] = " ";
		}else {
			Debug.Log("Error");
		}
		Debug.Log("Success x" + numboro);
		numboro ++; //Adds one to Numboro
		str = Array(imports).Join(""); 
	}
	Export.text = str;
	Debug.Log(str);
}

function ClipBoard () { //Copy code I found Online (Find better Sh!t)
	GUIUtility.systemCopyBuffer = str;
}

function MainMenu () { //Love how I have complicated Sh!t and then I have a simple return to ManMenu function (Edit: I love reading "Sh!t")
	Application.LoadLevel ("MainMenu");
}