import type { VercelRequest, VercelResponse } from '@vercel/node';

const handler = (req: VercelRequest, res: VercelResponse) => {
  const { name = 'World' } = req.query;

  const responseObject = {
    pictureurl: "https://configurator.porsche.com/model-start/pictures/718/extcam03.webp",
    picturename: "718"
  };

  return res.json(responseObject);
};

export default handler;

