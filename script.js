//your JS code here. If required.
function myFunc(params) {
	alert(arguments.callee.name);
	return;
}
myFunc();