countries.sort((a,b) => {
    if(a.name.common<b.name.common){
        return -1;
    }else{
        return 1;
    }
})

window.addEventListener("load", function(){
    
    let all = document.getElementById("all")
    let option = document.createElement("option")
    option.value = "none"
    option.textContent = "please select a country"
    all.appendChild(option)
    countries.forEach(country => {
        let option = document.createElement("option")
        option.value = country.name.common
        option.textContent = country.name.common
        all.appendChild(option)
    })
    all.addEventListener("change", () => {
        displayDetails(all.value)
    })
    let pop = this.document.getElementById("population")
    pop.addEventListener("click", () =>{
        displayDetails(BigPopulation())
    })
    let area = document.getElementById("area")
    area.addEventListener("click",() =>{
        displayDetails(large())
    })
    
    let prev = document.getElementById("prev")
    prev.addEventListener("click", () =>{
        prevT=true
        displayDetails(prev2())
    })
    
    let next = document.getElementById("next")
    next.addEventListener("click", ()=>{
        nextT = true
        displayDetails(next2())
    })
})
    let nextT = false
    let prevT = false
    let neighbours;
    let population;
    let big;
    let opened = [];
    let num = -1;
    function displayDetails(str) {
        if(prevT==false && nextT==false){
        opened.push(str)
        num++
    }else{
        prevT = false
        nextT = false
    }
        const mainCountry = document.getElementById("country");
        if(str !== undefined){
        mainCountry.innerHTML = '';
        countries.forEach(country =>{
            if (country.name.common == str) {
            neighbours = country.borders
            population = country.population
            big = parseInt(country.area)
            console.log(big)
            const mainCountry = document.getElementById("country")
            const flag = document.createElement("img");
            flag.src = country.flags.png;
            mainCountry.appendChild(flag)
            const commonName = document.createElement("h1");
            commonName.textContent = country.name.common;
            mainCountry.appendChild(commonName)
            const region = document.createElement("h2");
            region.textContent = `The region is: ${country.region}`;
            mainCountry.appendChild(region)
            const subRegion = document.createElement("h3");
            subRegion.textContent = `The subregion is: ${country.subregion}`;
            mainCountry.appendChild(subRegion)
            const capital = document.createElement("h4");
            capital.textContent = `The capital is: ${country.capital}`
            mainCountry.appendChild(capital)

            
            }
        })
        }else{
            mainCountry.innerHTML = '';
            const no = document.createElement("h4");
            no.textContent = `The asked wish cannot be fulfilled`
            mainCountry.appendChild(no)
        
        }
   
        }
        function BigPopulation(){
            let x;
            for(const i in neighbours){
            countries.forEach(country =>{
                if(country.cioc===neighbours[i] && country.population>population){
                    x=country.name.common
                    population=country.population
                }
            })
        }
        console.log(x)
        return x;
        }
        function large(){
            let x ;
            for(const i in neighbours){
                countries.forEach(country =>{
                    if(country.cioc===neighbours[i] && parseInt(country.area)>big){
                        x=country.name.common
                        big=parseInt(country.area)
                    }
                })
            }
            console.log(x)
            return x;
        }
        function prev2() {
            if (num > 0) {
                num--;
                return opened[num];
            }
            return undefined;
        }
        
        function next2() {
            if (num < opened.length - 1) {
                num++;
                return opened[num];
            }
            return undefined;
        }
        