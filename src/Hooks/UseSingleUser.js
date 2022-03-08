import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";

const UseSingleuser = () => {
    const [singleUser, setSingleUser] = useState({})
    const { user } = UseAuth()
    useEffect(() => {
        fetch(`https://www.alijahan.xyz/singleuser?email=${user.email}`)
            .then(res => res.json())
            .then(data => setSingleUser(data));
    }, [user]);
    return {
        singleUser
    }
}
export default UseSingleuser;