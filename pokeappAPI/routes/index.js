var express = require('express');
var router = express.Router();

const CharacterAI = require("node_characterai");
const characterAI = new CharacterAI();

let authenticated = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  (async () => {
    await characterAI.authenticateAsGuest();
    return res.json("logged")
  }) 
}) 

router.post('/', function(req, res, next) {

  (async () => {
    // Authenticating as a guest (use `.authenticateWithToken()` to use an account)
    if (!authenticated) {
      await characterAI.authenticateAsGuest();
      authenticated = true;
    }
    // Place your character's id here
    const characterId = "5HfuqoXMBb2-mbtuJgVXSSGvFCEtDrwBk795jA5PHPA";
  
    const chat = await characterAI.createOrContinueChat(characterId);

    const message = req.body.message;
  
    // Send a message
    const response = await chat.sendAndAwaitResponse(message, true);
  
    console.log(response);
    // Use `response.text` to use it as a string
    return res.json(response);
  })();

});

module.exports = router;
