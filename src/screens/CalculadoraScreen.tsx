import { Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { BotonCalc } from "../components/BotonCalc";

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" color="grisClaro" colorTexto="black" />
        <BotonCalc texto="+/-" color="grisClaro" colorTexto="black" />
        <BotonCalc texto="%" color="grisClaro" colorTexto="black" />
        <BotonCalc texto="/" color="naranja" colorTexto="white" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="8" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="9" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="X" color="naranja" colorTexto="white" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="5" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="6" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="-" color="naranja" colorTexto="white" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="3" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="2" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="1" color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="+" color="naranja" colorTexto="white" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" color="grisOscuro" colorTexto="white" ancho />
        <BotonCalc texto="." color="grisOscuro" colorTexto="white" />
        <BotonCalc texto="=" color="naranja" colorTexto="white" />
      </View>
    </View>
  );
};
