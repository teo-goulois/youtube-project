// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { log } from 'console';
import fs from 'fs'
import ytdl from "ytdl-core";

export default async function handler(req, res) {
    const { url, id } = req.query 

    if (req.method === 'GET') {
        const infos = await ytdl.getInfo(url)
        res.setHeader('Content-Disposition', `attachment; filename="${infos.videoDetails.title}.mp4"`);          
        ytdl(url).pipe(res)
    }

    if (req.method === 'POST') {
        // Process a POST request
    } 

   
}
  