const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

function superbowlWin(array){
    const win = array.find(array => array.result === "W")
    if (win){
        return win.year
    }
}
