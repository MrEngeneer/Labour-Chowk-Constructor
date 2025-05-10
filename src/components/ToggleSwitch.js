import React from 'react';
import ToggleSwitchBTN from 'toggle-switch-react-native';

function ToggleSwitch({ isOn, onToggle, onColor, offColor }) {
  return (
    <ToggleSwitchBTN
      isOn={isOn}
      onColor={onColor}
      offColor={offColor}
      size="medium"
      onToggle={onToggle}
      style={{ pointerEvents: 'auto' }}
    />
  );
}

export default ToggleSwitch;
