import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { Alert, Platform } from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Logger } from '../../utils/logger';

export const requestStoragePermission = async () => {
  try {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        const permission = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
        if (permission !== RESULTS.GRANTED) {
          const requestResult = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
          return requestResult === RESULTS.GRANTED;
        }
        return true;
      } else {
        const permission = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
        if (permission !== RESULTS.GRANTED) {
          const requestResult = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
          return requestResult === RESULTS.GRANTED;
        }
        return true;
      }
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const downloadImageFunction = async (
  apiUrl,
  token,
  fileName,
  callback,
  fileId,
  onSuccess
) => {
  if (!apiUrl || !token || !fileName) {
    Alert.alert('Error', 'Invalid parameters provided.');
    return;
  }
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const sanitizedFileName = fileName.endsWith('.png') ? fileName : `${fileName}.png`;
    const downloadDest =
      Platform.OS === 'android'
        ? `${RNFetchBlob.fs.dirs.DownloadDir}/${sanitizedFileName}`
        : `${RNFetchBlob.fs.dirs.DocumentDir}/${sanitizedFileName}`;
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Please allow access to storage to save images.');
      return;
    }
    const response = await RNFetchBlob.config({ fileCache: true, path: downloadDest }).fetch(
      'GET',
      apiUrl,
      headers
    );
    await CameraRoll.save(downloadDest, { type: 'photo' });
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
    if (Platform.OS === 'android') {
      RNFetchBlob.fs.scanFile([{ path: downloadDest, mime: 'image/png' }]);
    }
  } catch (error) {
    error;
  }
};

export const downloadPDF = async (apiUrl, token, fileName, onSuccess) => {
  try {
    if (!apiUrl || !token || !fileName) {
      Logger.error('Invalid parameters provided for downloading PDF.', { apiUrl, token, fileName });
      return;
    }

    Logger.info('Starting PDF download', { apiUrl, fileName });

    const headers = { Authorization: `Bearer ${token}` };
    const downloadDest =
      Platform.OS === 'android'
        ? `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}`
        : `${RNFetchBlob.fs.dirs.DocumentDir}/${fileName}`;

    const response = await RNFetchBlob.config(
      Platform.OS === 'android'
        ? {
            fileCache: true,
            addAndroidDownloads: {
              useDownloadManager: true,
              notification: true,
              path: downloadDest,
              description: 'File downloaded via react-native-blob-util',
              mime: 'application/pdf',
              mediaScannable: true
            }
          }
        : {
            fileCache: true,
            path: downloadDest
          }
    ).fetch('GET', apiUrl, headers);
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
    Logger.info('PDF download response', { status: response.info().status, path: response.path() });

    if (response.info().status === 200) {
      if (Platform.OS === 'ios') {
        RNFetchBlob.ios.openDocument(response.path());
      }

      Logger.info('PDF downloaded successfully:', downloadDest);
    }
  } catch (error) {
    Logger.error('Error downloading PDF:', error);
  }
};
