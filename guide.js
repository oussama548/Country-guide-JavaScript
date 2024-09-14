//1- getting the elements
const input = document.getElementsByClassName('input')[0];
input.value = '';
const btn = document.getElementsByClassName('btn')[0];

//`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

//2- function to get the data from the api
let getData = async (country) => {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (!response.ok) {
            throw Error();
        }
        let data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}

//2- function to display the info on the screen
let display_data = async (country) => {
  try{


    const info_box = document.getElementsByClassName('info')[0];
    let data = await getData(country); //getting the data
    console.log(data);
    console.log(data[0].name.common);
    // displaying data on the screen
    info_box.classList.remove('error');
    info_box.innerHTML = `
        <div class="flag">

            <div class="img_holder">
                <img src=${data[0].flags.svg} class="img" loading="lazy">
                <caption class="country"><strong>${data[0].name.common}<strong></caption>
            </div>

        </div>

        <div class="stats">

            <p class="capital">Capital:<span>${data[0].capital}</span></p>
            <p class="continent">Continent:<span>${data[0].continents}</span></p>
            <p class="populationn">Population:<span>${data[0].population} people</span></p>
            <p class="curr">Currency:<span>${data[0].currencies[Object.keys(data[0].currencies)].name} -
            ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span></p>
            <p class="lang">Languages:<span>${Object.values(data[0].languages).toString()}</span></p>

        </div>
    
    `
  }    
  catch(error){
        console.log("error");
        let info_box=document.getElementsByClassName('info')[0];
        info_box.classList.add('error');
        info_box.textContent="Please enter valid country name";
  } 
};

// event-> clicking on search
btn.addEventListener('click', async () => {
    if (input.value != '') {
        await display_data(input.value);
        input.value='';
    }
});



