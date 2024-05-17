import "./Asset.css";
import React, { useState, useEffect } from "react";
import Select from "react-select";

import sacsdata from "./Asset.json";

export const Asset = () => {
  var [sacsnumber, setSacsnumber] = useState(
    sacsdata[0].sacsBasicInformation.sacsNumber
  );
  var [basicinfovalues, setBasicinfovalues] = useState(
    Object.values(sacsdata[0].sacsBasicInformation)
  );
  var [dooritemsvalues, setDooritemsvalues] = useState(
    Object.values(sacsdata[0].doorItems)
  );
  const [doorservicesvalues, setDoorservicesvalues] = useState(
    Object.values(sacsdata[0].doorSubsystemServices)
  );
  const [hwcsystemsvalues, setHwcsystemsvalues] = useState(
    Object.values(sacsdata[0].honeywellCemSystemDetails)
  );
  const [sacsinputvalues, setSacsinputvalues] = useState(
    Object.values(sacsdata[0].sacsInput)
  );
  const [sacsoutputvalues, setSacsoutputvalues] = useState(
    Object.values(sacsdata[0].sacsOutput)
  );
  const [vddormavalues, setVddormavalues] = useState(
    Object.values(sacsdata[0].vonDupriDormaDetails)
  );

  //Headers
  const basicinfoheaders = Object.keys(sacsdata[0].sacsBasicInformation);
  const dooritemsheaders = Object.keys(sacsdata[0].doorItems);
  const doorservicesheaders = Object.keys(sacsdata[0].doorSubsystemServices);
  const hwcsystemsheaders = Object.keys(sacsdata[0].honeywellCemSystemDetails);
  const sacsinputheaders = Object.keys(sacsdata[0].sacsInput);
  const sacsoutputheaders = Object.keys(sacsdata[0].sacsOutput);
  const vddormaheaders = Object.keys(sacsdata[0].vonDupriDormaDetails);
  //Values
  //basicinfovalues = sacsdata.map((item) => Object.values(item.sacsBasicInformation));
  //setSacsnumber(sacsdata[0].sacsBasicInformation.sacsNumber);
  //if(sacsdata.length > 0){
  // basicinfovalues = Object.values(sacsdata[0].sacsBasicInformation);
  // sacsnumber= sacsdata[0].sacsBasicInformation.sacsNumber;
  //const dooritemsvalues = sacsdata.map((item) => Object.values(item.doorItems));
  /*  const doorservicesvalues = sacsdata.map((item) =>
    Object.values(item.doorSubsystemServices)
  );
  const hwcsystemsvalues = sacsdata.map((item) =>
    Object.values(item.honeywellCemSystemDetails)
  );
  const sacsinputvalues = sacsdata.map((item) => Object.values(item.sacsInput));
  const sacsoutputvalues = sacsdata.map((item) =>
    Object.values(item.sacsOutput)
  );
  const vddormavalues = sacsdata.map((item) =>
    Object.values(item.vonDupriDormaDetails)
  ); */

  /*   setBasicinfovalues(sacsdata.map((item) => Object.values(item.sacsBasicInformation)));
  setDooritemsvalues(sacsdata.map((item) => Object.values(item.doorItems)));
  setDoorservicesvalues(sacsdata.map((item) => Object.values(item.doorSubsystemServices)));
  setHwcsystemsvalues(sacsdata.map((item) => Object.values(item.honeywellCemSystemDetails)));
  setSacsinputvalues(sacsdata.map((item) => Object.values(item.sacsInput)));
  setSacsoutputvalues(sacsdata.map((item) => Object.values(item.sacsOutput)));
  setVddormavalues(sacsdata.map((item) => Object.values(item.vonDupriDormaDetails))); */

  const handleSacsnumberChange = (obj) => {
    setSacsnumber(obj);
    // alert(obj.sacsBasicInformation.sacsNumber);
    var sacsnumber = obj.sacsBasicInformation.sacsNumber;
    // alert('sacs - '+sacsnumber);
    if (sacsdata.length > 0) {
      //  alert('--1--');
      for (var i = 0; i < sacsdata.length; i++) {
        //  alert('--2--');
        if (sacsnumber === sacsdata[i].sacsBasicInformation.sacsNumber) {
          setBasicinfovalues(Object.values(sacsdata[i].sacsBasicInformation));
        }

        if (sacsnumber === sacsdata[i].doorItems.sacsNumber) {
          setDooritemsvalues(Object.values(sacsdata[i].doorItems));
        }

        if (sacsnumber === sacsdata[i].doorSubsystemServices.sacsNumber) {
          setDoorservicesvalues(
            Object.values(sacsdata[i].doorSubsystemServices)
          );
        }

        if (sacsnumber === sacsdata[i].honeywellCemSystemDetails.sacsNumber) {
          setHwcsystemsvalues(
            Object.values(sacsdata[i].honeywellCemSystemDetails)
          );
        }

        if (sacsnumber === sacsdata[i].sacsInput.sacsNumber) {
          setSacsinputvalues(Object.values(sacsdata[i].sacsInput));
        }

        if (sacsnumber === sacsdata[i].sacsOutput.sacsNumber) {
          setSacsoutputvalues(Object.values(sacsdata[i].sacsOutput));
        }

        if (sacsnumber === sacsdata[i].vonDupriDormaDetails.sacsNumber) {
          setVddormavalues(Object.values(sacsdata[i].vonDupriDormaDetails));
        }
      }
    }
  };

  const displaypdf = (e) => {
    alert(e.target.value);
  //  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5"+Object.values(s));
    alert('done');
  }

  return (
    <div>
      <div className="tb-column">
        <div className="column title">Basic Information</div>
        {basicinfoheaders ? (
          <table className="basic-table">
            {basicinfoheaders.map(function (element, i) {
              if (i < 1) {
                return (
                  <tr className="basic-tr">
                    <td className="basic-first-column">{element.toString()}</td>
                    <td>
                      <Select
                        placeholder={sacsnumber}
                        value={sacsnumber}
                        options={sacsdata}
                        onChange={(e) => handleSacsnumberChange(e)}
                        getOptionLabel={(y) =>
                          y.sacsBasicInformation.sacsNumber
                        }
                        getOptionValue={(y) =>
                          y.sacsBasicInformation.sacsNumber
                        }
                      />
                    </td>
                  </tr>
                );
              } else {
                //alert(basicinfovalues);
                return (
                  <tr className="basic-tr">
                    <td className="basic-first-column">{element.toString()}</td>
                    <td onClick={ e => displaypdf(e) }>{basicinfovalues[i]}</td>
                   {/*  <td >{basicinfovalues[i]}</td> */}
                  </tr>
                );
              }
            })}
          </table>
        ) : null}
      </div>
      <div className="tb-column two">
        <div className="column title">Door Items</div>
        {dooritemsheaders ? (
          <table className="basic-table">
            {dooritemsheaders.map(function (element, j) {
              return (
                <tr className="basic-tr">
                  <td className="basic-first-column">{element.toString()}</td>
                  <td>{dooritemsvalues[j]}</td>
                </tr>
              );
            })}
          </table>
        ) : null}
        <br />
        <div className="column title">Door Subsystem Services</div>
        {doorservicesheaders ? (
          <table className="basic-table">
            {doorservicesheaders.map(function (element, j) {
              return (
                <tr className="basic-tr">
                  <td className="basic-first-column">{element.toString()}</td>
                  <td>{doorservicesvalues[j]}</td>
                </tr>
              );
            })}
          </table>
        ) : null}
      </div>
      <div className="tb-column three">
        <div className="column title">Honeywell Cem System Details</div>

        {hwcsystemsheaders ? (
          <table className="basic-table">
            {hwcsystemsheaders.map(function (element, k) {
              return (
                <tr className="basic-tr">
                  <td className="basic-first-column">{element.toString()}</td>
                  <td className="text-wrap">{hwcsystemsvalues[k]}</td>
                </tr>
              );
            })}
          </table>
        ) : null}

        <div className="column title">SACS Input</div>
        {sacsinputheaders ? (
          <table className="basic-table">
            {sacsinputheaders.map(function (element, k) {
              return (
                <tr className="basic-tr">
                  <td className="basic-first-column">{element.toString()}</td>
                  <td>{sacsinputvalues[k]}</td>
                </tr>
              );
            })}
          </table>
        ) : null}
      </div>
      <div className="tb-column four">
        <div className="column title">SACS Output</div>

        {sacsoutputheaders ? (
          <table className="basic-table">
            {sacsoutputheaders.map(function (element, l) {
              return (
                <tr className="basic-tr">
                  <td className="basic-first-column">{element.toString()}</td>
                  <td className="text-wrap">{sacsoutputvalues[l]}</td>
                </tr>
              );
            })}
          </table>
        ) : null}
        <br />
        <div className="column title">Vondupri Dorma Details</div>
        {vddormaheaders ? (
          <table className="basic-table">
            {vddormaheaders.map(function (element, l) {
              return (
                <tr className="basic-tr">
                  <td className="basic-first-column">{element.toString()}</td>
                  <td className="text-wrap">{vddormavalues[l]}</td>
                </tr>
              );
            })}
          </table>
        ) : null}
      </div>
    </div>
  );
};
