import { Router } from 'express';
import { createImage, getImages } from '../controllers/image';
import { asyncHandler } from '../services/async';
import multer from 'multer';
import { storage, cloudinary } from '../cloudinary/storage';
const upload = multer({ storage });

const router = Router();

router.post('/upload', upload.single('image'), asyncHandler(createImage));

router.get('/get_images', asyncHandler(getImages));

export default router;
