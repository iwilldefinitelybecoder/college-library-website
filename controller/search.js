import { Record } from "../schema/Record.js";

const search = (req, res) => {
    const bookname = req.query.bookname;
  
    // Create a regular expression pattern from the bookname
    const regexPattern = new RegExp(bookname, 'i');
  
    // Find records that match the bookname
    Record.find({ bookname: regexPattern })
      .then(records => {
        res.json(records);
      })
      .catch(error => {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
      });
  }
export default search