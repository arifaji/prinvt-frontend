const Jimp = require('jimp');
// /**
//  * @param {*} image
//  * @param {*} options
//  * @returns base64 or null
//  */
const jimpResizeImage = async (image, { width = 0, height = 0, quality = 0 }) => {
  try {
      if (!image) return null;
      let imageBuffer = image;

      let base64 = null;
      const jimp = await Jimp.read(imageBuffer);
      let fixWidth = width
      let fixHeight = height
      try {
        const diffW = width/jimp.bitmap.width
        const diffH = height/jimp.bitmap.height
        const diff = diffW > diffH ? diffH : diffW
        fixWidth = parseInt(diff*jimp.bitmap.width)
        fixHeight = parseInt(diff*jimp.bitmap.height)
      } catch (error) {
        console.log('JimpResize ', error)
      }
      jimp.resize(fixWidth, fixHeight)
          .quality(quality)
          .getBase64(Jimp.MIME_JPEG, (error, value) => {
              base64 = value
          });
      return base64;
  } catch (error) {
      console.log('jimpResizeBase64', error)
      return null;
  }
}

module.exports = {
  jimpResizeImage
};
