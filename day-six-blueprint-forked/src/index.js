// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selCountry = document.querySelector("#selectcountry");


function saveCountry(){
    const value = selCountry.options[selCountry.selectedIndex].value;
    localStorage.setItem("country", value);
};

selCountry.addEventListener("change", saveCountry);

function refresh(){
    const country = localStorage.getItem("country");
    if (country !== null){
        selCountry.value=country;
    };

};

refresh();