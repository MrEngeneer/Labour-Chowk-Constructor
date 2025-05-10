import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

const eventEmitter = new EventEmitter();

export const emitEvent = (eventName, data) => {
  eventEmitter.emit(eventName, data);
};

export const addListener = (eventName, listener) => {
  eventEmitter.addListener(eventName, listener);
};

export const removeListener = (eventName, listener) => {};

export default eventEmitter;
