import { useEffect, useState } from "react"

const useCheckingData = (textToCheck: string) => {
  const [avg, setAvg] = useState<number>()
  useEffect(() => {
    /*fetch(
      "http://g1.etsisi.upm.es:8835/fact_checking/entailment?" +
        new URLSearchParams({
          text: textToCheck
        }),
      { mode: "no-cors" }
    )*/
    fetch("http://www.randomnumberapi.com/api/v1.0/random?min=0&max=10&count=10")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setAvg(
          json.reduce((previous, current) => (current += previous)) /
            json.length
        )
        console.log(avg)
      })
      .catch((error) => console.log(error))
  }, [])
  return avg
}

export default useCheckingData
