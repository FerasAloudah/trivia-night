import {Dimensions} from 'react-native';

 const {height,width} = Dimensions.get("window");

 const metrics = {
     DEVISE_WIDTH : width,
     DEVICE_HEIGHT : height
 };

 export default metrics;