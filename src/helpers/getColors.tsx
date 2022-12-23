import ImageColors from "react-native-image-colors";


export const getImageColors = async (urlImage:string)=>{ 
    
    
    const result = await ImageColors.getColors(urlImage, {})

    
    let primary; 
    let secundary; 

    switch (result.platform) {
        case 'android':
          // android result properties
          primary = result.dominant
          secundary= result.average
          break
        case 'ios':
          // iOS result properties
          primary= result.primary
          secundary= result.secondary
          break
        default:
          throw new Error('Unexpected platform key')
      }

      return[ primary, secundary]
  }