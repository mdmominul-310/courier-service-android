import UseArea from "../useArea";

const UseLocation = () => {
    const { coverageArea } = UseArea();
    let location = [];
    let newId = 0;
    coverageArea.map(area => {
        // console.log(area.label)
        newId = newId + 1;
        let name = { id: newId, name: area.label }
        location.push(name)
    });
    return { location }
}
export default UseLocation;