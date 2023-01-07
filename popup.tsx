import { useEffect, useState } from 'react';
import { Colors } from '~components/colors';
import { Container, Spinner, Text, TopBar } from './components/styled';

function IndexPopup() {
  const [isLoading, setIsLoading] = useState(true);
  const [reliability, setReliability] = useState("");
  const [color, setColor] = useState(Colors.Blue);

  useEffect(() => {
    /*fetch('http://g1.etsisi.upm.es:8835/fact_checking/entailment?' + new URLSearchParams({
    text: 'Las vacunas llevan grafeno'
    }))*/
    fetch('http://www.randomnumberapi.com/api/v1.0/random?min=0&max=10&count=10')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let sum = json.reduce((previous, current) => current += previous);
      let avg = sum / json.length;
      console.log(avg);
      if(avg < 1) {
        setReliability('Muy alta');
        setColor(Colors.Green);
      } else if(avg >= 1 && avg < 4) {
        setReliability('Media - alta');
        setColor(Colors.Yellow);
      } else if(avg >= 4 && avg < 7.5) {
        setReliability('Media');
        setColor(Colors.Orange)
      } else {
        setReliability('Baja');
        setColor(Colors.Red);
      }
      setIsLoading(false);
    })
    .catch(() => console.log("No se ha obtenido nada o algo ha fallado"));
  },  []);

  if(isLoading) {
    return(
      <Container>
        <Spinner/>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar color={color}/>
      <Text>¡Información verídica!</Text>
      <div>
        <Text weight="400">Fiabilidad: </Text>
        <Text color={color}>
          {reliability}
        </Text>
      </div>
    </Container>
  )
}

export default IndexPopup
