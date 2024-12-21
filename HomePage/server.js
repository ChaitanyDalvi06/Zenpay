const express = require('express');
const app = express();

// your middleware and routes...

app.listen(5175, () => {
  console.log('Server running on http://localhost:5175');
}); 