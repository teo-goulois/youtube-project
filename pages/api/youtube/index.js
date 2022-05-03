// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ytsr from "ytsr";

export default async function handler(req, res) {
    const { q } = req.query
    if (req.method === 'GET') {
        const options = {
        pages: 1,
        }
        const filters1 = await ytsr.getFilters(q);
        const filter1 = filters1.get('Type').get('Video');
        const searchResults = await ytsr(filter1.url, options);
        console.log('searchresult find');
        res.status(200).json({ data: searchResults })
    }

    if (req.method === 'POST') {
        // Process a POST request
        const searchResults = req.body
        const secondResultBatch = await ytsr.continueReq(searchResults.continuation);    
    
        res.status(200).json({ data: secondResultBatch })
      } 

   
  }
  