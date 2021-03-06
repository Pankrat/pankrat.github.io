const cities = [
    ["Berlin", 3669491],
    ["Hamburg", 1847253],
    ["München", 1484226],
    ["Koeln", 1087863],
    ["Frankfurt am Main", 763380],
    ["Stuttgart", 635911],
    ["Düsseldorf", 621877],
    ["Leipzig", 593145],
    ["Dortmund", 588250],
    ["Essen", 582760],
    ["Bremen", 567559],
    ["Dresden", 556780],
    ["Hannover", 536925],
    ["Nürnberg", 518370],
    ["Duisburg", 498686],
    ["Bochum", 365587],
    ["Wuppertal", 355100],
    ["Bielefeld", 334195],
    ["Bonn", 329673],
    ["Muenster", 315293],
    ["Karlsruhe", 312060],
    ["Mannheim", 310658],
    ["Augsburg", 296582],
    ["Wiesbaden", 278474],
    ["Mönchengladbach", 261034],
    ["Gelsenkirchen", 259645],
    ["Braunschweig", 249406],
    ["Aachen", 248960],
    ["Kiel", 246794],
    ["Chemnitz", 246334],
    ["Halle", 238762],
    ["Magdeburg", 237565],
    ["Freiburg", 231195],
    ["Krefeld", 227417],
    ["Mainz", 218578],
    ["Lübeck", 216530],
    ["Erfurt", 213981],
    ["Oberhausen", 210764],
    ["Rostock", 209191],
    ["Kassel", 202137],
    ["Hagen", 188686],
    ["Saarbrücken", 180374],
    ["Potsdam", 180334],
    ["Hamm", 179916],
    ["Ludwigshafen", 172253],
    ["Muelheim", 170632],
    ["Oldenburg", 169077],
    ["Osnabrück", 165251],
    ["Leverkusen", 163729],
    ["Heidelberg", 161485],
    ["Darmstadt", 159878],
    ["Solingen", 159245],
    ["Herne", 156449],
    ["Neuss", 153896],
    ["Regensburg", 153094],
    ["Paderborn", 151633],
    ["Ingolstadt", 137392],
    ["Offenbach", 130280],
    ["Fuerth", 128497],
    ["Wuerzburg", 127934],
    ["Ulm", 126790],
    ["Heilbronn", 126592],
    ["Pforzheim", 125957],
    ["Wolfsburg", 124371],
    ["Goettingen", 118911],
    ["Bottrop", 117565],
    ["Reutlingen", 115865],
    ["Koblenz", 114052],
    ["Bremerhaven", 113643],
    ["Erlangen", 112528],
    ["Bergisch Gladbach", 111846],
    ["Trier", 111528],
    ["Recklinghausen", 111397],
    ["Jena", 111343],
    ["Remscheid", 111338],
    ["Salzgitter", 104291],
    ["Moers", 103902],
    ["Siegen", 102770],
    ["Hildesheim", 101693],
    ["Guetersloh", 100861],
    ["Kaiserslautern", 100030],
    ["Cottbus", 99678],
    ["Hanau", 96492],
    ["Witten", 96459],
    ["Schwerin", 95653],
    ["Esslingen", 94145],
    ["Ludwigsburg", 93584],
    ["Gera", 93125],
    ["Iserlohn", 92174],
    ["Tuebingen", 91506],
    ["Dueren", 91216],
    ["Flensburg", 90164],
    ["Giessen", 89802],
    ["Zwickau", 88690],
    ["Ratingen", 87520],
    ["Luenen", 86348],
    ["Villingen Schwenningen", 85707],
    ["Konstanz", 84911],
    ["Marl", 84067],
    ["Worms", 83542],
    ["Velbert", 81842],
    ["Minden", 81716],
    ["Neumuenster", 80196],
    ["Dessau", 80103],
    ["Norderstedt", 79357],
    ["Delmenhorst", 77559],
    ["Bamberg", 77373],
    ["Marburg", 77129],
    ["Viersen", 77102],
    ["Rheine", 76218],
    ["Wilhelmshaven", 76089],
    ["Lüneburg", 75711],
    ["Gladbeck", 75610],
    ["Troisdorf", 74953],
    ["Bayreuth", 74783],
    ["Dorsten", 74704],
    ["Detmold", 74254],
    ["Arnsberg", 73456],
    ["Landshut", 73411],
    ["Castrop Rauxel", 73343],
    ["Luedenscheid", 72313],
    ["Brandenburg an der Havel", 72184],
    ["Bocholt", 71113],
    ["Aschaffenburg", 71002],
    ["Celle", 69540],
    ["Kempten", 69151],
    ["Fulda", 68635],
    ["Aalen", 68393],
    ["Lippstadt", 67952],
    ["Dinslaken", 67373],
    ["Kerpen", 66702],
    ["Herford", 66638],
    ["Ruesselsheim", 65881],
    ["Weimar", 65228],
    ["Sindelfingen", 64905],
    ["Neuwied", 64765],
    ["Plauen", 64597],
    ["Dormagen", 64340],
    ["Neubrandenburg", 63761],
    ["Grevenbroich", 63743],
    ["Rosenheim", 63551],
    ["Herten", 61821],
    ["Bergheim", 61601],
    ["Friedrichshafen", 61283],
    ["Schwaebisch Gmuend", 61137],
    ["Garbsen", 61032],
    ["Wesel", 60230]
];

function find_city(deaths) {
    for (const city of cities) {
        if (deaths >= city[1]) {
            return city[0];
        }
    }
}

function show_city(pictures) {
    var url = pictures['results'][0]['urls']['regular'];
    document.getElementById("image").setAttribute('src', url);
}

function find_pictures(city) {
    // Find really free image search library / API
}

function show_data(data) {
    var deaths = data['deaths'];
    var city = find_city(deaths);
    var last_update = data['meta']['lastUpdate'].slice(0, 10);
    document.getElementById("deaths").textContent = deaths;
    document.getElementById("city").textContent = city;
    document.getElementById("date").textContent = last_update;
    find_pictures(city);
}

fetch('https://api.corona-zahlen.org/germany')
    .then(response => response.json())
    .then(data => show_data(data));
