function bead(){
    let tanszam = document.getElementById('adatszam').value;
    console.log(tanszam);
    class Tanulo {
        constructor(nev, email){
            this.nev = document.getElementById('nev').value;
            this.email = document.getElementById('email').value;
        }
        greet() {
            console.log(`Hello, my name is ${this.nev}   ${this.email}`);
        }
    }    
}

function hozzaad(){
    for (let i = 0; i < 5; i++){
        class Orarend{
            constructor(nap, megnev, sorszam, tanar){
                this.nap = document.getElementById('nap').value;
                this.megnev = document.getElementById('megnev').value;
                this.sorszam = document.getElementById('sorszam').value;
                this.tanar = document.getElementById('tanar').value;
            }
        }
    }
}


