import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface ThemedInputProps extends TextInputProps {
  label?: string;
  style?: object;
  textStyle?: object;
  icon?: React.ReactNode;
  type: "text" | "password" | "email" | "number" | "tel" | "date";
}

export default function ThemedInput({
  label,
  style,
  textStyle,
  type,
  icon,
  ...props
}: ThemedInputProps) {
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (_event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      setDate(selectedDate);
      props.onChangeText?.(selectedDate.toISOString().split("T")[0]);
    }
  };

  const formattedDate = date.toISOString().split("T")[0];

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      {type === "date" ? (
        <>
          <TouchableOpacity
            onPress={() => setShowPicker(true)}
            style={[styles.input, style]}
          >
            <Text style={[styles.dateText, textStyle]}>
              {formattedDate}
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === "ios" ? "inline" : "default"}
              onChange={onChange}
            />
          )}
        </>
      ) : (
        <View>
          <TextInput
          style={[styles.input, style]}
          placeholderTextColor="#4D4D4D"
          {...props}
          textContentType={type === "email" ? "emailAddress" : undefined}
          secureTextEntry={type === "password"}
          keyboardType={
            type === "number" || type === "tel"
              ? "numeric"
              : type === "email"
              ? "email-address"
              : "default"
          }
        ></TextInput>
          {icon && (
            <View style={{ position: "absolute", right: 16, top: 16 }}>
              {icon}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
    width: 361,
    alignSelf: "center",
  },
  label: {
    fontSize: 20,
    color: "#000",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    borderColor: "#4D4D4D",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
});
