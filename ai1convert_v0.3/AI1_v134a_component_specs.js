AI1_v134a_component_specs =
// This JSON was automatically generated from the AI1 ya_lang_def.xml file by calling 
// ./XMLLangDefToJsonComponentSpecs.py AI1_v134a_ya_lang_def.xml AI1_v134a_component_specs.json
{
"AccelerometerSensor-AccelerationChanged": {"paramNames": ["xAccel", "yAccel", "zAccel"], "type": "component_event"},
"AccelerometerSensor-Shaking": {"paramNames": [], "type": "component_event"},
"ActivityStarter-ActivityError": {"paramNames": ["message"], "type": "component_event"},
"ActivityStarter-AfterActivity": {"paramNames": ["result"], "type": "component_event"},
"ActivityStarter-ResolveActivity": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"ActivityStarter-StartActivity": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Ball-Bounce": {"kind": "statement", "paramNames": ["edge"], "type": "component_method"},
"Ball-CollidedWith": {"paramNames": ["other"], "type": "component_event"},
"Ball-CollidingWith": {"kind": "expression", "paramNames": ["other", ""], "type": "component_method"},
"Ball-Dragged": {"paramNames": ["startX", "startY", "prevX", "prevY", "currentX", "currentY"], "type": "component_event"},
"Ball-EdgeReached": {"paramNames": ["edge"], "type": "component_event"},
"Ball-Flung": {"paramNames": ["x", "y", "speed", "heading", "xvel", "yvel"], "type": "component_event"},
"Ball-MoveIntoBounds": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Ball-MoveTo": {"kind": "statement", "paramNames": ["x", "y"], "type": "component_method"},
"Ball-NoLongerCollidingWith": {"paramNames": ["other"], "type": "component_event"},
"Ball-PointInDirection": {"kind": "statement", "paramNames": ["x", "y"], "type": "component_method"},
"Ball-PointTowards": {"kind": "statement", "paramNames": ["target"], "type": "component_method"},
"Ball-TouchDown": {"paramNames": ["x", "y"], "type": "component_event"},
"Ball-TouchUp": {"paramNames": ["x", "y"], "type": "component_event"},
"Ball-Touched": {"paramNames": ["x", "y"], "type": "component_event"},
"BarcodeScanner-AfterScan": {"paramNames": ["result"], "type": "component_event"},
"BarcodeScanner-DoScan": {"kind": "statement", "paramNames": [], "type": "component_method"},
"BluetoothClient-BluetoothError": {"paramNames": ["functionName", "message"], "type": "component_event"},
"BluetoothClient-BytesAvailableToReceive": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothClient-Connect": {"kind": "expression", "paramNames": ["address", ""], "type": "component_method"},
"BluetoothClient-ConnectWithUUID": {"kind": "expression", "paramNames": ["address", "uuid", ""], "type": "component_method"},
"BluetoothClient-Disconnect": {"kind": "statement", "paramNames": [], "type": "component_method"},
"BluetoothClient-IsDevicePaired": {"kind": "expression", "paramNames": ["address", ""], "type": "component_method"},
"BluetoothClient-ReceiveSigned1ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothClient-ReceiveSigned2ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothClient-ReceiveSigned4ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothClient-ReceiveSignedBytes": {"kind": "expression", "paramNames": ["numberOfBytes", ""], "type": "component_method"},
"BluetoothClient-ReceiveText": {"kind": "expression", "paramNames": ["numberOfBytes", ""], "type": "component_method"},
"BluetoothClient-ReceiveUnsigned1ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothClient-ReceiveUnsigned2ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothClient-ReceiveUnsigned4ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothClient-ReceiveUnsignedBytes": {"kind": "expression", "paramNames": ["numberOfBytes", ""], "type": "component_method"},
"BluetoothClient-Send1ByteNumber": {"kind": "statement", "paramNames": ["number"], "type": "component_method"},
"BluetoothClient-Send2ByteNumber": {"kind": "statement", "paramNames": ["number"], "type": "component_method"},
"BluetoothClient-Send4ByteNumber": {"kind": "statement", "paramNames": ["number"], "type": "component_method"},
"BluetoothClient-SendBytes": {"kind": "statement", "paramNames": ["list"], "type": "component_method"},
"BluetoothClient-SendText": {"kind": "statement", "paramNames": ["text"], "type": "component_method"},
"BluetoothServer-AcceptConnection": {"kind": "statement", "paramNames": ["serviceName"], "type": "component_method"},
"BluetoothServer-AcceptConnectionWithUUID": {"kind": "statement", "paramNames": ["serviceName", "uuid"], "type": "component_method"},
"BluetoothServer-BluetoothError": {"paramNames": ["functionName", "message"], "type": "component_event"},
"BluetoothServer-BytesAvailableToReceive": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothServer-ConnectionAccepted": {"paramNames": [], "type": "component_event"},
"BluetoothServer-Disconnect": {"kind": "statement", "paramNames": [], "type": "component_method"},
"BluetoothServer-ReceiveSigned1ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothServer-ReceiveSigned2ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothServer-ReceiveSigned4ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothServer-ReceiveSignedBytes": {"kind": "expression", "paramNames": ["numberOfBytes", ""], "type": "component_method"},
"BluetoothServer-ReceiveText": {"kind": "expression", "paramNames": ["numberOfBytes", ""], "type": "component_method"},
"BluetoothServer-ReceiveUnsigned1ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothServer-ReceiveUnsigned2ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothServer-ReceiveUnsigned4ByteNumber": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"BluetoothServer-ReceiveUnsignedBytes": {"kind": "expression", "paramNames": ["numberOfBytes", ""], "type": "component_method"},
"BluetoothServer-Send1ByteNumber": {"kind": "statement", "paramNames": ["number"], "type": "component_method"},
"BluetoothServer-Send2ByteNumber": {"kind": "statement", "paramNames": ["number"], "type": "component_method"},
"BluetoothServer-Send4ByteNumber": {"kind": "statement", "paramNames": ["number"], "type": "component_method"},
"BluetoothServer-SendBytes": {"kind": "statement", "paramNames": ["list"], "type": "component_method"},
"BluetoothServer-SendText": {"kind": "statement", "paramNames": ["text"], "type": "component_method"},
"BluetoothServer-StopAccepting": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Button-Click": {"paramNames": [], "type": "component_event"},
"Button-GotFocus": {"paramNames": [], "type": "component_event"},
"Button-LongClick": {"paramNames": [], "type": "component_event"},
"Button-LostFocus": {"paramNames": [], "type": "component_event"},
"Camcorder-AfterRecording": {"paramNames": ["clip"], "type": "component_event"},
"Camcorder-RecordVideo": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Camera-AfterPicture": {"paramNames": ["image"], "type": "component_event"},
"Camera-TakePicture": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Canvas-Clear": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Canvas-Dragged": {"paramNames": ["startX", "startY", "prevX", "prevY", "currentX", "currentY", "draggedSprite"], "type": "component_event"},
"Canvas-DrawCircle": {"kind": "statement", "paramNames": ["x", "y", "r"], "type": "component_method"},
"Canvas-DrawLine": {"kind": "statement", "paramNames": ["x1", "y1", "x2", "y2"], "type": "component_method"},
"Canvas-DrawPoint": {"kind": "statement", "paramNames": ["x", "y"], "type": "component_method"},
"Canvas-DrawText": {"kind": "statement", "paramNames": ["text", "x", "y"], "type": "component_method"},
"Canvas-DrawTextAtAngle": {"kind": "statement", "paramNames": ["text", "x", "y", "angle"], "type": "component_method"},
"Canvas-Flung": {"paramNames": ["x", "y", "speed", "heading", "xvel", "yvel", "flungSprite"], "type": "component_event"},
"Canvas-GetBackgroundPixelColor": {"kind": "expression", "paramNames": ["x", "y", ""], "type": "component_method"},
"Canvas-GetPixelColor": {"kind": "expression", "paramNames": ["x", "y", ""], "type": "component_method"},
"Canvas-Save": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"Canvas-SaveAs": {"kind": "expression", "paramNames": ["fileName", ""], "type": "component_method"},
"Canvas-SetBackgroundPixelColor": {"kind": "statement", "paramNames": ["x", "y", "color"], "type": "component_method"},
"Canvas-TouchDown": {"paramNames": ["x", "y"], "type": "component_event"},
"Canvas-TouchUp": {"paramNames": ["x", "y"], "type": "component_event"},
"Canvas-Touched": {"paramNames": ["x", "y", "touchedSprite"], "type": "component_event"},
"CheckBox-Changed": {"paramNames": [], "type": "component_event"},
"CheckBox-GotFocus": {"paramNames": [], "type": "component_event"},
"CheckBox-LostFocus": {"paramNames": [], "type": "component_event"},
"Clock-AddDays": {"kind": "expression", "paramNames": ["instant", "days", ""], "type": "component_method"},
"Clock-AddHours": {"kind": "expression", "paramNames": ["instant", "hours", ""], "type": "component_method"},
"Clock-AddMinutes": {"kind": "expression", "paramNames": ["instant", "minutes", ""], "type": "component_method"},
"Clock-AddMonths": {"kind": "expression", "paramNames": ["instant", "months", ""], "type": "component_method"},
"Clock-AddSeconds": {"kind": "expression", "paramNames": ["instant", "seconds", ""], "type": "component_method"},
"Clock-AddWeeks": {"kind": "expression", "paramNames": ["instant", "weeks", ""], "type": "component_method"},
"Clock-AddYears": {"kind": "expression", "paramNames": ["instant", "years", ""], "type": "component_method"},
"Clock-DayOfMonth": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-Duration": {"kind": "expression", "paramNames": ["start", "end", ""], "type": "component_method"},
"Clock-FormatDate": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-FormatDateTime": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-FormatTime": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-GetMillis": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-Hour": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-MakeInstant": {"kind": "expression", "paramNames": ["from", ""], "type": "component_method"},
"Clock-MakeInstantFromMillis": {"kind": "expression", "paramNames": ["millis", ""], "type": "component_method"},
"Clock-Minute": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-Month": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-MonthName": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-Now": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"Clock-Second": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-SystemTime": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"Clock-Timer": {"paramNames": [], "type": "component_event"},
"Clock-Weekday": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-WeekdayName": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"Clock-Year": {"kind": "expression", "paramNames": ["instant", ""], "type": "component_method"},
"ContactPicker-AfterPicking": {"paramNames": [], "type": "component_event"},
"ContactPicker-BeforePicking": {"paramNames": [], "type": "component_event"},
"ContactPicker-GotFocus": {"paramNames": [], "type": "component_event"},
"ContactPicker-LostFocus": {"paramNames": [], "type": "component_event"},
"ContactPicker-Open": {"kind": "statement", "paramNames": [], "type": "component_method"},
"EmailPicker-GotFocus": {"paramNames": [], "type": "component_event"},
"EmailPicker-LostFocus": {"paramNames": [], "type": "component_event"},
"FusiontablesControl-DoQuery": {"kind": "statement", "paramNames": [], "type": "component_method"},
"FusiontablesControl-ForgetLogin": {"kind": "statement", "paramNames": [], "type": "component_method"},
"FusiontablesControl-GotResult": {"paramNames": ["result"], "type": "component_event"},
"FusiontablesControl-SendQuery": {"kind": "statement", "paramNames": [], "type": "component_method"},
"GameClient-FunctionCompleted": {"paramNames": ["functionName"], "type": "component_event"},
"GameClient-GetInstanceLists": {"kind": "statement", "paramNames": [], "type": "component_method"},
"GameClient-GetMessages": {"kind": "statement", "paramNames": ["type", "count"], "type": "component_method"},
"GameClient-GotMessage": {"paramNames": ["type", "sender", "contents"], "type": "component_event"},
"GameClient-Info": {"paramNames": ["message"], "type": "component_event"},
"GameClient-InstanceIdChanged": {"paramNames": ["instanceId"], "type": "component_event"},
"GameClient-Invite": {"kind": "statement", "paramNames": ["playerEmail"], "type": "component_method"},
"GameClient-Invited": {"paramNames": ["instanceId"], "type": "component_event"},
"GameClient-LeaveInstance": {"kind": "statement", "paramNames": [], "type": "component_method"},
"GameClient-MakeNewInstance": {"kind": "statement", "paramNames": ["instanceId", "makePublic"], "type": "component_method"},
"GameClient-NewInstanceMade": {"paramNames": ["instanceId"], "type": "component_event"},
"GameClient-NewLeader": {"paramNames": ["playerId"], "type": "component_event"},
"GameClient-PlayerJoined": {"paramNames": ["playerId"], "type": "component_event"},
"GameClient-PlayerLeft": {"paramNames": ["playerId"], "type": "component_event"},
"GameClient-SendMessage": {"kind": "statement", "paramNames": ["type", "recipients", "contents"], "type": "component_method"},
"GameClient-ServerCommand": {"kind": "statement", "paramNames": ["command", "arguments"], "type": "component_method"},
"GameClient-ServerCommandFailure": {"paramNames": ["command", "arguments"], "type": "component_event"},
"GameClient-ServerCommandSuccess": {"paramNames": ["command", "response"], "type": "component_event"},
"GameClient-SetInstance": {"kind": "statement", "paramNames": ["instanceId"], "type": "component_method"},
"GameClient-SetLeader": {"kind": "statement", "paramNames": ["playerEmail"], "type": "component_method"},
"GameClient-UserEmailAddressSet": {"paramNames": ["emailAddress"], "type": "component_event"},
"GameClient-WebServiceError": {"paramNames": ["functionName", "message"], "type": "component_event"},
"ImagePicker-AfterPicking": {"paramNames": [], "type": "component_event"},
"ImagePicker-BeforePicking": {"paramNames": [], "type": "component_event"},
"ImagePicker-GotFocus": {"paramNames": [], "type": "component_event"},
"ImagePicker-LostFocus": {"paramNames": [], "type": "component_event"},
"ImagePicker-Open": {"kind": "statement", "paramNames": [], "type": "component_method"},
"ImageSprite-Bounce": {"kind": "statement", "paramNames": ["edge"], "type": "component_method"},
"ImageSprite-CollidedWith": {"paramNames": ["other"], "type": "component_event"},
"ImageSprite-CollidingWith": {"kind": "expression", "paramNames": ["other", ""], "type": "component_method"},
"ImageSprite-Dragged": {"paramNames": ["startX", "startY", "prevX", "prevY", "currentX", "currentY"], "type": "component_event"},
"ImageSprite-EdgeReached": {"paramNames": ["edge"], "type": "component_event"},
"ImageSprite-Flung": {"paramNames": ["x", "y", "speed", "heading", "xvel", "yvel"], "type": "component_event"},
"ImageSprite-MoveIntoBounds": {"kind": "statement", "paramNames": [], "type": "component_method"},
"ImageSprite-MoveTo": {"kind": "statement", "paramNames": ["x", "y"], "type": "component_method"},
"ImageSprite-NoLongerCollidingWith": {"paramNames": ["other"], "type": "component_event"},
"ImageSprite-PointInDirection": {"kind": "statement", "paramNames": ["x", "y"], "type": "component_method"},
"ImageSprite-PointTowards": {"kind": "statement", "paramNames": ["target"], "type": "component_method"},
"ImageSprite-TouchDown": {"paramNames": ["x", "y"], "type": "component_event"},
"ImageSprite-TouchUp": {"paramNames": ["x", "y"], "type": "component_event"},
"ImageSprite-Touched": {"paramNames": ["x", "y"], "type": "component_event"},
"ListPicker-AfterPicking": {"paramNames": [], "type": "component_event"},
"ListPicker-BeforePicking": {"paramNames": [], "type": "component_event"},
"ListPicker-GotFocus": {"paramNames": [], "type": "component_event"},
"ListPicker-LostFocus": {"paramNames": [], "type": "component_event"},
"ListPicker-Open": {"kind": "statement", "paramNames": [], "type": "component_method"},
"LocationSensor-LatitudeFromAddress": {"kind": "expression", "paramNames": ["locationName", ""], "type": "component_method"},
"LocationSensor-LocationChanged": {"paramNames": ["latitude", "longitude", "altitude"], "type": "component_event"},
"LocationSensor-LongitudeFromAddress": {"kind": "expression", "paramNames": ["locationName", ""], "type": "component_method"},
"LocationSensor-StatusChanged": {"paramNames": ["provider", "status"], "type": "component_event"},
"Notifier-AfterChoosing": {"paramNames": ["choice"], "type": "component_event"},
"Notifier-AfterTextInput": {"paramNames": ["response"], "type": "component_event"},
"Notifier-LogError": {"kind": "statement", "paramNames": ["message"], "type": "component_method"},
"Notifier-LogInfo": {"kind": "statement", "paramNames": ["message"], "type": "component_method"},
"Notifier-LogWarning": {"kind": "statement", "paramNames": ["message"], "type": "component_method"},
"Notifier-ShowAlert": {"kind": "statement", "paramNames": ["notice"], "type": "component_method"},
"Notifier-ShowChooseDialog": {"kind": "statement", "paramNames": ["message", "title", "button1Text", "button2Text", "cancelable"], "type": "component_method"},
"Notifier-ShowMessageDialog": {"kind": "statement", "paramNames": ["message", "title", "buttonText"], "type": "component_method"},
"Notifier-ShowTextDialog": {"kind": "statement", "paramNames": ["message", "title", "cancelable"], "type": "component_method"},
"NxtColorSensor-AboveRange": {"paramNames": [], "type": "component_event"},
"NxtColorSensor-BelowRange": {"paramNames": [], "type": "component_event"},
"NxtColorSensor-ColorChanged": {"paramNames": ["color"], "type": "component_event"},
"NxtColorSensor-GetColor": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtColorSensor-GetLightLevel": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtColorSensor-WithinRange": {"paramNames": [], "type": "component_event"},
"NxtDirectCommands-DeleteFile": {"kind": "statement", "paramNames": ["fileName"], "type": "component_method"},
"NxtDirectCommands-DownloadFile": {"kind": "statement", "paramNames": ["source", "destination"], "type": "component_method"},
"NxtDirectCommands-GetBatteryLevel": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtDirectCommands-GetBrickName": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtDirectCommands-GetCurrentProgramName": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtDirectCommands-GetFirmwareVersion": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtDirectCommands-GetInputValues": {"kind": "expression", "paramNames": ["sensorPortLetter", ""], "type": "component_method"},
"NxtDirectCommands-GetOutputState": {"kind": "expression", "paramNames": ["motorPortLetter", ""], "type": "component_method"},
"NxtDirectCommands-KeepAlive": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtDirectCommands-ListFiles": {"kind": "expression", "paramNames": ["wildcard", ""], "type": "component_method"},
"NxtDirectCommands-LsGetStatus": {"kind": "expression", "paramNames": ["sensorPortLetter", ""], "type": "component_method"},
"NxtDirectCommands-LsRead": {"kind": "expression", "paramNames": ["sensorPortLetter", ""], "type": "component_method"},
"NxtDirectCommands-LsWrite": {"kind": "statement", "paramNames": ["sensorPortLetter", "list", "rxDataLength"], "type": "component_method"},
"NxtDirectCommands-MessageRead": {"kind": "expression", "paramNames": ["mailbox", ""], "type": "component_method"},
"NxtDirectCommands-MessageWrite": {"kind": "statement", "paramNames": ["mailbox", "message"], "type": "component_method"},
"NxtDirectCommands-PlaySoundFile": {"kind": "statement", "paramNames": ["fileName"], "type": "component_method"},
"NxtDirectCommands-PlayTone": {"kind": "statement", "paramNames": ["frequencyHz", "durationMs"], "type": "component_method"},
"NxtDirectCommands-ResetInputScaledValue": {"kind": "statement", "paramNames": ["sensorPortLetter"], "type": "component_method"},
"NxtDirectCommands-ResetMotorPosition": {"kind": "statement", "paramNames": ["motorPortLetter", "relative"], "type": "component_method"},
"NxtDirectCommands-SetBrickName": {"kind": "statement", "paramNames": ["name"], "type": "component_method"},
"NxtDirectCommands-SetInputMode": {"kind": "statement", "paramNames": ["sensorPortLetter", "sensorType", "sensorMode"], "type": "component_method"},
"NxtDirectCommands-SetOutputState": {"kind": "statement", "paramNames": ["motorPortLetter", "power", "mode", "regulationMode", "turnRatio", "runState", "tachoLimit"], "type": "component_method"},
"NxtDirectCommands-StartProgram": {"kind": "statement", "paramNames": ["programName"], "type": "component_method"},
"NxtDirectCommands-StopProgram": {"kind": "statement", "paramNames": [], "type": "component_method"},
"NxtDirectCommands-StopSoundPlayback": {"kind": "statement", "paramNames": [], "type": "component_method"},
"NxtDrive-MoveBackward": {"kind": "statement", "paramNames": ["power", "distance"], "type": "component_method"},
"NxtDrive-MoveBackwardIndefinitely": {"kind": "statement", "paramNames": ["power"], "type": "component_method"},
"NxtDrive-MoveForward": {"kind": "statement", "paramNames": ["power", "distance"], "type": "component_method"},
"NxtDrive-MoveForwardIndefinitely": {"kind": "statement", "paramNames": ["power"], "type": "component_method"},
"NxtDrive-Stop": {"kind": "statement", "paramNames": [], "type": "component_method"},
"NxtDrive-TurnClockwiseIndefinitely": {"kind": "statement", "paramNames": ["power"], "type": "component_method"},
"NxtDrive-TurnCounterClockwiseIndefinitely": {"kind": "statement", "paramNames": ["power"], "type": "component_method"},
"NxtLightSensor-AboveRange": {"paramNames": [], "type": "component_event"},
"NxtLightSensor-BelowRange": {"paramNames": [], "type": "component_event"},
"NxtLightSensor-GetLightLevel": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtLightSensor-WithinRange": {"paramNames": [], "type": "component_event"},
"NxtSoundSensor-AboveRange": {"paramNames": [], "type": "component_event"},
"NxtSoundSensor-BelowRange": {"paramNames": [], "type": "component_event"},
"NxtSoundSensor-GetSoundLevel": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtSoundSensor-WithinRange": {"paramNames": [], "type": "component_event"},
"NxtTouchSensor-IsPressed": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtTouchSensor-Pressed": {"paramNames": [], "type": "component_event"},
"NxtTouchSensor-Released": {"paramNames": [], "type": "component_event"},
"NxtUltrasonicSensor-AboveRange": {"paramNames": [], "type": "component_event"},
"NxtUltrasonicSensor-BelowRange": {"paramNames": [], "type": "component_event"},
"NxtUltrasonicSensor-GetDistance": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"NxtUltrasonicSensor-WithinRange": {"paramNames": [], "type": "component_event"},
"OrientationSensor-OrientationChanged": {"paramNames": ["azimuth", "pitch", "roll"], "type": "component_event"},
"PasswordTextBox-GotFocus": {"paramNames": [], "type": "component_event"},
"PasswordTextBox-LostFocus": {"paramNames": [], "type": "component_event"},
"Pedometer-CalibrationFailed": {"paramNames": [], "type": "component_event"},
"Pedometer-GPSAvailable": {"paramNames": [], "type": "component_event"},
"Pedometer-GPSLost": {"paramNames": [], "type": "component_event"},
"Pedometer-Pause": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Pedometer-Reset": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Pedometer-Resume": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Pedometer-Save": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Pedometer-SimpleStep": {"paramNames": ["simpleSteps", "distance"], "type": "component_event"},
"Pedometer-Start": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Pedometer-StartedMoving": {"paramNames": [], "type": "component_event"},
"Pedometer-Stop": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Pedometer-StoppedMoving": {"paramNames": [], "type": "component_event"},
"Pedometer-WalkStep": {"paramNames": ["walkSteps", "distance"], "type": "component_event"},
"PhoneCall-MakePhoneCall": {"kind": "statement", "paramNames": [], "type": "component_method"},
"PhoneNumberPicker-AfterPicking": {"paramNames": [], "type": "component_event"},
"PhoneNumberPicker-BeforePicking": {"paramNames": [], "type": "component_event"},
"PhoneNumberPicker-GotFocus": {"paramNames": [], "type": "component_event"},
"PhoneNumberPicker-LostFocus": {"paramNames": [], "type": "component_event"},
"PhoneNumberPicker-Open": {"kind": "statement", "paramNames": [], "type": "component_method"},
"PhoneStatus-GetWifiIpAddress": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"PhoneStatus-isConnected": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"Player-Completed": {"paramNames": [], "type": "component_event"},
"Player-Pause": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Player-PlayerError": {"paramNames": ["message"], "type": "component_event"},
"Player-Start": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Player-Stop": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Player-Vibrate": {"kind": "statement", "paramNames": ["milliseconds"], "type": "component_method"},
"Screen-BackPressed": {"paramNames": [], "type": "component_event"},
"Screen-CloseScreenAnimation": {"kind": "statement", "paramNames": ["animType"], "type": "component_method"},
"Screen-ErrorOccurred": {"paramNames": ["component", "functionName", "errorNumber", "message"], "type": "component_event"},
"Screen-Initialize": {"paramNames": [], "type": "component_event"},
"Screen-OpenScreenAnimation": {"kind": "statement", "paramNames": ["animType"], "type": "component_method"},
"Screen-OtherScreenClosed": {"paramNames": ["otherScreenName", "result"], "type": "component_event"},
"Screen-ScreenOrientationChanged": {"paramNames": [], "type": "component_event"},
"Slider-PositionChanged": {"paramNames": ["thumbPosition"], "type": "component_event"},
"Sound-Pause": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Sound-Play": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Sound-Resume": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Sound-SoundError": {"paramNames": ["message"], "type": "component_event"},
"Sound-Stop": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Sound-Vibrate": {"kind": "statement", "paramNames": ["millisecs"], "type": "component_method"},
"SoundRecorder-AfterSoundRecorded": {"paramNames": ["sound"], "type": "component_event"},
"SoundRecorder-Start": {"kind": "statement", "paramNames": [], "type": "component_method"},
"SoundRecorder-StartedRecording": {"paramNames": [], "type": "component_event"},
"SoundRecorder-Stop": {"kind": "statement", "paramNames": [], "type": "component_method"},
"SoundRecorder-StoppedRecording": {"paramNames": [], "type": "component_event"},
"SpeechRecognizer-AfterGettingText": {"paramNames": ["result"], "type": "component_event"},
"SpeechRecognizer-BeforeGettingText": {"paramNames": [], "type": "component_event"},
"SpeechRecognizer-GetText": {"kind": "statement", "paramNames": [], "type": "component_method"},
"TextBox-GotFocus": {"paramNames": [], "type": "component_event"},
"TextBox-HideKeyboard": {"kind": "statement", "paramNames": [], "type": "component_method"},
"TextBox-LostFocus": {"paramNames": [], "type": "component_event"},
"TextToSpeech-AfterSpeaking": {"paramNames": ["result"], "type": "component_event"},
"TextToSpeech-BeforeSpeaking": {"paramNames": [], "type": "component_event"},
"TextToSpeech-Speak": {"kind": "statement", "paramNames": ["message"], "type": "component_method"},
"Texting-MessageReceived": {"paramNames": ["number", "messageText"], "type": "component_event"},
"Texting-SendMessage": {"kind": "statement", "paramNames": [], "type": "component_method"},
"TinyDB-GetValue": {"kind": "expression", "paramNames": ["tag", ""], "type": "component_method"},
"TinyDB-StoreValue": {"kind": "statement", "paramNames": ["tag", "valueToStore"], "type": "component_method"},
"TinyWebDB-GetValue": {"kind": "statement", "paramNames": ["tag"], "type": "component_method"},
"TinyWebDB-GotValue": {"paramNames": ["tagFromWebDB", "valueFromWebDB"], "type": "component_event"},
"TinyWebDB-StoreValue": {"kind": "statement", "paramNames": ["tag", "valueToStore"], "type": "component_method"},
"TinyWebDB-ValueStored": {"paramNames": [], "type": "component_event"},
"TinyWebDB-WebServiceError": {"paramNames": ["message"], "type": "component_event"},
"Twitter-Authorize": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Twitter-CheckAuthorized": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Twitter-DeAuthorize": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Twitter-DirectMessage": {"kind": "statement", "paramNames": ["user", "message"], "type": "component_method"},
"Twitter-DirectMessagesReceived": {"paramNames": ["messages"], "type": "component_event"},
"Twitter-Follow": {"kind": "statement", "paramNames": ["user"], "type": "component_method"},
"Twitter-FollowersReceived": {"paramNames": ["followers2"], "type": "component_event"},
"Twitter-FriendTimelineReceived": {"paramNames": ["timeline"], "type": "component_event"},
"Twitter-IsAuthorized": {"paramNames": [], "type": "component_event"},
"Twitter-Login": {"kind": "statement", "paramNames": ["username", "password"], "type": "component_method"},
"Twitter-MentionsReceived": {"paramNames": ["mentions"], "type": "component_event"},
"Twitter-RequestDirectMessages": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Twitter-RequestFollowers": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Twitter-RequestFriendTimeline": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Twitter-RequestMentions": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Twitter-SearchSuccessful": {"paramNames": ["searchResults"], "type": "component_event"},
"Twitter-SearchTwitter": {"kind": "statement", "paramNames": ["query"], "type": "component_method"},
"Twitter-SetStatus": {"kind": "statement", "paramNames": ["status"], "type": "component_method"},
"Twitter-StopFollowing": {"kind": "statement", "paramNames": ["user"], "type": "component_method"},
"VideoPlayer-Completed": {"paramNames": [], "type": "component_event"},
"VideoPlayer-GetDuration": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"VideoPlayer-Pause": {"kind": "statement", "paramNames": [], "type": "component_method"},
"VideoPlayer-SeekTo": {"kind": "statement", "paramNames": ["ms"], "type": "component_method"},
"VideoPlayer-Start": {"kind": "statement", "paramNames": [], "type": "component_method"},
"VideoPlayer-VideoPlayerError": {"paramNames": ["message"], "type": "component_event"},
"Voting-GotBallot": {"paramNames": [], "type": "component_event"},
"Voting-GotBallotConfirmation": {"paramNames": [], "type": "component_event"},
"Voting-NoOpenPoll": {"paramNames": [], "type": "component_event"},
"Voting-RequestBallot": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Voting-SendBallot": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Voting-WebServiceError": {"paramNames": ["message"], "type": "component_event"},
"Web-BuildRequestData": {"kind": "expression", "paramNames": ["list", ""], "type": "component_method"},
"Web-ClearCookies": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Web-Delete": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Web-Get": {"kind": "statement", "paramNames": [], "type": "component_method"},
"Web-GotFile": {"paramNames": ["url", "responseCode", "responseType", "fileName"], "type": "component_event"},
"Web-GotText": {"paramNames": ["url", "responseCode", "responseType", "responseContent"], "type": "component_event"},
"Web-HtmlTextDecode": {"kind": "expression", "paramNames": ["htmlText", ""], "type": "component_method"},
"Web-JsonTextDecode": {"kind": "expression", "paramNames": ["jsonText", ""], "type": "component_method"},
"Web-PostFile": {"kind": "statement", "paramNames": ["path"], "type": "component_method"},
"Web-PostText": {"kind": "statement", "paramNames": ["text"], "type": "component_method"},
"Web-PostTextWithEncoding": {"kind": "statement", "paramNames": ["text", "encoding"], "type": "component_method"},
"Web-PutFile": {"kind": "statement", "paramNames": ["path"], "type": "component_method"},
"Web-PutText": {"kind": "statement", "paramNames": ["text"], "type": "component_method"},
"Web-PutTextWithEncoding": {"kind": "statement", "paramNames": ["text", "encoding"], "type": "component_method"},
"Web-UriEncode": {"kind": "expression", "paramNames": ["text", ""], "type": "component_method"},
"WebViewer-CanGoBack": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"WebViewer-CanGoForward": {"kind": "expression", "paramNames": [""], "type": "component_method"},
"WebViewer-ClearLocations": {"kind": "statement", "paramNames": [], "type": "component_method"},
"WebViewer-GoBack": {"kind": "statement", "paramNames": [], "type": "component_method"},
"WebViewer-GoForward": {"kind": "statement", "paramNames": [], "type": "component_method"},
"WebViewer-GoHome": {"kind": "statement", "paramNames": [], "type": "component_method"},
"WebViewer-GoToUrl": {"kind": "statement", "paramNames": ["url"], "type": "component_method"}
}