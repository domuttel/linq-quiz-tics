function Game(){
  this.easy = 'tuba singer race candy student day jump hurt laundry blue sad old guitar athlete night knee wedding bat buy trash can freckle stream quiet mop swing radio square Monday school bus poem scared draw type short stairs asleep motorcycle lunch fog new straw push dirty girl helicopter playground tiger tornado lime leg salt ankle cake shoelace wheelchair goodbye worm eyebrow lion pear talk glasses shirt spoon box wind green wolf snow couch fix flashlight princess broken dictionary plate neighbor roller coaster bridge mailbox flower white sandcastle triangle thunder monster long lizard cafeteria music fire engine star cook tired slow outer space brave horse niece elephant tractor elevator light bulb broccoli cough heart calculator stick cat tree house watermelon chocolate bird nest fast hungry red frown chew pepper sick'
  this.medium = "taxi cab standing ovation alarm clock tool banana peel flagpole money wallet ballpoint pen sunburn wedding ring spy baby-sitter aunt acne bib puzzle piece pawn astronaut tennis shoes blue jeans twig outer space banister batteries doghouse campsite plumber bedbug throne tiptoe log mute pogo stick stoplight ceiling fan bedspread bite stove windmill nightmare stripe spring wristwatch eat matchstick gumball bobsled bonnet flock sprinkler living room laugh snuggle sneeze bud elf headache slam dunk Internet saddle ironing board bathroom scale kiss shopping cart shipwreck funny glide lamp candlestick grandfather rocket home movies seesaw rollerblades smog grill goblin coach claw cloud shelf recycle glue stick Christmas carolers front porch earache robot foil rib robe crumb paperback hurdle rattle fetch date iPod dance cello flute dock prize dollar puppet brass firefighter huddle easel pigpen bunk bed bowtie fiddle dentist baseboards letter opener photographer magic Old Spice monster"
  this.hard = 'whatever sip coop blur chime bleach clay blossom cog twitterpated wish through feudalism whiplash cot blueprint beanstalk think cardboard darts inn Zen sheriff tiptop dot bob hose blimp tuxedo reimbursement capitalism step-daughter applause jig jade blunt application rag squint intern brainstorm sling half pinch leak skating rink jog jamming shrink ray dent scoundrel escalator charger sequins flu scuff mast sash modern ginger clockwork mess mascot runt chain tissue suntan pomp scramble sentence cuff spool forever freight train diver fringe humidifier handwriting dawn dimple hedge plank race publisher fizz gem ditch wool plaid fancy ebony ivory feast billboard flush inconceivable tide midsummer population elm organ flannel hatch booth'
  this.user = null;
  this.quiz = null;
  this.question = null;
  this.langFrom = null;  // PJ
  this.langTo = null; // PJ
}

Game.prototype.getWord = function(difficulty,array){
  if(difficulty === 'Easy'){
    var words = this.easy.split(' ');
  }else if(difficulty === 'Medium'){
    var words = this.medium.split(' ');
  }else {
    var words = this.hard.split(' ');
  }
  if(array){ return words }
  var index = Math.floor(Math.random() * words.length);
  return words.splice(index, 1);
};
Game.prototype.init = function () {
  var name = $('#name-input').val();
  var langFrom = $('#lang-from').val();
  var LangTo = $('#lang-to').val();
  this.langFrom = langFrom;
  this.langTo = langTo;
  this.user = new User(name);
};

Game.prototype.setUser = function(){
  var nameInput = $('#name-input').val();
  var nameSelect = $('#name-select').prop("selected");
  if ($('#name-input').val().length > 0) {
    this.user = nameInput;
  }
  else if($('#name-select').prop("selected") !== "Select Name"){
    this.user = nameSelect;
  }
  else {
    alert("Please select a user or create a new account.");
    //refire modal or deny submit
  }
}

Game.prototype.renderQuestion = function (word) {
  $('#question-word').html(word);
};

Game.prototype.renderResults= function(results){
    $('#questions-answered').html(results.questionsAnswered);
    $('#questions-correct').html(results.questionsCorrect);
    $('#questions-incorrect').html(results.questionsIncorrect);
    $('#questions-remaining').html(results.questionsRemaining);
};

Game.prototype.renderFail = function () {
    $('#start-screen').show();
    $('#message').html("Sorry, you f'ed up!");
};

Game.prototype.resetChallenges = function () {
  var suddenDeathInfo =
    '<div class="row">\
        <div class="col-lg-8 col-lg-offset-2">\
            <div class="modal-body">\
              <div>\
                <h2>Sudden Death</h2>\
                <hr class="star-primary">\
                <img src="img/portfolio/cabin.png" class="img-responsive img-centered" alt="">\
                <p>Think you can handle the pressure? One wrong word and it\'s game-over.</p>\
                <button id="start-sudden-death" type="button" class="btn btn-default challenge-btn" ><i class="fa fa-times"></i> Start</button>\
              </div>\
            </div>\
        </div>\
    </div>';
  var rapidFireInfo =
  '<div class="row">\
      <div class="col-lg-8 col-lg-offset-2">\
          <div class="modal-body">\
              <h2>Coming Soon: Rapid Fire</h2>\
              <hr class="star-primary">\
              <img src="img/portfolio/game.png" class="img-responsive img-centered" alt="">\
              <p>You\'ve got 10 minutes to prove you know the lingo gringo. What do you say?</p>\
              <button id="start-rapid-fire" type="button" class="btn btn-default challenge-btn"><i class="fa fa-times"></i> Close</button>\
          </div>\
      </div>\
  </div>';
  var twentyQuestionsInfo =
  '<div class="row">\
      <div class="col-lg-8 col-lg-offset-2">\
          <div class="modal-body">\
              <h2>Coming Soon: 20 Questions</h2>\
              <hr class="star-primary">\
              <img src="img/portfolio/cake.png" class="img-responsive img-centered" alt="">\
              <p>20 questions to talk the talk. Get 5 wrong and you walk.</p>\
              <button id="start-twenty-questions" type="button" class="btn btn-default challenge-btn"><i class="fa fa-times"></i> Close</button>\
          </div>\
      </div>\
  </div>';
  $('#sudden-death-content').html(suddenDeathInfo);
  $('#rapid-fire-content').html(rapidFireInfo);
  $('#twenty-questions-content').html(twentyQuestionsInfo);

};
