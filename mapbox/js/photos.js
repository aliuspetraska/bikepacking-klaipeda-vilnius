var photos = [
    {
        name: 'Klaipėdos geležinkelio stotis',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Senoji_ir_naujoji_Klaip%C4%97dos_gele%C5%BEinkelio_stotis.jpg/1200px-Senoji_ir_naujoji_Klaip%C4%97dos_gele%C5%BEinkelio_stotis.jpg',
        coordinates: [21.13733, 55.72039],
    },
    {
        name: 'Meridianas Danės krantinėje',
        photo: 'https://www.ve.lt/uploads/img/catalog/1/1552/502/meridianas-kelia-bures-ir-atnaujina-veikla-.jpg',
        coordinates: [21.1350238, 55.7103224],
    },
    {
        name: 'Karaliaus Vilhelmo kanalas ir Lankupių šliuzas',
        photo: 'https://www.kapamatyti.lt/wp-content/uploads/2019/05/lankupiuL.jpg',
        coordinates: [21.3601792, 55.4813888],
    },
    {
        name: 'Saugų malūnas',
        photo: 'http://siluteinfo.lt/wp-content/uploads/2015/06/lentpjuve-353x240.jpg',
        coordinates: [21.4717859, 55.4636775],
    },
    {
        name: 'Degučių trikampė bažnyčia',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Degu%C4%8Di%C5%B3_katalik%C5%B3_ba%C5%BEny%C4%8Dia.JPG',
        coordinates: [21.76175955, 55.3177175],
    },
    {
        name: 'Tauragės pilis',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoNujcYzCFx64Zdn3Mxk9836zZohxGaEHsOJ9UgRxdSc3sEtaC',
        coordinates: [22.2849271, 55.2526492],
    },
    {
        name: 'Taurų nuotykių parkas',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzAt7Rh0-3Ud8yLw6LtVZYcyUV7bOe0FonnC3nBnFqOwLFkBjy',
        coordinates: [22.250458, 55.2355603],
    },
    {
        name: 'Jurbarko dvaras',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1GqbvOdTBlCFjc0cQ7g-QzWD_v-QvcjLXxNrK2hoYaXLXyf66',
        coordinates: [22.7566874, 55.0788801],
    },
    {
        name: 'Ilgiausias automobilių tiltas Lietuvoje',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7gmY16F2mg3wfK8S5y8okMfV-rN-vzIYDaqXYa4CZrKM1LLL0',
        coordinates: [22.767663, 55.0707753],
    },
    {
        name: 'Kaimelio dvaras',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU_3g9SZueVTWKhMeYkh_CnNXuLQEwFz4vKQG-UtFLhQjuHJBE',
        coordinates: [22.8035671, 55.0677344],
    },
    {
        name: 'Panemunės pilis',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpW4X6SrS2cr3eDXStvW8fJ1i-iCCD15wMJXfnNLU_445WQJSQE',
        coordinates: [22.9866654, 55.0991303],
    },
    {
        name: 'Raudonės pilis',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLwMgW1qyrUkN6HiGhsgB-GJowaCx5Jusc8sMQGTcOasHiNFwn',
        coordinates: [23.1304586, 55.096819],
    },
    {
        name: 'Vaiguvos upelis-gatvė Plokščiuose',
        photo: 'https://turizmogidas.lt/uploads/images/places/big/vaiguvos-upelis-gatve-ploksciuose_gnda5Jut.jpg',
        coordinates: [23.1778059, 55.0832819],
    },
    {
        name: 'Ilguvos dvaras',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIMbxE4ORxUUQOeEMOUrSHCY-rGSDR0rr',
        coordinates: [23.3247015, 55.063933],
    },
    {
        name: 'Pagonijos uola',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNt-jk1R1h6Mfn1E_iwPpVjBN69uLor2_kiq323ibEuozo2bXY',
        coordinates: [23.5707915, 54.9888275],
    },
    {
        name: 'Altoniškių piliakalnis',
        photo: 'https://i.ytimg.com/vi/LaHTCjD0MCc/maxresdefault.jpg',
        coordinates: [23.6005801, 54.9604159],
    },
    {
        name: 'Senoji Zapyškio bažnyčia',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4oSlNCypSI1tUWZQsHkHIsMJzjVSaWXzl7uoABfdf1e3KCyCQ',
        coordinates: [23.6540687, 54.9288002],
    },
    {
        name: 'Pyplių piliakalnis',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBlLcqKjbqrg9jecZycv-IaU6fw5urc7L0qFHU5rUcqNezD-Sa',
        coordinates: [23.7505209, 54.9273391],
    },
    {
        name: 'Aleksoto funikulierius',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0fbAeySpSyjnAKXpfU4vPYeaoDGUviNZgkHIWe-WP7Fw0UNPb',
        coordinates: [23.8870454, 54.8910482],
    },
    {
        name: 'Pažaislio vienuolynas',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7c1Ni4iP0XtrhmhOej6UHkn7ka_CmI8Pavc84FbZj8ncwTKyH',
        coordinates: [24.021821, 54.8763536],
    },
    {
        name: 'Panerių dvaras',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyqQuWW0cRAdbcu3IWRYLVGTTu5YWBcHekuJU4kPG_nfFJcZ5s',
        coordinates: [24.9101794, 54.7856325],
    },
    {
        name: 'Ausiutiškių konglomeratas',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ausiuti%C5%A1ki%C5%B3_konglomeratas_-_panoramio_%281%29.jpg/1600px-Ausiuti%C5%A1ki%C5%B3_konglomeratas_-_panoramio_%281%29.jpg',
        coordinates: [24.9383265, 54.7788359],
    },
    {
        name: 'Vilsos kriokliai',
        photo: 'https://www.pamatyklietuvoje.lt/api/Photo/b5cac1c7-4547-4e02-825d-d1b8c9cd7ba5/0/960/460/crop',
        coordinates: [25.0114059, 54.7183494],
    },
    {
        name: 'Spaudos rūmai',
        photo: 'http://nuotraukos.vilnius21.lt/namai/6/laisves60-8990612.jpg',
        coordinates: [25.21893399999999, 54.702501000000005],
    }
];
