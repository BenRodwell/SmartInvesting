const APIKey = "7a59f82fef6532548931bd74b9542b66fff20c89"

document.getElementById('stockForm').addEventListener('submit', async function(event){
event.preventDefault();
})
fetchData();

async function fetchData(){



    try{
        // Stock Finder Search Bar
        const stockFinder = document.getElementById("stockFinder").value;
        // Stock Ticker Country Search Bar
        const stockCountry = document.getElementById("stockCountry").value;
        // Stock Ticker Finder & Country Search Bar API Key and website
        const response = await fetch(`https://public-api.quickfs.net/v1/data/all-data/${stockFinder}:${stockCountry}?api_key=${APIKey}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data)
        
        

        // Display Morningstar Industry
        const stockIndustry = data.data.metadata.morningstar_industry;
        const showstockIndustry = document.getElementById("stockIndustry");
        showstockIndustry.textContent = stockIndustry

        //Display Morningstar Sector
        const stockSector = data.data.metadata.morningstar_sector;
        const showstockSector = document.getElementById("stockSector");
        showstockSector.textContent = stockSector

        //Display Exchange
        const stockExchange = data.data.metadata.exchange;
        const showstockExchange = document.getElementById("stockExchange");
        showstockExchange.textContent = stockExchange

        //Display Country
        const stockCountrie = data.data.metadata.country;
        const showstockCountry = document.getElementById("stockCountry");
        showstockCountry.textContent = stockCountrie

        //Display Name
        const stockName = data.data.metadata.name;
        const showstockName = document.getElementById("stockName");
        showstockName.textContent = stockName

        //Display Description
        const stockDescription = data.data.metadata.description;
        const showstockDescription = document.getElementById("stockDescription");
        showstockDescription.textContent = stockDescription

        

        //Display ROIC 10 Year
        const roic_10_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_10_year = roic_10_year[roic_10_year.length - 10]*100;
        const decimal_places_roic_10_year = lastElement_roic_10_year.toFixed(2);
        const show_roic_10_year = document.getElementById("roic_10_year");
        show_roic_10_year.textContent = decimal_places_roic_10_year;

        const row = document.getElementById("colour");

        function changeColour() {

        if(decimal_places_roic_10_year < 15){
            row.style.color = 'red'
        } else {
            row.style.color = 'green'
        }
    }
        


        //Display ROIC 9 Year
        const roic_9_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_9_year = roic_9_year[roic_10_year.length - 9]*100;
        const decimal_places_roic_9_year = lastElement_roic_9_year.toFixed(2);
        const show_roic_9_year = document.getElementById("roic_9_year");
        show_roic_9_year.textContent = decimal_places_roic_9_year;


        //Display ROIC 8 Year
        const roic_8_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_8_year = roic_8_year[roic_8_year.length - 8]*100;
        const decimal_places_roic_8_year = lastElement_roic_8_year.toFixed(2);
        const show_roic_8_year = document.getElementById("roic_8_year");
        show_roic_8_year.textContent = decimal_places_roic_8_year;

        //Display ROIC 7 Year
        const roic_7_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_7_year = roic_7_year[roic_7_year.length - 7]*100;
        const decimal_places_roic_7_year = lastElement_roic_7_year.toFixed(2);
        const show_roic_7_year = document.getElementById("roic_7_year");
        show_roic_7_year.textContent = decimal_places_roic_7_year;

        //Display ROIC 6 Year
        const roic_6_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_6_year = roic_6_year[roic_6_year.length - 6]*100;
        const decimal_places_roic_6_year = lastElement_roic_6_year.toFixed(2);
        const show_roic_6_year = document.getElementById("roic_6_year");
        show_roic_6_year.textContent = decimal_places_roic_6_year;

        //Display ROIC 5 Year
        const roic_5_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_5_year = roic_5_year[roic_5_year.length - 5]*100;
        const decimal_places_roic_5_year = lastElement_roic_5_year.toFixed(2);
        const show_roic_5_year = document.getElementById("roic_5_year");
        show_roic_5_year.textContent = decimal_places_roic_5_year;

        //Display ROIC 4 Year
        const roic_4_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_4_year = roic_4_year[roic_4_year.length - 4]*100;
        const decimal_places_roic_4_year = lastElement_roic_4_year.toFixed(2);
        const show_roic_4_year = document.getElementById("roic_4_year");
        show_roic_4_year.textContent = decimal_places_roic_4_year;

        //Display ROIC 3 Year
        const roic_3_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_3_year = roic_3_year[roic_3_year.length - 3]*100;
        const decimal_places_roic_3_year = lastElement_roic_3_year.toFixed(2);
        const show_roic_3_year = document.getElementById("roic_3_year");
        show_roic_3_year.textContent = decimal_places_roic_3_year;

        //Display ROIC 2 Year
        const roic_2_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_2_year = roic_2_year[roic_2_year.length - 2]*100;
        const decimal_places_roic_2_year = lastElement_roic_2_year.toFixed(2);
        const show_roic_2_year = document.getElementById("roic_2_year");
        show_roic_2_year.textContent = decimal_places_roic_2_year;

        //Display ROIC 1 Year
        const roic_1_year = data.data.financials.annual.roic;
        // Get Last Element in Array
        const lastElement_roic_1_year = roic_1_year[roic_1_year.length - 1]*100;
        const decimal_places_roic_1_year = lastElement_roic_1_year.toFixed(2);
        const show_roic_1_year = document.getElementById("roic_1_year");
        show_roic_1_year.textContent = decimal_places_roic_1_year;



        //Display Sales/Revenue 10 Year

        //Display Sales/Revenue 9 Year

        //Display Sales/Revenue 8 Year

        //Display Sales/Revenue 7 Year

        //Display Sales/Revenue 6 Year

        //Display Sales/Revenue 5 Year

        //Display Sales/Revenue 4 Year

        //Display Sales/Revenue 3 Year

        //Display Sales/Revenue 2 Year

        //Display Sales/Revenue 1 Year

    }
    catch(error){
        console.error(error);
    }
}


