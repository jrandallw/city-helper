import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'lib/prisma';

const check = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed', success: false });
    return;
  } else {
    try {
      const { key } = req.query as { key: string };
      const flag = await prisma.flag.findFirst({
        where: {
          key: key,
        },
      });
      res.status(200).json({ flag, success: true });
    } catch (error) {
      console.error(error);
      res
        .status(405)
        .json({ message: 'Error reading from database...', success: false });
    }
  }
};

export default check;
