function timer () {
    console.log("\x1b[35m","5...");
    setTimeout(function () {
        console.log("\x1b[35m","5,4...")
    },1000)
    setTimeout(function () {
        console.log("\x1b[35m","5,4,3...")
    },3000)
    setTimeout(function () {
        console.log("\x1b[35m","5,4,3,2...")
    },5000)
    setTimeout(function () {
        console.log("\x1b[35m","5,4,3,2,1...")
    },6000)
    setTimeout(function () {
        console.log("\x1b[35m","5,4,3,2,1,0...")
    },7000)
    setTimeout(function () {
        console.log("\x1b[35m","5,4,3,2,1,0,-1...")
    },9000)
    setTimeout(function () {
        console.log("\x1b[35m","Scherzavo XD!!")
    },11000)
    setTimeout(function () {
        run()
    },13000)
}

function run () {
    let counter = 0;
    do {
        const a = "T4NT1/4U6UR1/M4RT1"
            console.log("\x1b[35m",a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a+a);
            console.log("\x1b[35m","")
        counter = counter +1;
    } while (counter<=1200000)
    setTimeout (()=>{
        console.log("")
        console.log("\x1b[35m","████████╗░█████╗░███╗░░██╗████████╗██╗  ░█████╗░██╗░░░██╗░██████╗░██╗░░░██╗██████╗░██╗")
        console.log("\x1b[35m","╚══██╔══╝██╔══██╗████╗░██║╚══██╔══╝██║  ██╔══██╗██║░░░██║██╔════╝░██║░░░██║██╔══██╗██║");
        console.log("\x1b[35m","░░░██║░░░███████║██╔██╗██║░░░██║░░░██║  ███████║██║░░░██║██║░░██╗░██║░░░██║██████╔╝██║");
        console.log("\x1b[35m","░░░██║░░░██╔══██║██║╚████║░░░██║░░░██║  ██╔══██║██║░░░██║██║░░╚██╗██║░░░██║██╔══██╗██║");
        console.log("\x1b[35m","░░░██║░░░██║░░██║██║░╚███║░░░██║░░░██║  ██║░░██║╚██████╔╝╚██████╔╝╚██████╔╝██║░░██║██║");
        console.log("\x1b[35m","░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚═╝  ╚═╝░░╚═╝░╚═════╝░░╚═════╝░░╚═════╝░╚═╝░░╚═╝╚═╝")
        console.log("\x1b[35m","░░░░░░░░░███╗░░░█████╗░");
        console.log("\x1b[35m","░░██╗░░░████║░░██╔══██╗");
        console.log("\x1b[35m","██████╗██╔██║░░██║░░██║");
        console.log("\x1b[35m","╚═██╔═╝╚═╝██║░░██║░░██║");
        console.log("\x1b[35m","░░╚═╝░░███████╗╚█████╔╝");
        console.log("\x1b[35m","░░░░░░░╚══════╝░╚════╝░");
    },5000)
    const milliseconds = Date.now();
    const seconds = milliseconds/1000;
    const minutes = seconds/60;
    const hours = minutes/60;
    const days = hours/24;
    const years = days/365;
    const date = new Date().toString().split(" ");
    const year = parseFloat(date[3]);
    const yearsDifference = year - 2022;
    const nextBirthday = 1666645243041 + (31557600000*yearsDifference+1);
    const millisecondsToNextBirthday = (60*60*1000) + (nextBirthday - milliseconds);
    const secondsToNextBirthday = parseFloat(millisecondsToNextBirthday/1000);
    const minutesToNextBirthday = parseFloat(secondsToNextBirthday/60);
    const hoursToNextBirthday = parseFloat(minutesToNextBirthday/60);
    const daysToNextBirthday = parseFloat(hoursToNextBirthday/24);
    setTimeout(function () {
        console.log("");
        console.log("Pensavi mi fossi dimenticato di farti un regalo...")
    },8000)
    setTimeout(function () {
        console.log("ma invece quest'anno è andata diversamente!")
    },13000)
    setTimeout(function () {
        console.log("perchè è proprio quest'anno che alla tua età bisogna aggiungere una cifra...")
    },15000)
    setTimeout(function () {
        console.log("")
        console.log("░░░░░░░░░███╗░░░█████╗░");
        console.log("░░██╗░░░████║░░██╔══██╗");
        console.log("██████╗██╔██║░░██║░░██║");
        console.log("╚═██╔═╝╚═╝██║░░██║░░██║");
        console.log("░░╚═╝░░███████╗╚█████╔╝");
        console.log("░░░░░░░╚══════╝░╚════╝░");
    },19000)
    setTimeout(function () {
        console.log("Non ti voglio stancare troppo riempiendoti di auguri, quindi direi di arrivare ai miei 2 regali, che penso siano un po' banali, ma che spero possano comunque piacerti e che ti possano (almeno per il primo) tornare utili:")
    },21000)
    setTimeout(function () {
        console.log("1) So che tu vuoi sempre sapere quanti giorni mancano al tuo prossimo compleanno, ma se ti dicessi che ora puoi calcolare anche i millisecondi...")
        setTimeout(function () {
            console.log("Il mio primo regalo è infatti un programma capace di calcolare persino i millisecondi mancanti al tuo compleanno, non si sa mai se ti possano tornare utile :D")
            setTimeout(function () {
                console.log("L'ultimo regalo, ma non meno importante, che io definirei meglio come un arma in tuo possesso è questo")
            },34000)
        },27000)
    },31000)
}
//timer()
run()

