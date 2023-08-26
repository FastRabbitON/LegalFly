
import './App.css';
import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';

function App() {


  const [choosedItem, setChoosedItem] = useState("")



  const Items = [
    { title: 'Brzytwy, żyletki luzem', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Buty na szpilkach', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Cążki do paznokci i skórek', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Druty, szydełka do robótek', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Golarki i ostrza', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Jednorazowe maszynki do golenia', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Noże, nożyczki', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Skalpele', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Strzykawki i igły', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Szpikulce do lodu, korkociągi', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Toporki, tasaki', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Dezodoranty żelowe lub w aerozolu; perfumy', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Kremy i inne płyny kosmetyczne (np. emulsje do opalania, mleczka nawilżające itp.)', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Krople do oczu', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Lakier do paznokci i płyn do zmywania paznokci (z wyjątkiem łatwopalnych)', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Leki', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Maszynki do golenia (jednorazowe)', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Mydło w płynie', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Olejki do kąpieli, substancje nawilżające', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Odsłonięte golarki i ostrza (za wyjątkiem jednorazowych maszynek do golenia z ostrzami zamkniętymi w osłonce)', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Pasta do zębów', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Pilniki do paznokci, cążki do paznokci i skórek', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Podkłady do makijażu/puder w płynie', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Płyn do demakijażu, toniki, mleczka', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Płyn do płukania ust', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Płyn do soczewek kontaktowych', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Płynne błyszczyki', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Prostownica do włosów, suszarka', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Szampony, odżywki, mydło, żele', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Szczoteczka do zębów tradycyjna/elektryczna', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Tusz do rzęs w płynie', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Żele i spray do włosów', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Alkohol i inne płyny kupione w strefie bezcłowej', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Alkohol i inne płyny niezakupione w strefie bezcłowej', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Ciasta, ciastka, kanapki, cukierki, herbatniki, chrupki, orzechy, batoniki, bombonierki', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Herbata w torebkach lub liściasta', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Jogurt, bita śmietana, budyń gotowy', imageCode: 'Y -Y', warning: false, description: "" },
    { title: 'Kawa mielona lub w ziarnach', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Kostki rosołowe', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Napoje zakupione przed punktem kontroli bezpieczeństwa w pojemnikach do 100 ml', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Napoje zakupione po kontroli bezpieczeństwa', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Napoje zakupione przed punktem kontroli bezpieczeństwa w pojemnikach powyżej 100 ml', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Produkty spożywcze w puszkach oraz słoikach, np. sosy, masło orzechowe, owoce, galaretki, serki, konfitury, czekolada, miód', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Przyprawy orientalne (postać płynna, np. sosy)', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Sery', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Świeże owoce, warzywa, zioła', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Warzywa, owoce', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Wędlina, kiełbasa, mięso pakowane, konserwy mięsne', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Zupki, kisiele, sosy - w proszku', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Butle biwakowe z propanem butanem', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Deskorolka', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Harpuny, włócznie, kusze', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Kije golfowe, narciarskie, hokejowe, marszowe', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Kule do kręgli', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Latarki gazowe', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Latarka kieszonkowa ', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Lornetka', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Łyżwy', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Namiot', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Płetwy do pływania', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Rolki', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Rozpałki z tabliczek węgla drzewnego', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Szable', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Strzały i rzutki', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Termos (pusty)', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Trapery (buty)', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Wędki', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Sprzęto do jazdy konnej', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Aparaty fotograficzne', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Akcesoria fotograficzne, monopod itp.', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Baterie litowo-jonowe', imageCode: 'Y-N', warning: false, description: "" },
    { title: 'Blender, Thermomix', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Czajnik bezprzewodowy', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Depilator, golarka elektryczna', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'GPS, pagery', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Kamery', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Konsola xBox, PlayStation itp.', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Telefony komórkowe', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Laptop ', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Ładowarka do telefonu, laptopa, aparatu itp.', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'MP3, walkman, odtwarzacze DVD, CD', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Prostownica, suszarka, lokówka do włosów', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Sprzęt do tatuowania', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Żelazko turystyczne', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Czekany, maczety', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Drobne narzędzia o ostrych końcach', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Duże części samochodów, np. tarcze sprzęgła czy hamulcowe', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Linki stalowe, kajdanki', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Młoty, młotki, łomy', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Narzędzia uniwersalne, tzw. multitool', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Nóż posiadający ostrze otwierające się automatycznie', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Wiertarki, śrubokręty', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Amunicja, pociski, naboje dymne', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Broń kulkowa i śrutowa', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Broń używana w sztukach walki', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Dmuchawki, katapulty, proce', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Kusze', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Pałka teleskopowa', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Pistolety, karabiny', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Urządzenia do ogłuszania, uboju zwierząt', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Detonatory, zapalniki', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Dynamit', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Fajerwerki, race, petardy', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Granaty, miny, spłonki, proch czarny i bezdymny', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Gaz, pojemniki z gazem', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Paliwo płynne i inne płyny łatwopalne', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Aerozole obezwładniające', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Gaśnice', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Kwasy, zasady', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Materiały radioaktywne', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Sprężone gazy', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Trucizny', imageCode: 'N-N', warning: false, description: "" },
    { title: 'Deska surfingowa i windsurfingowa', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Deska snowboardowa, narty', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Instrumenty muzyczne', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Rower', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Sprzęt do nurkowania', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Wózek dziecięcy', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Ciśnieniomierz', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Insulina, glukometr, pompa insulinowa', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Laska do wspierania się bez ostrych krawędzi', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Laska do wspierania się z ostrymi krawędziami, stylizowana na ciupagę itp.', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Leki na receptę', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Leki w postaci płynnej lub zawierającej płyny lub żele', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Wózki inwalidzkie i inne urządzenia zasilane bateriami lub akumulatorami', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'E-papieros', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Harmonijki ustne i inne małe instrumenty muzyczne', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Klucze (do samochodu, do mieszkania)', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Korkociąg', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Kwiaty', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Obrazy', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Ozdoby choinkowe', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Pamiątkowe figurki, ceramika, szkło', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Papierosy', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Parasolka bez ostrego zakończenia', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Parasolka z ostrym zakończeniem', imageCode: 'N-Y', warning: false, description: "" },
    { title: 'Proszek do prania', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Struny do instrumentów', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Szklanki, garnki, naczynia', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Sztućce', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Świeczniki i ozdobne kinkiety', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Zapalniczka jednorazowa', imageCode: 'Y-Y', warning: false, description: "" },
    { title: 'Żarówki, świetlówki', imageCode: 'Y-Y', warning: false, description: "" },

  ];


  const options = Items.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (


    <div className="AppContainer">

      <div className="InputContainer">
        <Autocomplete
          className='AutocompleteInput'
          onChange={(event, value) => setChoosedItem(value)}
          disablePortal
          blurOnSelect={true}
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{ fontSize: "10px" }}
          renderInput={(params) => <TextField {...params} label="Co przewozisz?" />}
        />
      </div>


      <div className="ItemTitleContainer">
        {choosedItem && choosedItem.title !== null ? choosedItem.title : "Wybierz przedmiot z listy"}
      </div>

      <div className="ItemInfoContainer">

        <div className="ItemImage">
          {choosedItem && choosedItem.imageCode !== null ? <img src={require(`./Images/${choosedItem.imageCode}.png`)} /> : <img src={require(`./Images/Empty.png`)} />}
        </div>

        <div className="ItemDescription">

          <div className="DescriptionWindow" style={{ display: choosedItem && choosedItem.warning ? "flex" : "none" }}>
            <div className="DescriptionContent">{choosedItem && choosedItem.description ? choosedItem.description : ""}</div>
          </div>


        </div>
      </div>

    </div>
  );


}

export default App;
