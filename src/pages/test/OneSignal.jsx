import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  await OneSignal.init({ appId: '88c6c6b4-7b47-4094-8dcf-d42c7703a377', allowLocalhostAsSecureOrigin: true});
  OneSignal.showSlidedownPrompt();
}