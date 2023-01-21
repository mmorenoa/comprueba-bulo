const useCheckingData = (textToCheck: string) => {
  let avg = 0
  fetch(
    "http://g1.etsisi.upm.es:8835/fact_checking/entailment?" +
      new URLSearchParams({
        text: textToCheck
      })
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      const entailment = json.Related_hoaxes.map((x) => {
        return x.Entailment_probabilities.Entailment // Meto el valor "Entailment" de cada objeto que esté dentro de Related_hoaxes en un array.
      })
      avg = entailment.reduce((previous, current) => (current += previous)) / json.length
    })
    .catch((error) => console.log(error))
  return avg
}

export default useCheckingData
