import AppWrapper from './app/AppWrapper';
import SafeAreaContext from './app/context/SafeAreaContext';

const App = () => {
  return (
    <SafeAreaContext>
      <AppWrapper />
    </SafeAreaContext>
  );
};

export default App;
