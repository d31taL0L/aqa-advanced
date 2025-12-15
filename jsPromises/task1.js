function printTextOnTime(text, ms) {
    setTimeout(() => {
        console.log(text);
    }, ms);
}

printTextOnTime("Hello World!", 2000)