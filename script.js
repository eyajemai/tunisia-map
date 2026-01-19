// À AJOUTER dans votre regionData - Liens Google Maps pour chaque région

const googleMapsLinks = {
    tunis: "https://www.google.com/maps/place/Tunis",
    ariana: "https://www.google.com/maps/place/Ariana,+Tunisia",
    benArous: "https://www.google.com/maps/place/Ben+Arous,+Tunisia",
    manouba: "https://www.google.com/maps/place/Manouba,+Tunisia",
    nabeul: "https://www.google.com/maps/place/Nabeul,+Tunisia",
    zaghouan: "https://www.google.com/maps/place/Zaghouan,+Tunisia",
    bizerte: "https://www.google.com/maps/place/Bizerte,+Tunisia",
    beja: "https://www.google.com/maps/place/Béja,+Tunisia",
    jendouba: "https://www.google.com/maps/place/Jendouba,+Tunisia",
    kef: "https://www.google.com/maps/place/Le+Kef,+Tunisia",
    siliana: "https://www.google.com/maps/place/Siliana,+Tunisia",
    sousse: "https://www.google.com/maps/place/Sousse,+Tunisia",
    monastir: "https://www.google.com/maps/place/Monastir,+Tunisia",
    mahdia: "https://www.google.com/maps/place/Mahdia,+Tunisia",
    kairouan: "https://www.google.com/maps/place/Kairouan,+Tunisia",
    kasserine: "https://www.google.com/maps/place/Kasserine,+Tunisia",
    sidiBouzid: "https://www.google.com/maps/place/Sidi+Bouzid,+Tunisia",
    sfax: "https://www.google.com/maps/place/Sfax,+Tunisia",
    gabes: "https://www.google.com/maps/place/Gabès,+Tunisia",
    medenine: "https://www.google.com/maps/place/Médenine,+Tunisia",
    tataouine: "https://www.google.com/maps/place/Tataouine,+Tunisia",
    gafsa: "https://www.google.com/maps/place/Gafsa,+Tunisia",
    tozeur: "https://www.google.com/maps/place/Tozeur,+Tunisia",
    kebili: "https://www.google.com/maps/place/Kébili,+Tunisia"
};
const regionData = {
    tunis: {
        name: "Tunis", 
        subtitle: "La Capitale", 
        icon: "🏛️", 
        pop: "~1M", 
        fond: "Antiquité", 
        stat: "Capitale",
        image: "image/tunisie.png",
        maps: "https://www.google.com/maps/place/Tunis",
        histoire: "Fondée au 2ème millénaire av. J.-C., Tunis devient capitale sous les Hafsides au 13ème siècle. La ville connaît son apogée sous les dynasties berbères et arabes. La Médina, inscrite au patrimoine mondial UNESCO depuis 1979, témoigne de cette richesse historique. Tunis a été successivement punique, romaine, vandale, byzantine, arabe, ottomane puis française avant l'indépendance en 1956.",
        origine: "Le nom 'Tunis' (تونس) pourrait dériver du berbère 'Tunes' signifiant 'bivouac' ou 'passer la nuit'. Une autre théorie l'associe à la déesse phénicienne Tanit, protectrice de Carthage. La ville s'est développée à l'ombre de Carthage avant de devenir la capitale du pays.",
        lieux: [
            { nom: "Médina de Tunis", desc: "Cœur historique classé UNESCO, avec ses souks authentiques et la mosquée Zitouna", photos: ["image/tunis/medina1.jpeg", "image/tunis/medina2.jpeg","image/tunis/medina3.jpeg", "image/tunis/medina4.jpeg","image/tunis/medina5.jpeg", "image/tunis/medina6.jpeg", "image/tunis/medina7.jpeg"] },
            { nom: "Avenue Habib Bourguiba", desc: "Artère principale moderne, 'les Champs-Élysées tunisiens'" , photos: ["image/tunis/avenue1.jpeg", "image/tunis/avenue2.jpeg","image/tunis/avenue3.jpeg","image/tunis/avenue4.jpeg"] },
            { nom: "Carthage", desc: "Ruines de l'antique cité punique et romaine" , photos: ["image/tunis/carthage1.jpeg", "image/tunis/carthage2.jpeg","image/tunis/carthage3.jpeg","image/tunis/carthage4.jpeg","image/tunis/carthage5.jpeg","image/tunis/carthage6.jpeg"] },
            { nom: "Sidi Bou Saïd", desc: "Village bleu et blanc perché, symbole du raffinement tunisien" , photos: ["image/tunis/sidibou1.jpeg", "image/tunis/sidibou2.jpeg","image/tunis/sidibou3.jpeg","image/tunis/sidibou4.jpeg","image/tunis/sidibou5.jpeg","image/tunis/sidibou6.jpeg","image/tunis/sidibou7.jpeg"] },
            { nom: "La Marsa", desc: "Quartier balnéaire chic avec cafés et restaurants" , photos: ["image/tunis/marsa1.jpeg", "image/tunis/marsa2.jpeg","image/tunis/marsa3.jpeg","image/tunis/marsa4.jpeg"] },
            { nom: "Cathédrale Saint-Vincent-de-Paul", desc: "Architecture néo-byzantine en plein centre-ville" , photos: ["image/tunis/cathedrale1.jpeg", "image/tunis/cathedrale2.jpeg","image/tunis/cathedrale3.jpeg","image/tunis/cathedrale4.jpeg","image/tunis/cathedrale5.jpeg","image/tunis/cathedrale6.jpeg","image/tunis/cathedrale7.jpeg"] },
            { nom: "Parc du Belvédère", desc: "Poumon vert de la capitale avec zoo" , photos: ["image/tunis/belveder1.jpeg", "image/tunis/belvedere2.jpeg","image/tunis/belvedere1.jpeg"] },
             { nom: "Les berges du Lac", desc: "sont un quartier moderne situé au nord de Tunis, aménagé autour du lac de Tunis. Il se distingue par ses avenues larges, ses espaces verts, ses cafés et restaurants, ainsi que par la présence de sièges d’entreprises et d’ambassades ", photos: ["image/tunis/lac1.jpeg", "image/tunis/lac2.jpeg","image/tunis/lac3.jpeg","image/tunis/lac4.jpeg","image/tunis/lac5.jpeg","image/tunis/lac6.jpeg"] },
        ],
        plats: [
            { nom: "Lablabi", desc: "Soupe de pois chiches épicée, petit-déjeuner traditionnel", photos: ["image/tunis/lablebi.jpeg"] },
            { nom: "Brik à l'œuf", desc: "Feuille croustillante farcie d'œuf, thon et câpres" , photos: ["image/tunis/brik1.jpeg", "image/tunis/brik2.jpeg"] },
            { nom: "Kafteji", desc: "Ratatouille tunisienne avec poivrons, tomates et œufs", photos: ["image/tunis/kafteji1.jpeg", "image/tunis/kafteji2.webp"] },
            { nom: "Couscous ", desc: "Version côtière du plat national", photos: ["image/tunis/couscous1.jpeg", "image/tunis/couscous2.jpg", "image/tunis/couscous1.webp"] },
            { nom: "Bambalouni", desc: "Beignets sucrés frits vendus sur la plage" , photos: ["image/tunis/bambalouni1.jpeg", "image/tunis/bambalouni2.jpeg"] },
            { nom: "Slata Mechouia", desc: "Salade de légumes grillés, accompagnée de thon et d’œufs, incontournable" , photos: ["image/tunis/slata1.jpeg"]},
            { nom: "Ojja merguez", desc: "Plat épicé à base de tomates, piments, œufs et merguez, fréquent dans les restaurants traditionnels" , photos: ["image/tunis/ojja1.jpeg", "image/tunis/ojja2.jpg"] },
            { nom: "les plats de poisson", desc: " on déguste surtout du poisson frais, grillé ou frit, accompagné de citron et salade, dans une ambiance maritime authentique" , photos: ["image/tunis/poisson.webp", "image/tunis/poisson2.webp"] }

        ],  
        culture: "Tunis est le centre culturel du pays avec ses théâtres, cinémas, festivals de musique (Jazz à Carthage, Festival International de Carthage). La ville mélange tradition méditerranéenne et modernité. L'artisanat de la médina (cuivre, cuir, parfums) côtoie les galeries d'art contemporain. Le dialecte tunisois influence tout le pays.",
        economie: "Centre économique et financier de la Tunisie, Tunis concentre les sièges sociaux, banques, administrations et services. Secteur tertiaire dominant avec commerce, tourisme et services. Zone industrielle en périphérie. Hub de transport avec port de La Goulette et aéroport international."
    },
    ariana: {
        name: "Ariana",
        subtitle: "La Ville Rose",
        icon: "🌹",
        pop: "~600K",
        fond: "Urbain",
        stat: "Aéroport Int.",
        image: "image/Ariana.png",
        
        histoire: "L'Ariana tire son nom de 'Riana' (le jardin en arabe tunisien). Ancienne zone agricole périurbaine transformée en gouvernorat en 1983. Développement urbain accéléré depuis les années 1970 avec l'expansion de Tunis. Abrite l'aéroport Tunis-Carthage depuis 1940.",
        
        origine: "Le nom 'Ariana' dérive du dialecte tunisien 'Riana' signifiant 'le jardin' ou 'la verdure', témoignant du caractère agricole originel de la région, aujourd'hui urbanisée.",
        
        lieux: [
            { nom: "Aéroport Tunis-Carthage", desc: "Porte d'entrée internationale de la Tunisie" },
            { nom: "Centres commerciaux", desc: "Tunisia Mall, Carrefour - shopping moderne" },
            { nom: "Parc du Belvédère", desc: "Espace vert aux limites d'Ariana" },
            { nom: "Mosquée Malik Ibn Anas", desc: "Architecture islamique moderne" },
            { nom: "Cité Ettadhamen", desc: "Quartier populaire dynamique" }
        ],
        
        plats: [
            { nom: "Makloub", desc: "Sandwich typiquement tunisien" },
            { nom: "Chapati tunisien", desc: "Galette farcie populaire" },
            { nom: "Fricassé", desc: "Beignet frit fourré au thon" },
            { nom: "Kefteji", desc: "Plat d'œufs et légumes" }
        ],
        
        culture: "Zone urbaine moderne et cosmopolite. Population jeune et dynamique. Forte activité commerciale. Culture urbaine tunisoise avec influence des quartiers populaires. Célébrations religieuses et mariage des traditions rurales et citadines.",
        
        economie: "Zone résidentielle et commerciale majeure. Grand pôle d'emploi avec zones d'activité économique. Services, commerce de détail, transport. Connexion stratégique grâce à l'aéroport international. Immobilier en plein essor."
    },
    benArous: {
        name: "Ben Arous",
        subtitle: "Pôle Industriel",
        icon: "🏭",
        pop: "~700K",
        fond: "Industriel",
        stat: "Sud Tunis",
        image: "image/benarous.png",
        histoire: "Ben Arous tire son nom de 'Ibn Arus', saint musulman dont le mausolée se trouve dans la région. Historiquement zone agricole, transformée au 20ème siècle en pôle industriel majeur suite à la politique d'industrialisation post-indépendance des années 1960-70. Hammam-Lif fut une station thermale prisée dès l'époque romaine.",
        origine: "Le nom 'Ben Arous' (ابن عروس) signifie 'fils du marié' en arabe, en référence à Sidi Ben Arous, saint soufi vénéré dont le tombeau est un lieu de pèlerinage. Ce sanctuaire attire toujours des visiteurs cherchant bénédiction et spiritualité.",
        lieux: [
            { nom: "Hammam-Lif", desc: "Station balnéaire historique avec thermes et plages" },
            { nom: "Bordj El Khadra", desc: "Ancienne forteresse ottomane" },
            { nom: "Rades", desc: "Port commercial et plages méditerranéennes" },
            { nom: "Megrine", desc: "Marché traditionnel et architecture typique" },
            { nom: "Mausolée Sidi Ben Arous", desc: "Site spirituel et culturel" },
            { nom: "Parc Ennahli", desc: "Espace vert de loisirs" },
            { nom: "Fouchana", desc: "Zone résidentielle moderne" }
        ],
        plats: [
            { nom: "Brik à l'œuf", desc: "Spécialité croustillante emblématique" },
            { nom: "Couscous au poisson", desc: "Version côtière savoureuse" },
            { nom: "Mloukhiya", desc: "Plat traditionnel aux feuilles de corète" },
            { nom: "Ojja", desc: "Ragoût épicé aux œufs et merguez" },
            { nom: "Fricassé", desc: "Sandwich tunisien frit et garni" },
            { nom: "Poisson grillé", desc: "Fraîcheur du port de Rades" },
            { nom: "Makroudh", desc: "Pâtisserie traditionnelle aux dattes" }
        ],
        culture: "Mélange de traditions bédouines et urbaines. Célébrations au mausolée de Sidi Ben Arous lors des fêtes religieuses. Hammam-Lif garde son charme balnéaire ancien. Artisanat présent dans certains quartiers. Zone de transition entre Tunis moderne et banlieues industrielles.",
        economie: "Zone industrielle majeure de Tunisie : industries manufacturières, textiles, chimiques, agroalimentaires, mécaniques. Port de Rades - hub logistique important. Zones franches d'exportation. Nœud de transport stratégique. Emploi important pour le Grand Tunis."
    },

    manouba: {
        name: "Manouba",
        subtitle: "Jardin de Tunis",
        icon: "🌾",
        pop: "~400K",
        fond: "Agriculture",
        stat: "Université",
        image: "image/manouba.png",
        
        histoire: "Région agricole historique à l'ouest de Tunis, réputée pour ses terres fertiles et son agriculture maraîchère. Créée gouvernorat en 2000. Abrite l'Université de la Manouba fondée en 2000, spécialisée en sciences humaines. Zone en transition entre ruralité et urbanisation.",
        
        origine: "Le nom 'Manouba' (منوبة) dérive du mot arabe 'manûba' désignant un lieu de halte ou de repos, probablement lié aux anciennes routes caravanières traversant la région.",
        
        lieux: [
            { nom: "Espaces verts agricoles", desc: "Paysages ruraux préservés" , photos: ["image/manouba/verte1.jpeg", "image/manouba/verte2.jpeg"] },
             { nom: "Musée du Bardo", desc: "Plus grande collection de mosaïques romaines au monde", photos: ["image/manouba/bardo1.jpeg","image/manouba/bardo2.jpeg","image/manouba/bardo3.jpeg","image/manouba/bardo4.jpeg"] },

            { nom: "Palais de la Rose (Palais Kobbet Ennhas)", desc: "Ancienne résidence des beys, entourée de jardins." , photos: ["image/manouba/palais1.jpg", "image/manouba/palais2.jpeg", "image/manouba/palais3.jpg"] }
        ],
        
        plats: [
            { nom: "Couscous ", desc: "Fraîcheur des champs locaux", photos: ["image/tunis/couscous1.jpeg", "image/tunis/couscous2.jpg", "image/tunis/couscous1.webp"]  },
            { nom: "Salade méchouia", desc: "Légumes grillés typiques" , photos: ["image/tunis/slata1.jpeg"]},
            { nom: "Tabouna", desc: "Pain maison traditionnel" , photos: ["image/manouba/tabouna.jpeg"]},
            { nom: "Lablabi", desc: "Soupe réconfortante", photos: ["image/tunis/lablebi.jpeg"] }
        ],
        
        culture: "Culture rurale préservée avec traditions agricoles. Vie universitaire animée apportant modernité. Équilibre entre traditions paysannes et influences urbaines de Tunis. Marchés hebdomadaires authentiques. Festivités religieuses traditionnelles.",
        
        economie: "Agriculture maraîchère (tomates, pommes de terre, légumes). Élevage de proximité. Secteur éducatif avec l'université. Zone industrielle émergente. Commerce de gros alimentaire. Proximité de Tunis favorise les services."
    },

    nabeul: {
        name: "Nabeul",
        subtitle: "Le Cap Bon",
        icon: "🏖️",
        pop: "~800K",
        fond: "Méditerranéen",
        stat: "Poterie",
        image: "image/nabeul.png",
        
        histoire: "Presqu'île du Cap Bon, anciennement Neapolis punique et romaine. Nabeul est célèbre depuis l'Antiquité pour sa céramique. Hammamet devient station balnéaire internationale dans les années 1960. Kélibia abrite une forteresse byzantine imposante. Région agricole prospère depuis toujours.",
        
        origine: "Le nom 'Nabeul' dérive du latin 'Neapolis' (Nouvelle Ville), témoignant de l'occupation romaine. La région était déjà connue pour sa poterie à l'époque punique.",
        
        lieux: [
            { nom: "Hammamet", desc: "Station balnéaire de renommée mondiale", photos: ["image/nabeul/hammamet1.jpeg","image/nabeul/hammamet2.webp","image/nabeul/hammamet3.webp","image/nabeul/hammamet4.avif","image/nabeul/hammamet5.jpg","image/nabeul/hammamet6.jpeg","image/nabeul/festival1.webp","image/nabeul/festival2.jpg","image/nabeul/festival3.png"] },
            { nom: "Nabeul ville", desc: "Marché du vendredi et ateliers de poterie" ,photos: ["image/nabeul/nabeul1.jpeg","image/nabeul/nabeul2.jpeg","image/nabeul/nabeul3.jpeg","image/nabeul/nabeul4.jpeg", "image/nabeul/nabeul5.jpeg", "image/nabeul/nabeul6.jpeg"] },
            { nom: "Kélibia", desc: "Fort byzantin et port de pêche" , photos: ["image/nabeul/kelibia1.jpeg","image/nabeul/kelibia2.jpeg","image/nabeul/kelibia1.jpg"] },
            { nom: "El Haouaria", desc: "Les plages d'El Haouaria sont véritablement un paradis sur terre, où vous pourrez vous prélasser au soleil, vous rafraîchir dans les eaux cristallines et vous détendre dans un cadre enchanteur" ,photos: ["image/nabeul/haouaria1.png","image/nabeul/haouaria2.png","image/nabeul/haouaria3.webp"] },
        ],
        
        plats: [
            { nom: "Poisson frais", desc: "Grillé ou en couscous", photos: ["image/nabeul/poisson.jpg"] },
            { nom: "Harissa artisanale", desc: "Piment traditionnel de Nabeul", photos: ["image/nabeul/harissa.jpg"] },
            { nom: "kaak de Nabeul", desc: "Pâtisserie locale aux dattes", photos: ["image/nabeul/kaak.jpg"] },
            { nom: "Agrumes frais", desc: "Oranges et citrons du Cap Bon", photos: ["image/nabeul/agrume 1.webp","image/nabeul/agrume2.webp"] },
        ],
        
        culture: "Artisanat de poterie millénaire avec motifs berbères et arabes. Festival international de Hammamet. Culture méditerranéenne raffinée. Influence du tourisme international. Traditions agricoles préservées. Architecture andalouse à Hammamet.",
        
        economie: "Tourisme balnéaire majeur (hôtels, restaurants, animation). Agriculture intensive (agrumes, raisins, légumes). Pêche importante. Artisanat de poterie et céramique. Industries agroalimentaires. Immobilier touristique florissant."
    },

    zaghouan: {
        name: "Zaghouan",
        subtitle: "Montagne Sacrée",
        icon: "⛰️",
        pop: "~190K",
        fond: "1295m alt.",
        stat: "Aqueduc",
        image: "image/zaghouan.png",
        
        histoire: "Zaghouan est célèbre depuis l'époque romaine pour ses sources d'eau abondantes. L'aqueduc romain de 132 km alimentait Carthage en eau potable depuis le Temple des Eaux construit au 2ème siècle. La montagne sacrée culmine à 1295m et fournit toujours l'eau potable pour Tunis.",
        
        origine: "Le nom 'Zaghouan' (زغوان) serait d'origine berbère, signifiant 'la montagne bleue' ou dérivé de 'Zigua', désignant les sources d'eau. Le Djebel Zaghouan était considéré comme sacré par les Romains.",
        
        lieux: [
            { nom: "Temple des Eaux", desc: "Monument romain exceptionnel, source de l'aqueduc" , photos: ["image/zaghouan/temple1.jpg", "image/zaghouan/temple2.jpg","image/zaghouan/temple3.jpg","image/zaghouan/temple4.jpeg"] },
            { nom: "Aqueduc romain", desc: "132 km jusqu'à Carthage, vestiges impressionnants", photos: ["image/zaghouan/Aqueduc_romain1.jpg" , "image/zaghouan/Aqueduc_romain2.jpg"] },
            { nom: "Djebel Zaghouan", desc: "Randonnée vers le sommet (1295m), panoramas" , photos: ["image/zaghouan/mountain_zaghouan1.jpeg", "image/zaghouan/mountain_zaghouan2.jpeg" , "image/zaghouan/mountain_zaghouan3.jpeg" ,"image/zaghouan/sidi_median_zaghouan.jpg"] },
            { nom: "Sources naturelles", desc: "Eaux minérales pures" , photos: ["image/zaghouan/waer_springs1.jpg", "image/zaghouan/water_springs2.jpg"] },
            { nom: "Hammam Zriba", desc: "Station thermale romaine",photos: ["image/zaghouan/zriba3.jpg", "image/zaghouan/zriba2.jpg", "image/zaghouan/zriba1.jpg"] },
            { nom: "Médina de Zaghouan", desc: "Architecture andalouse préservée",photos: ["image/zaghouan/medina1.jpeg", "image/zaghouan/medina2.jpeg", "image/zaghouan/medina3.jpeg","image/zaghouan/medina4.jpeg","image/zaghouan/medina5.jpeg"] }
        ],
        
        plats: [
             { nom: "sandwich bruno", desc: "un plat populaire, simple et savoureux, très apprécié au quotidien. Il se compose généralement de pain tabouna ou baguette, garni de thon, œufs durs, pommes de terre, salade, olives et harissa. Selon les goûts, on peut y ajouter escalope, kafteji, merguez ou fromages" , photos: ["image/zaghouan/bruno1.jpeg", "image/zaghouan/bruno 2.jpeg", "image/zaghouan/bruno3.jpeg"] },
            { nom: "kaak warka", desc: "Le kaak warka est une pâtisserie traditionnelle tunisienne, originaire de Zaghouan.Il est préparé à base de farine, beurre, sucre et eau de rose (warka), et souvent garni d’une pâte d’amandes parfumée" ,photos: ["image/zaghouan/kaak_warka1.webp", "image/zaghouan/kaak_warka2.webp"] },
            { nom: "machewi ", desc: "un plat traditionnel à base de viandes grillées, très populaire lors des repas en famille et des fêtes. Il se prépare généralement avec de l’agneau, du bœuf ou du poulet, marinés dans un mélange d’épices tunisiennes, d’ail, de cumin, de paprika, d’huile d’olive et parfois de harissa" ,photos: ["image/zaghouan/mechwi1.jpeg", "image/zaghouan/mechwi2.jpeg"] },
        ],
        
        culture: "Région montagneuse au patrimoine romain exceptionnel. Traditions rurales berbères et andalouses. Fête de l'eau au printemps. Architecture traditionnelle en pierre. Artisanat potier. Hospitalité montagnarde légendaire.",
        
        economie: "Eau minérale (source de Zaghouan et Ain Garci). Agriculture de montagne (olivier, amandier). Élevage ovin. Tourisme patrimonial romain. Apiculture. Ressources hydriques stratégiques pour Tunis."
    },

    bizerte: {
        name: "Bizerte",
        subtitle: "Perle du Nord",
        icon: "⚓",
        pop: "~600K",
        fond: "Extrême nord",
        stat: "Port",
        image: "image/bizerte.png",
        
        histoire: "Ancienne Hippo Diarrhytus romaine, Bizerte est un port stratégique depuis l'Antiquité. Base navale française jusqu'en 1963 après l'indépendance. La crise de Bizerte (juillet 1961) marque un tournant dans l'histoire tunisienne. Ville fortifiée avec kasbah et vieux port pittoresque.",
        
        origine: "Le nom 'Bizerte' (بنزرت) dérive du berbère 'Benzert', possiblement lié à 'tizi' (col, passage), indiquant sa position géographique stratégique au passage entre Méditerranée et lac.",
        
        lieux: [
            { nom: "Vieux Port", desc: "Port pittoresque avec bateaux de pêche colorés" ,photos: ["image/bizerte/port1.jpeg", "image/bizerte/port2.jpeg","image/bizerte/port3.jpeg","image/bizerte/port4.jpeg","image/bizerte/port5.jpeg"] },
            { nom: "Corniche", desc: "Promenade en bord de mer",photos: ["image/bizerte/corniche1.jpeg", "image/bizerte/corniche2.jpeg" ]},
            { nom: "Ghar el melh", desc: "est une ville côtière historique connue pour son ancien port, ses forteresses et ses lagunes. Elle se distingue par son patrimoine maritime et son cadre naturel unique, mêlant histoire et paysages paisibles",photos: ["image/bizerte/gharmelh1.jpg", "image/bizerte/gharmelh2.jpg", "image/bizerte/gharmelh3.jpeg", "image/bizerte/gharmelh4.jpeg", "image/bizerte/gharmelh5.jpeg"] },
            { nom: "Raf Raf ", desc: "est une charmante localité côtière située près de Bizerte, connue pour sa plage, sa mer claire et son ambiance calme. Elle attire les visiteurs par sa nature préservée, ses paysages verdoyants et son cadre idéal pour la détente",photos: ["image/bizerte/rafraf1.jpeg", "image/bizerte/rafraf2.jpeg", "image/bizerte/rafraf3.jpeg", "image/bizerte/rafraf4.jpeg"] },
            { nom: "Musée océanographique", desc: "est un lieu culturel dédié au patrimoine maritime tunisien. Il présente des collections liées à la mer, à la pêche et à la navigation" ,photos: ["image/bizerte/musee1.jpg", "image/bizerte/musee2.jpg","image/bizerte/musee3.jpeg","image/bizerte/musee4.jpeg"]},
            { nom: "Cap Blanc", desc: "Point le plus septentrional d'Afrique" ,photos: ["image/bizerte/capblanc1.jpeg", "image/bizerte/cap2.jpeg", "image/bizerte/cap1.jpeg"] },
            { nom: "Cap Angela", desc: "est le point le plus septentrional d’Afrique. Ce site emblématique offre une vue panoramique sur la mer Méditerranée et symbolise la rencontre entre nature, mer et horizon",photos: ["image/bizerte/capangela1.jpeg", "image/bizerte/capangela2.jpeg", "image/bizerte/capangela3.jpeg", "image/bizerte/capangela4.jpeg"] },
            { nom: "Ichkeul National Park", desc: "célèbre pour son lac et son parc national classé au patrimoine mondial de l’UNESCO. Elle est connue pour sa biodiversité, ses oiseaux migrateurs et ses paysages paisibles", photos: ["image/bizerte/ichkel1.jpg","image/bizerte/ichkel2.jpeg", "image/bizerte/ichkel3.webp", "image/bizerte/ichkel4.jpg"] }
        ],
        
        plats: [
            { nom: "Poisson frais", desc: "Daurade, loup, rouget du port" ,photos: ["image/bizerte/poisson1.jpeg", "image/bizerte/poisson2.jpeg"] },
            { nom: "Millefeuille", desc: "est une pâtisserie appréciée en Tunisie, composée de couches de pâte feuilletée croustillante et de crème onctueuse",photos: ["image/bizerte/Millefeuille.jpeg"] },
            { nom: "Calamars farcis", desc: "Recette traditionnelle",photos: ["image/bizerte/calamars1.jpg"] },
            { nom: "Sandwich lablebi", desc: "est une spécialité tunisienne inspirée du plat traditionnel lablebi. Il se compose de pois chiches, œuf, thon, harissa et huile d’olive, servi dans du pain, avec un goût riche et épicé.",photos: ["image/bizerte/kaskroutlablebi1.webp", "image/bizerte/kaskroutlablebi2.jpg"] },
            { nom: "Fricassé au thon", desc: "est un petit sandwich frit très populaire en Tunisie. Il est garni de thon, œuf dur, pommes de terre, olives et harissa, et se déguste surtout comme snack " ,photos: ["image/bizerte/fricasse1.jpeg", "image/bizerte/fricasse2.jpeg"]}
        ],
        
        culture: "Culture maritime et militaire. Mémoire de la résistance (crise 1961). Architecture coloniale française. Traditions de pêche ancestrales. Festivals d'été sur la corniche. Population fière et patriotique. Dialecte distinctif du nord.",
        
        economie: "Port commercial et pêche (sardines, thon). Industries sidérurgiques (usines). Cimenterie. Raffinage pétrolier. Tourisme balnéaire émergent. Construction navale. Zone franche industrielle. Agriculture céréalière périurbaine."
    },

    beja: {
        name: "Béja",
        subtitle: "Grenier de Tunisie",
        icon: "🌾",
        pop: "~300K",
        fond: "Céréales",
        stat: "Plaines",
        image: "image/beja.png",
        
        histoire: "Ancienne Vaga numide puis romaine, Béja est un carrefour historique du nord-ouest. Région agricole fertile depuis l'Antiquité, surnommée 'grenier de Rome'. Médina ottomane bien préservée avec kasbah dominant la vallée de la Medjerda. Rôle stratégique pendant les guerres puniques.",
        
        origine: "Le nom 'Béja' (باجة) dérive du berbère 'Vaga', ancienne capitale numide. La ville était un important centre commercial et agricole sous les Romains.",
        
        lieux: [
            { nom: "Médina de Béja", desc: "Vieille ville authentique et paisible", photos: ["image/beja/medina1.jpeg"] },
            { nom: "Grande Mosquée", desc: "Architecture ottomane du 17ème siècle" ,photos: ["image/beja/mosquee1.webp"] },
            { nom: "Théâtre romain de Dougga", desc: "À proximité, site UNESCO exceptionnel", photos: ["image/beja/dougga1.jpeg","image/beja/dougge2.jpeg","image/beja/dougga3.jpeg"] },
            { nom: "Testour", desc: "Village andalou avec architecture unique" ,photos: ["image/beja/tastour1.webp", "image/beja/tastour2.jpeg","image/beja/tastour3.jpeg"] },
        ],
        
        plats: [
            { nom: "El Mbasses", desc: "Ce sont des galettes de pain fondantes sucrées, préparées à base de semoule frottée avec de l’huile d’olive et ramassée avec de l’eau tiède.", photos: ["image/beja/mbasses.png"] },
            { nom: "Les Ghrayefs", desc: "Les Ghrayefs, sont des galettes de pain qui ressemblent à des crêpes, mais qui se caractérisent par leur texture moelleuse et spongieuse, pleine de trous, d’où on les appelle aussi crêpes à mille trous", photos: ["image/beja/ghrayef.png"] },
            { nom: "Les Mkharek", desc: "Il s’agit de beignets à base de semoule, de farine, de smen, de levure et d'œufs entiers battus, longuement travaillés et frits dans une huile très chaude. Ils sont ensuite trempés dans du miel ou dans du sirop de sucre épais.", photos: ["image/beja/mkharek.png"] },
            { nom: "Borzguène", desc: "Le Borzguène est un type de couscous au goût sucré-salé, préparé en alternant des couches de semoule de couscous, de fruits secs, de dattes et de viande d'agneau", photos: ["image/beja/bourzgéne.png"] },
            { nom: "El Ftet", desc: "Ce plat se compose de galettes de pain très fines cuites à base de semoule de blé et d’huile d’olive, garnies de morceaux de viande d’agneau cuits à la vapeur avec des branches de romarin" , photos: ["image/beja/el ftet.png"] },
           
        ],
        
        culture: "Culture rurale ancestrale berbère et arabe. Traditions agricoles vivaces. Architecture andalouse à Testour. Chants ruraux traditionnels. Hospitalité légendaire. Fête de la moisson. Artisanat textile et poterie.",
        
        economie: "Agriculture céréalière intensive (blé dur, orge). Élevage bovin et ovin. Production laitière. Meuneries et industries agroalimentaires. Culture de betterave sucrière. Artichaut de Béja réputé. Commerce agricole régional."
    },

    jendouba: {
        name: "Jendouba",
        subtitle: "Région des Forêts",
        icon: "🌲",
        pop: "~400K",
        fond: "Forêts",
        stat: "Sites romains",
        image: "image/jendouba.png",
        
        histoire: "Nord-ouest montagneux et forestier, riche en vestiges romains. Bulla Regia (maisons souterraines romaines) et Chemtou (marbre numide) sont uniques. Tabarka, perle de la côte nord, fut comptoir génois. Aïn Draham, station de montagne, rappelle les Alpes. Région de résistance pendant le protectorat.",
        
        origine: "Le nom 'Jendouba' (جندوبة) dérive probablement du berbère 'Zendouba', désignant les collines boisées caractéristiques de la région.",
        
        lieux: [
            { nom: "Bulla Regia", desc: "Cité romaine avec villas souterraines uniques au monde" ,photos: ["image/jendouba/regia1.webp", "image/jendouba/regia2.jpg", "image/jendouba/regia3.jpg"]},
            { nom: "Aïn Draham", desc: "Station de montagne, forêts de chênes-lièges" ,photos: ["image/jendouba/aidrahem6.jpeg", "image/jendouba/aindrahem2.jpg", "image/jendouba/aindrahem1.png",  "image/jendouba/aindrahem4.jpeg", "image/jendouba/aindrahem5.jpeg"]},
            { nom: "Tabarka", desc: "Station balnéaire, fort génois, corail" ,photos: ["image/jendouba/tabarka1.jpeg", "image/jendouba/tabarka2.jpeg", "image/jendouba/tabarka3.jpeg", "image/jendouba/tabarka4.jpeg", "image/jendouba/tabarka5.jpeg", "image/jendouba/tabarka6.jpeg","image/jendouba/tabarka7.jpeg"]},
            { nom: "Les Aiguilles de Tabarka", desc: "Formations rocheuses spectaculaires",photos: ["image/jendouba/aiguilles1.jpeg", "image/jendouba/aiguilles2.jpeg"]},
            { nom: "Forêts de Kroumirie", desc: "Écosystème unique, biodiversité",photos : ["image/jendouba/foret1.jpeg", "image/jendouba/foret2.jpeg", "image/jendouba/foret3.jpeg", "image/jendouba/foret4.jpeg"]},
            { nom: "Barrage de Sidi Salem", desc: "Plus grand barrage de Tunisie",photos: ["image/jendouba/barrage1.jpeg"]},
        ],
        
        plats: [
            
            
            { nom: "Couscous aux châtaignes", desc: "Recette d'Aïn Draham" ,photos: ["image/jendouba/couscous.jpeg"]},
            { nom: "Truite grillée", desc: "Des rivières de montagne" , photos: ["image/jendouba/truite.jpg"]},
            { nom: "Miel de forêt", desc: "Production locale artisanale" },
            
        ],
        
        culture: "Culture berbère montagnarde préservée. Traditions forestières du liège. Architecture de montagne à Aïn Draham. Influence génoise à Tabarka (festival de jazz). Artisanat du bois et vannerie. Chants et danses berbères. Hospitalité légendaire.",
        
        economie: "Exploitation forestière (chêne-liège, pin). Industries du liège et bois. Thermalisme (Hammam Bourguiba). Tourisme culturel (sites romains) et balnéaire (Tabarka). Agriculture de montagne. Pêche au corail. Chasse sportive."
    },

    kef: {
        name: "Le Kef",
        subtitle: "Ville Montagne",
        icon: "🏔️",
        pop: "~240K",
        fond: "~800m",
        stat: "Multi-civils",
        image: "image/kef.png",
        
        histoire: "Ville fortifiée perchée à 800m d'altitude, Le Kef (ancienne Sicca Veneria) fut successivement numide, punique, romaine, byzantine, arabe et ottomane. Kasbah imposante témoignant des multiples civilisations. Siège du gouvernement tunisien pendant la Seconde Guerre mondiale. Panoramas montagneux spectaculaires.",
        
        origine: "Le nom 'Kef' (الكاف) signifie 'la grotte' ou 'le rocher' en arabe, référence à sa position perchée sur un piton rocheux dominant les plaines.",
        
        lieux: [
            { nom: "Kasbah du Kef", desc: "Forteresse byzantine et ottomane, vue à 360°" , photos: ["image/kef/kasba1.jpeg", "image/kef/kasba2.jpeg", "image/kef/kasba3.jpeg"]},
            { nom: "Médina du Kef", desc: "Ruelles étroites et architecture ottomane",photos: ["image/kef/medina1.jpeg", "image/kef/medina3.jpeg", "image/kef/medina4.jpeg"]},
            { nom: "Basilique romaine", desc: "Vestiges paléochrétiens" ,photos: ["image/kef/bas1.png", "image/kef/bas2.webp"]},
            { nom: "Dar El Kous", desc: "Mosquée-sanctuaire historique",photos: ["image/kef/darelkous1.jpeg", "image/kef/darelkous2.jpeg","image/kef/darelkous3.jpeg"]},
            { nom: "Musée des arts et des traditions", desc: " présente une spécificité architecturale unique. Cet édifice a pour objectif d'exposer aux visiteurs les conditions de vie des citadins et des nomades d'El Kef a partir d'objets de la vie courante.Parmi ses importantes collections, on y trouve une collection de bijoux extraordinaire qui date de plusieurs siecles. Cet endroit magique vous permet de decouvrir l'histoire d'El Kef et de sa vie quotidienne,",photos: ["image/kef/musee1.png", "image/kef/musee2.png"]},
            
        ],
        
        plats: [




            { nom: "Rfiss", desc: "Plat sucré-salé aux dattes" ,photos: ["image/kef/rfiss.jpeg"]},
            { nom: "Makroud El Kef", desc: "Pâtisserie locale réputée" ,photos: ["image/kef/makroudh1.webp", "image/kef/makroudh2.jpeg"]},
        ],
        
        culture: "Patrimoine multiculturel exceptionnel (berbère, punique, romain, arabe, ottoman, juif). Architecture militaire et religieuse. Traditions montagnardes. Dialecte distinct. Artisanat textile (couvertures, tapis). Musique malouf. Mémoire de la résistance.",
        
        economie: "Agriculture de montagne (céréales, légumineuses). Élevage ovin important. Artisanat textile traditionnel. Tourisme patrimonial émergent. Commerce régional. Industries agroalimentaires. Position stratégique frontalière avec l'Algérie."
    },

    siliana: {
        name: "Siliana",
        subtitle: "Terre de Blé",
        icon: "🌾",
        pop: "~220K",
        fond: "Céréales",
        stat: "Romains",
        image: "image/siliana.png",
        
        histoire: "Région agricole du centre-nord avec d'importants sites archéologiques. Makthar (ancienne Mactaris) et Zama Regia témoignent de la richesse romaine de la région. Zone fertile depuis l'Antiquité, grenier à blé de Carthage puis de Rome. Barrage de Siliana régule les eaux pour l'agriculture.",
        
        origine: "Le nom 'Siliana' (سليانة) dérive probablement du latin 'Siliana' ou du berbère, désignant une zone agricole fertile et stratégique.",
        
        lieux: [
            { nom: "Makthar", desc: "Site romain exceptionnel avec arc de triomphe et forum" },
            { nom: "Zama Regia", desc: "Site de la bataille décisive entre Rome et Carthage" },
            { nom: "Barrage de Siliana", desc: "Infrastructure hydraulique importante" },
            { nom: "Jama", desc: "Vestiges romains et paysages ruraux" },
            { nom: "Bargou", desc: "Village de montagne authentique" }
        ],
        
        plats: [
            { nom: "Couscous aux légumes", desc: "Fraîcheur des champs" },
            { nom: "Berkoukes", desc: "Pâtes traditionnelles en sauce" },
            { nom: "Borghol", desc: "Blé concassé cuisiné" },
            { nom: "Osbane", desc: "Saucisse tunisienne épicée" },
            { nom: "Khobz tabouna", desc: "Pain au four d'argile" }
        ],
        
        culture: "Culture rurale profondément ancrée. Traditions agricoles séculaires. Patrimoine romain important. Architecture berbère traditionnelle. Artisanat textile (tapis, couvertures). Hospitalité rurale généreuse.",
        
        economie: "Agriculture céréalière dominante (blé, orge). Élevage ovin et bovin. Légumineuses. Industries agroalimentaires (meuneries). Apiculture. Barrage de Siliana pour irrigation. Commerce agricole régional."
    },

    sousse: {
        name: "Sousse",
        subtitle: "Perle du Sahel",
        icon: "🏖️",
        pop: "~700K",
        fond: "International",
        stat: "UNESCO",
        image: "image/sousse.png",
        
        histoire: "Ancienne Hadrumetum phénicienne fondée au 9ème siècle av. J.-C., puis grande cité romaine. La Médina médiévale et son Ribat (forteresse monastique du 8ème siècle) sont inscrits au patrimoine UNESCO depuis 1988. Port important depuis l'Antiquité. Station balnéaire majeure depuis les années 1960.",
        
        origine: "Le nom 'Sousse' (سوسة) dérive du phénicien et punique 'Hadrumetum', puis latinisé avant de devenir 'Susa' en arabe, signifiant probablement 'le port' ou 'la forteresse côtière'.",
        
        lieux: [
            { nom: "Médina de Sousse", desc: "Centre historique classé UNESCO", photos: ["image/sousse/medina1.jpeg","image/sousse/medina2.jpeg","image/sousse/medina3.jpeg","image/sousse/medina4.jpeg","image/sousse/medina5.jpeg"] },
            { nom: "Ribat de Sousse", desc: "Forteresse monastique du 8ème siècle, tour panoramique" , photos: ["image/sousse/ribat1.jpeg","image/sousse/ribat2.jpeg","image/sousse/ribat3.jpeg"] },
            { nom: "Grande Mosquée", desc: "Architecture aghlabide majestueuse", photos: ["image/sousse/mosquee1.jpg","image/sousse/mosquee2.jpg"] },
            { nom: "Musée archéologique", desc: "Mosaïques romaines exceptionnelles" , photos: ["image/sousse/musee1.jpg","image/sousse/musee2.jpeg","image/sousse/musee3.webp","image/sousse/musee.jpeg"] },
            { nom: "Port El Kantaoui", desc: "Marina moderne et parcours de golf" ,photos:["image/sousse/port1.jpeg","image/sousse/port2.jpeg","image/sousse/port3.jpeg"] },
            { nom: "Plages dorées", desc: "Kilomètres de sable fin" ,photos: ["image/sousse/pl1.jpeg","image/sousse/pl2.jpeg","image/sousse/pl3.jpeg"] },
            { nom: "Catacombes romaines", desc: "Nécropole paléochrétienne", photos: ["image/sousse/cata1.webp","image/sousse/cata2.webp","image/sousse/cata3.jpg"] }
        ],
        
        plats: [
            { nom: "Poisson grillé", desc: "Fraîcheur du port quotidiennement" ,photos: ["image/sousse/poisson.jpg"]},
            { nom: "Couscous au mérou", desc: "Spécialité côtière savoureuse",photos: ["image/sousse/couscous.webp"] },
            { nom: "Ojja aux fruits de mer", desc: "Ragoût épicé local" ,photos: ["image/sousse/ojja.jpg"]},
            { nom: "Brik au thon", desc: "Version croustillante soussienne",photos: ["image/sousse/brik.jpeg"] }
        ],
        
        culture: "Mélange de traditions sahéliennes et influence touristique internationale. Festivals d'été animés. Architecture médiévale préservée. Artisanat (cuivre, bijoux). Vie nocturne dynamique. Dialecte sahélien caractéristique. Musique et danse folkloriques.",
        
        economie: "Tourisme balnéaire majeur (hôtels, restaurants, animation). Port commercial important. Industries textiles et agroalimentaires. Pêche. Artisanat orienté tourisme. Commerce dynamique. Immobilier touristique. Services financiers."
    },

    monastir: {
        name: "Monastir",
        subtitle: "Ville Historique",
        icon: "🕌",
        pop: "~550K",
        fond: "Ribat",
        stat: "Présidentielle",
        image: "image/mounastir.png",
        
        histoire: "Monastir tire son nom du latin 'monasterium' (monastère). Le Ribat de Monastir, édifié au 8ème siècle, est l'une des plus anciennes et impressionnantes forteresses islamiques. Ville natale d'Habib Bourguiba, père de l'indépendance tunisienne, dont le mausolée majestueux domine la ville.",
        
        origine: "Le nom 'Monastir' (المنستير) vient du latin 'monasterium', témoignant de la présence monastique chrétienne avant la conquête arabe. Le Ribat perpétue cette vocation spirituelle et défensive.",
        
        lieux: [
            { nom: "Ribat de Monastir", desc: "Forteresse du 8ème siècle, lieu de tournage célèbre", photos: ["image/monastir/ribat1.jpeg","image/monastir/ribat2.webp","image/monastir/ribat3.jpeg"] },
            { nom: "Mausolée Habib Bourguiba", desc: "Monument national à coupoles dorées",photos: ["image/monastir/mausolee1.jpeg","image/monastir/mausolee2.jpeg","image/monastir/mausolee3.jpeg"]     },
            { nom: "Mosquée Bourguiba", desc: "Architecture grandiose moderne" ,photos: ["image/monastir/mosque1.jpg","image/monastir/mosque2.jpg","image/monastir/mosque.jpg"] },
            { nom: "Marina de Monastir", desc: "Port de plaisance moderne" ,photos: ["image/monastir/marina1.jpeg","image/monastir/marina2.jpeg","image/monastir/marina3.jpeg","image/monastir/marina3.jpeg"] },
            { nom: "Musée du costume", desc: "Patrimoine vestimentaire tunisien",photos: ["image/monastir/musee1.jpeg","image/monastir/musee2.jpg","image/monastir/musee3.webp"] },
            { nom: "Plages ", desc: "Sable fin et resorts",photos: ["image/monastir/plage1.jpeg","image/monastir/plage2.jpeg","image/monastir/plage3.jpeg","image/monastir/plage4.jpeg"] },
            { nom: "Médina", desc: "Vieille ville authentique",photos: ["image/monastir/medina1.jpeg","image/monastir/medina2.jpg","image/monastir/medina3.webp","image/monastir/medina4.jpeg"] }
        ],
        
        plats: [
            { nom: "Poisson frais", desc: "Du port à l'assiette", photos: ["image/monastir/poisson.jpg"] },
            { nom: "Chin Chin ice cream", desc: "Une adresse populaire réputée pour ses glaces crémeuses, ses saveurs variées et son ambiance conviviale, idéale pour une pause gourmande" ,photos: ["image/monastir/chinchin1.jpeg","image/monastir/chinchin2.jpeg","image/monastir/chinchin3.jpeg"] },
            { nom: "L’Arôme Viennoiserie", desc: "Une pâtisserie appréciée pour ses viennoiseries fraîches, ses saveurs raffinées et la qualité de ses produits, idéale pour le petit-déjeuner ou une pause gourmande" ,photos: ["image/monastir/arome1.jpeg","image/monastir/arome2.jpeg","image/monastir/arome3.jpeg"] },
            { nom: "Le bistrot+", desc: "Un restaurant moderne offrant une cuisine variée et savoureuse dans une ambiance conviviale, idéal pour un repas entre amis ou en famille" ,photos: ["image/monastir/bistrot1.jpeg","image/monastir/bistrot2.jpeg","image/monastir/bistrot4.jpeg"] },
            { nom: "Brik monastirien", desc: "Version locale du classique",photos: ["image/monastir/brik.jpg"] }
        ],
        
        culture: "Patrimoine bourguibien omniprésent. Architecture islamique médiévale et moderne. Culture sahélienne authentique. Fierté nationale liée à Bourguiba. Traditions maritimes. Festivals culturels. Cinéma (décors du Ribat). Dialecte sahélien raffiné.",
        
        economie: "Tourisme balnéaire et culturel majeur. Aéroport international Habib Bourguiba. Industries textiles et agroalimentaires. Pêche. Artisanat touristique. Marina et nautisme. Immobilier résidentiel et touristique. Services."
    },

    mahdia: {
        name: "Mahdia",
        subtitle: "Port de Pêche",
        icon: "🐟",
        pop: "~410K",
        fond: "Pêche",
        stat: "Préservées",
        image: "image/mahdia.png",
        
        histoire: "Mahdia fut fondée en 921 par les Fatimides comme capitale de leur califat avant leur départ pour l'Égypte. Presqu'île fortifiée avec Skifa el Kahla (porte monumentale). Port de pêche traditionnel depuis toujours. Plages préservées et authenticité intacte malgré le tourisme croissant.",
        
        origine: "Le nom 'Mahdia' (المهدية) dérive de 'Al-Mahdi', le fondateur fatimide Ubayd Allah al-Mahdi qui en fit sa capitale au 10ème siècle. Le nom signifie 'la ville du Mahdi' (le bien-guidé).",
        
        lieux: [
            { nom: "Port de pêche", desc: "Authentique, avec retour quotidien des barques", photos: ["image/mahdia/port1.jpeg","image/mahdia/port2.avif","image/mahdia/port3.jpeg","image/mahdia/port4.jpeg"] },
            { nom: "Grande Mosquée", desc: "Fondée par les Fatimides, reconstruite", photos: ["image/mahdia/mosque1.jpeg","image/mahdia/mosque2.webp","image/mahdia/mosque3.jpg"] },
            { nom: "Skifa el Kahla", desc: "Porte monumentale fatimide" ,photos: ["image/mahdia/skifa1.jpg","image/mahdia/skifa2.jpeg","image/mahdia/skifa3.jpeg","image/mahdia/skifa4.jpeg","image/mahdia/skifa5.jpeg"] },
            { nom: "Cap d'Afrique", desc: "Pointe avancée dans la Méditerranée",photos: ["image/mahdia/cap1.jpg","image/mahdia/cap2.jpg"] },
            { nom: "Médina", desc: "Rues étroites et maisons blanches" ,photos: ["image/mahdia/medina1.webp","image/mahdia/medina2.jpeg","image/mahdia/medina3.avif","image/mahdia/medina4.jpg","image/mahdia/medina5.jpeg","image/mahdia/medina3.jpeg"] },
            { nom: "Plages dorées", desc: "Sable fin sur des kilomètres" ,photos: ["image/mahdia/plage1.jpeg","image/mahdia/plage2.jpeg","image/mahdia/plage3.jpeg","image/mahdia/plage4.jpeg","image/mahdia/plage5.jpeg"] },
            { nom: "Musée archéologique", desc: "Trésors romains et fatimides",photos: ["image/mahdia/musee1.jpeg","image/mahdia/musee2.jpg","image/mahdia/musee3.jpg","image/mahdia/musee4.jpg","image/mahdia/musee5.jpg"] },
            { nom: "Café Sidi Salem Elghar", desc: "est un café-restaurant emblématique de Mahdia (Tunisie) situé sur une falaise face à la mer Méditerranée, offrant une vue panoramique spectaculaire sur le littoral. C’est un lieu apprécié pour prendre un café, une chicha ou un repas simple (poissons grillés, pizzas, viandes, salades) dans une ambiance détendue avec les vagues en toile de fond" ,photos: ["image/mahdia/cafe1.jpeg","image/mahdia/cafe2.jpeg","image/mahdia/cafe3.jpeg","image/mahdia/cafe4.jpeg","image/mahdia/cafe5.jpeg"] },
            { nom: "Chichkhan", desc: "est un café/restaurant populaire à Mahdia, connu pour son ambiance conviviale et ses plats simples mais savoureux. C’est un endroit idéal pour se détendre en famille ou entre amis, souvent fréquenté pour le café, la chicha, les snacks et les repas légers",photos: ["image/mahdia/chichkhan1.jpeg","image/mahdia/chichkhan2.jpeg","image/mahdia/chichkhan3.jpeg","image/mahdia/chichkhan4.jpeg"] }
        ],
        
        plats: [
            { nom: "Poisson ultra-frais", desc: "Directement du port, grillé ou en couscous" ,photos: ["image/mahdia/poisson1.jpg","image/mahdia/poisson2.jpg"] },
            { nom: "Chorbat hout", desc: "Soupe de poisson mahdoise" },
            { nom: "Couscous au poisson", desc: "Spécialité locale authentique" ,photos: ["image/mahdia/couscous.webp","image/mahdia/couscous1.jpeg"] },
            { nom: "Café", desc: "café arabesque "  ,photos: ["image/mahdia/coffee.jpeg"] }
            
        ],
        
        culture: "Authenticité préservée et traditions maritimes vivaces. Patrimoine fatimide unique. Artisanat de la soie (alloucha). Architecture blanche et bleue typique. Festivals de pêche. Dialecte sahélien mélodieux. Vie simple et accueillante.",
        
        economie: "Pêche traditionnelle et industrielle (premier port de pêche de Tunisie). Industries de conserve de poisson. Tourisme balnéaire en développement respectueux. Artisanat de la soie. Agriculture (oliviers). Commerce du poisson frais et transformé."
    },

    kairouan: {
        name: "Kairouan",
        subtitle: "Ville Sainte",
        icon: "🕌",
        pop: "~570K",
        fond: "670 ap. J-C",
        stat: "Ville sainte",
        image: "image/kairouan.png",
        
        histoire: "Fondée en 670 par Oqba Ibn Nafi, Kairouan est la première capitale arabe du Maghreb et la quatrième ville sainte de l'Islam. La Grande Mosquée de Kairouan (9ème siècle) est un chef-d'œuvre architectural. Médina UNESCO. Sept pèlerinages à Kairouan équivalent à un hajj à La Mecque selon la tradition.",
        
        origine: "Le nom 'Kairouan' (القيروان) vient de l'arabe 'Al-Qayrawan', dérivé du persan 'Karvan' (caravane ou campement militaire), marquant son origine comme camp militaire arabe lors de la conquête du Maghreb.",
        
        lieux: [
            { nom: "Grande Mosquée", desc: "Chef-d'œuvre aghlabide du 9ème siècle, minaret iconique" , photos: ["image/kairouan/mosque1.jpeg","image/kairouan/mosque2.jpeg","image/kairouan/mosque3.jpeg"] },
            { nom: "Médina UNESCO", desc: "Cœur historique classé patrimoine mondial" , photos: ["image/kairouan/medina1.jpeg","image/kairouan/medina2.jpeg","image/kairouan/medina3.jpeg","image/kairouan/medina4.jpeg"] },
            { nom: "Bassins des Aghlabides", desc: "Réservoirs hydrauliques du 9ème siècle" , photos: ["image/kairouan/bassin1.webp","image/kairouan/bassin2.jpg"] },
            { nom: "Mausolée Sidi Sahbi", desc: "Mosquée du Barbier, décors somptueux", photos: ["image/kairouan/mauso1.jpeg","image/kairouan/mauso2.jpeg","image/kairouan/mauso3.webp"] },
            { nom: "Souks traditionnels", desc: "Tapis alloucha et artisanat" , photos: ["image/kairouan/souk1.jpeg","image/kairouan/souk2.jpeg","image/kairouan/souk3.jpeg"] },
            { nom: "Bir Barouta", desc: "Puits légendaire au chameau", photos: ["image/kairouan/bir1.jpeg","image/kairouan/bir2.jpeg","image/kairouan/bir3.jpeg"] }
        ],
        
        plats: [
            { nom: "Makroudh Kairouan", desc: "Pâtisserie aux dattes, la plus réputée" , photos: ["image/kairouan/makroudh1.jpeg","image/kairouan/makroudh2.jpeg","image/kairouan/makroudh3.jpeg"] },
            { nom: "Borghol", desc: "Blé concassé en ragoût", photos: ["image/kairouan/borghol1.jpeg","image/kairouan/borghol2.jpeg"] },
            { nom: "Droo", desc: "Plat de mariage aux légumes secs" , photos: ["image/kairouan/droo1.jpg","image/kairouan/droo2.jpg"] },
            { nom: "Zrir", desc: "Dessert aux graines de pin", photos: ["image/kairouan/zrir1.jpg"] }
        ],
        
        culture: "Spiritualité islamique profonde. Architecture religieuse exceptionnelle. Artisanat du tapis alloucha (points noués traditionnels). Calligraphie arabe. Musique malouf. Traditions soufies. Pèlerinages religieux constants. Centre intellectuel historique. Hospitalité sacrée.",
        
        economie: "Artisanat du tapis (alloucha réputé mondialement). Tourisme religieux et culturel. Industries agroalimentaires (pâtisseries). Élevage ovin. Agriculture (oliviers). Commerce traditionnel dans les souks. Cuir et maroquinerie. Patrimoine source de revenus."
    },

    kasserine: {
        name: "Kasserine",
        subtitle: "Porte du Désert",
        icon: "⛰️",
        pop: "~440K",
        fond: "Montagneux",
        stat: "Minières",
        image: "image/kasserine.png",
        
        histoire: "Région montagneuse stratégique du centre-ouest. Sbeitla (ancienne Sufetula) abrite des temples romains exceptionnels. Le Jebel Chambi (1544m), point culminant de Tunisie, domine la région. Zone de résistance pendant le protectorat. Théâtre d'importantes batailles de la Seconde Guerre mondiale.",
        
        origine: "Le nom 'Kasserine' (القصرين) signifie 'les deux châteaux' en arabe, référence probable aux fortifications antiques ou médiévales qui jalonnaient cette zone stratégique de montagne.",
        
        lieux: [
            { nom: "Sbeitla (Sufetula)", desc: "Site romain avec trois temples majestueux" , photos: ["image/kasserine/sbitla1.jpeg","image/kasserine/sbitla2.jpeg","image/kasserine/sbitla3.webp"] },
            { nom: "Arc de triomphe de Sbeitla", desc: "Monument romain imposant", photos: ["image/kasserine/arc1.jpeg","image/kasserine/arc2.jpeg"] },
            { nom: "Thermes romains", desc: "Vestiges de Sbeitla" , photos: ["image/kasserine/therme1.jpeg"]}        ],
        
        plats: [
            { nom: "Couscous montagnard", desc: "Agneau et légumes de saison", photos: ["image/mednine/couscous2.jpg","image/mednine/couscous1.webp"] },
            { nom: "Berkoukes", desc: "Grosse semoule traditionnelle",photos: ["image/gafsa/berkoukes1.jpeg","image/gafsa/berkoukes2.webp"] },
            { nom: "Rfiss", desc: "Plat sucré-salé aux dattes" ,photos: ["image/kef/rfiss.jpeg"]},
        ],
        
        culture: "Culture berbère montagnarde authentique. Patrimoine romain exceptionnel à Sbeitla. Traditions pastorales et agricoles. Musique et danses berbères. Artisanat textile (couvertures, tapis). Hospitalité légendaire. Mémoire de la résistance et des combats.",
        
        economie: "Agriculture de montagne (céréales, légumineuses, amandes). Élevage ovin et caprin dominant. Exploitation minière (phosphates). Forêts (bois, alfa). Apiculture. Tourisme patrimonial à Sbeitla. Artisanat textile. Position frontalière avec l'Algérie."
    },

    sidiBouzid: {
        name: "Sidi Bouzid",
        subtitle: "Berceau Révolution",
        icon: "🕊️",
        pop: "~430K",
        fond: "Révol. 2011",
        stat: "Agriculture",
        image: "image/sidiBouzid.png",
        
        histoire: "Gouvernorat agricole créé en 1973. Le 17 décembre 2010, l'immolation de Mohamed Bouazizi déclenche la Révolution tunisienne puis le Printemps arabe. Région intérieure longtemps marginalisée économiquement. Symbole aujourd'hui de la dignité et de la liberté. Monuments commémoratifs érigés.",
        
        origine: "Le nom 'Sidi Bouzid' (سيدي بوزيد) signifie 'Maître Bouzid', en référence à un saint local (marabout) vénéré dans la région, tradition courante de nommer les villes tunisiennes.",
        
        lieux: [
            { nom: "Monument Mohamed Bouazizi", desc: "Mémorial du héros de la révolution" },
            { nom: "Place 17 décembre", desc: "Lieu symbolique de la révolution" },
            { nom: "Musée de la Révolution", desc: "Mémoire du printemps arabe" },
            { nom: "Campagnes agricoles", desc: "Paysages ruraux authentiques" },
            { nom: "Regueb", desc: "Ville agricole dynamique" },
            { nom: "Sites commémoratifs", desc: "Lieux de mémoire révolutionnaire" }
        ],
        
        plats: [
            { nom: "Couscous aux légumes", desc: "Produits locaux frais" },
            { nom: "Mhames", desc: "Pois chiches en sauce" },
            { nom: "Berkoukes", desc: "Pâtes traditionnelles" },
            { nom: "Lablabi", desc: "Soupe réconfortante" },
            { nom: "Osban", desc: "Saucisse épicée" },
            { nom: "Khobz tabouna", desc: "Pain traditionnel" }
        ],
        
        culture: "Culture rurale profonde et authentique. Mémoire révolutionnaire vivace. Traditions agricoles ancestrales. Hospitalité légendaire malgré les difficultés économiques. Fierté nationale pour le rôle historique. Artisanat textile et poterie. Musique populaire.",
        
        economie: "Agriculture intensive (oliviers, amandiers, pistachiers, légumes). Élevage ovin et caprin. Production d'huile d'olive. Céréales. Industries agroalimentaires émergentes. Commerce agricole. Artisanat. Développement post-révolution en cours."
    },

    sfax: {
        name: "Sfax",
        subtitle: "Capitale du Sud",
        icon: "🏭",
        pop: "~1M",
        fond: "2ème ville",
        stat: "Industrie",
        image: "image/sfax.png",
        
        histoire: "Fondée au 9ème siècle, Sfax est la deuxième ville de Tunisie. Ville entreprenante par excellence, réputée pour l'esprit travailleur de ses habitants. Médina fortifiée du 9ème siècle remarquablement préservée. Port commercial majeur depuis le Moyen Âge. Bombardements de 1943 pendant la Seconde Guerre mondiale.",
        
        origine: "Le nom 'Sfax' (صفاقس) pourrait dériver du berbère 'Asfakous' ou de l'arabe 'Safaqis', désignant possiblement une zone côtière ou un lieu de commerce. L'étymologie exacte reste débattue.",
        
        lieux: [
            { nom: "Médina de Sfax", desc: "Remparts du 9ème siècle, souks authentiques", photos: ["image/sfax/medina1.jpeg","image/sfax/medina2.jpeg","image/sfax/medina4.jpeg","image/sfax/medina5.jpeg"] },
            { nom: "Îles Kerkennah", desc: "Archipel paisible, pêche traditionnelle" ,photos: ["image/sfax/ile1.jpg","image/sfax/ile2.jpeg","image/sfax/ile3.jpeg"] },
            { nom: "Musée Dar Jellouli", desc: "Architecture et traditions sfaxiennes" ,photos: ["image/sfax/musee1.jpeg","image/sfax/musee2.jpeg","image/sfax/musee3.jpeg"] },
            { nom: "Mall of Sfax", desc: "centre commercial" ,photos: ["image/sfax/mall1.jpeg","image/sfax/mall2.jpg","image/sfax/mall3.jpg" ]},
            { nom: "plage chaffar", photos :["image/sfax/plage1.jpg","image/sfax/plage2.jpg"] }
        ],
        
        plats: [
            { nom: "Jwejem", desc: "Jwajem, le cocktail sfaxien est une sorte cocktail typiquement sfaxien, frais, savoureux et alléchant, avec ses ingrédients multiples qui se complètent pour vous offrir un moment de pure gourmandise", photos: ["image/sfax/jwejem1.jpeg","image/sfax/jwejem2.jpeg"] },
            { nom: "Couscous Sfaxien", desc: "Agneau, légumes et pois chiches", photos: ["image/sfax/couscous.jpg",] },
            { nom: "Charmoula", desc: "Soupe épicée typiquement sfaxienne", photos: ["image/sfax/charmoula1.jpg","image/sfax/charmoula2.webp"] },
            { nom: "Patisserie Massmoudi", desc: "Pâtisserie fondante réputée" ,photos: ["image/sfax/masmoudi1.jpeg","image/sfax/masmoudi2.jpg","image/sfax/masmoudi3.webp"] }
          
        ],
        
        culture: "Esprit entrepreneurial et travailleur légendaire. Médina authentique et vivante. Architecture fortifiée unique. Dialecte sfaxien distinctif. Traditions commerciales séculaires. Artisanat (cuivre, textile). Culture îlienne à Kerkennah. Musique malouf. Fierté locale forte.",
        
        economie: "Deuxième pôle économique de Tunisie. Huile d'olive (capitale mondiale). Phosphates et chimie. Port commercial majeur. Pêche importante. Industries diverses (textile, mécanique, agroalimentaire). Commerce dynamique. Îles Kerkennah (pêche, tourisme). Entrepreneuriat développé."
    },

    gabes: {
        name: "Gabès",
        subtitle: "Oasis Maritime",
        icon: "🌴",
        pop: "~380K",
        fond: "Unique",
        stat: "Oasien",
        image: "image/gabes.png",
        
        histoire: "Ancienne Tacapes romaine, Gabès est l'unique oasis maritime au monde où palmiers et mer se rencontrent. Système d'irrigation traditionnel (séguias) millénaire. Port commercial historique. Zone industrielle développée dans les années 1970 (chimie, phosphates). Patrimoine oasien menacé mais protégé.",
        
        origine: "Le nom 'Gabès' (قابس) dérive du latin 'Tacapes', nom romain de la cité. La racine pourrait être liée au berbère ou au punique, désignant cette oasis côtière unique.",
        
        lieux: [
            { nom: "Oasis de Gabès", desc: "Palmiers centenaires, jardins irrigués, unique au monde" ,photos: ["image/gabes/oasis1.jpg","image/gabes/oasis2.jpeg","image/gabes/oasis3.webp"] },
            { nom: "Chenini Nahal", desc: "Village berbère troglodyte" ,photos: ["image/gabes/chenini1.jpg","image/gabes/chenini2.webp","image/gabes/chenini3.webp","image/gabes/chenini4.jpg"]},
            { nom: "Marché aux épices", desc: "Couleurs et senteurs orientales" ,photos: ["image/gabes/marche1.jpeg","image/gabes/marche2.jpeg","image/gabes/marche3.jpeg","image/gabes/marche4.jpeg"]},
            { nom: "Plages de Gabès", desc: "Sable fin et palmiers" ,photos: ["image/gabes/plage1.jpeg","image/gabes/plage2.jpeg","image/gabes/plage3.jpeg"]},
            { nom: "Matmata", desc: "est une région du sud de la Tunisie, située dans le gouvernorat de Gabès. Elle est célèbre pour ses habitations troglodytiques creusées dans la roche, conçues pour se protéger de la chaleur. Matmata est aussi connue pour son paysage désertique, son patrimoine berbère et pour avoir servi de décor à des films comme Star Wars" ,photos: ["image/gabes/matmata1.jpeg","image/gabes/matmata2.jpg","image/gabes/matmata3.jpeg","image/gabes/matmata4.jpg","image/gabes/matmata5.webp","image/gabes/matmata6.webp"]},
            { nom: "Jara", desc: "Quartier de l'oasis authentique",photos: ["image/gabes/jara1.jpeg","image/gabes/jara2.webp"] }
        ],
        
        plats: [
            { nom: "Couscous aux dattes", desc: "Spécialité sucrée-salée unique",photos: ["image/gabes/couscous_datte1.jpeg","image/gabes/couscous_datte2.jpeg"] },
             { nom: "Legmi", desc: "Il s’agit d’une boisson traditionnelle à base de lait fermenté ou de lait caillé, parfois légèrement sucrée, consommée surtout dans le sud tunisien pour ses vertus digestives et nutritives" ,photos: ["image/gabes/legmi1.jpg","image/gabes/legmi2.jpg"]},
            { nom: "Dattes", desc: "La Tunisie est célèbre pour ses palmeraies et ses dattes de qualité, notamment la variété Deglet Nour, connue pour sa douceur et sa texture moelleuse",photos: ["image/gabes/datte1.jpg","image/gabes/datte2.jpg"] },
            { nom: "Mloukhia", desc: "Ragoût épais et parfumé, servi avec viande, très consommé lors des repas familiaux",photos: ["image/gabes/mloukhia1.jpeg","image/gabes/mloukhia.webp"] }

        ],
        
        culture: "Culture oasienne unique mêlant mer et palmiers. Traditions hydrauliques ancestrales (séguias). Architecture berbère à Chenini. Artisanat du henné. Dialecte du sud. Fêtes des dattes. Musique stambali. Hospitalité chaleureuse. Patrimoine en danger mais défendu.",
        
        economie: "Oasis (dattes de qualité, henné réputé). Pêche maritime. Industries chimiques et phosphates (pollution controversée). Port commercial. Agriculture oasienne traditionnelle menacée. Artisanat du henné. Tourisme oasien émergent. Commerce régional."
    },

    medenine: {
        name: "Médenine",
        subtitle: "Terre des Ksour",
        icon: "🏰",
        pop: "~480K",
        fond: "Ksourienne",
        stat: "Berbère",
        image: "image/mednine.png",
        
        histoire: "Région berbère du sud-est réputée pour son architecture traditionnelle unique : les ksour (greniers fortifiés) et villages troglodytes. Djerba, île mythique d'Ulysse, fait partie du gouvernorat. Architecture défensive ancestrale contre les invasions. Tataouine et ses ksour ont inspiré Star Wars.",
        
        origine: "Le nom 'Médenine' (مدنين) dérive de l'arabe 'Medayen' (petites villes) ou pourrait être lié au berbère, désignant un ensemble de villages et ksour fortifiés de la région.",
        
        lieux: [
            { nom: "Ksar Médenine", desc: "Grenier fortifié à étages, photo iconique",photos: ["image/mednine/ksar1.webp","image/mednine/ksar2.jpg","image/mednine/ksar3.webp","image/mednine/ksar4.webp"] },
            { nom: "Île de Djerba", desc: "Plages paradisiaques" ,photos: ["image/mednine/djerba1.jpeg","image/mednine/djerba2.jpeg","image/mednine/djerba3.jpeg","image/mednine/djerba4.webp","image/mednine/djerba5.webp"] },
            { nom: "Houmt Souk", desc: "Capitale de Djerba, marché coloré" ,photos: ["image/mednine/souk1.jpeg","image/mednine/souk2.jpeg","image/mednine/souk3.jpeg","image/mednine/souk4.jpeg","image/mednine/souk5.jpeg","image/mednine/souk6.jpeg","image/mednine/souk7.jpeg"] },
            { nom: "Djerbahood", desc: "est un village artistique à ciel ouvert situé à Erriadh, sur l’île de Djerba en Tunisie. Ce projet, lancé en 2014, a transformé les murs du village en galerie de street art avec les œuvres d’une centaine d’artistes internationaux" ,photos: ["image/mednine/djerbahood1.jpeg","image/mednine/djerbahood2.jpeg","image/mednine/djerbahood3.jpeg","image/mednine/djerbahood4.jpeg","image/mednine/djerbahood5.jpeg","image/mednine/djerbahood6.jpeg","image/mednine/djerbahood7.jpeg"] },
            { nom: "Toujene", desc: "is a small Berber mountain village in southern Tunisia, located in the Medenine Governorate. It is known for its stone houses built into the hills, narrow winding paths, and traditional Berber culture, with a quiet atmosphere and panoramic views of the surrounding landscape",photos: ["image/mednine/toujen1.jpeg","image/mednine/toujen2.jpeg","image/mednine/toujen3.jpeg","image/mednine/toujen4.jpeg","image/mednine/toujen5.jpeg","image/mednine/toujen6.jpeg","image/mednine/toujen7.jpeg"] },
            { nom: "Guellala", desc: "Village potier de Djerba" ,photos: ["image/mednine/gallela1.jpeg","image/mednine/gallela2.jpeg","image/mednine/gallela3.jpeg","image/mednine/gallela4.jpeg"] },
            { nom: "El Ghriba", desc: "est une célèbre synagogue située sur l’île de Djerba, en Tunisie. Elle est considérée comme la plus ancienne synagogue d’Afrique du Nord, avec une histoire qui remonterait à plus de 2 500 ans selon la tradition locale",photos: ["image/mednine/ghriba1.jpeg","image/mednine/ghriba2.jpeg","image/mednine/ghriba3.jpeg","image/mednine/ghriba4.jpeg"] }
        ],
        
        plats: [
            { nom: "Couscous à la viande", desc: "est un plat traditionnel du sud tunisien, préparé le plus souvent avec de l’agneau. Il se distingue par une sauce rouge épicée, enrichie de pois chiches, de légumes du terroir et parfois de piments secs", photos: ["image/mednine/couscous2.jpg","image/mednine/couscous1.webp"] },
            { nom: "Riz djerbien", desc: "Avec poulpe ou fruits de mer", photos: ["image/mednine/riz1.webp","image/mednine/riz2.webp"] },
            { nom: "Legmi", desc: "Il s’agit d’une boisson traditionnelle à base de lait fermenté ou de lait caillé, parfois légèrement sucrée, consommée surtout dans le sud tunisien pour ses vertus digestives et nutritives" ,photos: ["image/gabes/legmi1.jpg","image/gabes/legmi2.jpg"] },
            { nom: "Dattes", desc: "La Tunisie est célèbre pour ses palmeraies et ses dattes de qualité, notamment la variété Deglet Nour, connue pour sa douceur et sa texture moelleuse",photos: ["image/gabes/datte1.jpg","image/gabes/datte2.jpg"] }
            
        ],
        
        culture: "Architecture berbère unique (ksour, maisons troglodytes). Culture djerbienne spécifique (berbère et juive séfarade). Artisanat potier à Guellala. Traditions ancestrales préservées. Dialecte berbère. Patrimoine juif important (Ghriba). Hospitalité légendaire. Décors de Star Wars.",
        
        economie: "Tourisme balnéaire à Djerba (hôtels, plages). Artisanat (poterie, tissage, bijoux). Pêche (poulpe de Djerba réputé). Agriculture oasienne (dattes, oliviers). Patrimoine architectural (ksour). Élevage. Commerce insulaire. Cinéma (Star Wars)."
    },

    tataouine: {
        name: "Tataouine",
        subtitle: "Désert Star Wars",
        icon: "🏜️",
        pop: "~150K",
        fond: "Star Wars",
        stat: "Désertique",
        image: "image/tataouine.png",
        
        histoire: "Grand Sud désertique, célèbre mondialement pour ses décors de Star Wars (planète Tatooine). Ksour berbères spectaculaires (Chenini, Douiret, Ksar Hadada). Villages troglodytes habités depuis des siècles. Architecture défensive unique. Zone de nomadisme ancestral. Paysages lunaires du désert.",
        
        origine: "Le nom 'Tataouine' (تطاوين) dérive du berbère 'Tittawin' signifiant 'les sources' ou 'les yeux d'eau', référence aux points d'eau rares et vitaux du désert. George Lucas en a fait 'Tatooine' pour Star Wars.",
        
        lieux: [
            { nom: "Chenini", desc: "Village berbère perché spectaculaire, grenier ksar", photos: ["image/tataouine/chenini1.jpeg","image/tataouine/chenini2.jpeg","image/tataouine/chenini3.jpeg","image/tataouine/chenini4.jpeg","image/tataouine/chenini5.jpeg","image/tataouine/chenini6.jpeg"] },
            { nom: "Douiret", desc: "Village troglodyte abandonné, vues panoramiques" ,photos: ["image/tataouine/douiret1.jpeg","image/tataouine/douiret2.jpeg","image/tataouine/douiret3.jpeg","image/tataouine/douiret4.jpeg"] },
            { nom: "Ksar Hadada", desc: "Décor Star Wars, grenier à étages", photos: ["image/tataouine/hadada1.jpeg","image/tataouine/hadada2.jpeg","image/tataouine/hadada3.jpeg","image/tataouine/hadada4.jpeg"] },
            { nom: "Ksar Ouled Debbab", desc: "Architecture défensive traditionnelle" ,photos: ["image/tataouine/debbab1.jpeg","image/tataouine/debbab2.jpeg","image/tataouine/debbab3.jpeg","image/tataouine/debbab3.jpeg"] },
            { nom: "Désert de sable", desc: "Dunes et paysages lunaires",photos: ["image/tataouine/desert1.jpeg","image/tataouine/desert2.jpeg","image/tataouine/desert3.jpeg","image/tataouine/desert4.jpeg","image/tataouine/desert5.jpeg","image/tataouine/desert6.jpeg","image/tataouine/desert7.jpeg","image/tataouine/desert8.jpeg"] },
        ],
        
        plats: [
            { nom: "Couscous désertique", desc: "Agneau et légumes secs", photos: ["image/tataouine/couscous1.jpg","image/tataouine/couscous2.webp"] },
            { nom: "Pain berbère", desc: "Cuit sous le sable chaud", photos: ["image/tataouine/pain1.jpeg","image/tataouine/pain2.jpeg","image/tataouine/pain3.jpg"] },
            { nom: "Datte fraîche", desc: "Des oasis locales",photos: ["image/gabes/datte1.jpg","image/gabes/datte2.jpg"] },
            { nom: "Thé à la menthe", desc: "Hospitalité du désert" ,photos: ["image/tataouine/the.jpg","image/tataouine/the2.jpg"] },
            { nom: "Méchoui", desc: "Agneau rôti traditionnel" ,photos: ["image/tataouine/mechoui.jpg"] },
            { nom: "Bsissa", desc: "Farine grillée énergétique", photos: ["image/tataouine/bsissa1.jpg","image/tataouine/bsissa2.jpg","image/tataouine/bsissa.jpg"] }
        ],
        
        culture: "Culture berbère ancestrale préservée. Architecture troglodyte unique au monde. Traditions nomades et sédentaires. Hospitalité légendaire du désert. Artisanat textile et vannerie. Dialecte berbère tmazight. Célébrité internationale grâce à Star Wars. Patrimoine en danger.",
        
        economie: "Tourisme cinématographique (Star Wars). Tourisme culturel (ksour, villages troglodytes). Élevage caprin et ovin. Agriculture oasienne (dattes, oliviers). Artisanat traditionnel. Commerce transsaharien historique. Guides touristiques. Développement fragile."
    },

    gafsa: {
        name: "Gafsa",
        subtitle: "Capitale Phosphates",
        icon: "💎",
        pop: "~340K",
        fond: "Phosphates",
        stat: "Préhistoire",
        image: "image/gafsa.png",
        
        histoire: "Ancienne Capsa romaine, Gafsa est le berceau de la civilisation capsienne (8000-4500 av. J.-C.), culture préhistorique nord-africaine. Oasis historique du désert. Exploitation des phosphates depuis 1886, richesse minière majeure. Thermes romains bien conservés. Ville de garnison ottomane. Soulèvement social de 2008 (bassin minier).",
        
        origine: "Le nom 'Gafsa' (قفصة) dérive du latin 'Capsa', nom romain de la cité. L'origine plus ancienne pourrait être berbère, désignant une zone d'oasis stratégique au carrefour du désert.",
        
        lieux: [
            { nom: "Piscines romaines", desc: "Thermes antiques, bassins naturels chauds" ,photos: ["image/gafsa/piscine1.jpeg","image/gafsa/piscine2.jpeg","image/gafsa/piscine3.jpeg","image/gafsa/piscine4.jpeg"] },
            { nom: "Musée archéologique", desc: "Civilisation capsienne, préhistoire" ,photos: ["image/gafsa/musee1.jpeg","image/gafsa/musee2.jpeg","image/gafsa/musee3.jpeg","image/gafsa/musee4.jpeg"] },
            { nom: "Oasis de Gafsa", desc: "Palmiers et jardins irrigués" ,photos: ["image/gafsa/oasis1.jpg","image/gafsa/oasis2.jpg","image/gafsa/oasis3.avif"] },
            { nom: "Lalla", desc: "Quartier historique de l'oasis" ,photos: ["image/gafsa/lella1.jpeg","image/gafsa/lella2.jpeg","image/gafsa/lella3.jpeg"] },
            { nom: "Mines de phosphates", desc: "Infrastructures industrielles" ,photos: ["image/gafsa/mine1.jpeg","image/gafsa/mine2.jpeg","image/gafsa/mine3.jpeg"] },
            { nom: "Seldja Gorges", desc: "Canyon spectaculaire à proximité" ,photos: ["image/gafsa/sedja1.jpeg","image/gafsa/sedja2.jpeg","image/gafsa/sedja3.jpeg"] }
        ],
        
        plats: [
            { nom: "Dattes locales", desc: "De l'oasis de Gafsa" ,photos: ["image/gabes/datte1.jpg","image/gabes/datte2.jpg","image/tozeur/degla2.jpeg","image/tozeur/degla1.jpeg"]},
            { nom: "Pain traditionnel", desc: "Cuit au four d'argile" ,photos: ["image/tataouine/pain1.jpeg","image/tataouine/pain2.jpeg","image/tataouine/pain3.jpg"]},
            { nom: "Berkoukes", desc: "Pâtes traditionnelles" ,photos: ["image/gafsa/berkoukes1.jpeg","image/gafsa/berkoukes2.webp"]}
        ],
        
        culture: "Berceau de la civilisation capsienne préhistorique. Culture oasienne et minière. Traditions berbères et arabes. Architecture coloniale minière. Mémoire des luttes sociales (bassin minier). Artisanat traditionnel. Musique stambali et folklore. Dialecte du sud-ouest.",
        
        economie: "Phosphates (exploitation intensive, CPG). Industries chimiques dérivées. Oasis (dattes, agriculture). Thermalisme émergent. Artisanat. Commerce régional. Chômage et tensions sociales. Richesse minérale contrastant avec pauvreté. Transition économique nécessaire."
    },

    tozeur: {
        name: "Tozeur",
        subtitle: "Porte du Désert",
        icon: "🌵",
        pop: "~110K",
        fond: "200K palmiers",
        stat: "Chott el Jérid",
        image: "image/tozeur.png",
        
        histoire: "Oasis majeure du désert depuis l'Antiquité, Tozeur est la porte du Sahara. Architecture unique en briques jaunes (Ouled el Hadef). Chott el Jérid, immense lac salé aux mirages spectaculaires. Décors de Star Wars (Onk Jmel). Palmeraie de 200 000 palmiers produisant les meilleures dattes Deglet Nour. Aéroport international pour le tourisme saharien.",
        
        origine: "Le nom 'Tozeur' (توزر) dérive probablement du berbère 'Tuzurus' ou du latin 'Tusuros', désignant cette oasis stratégique aux confins du désert, escale caravanière historique.",
        
        lieux: [
            { nom: "Chott el Jérid", desc: "Lac salé immense, mirages et paysages lunaires" ,photos: ["image/tozeur/chott1.jpeg","image/tozeur/chott2.jpeg","image/tozeur/chott3.jpeg","image/tozeur/chott4.jpeg","image/tozeur/chott5.jpeg"] },
            { nom: "Palmeraie de Tozeur", desc: "200 000 palmiers, balades en calèche" ,photos: ["image/tozeur/palmerie1.jpeg","image/tozeur/palmerie2.webp","image/tozeur/palmerie3.jpeg","image/tozeur/palmerie4.jpeg"] },
            { nom: "Médina Ouled el Hadef", desc: "Architecture en briques jaunes unique" ,photos: ["image/tozeur/medina1.jpeg","image/tozeur/medina2.jpeg","image/tozeur/medina3.jpeg","image/tozeur/medina4.jpeg"] },
            { nom: "Onk Jmel", desc: "Décors Star Wars, dunes spectaculaires", photos: ["image/tozeur/onk1.jpeg","image/tozeur/onk2.jpeg","image/tozeur/onk3.jpeg","image/tozeur/onk4.webp"] },
            { nom: "Nefta", desc: "Oasis mystique, Corbeille sacrée" ,photos: ["image/tozeur/nefta1.jpeg","image/tozeur/nefta2.jpeg","image/tozeur/nefta3.jpeg","image/tozeur/nefta4.jpeg"] }
            
        ],
        
        plats: [
            { nom: "Dattes Deglet Nour", desc: "Les meilleures au monde, sucrées et fondantes",photos: ["image/gabes/datte1.jpg","image/gabes/datte2.jpg","image/tozeur/degla2.jpeg","image/tozeur/degla1.jpeg"] },
            { nom: "Couscous aux dattes", desc: "Spécialité sucrée-salée du sud",photos: ["image/gabes/couscous_datte1.jpeg","image/gabes/couscous_datte2.jpeg"] },
            { nom: "Mtabbga", desc: "Pâtisserie aux dattes" ,photos: ["image/tozeur/mtabga1.jpg","image/tozeur/mtabga2.jpg"] }
        ],
        
        culture: "Culture oasienne saharienne authentique. Architecture de briques décoratives unique. Traditions musicales sahariennes (musique noire, stambali). Artisanat (vannerie, tapis, cuir). Hospitalité légendaire. Festivals du désert. Soufisme et spiritualité. Célébrité cinématographique (Star Wars, Le Patient Anglais).",
        
        economie: "Tourisme saharien majeur (hôtels de luxe, excursions désert). Dattes Deglet Nour (exportation mondiale). Agriculture oasienne. Aéroport international. Artisanat touristique. Cinéma (décors et tournages). Commerce transsaharien historique. Développement durable fragile."
    },

    kebili: {
        name: "Kébili",
        subtitle: "Le Grand Sud",
        icon: "🐪",
        pop: "~160K",
        fond: "Grand Erg",
        stat: "Record 55°C",
        image: "image/kebili.png",
        
        histoire: "Gouvernorat le plus méridional de Tunisie, Kébili est la porte du Grand Erg Oriental (mer de dunes). Douz, 'porte du Sahara', est le point de départ des caravanes. Ksar Ghilane, oasis avec source chaude au milieu du désert. Température record de 55°C. Nomadisme ancestral des tribus mrazig. Festival international du Sahara à Douz.",
        
        origine: "Le nom 'Kébili' (قبلي) vient de l'arabe 'Qibla' signifiant 'le sud' ou 'direction de La Mecque', soulignant sa position extrême sud de la Tunisie, aux portes du Sahara.",
        
        lieux: [
            { nom: "Douz", desc: "Porte du Sahara, dunes infinies, marché nomade", photos: ["image/kebili/douz1.jpeg","image/kebili/douz2.jpeg","image/kebili/douz3.jpeg","image/kebili/douz4.jpeg","image/kebili/douz5.jpeg"] },
            { nom: "Ksar Ghilane", desc: "Oasis désertique isolée, source thermale" ,photos: ["image/kebili/ksar1.webp","image/kebili/ksar2.jpeg","image/kebili/ksar3.jpeg","image/kebili/ksar4.jpeg","image/kebili/ksar5.jpeg"] },
            { nom: "Grand Erg Oriental", desc: "Mer de dunes dorées spectaculaires" ,photos: ["image/kebili/erg1.jpeg","image/kebili/erg2.jpeg","image/kebili/erg3.jpeg","image/kebili/erg4.jpeg"] },
           
        ],
        
        plats: [
            { nom: "Couscous nomade", desc: "Version désertique simple et généreuse" ,photos: ["image/mednine/couscous2.jpg","image/mednine/couscous1.webp"]},
            { nom: "Pain bédouin", desc: "Cuit sous le sable",photos: ["image/tataouine/pain1.jpeg","image/tataouine/pain2.jpeg","image/tataouine/pain3.jpg"] },
            { nom: "Dattes fraîches", desc: "Des oasis locales" ,photos: ["image/gabes/datte1.jpg","image/gabes/datte2.jpg"]},
            { nom: "Thé touareg", desc: "Très sucré, trois services", photos: ["image/kebili/the1.jpeg","image/kebili/the2.jpg"] }
        ],
        
        culture: "Culture nomade bédouine préservée (tribus mrazig). Festival international du Sahara à Douz (courses de chameaux, fantasia). Traditions orales et poésie. Artisanat nomade (tissage, cuir, bijoux). Musique saharienne. Hospitalité légendaire du désert. Mode de vie adapté au climat extrême.",
        
        economie: "Tourisme saharien (méharées, 4x4, campements). Dattes de qualité. Élevage caprin et camelin. Artisanat nomade. Festivals et événements. Agriculture oasienne limitée. Économie fragile dépendant du tourisme. Commerce transsaharien historique. Énergies renouvelables (solaire) en développement."
    }
};

// Variables globales pour gérer les photos
let currentRegionData = null;
let currentPhotoArray = [];
let currentPhotoIndex = 0;

// Fonction pour ouvrir la modale avec les nouvelles données
function openModal(key) {
    const r = regionData[key];
    if(!r) return;
    
    currentRegionData = r;  // Stocker les données courantes

    document.getElementById('modalTitle').innerHTML = `${r.icon} ${r.name}`;
    document.getElementById('modalSubtitle').textContent = r.subtitle;

    // Construction du contenu enrichi
    let lieuxHTML = r.lieux.map((lieu, idx) => {
        const clickHandler = lieu.photos ? `onclick="showPhotoById('lieu', ${idx})"` : '';
        const photoIndicator = lieu.photos ? '<span class="photo-badge">📷</span>' : '';
        return `<div class="lieu-item ${lieu.photos ? 'clickable' : ''}" ${clickHandler}>
            <strong>${lieu.nom}:</strong> ${lieu.desc}
            ${photoIndicator}
        </div>`;
    }).join('');

    let platsHTML = r.plats.map((plat, idx) => {
        const clickHandler = plat.photos ? `onclick="showPhotoById('plat', ${idx})"` : '';
        const photoIndicator = plat.photos ? '<span class="photo-badge">📷</span>' : '';
        return `<div class="plat-item ${plat.photos ? 'clickable' : ''}" ${clickHandler}>
            <strong>${plat.nom}:</strong> ${plat.desc}
            ${photoIndicator}
        </div>`;
    }).join('');
    // Récupérer le lien Google Maps
    const mapsLink = googleMapsLinks[key] || "#";
    document.getElementById('modalBody').innerHTML = `
    <div class="modal-body-inner">
        <div class="image-section">
            <img src="${r.image}" alt="${r.name}" class="region-image">
            <!-- NOUVEAU: Bouton Google Maps -->
            <a href="${mapsLink}" target="_blank" class="maps-button">
        📍 Voir sur Google Maps
            </a>
        </div>
        
        <div class="text-section">
            <div class="info-section">
                <h3>📊 Informations Clés</h3>
                <div class="info-grid">
                    <div class="info-card"><h4>Population</h4><p>${r.pop}</p></div>
                    <div class="info-card"><h4>Caractéristique</h4><p>${r.fond}</p></div>
                    <div class="info-card"><h4>Statut</h4><p>${r.stat}</p></div>
                </div>
            </div>

            <div class="info-section">
                <h3>🏛️ Histoire</h3>
                <p>${r.histoire}</p>
            </div>

            <div class="info-section">
                <h3>📜 Origine du Nom</h3>
                <p>${r.origine}</p>
            </div>

            <div class="info-section">
                <h3>🏖️ Lieux à Visiter</h3>
                <div class="lieux-grid">
                    ${lieuxHTML}
                </div>
            </div>

            <div class="info-section">
                <h3>🍽️ Gastronomie</h3>
                <div class="plats-grid">
                    ${platsHTML}
                </div>
            </div>

            <div class="info-section">
                <h3>🎭 Culture & Traditions</h3>
                <p>${r.culture}</p>
            </div>

            <div class="info-section">
                <h3>💼 Économie</h3>
                <p>${r.economie}</p>
            </div>
        </div>
    </div>
`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Gestion de la fermeture de la modale
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Événements pour les régions
const paths = document.querySelectorAll('.region-path');
const tooltip = document.getElementById('tooltip');
const modal = document.getElementById('modal');

paths.forEach(path => {
    path.addEventListener('mouseenter', function(e) {
        const region = regionData[this.dataset.region];
        if(region) {
            tooltip.textContent = `${region.icon} ${region.name}`;
            tooltip.classList.add('show');
        }
    });

    path.addEventListener('mousemove', function(e) {
        tooltip.style.left = e.clientX + 20 + 'px';
        tooltip.style.top = e.clientY - 40 + 'px';
    });

    path.addEventListener('mouseleave', function() {
        tooltip.classList.remove('show');
    });

    path.addEventListener('click', function() {
        openModal(this.dataset.region);
    });
});

modal.addEventListener('click', function(e) {
    if(e.target === modal) closeModal();
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') closeModal();
});

// ===== GALERIE SIMPLE =====

function showPhotoById(type, index) {
    if (!currentRegionData) return;
    
    const collection = type === 'lieu' ? currentRegionData.lieux : currentRegionData.plats;
    const item = collection[index];
    
    if (!item || !item.photos) {
        alert('Aucune photo disponible');
        return;
    }
    
    showPhotos(item.photos);
}

function showPhotos(imageUrls) {
    if (!imageUrls || imageUrls.length === 0) {
        alert('Aucune photo disponible');
        return;
    }
    
    currentPhotoArray = imageUrls;
    currentPhotoIndex = 0;
    
    const gallery = document.createElement('div');
    gallery.className = 'image-gallery';
    gallery.id = 'photoGallery';
    gallery.innerHTML = `
        <div class="gallery-box">
            <button class="gallery-close" onclick="closePhotos()">✕</button>
            
            <div class="gallery-image-container">
                <img id="galleryImg" src="${imageUrls[0]}" alt="Photo" class="gallery-image">
                
                ${imageUrls.length > 1 ? `
                <button class="gallery-btn gallery-prev" onclick="prevPhoto()">❮</button>
                <button class="gallery-btn gallery-next" onclick="nextPhoto()">❯</button>
                ` : ''}
            </div>
            
            ${imageUrls.length > 1 ? `
            <div class="gallery-footer">
                <span id="photoCount">${currentPhotoIndex + 1} / ${imageUrls.length}</span>
                <div class="photo-dots">
                    ${imageUrls.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" onclick="goToPhoto(${i})"></span>`).join('')}
                </div>
            </div>
            ` : ''}
        </div>
    `;
    
    document.body.appendChild(gallery);
    document.body.style.overflow = 'hidden';
    
    // Support touch swipe
    let touchStartX = 0;
    gallery.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
    gallery.addEventListener('touchend', (e) => {
        let touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) nextPhoto();
        if (touchEndX - touchStartX > 50) prevPhoto();
    });
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotoArray.length;
    updatePhotoDisplay();
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotoArray.length) % currentPhotoArray.length;
    updatePhotoDisplay();
}

function goToPhoto(index) {
    currentPhotoIndex = index;
    updatePhotoDisplay();
}

function updatePhotoDisplay() {
    const img = document.getElementById('galleryImg');
    const count = document.getElementById('photoCount');
    const dots = document.querySelectorAll('.photo-dots .dot');
    
    if (img) img.src = currentPhotoArray[currentPhotoIndex];
    if (count) count.textContent = `${currentPhotoIndex + 1} / ${currentPhotoArray.length}`;
    
    dots.forEach((dot, i) => {
        if (i === currentPhotoIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function closePhotos() {
    const gallery = document.getElementById('photoGallery');
    if (gallery) {
        gallery.remove();
        document.body.style.overflow = 'auto';
    }
}

function galleryNext(btn) {
    nextPhoto();
}

function galleryPrev(btn) {
    prevPhoto();
}

function updateGalleryImage(gallery) {
    const img = gallery.querySelector('#galleryImg');
    const count = gallery.querySelector('#photoCount');
    img.src = gallery.imageUrls[gallery.currentIndex];
    count.textContent = `${gallery.currentIndex + 1} / ${gallery.imageUrls.length}`;
}