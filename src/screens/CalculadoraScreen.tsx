import { Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { BotonCalc } from "../components/BotonCalc";
import { useCalculadora } from "../hooks/useCalculadora";

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc
          texto="C"
          color="grisClaro"
          colorTexto="black"
          accion={limpiar}
        />
        <BotonCalc
          texto="+/-"
          color="grisClaro"
          colorTexto="black"
          accion={positivoNegativo}
        />
        <BotonCalc
          texto="del"
          color="grisClaro"
          colorTexto="black"
          accion={btnDelete}
        />
        <BotonCalc
          texto="/"
          color="naranja"
          colorTexto="white"
          accion={btnDividir}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc
          texto="7"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="8"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="9"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="X"
          color="naranja"
          colorTexto="white"
          accion={btnMultiplicar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc
          texto="4"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="5"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="6"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="-"
          color="naranja"
          colorTexto="white"
          accion={btnRestar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc
          texto="3"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="2"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="1"
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="+"
          color="naranja"
          colorTexto="white"
          accion={btnSumar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc
          texto="0"
          color="grisOscuro"
          colorTexto="white"
          ancho
          accion={armarNumero}
        />
        <BotonCalc
          texto="."
          color="grisOscuro"
          colorTexto="white"
          accion={armarNumero}
        />
        <BotonCalc
          texto="="
          color="naranja"
          colorTexto="white"
          accion={calcular}
        />
      </View>
    </View>
  );
};
