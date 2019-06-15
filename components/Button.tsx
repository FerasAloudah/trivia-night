import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

interface Props {
  disabled?: boolean;
  label: string;
  onPress: () => void;
}

class Button extends React.Component<Props> {
  render() {
    const { label, onPress, disabled } = this.props;
    const containerStyle = [
      styles.container,
      disabled ? styles.containerDisabled : styles.containerEnabled
    ];

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.ACCENT,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },

  containerDisabled: {
    opacity: 1
  },
  
  containerEnabled: {
    opacity: .3
  },

  text: {
    color: colors.TEXT,
    textAlign: "center",
    height: 20
  }
});

export default Button;