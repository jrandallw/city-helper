import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'lib/prisma';

const remove = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed', success: false });
    return;
  } else {
    try {
      const { id } = req.query as { id: string };
      await prisma.location.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res
        .status(405)
        .json({ message: 'Error reading from database...', success: false });
    }
  }
};

export default remove;
