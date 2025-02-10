import AndroidApp from '../../assets/images/android-app.png';
import AppStore from '../../assets/images/app-store.png';

const AppDownload: React.FC = () => {
  return (
    <div className="mt-5 text-center">
      <p className="text-sm">앱을 다운로드하세요.</p>
      <div className="flex justify-center space-x-2 mt-4">
        <img
          src={AppStore}
          alt="App Store에서 다운로드"
          className="h-10"
        />
        <img
          src={AndroidApp}
          alt="Google Play에서 다운로드"
          className="h-10"
        />
      </div>
    </div>
  );
}

export default AppDownload;