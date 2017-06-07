function runningLogger(params) {
    console.log("I am running!")
}

function multiplyByTen(num) {
    return num * 10;
}
console.log(multiplyByTen(5));

function strReturn1() {
    return "str 1!"
}

function strReturn2() {
    return "str 2!"
}

function caller(param) {
    if (typeof param === "function") {
        param();
        console.log("function was called")
    }
}
caller(strReturn1);
caller(4);


function myDoubleConsoleLog(param1, param2) {
    if (typeof param1 === "function") {
        console.log(param1());
    }
    else if (typeof param2 === "function") {
        console.log(param2());

    }
}
myDoubleConsoleLog(strReturn1, 3);
myDoubleConsoleLog(3, strReturn1);
myDoubleConsoleLog(4, 3);

function caller2(param) {
    console.log("starting...");
    setTimeout(function () {
        if (typeof (param) === "function") {
            param(strReturn1, strReturn2);
        }
        console.log("ending?");
    }, 2000);
    return "interesting";
}
caller2(myDoubleConsoleLog);






