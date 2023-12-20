const express = require('express');
const app = express();
const cors = require('cors');
// const fs = require('fs');
const fs = require('fs').promises;

const baseUrl = "https://startxup-website-api.onrender.com"

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get(`/api/startups`, async (req, res) => {
    try {
        const rawData = await fs.readFile('./newData.json', 'utf-8');
        const jsonData = JSON.parse(rawData || '[]');
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.post(`/api/startups`, async (req, res) => {
    try {
        const formData = req.body;

        const rawData = await fs.readFile('./newData.json', 'utf-8');
        const jsonData = JSON.parse(rawData || '[]');

        const lastRecord = jsonData.length > 0 ? jsonData[jsonData.length - 1] : null;
        const nextSNo = lastRecord ? lastRecord.SNo + 1 : 1;

        const newData = { SNo: nextSNo,...formData };
        jsonData.push(newData);

        await fs.writeFile('./newData.json', JSON.stringify(jsonData, null, 2), 'utf-8');

        res.status(201).json({ success: true, message: 'Form data added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


// app.post('/api/startups', (req, res) => {
//     try {
//         const formData = req.body;
//         fs.readFile('./newData.json', 'utf-8', (readErr, data) => {
//             if (readErr) {
//                 console.error(readErr);
//                 res.status(500).json({ success: false, message: 'Internal Server Error' });
//                 return;
//             }
//             const jsonData = JSON.parse(data || '[]');

//             const lastRecord = jsonData.length > 0 ? jsonData[jsonData.length - 1] : null;
//             const nextSNo = lastRecord ? lastRecord.SNo + 1 : 1;
//             const newData = { ...formData, SNo: nextSNo };
//             jsonData.push(newData);
//             fs.writeFile('./newData.json', JSON.stringify(jsonData, null, 2), 'utf-8', (writeErr) => {
//                 if (writeErr) {
//                     console.error(writeErr);
//                     res.status(500).json({ success: false, message: 'Internal Server Error' });
//                     return;
//                 }
//                 res.status(201).json({ success: true, message: 'Form data added successfully' });
//             });
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// });
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});