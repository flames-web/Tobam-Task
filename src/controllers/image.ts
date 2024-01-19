import Image from '../models/image';
import { Request, Response } from 'express';

export const createImage = async (req: Request, res: Response) => {
  try {
    const result: any = req.file;
    const image = new Image({
      url: result.path,
      filename: result.filename,
      mimetype: result.mimetype,
    });
    await image.save();
    return res
      .status(200)
      .send({ message: 'Image upload sucessful', image: image });
  } catch (error: any) {
    return res.status(error.status || 500).send({ message: error.stack });
  }
};

export const getImages = async (req: Request, res: Response) => {
  try {
    const images = await Image.find({});
    if (!images) {
      return res
        .status(404)
        .send({ message: 'No Image Found.Upload a new Image Now' });
    }
    return res.status(200).send({ images: images });
  } catch (error: any) {
    return res.status(error.status || 500).send({ message: error.stack });
  }
};



