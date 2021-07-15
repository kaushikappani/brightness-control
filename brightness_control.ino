float value;
void setup() {
  Serial.begin(9600);
}

void loop() {
  value = analogRead(A0);
  delay(1000);
  Serial.println(value);
}
