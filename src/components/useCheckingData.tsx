const useCheckingData = (textToCheck: string) => {
  let avg = 0
  fetch("http://numbersapi.com/random/math?json", { mode: "no-cors" })
    .then((response) => response.json())
    .then((json) => {
      avg = json.number
      console.log(avg)
    })
    .catch((error) => console.log(error))
  return avg
}

export default useCheckingData
