import { Colors } from '~components/colors';
import { Container, Text, TopBar } from './components/styled';

function IndexPopup() {
  return (
    <Container>
      <TopBar color={Colors.Red}/>
      <Text>¡Información verídica!</Text>
      <div>
        <Text weight="400">Fiabilidad: </Text>
        <Text color={Colors.Red}>Test</Text>
      </div>
    </Container>
  )
}

export default IndexPopup
