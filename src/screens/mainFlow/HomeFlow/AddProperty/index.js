import { useEffect, useState } from 'react';
import { AddPropertyView } from './AddPropertyView';
import {addRecordIntoTable} from '../../../../helpers/DatabaseHelper';

const AddPropertyScreen = () => {
    const [AreaSize, setAreaSize] = useState(0);
    const [Balconie, setBalconie] = useState(0);
    const [Bathroom, setBathroom] = useState(0);
    const [Bedroom, setBedroom] = useState(0);
    const [BookingAmount, setBookingAmount] = useState(0);
    const [DateofAvailablity, setDateofAvailablity] = useState(0);
    const [Deposit, setDeposit] = useState(0);
    const [Facing, setFacing] = useState('');
    const [Floor, setFloor] = useState(0);
    const [Furnishing, setFurnishing] = useState('');
    const [IdealFor, setIdealFor] = useState('');
    const [Kitchen, setKitchen] = useState(0);
    const [ListingBy, setListingBy] = useState('');
    const [Lobby, setLobby] = useState(0);
    const [NoticePeriod, setNoticePeriod] = useState(0);
    const [PoojaRoom, setPoojaRoom] = useState(0);
    const [PropertyAge, setPropertyAge] = useState(0);
    const [PropertyType, setPropertyType] = useState('');
    const [RealEstateType, setRealEstateType] = useState('');
    const [RentalAgreementRequired, setRentalAgreementRequired] = useState('');    
    const [ServentRoom, setServentRoom] = useState(0);    
    const [TotalFloor, setTotalFloor] = useState(0);   
    const [Url,setUrl]=useState(0); 


    const data={
        AreaSize:AreaSize?.AreaSize|| 0,
        Balconie:Balconie?.Balconie|| 0,
        Bathroom:Bathroom?.Bathroom|| 0,
        Bedroom:Bedroom?.Bedroom|| 0,
        BookingAmount:BookingAmount?.BookingAmount|| 0,
        DateofAvailablity:DateofAvailablity?.DateofAvailablity|| 0,
        Deposit:Deposit?.Deposit|| 0,
        Facing:Facing?.Facing|| '',
        Floor:Floor?.Floor|| 0,
        Furnishing:Furnishing?.Furnishing|| '',
        IdealFor:IdealFor?.IdealFor|| '',
        Kitchen:Kitchen?.Kitchen|| 0,
        ListingBy:ListingBy?.ListingBy|| '',
        Lobby:Lobby?.Lobby|| 0,
        NoticePeriod:NoticePeriod?.NoticePeriod|| 0,
        PoojaRoom:PoojaRoom?.PoojaRoom|| 0,
        PropertyAge:PropertyAge?.PropertyAge|| 0,
        PropertyType:PropertyType?.PropertyType|| '',
        RealEstateType:RealEstateType?.RealEstateType||'',
        RentalAgreementRequired:RentalAgreementRequired?.RentalAgreementRequired|| '',
        ServentRoom:ServentRoom?.ServentRoom|| 0,
        TotalFloor:TotalFloor?.TotalFloor|| 0,
        Url:Url?.Url||''
    };

    var result = addRecordIntoTable("Properties",data);
    console.log("Result",result);




    return (<AddPropertyView 
    setAreaSize={setAreaSize}
    setBalconie={setBalconie}
    setBathroom={setBathroom}
    setBedroom={setBedroom}
    setBookingAmount={setBookingAmount}
    setDateofAvailablity={setDateofAvailablity}
    setDeposit={setDeposit}
    setFacing={setFacing}
    setFloor={setFloor}
    setFurnishing={setFurnishing}
    setIdealFor={setIdealFor}
    setKitchen={setKitchen}
    setListingBy={setListingBy}
    setLobby={setLobby}
    setNoticePeriod={setNoticePeriod}
    setPoojaRoom={setPoojaRoom}
    setPropertyAge={setPropertyAge}
    setPropertyType={setPropertyType}
    setRealEstateType={setRealEstateType}
    setRentalAgreementRequired={setRentalAgreementRequired}
    setServentRoom={setServentRoom}
    setTotalFloor={setTotalFloor}
    />);
};

export default AddPropertyScreen;
