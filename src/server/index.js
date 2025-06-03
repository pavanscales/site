const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.get('/api/visit', async (req, res) => {
  let record = await prisma.visitorCount.findFirst();
  if (!record) {
    record = await prisma.visitorCount.create({ data: { count: 1 } });
  } else {
    record = await prisma.visitorCount.update({
      where: { id: record.id },
      data: { count: record.count + 1 },
    });
  }

  res.json({ total: record.count });
});
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
