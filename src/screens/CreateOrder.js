import { View, SafeAreaView, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import UseLocation from '../Hooks/Android/UseLocation';
import Stepper from 'react-native-stepper-ui';
import RecieverInfoBasic from '../components/OrderForm/RecieverInfoBasic';
import DeliveryArea from '../components/OrderForm/DeliveryArea';
import OrderInfo from '../components/OrderForm/OrderInfo';
import OrderInfoNext from '../components/OrderForm/OrderInfoNext';
import OrderSummary from '../components/OrderForm/OrderSummary';
import UseAuth from '../Hooks/UseAuth';
import SuccessAlert from '../components/Shared/SuccessAlert';

export default function CreateOrder({ navigation, route }) {
    // reciever information
    const [recieverName, setRecieverName] = useState("");
    const [recieverNumber, setRecieverNumber] = useState("");
    const [item, setItem] = useState({ id: 'dkfdk', name: 'Delivery Area' });
    const [fullAddress, setFullAddress] = useState("");
    // Order Information
    let [catagory, setCatagory] = React.useState("");
    let [weight, setWeight] = React.useState("0");
    const [cashCollection, setCashCollection] = useState("0");
    const [WithDelivery, setWithDelivery] = useState("no");
    // success modal state
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);

    //calculation charges
    let dCharge;
    let calcDCharge;
    let deliveryCharge = 0;
    let sameCity = false;
    let weightCharge = parseInt(weight);
    let totalCharge = deliveryCharge - parseInt(weightCharge);



    // marchen information state
    const [marchent, setMarchent] = useState([])
    const { user } = UseAuth();

    //stepper 
    const [active, setActive] = useState(0);

    const { location } = UseLocation();
    useEffect(() => {
        fetch(`https://www.alijahan.xyz/singleuser?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMarchent(data));
    }, [user]);

    // calculation part

    if (item.name?.split(" ")[0] === marchent?.location?.split(" ")[0]) {

        sameCity = true;
        dCharge = 60
        calcDCharge = 60
        if (WithDelivery == "yes") {
            deliveryCharge = 0;
        }
        else {
            deliveryCharge = 60;
            dCharge = 0
            weightCharge = 0;
        }

    }


    if (item.name?.split(" ")[0] !== marchent?.location?.split(" ")[0]) {
        console.log("this is true")
        // weightCharge = weightCharge + 10;
        sameCity = false;
        dCharge = 130
        calcDCharge = 130
        if (WithDelivery == "yes") {
            deliveryCharge = 0;
        }
        else {
            deliveryCharge = 130;
            dCharge = 0
            weightCharge = 0;
        }

    }


    // cash collection calculation

    let totoalCashCollection = parseInt(cashCollection) + parseInt(dCharge) + parseInt(weightCharge);

    let cod = (parseInt(totoalCashCollection) * 0.01);
    totalCharge = parseInt(cashCollection) - deliveryCharge - parseInt(cod) - parseInt(weight)


    let netCashCollection = parseInt(cashCollection) + parseInt(dCharge) + parseInt(weightCharge)
    let total = calcDCharge + cod + parseInt(weight)


    // order submission

    const handleOrderSubmit = () => {


        const orderInfo = {
            email: marchent.email,
            payment: 'Due',
            marchentInfo: {
                name: marchent.name,
                email: marchent.email,
                number: marchent.number,
                location: marchent.location,
                address: marchent.address
            },
            recieverDetails: {
                name: recieverName,
                deliveryArea: item.name,
                number: recieverNumber,
                address: fullAddress
            },
            orderDetails: {
                cashCollection: cashCollection,
                weight: weight,
                product_catagory: catagory,
                referrence: 'N/A',
                id: "AJC" + Date.now().toString().slice(8, 12) + marchent.name?.slice(0, 1)
            },
            orderSummaray: {
                date: new Date().toLocaleDateString(),
                cashCollection,
                calcDCharge,
                weightCharge,
                cod,
                payAbleAmout: totalCharge,
                status: 'Pending',

            }
        }

        fetch('https://www.alijahan.xyz/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setRecieverName("");
                    setRecieverNumber("");
                    setItem("");
                    setFullAddress("");
                    setCatagory("")
                    setWeight("")
                    setCashCollection("")
                    setWithDelivery("no")
                    setActive((p) => p = 0);
                    setIsOpen(!isOpen);

                }
            })
    }
    const content = [
        <RecieverInfoBasic recieverName={recieverName} setRecieverName={setRecieverName} recieverNumber={recieverNumber} setRecieverNumber={setRecieverNumber} />,
        <DeliveryArea item={item} setItem={setItem} fullAddress={fullAddress} setFullAddress={setFullAddress} />,
        <OrderInfo catagory={catagory} setCatagory={setCatagory} weight={weight} setWeight={setWeight} sameCity={sameCity} />,
        <OrderInfoNext cashCollection={cashCollection} setCashCollection={setCashCollection} WithDelivery={WithDelivery} setWithDelivery={setWithDelivery} />,
        <OrderSummary
            active={active}
            setActive={setActive}
            cashCollection={cashCollection}
            dCharge={dCharge}
            weightCharge={weightCharge}
            netCashCollection={netCashCollection}
            calcDCharge={calcDCharge}
            cod={cod}
            total={total}
            totalCharge={totalCharge}
            weight={weight}



        />


    ];
    return (
        <>
            <View style={{ marginVertical: 10, marginHorizontal: 5 }}>
                <Stepper
                    active={active}
                    content={content}
                    onBack={() => setActive((p) => p - 1)}
                    onFinish={handleOrderSubmit}
                    onNext={() => setActive((p) => p + 1)}
                />
                <SuccessAlert isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} cancelRef={cancelRef} />
            </View>
        </>

    )
}
