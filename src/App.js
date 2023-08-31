
import './App.css';
import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';

import Items from "./ItemsData"




function App() {

  const [choosedItem, setChoosedItem] = useState("")

  const options = Items.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });





  return (


    <div className="AppContainer">

      <div className="BilbordContainer"></div>


      <nav className='NavContainer'>

        <div className="NavLogoCont">
          LegalFLY
        </div>

        <div className="NavBtnCont">

          <button className="slideOne" type="button" >Wyszukiwarka przdmiotów</button>
          <button className="slideOne" type="button" >Lista przedmiotów</button>

        </div>

      </nav>


      <div className="InputContainer">
        <Autocomplete
          className='AutocompleteInput'
          onChange={(event, value) => setChoosedItem(value)}
          disablePortal
          label={false}
          blurOnSelect={true}
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{ fontSize: "10px" }}
          renderInput={(params) => <TextField placeholder="Co chcesz przewieć?" {...params} variant="outlined" />}
        />
      </div>


      {/* <div className="ItemTitleContainer">
        {choosedItem && choosedItem.title !== null ? choosedItem.title : "Wybierz przedmiot z listy a wszystko Ci powiemy!"}
      </div> */}

      <div className="ItemInfoContainer">

        <div className="ItemImageContainer">
          <div className="ItemImage">
            {choosedItem && choosedItem.imageCode !== null ? <img src={require(`./Images/${choosedItem.imageCode}.png`)} /> : <img src={require(`./Images/Empty.png`)} />}
          </div>
        </div>

        <div className="ItemDescription">

          <div className="DescriptionWindow"
            style={{
              backgroundColor: choosedItem && choosedItem.smallDes === "" && choosedItem.bigDes === "" ? "rgb(98, 255, 98, 0.5)" :
                choosedItem && choosedItem.warning === true ? "rgb(255, 121, 121, 0.5)" : "rgb(255, 206, 115, 0.5)",
              border: choosedItem && choosedItem.smallDes === "" && choosedItem.bigDes === "" ? "2px solid green" :
                choosedItem && choosedItem.warning === true ? "2px solid red" : "2px solid orange"
            }}
          >


            <div className="DescriptionContent">

              <div className="DescriptionContent">
                {choosedItem && (choosedItem.smallDes !== null || choosedItem.bigDes !== null) ? (
                  <>
                    {choosedItem.smallDes !== null && choosedItem.smallDes !== "" && <p>👜 {choosedItem.smallDes}</p>}
                    {choosedItem.bigDes !== null && choosedItem.bigDes !== "" && <p>🧳 {choosedItem.bigDes}</p>}
                    {(choosedItem.smallDes === "" && choosedItem.bigDes === "") && (
                      <>
                        <p>Wszystko już wiesz i masz pod kontrolą 💪</p>
                        <p>Udanej podróży! ✈️</p>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {choosedItem && choosedItem.imageCode !== "Empty" && choosedItem.imageCode !== null ? (
                      <>
                        <p>Wszystko już wiesz i masz pod kontrolą 💪</p>
                        <p>Udanej podróży! ✈️</p>
                      </>
                    ) : (
                      <p>Powiedz nam, co chesz przewieźć 😏</p>
                    )}
                  </>
                )}
              </div>


            </div>
          </div>


        </div>
      </div>

    </div >
  );


}

export default App;
