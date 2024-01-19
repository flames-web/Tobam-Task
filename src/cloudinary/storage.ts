import { v2 as cloudinary } from 'cloudinary';
import { Request } from 'express';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: 'dcz8fqwkr',
  api_key: '741638397565292',
  api_secret: 'HsWWuQDPJfT5xxJHHWrNX2Op1N8',
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder:'Tobams',
    allowedFormats: ['jpeg', 'png', 'jpg', 'gif'],
  },
});

export { cloudinary, storage };
