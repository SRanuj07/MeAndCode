let first = "Anuj";
let second = "Shubham";
// console.log(first + second + "Ankit") AnujShubhamAnkit
// console.log(first + " " + second + " " + "Ankit") Anuj Shubham Ankit

console.log(` This is ${first}  and what about you ${second}  and what are you doing Ankit`);

const name  = new String("Anujwww");
// console.log(name);
// console.log(name[0]);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(1,4));
// console.log(name.slice(1));
// console.log(name.replace("Anuj", "Ankit"));
// console.log(name.concat(" Kumar"));
// console.log(name.trim());
// console.log(name.charAt(2));
// console.log(name.indexOf("u"));
// console.log(name.lastIndexOf("u"));
// console.log(name.split("u"));
// console.log(name.includes("uj"));
// console.log(name.startsWith("Anu"));
// console.log(name.endsWith("uj"));
// console.log(name.repeat(3));
// console.log(name.valueOf());    
// console.log(name.search("u"));
// console.log(name.match("u"));
// console.log(name.substr(1,3));
// console.log(name.substring(1,3));
// console.log(name.padStart(10, "A"));
// console.log(name.padEnd(10, "A"));
// console.log(name.charCodeAt(2));
// console.log(name.localeCompare("Anuj"));
// console.log(name.normalize());
// console.log(name.toString());
// console.log(name.anchor("Anuj"));
// console.log(name.big());
// console.log(name.blink());
// console.log(name.bold());
// console.log(name.fixed());
// console.log(name.fontcolor("red"));
// console.log(name.fontsize(5));
// console.log(name.italics());
// console.log(name.link("https://www.google.com"));
// console.log(name.small());
// console.log(name.strike());
// console.log(name.sub());
// console.log(name.sup());    
// console.log(name.toLocaleLowerCase());
// console.log(name.toLocaleUpperCase());
// console.log(name.toSource());
// console.log(name.toJSON());
// console.log(name.unanchor());
// console.log(name.valueOf());
// console.log(name.__proto__);
// console.log(String.fromCharCode(65,66,67));
// console.log(String.fromCodePoint(65,66,67));
// console.log(String.raw`Hello\nWorld`);
console.log(name.__proto__)//{}
console.log(Object.getPrototypeOf(name));//{}
console.log(name.length)//7
console.log(name.toUpperCase());//ANUJ
console.log(name.charAt(3))//J
console.log(name.indexOf('n'))//1



// String Properties and Methods
console.log(name.replace("Anuj", "Ankit"));//Ankitwww
console.log(name.slice(1,4));
console.log(name.slice(1));//nujwww
console.log(name.concat(" Kumar"));
console.log(name.trim());//Anujwww
console.log(name.charAt(2));//u
console.log(name.indexOf("u"));//2
console.log(name.lastIndexOf("u"));//5
console.log(name.split("u"));//[ 'An', 'jww', 'w' ]
console.log(name.includes("uj"));//true
console.log(name.startsWith("Anu"));//true
console.log(name.endsWith("uj"));//true
console.log(name.repeat(3));//AnujwwwAnujwwwAnujwww
console.log(name.valueOf());//Anujwww
console.log(name.search("u"));
console.log(name.match("u"));//[ 'u', index: 2, input: 'Anujwww', groups: undefined ]
console.log(name.substr(1,3));//nuj
console.log(name.substring(1,3));//nu
console.log(name.padStart(10, "A"));//AAAnujwww
console.log(name.padEnd(10, "A"));//AnujwwwAAA
console.log(name.charCodeAt(2));//117
console.log(name.localeCompare("Anuj"));//1
console.log(name.normalize());//Anujwww
console.log(name.toString());//Anujwww
console.log(name.toLocaleLowerCase());//anujwww
console.log(name.toLocaleUpperCase());//ANUJWWW

// Deprecated Methods (Avoid using these)
console.log(name.anchor("Anuj"));//<a name="Anuj">Anujwww</a>
console.log(name.big());//<big>Anujwww</big>
console.log(name.blink());//<blink>Anujwww</blink>
console.log(name.bold());//<b>Anujwww</b>
console.log(name.fixed());//<tt>Anujwww</tt>
console.log(name.fontcolor("red"));//<font color="red">Anujwww</font>
console.log(name.fontsize(5));//<font size="5">Anujwww</font>
console.log(name.italics());//<i>Anujwww</i>
console.log(name.link("https://www.google.com"));//<a href="https://www.google.com">Anujwww</a>
console.log(name.small());//<small>Anujwww</small>
console.log(name.strike());//<strike>Anujwww</strike>
console.log(name.sub());//<sub>Anujwww</sub>
console.log(name.sup());//<sup>Anujwww</sup>

// Static Methods
console.log(String.fromCharCode(65,66,67));//ABC
console.log(String.fromCodePoint(65,66,67));//ABC
console.log(String.raw`Hello\nWorld`);//Hello\nWorld
// https://www.w3schools.com/jsref/jsref_obj_string.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String