import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "black",
  },
  resultado: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10,
  },
  resultadoPequeno: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 30,
    textAlign: "right",
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "flex-end",
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: "#9b9b9b",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 8,
  },
  botonTexto: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "black",
    fontWeight: "400",
  },
  fila: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
