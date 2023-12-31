import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/appTheme";

interface Props {
  texto: string;
  color: color;
  colorTexto: colorTexto;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

type colorTexto = "white" | "black";
type color = "grisClaro" | "grisOscuro" | "naranja";

const colores = {
  grisClaro: "#9B9B9B",
  grisOscuro: "#2D2D2D",
  naranja: "#FF9427",
};

export const BotonCalc = ({
  texto,
  color,
  colorTexto = "white",
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: colores[color],
          width: ancho ? 180 : 80,
        }}
      >
        <Text style={{ ...styles.botonTexto, color: colorTexto }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};
