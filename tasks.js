//task-1
function calculateMoney(ticketSale) {
    if (ticketSale < 0)
        return "Invalid Number";
    else
        return (ticketSale * 120) - 900;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

//task-2

function checkName(name) {
    if (typeof (name) !== "string")
        return "invalid";
    const newname = name.toLowerCase();
    const last = newname[newname.length - 1];
    if (last !== 'a' && last !== 'e' && last !== 'i' && last !== 'o' && last !== 'u' && last !== 'w' && last !== 'y')
        return "Bad Name";
    else
        return "Good Name";
}

console.log(checkName("salman"));
console.log(checkName("RAFEE"));
console.log(checkName("jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

// task-3

function deleteInvalids(array) {
    if (!Array.isArray(array))
        return "Invalid Array";
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number" && !isNaN(array[i]) && array[i] !== null && array[i] !== undefined)
            newArray.push(array[i]);
    }
    return newArray;
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));
console.log(deleteInvalids(23, 54, 'ds'));
console.log(deleteInvalids([true, 1, false]));

// task-4

function password(obj) {
    if (typeof obj!=="object" || !obj.name || !obj.birthYear || !obj.siteName || typeof obj.name !== 'string' || typeof obj.siteName !== 'string' || typeof obj.birthYear !== 'number' || obj.birthYear < 1000 || obj.birthYear > 9999) {
        return "invalid";
    }
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
    const newSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const str = newSiteName + "#" + name + "@" + birthYear;
    return str;
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" } ));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }  ));
console.log(password({ name: "toky", birthYear: 2000}));
console.log(password({ name: 34, birthYear: 2000}));

//task-5

function monthlySavings(arr , livingCost)
{
    if (!Array.isArray(arr) || typeof livingCost !== 'number')
        return "invalid input";
        let total = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>=3000)
        {
            arr[i]=arr[i]-((arr[i]*20)/100);
        }
         total += arr[i];
    }
    if(total-livingCost<0)
    return "earn more"
    else
    return total-livingCost;
}

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));