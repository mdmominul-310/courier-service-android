import { useState } from "react";
import { useEffect } from "react";
const UseMarchent = () => {
    const [marchent, setMarchent] = useState([])

    useEffect(() => {
        fetch('https://www.alijahan.xyz/users')
            .then(res => res.json())
            .then(data => setMarchent(data))
    }, []);
    return {
        marchent
    }
}
export default UseMarchent;