import { Record } from '../schema/Record.js';

const addRecord = (req, res) => {
    const bookName = req.body.bookName; 
    const authorName = req.body.authorName
    const imageUrl = req.body.imageUrl
    // Create a new record instance
    const newRecord = new Record({ bookname:bookName, author:authorName, image:imageUrl });
  
    // Save the new record to the database
    newRecord.save()
      .then(savedRecord => {
        res.json(savedRecord);
      })
      .catch(error => {
        res.status(500).send(error.message,'Internal Server Error');
      });
  }

export const deleteRecord = async (req,res)=>{
  const recordValues = req.body
  console.log(recordValues)
  try {
    
    await Record.findByIdAndDelete({_id:recordValues.ar})
    res.status(200).send('Records Deleted')

  } catch (error) {
    console.error('Error:', error);
        res.status(500).send(error.message,'Internal Server Error');
  }
}

  export default addRecord