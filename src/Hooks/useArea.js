import * as React from 'react';

export default function UseArea() {
    const [coverageArea, setArea] = React.useState([]);

    React.useEffect(() => {
        fetch('https://www.alijahan.xyz/coveregeArea')
            .then(res => res.json())
            .then(data => {
                const convertedArea = []
                data.map(area => convertedArea.push({ label: area.area }))
                setArea(convertedArea)
            })
    }, [])



    return {
        coverageArea
    }
    // <Autocomplete
    //     disablePortal
    //     multiple={props?.multiple}
    //     id="combo-box-demo"
    //     options={area}
    //     sx={{ width: 300 }}
    //     renderInput={(params) => <TextField {...params} label=" Area" helperText='Area' fullWidth />}
    // />

}

