import { useFonts } from "expo-font";

const useCustomFonts = () => {
    return useFonts({
        'MetroBold' : require('../fonts/Metropolis-Bold.otf'),
        'MetroBlack' : require('../fonts/Metropolis-Black.otf'),
        'MetroLight' : require('../fonts/Metropolis-Light.otf'),
        'MetroMedium' : require('../fonts/Metropolis-Medium.otf'),
        'MetroSemiBold' : require('../fonts/Metropolis-SemiBold.otf'),
    });
}

export default useCustomFonts;