import { useEffect, useState } from "react"
import UseAuth from "./UseAuth";

const UseMarchentOrder = () => {
    const [tabledata, setTableData] = useState([]);
    const [isLooding, setIsLooding] = useState(false)
    let ordersData = [...tabledata]
    const { user } = UseAuth()

    useEffect(() => {
        setIsLooding(true)
        fetch(`https://www.alijahan.xyz/marchentOrder?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                data.map(order => {
                    let orderInfo = {
                        _id: order._id,
                        date: order.orderSummaray.date,
                        marchentName: `${order?.marchentInfo?.name},`,
                        deliveryArea: order.recieverDetails.deliveryArea,
                        status: order.orderSummaray.status,
                        marachentNumber: `${order.marchentInfo.number},`,
                        location: order.marchentInfo.location,
                        customer: order?.recieverDetails?.name
                    }
                    ordersData.push(orderInfo)

                })


            })
            .finally(() => {

                setTableData(ordersData)
                setIsLooding(false)

            }
            )
    }, [])
    return {
        tabledata,
        isLooding
    }
}
export default UseMarchentOrder